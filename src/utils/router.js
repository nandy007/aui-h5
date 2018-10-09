var _action = {
    back: function(pageInfo){
        history.go(-1);
    }
};

function Router() {
    this.indexInfo = null;
    this._routers = [];
    this._history = [];
    this.transitionAnims = {//形如：[[currentOut,targetIn],[currentOut,targetIn]]
        empty: [['empty', 'empty'], ['empty', 'empty']],
        slide: [['slideLeftOut', 'slideLeftIn'], ['slideRightOut', 'slideRightIn']],
        cover: [['', 'slideLeftIn'], ['slideRightOut', '']],
        slideUp: [['', 'slideUpIn'], ['slideDownOut', '']],
        slideDown: [['', 'slideDownIn'], ['slideUpOut', '']],
        popup: [['', 'scaleIn'], ['scaleOut', '']],
        flip: [['slideLeftOut', 'flipOut'], ['slideRightOut', 'flipIn']]
    };
    this.initHandler();
}

Router.prototype = {
    initHandler: function () {
        this._handler = {};
        var action = _action;
        this.addHandler(action);
    },
    addTransitionAnim: function (k, arr) {
        this.transitionAnims[k] = arr;
    },
    setPage: function(el){
        if (this._$page === el) return;
        this._$page = el;
        if (el) this.go(el.getAttribute('page'));
    },
    getPage: function(){
        return this._$page || document.querySelector('aui-page');
    },
    reset: function () {
        this.indexInfo = this._$page = null;
        this._routers = [];
        this._history = [];
        this.initHandler();
    },
    _initEvent: function(){
        if(this.isInit) return;
        window.addEventListener('hashchange', hashHandler, false);
        this.isInit = true;
    },
    add: function () {
        this._initEvent();
        var _routers = this._routers;
        if (arguments.length === 1) {
            var rules = arguments[0];
            if (rules instanceof Array) {
                _routers.push.apply(_routers, rules);
            } else if (typeof rules === 'object') {
                _routers.push(rules);
            }
        } else if (arguments.length === 2) {
            arguments[1].path = arguments[1];
            _routers.push(arguments[1]);
        }
    },
    _unescape: function(v){
        v = v||'';
        try{
            return unescape(v);
        }catch(e){
            return v;
        }
    },
    _escape: function(v){
        v = v||'';
        try{
            return escape(v);
        }catch(e){
            return v;
        }
    },
    getQueryObj: function (pagePath) {
        if(!pagePath){
            pagePath = location.hash.replace('#', '');
        }
        var query = pagePath.split('?')[1] || '';
        var seg = query.split('&');
        var obj = {};
        for (var i = 0; i < seg.length; i++) {
            var s = seg[i].split('=');
            obj[s[0]] = this._unescape(s[1]);
        }
        return obj;
    },
    getQueryStr: function(obj){
        var ps = [];
        obj = obj || {};
        for(var k in obj){
            var v = obj[k];
            if(v===null || v==='' || v===undefined){
                continue;
            }else if(v instanceof Array){
                ps.push(k+'='+this._escape(v.join(',')));
            }else{
                ps.push(k+'='+this._escape(v));
            }
        }
        return ps.join('&');
    },
    _dispatchEvent: function ($el, evtName) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(evtName, false, false);
        $el.dispatchEvent(evt);
    },
    _trigger: function ($show, $hide) {
        $show && $($show).trigger('enter');
        $hide && $($hide).trigger('leave');
    },
    _afterAnim: function ($page, $target, $cur) {
        this._trigger($target, $cur);
        if ($cur) {
            if ($cur.isCache) {
                $($cur).removeClass('active');
            } else {
                $page.removeChild($cur);
            }
        }
        $($target).addClass('active');
    },
    _getDeepRules: function(pagePath, routers, paths, deep, noState){
        for (var i = 0, len = routers.length; i < len; i++) {
            var curRule;
            var rule = paths[deep] = routers[i], 
                rulePath = rule.path, 
                ruleChidlren = rule.children || [];
            if (typeof rulePath === 'string') {
                if (pagePath === rulePath) {
                    curRule = rule;
                }
            } else {
                if (rulePath.test(pagePath)) {
                    curRule = rule;
                }
            }
            if(curRule){
                if(typeof curRule.redirect==='string'){
                    var directPath = curRule.redirect;
                    var direactPageRules = this._getPageRules(directPath, noState);
                    if(!direactPageRules || direactPageRules.length===0) return false;
                    paths.splice.apply(paths, [deep, 1].concat(direactPageRules));
                    deep = paths.length;
                }
                paths.splice(deep+1);
                return true;
            }else if(ruleChidlren.length > 0){
                var rs = this._getDeepRules(pagePath, ruleChidlren, paths, deep+1, noState);
                if(rs) return true;
            }
        }
        return false;
    },
    _getPageRules: function(fullPath, noState){
        var pageRules = [];
        if(!this._getDeepRules((''||fullPath).split('?')[0], this._routers, pageRules, 0, noState)) {
            console.log('尚未为 ' + fullPath + ' 配置路由');
            return;
        }
        return pageRules;
    },
    doRouter: function(pageInfo, noState){
        var fullPath = pageInfo.path, pageRules = this._getPageRules(fullPath, noState);

        if(!pageRules) return;

        var $root = document.querySelector('aui-page'), _this = this;

        var query = _this.getQueryObj(fullPath);

        var handler = function($page){

            if(pageRules.length===0) return;

            var curRule = pageRules.shift(), pagePath = curRule.path.toString(), nextPage = curRule.nextPage;

            var Component;

            if(typeof curRule.redirect==='function'){
                Component = curRule.redirect(query);
                if(Component===false) return;
            }else{
                Component = curRule.component.default || curRule.component;
            }

            var rulesLength = pageRules.length;

            var transPage = {
                fullPath: fullPath,
                pagePath: pagePath,
                isForce: pageInfo.isForce,
                nextPage: nextPage
            };
            _this._doTransition(transPage, $page, Component, curRule, rulesLength===0, noState);

            if(rulesLength===0) {
                $root.component.on(null);
                var $near = (nextPage&&$(nextPage)[0]) || ($page&&$page.querySelector('aui-page'));
                if($near) $near.innerHTML = '';
            }
        };

        this._add2History(pageInfo, noState);

        $root.component.on(handler);

        handler($root);

    },
    _add2History: function (pageInfo, noState) {
        if(noState){
            window.history.replaceState(pageInfo, '', '#'+pageInfo.path);
        }else{
            window.history.pushState(pageInfo, '', '#'+pageInfo.path);
        }
    },
    _doTransition: function(transPage, $parent, Component, curRule, isLast, noState){
        var fullPath = transPage.fullPath, 
            transitionObj = this._getTransition($parent, transPage, Component, curRule, isLast),
            $target = transitionObj.$target, $cur = transitionObj.$cur,
            transition = $parent.getAttribute('transition'), isTansition = transition&&isLast;
        var _this = this;
        
        if(isTansition){
            var noHistoryState = noState;
            if (noState && (this._history.length < 2 || (this._history[1].path !== fullPath))) {
                noHistoryState = false;
            }
            if (noHistoryState) {
                this._history.shift();
            } else {
                this._history.unshift({path:fullPath});
            }
            if(!$cur) return _this._afterAnim($parent, $target, $cur);
            var anims = this.transitionAnims[transition], 
            animIn = noHistoryState ? anims[1][1] : anims[0][1], animOut = noHistoryState ? anims[1][0] : anims[0][0];

            // $cur.className = ['anim', animOut].join(' ');
            // $target.className = ['anim', animIn].join(' ');
            this.setAnim($cur, $target, animOut, animIn);

            setTimeout(function () {
                _this._afterAnim($parent, $target, $cur);
            }, 300);
        }else{
            _this._afterAnim($parent, $target, $cur);
        }
    },
    setAnim: function($cur, $target, animOut, animIn){
        var curAnim = ['anim', animOut].join(' '), targetAnim = ['anim', animIn].join(' ');
        var curClass = $cur.className.replace(/[ ]?anim [^ ]+/g, '') + ' ' + curAnim, targetClass = $target.className.replace(/[ ]?anim [^ ]+/g, '') + ' ' + targetAnim;
        $cur.className = curClass;
        $target.className = targetClass;
    },
    _getHashQueryStr: function(fullPath){
        var hash = fullPath || location.hash || '', hashs = hash.split('?');
        if(hashs.length>1) return '?'+hashs[1];
        return '';
    },
    _getTransition: function($parent, transPage, Component, curRule, isLast){
        var $target, $cur,
            $children = $parent.childNodes, isCache = !!curRule.cache;

        var fullPath = transPage.fullPath, pagePath = transPage.pagePath, isForce = transPage.isForce, nextPage = transPage.nextPage;

        if(isLast) pagePath = fullPath;

        for(var i=0, len=$children.length;i<len;i++){
            var $child = $children[i];
            if(!isLast && $child.pagePath){
                $child.pagePath = $child.pagePath.split('?')[0];
            }
            if($child.pagePath===pagePath){
                $target = $child;
            }else if($($child).hasClass('active')){
                $cur = $child;
            }
        }

        if(isLast&&isForce&&$target){
            $($target).remove();
            $target = null;
        }
        
        if($target){
            var $page = (nextPage&&$(nextPage)[0]) || $target.querySelector('aui-page');
            if($page && !isLast) $page.component.doStrigger();
        }else{
            if(Component.tag){
                $target = document.createElement('aui-' + Component.tag);
            }else if(typeof Component === 'string'){
                var outer = document.createElement('div');
                outer.innerHTML = Component;
                $target = outer.childNodes[0];
            }else if(Component instanceof HTMLElement){
                $target = Component;
            }else{
                try{
                    $target = Component[0];
                }catch(e){
                    console.log('找不到组件');
                }
            }
            if(!$target) return;
            $target.pagePath = pagePath;
            if(isCache) $target.isCache = true;
            $parent.appendChild($target);
            var $page = nextPage && $(nextPage)[0];
            if($page && !isLast) $page.component.doStrigger();
        }

        return {$target:$target, $cur: $cur};
    },
    formatePageInfo: function (pageStr) {
        if (!pageStr) return;
        if (typeof pageStr === 'object') return pageStr;
        try {
            var obj = (new Function('return ' + pageStr + ';'))();
            if(obj instanceof RegExp) throw new Error('');
            return obj;
        } catch (e) {
            return { path: pageStr };
        }
    },
    addHandler: function (obj) {
        for (var k in obj) {
            this._handler[k] = obj[k];
        }
    },
    getHandler: function (k) {
        return this._handler[k];
    },
    go: function (pageStr, noState) {
        pageStr = pageStr || '/';
        var pageInfo = this.formatePageInfo(pageStr);
        if (!pageInfo) return;
        if (pageInfo.path) {
            if(typeof noState==='undefined' && ('#'+pageInfo.path)===location.hash) noState = true;
            this.doRouter(pageInfo, noState);
        } else if (pageInfo.action) {
            var handler = this.getHandler(pageInfo.action);
            handler && handler.call(this, pageInfo);
        }
    }
};

var router = new Router();

function hashHandler() {
    var hash = location.hash || '/', query = hash.replace('#', '');
    router.go(query, true);
}


module.exports = router;
