/* eslint-disable */
(function(F73, M73) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = M73() : typeof define === 'function' && define.amd ? define(M73) : F73.mobiscroll = M73();
}(this, function() {
    function y23(I0C) {
        return typeof I0C === "function";
    }

    function M83(L0C) {
        return (typeof L0C === 'undefined' ? 'undefined' : q23(L0C)) === "object";
    }

    function t6C(W0C) {
        return typeof W0C.length == 'number';
    }

    function R6C(n0C) {
        return n0C.replace(/-+(.)?/g, function(B0C, g0C) {
            return g0C ? g0C.toUpperCase() : '';
        });
    }

    function I6C(u0C, P0C, R0C) {
        for (var y0C in P0C) {
            if (R0C && (w73.isPlainObject(P0C[y0C]) || w73.isArray(P0C[y0C]))) {
                if (w73.isPlainObject(P0C[y0C]) && !w73.isPlainObject(u0C[y0C]) || w73.isArray(P0C[y0C]) && !w73.isArray(u0C[y0C])) {
                    u0C[y0C] = {};
                }
                I6C(u0C[y0C], P0C[y0C], R0C);
            } else if (P0C[y0C] !== undefined) {
                u0C[y0C] = P0C[y0C];
            }
        }
    }

    function x23(K0C) {
        return K0C.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    }

    function k5C(O0C, k0C) {
        return typeof k0C == "number" && !U5C[x23(O0C)] ? k0C + "px" : k0C;
    }

    function K5C() {
        B83++;
        setTimeout(function() {
            B83--;
        }, 500);
    }

    function y83(I8C, L8C, W8C) {
        var X8C = I8C.originalEvent || I8C,
            f8C = (W8C ? 'page' : 'client') + L8C;
        if (X8C.targetTouches && X8C.targetTouches[0]) {
            return X8C.targetTouches[0][f8C];
        }
        if (X8C.changedTouches && X8C.changedTouches[0]) {
            return X8C.changedTouches[0][f8C];
        }
        return I8C[f8C];
    }

    function b5C(y8C, a8C, u8C, T8C, g8C, r8C) {
        function i8C(N8C) {
            if (!n8C) {
                if (T8C) {
                    N8C.preventDefault();
                }
                n8C = this;
                R8C = y83(N8C, 'X');
                K8C = y83(N8C, 'Y');
                B8C = false;
                k8C = new Date();
            }
        }

        function E8C(q8C) {
            if (n8C && !B8C && (Math.abs(y83(q8C, 'X') - R8C) > g8C || Math.abs(y83(q8C, 'Y') - K8C) > g8C)) {
                B8C = true;
            }
        }

        function C8C(U8C) {
            if (n8C) {
                if (r8C && new Date() - k8C < 100 || !B8C) {
                    U8C.preventDefault();
                    u8C.call(n8C, U8C, y8C);
                }
                n8C = false;
                K5C();
            }
        }

        function t8C() {
            n8C = false;
        }
        var R8C, K8C, n8C, B8C, k8C, O8C = j73.$,
            P8C = O8C(a8C);
        g8C = g8C || 9;
        if (y8C.settings.tap) {
            P8C.on('touchstart.mbsc', i8C).on('touchcancel.mbsc', t8C).on('touchmove.mbsc', E8C).on('touchend.mbsc', C8C);
        }
        P8C.on('click.mbsc', function(Z8C) {
            Z8C.preventDefault();
            u8C.call(this, Z8C, y8C);
        });
    }

    function G6C(d8C) {
        if (B83 && !d8C.tap && !(d8C.target.nodeName == 'TEXTAREA' && d8C.type == 'mousedown')) {
            d8C.stopPropagation();
            d8C.preventDefault();
            return false;
        }
    }

    function R5C(E6v, C6v, N6v, i6v, q6v, U6v, Z6v) {
        var a6v = new Date(E6v, C6v, N6v, i6v || 0, q6v || 0, U6v || 0, Z6v || 0);
        if (a6v.getHours() == 23 && (i6v || 0) === 0) {
            a6v.setHours(a6v.getHours() + 2);
        }
        return a6v;
    }

    function P5C(X4w, I4w) {
        var z0w = {},
            l0w = X4w.parent(),
            f4w = l0w.find('.mbsc-err-msg'),
            L4w = X4w.attr('data-icon-align') || 'left',
            A4w = X4w.attr('data-icon');
        if (l0w.hasClass(r83)) {
            l0w = l0w.parent();
        } else {
            x73('<span class="' + r83 + '"></span>').insertAfter(X4w).append(X4w);
        }
        if (f4w) {
            l0w.find('.' + r83).append(f4w);
        }
        if (A4w) {
            if (A4w.indexOf('{') !== -1) {
                z0w = JSON.parse(A4w);
            } else {
                z0w[L4w] = A4w;
            }
        }
        if (A4w || I4w) {
            Q73(z0w, I4w);
            l0w.addClass((z0w.right ? 'mbsc-ic-right ' : '') + (z0w.left ? ' mbsc-ic-left' : '')).find('.' + r83).append(z0w.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + z0w.left + '"></span>' : '').append(z0w.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + z0w.right + '"></span>' : '');
        }
    }

    function h6C(u4w, R4w, W4w) {
        var y4w = {},
            n4w = W4w[0],
            P4w = W4w.attr('data-password-toggle'),
            g4w = W4w.attr('data-icon-show') || 'eye',
            B4w = W4w.attr('data-icon-hide') || 'eye-blocked';
        if (P4w) {
            y4w.right = n4w.type == 'password' ? g4w : B4w;
        }
        P5C(W4w, y4w);
        if (P4w) {
            b5C(u4w, R4w.find('.mbsc-right-ic').addClass('mbsc-input-toggle'), function() {
                if (n4w.type == "text") {
                    n4w.type = "password";
                    x73(this).addClass('mbsc-ic-' + g4w).removeClass('mbsc-ic-' + B4w);
                } else {
                    n4w.type = "text";
                    x73(this).removeClass('mbsc-ic-' + g4w).addClass('mbsc-ic-' + B4w);
                }
            });
        }
    }

    function t5C(k4w, K4w) {
        if (K4w != 'button' && K4w != 'submit' && K4w != 'segmented') {
            k4w.addClass('mbsc-control-w').find('label').addClass('mbsc-label');
            k4w.contents().filter(function() {
                return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
            }).each(function() {
                x73('<span class="mbsc-label"></span>').insertAfter(this).append(this);
            });
        }
    }

    function Z83(d7w) {
        var Z7w = [Math.round(d7w.r).toString(16), Math.round(d7w.g).toString(16), Math.round(d7w.b).toString(16)];
        x73.each(Z7w, function(V7w, o7w) {
            if (o7w.length == 1) {
                Z7w[V7w] = '0' + o7w;
            }
        });
        return '#' + Z7w.join('');
    }

    function d83(h7w) {
        h7w = parseInt(h7w.indexOf('#') > -1 ? h7w.substring(1) : h7w, 16);
        return {
            r: h7w >> 16,
            g: (h7w & 0x00FF00) >> 8,
            b: h7w & 0x0000FF,
            toString: function G7w() {
                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
            }
        };
    }

    function Q5C(H7w) {
        var e7w, c7w, Y7w, m7w = H7w.h,
            b7w = H7w.s * 255 / 100,
            v7w = H7w.v * 255 / 100;
        if (b7w === 0) {
            e7w = c7w = Y7w = v7w;
        } else {
            var p7w = v7w,
                S7w = (255 - b7w) * v7w / 255,
                J7w = (p7w - S7w) * (m7w % 60) / 60;
            if (m7w == 360) {
                m7w = 0;
            }
            if (m7w < 60) {
                e7w = p7w;
                Y7w = S7w;
                c7w = S7w + J7w;
            } else if (m7w < 120) {
                c7w = p7w;
                Y7w = S7w;
                e7w = p7w - J7w;
            } else if (m7w < 180) {
                c7w = p7w;
                e7w = S7w;
                Y7w = S7w + J7w;
            } else if (m7w < 240) {
                Y7w = p7w;
                e7w = S7w;
                c7w = p7w - J7w;
            } else if (m7w < 300) {
                Y7w = p7w;
                c7w = S7w;
                e7w = S7w + J7w;
            } else if (m7w < 360) {
                e7w = p7w;
                c7w = S7w;
                Y7w = p7w - J7w;
            } else {
                e7w = c7w = Y7w = 0;
            }
        }
        return {
            r: e7w,
            g: c7w,
            b: Y7w,
            toString: function D7w() {
                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
            }
        };
    }

    function s5C(M7w) {
        var F7w = 0,
            Q7w, w7w, s7w = Math.min(M7w.r, M7w.g, M7w.b),
            x7w = Math.max(M7w.r, M7w.g, M7w.b),
            j7w = x7w - s7w;
        w7w = x7w;
        Q7w = x7w ? 255 * j7w / x7w : 0;
        if (Q7w) {
            if (M7w.r == x7w) {
                F7w = (M7w.g - M7w.b) / j7w;
            } else if (M7w.g == x7w) {
                F7w = 2 + (M7w.b - M7w.r) / j7w;
            } else {
                F7w = 4 + (M7w.r - M7w.g) / j7w;
            }
        } else {
            F7w = -1;
        }
        F7w *= 60;
        if (F7w < 0) {
            F7w += 360;
        }
        Q7w *= 100 / 255;
        w7w *= 100 / 255;
        return {
            h: F7w,
            s: Q7w,
            v: w7w,
            toString: function z7w() {
                return 'hsv(' + Math.round(this.h) + ',' + Math.round(this.s) + '%,' + Math.round(this.v) + '%)';
            }
        };
    }

    function u6C(g2w) {
        var I2w = g2w.r / 255,
            A2w = g2w.g / 255,
            X2w = g2w.b / 255,
            l7w = Math.max(I2w, A2w, X2w),
            W2w = Math.min(I2w, A2w, X2w),
            n2w = (l7w + W2w) / 2,
            L2w, B2w;
        if (l7w == W2w) {
            L2w = B2w = 0;
        } else {
            var f2w = l7w - W2w;
            B2w = n2w > 0.5 ? f2w / (2 - l7w - W2w) : f2w / (l7w + W2w);
            switch (l7w) {
                case I2w:
                    L2w = (A2w - X2w) / f2w + (A2w < X2w ? 6 : 0);
                    break;
                case A2w:
                    L2w = (X2w - I2w) / f2w + 2;
                    break;
                case X2w:
                    L2w = (I2w - A2w) / f2w + 4;
                    break;
            }
            L2w /= 6;
        }
        return {
            h: Math.round(L2w * 360),
            s: Math.round(B2w * 100),
            l: Math.round(n2w * 100),
            toString: function y2w() {
                return 'hsl(' + this.h + ',' + this.s + '%,' + this.l + '%)';
            }
        };
    }

    function V6C(a2w) {
        var K2w, k2w, O2w, T2w, u2w, r2w, P2w = a2w.h,
            t2w = a2w.s,
            R2w = a2w.l;
        if (!isFinite(P2w)) {
            P2w = 0;
        }
        if (!isFinite(t2w)) {
            t2w = 0;
        }
        if (!isFinite(R2w)) {
            R2w = 0;
        }
        P2w /= 60;
        if (P2w < 0) {
            P2w = 6 - -P2w % 6;
        }
        P2w %= 6;
        t2w = Math.max(0, Math.min(1, t2w / 100));
        R2w = Math.max(0, Math.min(1, R2w / 100));
        u2w = (1 - Math.abs(2 * R2w - 1)) * t2w;
        r2w = u2w * (1 - Math.abs(P2w % 2 - 1));
        if (P2w < 1) {
            K2w = u2w;
            k2w = r2w;
            O2w = 0;
        } else if (P2w < 2) {
            K2w = r2w;
            k2w = u2w;
            O2w = 0;
        } else if (P2w < 3) {
            K2w = 0;
            k2w = u2w;
            O2w = r2w;
        } else if (P2w < 4) {
            K2w = 0;
            k2w = r2w;
            O2w = u2w;
        } else if (P2w < 5) {
            K2w = r2w;
            k2w = 0;
            O2w = u2w;
        } else {
            K2w = u2w;
            k2w = 0;
            O2w = r2w;
        }
        T2w = R2w - u2w / 2;
        return {
            r: Math.round((K2w + T2w) * 255),
            g: Math.round((k2w + T2w) * 255),
            b: Math.round((O2w + T2w) * 255),
            toString: function i2w() {
                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
            }
        };
    }

    function a6C(E2w) {
        return u6C(d83(E2w));
    }

    function o6C(C2w) {
        return Z83(V6C(C2w));
    }

    function z1C(N2w) {
        return Z83(Q5C(N2w));
    }

    function l1C(q2w) {
        return s5C(d83(q2w));
    }

    function O1C(V0c) {
        if (!B23.length) {
            V0c.show();
        }
        B23.push(V0c);
    }

    function d6C(h0c) {
        var G0c = E23.length;
        E23.push(h0c);
        if (!B23.length) {
            if (G0c) {
                E23[0].hide();
            } else {
                h0c.show(false, true);
            }
        }
    }

    function t83(m0c, S0c, p0c, e0c) {
        return Q73({
            display: S0c.display || 'center',
            cssClass: 'mbsc-alert',
            okText: S0c.okText,
            cancelText: S0c.cancelText,
            context: S0c.context,
            theme: S0c.theme,
            closeOnOverlayTap: false,
            onBeforeClose: function c0c() {
                m0c.shift();
            },
            onBeforeShow: function Y0c() {
                j73.activeInstance = null;
            },
            onHide: function J0c(b0c, v0c) {
                if (p0c) {
                    p0c(v0c._resolve);
                }
                if (S0c.callback) {
                    S0c.callback(v0c._resolve);
                }
                if (v0c) {
                    v0c.destroy();
                }
                if (B23.length) {
                    B23[0].show();
                } else if (E23.length) {
                    E23[0].show(false, true);
                }
            }
        }, e0c);
    }

    function j1C(H0c) {
        return (H0c.title ? '<h2>' + H0c.title + '</h2>' : '') + '<p>' + (H0c.message || '') + '</p>';
    }

    function i6C(M0c, F0c, x0c) {
        var D0c = new T23(M0c, t83(B23, F0c, x0c));
        O1C(D0c);
    }

    function U6C(Q0c, w0c, s0c) {
        var j0c = new T23(Q0c, t83(B23, w0c, s0c, {
            buttons: ['ok', 'cancel'],
            onSet: function z0c() {
                j0c._resolve = true;
            }
        }));
        j0c._resolve = false;
        O1C(j0c);
    }

    function q6C(X4c, f4c, I4c) {
        var A4c = void 0;
        var l0c = new T23(X4c, t83(B23, f4c, I4c, {
            buttons: ['ok', 'cancel'],
            onShow: function L4c() {
                A4c = l0c._markup.find('input')[0];
                setTimeout(function() {
                    A4c.focus();
                }, 300);
            },
            onSet: function W4c() {
                l0c._resolve = A4c.value;
            }
        }));
        l0c._resolve = '';
        O1C(l0c);
    }

    function V5C(y4c, n4c, P4c, u4c, R4c) {
        var g4c = void 0;
        var B4c = new T23(y4c, t83(E23, n4c, P4c, {
            display: 'bottom',
            animate: R4c,
            cssClass: u4c || 'mbsc-snackbar',
            scrollLock: false,
            focusTrap: false,
            buttons: [],
            onShow: function K4c(O4c, k4c) {
                if (n4c.duration !== false) {
                    g4c = setTimeout(function() {
                        if (k4c) {
                            k4c.hide();
                        }
                    }, n4c.duration || 3000);
                }
                if (n4c.button) {
                    k4c.tap(x73('.mbsc-snackbar-btn', O4c.target), function() {
                        k4c.hide();
                        if (n4c.button.action) {
                            n4c.button.action.call(this);
                        }
                    });
                }
            },
            onClose: function r4c() {
                clearTimeout(g4c);
            }
        }));
        d6C(B4c);
    }

    function N6C(t4c, T4c, a4c) {
        V5C(t4c, T4c, a4c, 'mbsc-toast', 'fade');
    }

    function g83(E4c, C4c, N4c) {
        var i4c = void 0;
        if (r5C) {
            i4c = new Promise(function(q4c) {
                E4c(C4c, N4c, q4c);
            });
        } else {
            E4c(C4c, N4c);
        }
        return i4c;
    }

    function F5C(e4c) {
        var J4c = e4c[0];
        var c4c = e4c.attr('data-role');
        var Y4c = e4c.attr('type') || J4c.nodeName.toLowerCase();
        if (/(switch|range|segmented|stepper)/.test(c4c)) {
            Y4c = c4c;
        }
        return Y4c;
    }

    function i5C(b4c) {
        var v4c = j73.themes.form[b4c];
        return v4c && v4c.addRipple ? v4c : null;
    }

    function T6C() {
        clearTimeout(f1C);
        f1C = setTimeout(function() {
            x73('textarea.mbsc-control').each(function() {
                I1C(this);
            });
        }, 100);
    }

    function I1C(I9c) {
        var L9c = void 0,
            W9c = void 0,
            n9c = void 0,
            g9c = x73(I9c).attr('rows') || 6;
        if (I9c.offsetHeight) {
            I9c.style.height = '';
            n9c = I9c.scrollHeight - I9c.offsetHeight;
            L9c = I9c.offsetHeight + (n9c > 0 ? n9c : 0);
            W9c = Math.round(L9c / 24);
            if (W9c > g9c) {
                I9c.scrollTop = L9c;
                L9c = 24 * g9c + (L9c - W9c * 24);
                x73(I9c).addClass('mbsc-textarea-scroll');
            } else {
                x73(I9c).removeClass('mbsc-textarea-scroll');
            }
            if (L9c) {
                I9c.style.height = L9c + 'px';
            }
        }
    }

    function C6C(B9c) {
        var y9c = x73(B9c);
        if (!y9c.hasClass('mbsc-textarea-scroll')) {
            var P9c = B9c.scrollHeight - B9c.offsetHeight,
                u9c = B9c.offsetHeight + P9c;
            B9c.scrollTop = 0;
            B9c.style.height = u9c + 'px';
        }
    }

    function J1C(J3V) {
        var e3V = 0,
            c3V = 1,
            Y3V = 0;
        while (J3V.length) {
            if (e3V > 3) {
                c3V = 60 * 60;
            } else if (e3V > 1) {
                c3V = 60;
            }
            Y3V = Y3V + J3V.pop() * c3V * (e3V % 2 ? 10 : 1);
            e3V++;
        }
        return Y3V;
    }

    function Z6C(D1K, M1K) {
        var b1K = document.createElement('script'),
            H1K = 'mbscjsonp' + ++B6C;
        window[H1K] = function(F1K) {
            b1K.parentNode.removeChild(b1K);
            delete window[H1K];
            if (!F1K) {
                return;
            }
            M1K(F1K);
        };
        b1K.src = D1K + (D1K.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + H1K;
        document.body.appendChild(b1K);
    }

    function E6C(j1K, Q1K) {
        var x1K = new XMLHttpRequest();
        x1K.open('GET', j1K, true);
        x1K.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                Q1K(JSON.parse(this.response));
            }
        };
        x1K.onerror = function() {};
        x1K.send();
    }

    function M1C(w1K, s1K, z1K) {
        if (z1K == 'jsonp') {
            Z6C(w1K, s1K);
        } else {
            E6C(w1K, s1K);
        }
    }

    function H1C(n2K, u2K) {
        var g2K = a23(u2K, 'X', true),
            B2K = a23(u2K, 'Y', true),
            L2K = n2K.offset(),
            y2K = g2K - L2K.left,
            P2K = B2K - L2K.top,
            R2K = Math.max(y2K, n2K[0].offsetWidth - y2K),
            K2K = Math.max(P2K, n2K[0].offsetHeight - P2K),
            W2K = 2 * Math.sqrt(Math.pow(R2K, 2) + Math.pow(K2K, 2));
        f83(N23);
        N23 = x73('<span class="mbsc-ripple"></span>').css({
            width: W2K,
            height: W2K,
            top: B2K - L2K.top - W2K / 2,
            left: g2K - L2K.left - W2K / 2
        }).appendTo(n2K);
        setTimeout(function() {
            N23.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
        }, 10);
    }

    function f83(k2K) {
        setTimeout(function() {
            if (k2K) {
                k2K.removeClass('mbsc-ripple-visible');
                setTimeout(function() {
                    k2K.remove();
                }, 2000);
            }
        }, 100);
    }

    function G5C(T2K, O2K, a2K, i2K) {
        var r2K, t2K;
        T2K.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', O2K, function(E2K) {
            if (Q1C(E2K, this)) {
                r2K = a23(E2K, 'X');
                t2K = a23(E2K, 'Y');
                g23 = x73(this);
                if (!g23.hasClass(a2K) && !g23.hasClass(i2K)) {
                    H1C(g23, E2K);
                } else {
                    g23 = null;
                }
            }
        }).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', O2K, function(C2K) {
            if (g23 && Math.abs(a23(C2K, 'X') - r2K) > 9 || Math.abs(a23(C2K, 'Y') - t2K) > 9) {
                f83(N23);
                g23 = null;
            }
        }).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', O2K, function() {
            if (g23) {
                setTimeout(function() {
                    f83(N23);
                }, 100);
                g23 = null;
            }
        });
    }
    var j73 = j73 || {};
    var q23 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(S6C) {
        return typeof S6C;
    } : function(p6C) {
        return p6C && typeof Symbol === "function" && p6C.constructor === Symbol && p6C !== Symbol.prototype ? "symbol" : typeof p6C;
    };
    var P23 = function(m6C, e6C) {
        if (!(m6C instanceof e6C)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };
    var u83 = function() {
        function c6C(b6C, v6C) {
            for (var J6C = 0; J6C < v6C.length; J6C++) {
                var Y6C = v6C[J6C];
                Y6C.enumerable = Y6C.enumerable || false;
                Y6C.configurable = true;
                if ("value" in Y6C) Y6C.writable = true;
                Object.defineProperty(b6C, Y6C.key, Y6C);
            }
        }
        return function(H6C, D6C, M6C) {
            if (D6C) c6C(H6C.prototype, D6C);
            if (M6C) c6C(H6C, M6C);
            return H6C;
        };
    }();
    var m23 = function F6C(j6C, s6C, z6C) {
        if (j6C === null) j6C = Function.prototype;
        var x6C = Object.getOwnPropertyDescriptor(j6C, s6C);
        if (x6C === undefined) {
            var Q6C = Object.getPrototypeOf(j6C);
            if (Q6C === null) {
                return undefined;
            } else {
                return F6C(Q6C, s6C, z6C);
            }
        } else if ("value" in x6C) {
            return x6C.value;
        } else {
            var w6C = x6C.get;
            if (w6C === undefined) {
                return undefined;
            }
            return w6C.call(z6C);
        }
    };
    var R23 = function(A0C, l6C) {
        if (typeof l6C !== "function" && l6C !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof l6C);
        }
        A0C.prototype = Object.create(l6C && l6C.prototype, {
            constructor: {
                value: A0C,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (l6C) Object.setPrototypeOf ? Object.setPrototypeOf(A0C, l6C) : A0C.__proto__ = l6C;
    };
    var t23 = function(f0C, X0C) {
        if (!f0C) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return X0C && (typeof X0C === "object" || typeof X0C === "function") ? X0C : f0C;
    };
    var U5C = {
        'column-count': 1,
        'columns': 1,
        'font-weight': 1,
        'line-height': 1,
        'opacity': 1,
        'z-index': 1,
        'zoom': 1
    };
    var Z5C = {
        'readonly': 'readOnly'
    };
    var F1C = [];
    var S23 = Array.prototype.slice;
    var b83 = function() {
        var t0C = function T0C(i0C) {
            var E0C = this,
                a0C = 0;
            for (a0C = 0; a0C < i0C.length; a0C++) {
                E0C[a0C] = i0C[a0C];
            }
            E0C.length = i0C.length;
            return r0C(this);
        };
        var r0C = function C0C(N0C, o0C) {
            var Z0C = [],
                q0C = 0;
            if (N0C && !o0C) {
                if (N0C instanceof t0C) {
                    return N0C;
                }
            }
            if (y23(N0C)) {
                return C0C(document).ready(N0C);
            }
            if (N0C) {
                if (typeof N0C === 'string') {
                    var V0C, h0C, U0C;
                    N0C = U0C = N0C.trim();
                    if (U0C.indexOf('<') >= 0 && U0C.indexOf('>') >= 0) {
                        var d0C = 'div';
                        if (U0C.indexOf('<li') === 0) {
                            d0C = 'ul';
                        }
                        if (U0C.indexOf('<tr') === 0) {
                            d0C = 'tbody';
                        }
                        if (U0C.indexOf('<td') === 0 || U0C.indexOf('<th') === 0) {
                            d0C = 'tr';
                        }
                        if (U0C.indexOf('<tbody') === 0) {
                            d0C = 'table';
                        }
                        if (U0C.indexOf('<option') === 0) {
                            d0C = 'select';
                        }
                        h0C = document.createElement(d0C);
                        h0C.innerHTML = U0C;
                        for (q0C = 0; q0C < h0C.childNodes.length; q0C++) {
                            Z0C.push(h0C.childNodes[q0C]);
                        }
                    } else {
                        if (!o0C && N0C[0] === '#' && !N0C.match(/[ .<>:~]/)) {
                            V0C = [document.getElementById(N0C.split('#')[1])];
                        } else {
                            if (o0C instanceof t0C) {
                                o0C = o0C[0];
                            }
                            V0C = (o0C || document).querySelectorAll(N0C);
                        }
                        for (q0C = 0; q0C < V0C.length; q0C++) {
                            if (V0C[q0C]) {
                                Z0C.push(V0C[q0C]);
                            }
                        }
                    }
                } else if (N0C.nodeType || N0C === window || N0C === document) {
                    Z0C.push(N0C);
                } else if (N0C.length > 0 && N0C[0].nodeType) {
                    for (q0C = 0; q0C < N0C.length; q0C++) {
                        Z0C.push(N0C[q0C]);
                    }
                } else if (C0C.isArray(N0C)) {
                    Z0C = N0C;
                }
            }
            return new t0C(Z0C);
        };
        t0C.prototype = {
            ready: function G0C(S0C) {
                if (document.attachEvent ? document.readyState == 'complete' : document.readyState != 'loading') {
                    S0C(r0C);
                } else {
                    document.addEventListener('DOMContentLoaded', function() {
                        S0C(r0C);
                    }, false);
                }
                return this;
            },
            concat: F1C.concat,
            empty: function p0C() {
                return this.each(function() {
                    this.innerHTML = '';
                });
            },
            map: function m0C(e0C) {
                return r0C(r0C.map(this, function(c0C, Y0C) {
                    return e0C.call(c0C, Y0C, c0C);
                }));
            },
            slice: function J0C() {
                return r0C(S23.apply(this, arguments));
            },
            addClass: function v0C(M0C) {
                if (typeof M0C === 'undefined') {
                    return this;
                }
                var D0C = M0C.split(' ');
                for (var b0C = 0; b0C < D0C.length; b0C++) {
                    for (var H0C = 0; H0C < this.length; H0C++) {
                        if (typeof this[H0C].classList !== 'undefined' && D0C[b0C] !== '') {
                            this[H0C].classList.add(D0C[b0C]);
                        }
                    }
                }
                return this;
            },
            removeClass: function F0C(w0C) {
                if (typeof w0C === 'undefined') {
                    return this;
                }
                var Q0C = w0C.split(' ');
                for (var x0C = 0; x0C < Q0C.length; x0C++) {
                    for (var j0C = 0; j0C < this.length; j0C++) {
                        if (typeof this[j0C].classList !== 'undefined' && Q0C[x0C] !== '') {
                            this[j0C].classList.remove(Q0C[x0C]);
                        }
                    }
                }
                return this;
            },
            hasClass: function s0C(z0C) {
                return this[0] ? this[0].classList.contains(z0C) : false;
            },
            toggleClass: function l0C(I4C) {
                var f4C = I4C.split(' ');
                for (var X4C = 0; X4C < f4C.length; X4C++) {
                    for (var A4C = 0; A4C < this.length; A4C++) {
                        if (typeof this[A4C].classList !== 'undefined') {
                            this[A4C].classList.toggle(f4C[X4C]);
                        }
                    }
                }
                return this;
            },
            closest: function L4C(g4C, B4C) {
                var W4C = this[0],
                    n4C = false;
                if (M83(g4C)) {
                    n4C = r0C(g4C);
                }
                while (W4C && !(n4C ? n4C.indexOf(W4C) >= 0 : r0C.matches(W4C, g4C))) {
                    W4C = W4C !== B4C && W4C.nodeType !== W4C.DOCUMENT_NODE && W4C.parentNode;
                }
                return r0C(W4C);
            },
            attr: function y4C(P4C, k4C) {
                var K4C;
                if (arguments.length === 1 && typeof P4C === 'string') {
                    if (this.length) {
                        K4C = this[0].getAttribute(P4C);
                        return K4C || K4C === '' ? K4C : undefined;
                    }
                } else {
                    for (var u4C = 0; u4C < this.length; u4C++) {
                        if (arguments.length === 2) {
                            this[u4C].setAttribute(P4C, k4C);
                        } else {
                            for (var R4C in P4C) {
                                this[u4C][R4C] = P4C[R4C];
                                this[u4C].setAttribute(R4C, P4C[R4C]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function O4C(t4C) {
                for (var r4C = 0; r4C < this.length; r4C++) {
                    this[r4C].removeAttribute(t4C);
                }
                return this;
            },
            prop: function T4C(a4C, E4C) {
                a4C = Z5C[a4C] || a4C;
                if (arguments.length === 1 && typeof a4C === 'string') {
                    return this[0] ? this[0][a4C] : undefined;
                } else {
                    for (var i4C = 0; i4C < this.length; i4C++) {
                        this[i4C][a4C] = E4C;
                    }
                    return this;
                }
            },
            val: function C4C(q4C) {
                if (typeof q4C === 'undefined') {
                    if (this.length && this[0].multiple) {
                        return r0C.map(this.find('option:checked'), function(U4C) {
                            return U4C.value;
                        });
                    }
                    return this[0] ? this[0].value : undefined;
                }
                if (this.length && this[0].multiple) {
                    r0C.each(this[0].options, function() {
                        this.selected = q4C.indexOf(this.value) != -1;
                    });
                } else {
                    for (var N4C = 0; N4C < this.length; N4C++) {
                        this[N4C].value = q4C;
                    }
                }
                return this;
            },
            on: function Z4C(e4C, G4C, h4C, S4C) {
                function p4C(v4C) {
                    var c4C, Y4C, J4C = v4C.target;
                    if (r0C(J4C).is(G4C)) {
                        h4C.call(J4C, v4C);
                    } else {
                        Y4C = r0C(J4C).parents();
                        for (c4C = 0; c4C < Y4C.length; c4C++) {
                            if (r0C(Y4C[c4C]).is(G4C)) {
                                h4C.call(Y4C[c4C], v4C);
                            }
                        }
                    }
                }

                function m4C(b4C, F4C, D4C, M4C) {
                    var H4C = F4C.split('.');
                    if (!b4C.DomNameSpaces) {
                        b4C.DomNameSpaces = [];
                    }
                    b4C.DomNameSpaces.push({
                        namespace: H4C[1],
                        event: H4C[0],
                        listener: D4C,
                        capture: M4C
                    });
                    b4C.addEventListener(H4C[0], D4C, M4C);
                }
                var V4C = e4C.split(' '),
                    o4C, d4C;
                for (o4C = 0; o4C < this.length; o4C++) {
                    if (y23(G4C) || G4C === false) {
                        if (y23(G4C)) {
                            S4C = h4C || false;
                            h4C = G4C;
                        }
                        for (d4C = 0; d4C < V4C.length; d4C++) {
                            if (V4C[d4C].indexOf('.') != -1) {
                                m4C(this[o4C], V4C[d4C], h4C, S4C);
                            } else {
                                this[o4C].addEventListener(V4C[d4C], h4C, S4C);
                            }
                        }
                    } else {
                        for (d4C = 0; d4C < V4C.length; d4C++) {
                            if (!this[o4C].DomLiveListeners) {
                                this[o4C].DomLiveListeners = [];
                            }
                            this[o4C].DomLiveListeners.push({
                                listener: h4C,
                                liveListener: p4C
                            });
                            if (V4C[d4C].indexOf('.') != -1) {
                                m4C(this[o4C], V4C[d4C], p4C, S4C);
                            } else {
                                this[o4C].addEventListener(V4C[d4C], p4C, S4C);
                            }
                        }
                    }
                }
                return this;
            },
            off: function x4C(I3C, A3C, z4C, X3C) {
                function f3C(P3C) {
                    var L3C, W3C, n3C, g3C = P3C.split('.'),
                        B3C = g3C[0],
                        y3C = g3C[1];
                    for (L3C = 0; L3C < Q4C.length; ++L3C) {
                        if (Q4C[L3C].DomNameSpaces) {
                            for (W3C = 0; W3C < Q4C[L3C].DomNameSpaces.length; ++W3C) {
                                n3C = Q4C[L3C].DomNameSpaces[W3C];
                                if (n3C.namespace == y3C && (n3C.event == B3C || !B3C)) {
                                    Q4C[L3C].removeEventListener(n3C.event, n3C.listener, n3C.capture);
                                    n3C.removed = true;
                                }
                            }
                            for (W3C = Q4C[L3C].DomNameSpaces.length - 1; W3C >= 0; --W3C) {
                                if (Q4C[L3C].DomNameSpaces[W3C].removed) {
                                    Q4C[L3C].DomNameSpaces.splice(W3C, 1);
                                }
                            }
                        }
                    }
                }
                var s4C, w4C, j4C, l4C, Q4C = this;
                s4C = I3C.split(' ');
                for (w4C = 0; w4C < s4C.length; w4C++) {
                    for (j4C = 0; j4C < this.length; j4C++) {
                        if (y23(A3C) || A3C === false) {
                            if (y23(A3C)) {
                                X3C = z4C || false;
                                z4C = A3C;
                            }
                            if (s4C[w4C].indexOf('.') === 0) {
                                f3C(s4C[w4C].substr(1), z4C, X3C);
                            } else {
                                this[j4C].removeEventListener(s4C[w4C], z4C, X3C);
                            }
                        } else {
                            if (this[j4C].DomLiveListeners) {
                                for (l4C = 0; l4C < this[j4C].DomLiveListeners.length; l4C++) {
                                    if (this[j4C].DomLiveListeners[l4C].listener === z4C) {
                                        this[j4C].removeEventListener(s4C[w4C], this[j4C].DomLiveListeners[l4C].liveListener, X3C);
                                    }
                                }
                            }
                            if (this[j4C].DomNameSpaces && this[j4C].DomNameSpaces.length && s4C[w4C]) {
                                f3C(s4C[w4C]);
                            }
                        }
                    }
                }
                return this;
            },
            trigger: function u3C(t3C, r3C) {
                var k3C = t3C.split(' ');
                for (var R3C = 0; R3C < k3C.length; R3C++) {
                    for (var O3C = 0; O3C < this.length; O3C++) {
                        var K3C;
                        try {
                            K3C = new CustomEvent(k3C[R3C], {
                                detail: r3C,
                                bubbles: true,
                                cancelable: true
                            });
                        } catch (T3C) {
                            K3C = document.createEvent('Event');
                            K3C.initEvent(k3C[R3C], true, true);
                            K3C.detail = r3C;
                        }
                        this[O3C].dispatchEvent(K3C);
                    }
                }
                return this;
            },
            width: function a3C(i3C) {
                if (i3C !== undefined) {
                    return this.css('width', i3C);
                }
                if (this[0] === window) {
                    return window.innerWidth;
                } else if (this[0] === document) {
                    return document.documentElement.scrollWidth;
                } else {
                    return this.length > 0 ? parseFloat(this.css('width')) : null;
                }
            },
            height: function E3C(q3C) {
                if (q3C !== undefined) {
                    return this.css('height', q3C);
                }
                if (this[0] === window) {
                    return window.innerHeight;
                } else if (this[0] === document) {
                    var N3C = document.body,
                        C3C = document.documentElement;
                    return Math.max(N3C.scrollHeight, N3C.offsetHeight, C3C.clientHeight, C3C.scrollHeight, C3C.offsetHeight);
                } else {
                    return this.length > 0 ? parseFloat(this.css('height')) : null;
                }
            },
            innerWidth: function U3C() {
                var d3C = this;
                if (this.length > 0) {
                    if (this[0].innerWidth) {
                        return this[0].innerWidth;
                    } else {
                        var Z3C = this[0].offsetWidth,
                            o3C = ['left', 'right'];
                        o3C.forEach(function(V3C) {
                            Z3C -= parseInt(d3C.css(R6C('border-' + V3C + '-width')) || 0, 10);
                        });
                        return Z3C;
                    }
                }
            },
            innerHeight: function h3C() {
                var S3C = this;
                if (this.length > 0) {
                    if (this[0].innerHeight) {
                        return this[0].innerHeight;
                    } else {
                        var G3C = this[0].offsetHeight,
                            p3C = ['top', 'bottom'];
                        p3C.forEach(function(m3C) {
                            G3C -= parseInt(S3C.css(R6C('border-' + m3C + '-width')) || 0, 10);
                        });
                        return G3C;
                    }
                }
            },
            offset: function e3C() {
                if (this.length > 0) {
                    var J3C = this[0],
                        c3C = J3C.getBoundingClientRect(),
                        Y3C = document.documentElement;
                    return {
                        top: c3C.top + window.pageYOffset - Y3C.clientTop,
                        left: c3C.left + window.pageXOffset - Y3C.clientLeft
                    };
                }
            },
            hide: function v3C() {
                for (var b3C = 0; b3C < this.length; b3C++) {
                    this[b3C].style.display = 'none';
                }
                return this;
            },
            show: function H3C() {
                for (var D3C = 0; D3C < this.length; D3C++) {
                    if (this[D3C].style.display == "none") {
                        this[D3C].style.display = '';
                    }
                    if (getComputedStyle(this[D3C], '').getPropertyValue("display") == "none") {
                        this[D3C].style.display = 'block';
                    }
                }
                return this;
            },
            clone: function M3C() {
                return this.map(function() {
                    return this.cloneNode(true);
                });
            },
            styles: function F3C() {
                return this[0] ? window.getComputedStyle(this[0], null) : undefined;
            },
            css: function x3C(j3C, l3C) {
                var w3C, Q3C, s3C = this[0],
                    z3C = '';
                if (arguments.length < 2) {
                    if (!s3C) {
                        return;
                    }
                    if (typeof j3C === 'string') {
                        return s3C.style[j3C] || getComputedStyle(s3C, '').getPropertyValue(j3C);
                    }
                }
                if (typeof j3C === 'string') {
                    if (!l3C && l3C !== 0) {
                        this.each(function() {
                            this.style.removeProperty(x23(j3C));
                        });
                    } else {
                        z3C = x23(j3C) + ":" + k5C(j3C, l3C);
                    }
                } else {
                    for (Q3C in j3C) {
                        if (!j3C[Q3C] && j3C[Q3C] !== 0) {
                            for (w3C = 0; w3C < this.length; w3C++) {
                                this[w3C].style.removeProperty(x23(Q3C));
                            }
                        } else {
                            z3C += x23(Q3C) + ':' + k5C(Q3C, j3C[Q3C]) + ';';
                        }
                    }
                }
                return this.each(function() {
                    this.style.cssText += ';' + z3C;
                });
            },
            each: function A9C(f9C) {
                for (var X9C = 0; X9C < this.length; X9C++) {
                    if (f9C.apply(this[X9C], [X9C, this[X9C]]) === false) {
                        break;
                    }
                }
                return this;
            },
            filter: function I9C(n9C) {
                var W9C = [];
                for (var L9C = 0; L9C < this.length; L9C++) {
                    if (y23(n9C)) {
                        if (n9C.call(this[L9C], L9C, this[L9C])) {
                            W9C.push(this[L9C]);
                        }
                    } else if (r0C.matches(this[L9C], n9C)) {
                        W9C.push(this[L9C]);
                    }
                }
                return new t0C(W9C);
            },
            html: function g9C(y9C) {
                if (typeof y9C === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                } else {
                    this.empty();
                    for (var B9C = 0; B9C < this.length; B9C++) {
                        this[B9C].innerHTML = y9C;
                    }
                    return this;
                }
            },
            text: function P9C(R9C) {
                if (typeof R9C === 'undefined') {
                    return this[0] ? this[0].textContent.trim() : null;
                } else {
                    for (var u9C = 0; u9C < this.length; u9C++) {
                        this[u9C].textContent = R9C;
                    }
                    return this;
                }
            },
            is: function K9C(k9C) {
                return this.length > 0 && r0C.matches(this[0], k9C);
            },
            not: function O9C(r9C) {
                var T9C = [];
                if (y23(r9C) && r9C.call !== undefined) {
                    this.each(function(a9C) {
                        if (!r9C.call(this, a9C)) {
                            T9C.push(this);
                        }
                    });
                } else {
                    var t9C = typeof r9C == 'string' ? this.filter(r9C) : t6C(r9C) && y23(r9C.item) ? S23.call(r9C) : r0C(r9C);
                    if (M83(t9C)) {
                        t9C = r0C.map(t9C, function(i9C) {
                            return i9C;
                        });
                    }
                    this.each(function(C9C, E9C) {
                        if (t9C.indexOf(E9C) < 0) {
                            T9C.push(E9C);
                        }
                    });
                }
                return r0C(T9C);
            },
            indexOf: function N9C(U9C) {
                for (var q9C = 0; q9C < this.length; q9C++) {
                    if (this[q9C] === U9C) {
                        return q9C;
                    }
                }
            },
            index: function Z9C(d9C) {
                return d9C ? this.indexOf(r0C(d9C)[0]) : this.parent().children().indexOf(this[0]);
            },
            get: function o9C(V9C) {
                return V9C === undefined ? S23.call(this) : this[V9C >= 0 ? V9C : V9C + this.length];
            },
            eq: function h9C(G9C) {
                if (typeof G9C === 'undefined') {
                    return this;
                }
                var S9C = this.length,
                    p9C;
                if (G9C > S9C - 1) {
                    return new t0C([]);
                }
                if (G9C < 0) {
                    p9C = S9C + G9C;
                    return p9C < 0 ? new t0C([]) : new t0C([this[p9C]]);
                }
                return new t0C([this[G9C]]);
            },
            append: function m9C(e9C) {
                var c9C, Y9C;
                for (c9C = 0; c9C < this.length; c9C++) {
                    if (typeof e9C === 'string') {
                        var J9C = document.createElement('div');
                        J9C.innerHTML = e9C;
                        while (J9C.firstChild) {
                            this[c9C].appendChild(J9C.firstChild);
                        }
                    } else if (e9C instanceof t0C) {
                        for (Y9C = 0; Y9C < e9C.length; Y9C++) {
                            this[c9C].appendChild(e9C[Y9C]);
                        }
                    } else {
                        this[c9C].appendChild(e9C);
                    }
                }
                return this;
            },
            appendTo: function v9C(b9C) {
                r0C(b9C).append(this);
                return this;
            },
            prepend: function H9C(F9C) {
                var D9C, M9C;
                for (D9C = 0; D9C < this.length; D9C++) {
                    if (typeof F9C === 'string') {
                        var x9C = document.createElement('div');
                        x9C.innerHTML = F9C;
                        for (M9C = x9C.childNodes.length - 1; M9C >= 0; M9C--) {
                            this[D9C].insertBefore(x9C.childNodes[M9C], this[D9C].childNodes[0]);
                        }
                    } else if (F9C instanceof t0C) {
                        for (M9C = 0; M9C < F9C.length; M9C++) {
                            this[D9C].insertBefore(F9C[M9C], this[D9C].childNodes[0]);
                        }
                    } else {
                        this[D9C].insertBefore(F9C, this[D9C].childNodes[0]);
                    }
                }
                return this;
            },
            prependTo: function j9C(Q9C) {
                r0C(Q9C).prepend(this);
                return this;
            },
            insertBefore: function w9C(A7C) {
                var s9C = r0C(A7C);
                for (var z9C = 0; z9C < this.length; z9C++) {
                    if (s9C.length === 1) {
                        s9C[0].parentNode.insertBefore(this[z9C], s9C[0]);
                    } else if (s9C.length > 1) {
                        for (var l9C = 0; l9C < s9C.length; l9C++) {
                            s9C[l9C].parentNode.insertBefore(this[z9C].cloneNode(true), s9C[l9C]);
                        }
                    }
                }
                return this;
            },
            insertAfter: function X7C(W7C) {
                var f7C = r0C(W7C);
                for (var I7C = 0; I7C < this.length; I7C++) {
                    if (f7C.length === 1) {
                        f7C[0].parentNode.insertBefore(this[I7C], f7C[0].nextSibling);
                    } else if (f7C.length > 1) {
                        for (var L7C = 0; L7C < f7C.length; L7C++) {
                            f7C[L7C].parentNode.insertBefore(this[I7C].cloneNode(true), f7C[L7C].nextSibling);
                        }
                    }
                }
                return this;
            },
            next: function n7C(g7C) {
                if (this.length > 0) {
                    if (g7C) {
                        if (this[0].nextElementSibling && r0C(this[0].nextElementSibling).is(g7C)) {
                            return new t0C([this[0].nextElementSibling]);
                        } else {
                            return new t0C([]);
                        }
                    } else {
                        if (this[0].nextElementSibling) {
                            return new t0C([this[0].nextElementSibling]);
                        } else {
                            return new t0C([]);
                        }
                    }
                } else {
                    return new t0C([]);
                }
            },
            nextAll: function B7C(R7C) {
                var u7C = [],
                    y7C = this[0];
                if (!y7C) {
                    return new t0C([]);
                }
                while (y7C.nextElementSibling) {
                    var P7C = y7C.nextElementSibling;
                    if (R7C) {
                        if (r0C(P7C).is(R7C)) {
                            u7C.push(P7C);
                        }
                    } else {
                        u7C.push(P7C);
                    }
                    y7C = P7C;
                }
                return new t0C(u7C);
            },
            prev: function K7C(k7C) {
                if (this.length > 0) {
                    if (k7C) {
                        if (this[0].previousElementSibling && r0C(this[0].previousElementSibling).is(k7C)) {
                            return new t0C([this[0].previousElementSibling]);
                        } else {
                            return new t0C([]);
                        }
                    } else {
                        if (this[0].previousElementSibling) {
                            return new t0C([this[0].previousElementSibling]);
                        } else {
                            return new t0C([]);
                        }
                    }
                } else {
                    return new t0C([]);
                }
            },
            prevAll: function O7C(a7C) {
                var T7C = [];
                var r7C = this[0];
                if (!r7C) {
                    return new t0C([]);
                }
                while (r7C.previousElementSibling) {
                    var t7C = r7C.previousElementSibling;
                    if (a7C) {
                        if (r0C(t7C).is(a7C)) {
                            T7C.push(t7C);
                        }
                    } else {
                        T7C.push(t7C);
                    }
                    r7C = t7C;
                }
                return new t0C(T7C);
            },
            parent: function i7C(N7C) {
                var C7C = [];
                for (var E7C = 0; E7C < this.length; E7C++) {
                    if (this[E7C].parentNode !== null) {
                        if (N7C) {
                            if (r0C(this[E7C].parentNode).is(N7C)) {
                                C7C.push(this[E7C].parentNode);
                            }
                        } else {
                            C7C.push(this[E7C].parentNode);
                        }
                    }
                }
                return r0C(r0C.unique(C7C));
            },
            parents: function q7C(o7C) {
                var Z7C = [];
                for (var d7C = 0; d7C < this.length; d7C++) {
                    var U7C = this[d7C].parentNode;
                    while (U7C) {
                        if (o7C) {
                            if (r0C(U7C).is(o7C)) {
                                Z7C.push(U7C);
                            }
                        } else {
                            Z7C.push(U7C);
                        }
                        U7C = U7C.parentNode;
                    }
                }
                return r0C(r0C.unique(Z7C));
            },
            find: function V7C(m7C) {
                var S7C = [];
                for (var h7C = 0; h7C < this.length; h7C++) {
                    var p7C = this[h7C].querySelectorAll(m7C);
                    for (var G7C = 0; G7C < p7C.length; G7C++) {
                        S7C.push(p7C[G7C]);
                    }
                }
                return new t0C(S7C);
            },
            children: function e7C(b7C) {
                var J7C = [];
                for (var v7C = 0; v7C < this.length; v7C++) {
                    var Y7C = this[v7C].childNodes;
                    for (var c7C = 0; c7C < Y7C.length; c7C++) {
                        if (!b7C) {
                            if (Y7C[c7C].nodeType === 1) {
                                J7C.push(Y7C[c7C]);
                            }
                        } else {
                            if (Y7C[c7C].nodeType === 1 && r0C(Y7C[c7C]).is(b7C)) {
                                J7C.push(Y7C[c7C]);
                            }
                        }
                    }
                }
                return new t0C(r0C.unique(J7C));
            },
            remove: function H7C() {
                for (var D7C = 0; D7C < this.length; D7C++) {
                    if (this[D7C].parentNode) {
                        this[D7C].parentNode.removeChild(this[D7C]);
                    }
                }
                return this;
            },
            add: function M7C() {
                var F7C = this;
                var x7C, j7C;
                for (x7C = 0; x7C < arguments.length; x7C++) {
                    var Q7C = r0C(arguments[x7C]);
                    for (j7C = 0; j7C < Q7C.length; j7C++) {
                        F7C[F7C.length] = Q7C[j7C];
                        F7C.length++;
                    }
                }
                return F7C;
            },
            before: function w7C(s7C) {
                r0C(s7C).insertBefore(this);
                return this;
            },
            after: function z7C(l7C) {
                r0C(l7C).insertAfter(this);
                return this;
            },
            scrollTop: function A2C(X2C) {
                if (!this.length) {
                    return;
                }
                var f2C = 'scrollTop' in this[0];
                if (X2C === undefined) {
                    return f2C ? this[0].scrollTop : this[0].pageYOffset;
                }
                return this.each(f2C ? function() {
                    this.scrollTop = X2C;
                } : function() {
                    this.scrollTo(this.scrollX, X2C);
                });
            },
            scrollLeft: function I2C(L2C) {
                if (!this.length) {
                    return;
                }
                var W2C = 'scrollLeft' in this[0];
                if (L2C === undefined) {
                    return W2C ? this[0].scrollLeft : this[0].pageXOffset;
                }
                return this.each(W2C ? function() {
                    this.scrollLeft = L2C;
                } : function() {
                    this.scrollTo(L2C, this.scrollY);
                });
            },
            contents: function n2C() {
                return this.map(function(B2C, g2C) {
                    return S23.call(g2C.childNodes);
                });
            },
            nextUntil: function y2C(R2C) {
                var P2C = this,
                    u2C = [];
                while (P2C.length && !P2C.filter(R2C).length) {
                    u2C.push(P2C[0]);
                    P2C = P2C.next();
                }
                return r0C(u2C);
            },
            prevUntil: function K2C(r2C) {
                var k2C = this,
                    O2C = [];
                while (k2C.length && !r0C(k2C).filter(r2C).length) {
                    O2C.push(k2C[0]);
                    k2C = k2C.prev();
                }
                return r0C(O2C);
            },
            detach: function t2C() {
                return this.remove();
            }
        };
        r0C.fn = t0C.prototype;
        return r0C;
    }();
    var w73 = b83;
    j73.$ = b83;
    w73.inArray = function(T2C, a2C, i2C) {
        return F1C.indexOf.call(a2C, T2C, i2C);
    };
    w73.extend = function(E2C) {
        var N2C, C2C = S23.call(arguments, 1);
        if (typeof E2C == 'boolean') {
            N2C = E2C;
            E2C = C2C.shift();
        }
        E2C = E2C || {};
        C2C.forEach(function(q2C) {
            I6C(E2C, q2C, N2C);
        });
        return E2C;
    };
    w73.isFunction = y23;
    w73.isArray = function(U2C) {
        return Object.prototype.toString.apply(U2C) === '[object Array]';
    };
    w73.isPlainObject = function(Z2C) {
        return M83(Z2C) && Z2C !== null && Z2C !== Z2C.window && Object.getPrototypeOf(Z2C) == Object.prototype;
    };
    w73.each = function(d2C, h2C) {
        var o2C, V2C;
        if (!M83(d2C) || !h2C) {
            return;
        }
        if (w73.isArray(d2C) || d2C instanceof b83) {
            for (o2C = 0; o2C < d2C.length; o2C++) {
                if (h2C.call(d2C[o2C], o2C, d2C[o2C]) === false) {
                    break;
                }
            }
        } else {
            for (V2C in d2C) {
                if (d2C.hasOwnProperty(V2C) && V2C !== 'length') {
                    if (h2C.call(d2C[V2C], V2C, d2C[V2C]) === false) {
                        break;
                    }
                }
            }
        }
        return this;
    };
    w73.unique = function(p2C) {
        var S2C = [];
        for (var G2C = 0; G2C < p2C.length; G2C++) {
            if (S2C.indexOf(p2C[G2C]) === -1) {
                S2C.push(p2C[G2C]);
            }
        }
        return S2C;
    };
    w73.map = function(c2C, v2C) {
        var m2C, e2C = [],
            Y2C, J2C;
        if (t6C(c2C)) {
            for (Y2C = 0; Y2C < c2C.length; Y2C++) {
                m2C = v2C(c2C[Y2C], Y2C);
                if (m2C !== null) {
                    e2C.push(m2C);
                }
            }
        } else {
            for (J2C in c2C) {
                m2C = v2C(c2C[J2C], J2C);
                if (m2C !== null) {
                    e2C.push(m2C);
                }
            }
        }
        return e2C.length > 0 ? w73.fn.concat.apply([], e2C) : e2C;
    };
    w73.matches = function(b2C, H2C) {
        if (!H2C || !b2C || b2C.nodeType !== 1) {
            return false;
        }
        var D2C = b2C.matchesSelector || b2C.webkitMatchesSelector || b2C.mozMatchesSelector || b2C.msMatchesSelector;
        return D2C.call(b2C, H2C);
    };
    j73.presetShort = function(M2C, F2C, x2C) {
        j73[M2C] = function(z2C, l2C) {
            var s2C, Q2C, j2C = {},
                w2C = l2C || {};
            w73.extend(w2C, {
                preset: x2C === false ? undefined : M2C
            });
            w73(z2C).each(function() {
                s2C = new j73.classes[F2C || 'Scroller'](this, w2C);
                j2C[this.id] = s2C;
            });
            Q2C = Object.keys(j2C);
            return Q2C.length == 1 ? j2C[Q2C[0]] : j2C;
        };
    };
    var A23;
    var c23;
    var Y23;
    var u5C;
    var w23 = [];
    var X23 = typeof window !== 'undefined';
    var s23 = X23 ? navigator.userAgent : '';
    var I83 = s23.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i);
    var m83 = X23 && window.requestAnimationFrame || function(A8C) {
        A8C();
    };
    var h83 = X23 && window.cancelAnimationFrame || function() {};
    if (/Android/i.test(I83)) {
        A23 = 'android';
        c23 = s23.match(/Android\s+([\d\.]+)/i);
        if (c23) {
            w23 = c23[0].replace('Android ', '').split('.');
        }
    } else if (/iPhone|iPad|iPod/i.test(I83)) {
        A23 = 'ios';
        c23 = s23.match(/OS\s+([\d\_]+)/i);
        if (c23) {
            w23 = c23[0].replace(/_/g, '.').replace('OS ', '').split('.');
        }
    } else if (/Windows Phone/i.test(I83)) {
        A23 = 'wp';
    } else if (/Windows|MSIE/i.test(I83)) {
        A23 = 'windows';
    }
    Y23 = w23[0];
    u5C = w23[1];
    var B83 = 0;
    if (X23) {
        ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(function(o8C) {
            document.addEventListener(o8C, G6C, true);
        });
        if (A23 == 'android' && Y23 < 5) {
            document.addEventListener('change', function(V8C) {
                if (B83 && V8C.target.type == 'checkbox' && !V8C.target.mbscChange) {
                    V8C.stopPropagation();
                    V8C.preventDefault();
                }
                delete V8C.target.mbscChange;
            }, true);
        }
    }
	
	(function() {

        function M8C() {
            var j8C = ['Webkit', 'Moz', 'O', 'ms'],
                Q8C;
            for (Q8C in j8C) {
                if (D8C([j8C[Q8C] + 'Transform'])) {
                    return '-' + j8C[Q8C].toLowerCase() + '-';
                }
            }
            return '';
        }

        function D8C(F8C) {
            var x8C;
            for (x8C in F8C) {
                if (Y8C[F8C[x8C]] !== undefined) {
                    return true;
                }
            }
            return false;
        }
        var b8C, Y8C, h8C, v8C, e8C, m8C = function w8C() {},
            G8C = j73.$,
            c8C = +new Date(),
            p8C = {},
            S8C = G8C.extend;
        if (X23) {
            Y8C = document.createElement('modernizr').style;
            e8C = M8C();
            v8C = e8C.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz');
            b8C = Y8C.animation !== undefined ? 'animationend' : 'webkitAnimationEnd';
        }
        h8C = S8C(j73, {
            $: G8C,
            version: '3.2.3',
            util: {
                prefix: e8C,
                jsPrefix: v8C,
                animEnd: b8C,
                preventClick: K5C,
                testTouch: function s8C(l8C, z8C) {
                    if (l8C.type == 'touchstart') {
                        G8C(z8C).attr('data-touch', '1');
                    } else if (G8C(z8C).attr('data-touch')) {
                        G8C(z8C).removeAttr('data-touch');
                        return false;
                    }
                    return true;
                },
                objectToArray: function A1v(f1v) {
                    var X1v = [],
                        I1v;
                    for (I1v in f1v) {
                        X1v.push(f1v[I1v]);
                    }
                    return X1v;
                },
                arrayToObject: function L1v(n1v) {
                    var g1v = {},
                        W1v;
                    if (n1v) {
                        for (W1v = 0; W1v < n1v.length; W1v++) {
                            g1v[n1v[W1v]] = n1v[W1v];
                        }
                    }
                    return g1v;
                },
                isNumeric: function B1v(y1v) {
                    return y1v - parseFloat(y1v) >= 0;
                },
                isString: function P1v(u1v) {
                    return typeof u1v === 'string';
                },
                getCoord: y83,
                getPosition: function R1v(r1v, t1v) {
                    var k1v = getComputedStyle(r1v[0]),
                        K1v, O1v;
                    G8C.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function(a1v, T1v) {
                        if (k1v[T1v + 'ransform'] !== undefined) {
                            K1v = k1v[T1v + 'ransform'];
                            return false;
                        }
                    });
                    K1v = K1v.split(')')[0].split(', ');
                    O1v = t1v ? K1v[13] || K1v[5] : K1v[12] || K1v[4];
                    return O1v;
                },
                constrain: function i1v(E1v, C1v, N1v) {
                    return Math.max(C1v, Math.min(E1v, N1v));
                },
                vibrate: function q1v(U1v) {
                    if ('vibrate' in navigator) {
                        navigator.vibrate(U1v || 50);
                    }
                },
                throttle: function Z1v(V1v, d1v) {
                    var o1v, h1v;
                    d1v = d1v || 100;
                    return function() {
                        var S1v = this,
                            G1v = +new Date(),
                            p1v = arguments;
                        if (o1v && G1v < o1v + d1v) {
                            clearTimeout(h1v);
                            h1v = setTimeout(function() {
                                o1v = G1v;
                                V1v.apply(S1v, p1v);
                            }, d1v);
                        } else {
                            o1v = G1v;
                            V1v.apply(S1v, p1v);
                        }
                    };
                }
            },
            autoTheme: 'mobiscroll',
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                page: {},

                frame: {},
                scroller: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: {
                name: A23,
                majorVersion: Y23,
                minorVersion: u5C
            },
            i18n: {},
            instances: p8C,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function m1v(e1v) {
                S8C(this.settings, e1v);
            },
            customTheme: function c1v(H1v, b1v) {
                var Y1v, v1v = j73.themes,
                    J1v = ['frame', 'scroller', 'listview', 'menustrip', 'form', 'progress'];
                for (Y1v = 0; Y1v < J1v.length; Y1v++) {
                    v1v[J1v[Y1v]][H1v] = j73.$.extend({}, v1v[J1v[Y1v]][b1v], {
                        baseTheme: b1v
                    });
                }
            }
        });
        h8C.presetShort = h8C.presetShort || function() {};
        h8C.classes.Base = function(x1v, F1v) {
            function A5v() {
                G8C(x1v).addClass('mbsc-comp');
                if (!x1v.id) {
                    x1v.id = 'mobiscroll' + ++c8C;
                } else if (p8C[x1v.id]) {
                    p8C[x1v.id].destroy();
                }
                p8C[x1v.id] = M1v;
                M1v.__ready = true;
            }
            var l1v, Q1v, D1v, z1v, j1v, w1v, s1v, M1v = this;
            M1v.settings = {};
            M1v._init = m8C;
            M1v._destroy = m8C;
            M1v._processSettings = m8C;
            M1v.init = function(S5v) {
                var e5v;
                for (e5v in M1v.settings) {
                    delete M1v.settings[e5v];
                }
                D1v = M1v.settings;
                S8C(F1v, S5v);
                if (M1v._hasDef) {
                    s1v = h8C.settings;
                }
                S8C(D1v, M1v._defaults, s1v, F1v);
                if (M1v._hasTheme) {
                    j1v = D1v.theme;
                    if (j1v == 'auto' || !j1v) {
                        j1v = h8C.autoTheme;
                    }
                    if (j1v == 'default') {
                        j1v = 'mobiscroll';
                    }
                    F1v.theme = j1v;
                    z1v = h8C.themes[M1v._class] ? h8C.themes[M1v._class][j1v] : {};
                }
                if (M1v._hasLang) {
                    l1v = h8C.i18n[D1v.lang];
                }
                if (M1v._hasTheme) {
                    w1v('onThemeLoad', {
                        lang: l1v,
                        settings: F1v
                    });
                }
                S8C(D1v, z1v, l1v, s1v, F1v);
                M1v._processSettings();
                var m5v = {
                    form: true,
                    page: true,
                    scrollview: true,
                    progress: true,
                    progressbase: true,
                    switch: true,
                    slider: true,
                    sliderbase: true,
                    stepper: true
                };
                if (m5v[M1v._class]) {
                    M1v._init(S5v);
                    w1v('onInit');
                } else {
                    var h5v = {
                        className: M1v._class,
                        buttons: M1v.buttons,
                        platform: h8C.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: G8C(x1v).find(D1v.listSelector || 'ul,ol').length ? 'left' : 'right',
                        settings: {
                            activeClass: D1v.activeClass,
                            ampmText: D1v.ampmText,
                            amText: D1v.amText,
                            animateIcons: D1v.animateIcons,
                            backText: D1v.backText,
                            baseTheme: D1v.baseTheme,
                            buttons: D1v.buttons,
                            btnClass: D1v.btnClass,
                            btnWidth: D1v.btnWidth,
                            closeIcon: D1v.closeIcon,
                            context: D1v.context == 'body' ? 'body' : '',
                            controls: D1v.controls,
                            cssClass: D1v.cssClass,
                            dateDisplay: D1v.dateDisplay,
                            dateFormat: D1v.dateFormat,
                            dateWheels: D1v.dateWheels,
                            dayNames: D1v.dayNames,
                            dayNamesShort: D1v.dayNamesShort,
                            daySuffix: D1v.daySuffix,
                            display: D1v.display,
                            dayText: D1v.dayText,
                            endYear: D1v.endYear,
                            fixedHeader: D1v.fixedHeader,
                            handleClass: D1v.handleClass,
                            handleMarkup: D1v.handleMarkup,
                            hideText: D1v.hideText,
                            hourText: D1v.hourText,
                            itemNode: D1v.itemNode,
                            itemWidth: D1v.itemWidth,
                            lang: D1v.lang,
                            lapIcon: D1v.lapIcon,
                            lapText: D1v.lapText,
                            layout: D1v.layout,
                            leftArrowClass: D1v.leftArrowClass,
                            max: D1v.max,
                            min: D1v.min,
                            minuteText: D1v.minuteText,
                            monthNames: D1v.monthNames,
                            monthNamesShort: D1v.monthNamesShort,
                            monthSuffix: D1v.monthSuffix,
                            monthText: D1v.monthText,
                            nowIcon: D1v.nowIcon,
                            nowText: D1v.nowText,
                            pmText: D1v.pmText,
                            preset: D1v.preset,
                            resetIcon: D1v.resetIcon,
                            resetText: D1v.resetText,
                            rightArrowClass: D1v.rightArrowClass,
                            rtl: D1v.rtl,
                            secText: D1v.secText,
                            select: D1v.select,
                            snap: D1v.snap,
                            sort: D1v.sort,
                            sortable: D1v.sortable,
                            sortHandle: D1v.sortHandle,
                            startIcon: D1v.startIcon,
                            startText: D1v.startText,
                            startYear: D1v.startYear,
                            stepHour: D1v.stepHour,
                            stepMinute: D1v.stepMinute,
                            stepSecond: D1v.stepSecond,
                            steps: D1v.steps,
                            stopIcon: D1v.stopIcon,
                            stopText: D1v.stopText,
                            striped: D1v.striped,
                            theme: D1v.theme,
                            timeFormat: D1v.timeFormat,
                            timeWheels: D1v.timeWheels,
                            todayText: D1v.todayText,
                            type: D1v.type,
                            variant: D1v.variant,
                            wrapperClass: D1v.wrapperClass,
                            yearSuffix: D1v.yearSuffix,
                            yearText: D1v.yearText
                        }
                    };
                    var d5v, Z5v, o5v = [],
                        V5v = {},
                        p5v = ['refresh', 'redraw', 'navigate', 'showMonthView', 'changeTab', 'addValue', 'removeValue', 'getDate', 'setDate', 'addEvent', 'removeEvent', 'getEvents', 'setEvents', 'setActiveDate', 'start', 'stop', 'reset', 'lap', 'resetlap', 'getTime', 'setTime', 'getEllapsedTime', 'setEllapsedTime'],
                        c5v = {
                            jsonp: 1,
                            getInst: 1,
                            init: 1,
                            destroy: 1
                        },
                        G5v = function Y5v(J5v) {
                            M1v[J5v] = function() {
                                o5v.push({
                                    func: J5v,
                                    args: arguments
                                });
                            };
                        };
                    for (Z5v in M1v) {
                        if (typeof M1v[Z5v] === 'function' && !c5v[Z5v]) {
                            V5v[Z5v] = M1v[Z5v];
                            G5v(Z5v);
                        }
                    }
                    for (d5v = 0; d5v < p5v.length; d5v++) {
                        G5v(p5v[d5v]);
                    }
                    if (D1v.preset == 'timer' && !F1v.buttons) {
                        h5v.settings.buttons = ['toggle', 'resetlap'];
                        if (D1v.display !== 'inline') {
                            h5v.settings.buttons.push('hide');
                        }
                    }
                    if (D1v.preset == 'eventcalendar' && !F1v.buttons && D1v.display != 'inline') {
                        h5v.settings.buttons = ['close'];
                    }
                    
                            for (Z5v in V5v) {
                                M1v[Z5v] = V5v[Z5v];
                            }
                         
                            if (M1v._hasPreset) {
                                Q1v = h8C.presets[M1v._class][D1v.preset];
                                if (Q1v) {
                                    Q1v = Q1v.call(x1v, M1v);
                                    S8C(D1v, Q1v, F1v);
                                }
                            }
                            M1v._init(S5v);
                            w1v('onInit');
                            for (d5v = 0; d5v < o5v.length; d5v++) {
                                M1v[o5v[d5v].func].apply(M1v, o5v[d5v].args);
                            }
                            o5v = null;
                            V5v = null;
        
                }
            };
            M1v.destroy = function() {
                if (M1v) {
                    M1v._destroy();
                    w1v('onDestroy');
                    delete p8C[x1v.id];
                    M1v = null;
                }
            };
            M1v.tap = function(H5v, D5v, M5v, F5v, x5v) {
                b5C(M1v, H5v, D5v, M5v, F5v, x5v);
            };
            M1v.trigger = function(w5v, l5v) {
                var s5v, j5v, Q5v, z5v = [s1v, z1v, Q1v, F1v];
                for (j5v = 0; j5v < 4; j5v++) {
                    Q5v = z5v[j5v];
                    if (Q5v && Q5v[w5v]) {
                        s5v = Q5v[w5v].call(x1v, l5v || {}, M1v);
                    }
                }
                return s5v;
            };
            M1v.option = function(A6v, f6v) {
                var X6v = {};
                if ((typeof A6v === 'undefined' ? 'undefined' : q23(A6v)) === 'object') {
                    X6v = A6v;
                } else {
                    X6v[A6v] = f6v;
                }
                M1v.init(X6v);
            };
            M1v.getInst = function() {
                return M1v;
            };
            M1v.zone = {
                run: function I6v(L6v) {
                    L6v();
                }
            };
            F1v = F1v || {};
            w1v = M1v.trigger;
            if (!M1v.__ready) {
                A5v();
            }
        };
        if (X23) {
            G8C(function() {
                if (document.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*\=\s*([^;]*).*$)|^.*$/, '$1') || /mobiscrollClientError/.test(window.name || '')) {
                    H8C();
                }
            });
        }
}())
	
	
    var x73 = j73.$;
    var Q73 = x73.extend;
    var l73 = {
        defaults: {
            shortYearCutoff: '+10',
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            amText: 'am',
            pmText: 'pm',
            getYear: function d6v(o6v) {
                return o6v.getFullYear();
            },
            getMonth: function V6v(h6v) {
                return h6v.getMonth();
            },
            getDay: function G6v(S6v) {
                return S6v.getDate();
            },
            getDate: R5C,
            getMaxDayOfMonth: function p6v(m6v, e6v) {
                return 32 - new Date(m6v, e6v, 32, 12).getDate();
            },
            getWeekNumber: function c6v(Y6v) {
                Y6v = new Date(Y6v);
                Y6v.setHours(0, 0, 0);
                Y6v.setDate(Y6v.getDate() + 4 - (Y6v.getDay() || 7));
                var J6v = new Date(Y6v.getFullYear(), 0, 1);
                return Math.ceil(((Y6v - J6v) / 86400000 + 1) / 7);
            }
        },
        adjustedDate: R5C,
        formatDate: function v6v(x6v, H6v, l6v) {
            if (!H6v) {
                return null;
            }
            var D6v = Q73({}, l73.defaults, l6v),
                j6v = function A0v(f0v) {
                    var X0v = 0;
                    while (M6v + 1 < x6v.length && x6v.charAt(M6v + 1) == f0v) {
                        X0v++;
                        M6v++;
                    }
                    return X0v;
                },
                F6v = function I0v(W0v, n0v, g0v) {
                    var L0v = '' + n0v;
                    if (j6v(W0v)) {
                        while (L0v.length < g0v) {
                            L0v = '0' + L0v;
                        }
                    }
                    return L0v;
                },
                z6v = function B0v(P0v, y0v, u0v, R0v) {
                    return j6v(P0v) ? R0v[y0v] : u0v[y0v];
                },
                M6v, w6v, b6v = '',
                s6v = false;
            for (M6v = 0; M6v < x6v.length; M6v++) {
                if (s6v) {
                    if (x6v.charAt(M6v) == "'" && !j6v("'")) {
                        s6v = false;
                    } else {
                        b6v += x6v.charAt(M6v);
                    }
                } else {
                    switch (x6v.charAt(M6v)) {
                        case 'd':
                            b6v += F6v('d', D6v.getDay(H6v), 2);
                            break;
                        case 'D':
                            b6v += z6v('D', H6v.getDay(), D6v.dayNamesShort, D6v.dayNames);
                            break;
                        case 'o':
                            b6v += F6v('o', (H6v.getTime() - new Date(H6v.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                            break;
                        case 'm':
                            b6v += F6v('m', D6v.getMonth(H6v) + 1, 2);
                            break;
                        case 'M':
                            b6v += z6v('M', D6v.getMonth(H6v), D6v.monthNamesShort, D6v.monthNames);
                            break;
                        case 'y':
                            w6v = D6v.getYear(H6v);
                            b6v += j6v('y') ? w6v : (w6v % 100 < 10 ? '0' : '') + w6v % 100;
                            break;
                        case 'h':
                            var Q6v = H6v.getHours();
                            b6v += F6v('h', Q6v > 12 ? Q6v - 12 : Q6v === 0 ? 12 : Q6v, 2);
                            break;
                        case 'H':
                            b6v += F6v('H', H6v.getHours(), 2);
                            break;
                        case 'i':
                            b6v += F6v('i', H6v.getMinutes(), 2);
                            break;
                        case 's':
                            b6v += F6v('s', H6v.getSeconds(), 2);
                            break;
                        case 'a':
                            b6v += H6v.getHours() > 11 ? D6v.pmText : D6v.amText;
                            break;
                        case 'A':
                            b6v += H6v.getHours() > 11 ? D6v.pmText.toUpperCase() : D6v.amText.toUpperCase();
                            break;
                        case "'":
                            if (j6v("'")) {
                                b6v += "'";
                            } else {
                                s6v = true;
                            }
                            break;
                        default:
                            b6v += x6v.charAt(M6v);
                    }
                }
            }
            return b6v;
        },
        parseDate: function K0v(N0v, r0v, c0v) {
            var k0v = Q73({}, l73.defaults, c0v),
                E0v = k0v.defaultValue && k0v.defaultValue.getTime ? k0v.defaultValue : new Date();
            if (!N0v || !r0v) {
                return E0v;
            }
            if (r0v.getTime) {
                return r0v;
            }
            r0v = (typeof r0v === 'undefined' ? 'undefined' : q23(r0v)) == 'object' ? r0v.toString() : r0v + '';
            var V0v = k0v.shortYearCutoff,
                a0v = k0v.getYear(E0v),
                i0v = k0v.getMonth(E0v) + 1,
                C0v = k0v.getDay(E0v),
                S0v = -1,
                O0v = E0v.getHours(),
                e0v = E0v.getMinutes(),
                p0v = 0,
                q0v = -1,
                G0v = false,
                Z0v = function Y0v(v0v) {
                    var J0v = T0v + 1 < N0v.length && N0v.charAt(T0v + 1) == v0v;
                    if (J0v) {
                        T0v++;
                    }
                    return J0v;
                },
                t0v = function b0v(H0v) {
                    Z0v(H0v);
                    var M0v = H0v == '@' ? 14 : H0v == '!' ? 20 : H0v == 'y' ? 4 : H0v == 'o' ? 3 : 2,
                        F0v = new RegExp('^\\d{1,' + M0v + '}'),
                        D0v = r0v.substr(U0v).match(F0v);
                    if (!D0v) {
                        return 0;
                    }
                    U0v += D0v[0].length;
                    return parseInt(D0v[0], 10);
                },
                o0v = function x0v(w0v, s0v, z0v) {
                    var Q0v = Z0v(w0v) ? z0v : s0v,
                        j0v;
                    for (j0v = 0; j0v < Q0v.length; j0v++) {
                        if (r0v.substr(U0v, Q0v[j0v].length).toLowerCase() == Q0v[j0v].toLowerCase()) {
                            U0v += Q0v[j0v].length;
                            return j0v + 1;
                        }
                    }
                    return 0;
                },
                h0v = function l0v() {
                    U0v++;
                },
                U0v = 0,
                T0v;
            for (T0v = 0; T0v < N0v.length; T0v++) {
                if (G0v) {
                    if (N0v.charAt(T0v) == "'" && !Z0v("'")) {
                        G0v = false;
                    } else {
                        h0v();
                    }
                } else {
                    switch (N0v.charAt(T0v)) {
                        case 'd':
                            C0v = t0v('d');
                            break;
                        case 'D':
                            o0v('D', k0v.dayNamesShort, k0v.dayNames);
                            break;
                        case 'o':
                            S0v = t0v('o');
                            break;
                        case 'm':
                            i0v = t0v('m');
                            break;
                        case 'M':
                            i0v = o0v('M', k0v.monthNamesShort, k0v.monthNames);
                            break;
                        case 'y':
                            a0v = t0v('y');
                            break;
                        case 'H':
                            O0v = t0v('H');
                            break;
                        case 'h':
                            O0v = t0v('h');
                            break;
                        case 'i':
                            e0v = t0v('i');
                            break;
                        case 's':
                            p0v = t0v('s');
                            break;
                        case 'a':
                            q0v = o0v('a', [k0v.amText, k0v.pmText], [k0v.amText, k0v.pmText]) - 1;
                            break;
                        case 'A':
                            q0v = o0v('A', [k0v.amText, k0v.pmText], [k0v.amText, k0v.pmText]) - 1;
                            break;
                        case "'":
                            if (Z0v("'")) {
                                h0v();
                            } else {
                                G0v = true;
                            }
                            break;
                        default:
                            h0v();
                    }
                }
            }
            if (a0v < 100) {
                a0v += new Date().getFullYear() - new Date().getFullYear() % 100 + (a0v <= (typeof V0v != 'string' ? V0v : new Date().getFullYear() % 100 + parseInt(V0v, 10)) ? 0 : -100);
            }
            if (S0v > -1) {
                i0v = 1;
                C0v = S0v;
                do {
                    var m0v = 32 - new Date(a0v, i0v - 1, 32, 12).getDate();
                    if (C0v <= m0v) {
                        break;
                    }
                    i0v++;
                    C0v -= m0v;
                } while (true);
            }
            O0v = q0v == -1 ? O0v : q0v && O0v < 12 ? O0v + 12 : !q0v && O0v == 12 ? 0 : O0v;
            var d0v = k0v.getDate(a0v, i0v - 1, C0v, O0v, e0v, p0v);
            if (k0v.getYear(d0v) != a0v || k0v.getMonth(d0v) + 1 != i0v || k0v.getDay(d0v) != C0v) {
                return E0v;
            }
            return d0v;
        }
    };
    j73.util.datetime = l73;
    var o83;
    var Y83;
    var e23 = j73.util;
    var R1C = j73.classes;
    var H83 = j73.themes;
    var p1C = e23.constrain;
    var D83 = e23.isString;
    var b23 = e23.getCoord;
    var L83 = e23.animEnd;
    var W5C = /(iphone|ipod)/i.test(s23) && Y23 >= 7;
    var D1C = A23 == 'android';
    var x1C = A23 == 'ios';
    var B5C = x1C && Y23 == 8;
    var s73 = function A4v() {};
    var m1C = function X4v(f4v) {
        f4v.preventDefault();
    };
    var n23 = function I4v(D4v, Q4v, I3v) {
        function f3v(L3v) {
            if (r4v) {
                r4v.removeClass('mbsc-fr-btn-a');
            }
            r4v = x73(this);
            if (!r4v.hasClass('mbsc-fr-btn-d') && !r4v.hasClass('mbsc-fr-btn-nhl')) {
                r4v.addClass('mbsc-fr-btn-a');
            }
            if (L3v.type === 'mousedown') {
                x73(document).on('mouseup', C4v);
            } else if (L3v.type === 'pointerdown') {
                x73(document).on('pointerup', C4v);
            }
        }

        function C4v(W3v) {
            if (r4v) {
                r4v.removeClass('mbsc-fr-btn-a');
                r4v = null;
            }
            if (W3v.type === 'mouseup') {
                x73(document).off('mouseup', C4v);
            } else if (W3v.type === 'pointerup') {
                x73(document).off('pointerup', C4v);
            }
        }

        function w4v(n3v) {
            if (n3v.keyCode == 13) {
                L4v.select();
            } else if (n3v.keyCode == 27) {
                L4v.cancel();
            }
        }

        function s4v(g3v) {
            if (!g3v && !D1C) {
                d4v.focus();
            }
            L4v.ariaMessage(W4v.ariaMessage);
        }

        function z4v(P3v) {
            var y3v = o83,
                B3v = W4v.focusOnClose;
            L4v._markupRemove();
            n4v.remove();
            if (y4v) {
                P4v.mbscModals--;
                if (W4v.scrollLock) {
                    P4v.mbscLock--;
                }
                if (!P4v.mbscLock) {
                    q4v.removeClass('mbsc-fr-lock');
                }
                if (!P4v.mbscModals) {
                    q4v.removeClass('mbsc-fr-lock-ios mbsc-fr-lock-ctx');
                    if (N4v) {
                        O4v.css({
                            top: '',
                            left: ''
                        });
                        R4v.scrollLeft(G4v);
                        R4v.scrollTop(c4v);
                    }
                    if (!P3v) {
                        if (!y3v) {
                            y3v = g4v;
                        }
                        setTimeout(function() {
                            if (B3v === undefined || B3v === true) {
                                Y83 = true;
                                y3v[0].focus();
                            } else if (B3v) {
                                x73(B3v)[0].focus();
                            }
                        }, 200);
                    }
                }
            }
            L4v._isVisible = false;
            Y4v = false;
            u4v('onHide');
        }

        function l4v(u3v) {
            clearTimeout(v4v[u3v.type]);
            v4v[u3v.type] = setTimeout(function() {
                var K3v, R3v = u3v.type == 'scroll';
                if (R3v && !V4v) {
                    return;
                }
                L4v.position(!R3v);
                if (u3v.type == 'orientationchange') {
                    a4v.style.display = 'none';
                    K3v = a4v.offsetHeight;
                    a4v.style.display = '';
                }
            }, 200);
        }

        function A3v(k3v) {
            if (k3v.target.nodeType && !d4v.contains(k3v.target)) {
                d4v.focus();
            }
        }

        function h4v(O3v, r3v) {
            if (O3v) {
                O3v();
            }
            if (L4v.show() !== false) {
                o83 = r3v;
            }
        }

        function j4v() {
            L4v._fillValue();
            u4v('onSet', {
                valueText: L4v._value
            });
        }

        function F4v() {
            u4v('onCancel', {
                valueText: L4v._value
            });
        }

        function x4v() {
            L4v.setVal(null, true);
        }
        var H4v, O4v, M4v, q4v, n4v, o4v, X3v, E4v, R4v, b4v, i4v, r4v, P4v, B4v, k4v, y4v, Y4v, t4v, T4v, K4v, U4v, N4v, d4v, a4v, Z4v, p4v, W4v, G4v, V4v, c4v, S4v, u4v, m4v, e4v, L4v = this,
            g4v = x73(D4v),
            J4v = [],
            v4v = {};
        R1C.Base.call(this, D4v, Q4v, true);
        L4v.position = function(J3v) {
            var Z3v, c3v, V3v, h3v, N3v, S3v, p3v, m3v, e3v, G3v, Y3v, t3v, a3v, d3v, i3v, C3v, o3v = {},
                E3v = 0,
                T3v = 0,
                q3v = 0,
                U3v = 0;
            if (p4v || !Y4v) {
                return;
            }
            L4v._position(n4v);
            t3v = t4v.offsetHeight;
            a3v = t4v.offsetWidth;
            if (m4v === a3v && e4v === t3v && J3v) {
                return;
            }
            if (L4v._isFullScreen || /top|bottom/.test(W4v.display)) {
                E4v.width(a3v);
            } else {
                b4v.width('');
            }
            if (u4v('onPosition', {
                    target: t4v,
                    windowWidth: a3v,
                    windowHeight: t3v
                }) === false || !y4v) {
                return;
            }
            x73('.mbsc-comp', n4v).each(function() {
                var v3v = j73.instances[this.id];
                if (v3v && v3v !== L4v && v3v.position) {
                    v3v.position();
                }
            });
            if (!L4v._isFullScreen && /center|bubble/.test(W4v.display)) {
                x73('.mbsc-w-p', n4v).each(function() {
                    d3v = this.getBoundingClientRect().width;
                    U3v += d3v;
                    q3v = d3v > q3v ? d3v : q3v;
                });
                b4v.css({
                    'width': L4v._isLiquid ? Math.min(W4v.maxPopupWidth, a3v - 16) : Math.ceil(U3v > a3v ? q3v : U3v),
                    'white-space': U3v > a3v ? '' : 'nowrap'
                });
            }
            T4v = a4v.offsetWidth;
            K4v = a4v.offsetHeight;
            V4v = K4v <= t3v && T4v <= a3v;
            if (U4v) {
                E3v = R4v.scrollLeft();
                T3v = R4v.scrollTop();
            }
            if (W4v.display == 'center') {
                C3v = Math.max(0, E3v + (a3v - T4v) / 2);
                i3v = Math.max(0, T3v + (t3v - K4v) / 2);
            } else if (W4v.display == 'bubble') {
                Z3v = W4v.anchor === undefined ? g4v : x73(W4v.anchor);
                p3v = x73('.mbsc-fr-arr-i', n4v)[0];
                h3v = Z3v.offset();
                N3v = h3v.top + (k4v ? T3v - O4v.offset().top : 0);
                S3v = h3v.left + (k4v ? E3v - O4v.offset().left : 0);
                c3v = Z3v[0].offsetWidth;
                V3v = Z3v[0].offsetHeight;
                m3v = p3v.offsetWidth;
                e3v = p3v.offsetHeight;
                C3v = p1C(S3v - (T4v - c3v) / 2, E3v + 8, E3v + a3v - T4v - 8);
                i3v = N3v - K4v - e3v / 2;
                if (i3v < T3v || N3v > T3v + t3v) {
                    E4v.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
                    i3v = N3v + V3v + e3v / 2;
                } else {
                    E4v.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
                }
                x73('.mbsc-fr-arr', n4v).css({
                    left: p1C(S3v + c3v / 2 - (C3v + (T4v - m3v) / 2), 0, m3v)
                });
                V4v = i3v > T3v && C3v > E3v && i3v + K4v <= T3v + t3v && C3v + T4v <= E3v + a3v;
            } else {
                C3v = E3v;
                i3v = W4v.display == 'top' ? T3v : Math.max(0, T3v + t3v - K4v);
            }
            if (U4v) {
                G3v = Math.max(i3v + K4v, k4v ? P4v.scrollHeight : x73(document).height());
                Y3v = Math.max(C3v + T4v, k4v ? P4v.scrollWidth : x73(document).width());
                X3v.css({
                    width: Y3v,
                    height: G3v
                });
                if (W4v.scroll && W4v.display == 'bubble' && (i3v + K4v + 8 > T3v + t3v || N3v > T3v + t3v || N3v + V3v < T3v)) {
                    p4v = true;
                    setTimeout(function() {
                        p4v = false;
                    }, 300);
                    R4v.scrollTop(Math.min(N3v, i3v + K4v - t3v + 8, G3v - t3v));
                }
            }
            o3v.top = Math.floor(i3v);
            o3v.left = Math.floor(C3v);
            E4v.css(o3v);
            m4v = a3v;
            e4v = t3v;
        };
        L4v.attachShow = function(F3v, D3v) {
            var H3v, b3v = x73(F3v),
                M3v = b3v.prop('readonly');
            if (W4v.display !== 'inline') {
                if ((W4v.showOnFocus || W4v.showOnTap) && b3v.is('input,select')) {
                    b3v.prop('readonly', true).on('mousedown.mbsc', function(x3v) {
                        x3v.preventDefault();
                    }).on('focus.mbsc', function() {
                        if (L4v._isVisible) {
                            this.blur();
                        }
                    });
                    H3v = x73('label[for="' + b3v.attr('id') + '"]');
                    if (!H3v.length) {
                        H3v = b3v.closest('label');
                    }
                }
                if (b3v.is('select')) {
                    return;
                }
                if (W4v.showOnFocus) {
                    b3v.on('focus.mbsc', function() {
                        if (!Y83) {
                            h4v(D3v, b3v);
                        } else {
                            Y83 = false;
                        }
                    });
                }
                if (W4v.showOnTap) {
                    b3v.on('keydown.mbsc', function(j3v) {
                        if (j3v.keyCode == 32 || j3v.keyCode == 13) {
                            j3v.preventDefault();
                            j3v.stopPropagation();
                            h4v(D3v, b3v);
                        }
                    });
                    L4v.tap(b3v, function() {
                        h4v(D3v, b3v);
                    });
                    if (H3v && H3v.length) {
                        L4v.tap(H3v, function() {
                            h4v(D3v, b3v);
                        });
                    }
                }
                J4v.push({
                    readOnly: M3v,
                    el: b3v,
                    lbl: H3v
                });
            }
        };
        L4v.select = function() {
            if (y4v) {
                L4v.hide(false, 'set', false, j4v);
            } else {
                j4v();
            }
        };
        L4v.cancel = function() {
            if (y4v) {
                L4v.hide(false, 'cancel', false, F4v);
            } else {
                F4v();
            }
        };
        L4v.clear = function() {
            L4v._clearValue();
            u4v('onClear');
            if (y4v && L4v._isVisible && !L4v.live) {
                L4v.hide(false, 'clear', false, x4v);
            } else {
                x4v();
            }
        };
        L4v.enable = function() {
            W4v.disabled = false;
            if (L4v._isInput) {
                g4v.prop('disabled', false);
            }
        };
        L4v.disable = function() {
            W4v.disabled = true;
            if (L4v._isInput) {
                g4v.prop('disabled', true);
            }
        };
        L4v.show = function(f9v, z3v) {
            function l3v() {
                n4v.off(L83, l3v).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + B4v).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + B4v);
                s4v(z3v);
            }
            var I9v, w3v;
            if (W4v.disabled || L4v._isVisible) {
                return;
            }
            L4v._readValue();
            if (u4v('onBeforeShow') === false) {
                return false;
            }
            o83 = null;
            B4v = W4v.animate;
            i4v = W4v.buttons || [];
            U4v = k4v || W4v.display == 'bubble';
            N4v = W5C && !U4v && W4v.scrollLock;
            I9v = i4v.length > 0;
            S4v = false;
            if (B4v !== false) {
                if (W4v.display == 'top') {
                    B4v = B4v || 'slidedown';
                } else if (W4v.display == 'bottom') {
                    B4v = B4v || 'slideup';
                } else if (W4v.display == 'center' || W4v.display == 'bubble') {
                    B4v = B4v || 'pop';
                }
            }
            if (y4v) {
                c4v = Math.max(0, R4v.scrollTop());
                G4v = Math.max(0, R4v.scrollLeft());
                m4v = 0;
                e4v = 0;
                if (N4v && !q4v.hasClass('mbsc-fr-lock-ios')) {
                    O4v.css({
                        top: -c4v + 'px',
                        left: -G4v + 'px'
                    });
                }
                q4v.addClass((W4v.scrollLock ? 'mbsc-fr-lock' : '') + (N4v ? ' mbsc-fr-lock-ios' : '') + (k4v ? ' mbsc-fr-lock-ctx' : ''));
                if (x73(document.activeElement).is('input,textarea')) {
                    document.activeElement.blur();
                }
                if (j73.activeInstance) {
                    j73.activeInstance.hide();
                }
                j73.activeInstance = L4v;
                P4v.mbscModals = P4v.mbscModals || 0;
                P4v.mbscLock = P4v.mbscLock || 0;
                P4v.mbscModals++;
                if (W4v.scrollLock) {
                    P4v.mbscLock++;
                }
            }
            w3v = '<div lang="' + W4v.lang + '" class="mbsc-fr mbsc-' + W4v.theme + (W4v.baseTheme ? ' mbsc-' + W4v.baseTheme : '') + ' mbsc-fr-' + W4v.display + ' ' + (W4v.cssClass || '') + ' ' + (W4v.compClass || '') + (L4v._isLiquid ? ' mbsc-fr-liq' : '') + (N4v ? ' mbsc-platform-ios' : '') + (I9v ? i4v.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (y4v ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + '<div class="mbsc-fr-popup' + (W4v.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (W4v.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + (W4v.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + '<div class="mbsc-fr-w"><div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (W4v.headerText ? '<div class="mbsc-fr-hdr">' + (D83(W4v.headerText) ? W4v.headerText : '') + '</div>' : '') + '<div class="mbsc-fr-c">';
            w3v += L4v._generateContent();
			w3v += '</div>';
            if (I9v) {
                w3v += '<div class="mbsc-fr-btn-cont">';
                x73.each(i4v, function(b, a) {
                    a = D83(a) ? L4v.buttons[a] : a;
                    if (a.handler === 'set') {
                        a.parentClass = 'mbsc-fr-btn-s';
                    }
                    if (a.handler === 'cancel') {
                        a.parentClass = 'mbsc-fr-btn-c';
                    }
                    w3v += '<div' + (W4v.btnWidth ? ' style="width:' + 100 / i4v.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (a.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + b + ' mbsc-fr-btn-e ' + (a.cssClass === undefined ? W4v.btnClass : a.cssClass) + (a.icon ? ' mbsc-ic mbsc-ic-' + a.icon : '') + '">' + (a.text || '') + '</div></div>';
                });
                w3v += '</div>';
            }
            w3v += '</div></div></div></div>' + (y4v ? '</div></div>' : '');
            n4v = x73(w3v);
            X3v = x73('.mbsc-fr-persp', n4v);
            o4v = x73('.mbsc-fr-scroll', n4v);
            b4v = x73('.mbsc-fr-w', n4v);
            M4v = x73('.mbsc-fr-hdr', n4v);
            E4v = x73('.mbsc-fr-popup', n4v);
            H4v = x73('.mbsc-fr-aria', n4v);
            t4v = n4v[0];
            d4v = o4v[0];
            a4v = E4v[0];
            L4v._markup = n4v;
            L4v._header = M4v;
            L4v._isVisible = true;
            Z4v = 'orientationchange resize';
            L4v._markupReady(n4v);
            u4v('onMarkupReady', {
                target: t4v
            });
            if (y4v) {
                x73(window).on('keydown', w4v);
                if (W4v.scrollLock) {
                    n4v.on('touchmove mousewheel wheel', function(L9v) {
                        if (V4v) {
                            L9v.preventDefault();
                        }
                    });
                }
                if (W4v.focusTrap) {
                    R4v.on('focusin', A3v);
                }
                if (W4v.closeOnOverlayTap) {
                    var s3v, Q3v, A9v, X9v;
                    o4v.on('touchstart mousedown', function(W9v) {
                        if (!Q3v && W9v.target == o4v[0]) {
                            Q3v = true;
                            s3v = false;
                            A9v = b23(W9v, 'X');
                            X9v = b23(W9v, 'Y');
                        }
                    }).on('touchmove mousemove', function(n9v) {
                        if (Q3v && !s3v && (Math.abs(b23(n9v, 'X') - A9v) > 9 || Math.abs(b23(n9v, 'Y') - X9v) > 9)) {
                            s3v = true;
                        }
                    }).on('touchcancel', function() {
                        Q3v = false;
                    }).on('touchend touchcancel mouseup', function(g9v) {
                        if (Q3v && !s3v) {
                            L4v.cancel();
                            if (g9v.type != 'mouseup') {
                                e23.preventClick();
                            }
                        }
                        Q3v = false;
                    });
                }
                if (U4v) {
                    Z4v += ' scroll';
                }
            }
            setTimeout(function() {
                if (y4v) {
                    n4v.appendTo(O4v);
                } else if (g4v.is('div') && !L4v._hasContent) {
                    g4v.empty().append(n4v);
                } else {
                    if (g4v.hasClass('mbsc-control')) {
                        var B9v = g4v.closest('.mbsc-control-w');
                        n4v.insertAfter(B9v);
                        if (B9v.hasClass('mbsc-select')) {
                            B9v.addClass('mbsc-select-inline');
                        }
                    } else {
                        n4v.insertAfter(g4v);
                    }
                }
                Y4v = true;
                L4v._markupInserted(n4v);
                u4v('onMarkupInserted', {
                    target: t4v
                });
                n4v.on('selectstart mousedown', m1C).on('click', '.mbsc-fr-btn-e', m1C).on('keydown', '.mbsc-fr-btn-e', function(y9v) {
                    if (y9v.keyCode == 32) {
                        y9v.preventDefault();
                        y9v.stopPropagation();
                        this.click();
                    }
                }).on('keydown', function(P9v) {
                    if (P9v.keyCode == 32) {
                        P9v.preventDefault();
                    } else if (P9v.keyCode == 9 && y4v && W4v.focusTrap) {
                        var u9v = n4v.find('[tabindex="0"]').filter(function() {
                                return this.offsetWidth > 0 || this.offsetHeight > 0;
                            }),
                            k9v = u9v.index(x73(':focus', n4v)),
                            R9v = u9v.length - 1,
                            K9v = 0;
                        if (P9v.shiftKey) {
                            R9v = 0;
                            K9v = -1;
                        }
                        if (k9v === R9v) {
                            u9v.eq(K9v)[0].focus();
                            P9v.preventDefault();
                        }
                    }
                }).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', f3v).on('touchend', '.mbsc-fr-btn-e', C4v);
                x73('input,select,textarea', n4v).on('selectstart mousedown', function(O9v) {
                    O9v.stopPropagation();
                }).on('keydown', function(r9v) {
                    if (r9v.keyCode == 32) {
                        r9v.stopPropagation();
                    }
                });
                t4v.addEventListener('touchstart', function() {
                    if (!S4v) {
                        S4v = true;
                        O4v.find('.mbsc-no-touch').removeClass('mbsc-no-touch');
                    }
                }, true);
                x73.each(i4v, function(T9v, t9v) {
                    L4v.tap(x73('.mbsc-fr-btn' + T9v, n4v), function(a9v) {
                        t9v = D83(t9v) ? L4v.buttons[t9v] : t9v;
                        (D83(t9v.handler) ? L4v.handlers[t9v.handler] : t9v.handler).call(this, a9v, L4v);
                    }, true);
                });
                L4v._attachEvents(n4v);
                L4v.position();
                R4v.on(Z4v, l4v);
                if (y4v) {
                    if (B4v && !f9v) {
                        n4v.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + B4v).on(L83, l3v).find('.mbsc-fr-popup').addClass('mbsc-anim-' + B4v);
                    } else {
                        s4v(z3v);
                    }
                }
                u4v('onShow', {
                    target: t4v,
                    valueText: L4v._tempValue
                });
            }, N4v ? 100 : 0);
        };
        L4v.hide = function(i9v, E9v, C9v, N9v) {
            function q9v() {
                n4v.off(L83, q9v);
                z4v(i9v);
            }
            if (!L4v._isVisible || !C9v && !L4v._isValid && E9v == 'set' || !C9v && u4v('onBeforeClose', {
                    valueText: L4v._tempValue,
                    button: E9v
                }) === false) {
                return false;
            }
            if (y4v) {
                if (x73(document.activeElement).is('input,textarea') && a4v.contains(document.activeElement)) {
                    document.activeElement.blur();
                }
                x73(window).off('keydown', w4v);
                delete j73.activeInstance;
            }
            if (n4v) {
                if (y4v && B4v && !i9v) {
                    n4v.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + B4v).on(L83, q9v).find('.mbsc-fr-popup').addClass('mbsc-anim-' + B4v);
                } else {
                    z4v(i9v);
                }
                L4v._detachEvents(n4v);
                R4v.off(Z4v, l4v).off('focusin', A3v);
            }
            if (N9v) {
                N9v();
            }
            u4v('onClose', {
                valueText: L4v._value
            });
        };
        L4v.ariaMessage = function(U9v) {
            H4v.html('');
            setTimeout(function() {
                H4v.html(U9v);
            }, 100);
        };
        L4v.isVisible = function() {
            return L4v._isVisible;
        };
        L4v.setVal = s73;
        L4v.getVal = s73;
        L4v._generateContent = s73;
        L4v._attachEvents = s73;
        L4v._detachEvents = s73;
        L4v._readValue = s73;
        L4v._clearValue = s73;
        L4v._fillValue = s73;
        L4v._markupReady = s73;
        L4v._markupInserted = s73;
        L4v._markupRemove = s73;
        L4v._position = s73;
        L4v.__processSettings = s73;
        L4v.__init = s73;
        L4v.__destroy = s73;
        L4v._destroy = function() {
            L4v.hide(true, false, true);
            g4v.off('.mbsc');
            x73.each(J4v, function(d9v, Z9v) {
                Z9v.el.off('.mbsc').prop('readonly', Z9v.readOnly);
                if (Z9v.lbl) {
                    Z9v.lbl.off('.mbsc');
                }
            });
            L4v.__destroy();
        };
        L4v._processSettings = function() {
            var o9v, V9v;
            L4v.__processSettings();
            W4v.buttons = W4v.buttons || (W4v.display !== 'inline' ? ['set', 'cancel'] : []);
            W4v.headerText = W4v.headerText === undefined ? W4v.display !== 'inline' ? '{value}' : false : W4v.headerText;
            i4v = W4v.buttons || [];
            y4v = W4v.display !== 'inline';
            k4v = W4v.context != 'body';
            O4v = x73(W4v.context);
            q4v = k4v ? O4v : x73('body,html');
            P4v = O4v[0];
            L4v._window = R4v = x73(k4v ? W4v.context : window);
            L4v.live = true;
            for (V9v = 0; V9v < i4v.length; V9v++) {
                o9v = i4v[V9v];
                if (o9v == 'ok' || o9v == 'set' || o9v.handler == 'set') {
                    L4v.live = false;
                }
            }
            L4v.buttons.set = {
                text: W4v.setText,
                icon: W4v.setIcon,
                handler: 'set'
            };
            L4v.buttons.cancel = {
                text: W4v.cancelText,
                icon: W4v.cancelIcon,
                handler: 'cancel'
            };
            L4v.buttons.close = {
                text: W4v.closeText,
                icon: W4v.closeIcon,
                handler: 'cancel'
            };
            L4v.buttons.clear = {
                text: W4v.clearText,
                icon: W4v.clearIcon,
                handler: 'clear'
            };
            L4v._isInput = g4v.is('input');
        };
        L4v._init = function() {
            if (L4v._isVisible) {
                L4v.hide(true, false, true);
            }
            g4v.off('.mbsc');
            L4v.__init();
            L4v._isLiquid = W4v.layout == 'liquid';
            if (y4v) {
                L4v._readValue();
                if (!L4v._hasContent) {
                    L4v.attachShow(g4v);
                }
            } else {
                L4v.show();
            }
            g4v.on('change.mbsc', function() {
                if (!L4v._preventChange) {
                    L4v.setVal(g4v.val(), true, false);
                }
                L4v._preventChange = false;
            });
        };
        L4v.buttons = {};
        L4v.handlers = {
            set: L4v.select,
            cancel: L4v.cancel,
            clear: L4v.clear
        };
        L4v._value = null;
        L4v._isValid = true;
        L4v._isVisible = false;
        W4v = L4v.settings;
        u4v = L4v.trigger;
        if (!I3v) {
            L4v.init(Q4v);
        }
    };
    n23.prototype._defaults = {
        lang: 'en',
        setText: 'Set',
        selectedText: '{count} selected',
        closeText: 'Close',
        cancelText: 'Cancel',
        clearText: 'Clear',
        context: 'body',
        maxPopupWidth: 600,
        disabled: false,
        closeOnOverlayTap: true,
        showOnFocus: D1C || x1C,
        showOnTap: true,
        display: 'center',
        scroll: true,
        scrollLock: true,
        tap: true,
        btnClass: 'mbsc-fr-btn',
        btnWidth: true,
        focusTrap: true,
        focusOnClose: !B5C
    };
    R1C.Frame = n23;
    H83.frame.mobiscroll = {
        headerText: false,
        btnWidth: false
    };
    H83.scroller.mobiscroll = Q73({}, H83.frame.mobiscroll, {
        rows: 5,
        showLabel: false,
        selectedLineBorder: 1,
        weekDays: 'min',
        checkIcon: 'ion-ios7-checkmark-empty',
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
    });
    if (X23) {
        x73(window).on('focus', function() {
            if (o83) {
                Y83 = true;
            }
        });
    }
    var a1C = j73.classes;
    var u23 = j73.util;
    var r23 = u23.constrain;
    var P1C = u23.jsPrefix;
    var X5C = u23.prefix;
    var z23 = u23.getCoord;
    var F83 = u23.getPosition;
    var a5C = u23.testTouch;
    var A83 = u23.isNumeric;
    var o5C = u23.isString;
    var j5C = A23 == 'ios';
    var X83 = function h9v(z9v, r7v, G7v) {
        function Z7v(S7v) {
            b9v('onStart', {
                domEvent: S7v
            });
            if (G9v.stopProp) {
                S7v.stopPropagation();
            }
            if (G9v.prevDef || S7v.type == 'mousedown') {
                S7v.preventDefault();
            }
            if (G9v.readonly || G9v.lock && w9v) {
                return;
            }
            if (a5C(S7v, this) && !W7v) {
                if (H9v) {
                    H9v.removeClass('mbsc-btn-a');
                }
                X7v = false;
                if (!w9v) {
                    H9v = x73(S7v.target).closest('.mbsc-btn-e', this);
                    if (H9v.length && !H9v.hasClass('mbsc-btn-d')) {
                        X7v = true;
                        i7v = setTimeout(function() {
                            H9v.addClass('mbsc-btn-a');
                        }, 100);
                    }
                }
                W7v = true;
                l9v = false;
                A7v = false;
                m9v.scrolled = w9v;
                O7v = z23(S7v, 'X');
                V7v = z23(S7v, 'Y');
                t7v = h7v = O7v;
                n7v = 0;
                I7v = 0;
                e9v = 0;
                U7v = new Date();
                J9v = +F83(x9v, S9v) || 0;
                if (w9v) {
                    B7v(J9v, j5C ? 0 : 1);
                }
                if (S7v.type === 'mousedown') {
                    x73(document).on('mousemove', g7v).on('mouseup', R7v);
                }
            }
        }

        function g7v(p7v) {
            if (W7v) {
                if (G9v.stopProp) {
                    p7v.stopPropagation();
                }
                t7v = z23(p7v, 'X');
                C7v = z23(p7v, 'Y');
                n7v = t7v - O7v;
                I7v = C7v - V7v;
                e9v = S9v ? I7v : n7v;
                if (X7v && (Math.abs(I7v) > G9v.thresholdY || Math.abs(n7v) > G9v.thresholdX)) {
                    clearTimeout(i7v);
                    H9v.removeClass('mbsc-btn-a');
                    X7v = false;
                }
                if (m9v.scrolled || !A7v && Math.abs(e9v) > q7v) {
                    if (!l9v) {
                        b9v('onGestureStart', p9v);
                    }
                    m9v.scrolled = l9v = true;
                    if (!s9v) {
                        s9v = true;
                        u7v = m83(o7v);
                    }
                }
                if (S9v || G9v.scrollLock) {
                    p7v.preventDefault();
                } else {
                    if (m9v.scrolled) {
                        p7v.preventDefault();
                    } else if (Math.abs(I7v) > 7) {
                        A7v = true;
                        m9v.scrolled = true;
                        F9v.trigger('touchend');
                    }
                }
            }
        }

        function o7v() {
            if (Q9v) {
                e9v = r23(e9v, -Y9v * Q9v, Y9v * Q9v);
            }
            B7v(r23(J9v + e9v, M9v - T7v, D9v + T7v));
            s9v = false;
        }

        function R7v(c7v) {
            if (W7v) {
                var m7v, e7v = new Date() - U7v;
                if (G9v.stopProp) {
                    c7v.stopPropagation();
                }
                h83(u7v);
                s9v = false;
                if (!A7v && m9v.scrolled) {
                    if (G9v.momentum && e7v < 300) {
                        m7v = e9v / e7v;
                        e9v = Math.max(Math.abs(e9v), m7v * m7v / G9v.speedUnit) * (e9v < 0 ? -1 : 1);
                    }
                    d7v(e9v);
                }
                if (X7v) {
                    clearTimeout(i7v);
                    H9v.addClass('mbsc-btn-a');
                    setTimeout(function() {
                        H9v.removeClass('mbsc-btn-a');
                    }, 100);
                    if (!A7v && !m9v.scrolled) {
                        b9v('onBtnTap', {
                            target: H9v[0]
                        });
                    }
                }
                if (c7v.type == 'mouseup') {
                    x73(document).off('mousemove', g7v).off('mouseup', R7v);
                }
                W7v = false;
            }
        }

        function E7v(Y7v) {
            Y7v = Y7v.originalEvent || Y7v;
            e9v = S9v ? Y7v.deltaY || Y7v.wheelDelta || Y7v.detail : Y7v.deltaX;
            b9v('onStart', {
                domEvent: Y7v
            });
            if (G9v.stopProp) {
                Y7v.stopPropagation();
            }
            if (e9v) {
                Y7v.preventDefault();
                if (Y7v.deltaMode && Y7v.deltaMode == 1) {
                    e9v *= 5;
                }
                e9v = r23(-e9v, -20, 20);
                J9v = c9v;
                if (G9v.readonly || J9v + e9v < M9v || J9v + e9v > D9v) {
                    return;
                }
                if (!l9v) {
                    p9v = {
                        posX: S9v ? 0 : c9v,
                        posY: S9v ? c9v : 0,
                        originX: S9v ? 0 : J9v,
                        originY: S9v ? J9v : 0,
                        direction: e9v > 0 ? S9v ? 270 : 360 : S9v ? 90 : 180
                    };
                    b9v('onGestureStart', p9v);
                }
                if (!s9v) {
                    s9v = true;
                    u7v = m83(o7v);
                }
                l9v = true;
                clearTimeout(N7v);
                N7v = setTimeout(function() {
                    h83(u7v);
                    s9v = false;
                    l9v = false;
                    d7v(e9v);
                }, 200);
            }
        }

        function d7v(b7v) {
            var J7v, H7v, v7v;
            if (Q9v) {
                b7v = r23(b7v, -Y9v * Q9v, Y9v * Q9v);
            }
            v7v = r23(Math.round((J9v + b7v) / Y9v) * Y9v, M9v, D9v);
            j9v = Math.round(v7v / Y9v);
            if (v9v) {
                if (b7v < 0) {
                    for (J7v = v9v.length - 1; J7v >= 0; J7v--) {
                        if (Math.abs(v7v) + L7v >= v9v[J7v].breakpoint) {
                            j9v = J7v;
                            P7v = 2;
                            v7v = v9v[J7v].snap2;
                            break;
                        }
                    }
                } else if (b7v >= 0) {
                    for (J7v = 0; J7v < v9v.length; J7v++) {
                        if (Math.abs(v7v) <= v9v[J7v].breakpoint) {
                            j9v = J7v;
                            P7v = 1;
                            v7v = v9v[J7v].snap1;
                            break;
                        }
                    }
                }
                v7v = r23(v7v, M9v, D9v);
            }
            H7v = G9v.time || (c9v < M9v || c9v > D9v ? 1000 : Math.max(1000, Math.abs(v7v - c9v) * G9v.timeUnit));
            p9v.destinationX = S9v ? 0 : v7v;
            p9v.destinationY = S9v ? v7v : 0;
            p9v.duration = H7v;
            p9v.transitionTiming = f7v;
            b9v('onGestureEnd', p9v);
            B7v(v7v, H7v);
        }

        function B7v(D7v, M7v, w7v, Q7v) {
            var x7v = D7v != c9v,
                j7v = M7v > 1,
                F7v = function s7v() {
                    clearInterval(y7v);
                    clearTimeout(K7v);
                    w9v = false;
                    c9v = D7v;
                    p9v.posX = S9v ? 0 : D7v;
                    p9v.posY = S9v ? D7v : 0;
                    if (x7v) {
                        b9v('onMove', p9v);
                    }
                    if (j7v) {
                        b9v('onAnimationEnd', p9v);
                    }
                    if (Q7v) {
                        Q7v();
                    }
                };
            p9v = {
                posX: S9v ? 0 : c9v,
                posY: S9v ? c9v : 0,
                originX: S9v ? 0 : J9v,
                originY: S9v ? J9v : 0,
                direction: D7v - c9v > 0 ? S9v ? 270 : 360 : S9v ? 90 : 180
            };
            c9v = D7v;
            if (j7v) {
                p9v.destinationX = S9v ? 0 : D7v;
                p9v.destinationY = S9v ? D7v : 0;
                p9v.duration = M7v;
                p9v.transitionTiming = f7v;
                b9v('onAnimationStart', p9v);
            }
            k7v[P1C + 'Transition'] = M7v ? X5C + 'transform ' + Math.round(M7v) + 'ms ' + f7v : '';
            k7v[P1C + 'Transform'] = 'translate3d(' + (S9v ? '0,' + D7v + 'px,' : D7v + 'px,' + '0,') + '0)';
            if (!x7v && !w9v || !M7v || M7v <= 1) {
                F7v();
            } else if (M7v) {
                w9v = !w7v;
                clearInterval(y7v);
                y7v = setInterval(function() {
                    var z7v = +F83(x9v, S9v) || 0;
                    p9v.posX = S9v ? 0 : z7v;
                    p9v.posY = S9v ? z7v : 0;
                    b9v('onMove', p9v);
                    if (Math.abs(z7v - D7v) < 2) {
                        F7v();
                    }
                }, 100);
                clearTimeout(K7v);
                K7v = setTimeout(function() {
                    F7v();
                }, M7v);
            }
            if (G9v.sync) {
                G9v.sync(D7v, M7v, f7v);
            }
        }
        var H9v, i7v, L7v, n7v, I7v, e9v, a7v, f7v, T7v, t7v, C7v, p9v, X7v, h7v, D9v, Q9v, M9v, W7v, w9v, A7v, u7v, s9v, l9v, N7v, y7v, Y9v, v9v, J9v, U7v, O7v, V7v, k7v, x9v, K7v, q7v, b9v, S9v, m9v = this,
            c9v, j9v = 0,
            P7v = 1,
            G9v = r7v,
            F9v = x73(z9v);
        a1C.Base.call(this, z9v, r7v, true);
        m9v.scrolled = false;
        m9v.scroll = function(l7v, A2v, X2v, f2v) {
            if (!A83(l7v)) {
                l7v = Math.ceil((x73(l7v, z9v).length ? Math.round(x9v.offset()[a7v] - x73(l7v, z9v).offset()[a7v]) : c9v) / Y9v) * Y9v;
            } else {
                l7v = Math.round(l7v / Y9v) * Y9v;
            }
            l7v = r23(l7v, M9v, D9v);
            j9v = Math.round(l7v / Y9v);
            J9v = c9v;
            B7v(l7v, A2v, X2v, f2v);
        };
        m9v.refresh = function(L2v) {
            var I2v;
            L7v = G9v.contSize === undefined ? S9v ? F9v.height() : F9v.width() : G9v.contSize;
            M9v = G9v.minScroll === undefined ? Math.min(0, S9v ? L7v - x9v.height() : L7v - x9v.width()) : G9v.minScroll;
            D9v = G9v.maxScroll === undefined ? 0 : G9v.maxScroll;
            v9v = null;
            if (!S9v && G9v.rtl) {
                I2v = D9v;
                D9v = -M9v;
                M9v = -I2v;
            }
            if (o5C(G9v.snap)) {
                v9v = [];
                x9v.find(G9v.snap).each(function() {
                    var W2v = S9v ? this.offsetTop : this.offsetLeft,
                        n2v = S9v ? this.offsetHeight : this.offsetWidth;
                    v9v.push({
                        breakpoint: W2v + n2v / 2,
                        snap1: -W2v,
                        snap2: L7v - W2v - n2v
                    });
                });
            }
            Y9v = A83(G9v.snap) ? G9v.snap : 1;
            Q9v = G9v.snap ? G9v.maxSnapScroll : 0;
            f7v = G9v.easing;
            T7v = G9v.elastic ? A83(G9v.snap) ? Y9v : A83(G9v.elastic) ? G9v.elastic : 0 : 0;
            if (c9v === undefined) {
                c9v = G9v.initialPos;
                j9v = Math.round(c9v / Y9v);
            }
            if (!L2v) {
                m9v.scroll(G9v.snap ? v9v ? v9v[j9v]['snap' + P7v] : j9v * Y9v : c9v);
            }
        };
        m9v._processSettings = function() {
            S9v = G9v.axis == 'Y';
            a7v = S9v ? 'top' : 'left';
            x9v = G9v.moveElement || F9v.children().eq(0);
            k7v = x9v[0].style;
            q7v = S9v ? G9v.thresholdY : G9v.thresholdX;
        };
        m9v._init = function() {
            m9v.refresh();
            F9v.on('touchstart mousedown', Z7v).on('touchmove', g7v).on('touchend touchcancel', R7v);
            if (G9v.mousewheel) {
                F9v.on('wheel mousewheel', E7v);
            }
            if (z9v.addEventListener) {
                z9v.addEventListener('click', function(g2v) {
                    if (m9v.scrolled) {
                        m9v.scrolled = false;
                        g2v.stopPropagation();
                        g2v.preventDefault();
                    }
                }, true);
            }
        };
        m9v._destroy = function() {
            clearInterval(y7v);
            F9v.off('touchstart mousedown', Z7v).off('touchmove', g7v).off('touchend touchcancel', R7v).off('wheel mousewheel', E7v);
        };
        G9v = m9v.settings;
        b9v = m9v.trigger;
        if (!G7v) {
            m9v.init(r7v);
        }
    };
    X83.prototype = {
        _class: 'scrollview',
        _defaults: {
            speedUnit: 0.0022,
            timeUnit: 3,
            initialPos: 0,
            axis: 'Y',
            thresholdX: 10,
            thresholdY: 5,
            easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            stopProp: true,
            momentum: true,
            mousewheel: true,
            elastic: true
        }
    };
    a1C.ScrollView = X83;
    j73.presetShort('scrollview', 'ScrollView', false);
    var O23 = j73.util;
    var l83 = O23.jsPrefix;
    var e83 = O23.prefix;
    var W83 = O23.getCoord;
    var E5C = O23.testTouch;
    var p83 = X23 ? window.CSS : null;
    var e5C = p83 && p83.supports && p83.supports("(transform-style: preserve-3d)");
    var D5C = !e5C || A23 == 'wp' || A23 == 'android';
    j73.presetShort('scroller', 'Scroller', false);
    var x83 = function B2v(i2v, j2v, n8v) {
        function X8v(B8v) {
            var y8v = +x73(this).attr('data-index');
            B8v.stopPropagation();
            if (B8v.type === 'mousedown') {
                B8v.preventDefault();
            }
            if (E5C(B8v, this) && !F2v(y8v)) {
                Z2v = x73(this).addClass('mbsc-sc-btn-a');
                w2v = W83(B8v, 'X');
                z2v = W83(B8v, 'Y');
                q2v = true;
                S2v = false;
                setTimeout(function() {
                    s2v(y8v, Z2v.attr('data-dir') == 'inc' ? 1 : -1);
                }, 100);
                if (B8v.type === 'mousedown') {
                    x73(document).on('mousemove', v2v).on('mouseup', b2v);
                }
            }
        }

        function v2v(P8v) {
            if (Math.abs(w2v - W83(P8v, 'X')) > 7 || Math.abs(z2v - W83(P8v, 'Y')) > 7) {
                J2v(true);
            }
        }

        function b2v(u8v) {
            J2v();
            u8v.preventDefault();
            if (u8v.type === 'mouseup') {
                x73(document).off('mousemove', v2v).off('mouseup', b2v);
            }
        }

        function f8v(R8v) {
            var K8v = x73(this).attr('data-index'),
                k8v, O8v;
            if (R8v.keyCode == 38) {
                k8v = true;
                O8v = -1;
            } else if (R8v.keyCode == 40) {
                k8v = true;
                O8v = 1;
            } else if (R8v.keyCode == 32) {
                k8v = true;
                x2v(K8v, k2v[K8v]._$markup.find('.mbsc-sc-itm[data-val="' + R2v[K8v] + '"]'));
            }
            if (k8v) {
                R8v.stopPropagation();
                R8v.preventDefault();
                if (O8v && !q2v) {
                    q2v = true;
                    S2v = false;
                    s2v(K8v, O8v);
                }
            }
        }

        function g8v() {
            J2v();
        }

        function x2v(T8v, i8v) {
            var r8v = k2v[T8v],
                E8v = i8v.attr('data-index'),
                t8v = U2v(r8v, E8v),
                a8v = y2v._tempSelected[T8v],
                C8v = O23.isNumeric(r8v.multiple) ? r8v.multiple : Infinity;
            if (r2v('onItemTap', {
                    target: i8v[0],
                    index: T8v,
                    value: t8v,
                    selected: i8v.hasClass('mbsc-sc-itm-sel')
                }) !== false) {
                if (r8v.multiple && !r8v._disabled[t8v]) {
                    if (a8v[t8v] !== undefined) {
                        i8v.removeClass(T2v).removeAttr('aria-selected');
                        delete a8v[t8v];
                    } else {
                        if (C8v == 1) {
                            y2v._tempSelected[T8v] = a8v = {};
                            r8v._$markup.find('.mbsc-sc-itm-sel').removeClass(T2v).removeAttr('aria-selected');
                        }
                        if (O23.objectToArray(a8v).length < C8v) {
                            i8v.addClass(T2v).attr('aria-selected', 'true');
                            a8v[t8v] = t8v;
                        }
                    }
                }
                D2v(r8v, T8v, E8v, o2v, true, true, r8v.multiple);
                if (y2v.live && !r8v.multiple && (P2v.setOnTap === true || P2v.setOnTap[T8v])) {
                    setTimeout(function() {
                        y2v.select();
                    }, 200);
                }
            }
        }

        function M2v(N8v, q8v) {
            return (N8v._array ? N8v._map[q8v] : N8v.getIndex(q8v, y2v)) || 0;
        }

        function A8v(U8v, Z8v) {
            var d8v = U8v.data;
            if (Z8v >= U8v.min && Z8v <= U8v.max) {
                return U8v._array ? U8v.circular ? x73(d8v).get(Z8v % U8v._length) : d8v[Z8v] : x73.isFunction(d8v) ? d8v(Z8v, y2v) : '';
            }
        }

        function p2v(o8v) {
            return x73.isPlainObject(o8v) ? o8v.value !== undefined ? o8v.value : o8v.display : o8v;
        }

        function W8v(V8v) {
            var h8v = x73.isPlainObject(V8v) ? V8v.display : V8v;
            return h8v === undefined ? '' : h8v;
        }

        function U2v(G8v, S8v) {
            return p2v(A8v(G8v, S8v));
        }

        function s2v(p8v, m8v) {
            if (!S2v) {
                l2v(p8v, m8v);
            }
            if (q2v) {
                clearInterval(m2v);
                m2v = setInterval(function() {
                    l2v(p8v, m8v);
                }, P2v.delay);
            }
        }

        function J2v(e8v) {
            clearInterval(m2v);
            S2v = e8v;
            q2v = false;
            if (Z2v) {
                Z2v.removeClass('mbsc-sc-btn-a');
            }
        }

        function l2v(Y8v, J8v) {
            var c8v = k2v[Y8v];
            D2v(c8v, Y8v, c8v._current + J8v, o2v, J8v == 1 ? 1 : 2);
        }

        function F2v(v8v) {
            return x73.isArray(P2v.readonly) ? P2v.readonly[v8v] : P2v.readonly;
        }

        function H2v(b8v, H8v, M8v) {
            var D8v = b8v._index - b8v._batch;
            b8v.data = b8v.data || [];
            b8v.key = b8v.key !== undefined ? b8v.key : H8v;
            b8v.label = b8v.label !== undefined ? b8v.label : H8v;
            b8v._map = {};
            b8v._array = x73.isArray(b8v.data);
            if (b8v._array) {
                b8v._length = b8v.data.length;
                x73.each(b8v.data, function(F8v, x8v) {
                    b8v._map[p2v(x8v)] = F8v;
                });
            }
            b8v.circular = P2v.circular === undefined ? b8v.circular === undefined ? b8v._array && b8v._length > P2v.rows : b8v.circular : x73.isArray(P2v.circular) ? P2v.circular[H8v] : P2v.circular;
            b8v.min = b8v._array ? b8v.circular ? -Infinity : 0 : b8v.min === undefined ? -Infinity : b8v.min;
            b8v.max = b8v._array ? b8v.circular ? Infinity : b8v._length - 1 : b8v.max === undefined ? Infinity : b8v.max;
            b8v._nr = H8v;
            b8v._index = M2v(b8v, R2v[H8v]);
            b8v._disabled = {};
            b8v._batch = 0;
            b8v._current = b8v._index;
            b8v._first = b8v._index - O2v;
            b8v._last = b8v._index + O2v;
            b8v._offset = b8v._first;
            if (M8v) {
                b8v._offset -= b8v._margin / u2v + (b8v._index - D8v);
                b8v._margin += (b8v._index - D8v) * u2v;
            } else {
                b8v._margin = 0;
            }
            b8v._refresh = function(w8v) {
                var j8v = -(b8v.min - b8v._offset + (b8v.multiple && !K2v ? Math.floor(P2v.rows / 2) : 0)) * u2v,
                    Q8v = Math.min(j8v, -(b8v.max - b8v._offset - (b8v.multiple && !K2v ? Math.floor(P2v.rows / 2) : 0)) * u2v);
                Q73(b8v._scroller.settings, {
                    minScroll: Q8v,
                    maxScroll: j8v
                });
                b8v._scroller.refresh(w8v);
            };
            c2v[b8v.key] = b8v;
            return b8v;
        }

        function a2v(A1R, W1R, R1R, u1R, n1R) {
            var l8v, P1R, s8v, z8v, g1R, I1R, y1R, L1R, f1R = '',
                X1R = y2v._tempSelected[W1R],
                B1R = A1R._disabled || {};
            for (l8v = R1R; l8v <= u1R; l8v++) {
                s8v = A8v(A1R, l8v);
                g1R = W8v(s8v);
                z8v = p2v(s8v);
                P1R = s8v && s8v.cssClass !== undefined ? s8v.cssClass : '';
                I1R = s8v && s8v.label !== undefined ? s8v.label : '';
                y1R = s8v && s8v.invalid;
                L1R = z8v !== undefined && z8v == R2v[W1R] && !A1R.multiple;
                f1R += '<div role="option" aria-selected="' + (X1R[z8v] ? true : false) + '" class="mbsc-sc-itm ' + (n1R ? 'mbsc-sc-itm-3d ' : '') + P1R + ' ' + (L1R ? 'mbsc-sc-itm-sel ' : '') + (X1R[z8v] ? T2v : '') + (z8v === undefined ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (y1R ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (B1R[z8v] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + l8v + '" data-val="' + z8v + '"' + (I1R ? ' aria-label="' + I1R + '"' : '') + (L1R ? ' aria-selected="true"' : '') + ' style="height:' + u2v + 'px;line-height:' + u2v + 'px;' + (n1R ? e83 + 'transform:rotateX(' + (A1R._offset - l8v) * e2v % 360 + 'deg) translateZ(' + u2v * P2v.rows / 2 + 'px);' : '') + '">' + (C2v > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(u2v / C2v) + 'px;font-size:' + Math.round(u2v / C2v * 0.8) + 'px;">' : '') + g1R + (C2v > 1 ? '</div>' : '') + '</div>';
            }
            return f1R;
        }

        function I8v(k1R) {
            var K1R = P2v.headerText;
            return K1R ? typeof K1R === 'function' ? K1R.call(i2v, k1R) : K1R.replace(/\{value\}/i, k1R) : '';
        }

        function L8v(O1R, E1R, N1R) {
            var C1R = Math.round(-N1R / u2v) + O1R._offset,
                r1R = C1R - O1R._current,
                t1R = O1R._first,
                T1R = O1R._last,
                a1R = t1R + O2v - t2v + 1,
                i1R = T1R - O2v + t2v;
            if (r1R) {
                O1R._first += r1R;
                O1R._last += r1R;
                O1R._current = C1R;
                if (r1R > 0) {
                    O1R._$scroller.append(a2v(O1R, E1R, Math.max(T1R + 1, t1R + r1R), T1R + r1R));
                    x73('.mbsc-sc-itm', O1R._$scroller).slice(0, Math.min(r1R, T1R - t1R + 1)).remove();
                    if (K2v) {
                        O1R._$3d.append(a2v(O1R, E1R, Math.max(i1R + 1, a1R + r1R), i1R + r1R, true));
                        x73('.mbsc-sc-itm', O1R._$3d).slice(0, Math.min(r1R, i1R - a1R + 1)).attr('class', 'mbsc-sc-itm-del');
                    }
                } else if (r1R < 0) {
                    O1R._$scroller.prepend(a2v(O1R, E1R, t1R + r1R, Math.min(t1R - 1, T1R + r1R)));
                    x73('.mbsc-sc-itm', O1R._$scroller).slice(Math.max(r1R, t1R - T1R - 1)).remove();
                    if (K2v) {
                        O1R._$3d.prepend(a2v(O1R, E1R, a1R + r1R, Math.min(a1R - 1, i1R + r1R), true));
                        x73('.mbsc-sc-itm', O1R._$3d).slice(Math.max(r1R, a1R - i1R - 1)).attr('class', 'mbsc-sc-itm-del');
                    }
                }
                O1R._margin += r1R * u2v;
                O1R._$scroller.css('margin-top', O1R._margin + 'px');
            }
        }

        function Q2v(m1R, q1R, p1R, e1R) {
            var V1R, U1R = k2v[m1R],
                h1R = e1R || U1R._disabled,
                d1R = M2v(U1R, q1R),
                S1R = q1R,
                G1R = q1R,
                Z1R = 0,
                o1R = 0;
            if (q1R === undefined) {
                q1R = U2v(U1R, d1R);
            }
            if (h1R[q1R] === true) {
                V1R = 0;
                while (d1R - Z1R >= U1R.min && h1R[S1R] && V1R < 100) {
                    V1R++;
                    Z1R++;
                    S1R = U2v(U1R, d1R - Z1R);
                }
                V1R = 0;
                while (d1R + o1R < U1R.max && h1R[G1R] && V1R < 100) {
                    V1R++;
                    o1R++;
                    G1R = U2v(U1R, d1R + o1R);
                }
                if ((o1R < Z1R && o1R && p1R !== 2 || !Z1R || d1R - Z1R < 0 || p1R == 1) && !h1R[G1R]) {
                    q1R = G1R;
                } else {
                    q1R = S1R;
                }
            }
            return q1R;
        }

        function d2v(x1R, J1R, M1R, v1R, F1R, j1R) {
            var b1R, H1R, D1R, c1R, Y1R = y2v._isVisible;
            N2v = true;
            c1R = P2v.validate.call(i2v, {
                values: R2v.slice(0),
                index: J1R,
                direction: M1R
            }, y2v) || {};
            N2v = false;
            if (c1R.valid) {
                y2v._tempWheelArray = R2v = c1R.valid.slice(0);
            }
            if (!j1R) {
                x73.each(k2v, function(w1R, Q1R) {
                    if (Y1R) {
                        Q1R._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
                    }
                    Q1R._disabled = {};
                    if (c1R.disabled && c1R.disabled[w1R]) {
                        x73.each(c1R.disabled[w1R], function(l1R, z1R) {
                            Q1R._disabled[z1R] = true;
                            if (Y1R) {
                                Q1R._$markup.find('.mbsc-sc-itm[data-val="' + z1R + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
                            }
                        });
                    }
                    R2v[w1R] = Q1R.multiple ? R2v[w1R] : Q2v(w1R, R2v[w1R], M1R);
                    if (Y1R) {
                        if (!Q1R.multiple || J1R === undefined) {
                            Q1R._$markup.find('.mbsc-sc-itm-sel').removeClass(T2v).removeAttr('aria-selected');
                        }
                        if (Q1R.multiple) {
                            if (J1R === undefined) {
                                for (var s1R in y2v._tempSelected[w1R]) {
                                    Q1R._$markup.find('.mbsc-sc-itm[data-val="' + s1R + '"]').addClass(T2v).attr('aria-selected', 'true');
                                }
                            }
                        } else {
                            Q1R._$markup.find('.mbsc-sc-itm[data-val="' + R2v[w1R] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
                        }
                        H1R = M2v(Q1R, R2v[w1R]);
                        b1R = H1R - Q1R._index + Q1R._batch;
                        if (Math.abs(b1R) > 2 * O2v + 1) {
                            D1R = b1R + (2 * O2v + 1) * (b1R > 0 ? -1 : 1);
                            Q1R._offset += D1R;
                            Q1R._margin -= D1R * u2v;
                            Q1R._refresh();
                        }
                        Q1R._index = H1R + Q1R._batch;
                        Q1R._scroller.scroll(-(H1R - Q1R._offset + Q1R._batch) * u2v, J1R === w1R || J1R === undefined ? x1R : o2v, F1R);
                    }
                });
            }
            r2v('onValidated');
            y2v._tempValue = P2v.formatValue(R2v, y2v);
            if (Y1R) {
                y2v._header.html(I8v(y2v._tempValue));
            }
            if (y2v.live) {
                y2v._hasValue = v1R || y2v._hasValue;
                h2v(v1R, v1R, 0, true);
                if (v1R) {
                    r2v('onSet', {
                        valueText: y2v._value
                    });
                }
            }
            if (v1R) {
                r2v('onChange', {
                    valueText: y2v._tempValue
                });
            }
        }

        function D2v(A5R, f5R, I5R, L5R, W5R, n5R, g5R) {
            var X5R = U2v(A5R, I5R);
            if (X5R !== undefined) {
                R2v[f5R] = X5R;
                A5R._batch = A5R._array ? Math.floor(I5R / A5R._length) * A5R._length : 0;
                setTimeout(function() {
                    d2v(L5R, f5R, W5R, true, n5R, g5R);
                }, 10);
            }
        }

        function h2v(P5R, y5R, u5R, R5R, K5R) {
            if (!R5R) {
                d2v(u5R);
            } else {
                y2v._tempValue = P2v.formatValue(y2v._tempWheelArray, y2v);
            }
            if (!K5R) {
                y2v._wheelArray = [];
                for (var B5R = 0; B5R < R2v.length; B5R++) {
                    y2v._wheelArray[B5R] = k2v[B5R] && k2v[B5R].multiple ? Object.keys(y2v._tempSelected[B5R])[0] : R2v[B5R];
                }
                y2v._value = y2v._hasValue ? y2v._tempValue : null;
                y2v._selected = Q73(true, {}, y2v._tempSelected);
            }
            if (P5R) {
                if (y2v._isInput) {
                    G2v.val(y2v._hasValue ? y2v._tempValue : '');
                }
                r2v('onFill', {
                    valueText: y2v._hasValue ? y2v._tempValue : '',
                    change: y5R
                });
                if (y5R) {
                    y2v._preventChange = true;
                    G2v.trigger('change');
                }
            }
        }
        var Y2v, Z2v, t2v, O2v = 40,
            o2v = 1000,
            e2v, K2v, T2v, E2v, m2v, q2v, S2v, w2v, z2v, R2v, u2v, V2v, N2v, P2v, r2v, C2v, k2v, c2v, y2v = this,
            G2v = x73(i2v);
        n23.call(this, i2v, j2v, true);
        y2v.setVal = y2v._setVal = function(k5R, O5R, r5R, t5R, T5R) {
            y2v._hasValue = k5R !== null && k5R !== undefined;
            y2v._tempWheelArray = R2v = x73.isArray(k5R) ? k5R.slice(0) : P2v.parseValue.call(i2v, k5R, y2v) || [];
            h2v(O5R, r5R === undefined ? O5R : r5R, T5R, false, t5R);
        };
        y2v.getVal = y2v._getVal = function(i5R) {
            var a5R = y2v._hasValue || i5R ? y2v[i5R ? '_tempValue' : '_value'] : null;
            return O23.isNumeric(a5R) ? +a5R : a5R;
        };
        y2v.setArrayVal = y2v.setVal;
        y2v.getArrayVal = function(E5R) {
            return E5R ? y2v._tempWheelArray : y2v._wheelArray;
        };
        y2v.changeWheel = function(q5R, U5R, Z5R) {
            var N5R, C5R;
            x73.each(q5R, function(d5R, o5R) {
                C5R = c2v[d5R];
                N5R = C5R._nr;
                if (C5R) {
                    Q73(C5R, o5R);
                    H2v(C5R, N5R, true);
                    if (y2v._isVisible) {
                        if (K2v) {
                            C5R._$3d.html(a2v(C5R, N5R, C5R._first + O2v - t2v + 1, C5R._last - O2v + t2v, true));
                        }
                        C5R._$scroller.html(a2v(C5R, N5R, C5R._first, C5R._last)).css('margin-top', C5R._margin + 'px');
                        C5R._refresh(N2v);
                    }
                }
            });
            if (y2v._isVisible && !y2v._isLiquid && !N2v) {
                y2v.position();
            }
            if (!N2v) {
                d2v(U5R, undefined, undefined, Z5R);
            }
        };
        y2v.getValidValue = Q2v;
        y2v._generateContent = function() {
            var p5R, G5R = 0,
                h5R = '',
                S5R = K2v ? e83 + 'transform: translateZ(' + (u2v * P2v.rows / 2 + 3) + 'px);' : '',
                m5R = '<div class="mbsc-sc-whl-l" style="' + S5R + 'height:' + u2v + 'px;margin-top:-' + (u2v / 2 + (P2v.selectedLineBorder || 0)) + 'px;"></div>',
                V5R = 0;
            x73.each(P2v.wheels, function(c5R, e5R) {
                h5R += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (P2v.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + m5R + '<div class="mbsc-sc-whl-gr' + (K2v ? ' mbsc-sc-whl-gr-3d' : '') + (E2v ? ' mbsc-sc-cp' : '') + (P2v.width || P2v.maxWidth ? '"' : '" style="max-width:' + P2v.maxPopupWidth + 'px;"') + '>';
                x73.each(e5R, function(J5R, Y5R) {
                    y2v._tempSelected[V5R] = Q73({}, y2v._selected[V5R]);
                    k2v[V5R] = H2v(Y5R, V5R);
                    G5R += P2v.maxWidth ? P2v.maxWidth[V5R] || P2v.maxWidth : P2v.width ? P2v.width[V5R] || P2v.width : 0;
                    p5R = Y5R.label !== undefined ? Y5R.label : J5R;
                    h5R += '<div class="mbsc-sc-whl-w ' + (Y5R.cssClass || '') + (Y5R.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (P2v.width ? 'width:' + (P2v.width[V5R] || P2v.width) + 'px;' : (P2v.minWidth ? 'min-width:' + (P2v.minWidth[V5R] || P2v.minWidth) + 'px;' : '') + (P2v.maxWidth ? 'max-width:' + (P2v.maxWidth[V5R] || P2v.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + S5R + '"></div>' + m5R + '<div tabindex="0" aria-live="off" aria-label="' + p5R + '"' + (Y5R.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + V5R + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + P2v.rows * u2v * (K2v ? 1.1 : 1) + 'px;">' + (E2v ? '<div data-index="' + V5R + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (P2v.btnPlusClass || '') + '" style="height:' + u2v + 'px;line-height:' + u2v + 'px;"></div>' + '<div data-index="' + V5R + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (P2v.btnMinusClass || '') + '" style="height:' + u2v + 'px;line-height:' + u2v + 'px;"></div>' : '') + '<div class="mbsc-sc-lbl">' + p5R + '</div>' + '<div class="mbsc-sc-whl-c"' + ' style="height:' + V2v + 'px;margin-top:-' + (V2v / 2 + 1) + 'px;' + S5R + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (V2v - u2v) / 2 + 'px;">';
                    h5R += a2v(Y5R, V5R, Y5R._first, Y5R._last) + '</div></div>';
                    if (K2v) {
                        h5R += '<div class="mbsc-sc-whl-3d" style="height:' + u2v + 'px;margin-top:-' + u2v / 2 + 'px;">';
                        h5R += a2v(Y5R, V5R, Y5R._first + O2v - t2v + 1, Y5R._last - O2v + t2v, true);
                        h5R += '</div>';
                    }
                    h5R += '</div></div>';
                    V5R++;
                });
                h5R += '</div></div>';
            });
            if (G5R) {
                P2v.maxPopupWidth = G5R;
            }
            return h5R;
        };
        y2v._attachEvents = function(v5R) {
            x73('.mbsc-sc-btn', v5R).on('touchstart mousedown', X8v).on('touchmove', v2v).on('touchend touchcancel', b2v);
            x73('.mbsc-sc-whl', v5R).on('keydown', f8v).on('keyup', g8v);
        };
        y2v._detachEvents = function() {
            for (var b5R = 0; b5R < k2v.length; b5R++) {
                k2v[b5R]._scroller.destroy();
            }
        };
        y2v._markupReady = function(H5R) {
            Y2v = H5R;
            x73('.mbsc-sc-whl', Y2v).each(function(M5R) {
                var j5R, F5R = x73(this),
                    D5R = k2v[M5R],
                    x5R = -(D5R.min - D5R._offset + (D5R.multiple && !K2v ? Math.floor(P2v.rows / 2) : 0)) * u2v,
                    Q5R = Math.min(x5R, -(D5R.max - D5R._offset - (D5R.multiple && !K2v ? Math.floor(P2v.rows / 2) : 0)) * u2v);
                D5R._$markup = F5R;
                D5R._$scroller = x73('.mbsc-sc-whl-sc', this);
                D5R._$3d = x73('.mbsc-sc-whl-3d', this);
                D5R._scroller = new X83(this, {
                    mousewheel: P2v.mousewheel,
                    moveElement: D5R._$scroller,
                    initialPos: (D5R._first - D5R._index) * u2v,
                    contSize: 0,
                    snap: u2v,
                    minScroll: Q5R,
                    maxScroll: x5R,
                    maxSnapScroll: O2v,
                    prevDef: true,
                    stopProp: true,
                    timeUnit: 3,
                    easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                    sync: function w5R(z5R, s5R, l5R) {
                        if (K2v) {
                            D5R._$3d[0].style[l83 + 'Transition'] = s5R ? e83 + 'transform ' + Math.round(s5R) + 'ms ' + l5R : '';
                            D5R._$3d[0].style[l83 + 'Transform'] = 'rotateX(' + -z5R / u2v * e2v + 'deg)';
                        }
                    },
                    onStart: function A6R(f6R, X6R) {
                        X6R.settings.readonly = F2v(M5R);
                    },
                    onGestureStart: function I6R() {
                        F5R.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                        r2v('onWheelGestureStart', {
                            index: M5R
                        });
                    },
                    onGestureEnd: function L6R(W6R) {
                        var n6R = W6R.direction == 90 ? 1 : 2,
                            g6R = W6R.duration,
                            B6R = W6R.destinationY;
                        j5R = Math.round(-B6R / u2v) + D5R._offset;
                        D2v(D5R, M5R, j5R, g6R, n6R);
                    },
                    onAnimationStart: function y6R() {
                        F5R.addClass('mbsc-sc-whl-anim');
                    },
                    onAnimationEnd: function P6R() {
                        F5R.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
                        r2v('onWheelAnimationEnd', {
                            index: M5R
                        });
                        D5R._$3d.find('.mbsc-sc-itm-del').remove();
                    },
                    onMove: function u6R(R6R) {
                        L8v(D5R, M5R, R6R.posY);
                    },
                    onBtnTap: function K6R(k6R) {
                        x2v(M5R, x73(k6R.target));
                    }
                });
            });
            d2v();
        };
        y2v._fillValue = function() {
            y2v._hasValue = true;
            h2v(true, true, 0, true);
        };
        y2v._clearValue = function() {
            x73('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', Y2v).removeClass(T2v).removeAttr('aria-selected');
        };
        y2v._readValue = function() {
            var r6R = G2v.val() || '',
                O6R = 0;
            if (r6R !== '') {
                y2v._hasValue = true;
            }
            y2v._tempWheelArray = R2v = y2v._hasValue && y2v._wheelArray ? y2v._wheelArray.slice(0) : P2v.parseValue.call(i2v, r6R, y2v) || [];
            y2v._tempSelected = Q73(true, {}, y2v._selected);
            x73.each(P2v.wheels, function(T6R, t6R) {
                x73.each(t6R, function(i6R, a6R) {
                    k2v[O6R] = H2v(a6R, O6R);
                    O6R++;
                });
            });
            h2v(false, false, 0, true);
            r2v('onRead');
        };
        y2v.__processSettings = function() {
            P2v = y2v.settings;
            r2v = y2v.trigger;
            C2v = P2v.multiline;
            T2v = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + P2v.checkIcon;
            k2v = [];
            c2v = {};
        };
        y2v.__init = function() {
            E2v = P2v.showScrollArrows;
            K2v = P2v.scroll3d && !D5C && !E2v;
            u2v = P2v.height;
            V2v = K2v ? Math.round((u2v - (u2v * P2v.rows / 2 + 3) * 0.03) / 2) * 2 : u2v;
            t2v = Math.round(P2v.rows * 1.8);
            e2v = 360 / (t2v * 2);
            if (E2v) {
                P2v.rows = Math.max(3, P2v.rows);
            }
            P2v.cssClass = (P2v.cssClass || '') + ' mbsc-sc';
        };
        y2v._getItemValue = p2v;
        y2v._tempSelected = {};
        y2v._selected = {};
        if (!n8v) {
            y2v.init(j2v);
        }
    };
    x83.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _hasPreset: true,
        _class: 'scroller',
        _defaults: Q73({}, n23.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: false,
            showLabel: true,
            setOnTap: false,
            wheels: [],
            preset: '',
            speedUnit: 0.0012,
            timeUnit: 0.08,
            checkIcon: 'checkmark',
            validate: function E6R() {},
            formatValue: function C6R(N6R) {
                return N6R.join(' ');
            },
            parseValue: function q6R(Z6R, U6R) {
                var d6R = [],
                    o6R = [],
                    V6R = 0,
                    h6R, G6R;
                if (Z6R !== null && Z6R !== undefined) {
                    d6R = (Z6R + '').split(' ');
                }
                x73.each(U6R.settings.wheels, function(p6R, S6R) {
                    x73.each(S6R, function(e6R, m6R) {
                        G6R = m6R.data;
                        h6R = U6R._getItemValue(G6R[0]);
                        x73.each(G6R, function(Y6R, c6R) {
                            if (d6R[V6R] == U6R._getItemValue(c6R)) {
                                h6R = U6R._getItemValue(c6R);
                                return false;
                            }
                        });
                        o6R.push(h6R);
                        V6R++;
                    });
                });
                return o6R;
            }
        })
    };
    j73.classes.Scroller = x83;
   
   
  (function(a) {
    var d = j73,
        b = d.$,
        c = d.util.datetime,
        e = c.adjustedDate,
        f = new Date(),
        g = {
            startYear: f.getFullYear() - 100,
            endYear: f.getFullYear() + 1,
            separator: ' ',
            dateFormat: 'mm/dd/yy',
            dateDisplay: 'MMddyy',
            timeFormat: 'h:ii A',
            dayText: 'Day',
            monthText: 'Month',
            yearText: 'Year',
            hourText: 'Hours',
            minuteText: 'Minutes',
            ampmText: '&nbsp;',
            secText: 'Seconds',
            nowText: 'Now',
            todayText: 'Today'
        },
        h = function(i) {
            function m(b, a, c, d) {
                return Math.min(d, Math.floor(b / a) * a + c);
            }

            function v(a) {
                return a < 10 ? '0' + a : a;
            }

            function a4(c) {
                var d, b, a, f = [];
                if (c) {
                    for (d = 0; d < c.length; d++) {
                        b = c[d];
                        if (b.start && b.start.getTime) {
                            a = new Date(b.start);
                            while (a <= b.end) {
                                f.push(e(a.getFullYear(), a.getMonth(), a.getDate()));
                                a.setDate(a.getDate() + 1);
                            }
                        } else {
                            f.push(b);
                        }
                    }
                    return f;
                }
                return c;
            }

            function X(a, b, c) {
                return Math.floor((c - b) / a) * a + b;
            }

            function ai(a) {
                return {
                    value: a,
                    display: (/yy/i.test(y) ? a : (a + '').substr(2, 2)) + (f.yearSuffix || '')
                };
            }

            function ad(a) {
                return a;
            }

            function ac(a) {
                return f.getYear(a);
            }

            function aa(a) {
                return f.getMonth(a);
            }

            function a9(a) {
                return f.getDay(a);
            }

            function a8(b) {
                var a = b.getHours();
                a = r && a >= 12 ? a - 12 : a;
                return m(a, u, C, U);
            }

            function a7(a) {
                return m(a.getMinutes(), q, x, V);
            }

            function al(a) {
                return m(a.getSeconds(), z, O, W);
            }

            function aj(a) {
                return a.getMilliseconds();
            }

            function ah(a) {
                return a.getHours() > 11 ? 1 : 0;
            }

            function M(a) {
                return a.getFullYear() + '-' + v(a.getMonth() + 1) + '-' + v(a.getDate());
            }

            function ae(a) {
                return m(Math.round((a.getTime() - new Date(a).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
            }

            function p(e, b, d, f) {
                var c;
                if (h[b] !== a) {
                    c = +e[h[b]];
                    if (!isNaN(c)) {
                        return c;
                    }
                }
                if (d) {
                    return l[b](d);
                }
                if (D[b] !== a) {
                    return D[b];
                }
                return l[b](f);
            }

            function A(c) {
                var b, d = new Date(new Date().setHours(0, 0, 0, 0));
                if (c === null) {
                    return c;
                }
                if (h.dd !== a) {
                    b = c[h.dd].split('-');
                    b = new Date(b[0], b[1] - 1, b[2]);
                }
                if (h.tt !== a) {
                    b = b || d;
                    b = new Date(b.getTime() + c[h.tt] % 86400 * 1000);
                }
                var e = p(c, 'y', b, d),
                    g = p(c, 'm', b, d),
                    j = Math.min(p(c, 'd', b, d), f.getMaxDayOfMonth(e, g)),
                    i = p(c, 'h', b, d);
                return f.getDate(e, g, j, r && p(c, 'a', b, d) ? i + 12 : i, p(c, 'i', b, d), p(c, 's', b, d), p(c, 'u', b, d));
            }

            function F(b, g) {
                var c, d, e = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                    f = [];
                if (b === null || b === a) {
                    return b;
                }
                for (c = 0; c < e.length; c++) {
                    d = e[c];
                    if (h[d] !== a) {
                        f[h[d]] = l[d](b);
                    }
                    if (g) {
                        D[c] = l[d](b);
                    }
                }
                return f;
            }

            function Q(a, b) {
                return b ? Math.floor(new Date(a) / 8.64e7) : a.getMonth() + 12 * (a.getFullYear() - 1970);
            }

            function ak(b) {
                var a = /d/i.test(b);
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-date',
                    min: Q(M(j), a),
                    max: Q(M(k), a),
                    data: function(e) {
                        var g = new Date(new Date().setHours(0, 0, 0, 0)),
                            d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
                        if (a) {
                            d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
                        }
                        return {
                            invalid: a && !B(d, true),
                            value: M(d),
                            display: g.getTime() == d.getTime() ? f.todayText : c.formatDate(b, d, f)
                        };
                    },
                    getIndex: function(b) {
                        return Q(b, a);
                    }
                };
            }

            function ab(d) {
                var a, b, g, e = [];
                if (/s/i.test(d)) {
                    b = z;
                } else if (/i/i.test(d)) {
                    b = q * 60;
                } else if (/h/i.test(d)) {
                    b = u * 3600;
                }
                L = o.tt = b;
                for (a = 0; a < 86400; a += b) {
                    g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
                    e.push({
                        value: a,
                        display: c.formatDate(d, g, f)
                    });
                }
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-time',
                    data: e
                };
            }

            function a6() {
                var p, s, c, l, b, g, e, n, d = 0,
                    o = [],
                    m = [],
                    i = [];
                if (w.match(/date/i)) {
                    p = S.split(/\|/.test(S) ? '|' : '');
                    for (l = 0; l < p.length; l++) {
                        c = p[l];
                        g = 0;
                        if (c.length) {
                            if (/y/i.test(c)) {
                                g++;
                            }
                            if (/m/i.test(c)) {
                                g++;
                            }
                            if (/d/i.test(c)) {
                                g++;
                            }
                            if (g > 1 && h.dd === a) {
                                h.dd = d;
                                d++;
                                m.push(ak(c));
                                i = m;
                                a2 = true;
                            } else if (/y/i.test(c) && h.y === a) {
                                h.y = d;
                                d++;
								
                                m.push({
                                    cssClass: 'mbsc-dt-whl-y',
                                    label: f.yearText,
                                    min: f.getYear(j),
                                    max: f.getYear(k),
                                    data: ai,
                                    getIndex: ad
                                });
                            } else if (/m/i.test(c) && h.m === a) {
                                h.m = d;
                                e = [];
                                d++;
                                for (b = 0; b < 12; b++) {
                                    n = y.replace(/[dy]/gi, '').replace(/mm/, v(b + 1) + (f.monthSuffix || '')).replace(/m/, b + 1 + (f.monthSuffix || ''));
                                    e.push({
                                        value: b,
                                        display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + f.monthNamesShort[b] + '</span>')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-m',
                                    label: f.monthText,
                                    data: e
                                });
                            } else if (/d/i.test(c) && h.d === a) {
                                h.d = d;
                                e = [];
                                d++;
                                for (b = 1; b < 32; b++) {
                                    e.push({
                                        value: b,
                                        display: (/dd/i.test(y) ? v(b) : b) + (f.daySuffix || '')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-d',
                                    label: f.dayText,
                                    data: e
                                });
                            }
                        }
                    }
                    o.push(m);
                }
                if (w.match(/time/i)) {

                    s = H.split(/\|/.test(H) ? '|' : '');
                    for (l = 0; l < s.length; l++) {
                        c = s[l];
                        g = 0;
                        if (c.length) {
                            if (/h/i.test(c)) {
                                g++;
                            }
                            if (/i/i.test(c)) {
                                g++;
                            }
                            if (/s/i.test(c)) {
                                g++;
                            }
                            if (/a/i.test(c)) {
                                g++;
                            }
                        }
                        if (g > 1 && h.tt === a) {
                            h.tt = d;
                            d++;
                            i.push(ab(c));
                        } else if (/h/i.test(c) && h.h === a) {
                            e = [];
                            h.h = d;
                            d++;
                            for (b = C; b < (r ? 12 : 24); b += u) {
                                e.push({
                                    value: b,
                                    display: r && b === 0 ? 12 : /hh/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-h',
                                label: f.hourText,
                                data: e
                            });
                        } else if (/i/i.test(c) && h.i === a) {
                            e = [];
                            h.i = d;
                            d++;
                            for (b = x; b < 60; b += q) {
                                e.push({
                                    value: b,
                                    display: /ii/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-i',
                                label: f.minuteText,
                                data: e
                            });
                        } else if (/s/i.test(c) && h.s === a) {
                            e = [];
                            h.s = d;
                            d++;
                            for (b = O; b < 60; b += z) {
                                e.push({
                                    value: b,
                                    display: /ss/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-s',
                                label: f.secText,
                                data: e
                            });
                        } else if (/a/i.test(c) && h.a === a) {
                            h.a = d;
                            d++;
                            i.push({
                                cssClass: 'mbsc-dt-whl-a',
                                label: f.ampmText,

                                data: /A/.test(c) ? [{
                                    value: 0,
                                    display: f.amText.toUpperCase()
                                }, {
                                    value: 1,
                                    display: f.pmText.toUpperCase()
                                }] : [{
                                    value: 0,
                                    display: f.amText
                                }, {
                                    value: 1,
                                    display: f.pmText
                                }]
                            });
                        }
                    }
                    if (i != m) {
                        o.push(i);
                    }
                }
                return o;
            }

            function ag(d) {
                var a, e, f, b = {};
                if (d.is('input')) {
                    switch (d.attr('type')) {
                        case 'date':
                            a = 'yy-mm-dd';
                            break;
                        case 'datetime':
                            a = 'yy-mm-ddTHH:ii:ssZ';
                            break;
                        case 'datetime-local':
                            a = 'yy-mm-ddTHH:ii:ss';
                            break;
                        case 'month':
                            a = 'yy-mm';
                            b.dateOrder = 'mmyy';
                            break;
                        case 'time':
                            a = 'HH:ii:ss';
                            break;
                    }
                    b.format = a;
                    e = d.attr('min');
                    f = d.attr('max');
                    if (e) {
                        b.min = c.parseDate(a, e);
                    }
                    if (f) {
                        b.max = c.parseDate(a, f);
                    }
                }
                return b;
            }

            function af(a, f) {
                var b, c, e = false,
                    d = false,
                    g = 0,
                    h = 0;
                j = A(F(j));
                k = A(F(k));
                if (B(a)) {
                    return a;
                }
                if (a < j) {
                    a = j;
                }
                if (a > k) {
                    a = k;
                }
                b = a;
                c = a;
                if (f !== 2) {
                    e = B(b);
                    while (!e && b < k) {
                        b = new Date(b.getTime() + 1000 * 60 * 60 * 24);
                        e = B(b);
                        g++;
                    }
                }
                if (f !== 1) {
                    d = B(c);
                    while (!d && c > j) {
                        c = new Date(c.getTime() - 1000 * 60 * 60 * 24);
                        d = B(c);
                        h++;
                    }
                }
                if (f === 1 && e) {
                    return b;
                }
                if (f === 2 && d) {
                    return c;
                }
                return h <= g && d ? c : b;
            }

            function B(a, b) {
                if (!b && a < j) {
                    return false;
                }
                if (!b && a > k) {
                    return false;
                }
                if (a3(a, J)) {
                    return true;
                }
                if (a3(a, I)) {
                    return false;
                }
                return true;
            }

            function a3(b, e) {
                var c, d, a;
                if (e) {
                    for (d = 0; d < e.length; d++) {
                        c = e[d];
                        a = c + '';
                        if (!c.start) {
                            if (c.getTime) {
                                if (b.getFullYear() == c.getFullYear() && b.getMonth() == c.getMonth() && b.getDate() == c.getDate()) {
                                    return true;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == b.getMonth() && a[1] == b.getDate()) {
                                        return true;
                                    }
                                } else if (a[0] == b.getDate()) {
                                    return true;
                                }
                            } else {
                                a = +a.replace('w', '');
                                if (a == b.getDay()) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }

            function a0(h, l, i, k, j, e, g) {
                var b, d, c, a;
                if (h) {
                    for (d = 0; d < h.length; d++) {
                        b = h[d];
                        a = b + '';
                        if (!b.start) {
                            if (b.getTime) {
                                if (f.getYear(b) == l && f.getMonth(b) == i) {
                                    e[f.getDay(b)] = g;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == i) {
                                        e[a[1]] = g;
                                    }
                                } else {
                                    e[a[0]] = g;
                                }
                            } else {
                                a = +a.replace('w', '');
                                for (c = a - k; c < j; c += 7) {
                                    if (c >= 0) {
                                        e[c + 1] = g;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function _(x, y, e, M, I, B, N, K) {
                var H, D, k, F, E, C, i, A, z, b, g, d, c, p, v, G, w, l, q, u, J = {},
                    j = f.getDate(M, I, B),
                    h = ['a', 'h', 'i', 's'];
                if (x) {
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        if (g.start) {
                            g.apply = false;
                            k = g.d;
                            w = k + '';
                            l = w.split('/');
                            if (k && (k.getTime && M == f.getYear(k) && I == f.getMonth(k) && B == f.getDay(k) || !w.match(/w/i) && (l[1] && B == l[1] && I == l[0] - 1 || !l[1] && B == l[0]) || w.match(/w/i) && j.getDay() == +w.replace('w', ''))) {
                                g.apply = true;
                                J[j] = true;
                            }
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        H = 0;
                        G = 0;
                        A = s[e];
                        z = n[e];
                        p = true;
                        v = true;
                        D = false;
                        if (g.start && (g.apply || !g.d && !J[j])) {
                            d = g.start.split(':');
                            c = g.end.split(':');
                            for (b = 0; b < 3; b++) {
                                if (d[b] === a) {
                                    d[b] = 0;
                                }
                                if (c[b] === a) {
                                    c[b] = 59;
                                }
                                d[b] = +d[b];
                                c[b] = +c[b];
                            }
                            if (e == 'tt') {
                                A = m(Math.round((new Date(j).setHours(d[0], d[1], d[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                                z = m(Math.round((new Date(j).setHours(c[0], c[1], c[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                            } else {
                                d.unshift(d[0] > 11 ? 1 : 0);
                                c.unshift(c[0] > 11 ? 1 : 0);
                                if (r) {
                                    if (d[1] >= 12) {
                                        d[1] = d[1] - 12;
                                    }
                                    if (c[1] >= 12) {
                                        c[1] = c[1] - 12;
                                    }
                                }
                                for (b = 0; b < y; b++) {
                                    if (t[b] !== a) {
                                        q = m(d[b], o[h[b]], s[h[b]], n[h[b]]);
                                        u = m(c[b], o[h[b]], s[h[b]], n[h[b]]);
                                        F = 0;
                                        E = 0;
                                        C = 0;
                                        if (r && b == 1) {
                                            F = d[0] ? 12 : 0;
                                            E = c[0] ? 12 : 0;
                                            C = t[0] ? 12 : 0;
                                        }
                                        if (!p) {
                                            q = 0;
                                        }
                                        if (!v) {
                                            u = n[h[b]];
                                        }
                                        if ((p || v) && (q + F < t[b] + C && t[b] + C < u + E)) {
                                            D = true;
                                        }
                                        if (t[b] != q) {
                                            p = false;
                                        }
                                        if (t[b] != u) {
                                            v = false;
                                        }
                                    }
                                }
                                if (!K) {
                                    for (b = y + 1; b < 4; b++) {
                                        if (d[b] > 0) {
                                            H = o[e];
                                        }
                                        if (c[b] < n[h[b]]) {
                                            G = o[e];
                                        }
                                    }
                                }
                                if (!D) {
                                    q = m(d[y], o[e], s[e], n[e]) + H;
                                    u = m(c[y], o[e], s[e], n[e]) - G;
                                    if (p) {
                                        A = q;
                                    }
                                    if (v) {
                                        z = u;
                                    }
                                }
                            }
                            if (p || v || D) {
                                for (b = A; b <= z; b += o[e]) {
                                    N[b] = !K;
                                }
                            }
                        }
                    }
                }
            }
            var L, a2, Y, h = {},
                D = {},
                t = [],
                P = ag(b(this)),
                $ = b.extend({}, i.settings),
                f = b.extend(i.settings, d.util.datetime.defaults, g, P, $),
                I = a4(f.invalid),
                J = a4(f.valid),
                w = f.preset,
                K = w == 'datetime' ? f.dateFormat + f.separator + f.timeFormat : w == 'time' ? f.timeFormat : f.dateFormat,
                T = P.format || K,
                S = f.dateWheels || f.dateFormat,
                H = f.timeWheels || f.timeFormat,
                y = f.dateWheels || f.dateDisplay,
                G = H,
                a1 = f.baseTheme || f.theme,
                j = f.min || e(f.startYear, 0, 1),
                k = f.max || e((f.endYear+99), 11, 31, 23, 59, 59),
                R = /time/i.test(w),
                r = /h/.test(G),
                Z = /D/.test(y),
                E = f.steps || {},
                u = E.hour || f.stepHour || 1,
                q = E.minute || f.stepMinute || 1,
                z = E.second || f.stepSecond || 1,
                N = E.zeroBased,
                C = N ? 0 : j.getHours() % u,
                x = N ? 0 : j.getMinutes() % q,
                O = N ? 0 : j.getSeconds() % z,
                U = X(u, C, r ? 11 : 23),
                V = X(q, x, 59),
                W = X(q, x, 59),
                s = {
                    y: j.getFullYear(),
                    m: 0,
                    d: 1,
                    h: C,
                    i: x,
                    s: O,
                    a: 0,
                    tt: 0
                },
                n = {
                    y: k.getFullYear(),
                    m: 11,
                    d: 31,
                    h: U,
                    i: V,
                    s: W,
                    a: 1,
                    tt: 86400
                },
                o = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: u,
                    i: q,
                    s: z,
                    a: 1,
                    tt: 1
                },
                a5 = {
                    'android-holo': 40,
                    bootstrap: 46,
                    ios: 50,
                    jqm: 46,
                    material: 46,
                    mobiscroll: 46,
                    wp: 50
                },
                l = {
                    y: ac,
                    m: aa,
                    d: a9,
                    h: a8,
                    i: a7,
                    s: al,
                    u: aj,
                    a: ah,
                    dd: M,
                    tt: ae
                };
            i.getDate = i.getVal = function(a) {
                return i._hasValue || a ? A(i.getArrayVal(a)) : null;
            };
            i.setDate = function(a, b, c, d, e) {
                i.setArrayVal(F(a), b, e, d, c);
            };
            Y = a6();
            i.format = K;
            i.order = h;
            i.handlers.now = function() {
                i.setDate(new Date(), i.live, 1000, true, true);
            };
            i.buttons.now = {
                text: f.nowText,
                handler: 'now'
            };
            return {
                minWidth: a2 && R ? a5[a1] : a,
                compClass: 'mbsc-dt',
                wheels: Y,
                headerText: f.headerText ? function() {
                    return c.formatDate(K, A(i.getArrayVal(true)), f);
                } : false,
                formatValue: function(a) {
                    return c.formatDate(T, A(a), f);
                },
                parseValue: function(a) {
                    if (!a) {
                        D = {};
                    }
                    return F(a ? c.parseDate(T, a, f) : f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date(), !!a && !!a.getTime);
                },
                validate: function(C) {
                    var c, p, u, E, G = C.values,
                        x = C.index,
                        D = C.direction,
                        m = i.settings.wheels[0][h.d],
                        g = af(A(G), D),
                        z = F(g),
                        q = [],
                        B = {},
                        e = l.y(g),
                        d = l.m(g),
                        r = f.getMaxDayOfMonth(e, d),
                        v = true,
                        w = true;
                    b.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(y, c) {
                        if (h[c] !== a) {
                            var m = s[c],
                                t = n[c],
                                i = l[c](g);
                            q[h[c]] = [];
                            if (v && j) {
                                m = l[c](j);
                            }
                            if (w && k) {
                                t = l[c](k);
                            }
                            if (c != 'y' && c != 'dd') {
                                for (p = s[c]; p <= n[c]; p += o[c]) {
                                    if (p < m || p > t) {
                                        q[h[c]].push(p);
                                    }
                                }
                            }
                            if (i < m) {
                                i = m;
                            }
                            if (i > t) {
                                i = t;
                            }
                            if (v) {
                                v = i == m;
                            }
                            if (w) {
                                w = i == t;
                            }
                            if (c == 'd') {
                                var x = f.getDate(e, d, 1).getDay(),
                                    u = {};
                                a0(I, e, d, x, r, u, 1);
                                a0(J, e, d, x, r, u, 0);
                                b.each(u, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                            }
                        }
                    });
                    if (R) {
                        b.each(['a', 'h', 'i', 's', 'tt'], function(j, c) {
                            var m = l[c](g),
                                k = l.d(g),
                                f = {};
                            if (h[c] !== a) {
                                _(I, j, c, e, d, k, f, 0);
                                _(J, j, c, e, d, k, f, 1);
                                b.each(f, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                                t[j] = i.getValidValue(h[c], m, D, f);
                            }
                        });
                    }
                    if (m && (m._length !== r || Z && (x === a || x === h.y || x === h.m))) {
                        B[h.d] = m;
                        m.data = [];
                        for (c = 1; c <= r; c++) {
                            E = f.getDate(e, d, c).getDay();
                            u = y.replace(/[my]/gi, '').replace(/dd/, (c < 10 ? '0' + c : c) + (f.daySuffix || '')).replace(/d/, c + (f.daySuffix || ''));
                            m.data.push({
                                value: c,
                                display: u.match(/DD/) ? u.replace(/DD/, '<span class="mbsc-dt-day">' + f.dayNames[E] + '</span>') : u.replace(/D/, '<span class="mbsc-dt-day">' + f.dayNamesShort[E] + '</span>')
                            });
                        }
                        i._tempWheelArray[h.d] = z[h.d];
                        i.changeWheel(B);
                    }
                    return {
                        disabled: q,
                        valid: z
                    };
                }
            };
        };
    b.each(['date', 'time', 'datetime'], function(b, a) {
        d.presets.scroller[a] = h;
    });
}());
   
    var g1C = j73.presets.scroller;
    var V83 = j73.classes;
    var C23 = j73.util;
    var K23 = C23.datetime.adjustedDate;
    var T5C = C23.jsPrefix;
    var j83 = C23.testTouch;
    var R83 = C23.getCoord;
    var C83 = C23.animEnd;
    var s83 = new Date();
    var S5C = {
        min: new Date(s83.getFullYear() - 100, 0, 1),
        max: new Date(s83.getFullYear() + 1, 11, 31, 23, 59, 59),
        controls: ['calendar'],
        firstDay: 0,
        weekDays: 'short',
        maxMonthWidth: 170,
        months: 1,
        preMonths: 1,
        highlight: true,
        outerMonthChange: true,
        quickNav: true,
        yearChange: true,
        todayClass: 'mbsc-cal-today',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left6',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right6',
        dateText: 'Date',
        timeText: 'Time',
        calendarText: 'Calendar',
        todayText: 'Today',
        prevMonthText: 'Previous Month',
        nextMonthText: 'Next Month',
        prevYearText: 'Previous Year',
        nextYearText: 'Next Year'
    };
    g1C.calbase = function(L7R) {
        function a8R(i8R) {
            var E8R;
            o7R = x73(this);
            G2R = false;
            if (i8R.type != 'keydown') {
                B8R = R83(i8R, 'X');
                y8R = R83(i8R, 'Y');
                E8R = j83(i8R, this);
            } else {
                E8R = i8R.keyCode === 32;
            }
            if (!i7R && E8R && !o7R.hasClass('mbsc-fr-btn-d')) {
                i7R = true;
                setTimeout(A8R, 100);
                if (i8R.type == 'mousedown') {
                    x73(document).on('mousemove', D2R).on('mouseup', H2R);
                }
            }
        }

        function D2R(C8R) {
            if (Math.abs(B8R - R83(C8R, 'X')) > 7 || Math.abs(y8R - R83(C8R, 'Y')) > 7) {
                i7R = false;
                o7R.removeClass('mbsc-fr-btn-a');
            }
        }

        function H2R(N8R) {
            if (N8R.type == 'touchend') {
                N8R.preventDefault();
            }
            if (o7R && !G2R) {
                A8R();
            }
            i7R = false;
            if (N8R.type == 'mouseup') {
                x73(document).off('mousemove', D2R).off('mouseup', H2R);
            }
        }

        function A8R() {
            G2R = true;
            if (o7R.hasClass('mbsc-cal-prev-m')) {
                M2R();
            } else if (o7R.hasClass('mbsc-cal-next-m')) {
                e2R();
            } else if (o7R.hasClass('mbsc-cal-prev-y')) {
                s2R(o7R);
            } else if (o7R.hasClass('mbsc-cal-next-y')) {
                R8R(o7R);
            }
        }

        function T8R(q8R) {
            if (q8R < K23(I2R.getFullYear(), I2R.getMonth(), I2R.getDate())) {
                return false;
            }
            if (q8R > K8R) {
                return false;
            }
            return L8R[q8R] === undefined || I8R[q8R] !== undefined;
        }

        function Z2R(p8R, V8R, G8R) {
            var h8R, d8R, U8R, o8R, Z8R = {},
                S8R = y7R + X2R;
            if (p8R) {
                x73.each(p8R, function(J8R, m8R) {
                    h8R = m8R.d || m8R.start || m8R;
                    d8R = h8R + '';
                    if (m8R.start && m8R.end) {
                        o8R = new Date(m8R.start);
                        while (o8R <= m8R.end) {
                            U8R = K23(o8R.getFullYear(), o8R.getMonth(), o8R.getDate());
                            Z8R[U8R] = Z8R[U8R] || [];
                            Z8R[U8R].push(m8R);
                            o8R.setDate(o8R.getDate() + 1);
                        }
                    } else if (h8R.getTime) {
                        U8R = K23(h8R.getFullYear(), h8R.getMonth(), h8R.getDate());
                        Z8R[U8R] = Z8R[U8R] || [];
                        Z8R[U8R].push(m8R);
                    } else if (!d8R.match(/w/i)) {
                        d8R = d8R.split('/');
                        if (d8R[1]) {
                            if (G8R + S8R >= 11) {
                                U8R = f7R.getDate(V8R + 1, d8R[0] - 1, d8R[1]);
                                Z8R[U8R] = Z8R[U8R] || [];
                                Z8R[U8R].push(m8R);
                            }
                            if (G8R - S8R <= 1) {
                                U8R = f7R.getDate(V8R - 1, d8R[0] - 1, d8R[1]);
                                Z8R[U8R] = Z8R[U8R] || [];
                                Z8R[U8R].push(m8R);
                            }
                            U8R = f7R.getDate(V8R, d8R[0] - 1, d8R[1]);
                            Z8R[U8R] = Z8R[U8R] || [];
                            Z8R[U8R].push(m8R);
                        } else {
                            for (Z7R = 0; Z7R < N7R; Z7R++) {
                                U8R = f7R.getDate(V8R, G8R - y7R - P7R + Z7R, d8R[0]);
                                if (f7R.getDay(U8R) == d8R[0]) {
                                    Z8R[U8R] = Z8R[U8R] || [];
                                    Z8R[U8R].push(m8R);
                                }
                            }
                        }
                    } else {
                        var Y8R = +d8R.replace('w', ''),
                            e8R = 0,
                            c8R = f7R.getDate(V8R, G8R - y7R - P7R, 1).getDay();
                        if (f7R.firstDay - c8R + 1 > 1) {
                            e8R = 7;
                        }
                        for (Z7R = 0; Z7R < N7R * 5; Z7R++) {
                            U8R = f7R.getDate(V8R, G8R - y7R - P7R, Z7R * 7 - e8R - c8R + 1 + Y8R);
                            Z8R[U8R] = Z8R[U8R] || [];
                            Z8R[U8R].push(m8R);
                        }
                    }
                });
            }
            return Z8R;
        }

        function X8R(v8R, b8R) {
            L8R = Z2R(f7R.invalid, v8R, b8R);
            I8R = Z2R(f7R.valid, v8R, b8R);
            L7R.onGenMonth(v8R, b8R);
        }

        function P8R(D8R, M8R, Q8R, F8R, w8R, x8R, j8R) {
            var H8R = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + D8R + '-c ' + (f7R.calendarClass || '') + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
            for (I7R = 1; I7R <= M8R; I7R++) {
                if (I7R <= 12 || I7R > Q8R) {
                    H8R += '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>';
                } else {
                    H8R += '<div tabindex="0" role="button"' + (x8R ? ' aria-label="' + x8R[I7R - 13] + '"' : '') + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + D8R + '-s" data-val=' + (F8R + I7R - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (j8R ? j8R[I7R - 13] : F8R + I7R - 13 + w8R) + '</div></div></div>';
                }
                if (I7R < M8R) {
                    if (I7R % 12 === 0) {
                        H8R += '</div></div></div><div class="mbsc-cal-sc-p" style="' + (q7R ? 'top' : G7R ? 'right' : 'left') + ':' + Math.round(I7R / 12) * 100 + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                    } else if (I7R % 3 === 0) {
                        H8R += '</div><div class="mbsc-cal-sc-row">';
                    }
                }
            }
            H8R += '</div></div></div></div></div>';
            return H8R;
        }

        function P2R(C1w, N1w) {
            var s8R, R1w, L1w, g1w, B1w, i1w, f1w, K1w, l8R, r1w, W1w, P1w, n1w, E1w, k1w, A1w, X1w = 1,
                t1w = 0,
                T1w = f7R.getDate(C1w, N1w, 1),
                a1w = f7R.getYear(T1w),
                y1w = f7R.getMonth(T1w),
                z8R = f7R.defaultValue === null && !L7R._hasValue ? null : L7R.getDate(true),
                u1w = f7R.getDate(a1w, y1w, 1).getDay(),
                I1w = '<div class="mbsc-cal-table">',
                O1w = '<div class="mbsc-cal-week-nr-c">';
            if (f7R.firstDay - u1w + 1 > 1) {
                t1w = 7;
            }
            for (A1w = 0; A1w < 42; A1w++) {
                k1w = A1w + f7R.firstDay - t1w;
                s8R = f7R.getDate(a1w, y1w, k1w - u1w + 1);
                L1w = s8R.getFullYear();
                g1w = s8R.getMonth();
                B1w = s8R.getDate();
                i1w = f7R.getMonth(s8R);
                f1w = f7R.getDay(s8R);
                E1w = f7R.getMaxDayOfMonth(L1w, g1w);
                K1w = L1w + '-' + g1w + '-' + B1w;
                l8R = Q73({
                    valid: T8R(s8R),
                    selected: z8R && z8R.getFullYear() === L1w && z8R.getMonth() === g1w && z8R.getDate() === B1w
                }, L7R.getDayProps(s8R, z8R));
                r1w = l8R.valid;
                W1w = l8R.selected;
                R1w = l8R.cssClass;
                P1w = new Date(s8R).setHours(12, 0, 0, 0) === new Date().setHours(12, 0, 0, 0);
                n1w = i1w !== y1w;
                h2R[K1w] = l8R;
                if (A1w % 7 === 0) {
                    I1w += (A1w ? '</div>' : '') + '<div class="mbsc-cal-row' + (f7R.highlight && z8R && z8R - s8R >= 0 && z8R - s8R < 1000 * 60 * 60 * 24 * 7 ? ' mbsc-cal-week-hl' : '') + '">';
                }
                if (w7R && s8R.getDay() == 1) {
                    if (w7R == 'month' && n1w && X1w > 1) {
                        X1w = B1w == 1 ? 1 : 2;
                    } else if (w7R == 'year') {
                        X1w = f7R.getWeekNumber(s8R);
                    }
                    O1w += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + X1w + '</div></div>';
                    X1w++;
                }
                I1w += '<div role="button" tabindex="-1"' + ' aria-label="' + (P1w ? f7R.todayText + ', ' : '') + f7R.dayNames[s8R.getDay()] + ', ' + f7R.monthNames[i1w] + ' ' + f1w + ' ' + (l8R.ariaLabel ? ', ' + l8R.ariaLabel : '') + '"' + (n1w && !i2R ? ' aria-hidden="true"' : '') + (W1w ? ' aria-selected="true"' : '') + (r1w ? '' : ' aria-disabled="true"') + ' data-day="' + k1w % 7 + '"' + ' data-full="' + K1w + '"' + 'class="mbsc-cal-day ' + (f7R.dayClass || '') + (W1w ? ' mbsc-cal-day-sel' : '') + (P1w ? ' ' + f7R.todayClass : '') + (R1w ? ' ' + R1w : '') + (f1w == 1 ? ' mbsc-cal-day-first' : '') + (f1w == E1w ? ' mbsc-cal-day-last' : '') + (n1w ? ' mbsc-cal-day-diff' : '') + (r1w ? ' mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl' : ' mbsc-cal-day-inv') + '"><div class="mbsc-cal-day-i ' + (W1w ? e7R : '') + ' ' + (f7R.innerDayClass || '') + '">' + '<div class="mbsc-cal-day-fg">' + f1w + '</div>' + (l8R.markup || '') + '<div class="mbsc-cal-day-frame"></div></div></div>';
            }
            I1w += '</div></div>' + O1w + '</div>';
            return I1w;
        }

        function S2R(U1w, Z1w, h1w) {
            var d1w = f7R.getDate(U1w, Z1w, 1),
                q1w = f7R.getYear(d1w),
                V1w = f7R.getMonth(d1w),
                o1w = q1w + t2R;
            if (p7R) {
                if (Q7R) {
                    Q7R.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(e7R);
                }
                if (q2R) {
                    q2R.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(e7R);
                }
                Q7R = x73('.mbsc-cal-year-s[data-val="' + q1w + '"]', W7R).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                q2R = x73('.mbsc-cal-month-s[data-val="' + V1w + '"]', W7R).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                Q7R.find('.mbsc-cal-sc-cell-i').addClass(e7R);
                q2R.find('.mbsc-cal-sc-cell-i').addClass(e7R);
                if (U7R) {
                    U7R.scroll(Q7R, h1w);
                }
                x73('.mbsc-cal-month-s', W7R).removeClass('mbsc-fr-btn-d');
                if (q1w === s7R) {
                    for (I7R = 0; I7R < n8R; I7R++) {
                        x73('.mbsc-cal-month-s[data-val="' + I7R + '"]', W7R).addClass('mbsc-fr-btn-d');
                    }
                }
                if (q1w === T2R) {
                    for (I7R = l2R + 1; I7R <= 12; I7R++) {
                        x73('.mbsc-cal-month-s[data-val="' + I7R + '"]', W7R).addClass('mbsc-fr-btn-d');
                    }
                }
            }
            if (A2R.length == 1) {
                A2R.attr('aria-label', q1w).html(o1w);
            }
            for (I7R = 0; I7R < n7R; ++I7R) {
                d1w = f7R.getDate(U1w, Z1w - P7R + I7R, 1);
                q1w = f7R.getYear(d1w);
                V1w = f7R.getMonth(d1w);
                o1w = q1w + t2R;
                x73(j2R[I7R]).attr('aria-label', f7R.monthNames[V1w] + (J7R ? '' : ' ' + q1w)).html((!J7R && R2R < y2R ? o1w + ' ' : '') + f2R[V1w] + (!J7R && R2R > y2R ? ' ' + o1w : ''));
                if (A2R.length > 1) {
                    x73(A2R[I7R]).html(o1w);
                }
            }
            if (f7R.getDate(U1w, Z1w - P7R - 1, 1) < a7R) {
                C2R(x73('.mbsc-cal-prev-m', W7R));
            } else {
                O2R(x73('.mbsc-cal-prev-m', W7R));
            }
            if (f7R.getDate(U1w, Z1w + n7R - P7R, 1) > t7R) {
                C2R(x73('.mbsc-cal-next-m', W7R));
            } else {
                O2R(x73('.mbsc-cal-next-m', W7R));
            }
            if (f7R.getDate(U1w, Z1w, 1).getFullYear() <= a7R.getFullYear()) {
                C2R(x73('.mbsc-cal-prev-y', W7R));
            } else {
                O2R(x73('.mbsc-cal-prev-y', W7R));
            }
            if (f7R.getDate(U1w, Z1w, 1).getFullYear() >= t7R.getFullYear()) {
                C2R(x73('.mbsc-cal-next-y', W7R));
            } else {
                O2R(x73('.mbsc-cal-next-y', W7R));
            }
        }

        function O2R(G1w) {
            G1w.removeClass(Y2R).find('.mbsc-cal-btn-txt').removeAttr('aria-disabled');
        }

        function C2R(S1w) {
            S1w.addClass(Y2R).find('.mbsc-cal-btn-txt').attr('aria-disabled', 'true');
        }

        function t8R(p1w) {
            L7R.trigger('onDayHighlight', {
                date: p1w
            });
            if (f7R.highlight) {
                x73('.mbsc-cal-day-sel .mbsc-cal-day-i', r7R).removeClass(e7R);
                x73('.mbsc-cal-day-sel', r7R).removeClass('mbsc-cal-day-sel').removeAttr('aria-selected');
                x73('.mbsc-cal-week-hl', r7R).removeClass('mbsc-cal-week-hl');
                if (f7R.defaultValue !== null || L7R._hasValue) {
                    x73('.mbsc-cal-day[data-full="' + p1w.getFullYear() + '-' + p1w.getMonth() + '-' + p1w.getDate() + '"]', r7R).addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(e7R).closest('.mbsc-cal-row').addClass('mbsc-cal-week-hl');
                }
            }
        }

        function o2R(m1w, v1w) {
            if (T7R && (C7R === 'calendar' || v1w)) {
                var J1w, c1w, Y1w = f7R.getDate(g7R, B7R, 1),
                    e1w = Math.abs((f7R.getYear(m1w) - f7R.getYear(Y1w)) * 12 + f7R.getMonth(m1w) - f7R.getMonth(Y1w));
                if (L7R.needsSlide && e1w) {
                    g7R = f7R.getYear(m1w);
                    B7R = f7R.getMonth(m1w);
                    if (m1w > Y1w) {
                        c1w = e1w > y7R - P7R + n7R - 1;
                        B7R -= c1w ? 0 : e1w - y7R;
                        J1w = 'next';
                    } else if (m1w < Y1w) {
                        c1w = e1w > y7R + P7R;
                        B7R += c1w ? 0 : e1w - y7R;
                        J1w = 'prev';
                    }
                    V7R(g7R, B7R, J1w, Math.min(e1w, y7R), c1w, true);
                }
                if (!v1w) {
                    b7R = m1w;
                    t8R(m1w);
                }
                L7R.needsSlide = true;
            }
        }

        function r2R(b1w, H1w, D1w) {
            if (!D1w) {
                L7R.trigger('onMonthLoading', {
                    year: b1w,
                    month: H1w
                });
            }
            X8R(b1w, H1w);
            for (I7R = 0; I7R < N7R; I7R++) {
                u7R[I7R].html(P2R(b1w, H1w - P7R - y7R + I7R));
            }
            u8R();
            a2R = undefined;
            L7R.trigger('onMonthLoaded', {
                year: b1w,
                month: H1w
            });
        }

        function V2R(x1w, j1w) {
            var M1w = y7R,
                F1w = y7R;
            while (F1w && f7R.getDate(x1w, j1w + F1w + n7R - P7R - 1, 1) > t7R) {
                F1w--;
            }
            while (M1w && f7R.getDate(x1w, j1w - M1w - P7R, 1) < a7R) {
                M1w--;
            }
            Q73(m7R.settings, {
                contSize: n7R * K7R,
                snap: K7R,
                minScroll: k7R - (G7R ? M1w : F1w) * K7R,
                maxScroll: k7R + (G7R ? F1w : M1w) * K7R
            });
            m7R.refresh();
        }

        function u8R() {
            if (w7R) {
                f8R.html(x73('.mbsc-cal-week-nr-c', u7R[y7R]).html());
            }
            x73('.mbsc-cal-slide-a .mbsc-cal-day', j7R).attr('tabindex', 0);
        }

        function V7R(Q1w, w1w, z1w, s1w, A5w, X5w, f5w) {
            if (Q1w) {
                x7R.push({
                    y: Q1w,
                    m: w1w,
                    dir: z1w,
                    slideNr: s1w,
                    load: A5w,
                    active: X5w,
                    callback: f5w
                });
            }
            if (F7R || !x7R.length) {
                return;
            }
            var l1w = x7R.shift(),
                I5w;
            Q1w = l1w.y;
            w1w = l1w.m;
            z1w = l1w.dir === 'next';
            s1w = l1w.slideNr;
            A5w = l1w.load;
            X5w = l1w.active;
            f5w = l1w.callback || K2R;
            I5w = f7R.getDate(Q1w, w1w, 1);
            Q1w = f7R.getYear(I5w);
            w1w = f7R.getMonth(I5w);
            F7R = true;
            L7R.changing = true;
            L7R.trigger('onMonthChange', {
                year: Q1w,
                month: w1w
            });
            L7R.trigger('onMonthLoading', {
                year: Q1w,
                month: w1w
            });
            X8R(Q1w, w1w);
            if (A5w) {
                for (I7R = 0; I7R < n7R; I7R++) {
                    u7R[z1w ? N7R - n7R + I7R : I7R].html(P2R(Q1w, w1w - P7R + I7R));
                }
            }
            if (X5w) {
                l7R.addClass('mbsc-cal-slide-a');
            }
            setTimeout(function() {
                L7R.ariaMessage(f7R.monthNames[w1w] + ' ' + Q1w);
                S2R(Q1w, w1w, 200);
                k7R = z1w ? k7R - K7R * s1w * D7R : k7R + K7R * s1w * D7R;
                m7R.scroll(k7R, X5w ? 200 : 0, false, function() {
                    var L5w;
                    u2R = k7R;
                    if (u7R.length) {
                        l7R.removeClass('mbsc-cal-slide-a').attr('aria-hidden', 'true');
                        if (z1w) {
                            L5w = u7R.splice(0, s1w);
                            for (I7R = 0; I7R < s1w; I7R++) {
                                u7R.push(L5w[I7R]);
                                p2R(u7R[u7R.length - 1], +u7R[u7R.length - 2].attr('data-curr') + 100 * D7R);
                            }
                        } else {
                            L5w = u7R.splice(N7R - s1w, s1w);
                            for (I7R = s1w - 1; I7R >= 0; I7R--) {
                                u7R.unshift(L5w[I7R]);
                                p2R(u7R[0], +u7R[1].attr('data-curr') - 100 * D7R);
                            }
                        }
                        for (I7R = 0; I7R < s1w; I7R++) {
                            u7R[z1w ? N7R - s1w + I7R : I7R].html(P2R(Q1w, w1w - P7R - y7R + I7R + (z1w ? N7R - s1w : 0)));
                            if (A5w) {
                                u7R[z1w ? I7R : N7R - s1w + I7R].html(P2R(Q1w, w1w - P7R - y7R + I7R + (z1w ? 0 : N7R - s1w)));
                            }
                        }
                        for (I7R = 0; I7R < n7R; I7R++) {
                            u7R[y7R + I7R].addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                        }
                        V2R(Q1w, w1w);
                        F7R = false;
                    }
                    if (x7R.length) {
                        setTimeout(function() {
                            V7R();
                        }, 10);
                    } else {
                        g7R = Q1w;
                        B7R = w1w;
                        L7R.changing = false;
                        x73('.mbsc-cal-day', j7R).attr('tabindex', -1);
                        u8R();
                        if (a2R !== undefined) {
                            r2R(Q1w, w1w, a2R);
                        } else {
                            L7R.trigger('onMonthLoaded', {
                                year: Q1w,
                                month: w1w
                            });
                        }
                        f5w();
                    }
                });
            }, 10);
        }

        function r8R() {
            var n5w = x73(this),
                y5w = L7R.live,
                g5w = L7R.getDate(true),
                P5w = n5w.attr('data-full'),
                B5w = P5w.split('-'),
                W5w = K23(B5w[0], B5w[1], B5w[2]),
                u5w = K23(W5w.getFullYear(), W5w.getMonth(), W5w.getDate(), g5w.getHours(), g5w.getMinutes(), g5w.getSeconds()),
                R5w = n5w.hasClass('mbsc-cal-day-sel');
            if (!i2R && n5w.hasClass('mbsc-cal-day-diff')) {
                return;
            }
            if (L7R.trigger('onDayChange', Q73(h2R[P5w], {
                    date: u5w,
                    target: this,
                    selected: R5w
                })) !== false) {
                L7R.needsSlide = false;
                w2R = true;
                L7R.setDate(u5w, y5w, 0.2, !y5w, true);
                if (f7R.outerMonthChange) {
                    i7R = true;
                    if (W5w < f7R.getDate(g7R, B7R - P7R, 1)) {
                        M2R();
                    } else if (W5w > f7R.getDate(g7R, B7R - P7R + n7R, 0)) {
                        e2R();
                    }
                    i7R = false;
                }
                if (L7R.live) {
                    L7R.trigger('onSet', {
                        valueText: L7R._value
                    });
                }
            }
        }

        function p2R(k5w, K5w) {
            k5w.attr('data-curr', K5w);
            k5w[0].style[T5C + 'Transform'] = 'translate3d(' + (q7R ? '0,' + K5w + '%,' : K5w + '%,' + '0,') + '0)';
        }

        function W8R(O5w) {
            if (L7R.isVisible() && T7R) {
                if (!L7R.changing) {
                    r2R(g7R, B7R, O5w);
                } else {
                    a2R = O5w;
                }
            }
        }

        function e2R() {
            if (i7R && f7R.getDate(g7R, B7R + n7R - P7R, 1) <= t7R) {
                V7R(g7R, ++B7R, 'next', 1, false, true, e2R);
            }
        }

        function M2R() {
            if (i7R && f7R.getDate(g7R, B7R - P7R - 1, 1) >= a7R) {
                V7R(g7R, --B7R, 'prev', 1, false, true, M2R);
            }
        }

        function R8R(r5w) {
            if (i7R && f7R.getDate(g7R, B7R, 1) <= f7R.getDate(f7R.getYear(t7R) - 1, f7R.getMonth(t7R) - X2R, 1)) {
                V7R(++g7R, B7R, 'next', y7R, true, true, function() {
                    R8R(r5w);
                });
            } else if (i7R && !r5w.hasClass('mbsc-fr-btn-d')) {
                V7R(f7R.getYear(t7R), f7R.getMonth(t7R) - X2R, 'next', y7R, true, true);
            }
        }

        function s2R(t5w) {
            if (i7R && f7R.getDate(g7R, B7R, 1) >= f7R.getDate(f7R.getYear(a7R) + 1, f7R.getMonth(a7R) + P7R, 1)) {
                V7R(--g7R, B7R, 'prev', y7R, true, true, function() {
                    s2R(t5w);
                });
            } else if (i7R && !t5w.hasClass('mbsc-fr-btn-d')) {
                V7R(f7R.getYear(a7R), f7R.getMonth(a7R) + P7R, 'prev', y7R, true, true);
            }
        }

        function W2R(T5w, a5w) {
            if (!T5w.hasClass('mbsc-cal-v')) {
                T5w.addClass('mbsc-cal-v' + (a5w ? '' : ' mbsc-cal-p-in')).removeClass('mbsc-cal-p-out mbsc-cal-h');
                L7R.trigger('onSelectShow');
            }
        }

        function v7R(i5w, E5w) {
            if (i5w.hasClass('mbsc-cal-v')) {
                i5w.removeClass('mbsc-cal-v mbsc-cal-p-in').addClass('mbsc-cal-h' + (E5w ? '' : ' mbsc-cal-p-out'));
            }
        }

        function U2R(C5w, N5w) {
            if ((N5w || C5w).hasClass('mbsc-cal-v')) {
                v7R(C5w);
            } else {
                W2R(C5w);
            }
        }

        function F2R() {
            x73(this).removeClass('mbsc-cal-p-out mbsc-cal-p-in');
        }

        function g8R(q5w) {
            return q5w[0].innerWidth || q5w.innerWidth();
        }
        var S7R, I7R, Z7R, x2R, L2R, W7R, Q2R, r7R, j7R, K7R, k7R, w2R, T7R, c7R, n2R, u2R, f8R, h7R, H7R, f2R, m7R, M7R, j2R, y2R, A2R, R2R, s7R, T2R, n8R, l2R, a7R, t7R, I2R, K8R, b7R, g7R, B7R, b2R, J2R, I8R, L8R, Y7R, C7R, F7R, B8R, y8R, o7R, G2R, i7R, n7R, N7R, X2R, P7R, a2R, i2R, O8R, U7R, Q7R, q2R, d2R = this,
            l7R = [],
            u7R = [],
            x7R = [],
            R7R = {},
            h2R = {},
            K2R = function U5w() {},
            k8R = Q73({}, L7R.settings),
            f7R = Q73(L7R.settings, S5C, k8R),
            z2R = f7R.weekDays == 'full' ? '' : f7R.weekDays == 'min' ? 'Min' : 'Short',
            w7R = f7R.weekCounter,
            m2R = f7R.layout || (/top|bottom|inline/.test(f7R.display) ? 'liquid' : ''),
            d7R = m2R == 'liquid' && f7R.display !== 'bubble',
            c2R = f7R.display == 'center',
            G7R = f7R.rtl,
            D7R = G7R ? -1 : 1,
            v2R = d7R ? null : f7R.calendarWidth,
            q7R = f7R.calendarScroll == 'vertical',
            p7R = f7R.quickNav,
            y7R = f7R.preMonths,
            J7R = f7R.yearChange,
            N2R = f7R.controls.join(','),
            z7R = (f7R.tabs === true || f7R.tabs !== false && d7R) && f7R.controls.length > 1,
            B2R = !z7R && f7R.tabs === undefined && !d7R && f7R.controls.length > 1,
            t2R = f7R.yearSuffix || '',
            e7R = f7R.activeClass || '',
            E2R = 'mbsc-cal-tab-sel ' + (f7R.activeTabClass || ''),
            k2R = f7R.activeTabInnerClass || '',
            Y2R = 'mbsc-fr-btn-d ' + (f7R.disabledClass || ''),
            g2R = q7R ? 'Y' : 'X',
            E7R = '',
            O7R = '';
        if (N2R.match(/calendar/)) {
            T7R = true;
        } else {
            p7R = false;
        }
        if (N2R.match(/date/)) {
            R7R.date = 1;
        }
        if (N2R.match(/time/)) {
            R7R.time = 1;
        }
        if (T7R && R7R.date) {
            z7R = true;
            B2R = false;
        }
        f7R.layout = m2R;
        f7R.preset = (R7R.date || T7R ? 'date' : '') + (R7R.time ? 'time' : '');
        if (f7R.display == 'inline') {
            x73(this).closest('[data-role="page"]').on('pageshow', function() {
                L7R.position();
            });
        }
        L7R.changing = false;
        L7R.needsSlide = true;
        L7R.getDayProps = K2R;
        L7R.onGenMonth = K2R;
        L7R.prepareObj = Z2R;
        L7R.refresh = function() {
            W8R(false);
        };
        L7R.redraw = function() {
            W8R(true);
        };
        L7R.navigate = function(o5w, h5w) {
            var Z5w, d5w, V5w = L7R.isVisible();
            x7R = [];
            if (h5w && V5w) {
                o2R(o5w, true);
            } else {
                Z5w = f7R.getYear(o5w);
                d5w = f7R.getMonth(o5w);
                if (V5w && (Z5w != g7R || d5w != B7R)) {
                    F7R = false;
                    L7R.changing = false;
                    L7R.trigger('onMonthChange', {
                        year: Z5w,
                        month: d5w
                    });
                    S2R(Z5w, d5w);
                    r2R(Z5w, d5w);
                    k7R = u2R;
                    m7R.scroll(k7R);
                    V2R(o5w.getFullYear(), o5w.getMonth());
                }
                g7R = Z5w;
                B7R = d5w;
            }
        };
        L7R.showMonthView = function() {
            if (p7R && !H7R) {
                v7R(O7R, true);
                v7R(E7R, true);
                W2R(h7R, true);
                H7R = true;
            }
        };
        L7R.changeTab = function(G5w) {
            if (!L7R._isVisible || !R7R[G5w] || C7R == G5w) {
                return;
            }
            C7R = G5w;
            x73('.mbsc-cal-pnl', W7R).removeClass('mbsc-cal-p-in').addClass('mbsc-cal-pnl-h');
            x73('.mbsc-cal-tab', W7R).removeClass(E2R).removeAttr('aria-selected').find('.mbsc-cal-tab-i').removeClass(k2R);
            x73('.mbsc-cal-tab[data-control="' + G5w + '"]', W7R).addClass(E2R).attr('aria-selected', 'true').find('.mbsc-cal-tab-i').addClass(k2R);
            R7R[C7R].removeClass('mbsc-cal-pnl-h').addClass('mbsc-cal-p-in');
            if (C7R == 'calendar') {
                S7R = L7R.getDate(true);
                if (S7R.getFullYear() !== b7R.getFullYear() || S7R.getMonth() !== b7R.getMonth() || S7R.getDate() !== b7R.getDate()) {
                    o2R(S7R);
                }
            }
            L7R.showMonthView();
            L7R.trigger('onTabChange', {
                tab: C7R
            });
        };
        x2R = g1C.datetime.call(this, L7R);
        y2R = (f7R.dateWheels || f7R.dateFormat).search(/m/i);
        R2R = (f7R.dateWheels || f7R.dateFormat).search(/y/i);
        Q73(x2R, {
            ariaMessage: f7R.calendarText,
            onMarkupReady: function S5w(c5w) {
                var m5w, p5w, e5w = '';
                W7R = x73(c5w.target);
                Q2R = f7R.display == 'inline' ? x73(this).is('div') ? x73(this) : x73(this).parent() : L7R._window;
                b7R = L7R.getDate(true);
                if (!g7R) {
                    g7R = f7R.getYear(b7R);
                    B7R = f7R.getMonth(b7R);
                }
                k7R = 0;
                u2R = 0;
                n2R = true;
                F7R = false;
                f2R = f7R.monthNames;
                C7R = 'calendar';
                if (f7R.min) {
                    a7R = K23(f7R.min.getFullYear(), f7R.min.getMonth(), 1);
                    I2R = f7R.min;
                }
                if (f7R.max) {
                    t7R = K23(f7R.max.getFullYear(), f7R.max.getMonth(), 1);
                    K8R = f7R.max;
                }
                W7R.addClass('mbsc-calendar');
                L2R = x73('.mbsc-fr-popup', W7R);
                Y7R = x73('.mbsc-fr-c', W7R);
                if (R7R.date) {
                    R7R.date = x73('.mbsc-sc-whl-gr-c', W7R).eq(0);
                } else if (T7R) {
                    x73('.mbsc-sc-whl-gr-c', W7R).eq(0).addClass('mbsc-cal-hdn');
                }
                if (R7R.time) {
                    R7R.time = x73('.mbsc-sc-whl-gr-c', W7R).eq(1);
                }
                if (T7R) {
                    n7R = f7R.months == 'auto' ? Math.max(1, Math.min(3, Math.floor((v2R || g8R(Q2R)) / 280))) : f7R.months;
                    N7R = n7R + 2 * y7R;
                    X2R = Math.floor(n7R / 2);
                    P7R = Math.round(n7R / 2) - 1;
                    i2R = f7R.showOuterDays === undefined ? n7R < 2 : f7R.showOuterDays;
                    q7R = q7R && n7R < 2;
                    p5w = '<div class="mbsc-cal-btnw"><div class="' + (G7R ? 'mbsc-cal-next-m' : 'mbsc-cal-prev-m') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (f7R.btnCalPrevClass || '') + '"' + ' aria-label="' + f7R.prevMonthText + '"></div></div>';
                    for (I7R = 0; I7R < n7R; ++I7R) {
                        p5w += '<div class="mbsc-cal-btnw-m" style="width: ' + 100 / n7R + '%"><span role="button" class="mbsc-cal-month"></span></div>';
                    }
                    p5w += '<div class="' + (G7R ? 'mbsc-cal-prev-m' : 'mbsc-cal-next-m') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (f7R.btnCalNextClass || '') + '"' + ' aria-label="' + f7R.nextMonthText + '"></div></div></div>';
                    if (J7R) {
                        e5w = '<div class="mbsc-cal-btnw"><div class="' + (G7R ? 'mbsc-cal-next-y' : 'mbsc-cal-prev-y') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (f7R.btnCalPrevClass || '') + '"' + ' aria-label="' + f7R.prevYearText + '"></div></div>' + '<span role="button" class="mbsc-cal-year"></span>' + '<div class="' + (G7R ? 'mbsc-cal-prev-y' : 'mbsc-cal-next-y') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (f7R.btnCalNextClass || '') + '"' + ' aria-label="' + f7R.nextYearText + '"></div></div></div>';
                    }
                    if (p7R) {
                        s7R = f7R.getYear(a7R);
                        T2R = f7R.getYear(t7R);
                        n8R = f7R.getMonth(a7R);
                        l2R = f7R.getMonth(t7R);
                        J2R = Math.ceil((T2R - s7R + 1) / 12) + 2;
                        E7R = P8R('month', 36, 24, 0, '', f7R.monthNames, f7R.monthNamesShort);
                        O7R = P8R('year', J2R * 12, T2R - s7R + 13, s7R, t2R);
                    }
                    c7R = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now ' + (n7R > 1 ? ' mbsc-cal-multi ' : '') + (w7R ? ' mbsc-cal-weeks ' : '') + (q7R ? ' mbsc-cal-vertical' : '') + (i2R ? '' : ' mbsc-cal-hide-diff ') + (f7R.calendarClass || '') + '">' + '<div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (J7R ? 'mbsc-cal-btnc-ym' : 'mbsc-cal-btnc-m') + '">' + (R2R < y2R || n7R > 1 ? e5w + p5w : p5w + e5w) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                    for (Z7R = 0; Z7R < n7R; ++Z7R) {
                        c7R += '<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / n7R + '%"><table cellpadding="0" cellspacing="0"><tr>';
                        for (I7R = 0; I7R < 7; I7R++) {
                            c7R += '<th>' + f7R['dayNames' + z2R][(I7R + f7R.firstDay) % 7] + '</th>';
                        }
                        c7R += '</tr></table></div>';
                    }
                    c7R += '</div>' + '<div class="mbsc-cal-week-nrs-c ' + (f7R.weekNrClass || '') + '">' + '<div class="mbsc-cal-week-nrs"></div>' + '</div>' + '<div class="mbsc-cal-anim-c ' + (f7R.calendarClass || '') + '">' + '<div class="mbsc-cal-anim">';
                    for (I7R = 0; I7R < n7R + 2 * y7R; I7R++) {
                        c7R += '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                    }
                    c7R += '</div></div></div>' + E7R + O7R + '</div></div></div>';
                    R7R.calendar = x73(c7R);
                }
                x73.each(f7R.controls, function(J5w, Y5w) {
                    R7R[Y5w] = x73('<div class="mbsc-cal-pnl" id="' + (d2R.id + '_dw_pnl_' + J5w) + '"></div>').append(x73('<div class="mbsc-cal-pnl-i"></div>').append(R7R[Y5w])).appendTo(Y7R);
                });
                m5w = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                x73.each(f7R.controls, function(v5w, b5w) {
                    if (R7R[b5w]) {
                        m5w += '<li role="tab" aria-controls="' + (d2R.id + '_dw_pnl_' + v5w) + '" class="mbsc-cal-tab ' + (v5w ? '' : E2R) + '" data-control="' + b5w + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' + (!v5w ? k2R : '') + '">' + f7R[b5w + 'Text'] + '</a></li>';
                    }
                });
                m5w += '</ul></div>';
                Y7R.before(m5w);
                r7R = x73('.mbsc-cal-anim-c', W7R);
                j7R = x73('.mbsc-cal-anim', r7R);
                f8R = x73('.mbsc-cal-week-nrs', W7R);
                if (T7R) {
                    H7R = true;
                    l7R = x73('.mbsc-cal-slide', j7R).each(function(D5w, H5w) {
                        u7R.push(x73(H5w));
                    });
                    l7R.slice(y7R, y7R + n7R).addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                    for (I7R = 0; I7R < N7R; I7R++) {
                        p2R(u7R[I7R], 100 * (I7R - y7R) * D7R);
                    }
                    r2R(g7R, B7R);
                    m7R = new V83.ScrollView(r7R[0], {
                        axis: g2R,
                        easing: '',
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: y7R,
                        moveElement: j7R,
                        mousewheel: f7R.mousewheel,
                        time: 200,
                        lock: true,
                        stopProp: false,
                        minScroll: -Infinity,
                        maxScroll: Infinity,
                        onAnimationEnd: function M5w(x5w) {
                            var F5w = Math.round((x5w['pos' + g2R] - k7R) / K7R) * D7R;
                            if (F5w) {
                                V7R(g7R, B7R - F5w, F5w > 0 ? 'prev' : 'next', F5w > 0 ? F5w : -F5w);
                            }
                        }
                    });
                }
                j2R = x73('.mbsc-cal-month', W7R);
                A2R = x73('.mbsc-cal-year', W7R);
                h7R = x73('.mbsc-cal-m-c', W7R);
                if (p7R) {
                    h7R.on(C83, F2R);
                    E7R = x73('.mbsc-cal-month-c', W7R).on(C83, F2R);
                    O7R = x73('.mbsc-cal-year-c', W7R).on(C83, F2R);
                    O8R = x73('.mbsc-cal-sc-p', W7R);
                    b2R = {
                        axis: g2R,
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: 1,
                        rtl: f7R.rtl,
                        mousewheel: f7R.mousewheel,
                        time: 200,
                        stopProp: false,
                        minScroll: -Infinity,
                        maxScroll: Infinity
                    };
                    U7R = new V83.ScrollView(O7R[0], b2R);
                    M7R = new V83.ScrollView(E7R[0], b2R);
                }
                if (d7R) {
                    W7R.addClass('mbsc-cal-liq');
                } else {
                    x73('.mbsc-cal', W7R).width(v2R || 280 * n7R);
                }
                if (f7R.calendarHeight) {
                    x73('.mbsc-cal-anim-c', W7R).height(f7R.calendarHeight);
                }
                L7R.tap(r7R, function(Q5w) {
                    var j5w = x73(Q5w.target);
                    if (!F7R && !m7R.scrolled && f7R.readonly !== true) {
                        j5w = j5w.closest('.mbsc-cal-day', this);
                        if (j5w.hasClass('mbsc-cal-day-v')) {
                            r8R.call(j5w[0]);
                        }
                    }
                });
                x73('.mbsc-cal-btn', W7R).on('touchstart mousedown keydown', a8R).on('touchmove', D2R).on('touchend touchcancel keyup', H2R);
                x73('.mbsc-cal-tab', W7R).on('touchstart click', function(w5w) {
                    if (j83(w5w, this)) {
                        L7R.changeTab(x73(this).attr('data-control'));
                    }
                });
                if (p7R) {
                    L7R.tap(x73('.mbsc-cal-month', W7R), function() {
                        if (!O7R.hasClass('mbsc-cal-v')) {
                            U2R(h7R);
                            H7R = h7R.hasClass('mbsc-cal-v');
                        }
                        U2R(E7R);
                        v7R(O7R);
                    });
                    L7R.tap(x73('.mbsc-cal-year', W7R), function() {
                        if (!O7R.hasClass('mbsc-cal-v')) {
                            U7R.scroll(Q7R);
                        }
                        if (!E7R.hasClass('mbsc-cal-v')) {
                            U2R(h7R);
                            H7R = h7R.hasClass('mbsc-cal-v');
                        }
                        U2R(O7R);
                        v7R(E7R);
                    });
                    L7R.tap(x73('.mbsc-cal-month-s', W7R), function() {
                        if (!M7R.scrolled && !x73(this).hasClass('mbsc-fr-btn-d')) {
                            L7R.navigate(f7R.getDate(g7R, x73(this).attr('data-val'), 1));
                        }
                    });
                    L7R.tap(x73('.mbsc-cal-year-s', W7R), function() {
                        if (!U7R.scrolled) {
                            S7R = f7R.getDate(g7R, B7R, 1);
                            S7R = f7R.getDate(x73(this).attr('data-val'), S7R.getMonth(), 1);
                            L7R.navigate(new Date(C23.constrain(S7R, a7R, t7R)));
                        }
                    });
                    L7R.tap(O7R, function() {
                        if (!U7R.scrolled) {
                            v7R(O7R);
                            W2R(h7R);
                            H7R = true;
                        }
                    });
                    L7R.tap(E7R, function() {
                        if (!M7R.scrolled) {
                            v7R(E7R);
                            W2R(h7R);
                            H7R = true;
                        }
                    });
                }
            },
            onShow: function s5w() {
                if (T7R) {
                    S2R(g7R, B7R);
                }
            },
            onPosition: function z5w(y6w) {
                var W6w, I6w, B6w, L6w, X6w, l5w, f6w = 0,
                    A6w = 0,
                    g6w = 0,
                    n6w = y6w.windowHeight;
                if (d7R) {
                    if (c2R) {
                        r7R.height('');
                    }
                    Y7R.height('');
                    j7R.width('');
                }
                if (K7R) {
                    X6w = K7R;
                }
                if (T7R) {
                    K7R = Math.round(Math.round(r7R[0][q7R ? 'offsetHeight' : 'offsetWidth']) / n7R);
                }
                if (K7R) {
                    W7R.removeClass('mbsc-cal-m mbsc-cal-l');
                    if (K7R > 1024) {
                        W7R.addClass('mbsc-cal-l');
                    } else if (K7R > 640) {
                        W7R.addClass('mbsc-cal-m');
                    }
                }
                if (z7R && (n2R || d7R) || B2R) {
                    x73('.mbsc-cal-pnl', W7R).removeClass('mbsc-cal-pnl-h');
                    x73.each(R7R, function(u6w, P6w) {
                        W6w = P6w[0].offsetWidth;
                        f6w = Math.max(f6w, W6w);
                        A6w = Math.max(A6w, P6w[0].offsetHeight);
                        g6w += W6w;
                    });
                    if (z7R || B2R && g6w > g8R(Q2R)) {
                        I6w = true;
                        C7R = x73('.mbsc-cal-tabs .mbsc-cal-tab-sel', W7R).attr('data-control');
                        L2R.addClass('mbsc-cal-tabbed');
                    } else {
                        C7R = 'calendar';
                        f6w = '';
                        A6w = '';
                        L2R.removeClass('mbsc-cal-tabbed');
                        Y7R.css({
                            width: '',
                            height: ''
                        });
                    }
                }
                if (d7R && c2R && T7R) {
                    L7R._isFullScreen = true;
                    if (I6w) {
                        Y7R.height(R7R.calendar[0].offsetHeight);
                    }
                    L6w = L2R[0].offsetHeight;
                    if (n6w >= L6w) {
                        r7R.height(n6w - L6w + r7R[0].offsetHeight);
                    }
                    A6w = Math.max(A6w, R7R.calendar[0].offsetHeight);
                }
                if (I6w) {
                    Y7R.css({
                        width: d7R ? '' : f6w,
                        height: A6w
                    });
                    if (T7R) {
                        K7R = Math.round(Math.round(r7R[0][q7R ? 'offsetHeight' : 'offsetWidth']) / n7R);
                    }
                }
                if (K7R) {
                    j7R[q7R ? 'height' : 'width'](K7R);
                    if (K7R !== X6w) {
                        if (J7R) {
                            f2R = f7R.maxMonthWidth > x73('.mbsc-cal-btnw-m', W7R).width() ? f7R.monthNamesShort : f7R.monthNames;
                            for (I7R = 0; I7R < n7R; ++I7R) {
                                x73(j2R[I7R]).text(f2R[f7R.getMonth(f7R.getDate(g7R, B7R - P7R + I7R, 1))]);
                            }
                        }
                        if (p7R) {
                            l5w = O7R[0][q7R ? 'offsetHeight' : 'offsetWidth'];
                            Q73(U7R.settings, {
                                contSize: l5w,
                                snap: l5w,
                                minScroll: (2 - J2R) * l5w,
                                maxScroll: -l5w
                            });
                            Q73(M7R.settings, {
                                contSize: l5w,
                                snap: l5w,
                                minScroll: -l5w,
                                maxScroll: -l5w
                            });
                            U7R.refresh();
                            M7R.refresh();
                            if (O7R.hasClass('mbsc-cal-v')) {
                                U7R.scroll(Q7R);
                            }
                        }
                        if (d7R && !n2R && X6w) {
                            B6w = k7R / X6w;
                            k7R = B6w * K7R;
                            u2R = k7R;
                        }
                        V2R(g7R, B7R);
                    }
                } else {
                    K7R = X6w;
                }
                if (I6w) {
                    x73('.mbsc-cal-pnl', W7R).addClass('mbsc-cal-pnl-h');
                    R7R[C7R].removeClass('mbsc-cal-pnl-h');
                }
                L7R.trigger('onCalResize');
                n2R = false;
            },
            onHide: function R6w() {
                x7R = [];
                u7R = [];
                C7R = null;
                g7R = null;
                B7R = null;
                F7R = true;
                K7R = 0;
                if (m7R) {
                    m7R.destroy();
                }
                if (p7R && U7R && M7R) {
                    U7R.destroy();
                    M7R.destroy();
                }
            },
            onValidated: function K6w(t6w) {
                var O6w, r6w, k6w;
                r6w = L7R.getDate(true);
                if (w2R) {
                    O6w = 'calendar';
                } else {
                    for (k6w in L7R.order) {
                        if (k6w && L7R.order[k6w] === t6w) {
                            O6w = /[mdy]/.test(k6w) ? 'date' : 'time';
                        }
                    }
                }
                L7R.trigger('onSetDate', {
                    date: r6w,
                    control: O6w
                });
                o2R(r6w);
                w2R = false;
            }
        });
        return x2R;
    };
    var o23 = j73.util;
    var a83 = o23.datetime;
    var B1C = a83.adjustedDate;
    var e1C = j73.presets.scroller;
    var K6C = {};
    j73.presetShort('calendar');
    e1C.calendar = function(i6w) {
        function Y6w(J6w) {
            if (J6w) {
                if (V6w[J6w]) {
                    return V6w[J6w];
                }
                var v6w = x73('<div style="background-color:' + J6w + ';"></div>').appendTo('body'),
                    D6w = window.getComputedStyle ? getComputedStyle(v6w[0]) : v6w[0].style,
                    b6w = D6w.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                    M6w = b6w[0] * 0.299 + b6w[1] * 0.587 + b6w[2] * 0.114,
                    H6w = M6w > 130 ? '#000' : '#fff';
                v6w.remove();
                V6w[J6w] = H6w;
                return H6w;
            }
        }

        function N6w(F6w) {
            return B1C(F6w.getFullYear(), F6w.getMonth(), F6w.getDate());
        }

        function c6w(x6w) {
            a6w = {};
            if (x6w && x6w.length) {
                for (C6w = 0; C6w < x6w.length; C6w++) {
                    a6w[N6w(x6w[C6w])] = x6w[C6w];
                }
            }
        }

        function U6w() {
            i6w.refresh();
        }
        var Z6w, d6w, e6w, C6w, h6w, m6w, o6w, V6w = {},
            p6w = Q73({}, i6w.settings),
            T6w = Q73(i6w.settings, K6C, p6w),
            S6w = T6w.activeClass || '',
            E6w = T6w.select == 'multiple' || T6w.select > 1 || T6w.selectType == 'week',
            G6w = o23.isNumeric(T6w.select) ? T6w.select : Infinity,
            q6w = !!T6w.events,
            a6w = {};
        o6w = e1C.calbase.call(this, i6w);
        Z6w = Q73({}, o6w);
        e6w = T6w.firstSelectDay === undefined ? T6w.firstDay : T6w.firstSelectDay;
        if (E6w && T6w.defaultValue && T6w.defaultValue.length) {
            for (C6w = 0; C6w < T6w.defaultValue.length; C6w++) {
                a6w[N6w(T6w.defaultValue[C6w])] = T6w.defaultValue[C6w];
            }
        }
        i6w.onGenMonth = function(j6w, Q6w) {
            h6w = i6w.prepareObj(T6w.events || T6w.marked, j6w, Q6w);
        };
        i6w.getDayProps = function(f0w) {
            var s6w, I0w = E6w ? a6w[f0w] !== undefined : undefined,
                w6w = h6w[f0w] ? h6w[f0w] : false,
                z6w = w6w && w6w[0] && w6w[0].text,
                X0w = w6w && w6w[0] && w6w[0].color,
                L0w = q6w && z6w ? Y6w(X0w) : '',
                l6w = '',
                A0w = '';
            if (w6w) {
                for (s6w = 0; s6w < w6w.length; s6w++) {
                    if (w6w[s6w].icon) {
                        l6w += '<span class="mbsc-ic mbsc-ic-' + w6w[s6w].icon + '"' + (w6w[s6w].text ? '' : w6w[s6w].color ? ' style="color:' + w6w[s6w].color + ';"' : '') + '></span>\n';
                    }
                }
                A0w = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                for (s6w = 0; s6w < w6w.length; s6w++) {
                    A0w += '<div class="mbsc-cal-day-m-c"' + (w6w[s6w].color ? ' style="background:' + w6w[s6w].color + ';"' : '') + '></div>';
                }
                A0w += '</div></div>';
            }
            return {
                marked: w6w,
                selected: I0w,
                cssClass: w6w ? 'mbsc-cal-day-marked' : '',
                ariaLabel: q6w ? z6w : '',
                markup: q6w && z6w ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + x73('<div>' + z6w + '</div>').text() + '"' + (X0w ? ' style="background:' + X0w + ';color:' + L0w + ';text-shadow:none;"' : '') + '>' + l6w + z6w + '</div></div>' : q6w && l6w ? '<div class="mbsc-cal-day-ic-c">' + l6w + '</div>' : w6w ? A0w : ''
            };
        };
        i6w.addValue = function(W0w) {
            a6w[N6w(W0w)] = W0w;
            U6w();
        };
        i6w.removeValue = function(n0w) {
            delete a6w[N6w(n0w)];
            U6w();
        };
        i6w.setVal = function(g0w, B0w, y0w, P0w, u0w) {
            if (E6w) {
                c6w(g0w);
                g0w = g0w ? g0w[0] : null;
            }
            i6w._setVal(g0w, B0w, y0w, P0w, u0w);
            U6w();
        };
        i6w.getVal = function(R0w) {
            if (E6w) {
                return o23.objectToArray(a6w);
            }
            return i6w.getDate(R0w);
        };
        Q73(o6w, {
            highlight: !E6w,
            outerMonthChange: !E6w,
            parseValue: function K0w(k0w) {
                var O0w, r0w;
                if (E6w && k0w && typeof k0w === 'string') {
                    a6w = {};
                    k0w = k0w.split(',');
                    for (O0w = 0; O0w < k0w.length; O0w++) {
                        r0w = a83.parseDate(i6w.format, k0w[O0w].replace(/^\s+|\s+$/g, ''), T6w);
                        a6w[N6w(r0w)] = r0w;
                    }
                    k0w = k0w[0];
                }
                if (E6w && T6w.defaultValue && T6w.defaultValue.length) {
                    T6w.defaultValue = T6w.defaultValue[0];
                }
                return Z6w.parseValue.call(this, k0w);
            },
            formatValue: function t0w(i0w) {
                var a0w, T0w = [];
                if (E6w) {
                    for (a0w in a6w) {
                        T0w.push(a83.formatDate(i6w.format, a6w[a0w], T6w));
                    }
                    return T0w.join(', ');
                }
                return Z6w.formatValue.call(this, i0w);
            },
            onClear: function E0w() {
                if (E6w) {
                    a6w = {};
                    i6w.refresh();
                }
            },
            onBeforeShow: function C0w() {
                if (T6w.setOnDayTap === undefined && (!T6w.buttons || !T6w.buttons.length)) {
                    T6w.setOnDayTap = true;
                }
                if (T6w.setOnDayTap && T6w.display != 'inline') {
                    T6w.outerMonthChange = false;
                }
                if (T6w.counter && E6w) {
                    T6w.headerText = function() {
                        var N0w = 0,
                            q0w = T6w.selectType == 'week' ? 7 : 1;
                        x73.each(a6w, function() {
                            N0w++;
                        });
                        N0w = Math.round(N0w / q0w);
                        return (N0w > 1 ? T6w.selectedPluralText || T6w.selectedText : T6w.selectedText).replace(/{count}/, N0w);
                    };
                }
            },
            onMarkupReady: function U0w(Z0w) {
                Z6w.onMarkupReady.call(this, Z0w);
                d6w = x73(Z0w.target);
                if (E6w) {
                    x73('.mbsc-fr-hdr', d6w).attr('aria-live', 'off');
                    m6w = Q73({}, a6w);
                }
                if (q6w) {
                    x73('.mbsc-cal', d6w).addClass('mbsc-cal-ev');
                }
            },
            onDayChange: function d0w(S0w) {
                var p0w = S0w.date,
                    o0w = N6w(p0w),
                    c0w = x73(S0w.target),
                    m0w = S0w.selected;
                if (E6w) {
                    if (T6w.selectType == 'week') {
                        var h0w, G0w, V0w = o0w.getDay() - e6w;
                        V0w = V0w < 0 ? 7 + V0w : V0w;
                        if (T6w.select != 'multiple') {
                            a6w = {};
                        }
                        for (h0w = 0; h0w < 7; h0w++) {
                            G0w = B1C(o0w.getFullYear(), o0w.getMonth(), o0w.getDate() - V0w + h0w);
                            if (m0w) {
                                delete a6w[G0w];
                            } else if (o23.objectToArray(a6w).length / 7 < G6w) {
                                a6w[G0w] = G0w;
                            }
                        }
                        U6w();
                    } else {
                        var e0w = x73('.mbsc-cal .mbsc-cal-day[data-full="' + c0w.attr('data-full') + '"]', d6w);
                        if (m0w) {
                            e0w.removeClass('mbsc-cal-day-sel').removeAttr('aria-selected').find('.mbsc-cal-day-i').removeClass(S6w);
                            delete a6w[o0w];
                        } else if (o23.objectToArray(a6w).length < G6w) {
                            e0w.addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(S6w);
                            a6w[o0w] = o0w;
                        }
                    }
                }
                if (T6w.setOnDayTap && T6w.select != 'multiple' && T6w.display != 'inline') {
                    i6w.needsSlide = false;
                    i6w.setDate(p0w);
                    i6w.select();
                    return false;
                }
            },
            onCancel: function Y0w() {
                if (!i6w.live && E6w) {
                    a6w = Q73({}, m6w);
                }
            }
        });
        return o6w;
    };
    var n1C = function J0w() {};
    var G83 = function v0w(x0w, j0w, Q0w) {
        var F0w, H0w, D0w, M0w, b0w = this;
        j73.classes.Base.call(this, x0w, j0w, true);
        b0w.__init = n1C;
        b0w.__destroy = n1C;
        b0w._init = function(s0w) {
            var w0w;
            M0w = b0w.settings;
            F0w = x73(x0w);
            w0w = !!H0w;
            H0w = F0w.parent();
            H0w = H0w.hasClass('mbsc-input-wrap') ? H0w.parent() : H0w;
            b0w._$parent = H0w;
            if (D0w) {
                H0w.removeClass(D0w);
            }
            D0w = b0w._css + ' mbsc-progress-w mbsc-control-w mbsc-' + M0w.theme + (M0w.baseTheme ? ' mbsc-' + M0w.baseTheme : '') + (M0w.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
            H0w.addClass(D0w);
            F0w.addClass('mbsc-control');
            b0w.__init(s0w);
            if (!w0w) {
                b0w._attachChange();
            }
            b0w.refresh();
        };
        b0w._destroy = function() {
            b0w.__destroy();
            H0w.removeClass(D0w);
            F0w.removeClass('mbsc-control');
        };
        if (!Q0w) {
            b0w.init(j0w);
        }
    };
    G83.prototype = {
        _class: 'progressbase'
    };
    var r83 = 'mbsc-input-wrap';
    var k83 = function O4w(h4w, p4w, m4w) {
        function S4w() {
            var e4w = N4w('value', T4w);
            if (e4w !== E4w) {
                Z4w(e4w);
            }
        }

        function N4w(Y4w, J4w) {
            var c4w = t4w.attr(Y4w);
            return c4w === undefined || c4w === '' ? J4w : +c4w;
        }

        function Z4w(v4w, D4w, b4w, H4w) {
            v4w = Math.min(C4w, Math.max(v4w, T4w));
            G4w.css('width', (v4w - T4w) * 100 / (C4w - T4w) + '%');
            if (b4w === undefined) {
                b4w = true;
            }
            if (H4w === undefined) {
                H4w = b4w;
            }
            if (v4w !== E4w || D4w) {
                r4w._display(v4w);
            }
            if (v4w !== E4w) {
                E4w = v4w;
                if (b4w) {
                    t4w.attr('value', E4w);
                }
                if (H4w) {
                    t4w.trigger('change');
                }
            }
        }
        var q4w, t4w, a4w, G4w, o4w, U4w, T4w, C4w, i4w, V4w, E4w, d4w, r4w = this;
        G83.call(this, h4w, p4w, true);
        r4w._display = function(M4w) {
            d4w = V4w && i4w.returnAffix ? V4w.replace(/\{value\}/, M4w).replace(/\{max\}/, C4w) : M4w;
            if (o4w) {
                o4w.html(d4w);
            }
            if (q4w) {
                q4w.html(d4w);
            }
        };
        r4w._attachChange = function() {
            t4w.on('change', S4w);
        };
        r4w.__init = function(Q4w) {
            var x4w, j4w, F4w, w4w;
            i4w = r4w.settings;
            t4w = x73(h4w);
            w4w = !!a4w;
            a4w = r4w._$parent;
            T4w = r4w._min = Q4w.min === undefined ? N4w('min', i4w.min) : Q4w.min;
            C4w = r4w._max = Q4w.max === undefined ? N4w('max', i4w.max) : Q4w.max;
            E4w = N4w('value', T4w);
            x4w = t4w.attr('data-val') || i4w.val;
            F4w = t4w.attr('data-step-labels');
            F4w = F4w ? JSON.parse(F4w) : i4w.stepLabels;
            V4w = t4w.attr('data-template') || (C4w == 100 && !i4w.template ? '{value}%' : i4w.template);
            if (!w4w) {
                t5C(a4w);
                P5C(t4w);
                a4w.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
                G4w = r4w._$progress = a4w.find('.mbsc-progress-bar');
                U4w = r4w._$track = a4w.find('.mbsc-progress-track');
            } else {
                if (x4w) {
                    q4w.remove();
                    a4w.removeClass('mbsc-progress-value-' + (x4w == 'right' ? 'right' : 'left'));
                }
                if (F4w) {
                    x73('.mbsc-progress-step-label', U4w).remove();
                }
            }
            t4w.attr('min', T4w).attr('max', C4w);
            if (x4w) {
                q4w = x73('<span class="mbsc-progress-value"></span>');
                a4w.addClass('mbsc-progress-value-' + (x4w == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append(q4w);
            }
            if (F4w) {
                for (j4w = 0; j4w < F4w.length; ++j4w) {
                    U4w.append('<span class="mbsc-progress-step-label" style="' + (i4w.rtl ? 'right' : 'left') + ': ' + (F4w[j4w] - T4w) * 100 / (C4w - T4w) + '%" >' + F4w[j4w] + '</span>');
                }
            }
            o4w = x73(t4w.attr('data-target') || i4w.target);
        };
        r4w.__destroy = function() {
            a4w.removeClass('mbsc-ic-left mbsc-ic-right').find('.mbsc-progress-cont').remove();
            a4w.find('.mbsc-input-ic').remove();
            t4w.off('change', S4w);
        };
        r4w.refresh = function() {
            Z4w(N4w('value', T4w), true, false);
        };
        r4w.getVal = function() {
            return E4w;
        };
        r4w.setVal = function(s4w, z4w, l4w) {
            Z4w(s4w, true, z4w, l4w);
        };
        if (!m4w) {
            r4w.init(p4w);
        }
    };
    k83.prototype = {
        _class: 'progress',
        _css: 'mbsc-progress',
        _hasTheme: true,
        _hasLang: true,
        _hasDef: true,
        _defaults: {
            min: 0,
            max: 100,
            returnAffix: true
        }
    };
    j73.classes.Progress = k83;
    j73.presetShort('progress', 'Progress');
    var i83 = function A3w() {};
    var E83 = j73.util;
    var K83 = E83.getCoord;
    var N5C = E83.testTouch;
    var N83 = function X3w(d3w, w3w, z3w) {
        function v3w(l3w) {
            if (N5C(l3w, this) && !y3w && !d3w.disabled) {
                if (K3w.stopProp) {
                    l3w.stopPropagation();
                }
                y3w = true;
                r3w = false;
                V3w = false;
                G3w = K83(l3w, 'X');
                Y3w = K83(l3w, 'Y');
                O3w = G3w;
                t3w.removeClass('mbsc-progress-anim');
                m3w = u3w ? x73('.mbsc-slider-handle', this) : g3w;
                if (C3w) {
                    C3w.removeClass('mbsc-handle-curr');
                }
                C3w = m3w.parent().addClass('mbsc-active mbsc-handle-curr');
                W3w = +m3w.attr('data-index');
                e3w = t3w[0].offsetWidth;
                q3w = t3w[0].getBoundingClientRect().left;
                if (l3w.type === 'mousedown') {
                    l3w.preventDefault();
                    x73(document).on('mousemove', i3w).on('mouseup', E3w);
                }
            }
        }

        function i3w(A9w) {
            if (y3w) {
                O3w = K83(A9w, 'X');
                J3w = K83(A9w, 'Y');
                H3w = O3w - G3w;
                b3w = J3w - Y3w;
                if (Math.abs(H3w) > 5 || r3w) {
                    r3w = true;
                    if (Math.abs(Z3w - new Date()) > 50) {
                        Z3w = new Date();
                        s3w(O3w, K3w.round, F3w);
                    }
                }
                if (r3w) {
                    A9w.preventDefault();
                } else if (Math.abs(b3w) > 7) {
                    o3w(A9w);
                }
            }
        }

        function E3w(X9w) {
            if (y3w) {
                X9w.preventDefault();
                if (!u3w) {
                    t3w.addClass('mbsc-progress-anim');
                }
                s3w(O3w, true, true);
                if (!r3w && !V3w) {
                    if (X9w.type == 'touchend') {
                        E83.preventClick();
                    }
                    f3w._onTap(I3w[W3w]);
                }
                o3w();
            }
        }

        function D3w() {
            if (y3w) {
                o3w();
            }
        }

        function M3w() {
            var f9w = f3w._readValue(x73(this)),
                I9w = +x73(this).attr('data-index');
            if (f9w !== I3w[I9w]) {
                I3w[I9w] = f9w;
                P3w(f9w, I9w);
            }
        }

        function c3w(L9w) {
            L9w.stopPropagation();
        }

        function x3w(W9w) {
            W9w.preventDefault();
        }

        function j3w(g9w) {
            var n9w;
            if (!d3w.disabled) {
                switch (g9w.keyCode) {
                    case 38:
                    case 39:
                        n9w = 1;
                        break;
                    case 40:
                    case 37:
                        n9w = -1;
                        break;
                }
                if (n9w) {
                    g9w.preventDefault();
                    if (!N3w) {
                        W3w = +x73(this).attr('data-index');
                        P3w(I3w[W3w] + B3w * n9w, W3w, true);
                        N3w = setInterval(function() {
                            P3w(I3w[W3w] + B3w * n9w, W3w, true);
                        }, 200);
                    }
                }
            }
        }

        function a3w(B9w) {
            B9w.preventDefault();
            clearInterval(N3w);
            N3w = null;
        }

        function o3w() {
            y3w = false;
            C3w.removeClass('mbsc-active');
            x73(document).off('mousemove', i3w).off('mouseup', E3w);
        }

        function s3w(P9w, u9w, R9w) {
            var y9w = u9w ? Math.min(Math.round(Math.max((P9w - q3w) * 100 / e3w, 0) / h3w / B3w) * B3w * 100 / (k3w - L3w), 100) : Math.max(0, Math.min((P9w - q3w) * 100 / e3w, 100));
            if (T3w) {
                y9w = 100 - y9w;
            }
            P3w(Math.round((L3w + y9w / h3w) * p3w) / p3w, W3w, R9w, y9w);
        }

        function Q3w(K9w) {
            return (K9w - L3w) * 100 / (k3w - L3w);
        }

        function P3w(k9w, O9w, i9w, t9w, E9w, T9w) {
            var a9w = g3w.eq(O9w),
                r9w = a9w.parent();
            k9w = Math.min(k3w, Math.max(k9w, L3w));
            if (T9w === undefined) {
                T9w = i9w;
            }
            if (f3w._update) {
                k9w = f3w._update(k9w, I3w, O9w, t9w, u3w, E9w, r9w);
            } else {
                r9w.css({
                    left: T3w ? 'auto' : (t9w || Q3w(k9w)) + '%',
                    right: T3w ? (t9w || Q3w(k9w)) + '%' : 'auto'
                });
            }
            if (k9w > L3w) {
                r9w.removeClass('mbsc-slider-start');
            } else if (I3w[O9w] > L3w || E9w) {
                r9w.addClass('mbsc-slider-start');
            }
            if (U3w[O9w] != k9w) {
                V3w = true;
                U3w[O9w] = k9w;
                I3w[O9w] = k9w;
                if (i9w) {
                    f3w._fillValue(k9w, O9w, T9w);
                }
            }
            a9w.attr('aria-valuenow', k9w);
        }
        var n3w, m3w, C3w, g3w, S3w, R3w, t3w, y3w, V3w, H3w, b3w, q3w, O3w, J3w, W3w, T3w, F3w, k3w, L3w, r3w, u3w, U3w, B3w, K3w, h3w, G3w, Y3w, p3w, N3w, e3w, I3w, f3w = this,
            Z3w = new Date();
        G83.call(this, d3w, w3w, true);
        f3w._onTap = i83;
        f3w.___init = i83;
        f3w.___destroy = i83;
        f3w._attachChange = function() {
            n3w.on(K3w.changeEvent, M3w);
        };
        f3w.__init = function(N9w) {
            var C9w;
            if (g3w) {
                C9w = true;
                g3w.parent().remove();
            }
            f3w.___init(N9w);
            R3w = f3w._$parent;
            t3w = f3w._$track;
            n3w = R3w.find('input');
            K3w = f3w.settings;
            L3w = f3w._min;
            k3w = f3w._max;
            B3w = f3w._step;
            F3w = f3w._live;
            p3w = B3w % 1 !== 0 ? 100 / (+(B3w % 1).toFixed(2) * 100) : 1;
            h3w = 100 / (k3w - L3w) || 100;
            u3w = n3w.length > 1;
            T3w = K3w.rtl;
            I3w = [];
            U3w = [];
            n3w.each(function(q9w) {
                I3w[q9w] = f3w._readValue(x73(this));
                x73(this).attr('data-index', q9w);
            });
            g3w = R3w.find('.mbsc-slider-handle');
            S3w = R3w.find(u3w ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');
            g3w.on('keydown', j3w).on('keyup', a3w).on('blur', a3w);
            S3w.on('touchstart mousedown', v3w).on('touchmove', i3w).on('touchend touchcancel', E3w).on('pointercancel', D3w);
            if (!C9w) {
                n3w.on('click', c3w);
                R3w.on('click', x3w);
            }
        };
        f3w.__destroy = function() {
            R3w.off('click', x3w);
            n3w.off(K3w.changeEvent, M3w).off('click', c3w);
            g3w.off('keydown', j3w).off('keyup', a3w).off('blur', a3w);
            S3w.off('touchstart mousedown', v3w).off('touchmove', i3w).off('touchend touchcancel', E3w).off('pointercancel', D3w);
            f3w.___destroy();
        };
        f3w.refresh = function() {
            n3w.each(function(U9w) {
                P3w(f3w._readValue(x73(this)), U9w, true, false, true, false);
            });
        };
        f3w.getVal = function() {
            return u3w ? I3w.slice(0) : I3w[0];
        };
        f3w.setVal = f3w._setVal = function(Z9w, o9w, d9w) {
            if (!x73.isArray(Z9w)) {
                Z9w = [Z9w];
            }
            x73.each(Z9w, function(V9w, h9w) {
                I3w[V9w] = h9w;
            });
            x73.each(Z9w, function(G9w, S9w) {
                P3w(S9w, G9w, true, false, true, d9w);
            });
        };
        if (!z3w) {
            f3w.init(w3w);
        }
    };
    N83.prototype = {
        _class: 'sliderbase'
    };
    var q83 = function p9w(z9w, w9w, L7w) {
        function e9w(W7w) {
            return (W7w - v9w) * 100 / (H9w - v9w);
        }

        function Q9w(g7w, B7w) {
            var n7w = c9w.attr(g7w);
            return n7w === undefined || n7w === '' ? B7w : n7w === 'true';
        }
        var c9w, b9w, M9w, A7w, x9w, F9w, j9w, s9w, Y9w, H9w, v9w, D9w, J9w, m9w = this;
        k83.call(this, z9w, w9w, true);
        var f7w = m9w.__init,
            I7w = m9w.__destroy;
        N83.call(this, z9w, w9w, true);
        var X7w = m9w.__init,
            l9w = m9w.__destroy;
        m9w.__init = function(y7w) {
            f7w(y7w);
            X7w(y7w);
        };
        m9w.__destroy = function() {
            I7w();
            l9w();
        };
        m9w._update = function(P7w, u7w, R7w, K7w, k7w, O7w, r7w) {
            if (s9w) {
                if (R7w === 0) {
                    P7w = Math.min(P7w, u7w[1]);
                    M9w.css({
                        width: e9w(u7w[1]) - e9w(P7w) + '%',
                        left: Y9w ? 'auto' : e9w(P7w) + '%',
                        right: Y9w ? e9w(P7w) + '%' : 'auto'
                    });
                } else {
                    P7w = Math.max(P7w, u7w[0]);
                    M9w.css({
                        width: e9w(P7w) - e9w(u7w[0]) + '%'
                    });
                }
            } else if (k7w || !F9w) {
                r7w.css({
                    left: Y9w ? 'auto' : (K7w || e9w(P7w)) + '%',
                    right: Y9w ? (K7w || e9w(P7w)) + '%' : 'auto'
                });
            } else {
                M9w.css('width', (K7w || e9w(P7w)) + '%');
            }
            if (j9w) {
                A7w.eq(R7w).html(P7w);
            }
            if (!k7w && (u7w[R7w] != P7w || O7w)) {
                m9w._display(P7w);
            }
            return P7w;
        };
        m9w._readValue = function(t7w) {
            return +t7w.val();
        };
        m9w._fillValue = function(a7w, T7w, i7w) {
            c9w.eq(T7w).val(a7w);
            if (i7w) {
                c9w.eq(T7w).trigger('change');
            }
        };
        m9w.___init = function(N7w) {
            var E7w, C7w;
            if (b9w) {
                b9w.removeClass('mbsc-slider-has-tooltip');
                if (D9w != 1) {
                    x73('.mbsc-slider-step', x9w).remove();
                }
            }
            b9w = m9w._$parent;
            x9w = m9w._$track;
            M9w = m9w._$progress;
            c9w = b9w.find('input');
            J9w = m9w.settings;
            v9w = m9w._min;
            H9w = m9w._max;
            m9w._step = D9w = N7w.step === undefined ? +c9w.attr('step') || J9w.step : N7w.step;
            m9w._live = Q9w('data-live', J9w.live);
            j9w = Q9w('data-tooltip', J9w.tooltip);
            F9w = Q9w('data-highlight', J9w.highlight) && c9w.length < 3;
            s9w = F9w && c9w.length == 2;
            Y9w = J9w.rtl;
            if (j9w) {
                b9w.addClass('mbsc-slider-has-tooltip');
            }
            if (D9w != 1) {
                C7w = (H9w - v9w) / D9w;
                for (E7w = 0; E7w <= C7w; ++E7w) {
                    x9w.append('<span class="mbsc-slider-step" style="' + (Y9w ? 'right' : 'left') + ':' + 100 / C7w * E7w + '%"></span>');
                }
            }
            c9w.each(function(q7w) {
                if (this.type == 'range') {
                    x73(this).attr('min', v9w).attr('max', H9w).attr('step', D9w);
                }(F9w ? M9w : x9w).append('<span class="mbsc-slider-handle-cont' + (s9w && !q7w ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + v9w + '" aria-valuemax="' + H9w + '" data-index="' + q7w + '"></span>' + (j9w ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
            });
            A7w = b9w.find('.mbsc-slider-tooltip');
        };
        if (!L7w) {
            m9w.init(w9w);
        }
    };
    q83.prototype = {
        _class: 'progress',
        _css: 'mbsc-progress mbsc-slider',
        _hasTheme: true,
        _hasLang: true,
        _hasDef: true,
        _defaults: {
            changeEvent: 'change',
            stopProp: true,
            min: 0,
            max: 100,
            step: 1,
            live: true,
            highlight: true,
            round: true,
            returnAffix: true
        }
    };
    j73.classes.Slider = q83;
    j73.presetShort('slider', 'Slider');
    var U83 = j73.util;
    var A1C = function U7w() {};
    var v23 = j73.classes;
    var Q83 = function U2w(z2w, B8w, N8w) {
        function I8w(Z8w, U8w, d8w) {
            if (!d8w) {
                Z2w._value = Z2w._hasValue ? Z2w._tempValue.slice(0) : null;
                for (var q8w = 0; q8w < d2w.length; ++q8w) {
                    if (d2w[q8w].tempChangedColor && Z2w._value && Z2w._value.indexOf(d2w[q8w].tempChangedColor) != -1) {
                        d2w[q8w].changedColor = d2w[q8w].tempChangedColor;
                    }
                    delete d2w[q8w].tempChangedColor;
                }
            }
            if (Z8w) {
                if (Z2w._isInput) {
                    J2w.val(Z2w._hasValue ? Z2w._tempValue : '');
                }
                Q2w('onFill', {
                    valueText: Z2w._hasValue ? Z2w._tempValue : '',
                    change: U8w
                });
                if (U8w) {
                    m2w = Q73(true, {}, h2w);
                    Z2w._preventChange = true;
                    J2w.trigger('change');
                }
                k8w(Z2w._value, true);
            }
        }

        function u8w(V8w, o8w) {
            o8w = o8w !== undefined ? o8w : L8w(V8w);
            return '<div class="mbsc-color-input-item" data-color="' + (o8w !== undefined ? o8w : V8w) + '" style="background: ' + V8w + ';">' + (S2w ? '' : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + '</div>';
        }

        function R8w(h8w) {
            K8w[0].style.background = h8w ? U83.prefix + 'linear-gradient(left, ' + (o2w.rtl ? '#000000' : '#FFFFFF') + ' 0%, ' + h8w + ' 50%, ' + (o2w.rtl ? '#FFFFFF' : '#000000') + ' 100%)' : '';
        }

        function L8w(G8w) {
            if (Object.keys(h2w).length && !isNaN(G8w)) {
                return G8w;
            }
            for (var S8w in d2w) {
                if (G8w == d2w[S8w].color || G8w == d2w[S8w].changedColor) {
                    return S8w;
                }
            }
        }

        function a8w() {
            if (s2w) {
                var p8w, m8w = '';
                v2w.empty();
                if (Z2w._value) {
                    if (S2w) {
                        m8w += u8w(Z2w._value, V2w);
                    } else {
                        for (p8w = 0; p8w < Z2w._value.length; ++p8w) {
                            m8w += u8w(Z2w._value[p8w], Object.keys(h2w).length && h2w[p8w].colorIndex ? h2w[p8w].colorIndex : L8w(Z2w._value[p8w]));
                        }
                    }
                    v2w.append(m8w);
                    Z2w.tap(x73('.mbsc-color-input-item', v2w), function(e8w) {
                        if (x73(e8w.target).hasClass('mbsc-color-input-item-close')) {
                            var c8w = x73(this).index();
                            e8w.stopPropagation();
                            e8w.preventDefault();
                            if (V2w === undefined) {
                                V2w = x73(e8w.target).parent().attr('data-color');
                            }
                            if (p2w) {
                                G2w = d2w[V2w].previewInd;
                                c2w.eq(G2w).parent().removeClass('mbsc-color-active');
                                m2w[c8w] = {};
                                h2w[c8w] = {};
                            }
                            Z2w._value.splice(c8w, 1);
                            Z2w.setVal(Z2w._value, true, true);
                        } else if (H2w && o2w.display !== 'inline') {
                            i8w = true;
                            V2w = x73(e8w.target).attr('data-color');
                            if (isNaN(V2w)) {
                                V2w = L8w(V2w);
                            }
                            if (V2w) {
                                d2w[V2w].selected = true;
                                G2w = d2w[V2w].previewInd;
                                setTimeout(function() {
                                    F2w.scroll(b2w.eq(V2w), 400);
                                    if (p2w) {
                                        M2w.scroll(c2w.eq(G2w), 400);
                                    }
                                }, 200);
                            }
                        }
                    });
                }
            }
        }

        function l2w(J8w, b8w) {
            var v8w, Y8w = J8w.match(/\d+/gmi);
            switch (true) {
                case J8w.indexOf('rgb') > -1:
                    v8w = Z83({
                        r: Y8w[0],
                        g: Y8w[1],
                        b: Y8w[2]
                    });
                    break;
                case J8w.indexOf('hsl') > -1:
                    v8w = o6C({
                        h: Y8w[0],
                        s: Y8w[1],
                        l: Y8w[2]
                    });
                    break;
                case J8w.indexOf('hsv') > -1:
                    v8w = z1C({
                        h: Y8w[0],
                        s: Y8w[1],
                        v: Y8w[2]
                    });
                    break;
                case J8w.indexOf('#') > -1:
                    v8w = J8w;
                    break;
            }
            return T8w(v8w, b8w || o2w.format);
        }

        function T8w(H8w, D8w) {
            switch (D8w) {
                case 'rgb':
                    return d83(H8w);
                case 'hsl':
                    return a6C(H8w);
                case 'hsv':
                    return l1C(H8w);
                default:
                    return H8w;
            }
        }

        function t8w() {
            var M8w;
            for (M8w = 0; M8w < o2w.select; ++M8w) {
                if (h2w[M8w].colorIndex === undefined) {
                    return M8w;
                }
            }
        }

        function f8w(F8w, x8w) {
            x73('.mbsc-color-active', x8w).removeClass('mbsc-color-active');
            if (H2w) {
                F8w.parent().addClass('mbsc-color-active');
                if (p2w && F8w) {
                    if (G2w !== undefined) {
                        c2w.eq(G2w).parent().addClass('mbsc-color-active');
                    }
                }
            }
        }

        function k8w(w8w, f1c) {
            var j8w, s8w, Q8w = [],
                A1c = 0,
                z8w = x73.map(d2w, function(I1c) {
                    return I1c.changedColor || I1c.color;
                });
            if (S2w) {
                w8w = x73.isArray(w8w) ? w8w[0] : w8w;
                s8w = z8w.indexOf(w8w);
                if (s8w > -1) {
                    Q8w.push(s8w);
                }
                if (w8w && !Q8w.length) {
                    var l8w = +x73('.mbsc-color-input-item', v2w).attr('data-color');
                    if (!isNaN(l8w)) {
                        Q8w.push(l8w);
                    }
                    V2w = l8w;
                }
            } else if (w8w) {
                if (p2w && H2w) {
                    for (var X1c in m2w) {
                        if (m2w[X1c].colorIndex !== undefined) {
                            Q8w.push(+m2w[X1c].colorIndex);
                        }
                    }
                } else {
                    for (j8w = 0; j8w < w8w.length; ++j8w) {
                        s8w = z8w.indexOf(w8w[j8w]);
                        if (s8w > -1) {
                            Q8w.push(s8w);
                            z8w[s8w] = 'temp' + j8w;
                        }
                    }
                }
            }
            for (j8w = 0; j8w < Q8w.length; ++j8w) {
                A8w(true, Q8w[j8w], A1c++, d2w[Q8w[j8w]].changedColor || d2w[Q8w[j8w]].color, true);
            }
            for (j8w = 0; j8w < d2w.length; ++j8w) {
                if (Q8w.indexOf(j8w) == -1) {
                    A8w(false, j8w, undefined, d2w[j8w].changedColor || d2w[j8w].color, false);
                }
            }
            if (p2w) {
                for (j8w = A1c; j8w < o2w.select; ++j8w) {
                    h2w[j8w] = {};
                    if (c2w) {
                        c2w.eq(j8w).addClass('mbsc-color-preview-item-empty').css({
                            background: 'transparent'
                        });
                    }
                }
            }
            m2w = Q73(true, {}, h2w);
            if (f1c !== false) {
                a8w();
            }
        }

        function A8w(L1c, W1c, n1c, g1c, y1c, P1c) {
            if (p2w && y1c) {
                h2w[n1c].colorIndex = L1c ? W1c : undefined;
                h2w[n1c].color = L1c ? g1c : undefined;
                if (c2w) {
                    var B1c = c2w.eq(n1c);
                    B1c.removeClass('mbsc-color-preview-item-empty').css({
                        background: L1c ? g1c : 'transparent'
                    });
                    if (!L1c) {
                        B1c.addClass('mbsc-color-preview-item-empty').parent().removeClass('mbsc-color-active');
                    }
                }
            }
            if (P1c) {
                if (L1c) {
                    Z2w._tempValue.splice(n1c, 0, g1c);
                } else {
                    Z2w._tempValue.splice(Z2w._tempValue.indexOf(g1c), 1);
                }
            }
            if (b2w) {
                if (L1c) {
                    b2w.eq(W1c).addClass('mbsc-color-selected');
                } else {
                    b2w.eq(W1c).removeClass('mbsc-color-selected').parent().removeClass('mbsc-color-active');
                }
            }
            d2w[W1c].previewInd = L1c ? n1c : undefined;
            d2w[W1c].selected = L1c;
        }

        function W8w(u1c, R1c) {
            if (u1c !== undefined && (S2w || d2w[u1c].selected)) {
                V2w = u1c;
                Y2w = d2w[u1c].changedColor || d2w[u1c].color;
                e2w = b2w.eq(u1c);
                if (H2w) {
                    f8w(b2w.eq(u1c), R1c || '');
                    j2w = l2w(d2w[u1c].color, 'hsl');
                    j2w.l = l2w(Y2w, 'hsl').l;
                    R8w(d2w[u1c].color);
                    w2w.setVal(100 - j2w.l, false, false);
                }
            } else if (H2w) {
                R8w();
            }
        }

        function C8w() {
            var K1c, k1c = [];
            for (K1c = 0; K1c < d2w.length; ++K1c) {
                if (d2w[K1c].selected) {
                    k1c.push(d2w[K1c]);
                }
            }
            return k1c;
        }

        function y8w(r1c, t1c) {
            var O1c = x73(r1c.target).index();
            V2w = h2w[O1c].colorIndex;
            e2w = b2w.eq(V2w);
            G2w = O1c;
            W8w(V2w, t1c);
            F2w.scroll(e2w, 250);
            Q2w('onPreviewItemTap', {
                target: r1c.target,
                value: h2w[O1c].color,
                index: O1c
            });
        }

        function P8w(E1c, T1c) {
            var a1c = false,
                i1c = x73('.mbsc-color-selected', T1c);
            e2w = x73(E1c.target);
            if (e2w.hasClass('mbsc-color-clear-item')) {
                Y2w = '';
                Z2w.clear();
                return;
            }
            if ((S2w || O8w > +i1c.length || e2w.hasClass('mbsc-color-selected'))) {
                V2w = e2w.attr('data-index');
                if (p2w) {
                    G2w = d2w[V2w].previewInd !== undefined ? d2w[V2w].previewInd : t8w();
                    a1c = H2w && e2w.hasClass('mbsc-color-selected') && !e2w.parent().hasClass('mbsc-color-active');
                    if (c2w.length > 6) {
                        M2w.scroll(c2w.eq(G2w));
                    }
                }
                Y2w = d2w[V2w].changedColor || d2w[V2w].color;
                if (S2w) {
                    i1c.removeClass('mbsc-color-selected');
                    Z2w._tempValue = Y2w;
                    if (Y2w) {
                        e2w.toggleClass('mbsc-color-selected');
                    }
                    f8w(e2w, T1c);
                } else {
                    f8w(e2w, T1c);
                    if (!a1c) {
                        A8w(!d2w[V2w].selected, V2w, G2w, Y2w, true, true);
                    }
                }
                W8w(V2w, T1c);
                if (Z2w.live) {
                    Z2w._fillValue();
                    Q2w('onSet', {
                        value: Z2w._value
                    });
                }
                Q2w('onItemTap', {
                    target: E1c.target,
                    value: Y2w,
                    selected: d2w[V2w].selected,
                    index: V2w
                });
            }
        }
        var o2w, r8w, d2w, E8w, Q2w, F2w, M2w, x2w, Y2w, j2w, i8w, D2w, p2w, K8w, H2w, g8w, w2w, V2w, s2w, S2w, O8w, n8w, v2w, b2w, c2w, e2w, X8w, Z2w = this,
            J2w = x73(z2w),
            G2w = 0,
            m2w = {},
            h2w = {};
        v23.Frame.call(this, z2w, B8w, true);
        Z2w.setVal = Z2w._setVal = function(C1c, N1c, q1c, U1c) {
            Z2w._hasValue = C1c !== null && C1c !== undefined;
            Z2w._tempValue = S2w ? x73.isArray(C1c) ? C1c[0] : C1c : x73.isArray(C1c) ? C1c : [C1c];
            I8w(N1c, q1c === undefined ? N1c : q1c, U1c);
        };
        Z2w.getVal = Z2w._getVal = function(Z1c) {
            return Z2w._hasValue || Z1c ? n8w ? C8w() : Z2w[Z1c ? '_tempValue' : '_value'] : null;
        };
        Z2w._readValue = function() {
            var d1c = J2w.val() || '';
            Z2w._hasValue = false;
            if (d1c.length !== 0 && d1c !== '') {
                Z2w._hasValue = true;
            }
            if (Z2w._hasValue) {
                Z2w._tempValue = S2w ? d1c : o2w.format == 'hex' ? d1c.split(',') : d1c.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gmi);
                I8w(true);
            } else {
                Z2w._tempValue = [];
            }
            k8w(Z2w._tempValue, Z2w._hasValue);
        };
        Z2w._fillValue = function() {
            Z2w._hasValue = true;
            I8w(true, true);
        };
        Z2w._generateContent = function() {
            var o1c, V1c, S1c, h1c = x2w ? 1 : 0;
            g8w = D2w ? Math.ceil((d2w.length + h1c) / o2w.rows) : o2w.rows;
            V1c = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (D2w ? '' : 'mbsc-color-vertical') + '"><div class="mbsc-color-cont">' + (D2w ? '<div class="mbsc-color-row">' : '');
            for (o1c = 0; o1c < d2w.length; ++o1c) {
                S1c = d2w[o1c].changedColor || d2w[o1c].color;
                if (x2w && o1c === 0) {
                    V1c += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>';
                }
                if (o1c !== 0 && (o1c + h1c) % g8w === 0) {
                    V1c += D2w ? '</div><div class="mbsc-color-row">' : '';
                }
                V1c += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + o1c + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (d2w[o1c].selected ? 'mbsc-color-selected' : '') + '"  style="background:' + S1c + '"></div></div>';
            }
            V1c += '</div></div>' + (D2w ? '</div>' : '');
            if (H2w) {
                V1c += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>';
            }
            if (p2w) {
                V1c += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
                for (var G1c in m2w) {
                    V1c += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (m2w[G1c].color ? '' : 'mbsc-color-preview-item-empty') + '" style="background: ' + (m2w[G1c].color || 'initial') + ';"></div></div>';
                }
                V1c += '</div></div>';
            }
            return V1c;
        };
        Z2w._position = function(e1c) {
            var p1c, m1c;
            if (!D2w) {
                p1c = e1c.find('.mbsc-color-cont');
                m1c = Math.ceil(p1c.find('.mbsc-color-item-c')[0].offsetWidth);
                p1c.width(Math.min(Math.floor(e1c.find('.mbsc-fr-c').width() / m1c), Math.round(d2w.length / o2w.rows)) * m1c + 1);
            }
            if (F2w) {
                F2w.refresh();
            }
            if (M2w) {
                M2w.refresh();
            }
        };
        Z2w._markupInserted = function(c1c) {
            if (!D2w) {
                c1c.find('.mbsc-color-scroll-cont').css('max-height', c1c.find('.mbsc-color-item-c')[0].offsetHeight * o2w.rows);
            }
            F2w = new v23.ScrollView(c1c.find('.mbsc-color-scroll-cont')[0], {
                axis: D2w ? 'X' : 'Y',
                rtl: o2w.rtl,
                elastic: 60,
                stopProp: false,
                mousewheel: o2w.mousewheel,
                onBtnTap: function Y1c(J1c) {
                    P8w(J1c, c1c);
                }
            });
        };
        Z2w._attachEvents = function(v1c) {
            var b1c;
            b2w = x73('.mbsc-color-item', v1c);
            v1c.on('keydown', '.mbsc-color-btn-e', function(H1c) {
                H1c.stopPropagation();
                if (H1c.keyCode == 32) {
                    if (H1c.target.classList.contains('mbsc-color-item')) {
                        P8w(H1c, v1c);
                    } else {
                        y8w(H1c, v1c);
                    }
                }
            });
            if (p2w) {
                c2w = x73('.mbsc-color-preview-item', v1c);
            }
            if (H2w) {
                v1c.addClass('mbsc-color-refine');
                X8w = x73('.mbsc-color-slider', v1c);
                w2w = new v23.Slider(X8w[0], {
                    theme: o2w.theme,
                    rtl: o2w.rtl
                });
                K8w = v1c.find('.mbsc-progress-track');
                if (V2w && Z2w._value) {
                    W8w(V2w, v1c);
                }
                X8w.on('change', function() {
                    if (V2w !== undefined && (S2w || d2w[V2w].selected)) {
                        j2w.l = 100 - this.value;
                        b1c = l2w(j2w.toString()).toString();
                        if (S2w) {
                            Z2w._tempValue = b1c;
                        } else {
                            Z2w._tempValue[G2w !== undefined ? G2w : Z2w._tempValue.length] = b1c;
                        }
                        d2w[V2w].tempChangedColor = b1c;
                        b2w.eq(V2w).css('background', b1c);
                        if (p2w) {
                            h2w[G2w].color = b1c;
                            c2w.eq(G2w).removeClass('mbsc-color-preview-item-empty').css({
                                'background': b1c
                            });
                        }
                        if (Z2w.live) {
                            U83.throttle(Z2w._fillValue());
                        }
                    }
                });
            }
            if (p2w) {
                M2w = new v23.ScrollView(v1c.find('.mbsc-color-preview-cont')[0], {
                    axis: 'X',
                    rtl: o2w.rtl,
                    mousewheel: o2w.mousewheel,
                    onBtnTap: function D1c(M1c) {
                        y8w(M1c, v1c);
                    }
                });
            }
        };
        Z2w._detachEvents = function() {
            F2w.destroy();
            if (w2w) {
                w2w.destroy();
            }
            if (M2w) {
                M2w.destroy();
            }
        };
        Z2w.__processSettings = function() {
            var F1c, x1c;
            o2w = Z2w.settings;
            E8w = o2w.format;
            Q2w = Z2w.trigger;
            D2w = o2w.navigation == 'horizontal';
            Z2w._value = [];
            Z2w._tempValue = [];
            S2w = o2w.select == 'single';
            x2w = o2w.clear !== undefined ? o2w.clear : S2w;
            x1c = o2w.data || [];
            if (!x1c.length) {
                switch (o2w.format) {
                    case 'rgb':
                        x1c = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"];
                        if (x2w) {
                            x1c.splice(10, 0, 'rgb(83, 71, 65)');
                        }
                        break;
                    case 'hsl':
                        x1c = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"];
                        if (x2w) {
                            x1c.splice(10, 0, 'hsl(20, 12%, 29%)');
                        }
                        break;
                    default:
                        x1c = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#683ab7', '#3f51b5', '#2196f3', '#009788', '#4baf4f', '#7e5d4e', '#9e9e9e'];
                        if (x2w) {
                            x1c.splice(10, 0, '#534741');
                        }
                }
            }
            H2w = o2w.mode == 'refine';
            p2w = !isNaN(o2w.select);
            O8w = isNaN(o2w.select) ? S2w ? 2 : x1c.length : o2w.select;
            n8w = x73.isPlainObject(x1c[0]);
            if (p2w && !Object.keys(m2w).length) {
                for (F1c = 0; F1c < o2w.select; ++F1c) {
                    m2w[F1c] = {};
                    h2w[F1c] = {};
                }
            }
            if (!d2w) {
                d2w = x1c.slice(0);
                for (F1c = 0; F1c < d2w.length; ++F1c) {
                    if (!x73.isPlainObject(x1c[F1c])) {
                        x1c[F1c] = x1c[F1c].toLowerCase();
                        d2w[F1c] = {
                            key: F1c,
                            name: x1c[F1c],
                            color: x1c[F1c]
                        };
                    } else {
                        d2w[F1c].color = x1c[F1c].color;
                    }
                }
            }
            r8w = o2w.defaultValue || d2w[0].color;
            Y2w = r8w;
            j2w = l2w(Y2w, 'hsl');
            s2w = o2w.enhance && J2w.is('input');
            if (s2w) {
                if (J2w.hasClass('mbsc-color-input-hdn')) {
                    v2w = J2w.prev();
                } else {
                    v2w = x73('<div ' + (z2w.placeholder ? 'data-placeholder="' + z2w.placeholder + '"' : '') + ' class="mbsc-control mbsc-color-input ' + (o2w.inputClass || '') + '" readonly ></div>');
                    v2w.insertBefore(J2w);
                    J2w.addClass('mbsc-color-input-hdn').attr('tabindex', -1);
                }
                o2w.anchor = v2w;
                Z2w.attachShow(v2w);
            }
        };
        Z2w.__init = function() {
            o2w.cssClass = (o2w.cssClass || '') + ' mbsc-color';
        };
        Z2w.__destroy = function() {
            if (s2w) {
                J2w.removeClass('mbsc-color-input-hdn');
                v2w.remove();
            }
        };
        if (!N8w) {
            Z2w.init(B8w);
        }
    };
    Q83.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _class: 'color',
        _defaults: Q73({}, v23.Frame.prototype._defaults, {
            headerText: false,
            validate: A1C,
            parseValue: A1C,
            enhance: true,
            rows: 2,
            select: 'single',
            format: 'hex',
            navigation: 'horizontal'
        })
    };
    j73.classes.Color = Q83;
    j73.themes.color = j73.themes.frame;
    j73.presetShort('color', 'Color', false);
    U83.color = {
        hsv2hex: z1C,
        hsv2rgb: Q5C,
        rgb2hsv: s5C,
        rgb2hex: Z83,
        rgb2hsl: u6C,
        hex2rgb: d83,
        hex2hsv: l1C,
        hex2hsl: a6C
    };
    ['date', 'time', 'datetime'].forEach(function(j1c) {
        j73.presetShort(j1c);
    });
    var f5C = j73.util;
    var P83 = f5C.datetime;
    var n5C = P83.adjustedDate;
    var z83 = j73.presets.scroller;
    var y5C = {
        labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs'],
        eventText: 'event',
        eventsText: 'events'
    };
    j73.presetShort('eventcalendar');
    z83.eventcalendar = function(Q1c) {
        function E5c(U5c) {
            if (U5c) {
                if (n5c[U5c]) {
                    return n5c[U5c];
                }
                var Z5c = x73('<div style="background-color:' + U5c + ';"></div>').appendTo('body'),
                    V5c = window.getComputedStyle ? getComputedStyle(Z5c[0]) : Z5c[0].style,
                    d5c = V5c.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
                    h5c = d5c[0] * 0.299 + d5c[1] * 0.587 + d5c[2] * 0.114,
                    o5c = h5c > 130 ? '#000' : '#fff';
                Z5c.remove();
                n5c[U5c] = o5c;
                return o5c;
            }
        }

        function C5c(Y5c) {
            var G5c = w1c.labelsShort,
                p5c = Math.abs(Y5c) / 1000,
                m5c = p5c / 60,
                e5c = m5c / 60,
                S5c = e5c / 24,
                c5c = S5c / 365;
            return p5c < 45 && Math.round(p5c) + ' ' + G5c[5].toLowerCase() || m5c < 45 && Math.round(m5c) + ' ' + G5c[4].toLowerCase() || e5c < 24 && Math.round(e5c) + ' ' + G5c[3].toLowerCase() || S5c < 30 && Math.round(S5c) + ' ' + G5c[2].toLowerCase() || S5c < 365 && Math.round(S5c / 30) + ' ' + G5c[1].toLowerCase() || Math.round(c5c) + ' ' + G5c[0].toLowerCase();
        }

        function a5c(J5c) {
            return J5c.sort(function(v5c, b5c) {
                var H5c = v5c.d || v5c.start,
                    D5c = b5c.d || b5c.start,
                    M5c = !H5c.getTime ? 0 : v5c.start && v5c.end && v5c.start.toDateString() !== v5c.end.toDateString() ? 1 : H5c.getTime(),
                    F5c = !D5c.getTime ? 0 : b5c.start && b5c.end && b5c.start.toDateString() !== b5c.end.toDateString() ? 1 : D5c.getTime();
                return M5c - F5c;
            });
        }

        function T5c(x5c) {
            var w5c, s5c = x73('.mbsc-cal-c', X5c)[0].offsetHeight,
                z5c = x5c[0].offsetHeight,
                l5c = x5c[0].offsetWidth,
                Q5c = x5c.offset().top - x73('.mbsc-cal-c', X5c).offset().top,
                j5c = x5c.closest('.mbsc-cal-row').index() < 2;
            w5c = s1c.addClass('mbsc-cal-events-t').css({
                top: j5c ? Q5c + z5c : '0',
                bottom: j5c ? '0' : s5c - Q5c
            }).addClass('mbsc-cal-events-v').height();
            s1c.css(j5c ? 'bottom' : 'top', 'auto').removeClass('mbsc-cal-events-t');
            B5c.css('max-height', w5c);
            A5c.refresh();
            A5c.scroll(0);
            if (j5c) {
                s1c.addClass('mbsc-cal-events-b');
            } else {
                s1c.removeClass('mbsc-cal-events-b');
            }
            x73('.mbsc-cal-events-arr', s1c).css('left', x5c.offset().left - s1c.offset().left + l5c / 2);
        }

        function i5c(B6c, g6c) {
            var A6c = I5c[B6c];
            if (A6c) {
                var L6c, f6c, n6c, X6c, W6c, y6c, I6c = '<ul class="mbsc-cal-event-list">';
                q5c = 0;
                l1c = g6c;
                g6c.addClass(O5c).find('.mbsc-cal-day-i').addClass(k5c);
                if (g6c.hasClass(y5c)) {
                    g6c.attr('data-hl', 'true').removeClass(y5c);
                }
                a5c(A6c);
                x73.each(A6c, function(u6c, P6c) {
                    X6c = P6c.d || P6c.start;
                    W6c = P6c.start && P6c.end && P6c.start.toDateString() !== P6c.end.toDateString();
                    n6c = P6c.color;
                    y6c = E5c(n6c);
                    L6c = '';
                    f6c = '';
                    if (X6c.getTime) {
                        L6c = P83.formatDate((W6c ? 'MM d yy ' : '') + w1c.timeFormat, X6c);
                    }
                    if (P6c.end) {
                        f6c = P83.formatDate((W6c ? 'MM d yy ' : '') + w1c.timeFormat, P6c.end);
                    }
                    I6c += '<li role="button" aria-label="' + P6c.text + (L6c ? ', ' + w1c.fromText + ' ' + L6c : '') + (f6c ? ', ' + w1c.toText + ' ' + f6c : '') + '" class="mbsc-cal-event">' + '<div class="mbsc-cal-event-color" style="' + (n6c ? 'background:' + n6c + ';' : '') + '"></div>' + '<div class="mbsc-cal-event-text">' + (X6c.getTime && !W6c ? '<div class="mbsc-cal-event-time">' + P83.formatDate(w1c.timeFormat, X6c) + '</div>' : '') + P6c.text + '</div>' + (P6c.start && P6c.end ? '<div class="mbsc-cal-event-dur">' + C5c(P6c.end - P6c.start) + '</div>' : '') + '</li>';
                });
                I6c += '</ul>';
                K5c.html(I6c);
                Q1c.trigger('onEventBubbleShow', {
                    target: l1c[0],
                    eventList: s1c[0]
                });
                T5c(l1c);
                Q1c.tap(x73('.mbsc-cal-event', K5c), function(R6c) {
                    if (!A5c.scrolled) {
                        Q1c.trigger('onEventSelect', {
                            domEvent: R6c,
                            event: A6c[x73(this).index()],
                            date: B6c
                        });
                    }
                });
                P5c = true;
            }
        }

        function L5c() {
            if (s1c) {
                s1c.removeClass('mbsc-cal-events-v');
            }
            if (l1c) {
                l1c.removeClass(O5c).find('.mbsc-cal-day-i').removeClass(k5c);
                if (l1c.attr('data-hl')) {
                    l1c.removeAttr('data-hl').addClass(y5c);
                }
            }
            P5c = false;
        }

        function R5c() {
            L5c();
            Q1c.redraw();
        }

        function N5c(K6c) {
            return n5C(K6c.getFullYear(), K6c.getMonth(), K6c.getDate());
        }
        var r5c, X5c, s1c, l1c, I5c, A5c, B5c, K5c, P5c, q5c, u5c, W5c, n5c = {},
            t5c = Q73({}, Q1c.settings),
            w1c = Q73(Q1c.settings, y5C, t5c),
            O5c = 'mbsc-cal-day-sel mbsc-cal-day-ev',
            y5c = 'mbsc-cal-day-hl',
            k5c = w1c.activeClass || '',
            f5c = w1c.showEventCount,
            g5c = 0,
            z1c = Q73(true, [], w1c.data);
        u5c = z83.calbase.call(this, Q1c);
        r5c = Q73({}, u5c);
        x73.each(z1c, function(O6c, k6c) {
            if (k6c._id === undefined) {
                k6c._id = g5c++;
            }
        });
        Q1c.onGenMonth = function(r6c, t6c) {
            I5c = Q1c.prepareObj(z1c, r6c, t6c);
        };
        Q1c.getDayProps = function(N6c) {
            var a6c, T6c = I5c[N6c] ? I5c[N6c] : false,
                i6c = T6c ? I5c[N6c].length + ' ' + (I5c[N6c].length > 1 ? w1c.eventsText : w1c.eventText) : 0,
                q6c = T6c && T6c[0] && T6c[0].color,
                U6c = f5c && i6c ? E5c(q6c) : '',
                E6c = '',
                C6c = '';
            if (T6c) {
                for (a6c = 0; a6c < T6c.length; a6c++) {
                    if (T6c[a6c].icon) {
                        E6c += '<span class="mbsc-ic mbsc-ic-' + T6c[a6c].icon + '"' + (T6c[a6c].text ? '' : T6c[a6c].color ? ' style="color:' + T6c[a6c].color + ';"' : '') + '></span>\n';
                    }
                }
                C6c = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                for (a6c = 0; a6c < T6c.length; a6c++) {
                    C6c += '<div class="mbsc-cal-day-m-c"' + (T6c[a6c].color ? ' style="background:' + T6c[a6c].color + ';"' : '') + '></div>';
                }
                C6c += '</div></div>';
            }
            return {
                marked: T6c,
                selected: false,
                cssClass: T6c ? 'mbsc-cal-day-marked' : '',
                ariaLabel: f5c ? i6c : '',
                markup: f5c && i6c ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + x73('<div>' + i6c + '</div>').text() + '"' + (q6c ? ' style="background:' + q6c + ';color:' + U6c + ';text-shadow:none;"' : '') + '>' + E6c + i6c + '</div></div>' : f5c && E6c ? '<div class="mbsc-cal-day-ic-c">' + E6c + '</div>' : T6c ? C6c : ''
            };
        };
        Q1c.addEvent = function(Z6c) {
            var d6c = [];
            Z6c = Q73(true, [], x73.isArray(Z6c) ? Z6c : [Z6c]);
            x73.each(Z6c, function(V6c, o6c) {
                if (o6c._id === undefined) {
                    o6c._id = g5c++;
                }
                z1c.push(o6c);
                d6c.push(o6c._id);
            });
            R5c();
            return d6c;
        };
        Q1c.removeEvent = function(h6c) {
            h6c = x73.isArray(h6c) ? h6c : [h6c];
            x73.each(h6c, function(S6c, G6c) {
                x73.each(z1c, function(p6c, m6c) {
                    if (m6c._id === G6c) {
                        z1c.splice(p6c, 1);
                        return false;
                    }
                });
            });
            R5c();
        };
        Q1c.getEvents = function(e6c) {
            var c6c;
            if (e6c) {
                e6c.setHours(0, 0, 0, 0);
                c6c = Q1c.prepareObj(z1c, e6c.getFullYear(), e6c.getMonth());
                return c6c[e6c] ? a5c(c6c[e6c]) : [];
            }
            return Q73(true, [], z1c);
        };
        Q1c.setEvents = function(J6c) {
            var Y6c = [];
            z1c = Q73(true, [], J6c);
            x73.each(z1c, function(b6c, v6c) {
                if (v6c._id === undefined) {
                    v6c._id = g5c++;
                }
                Y6c.push(v6c._id);
            });
            R5c();
            return Y6c;
        };
        Q73(u5c, {
            highlight: false,
            outerMonthChange: false,
            headerText: false,
            buttons: w1c.display !== 'inline' ? ['close'] : w1c.buttons,
            onMarkupReady: function H6c(D6c) {
                r5c.onMarkupReady.call(this, D6c);
                X5c = x73(D6c.target);
                if (f5c) {
                    x73('.mbsc-cal', X5c).addClass('mbsc-cal-ev');
                }
                X5c.addClass('mbsc-cal-em');
                s1c = x73('<div class="mbsc-cal-events ' + (w1c.eventBubbleClass || '') + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(x73('.mbsc-cal-c', X5c));
                B5c = x73('.mbsc-cal-events-i', s1c);
                K5c = x73('.mbsc-cal-events-sc', s1c);
                A5c = new j73.classes.ScrollView(B5c[0]);
                P5c = false;
                Q1c.tap(B5c, function() {
                    if (!A5c.scrolled) {
                        L5c();
                    }
                });
            },
            onMonthChange: function M6c() {
                L5c();
            },
            onSelectShow: function F6c() {
                L5c();
            },
            onMonthLoaded: function x6c() {
                if (W5c) {
                    i5c(W5c.d, x73('.mbsc-cal-day-v[data-full="' + W5c.full + '"]:not(.mbsc-cal-day-diff)', X5c));
                    W5c = false;
                }
            },
            onDayChange: function j6c(s6c) {
                var z6c = s6c.date,
                    w6c = N5c(z6c),
                    Q6c = x73(s6c.target);
                L5c();
                if (!Q6c.hasClass('mbsc-cal-day-ev')) {
                    setTimeout(function() {
                        if (Q1c.changing) {
                            W5c = {
                                d: w6c,
                                full: Q6c.attr('data-full')
                            };
                        } else {
                            i5c(w6c, Q6c);
                        }
                    }, 10);
                }
                return false;
            },
            onCalResize: function l6c() {
                if (P5c) {
                    T5c(l1c);
                }
            },
            onHide: function A0c() {
                r5c.onHide.call(Q1c);
                if (A5c) {
                    A5c.destroy();
                }
            }
        });
        return u5c;
    };
    var h23 = j73.classes;
    var L1C = function X0c(n0c, g0c) {
        var I0c = '',
            W0c = x73(n0c),
            L0c = this,
            f0c = L0c.settings;
        h23.Base.call(this, n0c, g0c, true);
        L0c._init = function() {
            var P0c = f0c.context,
                B0c = x73(P0c),
                u0c = B0c.find('.mbsc-ms-top .mbsc-ms'),
                R0c = B0c.find('.mbsc-ms-bottom .mbsc-ms'),
                y0c = {};
            if (P0c == 'body') {
                x73('body,html').addClass('mbsc-page-ctx');
            } else {
                B0c.addClass('mbsc-page-ctx');
            }
            if (I0c) {
                W0c.removeClass(I0c);
            }
            if (u0c.length) {
                y0c.paddingTop = u0c[0].offsetHeight;
            }
            if (R0c.length) {
                y0c.paddingBottom = R0c[0].offsetHeight;
            }
            I0c = 'mbsc-page mbsc-' + f0c.theme + (f0c.baseTheme ? ' mbsc-' + f0c.baseTheme : '') + (f0c.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
            W0c.addClass(I0c).css(y0c);
        };
        L0c._destroy = function() {
            W0c.removeClass(I0c);
        };
        f0c = L0c.settings;
        L0c.init(g0c);
    };
    L1C.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _class: 'page',
        _defaults: {
            context: 'body'
        }
    };
    h23.Page = L1C;
    j73.themes.page.mobiscroll = {};
    j73.presetShort('page', 'Page');
    if (X23) {
        x73(function() {
            var K0c = '[mbsc-page]';
            x73(K0c).each(function() {
                new h23.Page(this);
            });
            x73(document).on('mbsc-enhance', function(k0c, O0c) {
                if (x73(k0c.target).is(K0c)) {
                    new h23.Page(k0c.target, O0c);
                } else {
                    x73(K0c, k0c.target).each(function() {
                        new h23.Page(this, O0c);
                    });
                }
            });
        });
    }
    var T23 = function r0c(C0c, N0c, U0c) {
        function q0c(Z0c) {
            if (!x73('.mbsc-fr-c', Z0c).hasClass('mbsc-wdg-c')) {
                x73('.mbsc-fr-c', Z0c).addClass('mbsc-wdg-c').append(a0c.show());
                if (!x73('.mbsc-w-p', Z0c).length) {
                    x73('.mbsc-fr-c', Z0c).addClass('mbsc-w-p');
                }
            }
        }
        var t0c, i0c, E0c, a0c = x73(C0c),
            T0c = this;
        n23.call(this, C0c, N0c, true);
        T0c._generateContent = function() {
            return '';
        };
        T0c._markupReady = function(d0c) {
            if (t0c.display != 'inline') {
                q0c(d0c);
            }
        };
        T0c._markupInserted = function(o0c) {
            if (t0c.display == 'inline') {
                q0c(o0c);
            }
            o0c.trigger('mbsc-enhance', [{
                theme: t0c.theme,
                lang: t0c.lang
            }]);
        };
        T0c._markupRemove = function() {
            a0c.hide();
            if (i0c) {
                i0c.prepend(a0c);
            } else {
                E0c.after(a0c);
            }
        };
        T0c.__processSettings = function() {
            t0c = T0c.settings;
            T0c.buttons.ok = {
                text: t0c.okText,
                icon: t0c.okIcon,
                handler: 'set'
            };
            t0c.buttons = t0c.buttons || (t0c.display == 'inline' ? [] : ['ok']);
            if (!i0c && !E0c) {
                E0c = a0c.prev();
                if (!E0c.length) {
                    i0c = a0c.parent();
                }
            }
            a0c.hide();
        };
        T0c.__init = function() {
            t0c.cssClass = (t0c.cssClass || '') + ' mbsc-wdg';
        };
        if (!U0c) {
            T0c.init(N0c);
        }
    };
    T23.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasContent: true,
        _class: 'widget',
        _defaults: Q73({}, n23.prototype._defaults, {
            okText: 'OK',
            headerText: false
        })
    };
    j73.classes.Widget = T23;
    j73.themes.widget = j73.themes.frame;
    j73.presetShort('widget', 'Widget', false);
    var r5C = X23 && !!window.Promise;
    var B23 = [];
    var E23 = [];
    j73.alert = function(Z4c) {
        var U4c = document.createElement('div');
        U4c.innerHTML = j1C(Z4c);
        return g83(i6C, U4c, Z4c);
    };
    j73.confirm = function(o4c) {
        var d4c = document.createElement('div');
        d4c.innerHTML = j1C(o4c);
        return g83(U6C, d4c, o4c);
    };
    j73.prompt = function(V4c) {
        var h4c = document.createElement('div');
        h4c.innerHTML = j1C(V4c) + '<label class="mbsc-input">' + (V4c.label ? '<span class="mbsc-label">' + V4c.label + '</span>' : '') + '<input tabindex="0" type="' + (V4c.inputType || 'text') + '" placeholder="' + (V4c.placeholder || '') + '" value="' + (V4c.value || '') + '">' + '</label>';
        return g83(q6C, h4c, V4c);
    };
    j73.snackbar = function(G4c) {
        var S4c = document.createElement('div');
        S4c.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (G4c.message || '') + '</div>' + (G4c.button ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (G4c.button.text || '') + '</button>' : '') + '</div>';
        return g83(V5C, S4c, G4c);
    };
    j73.toast = function(m4c) {
        var p4c = document.createElement('div');
        p4c.innerHTML = '<div class="mbsc-toast-msg">' + (m4c.message || '') + '</div>';
        return g83(N6C, p4c, m4c);
    };
    var S83 = j73.util;
    var n83 = S83.getCoord;
    var J5C = S83.testTouch;
    var w83 = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown', 'mousemove', 'mouseup', 'mouseleave'];
    var H5C = {
        tap: true
    };
    var p23 = void 0;
    var i23 = function() {
        function H4c(j4c, z4c) {
            var s4c = this;
            P23(this, H4c);
            var Q4c = Q73({}, H5C, j73.settings, z4c);
            var D4c = x73(j4c);
            var M4c = D4c.parent();
            var F4c = M4c.hasClass('mbsc-input-wrap') ? M4c.parent() : M4c;
            var x4c = D4c.next().hasClass('mbsc-fr') ? D4c.next() : null;
            var w4c = F5C(D4c);
            if (x4c) {
                x4c.insertAfter(F4c);
            }
            t5C(F4c, w4c);
            D4c.addClass('mbsc-control');
            w83.forEach(function(l4c) {
                j4c.addEventListener(l4c, s4c);
            });
            this.settings = Q4c;
            this._type = w4c;
            this._elm = j4c;
            this._$elm = D4c;
            this._$parent = F4c;
            this._$frame = x4c;
            this._ripple = i5C(Q4c.theme);
        }
        u83(H4c, [{
            key: 'destroy',
            value: function A3c() {
                var X3c = this;
                this._$elm.removeClass('mbsc-control');
                w83.forEach(function(f3c) {
                    X3c._elm.removeEventListener(f3c, X3c);
                });
            }
        }, {
            key: 'option',
            value: function I3c(L3c) {
                Q73(this.settings, L3c);
                this._ripple = i5C(this.settings.theme);
            }
        }, {
            key: 'handleEvent',
            value: function W3c(n3c) {
                switch (n3c.type) {
                    case 'touchstart':
                    case 'mousedown':
                        this._onStart(n3c);
                        break;
                    case 'touchmove':
                    case 'mousemove':
                        this._onMove(n3c);
                        break;
                    case 'touchend':
                    case 'touchcancel':
                    case 'mouseup':
                    case 'mouseleave':
                        this._onEnd(n3c);
                }
            }
        }, {
            key: '_addRipple',
            value: function g3c(B3c) {
                if (this._ripple && this._$rippleElm) {
                    this._ripple.addRipple(this._$rippleElm, B3c);
                }
            }
        }, {
            key: '_removeRipple',
            value: function y3c() {
                if (this._ripple && this._$rippleElm) {
                    this._ripple.removeRipple();
                }
            }
        }, {
            key: '_onStart',
            value: function P3c(u3c) {
                var R3c = this._elm;
                if (J5C(u3c, R3c)) {
                    this._startX = n83(u3c, 'X');
                    this._startY = n83(u3c, 'Y');
                    if (p23) {
                        p23.removeClass('mbsc-active');
                    }
                    if (!R3c.disabled) {
                        this._isActive = true;
                        p23 = this._$elm;
                        p23.addClass('mbsc-active');
                        this._addRipple(u3c);
                    }
                }
            }
        }, {
            key: '_onMove',
            value: function K3c(k3c) {
                if (this._isActive && Math.abs(n83(k3c, 'X') - this._startX) > 9 || Math.abs(n83(k3c, 'Y') - this._startY) > 9) {
                    this._$elm.removeClass('mbsc-active');
                    this._removeRipple();
                    this._isActive = false;
                }
            }
        }, {
            key: '_onEnd',
            value: function O3c(T3c) {
                var i3c = this;
                var r3c = this._elm;
                var E3c = this._type;
                if (this._isActive && this.settings.tap && T3c.type == 'touchend' && !r3c.readOnly) {
                    r3c.focus();
                    if (/(button|submit|checkbox|switch|radio)/.test(E3c)) {
                        T3c.preventDefault();
                    }
                    if (!/select/.test(E3c)) {
                        var t3c = (T3c.originalEvent || T3c).changedTouches[0],
                            a3c = document.createEvent('MouseEvents');
                        a3c.initMouseEvent('click', true, true, window, 1, t3c.screenX, t3c.screenY, t3c.clientX, t3c.clientY, false, false, false, false, 0, null);
                        a3c.tap = true;
                        r3c.mbscChange = true;
                        r3c.dispatchEvent(a3c);
                        S83.preventClick();
                    }
                }
                if (this._isActive) {
                    setTimeout(function() {
                        i3c._$elm.removeClass('mbsc-active');
                        i3c._removeRipple();
                    }, 100);
                }
                this._isActive = false;
                p23 = null;
            }
        }]);
        return H4c;
    }();
    var c83 = function(N3c) {
        function C3c(U3c) {
            P23(this, C3c);
            var q3c = t23(this, (C3c.__proto__ || Object.getPrototypeOf(C3c)).call(this, U3c));
            h6C(q3c, q3c._$parent, q3c._$elm);
            q3c._$parent.addClass('mbsc-input');
            return q3c;
        }
        R23(C3c, N3c);
        u83(C3c, [{
            key: 'destroy',
            value: function Z3c() {
                m23(C3c.prototype.__proto__ || Object.getPrototypeOf(C3c.prototype), 'destroy', this).call(this);
                this._$parent.removeClass('mbsc-ic-left mbsc-ic-right').find('.mbsc-input-ic').remove();
            }
        }]);
        return C3c;
    }(i23);
    var z5C = function(o3c) {
        function d3c(S3c, p3c) {
            P23(this, d3c);
            var h3c = t23(this, (d3c.__proto__ || Object.getPrototypeOf(d3c)).call(this, S3c, p3c));
            var V3c = h3c._$elm;
            var G3c = V3c.attr('data-icon');
            V3c.addClass('mbsc-btn').find('.mbsc-btn-ic').remove();
            if (G3c) {
                V3c.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + G3c + '"></span>');
                if (V3c.text() === "") {
                    V3c.addClass('mbsc-btn-icon-only');
                }
            }
            h3c._$rippleElm = V3c;
            return h3c;
        }
        R23(d3c, o3c);
        return d3c;
    }(i23);
    var f6C = function(e3c) {
        function m3c(Y3c) {
            P23(this, m3c);
            var c3c = t23(this, (m3c.__proto__ || Object.getPrototypeOf(m3c)).call(this, Y3c));
            c3c._$parent.prepend(c3c._$elm).addClass('mbsc-checkbox mbsc-control-w').find('.mbsc-checkbox-box').remove();
            c3c._$elm.after('<span class="mbsc-checkbox-box"></span>');
            return c3c;
        }
        R23(m3c, e3c);
        return m3c;
    }(i23);
    var y6C = function(v3c) {
        function J3c(H3c) {
            P23(this, J3c);
            var b3c = t23(this, (J3c.__proto__ || Object.getPrototypeOf(J3c)).call(this, H3c));
            b3c._$parent.addClass('mbsc-radio mbsc-control-w').find('.mbsc-radio-box').remove();
            b3c._$elm.after('<span class="mbsc-radio-box"><span></span></span>');
            return b3c;
        }
        R23(J3c, v3c);
        return J3c;
    }(i23);
    var P6C = function(M3c) {
        function D3c(w3c) {
            P23(this, D3c);
            var F3c = t23(this, (D3c.__proto__ || Object.getPrototypeOf(D3c)).call(this, w3c));
            var s3c = F3c._$elm;
            var j3c = F3c._$parent;
            var Q3c = j3c.find('input.mbsc-control');
            var x3c = Q3c.length ? Q3c : x73('<input tabindex="-1" class="mbsc-control" readonly>');
            F3c._$input = x3c;
            j3c.addClass('mbsc-select' + (F3c._$frame ? ' mbsc-select-inline' : ''));
            s3c.after(x3c);
            x3c.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
            if (!x3c.hasClass('mbsc-comp')) {
                w3c.addEventListener('change', F3c);
                F3c._setText();
            }
            return F3c;
        }
        R23(D3c, M3c);
        u83(D3c, [{
            key: 'destroy',
            value: function z3c() {
                m23(D3c.prototype.__proto__ || Object.getPrototypeOf(D3c.prototype), 'destroy', this).call(this);
                this._$elm.after(this._$input);
                this._elm.removeEventListener('change', this);
            }
        }, {
            key: 'handleEvent',
            value: function l3c(A9c) {
                m23(D3c.prototype.__proto__ || Object.getPrototypeOf(D3c.prototype), 'handleEvent', this).call(this, A9c);
                if (A9c.type == 'change') {
                    this._setText();
                }
            }
        }, {
            key: '_setText',
            value: function X9c() {
                var f9c = this._elm;
                this._$input.val(f9c.selectedIndex != -1 ? f9c.options[f9c.selectedIndex].text : '');
            }
        }]);
        return D3c;
    }(c83);
    var X1C = ['keydown', 'input', 'scroll'];
    var f1C = void 0;
    if (X23) {
        x73(window).on('resize orientationchange', T6C);
    }
    var w1C = function(K9c) {
        function R9c(O9c) {
            P23(this, R9c);
            var k9c = t23(this, (R9c.__proto__ || Object.getPrototypeOf(R9c)).call(this, O9c));
            k9c._$parent.addClass('mbsc-textarea');
            X1C.forEach(function(r9c) {
                k9c._elm.addEventListener(r9c, k9c);
            });
            I1C(O9c);
            return k9c;
        }
        R23(R9c, K9c);
        u83(R9c, [{
            key: 'destroy',
            value: function t9c() {
                var T9c = this;
                m23(R9c.prototype.__proto__ || Object.getPrototypeOf(R9c.prototype), 'destroy', this).call(this);
                X1C.forEach(function(a9c) {
                    T9c._elm.removeEventListener(a9c, T9c);
                });
            }
        }, {
            key: 'handleEvent',
            value: function i9c(E9c) {
                m23(R9c.prototype.__proto__ || Object.getPrototypeOf(R9c.prototype), 'handleEvent', this).call(this, E9c);
                switch (E9c.type) {
                    case 'keydown':
                    case 'input':
                        this._onInput(E9c);
                        break;
                    case 'scroll':
                        C6C(this._elm);
                }
            }
        }, {
            key: '_onInput',
            value: function C9c() {
                var N9c = this;
                clearTimeout(this._debounce);
                this._debounce = setTimeout(function() {
                    I1C(N9c._elm);
                }, 100);
            }
        }]);
        return R9c;
    }(c83);
    var s1C = function(U9c) {
        function q9c(G9c, S9c) {
            P23(this, q9c);
            var d9c = t23(this, (q9c.__proto__ || Object.getPrototypeOf(q9c)).call(this, G9c, S9c));
            var o9c = void 0;
            var Z9c = void 0;
            var h9c = d9c._$elm;
            var V9c = d9c._$parent;
            if (!V9c.hasClass('mbsc-segmented-item-ready')) {
                o9c = x73('<div class="mbsc-segmented"></div>');
                V9c.after(o9c);
                V9c.parent().find('input[name="' + h9c.attr('name') + '"]').each(function() {
                    var p9c = x73(this);
                    Z9c = p9c.parent().addClass('mbsc-segmented-item mbsc-segmented-item-ready');
                    x73('<span class="mbsc-segmented-content">' + (p9c.attr('data-icon') ? '<span class="mbsc-ic mbsc-ic-' + p9c.attr('data-icon') + '"></span>' : '') + '</span>').append(Z9c.contents()).appendTo(Z9c);
                    Z9c.prepend(p9c);
                    o9c.append(Z9c);
                });
            }
            d9c._$rippleElm = h9c.next();
            return d9c;
        }
        R23(q9c, U9c);
        return q9c;
    }(i23);
    var W1C = j73.util;
    var l23 = W1C.getCoord;
    var A5C = W1C.testTouch;
    var J83 = function m9c(M9c, i7c) {
        function R7c(E7c) {
            if (E7c.keyCode == 32) {
                E7c.preventDefault();
                if (!H9c && !M9c.disabled) {
                    F9c = x73(this).addClass('mbsc-active');
                    a7c(E7c);
                }
            }
        }

        function K7c(C7c) {
            if (H9c) {
                C7c.preventDefault();
                L7c(true);
            }
        }

        function k7c(N7c) {
            if (A5C(N7c, this) && !M9c.disabled) {
                F9c = x73(this).addClass('mbsc-active').trigger('focus');
                if (Q9c && !F9c.hasClass('mbsc-step-disabled')) {
                    Q9c.addRipple(F9c.find('.mbsc-segmented-content'), N7c);
                }
                a7c(N7c);
                if (N7c.type === 'mousedown') {
                    x73(document).on('mousemove', X7c).on('mouseup', s9c);
                }
            }
        }

        function s9c(q7c) {
            if (H9c) {
                q7c.preventDefault();
                L7c(true, q7c);
                if (q7c.type === 'mouseup') {
                    x73(document).off('mousemove', X7c).off('mouseup', s9c);
                }
            }
        }

        function X7c(U7c) {
            if (H9c) {
                y7c = l23(U7c, 'X');
                u7c = l23(U7c, 'Y');
                T7c = y7c - O7c;
                r7c = u7c - P7c;
                if (Math.abs(T7c) > 7 || Math.abs(r7c) > 7) {
                    L7c();
                }
            }
        }

        function t7c() {
            var Z7c;
            if (!M9c.disabled) {
                Z7c = parseFloat(x73(this).val());
                w9c(isNaN(Z7c) ? e9c : Z7c);
            }
        }

        function w9c(V7c, d7c, o7c) {
            I7c = e9c;
            if (d7c === undefined) {
                d7c = true;
            }
            if (o7c === undefined) {
                o7c = d7c;
            }
            if (V7c !== undefined) {
                e9c = Math.min(v9c, Math.max(Math.round(V7c / Y9c) * Y9c, J9c));
            } else {
                e9c = Math.min(v9c, Math.max(e9c + (F9c.hasClass('mbsc-stepper-minus') ? -Y9c : Y9c), J9c));
            }
            z9c = true;
            f7c.removeClass('mbsc-step-disabled');
            if (d7c) {
                c9c.val(e9c);
            }
            if (e9c == J9c) {
                g7c.addClass('mbsc-step-disabled');
            } else if (e9c == v9c) {
                n7c.addClass('mbsc-step-disabled');
            }
            if (e9c !== I7c && o7c) {
                c9c.trigger('change');
            }
        }

        function a7c(h7c) {
            if (!H9c) {
                H9c = true;
                z9c = false;
                O7c = l23(h7c, 'X');
                P7c = l23(h7c, 'Y');
                clearInterval(x9c);
                clearTimeout(x9c);
                x9c = setTimeout(function() {
                    w9c();
                    x9c = setInterval(function() {
                        w9c();
                    }, 150);
                }, 300);
            }
        }

        function L7c(G7c) {
            clearInterval(x9c);
            clearTimeout(x9c);
            if (!z9c && G7c) {
                w9c();
            }
            H9c = false;
            z9c = false;
            F9c.removeClass('mbsc-active');
            if (Q9c) {
                setTimeout(function() {
                    Q9c.removeRipple();
                }, 100);
            }
        }

        function W7c(p7c, m7c) {
            var S7c = c9c.attr(p7c);
            return S7c === undefined || S7c === '' ? m7c : +S7c;
        }
        var F9c, n7c, g7c, f7c, H9c, z9c, T7c, r7c, B7c, y7c, u7c, x9c, v9c, J9c, Q9c, Y9c, j9c, O7c, P7c, A7c, e9c, b9c = this,
            c9c = x73(M9c),
            l9c, D9c, I7c = e9c;
        j73.classes.Base.call(this, M9c, i7c, true);
        b9c.getVal = function() {
            var e7c = parseFloat(c9c.val());
            e7c = isNaN(e7c) ? e9c : e7c;
            return Math.min(v9c, Math.max(Math.round(e7c / Y9c) * Y9c, J9c));
        };
        b9c.setVal = function(c7c, Y7c, J7c) {
            c7c = parseFloat(c7c);
            w9c(isNaN(c7c) ? e9c : c7c, Y7c, J7c);
        };
        b9c._init = function(v7c) {
            l9c = c9c.parent().hasClass('mbsc-stepper');
            D9c = l9c ? c9c.closest('.mbsc-stepper-cont') : c9c.parent();
            j9c = b9c.settings;
            J9c = v7c.min === undefined ? W7c('min', j9c.min) : v7c.min;
            v9c = v7c.max === undefined ? W7c('max', j9c.max) : v7c.max;
            Y9c = v7c.step === undefined ? W7c('step', j9c.step) : v7c.step;
            B7c = c9c.attr('data-val') || j9c.val;
            e9c = Math.min(v9c, Math.max(Math.round(+M9c.value / Y9c) * Y9c || 0, J9c));
            A7c = j73.themes.form[j9c.theme];
            Q9c = A7c && A7c.addRipple ? A7c : null;
            if (!l9c) {
                D9c.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (e9c == J9c ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (e9c == v9c ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(c9c);
            }
            g7c = x73('.mbsc-stepper-minus', D9c);
            n7c = x73('.mbsc-stepper-plus', D9c);
            if (!l9c) {
                if (B7c == 'left') {
                    D9c.addClass('mbsc-stepper-val-left');
                    c9c.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                } else if (B7c == 'right') {
                    D9c.addClass('mbsc-stepper-val-right');
                    n7c.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
                } else {
                    g7c.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
                }
            }
            c9c.val(e9c).attr('data-role', 'stepper').attr('min', J9c).attr('max', v9c).attr('step', Y9c).on('change', t7c);
            f7c = x73('.mbsc-stepper-control', D9c).on('keydown', R7c).on('keyup', K7c).on('mousedown touchstart', k7c).on('touchmove', X7c).on('touchend touchcancel', s9c);
            c9c.addClass('mbsc-stepper-ready mbsc-control');
        };
        b9c._destroy = function() {
            c9c.removeClass('mbsc-control').off('change', t7c);
            f7c.off('keydown', R7c).off('keyup', K7c).off('mousedown touchstart', k7c).off('touchmove', X7c).off('touchend touchcancel', s9c);
        };
        b9c.init(i7c);
    };
    J83.prototype = {
        _class: 'stepper',
        _hasDef: true,
        _defaults: {
            min: 0,
            max: 100,
            step: 1
        }
    };
    j73.classes.Stepper = J83;
    j73.presetShort('stepper', 'Stepper');
    var v83 = function b7c(M7c, F7c) {
        var D7c, x7c, j7c, Q7c, H7c = this;
        F7c = F7c || {};
        Q73(F7c, {
            changeEvent: 'click',
            round: false
        });
        N83.call(this, M7c, F7c, true);
        H7c._readValue = function() {
            return M7c.checked ? 1 : 0;
        };
        H7c._fillValue = function(w7c, z7c, s7c) {
            D7c.prop('checked', !!w7c);
            if (s7c) {
                D7c.trigger('change');
            }
        };
        H7c._onTap = function(l7c) {
            H7c._setVal(l7c ? 0 : 1);
        };
        H7c.___init = function() {
            j7c = H7c.settings;
            D7c = x73(M7c);
            x7c = D7c.parent();
            x7c.find('.mbsc-switch-track').remove();
            x7c.prepend(D7c);
            D7c.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + j7c.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + j7c.onText + '</span>' + '</span></span></span></span>');
            Q7c = new i23(M7c);
            H7c._$track = x7c.find('.mbsc-progress-track');
            H7c._min = 0;
            H7c._max = 1;
            H7c._step = 1;
        };
        H7c.___destroy = function() {
            Q7c.destroy();
        };
        H7c.getVal = function() {
            return M7c.checked;
        };
        H7c.setVal = function(A2c, X2c, I2c) {
            H7c._setVal(A2c ? 1 : 0, X2c, I2c);
        };
        H7c.init(F7c);
    };
    v83.prototype = {
        _class: 'switch',
        _css: 'mbsc-switch',
        _hasTheme: true,
        _hasLang: true,
        _hasDef: true,
        _defaults: {
            stopProp: true,
            offText: 'Off',
            onText: 'On'
        }
    };
    j73.classes.Switch = v83;
    j73.presetShort('switch', 'Switch');
    var I5C = 0;
    var L5C = j73.classes;
    var y1C = j73.instances;
    var G23 = function L2c(P2c, u2c) {
        function R2c() {
            B2c.removeClass('mbsc-no-touch');
        }
        var W2c, K2c, y2c = '',
            B2c = x73(P2c),
            n2c = {},
            g2c = this;
        L5C.Base.call(this, P2c, u2c, true);
        g2c.refresh = function(O2c) {
            x73('input,select,textarea,progress,button', B2c).each(function() {
                var t2c = this,
                    T2c = x73(t2c),
                    a2c = F5C(T2c);
                if (T2c.attr('data-enhance') != 'false') {
                    if (T2c.hasClass('mbsc-control')) {
                        if (n2c[t2c.id]) {
                            n2c[t2c.id].option({
                                theme: W2c.theme,
                                lang: W2c.lang,
                                rtl: W2c.rtl,
                                onText: W2c.onText,
                                offText: W2c.offText,
                                stopProp: W2c.stopProp
                            });
                        }
                    } else {
                        if (!t2c.id) {
                            t2c.id = 'mbsc-form-control-' + ++I5C;
                        }
                        switch (a2c) {
                            case 'button':
                            case 'submit':
                                n2c[t2c.id] = new z5C(t2c, {
                                    theme: W2c.theme,
                                    tap: W2c.tap
                                });
                                break;
                            case 'switch':
                                n2c[t2c.id] = new v83(t2c, {
                                    theme: W2c.theme,
                                    lang: W2c.lang,
                                    rtl: W2c.rtl,
                                    onText: W2c.onText,
                                    offText: W2c.offText,
                                    stopProp: W2c.stopProp
                                });
                                break;
                            case 'checkbox':
                                n2c[t2c.id] = new f6C(t2c, {
                                    tap: W2c.tap
                                });
                                break;
                            case 'range':
                                if (!x73(t2c).parent().hasClass('mbsc-slider')) {
                                    n2c[t2c.id] = new q83(t2c, {
                                        theme: W2c.theme,
                                        lang: W2c.lang,
                                        rtl: W2c.rtl,
                                        stopProp: W2c.stopProp
                                    });
                                }
                                break;
                            case 'progress':
                                n2c[t2c.id] = new k83(t2c, {
                                    theme: W2c.theme,
                                    lang: W2c.lang,
                                    rtl: W2c.rtl
                                });
                                break;
                            case 'radio':
                                n2c[t2c.id] = new y6C(t2c, {
                                    tap: W2c.tap
                                });
                                break;
                            case 'select':
                            case 'select-one':
                            case 'select-multiple':
                                n2c[t2c.id] = new P6C(t2c, {
                                    tap: W2c.tap
                                });
                                break;
                            case 'textarea':
                                n2c[t2c.id] = new w1C(t2c, {
                                    tap: W2c.tap
                                });
                                break;
                            case 'segmented':
                                n2c[t2c.id] = new s1C(t2c, {
                                    theme: W2c.theme,
                                    tap: W2c.tap
                                });
                                break;
                            case 'stepper':
                                n2c[t2c.id] = new J83(t2c, {
                                    theme: W2c.theme
                                });
                                break;
                            case 'hidden':
                                return;
                            default:
                                n2c[t2c.id] = new c83(t2c, {
                                    tap: W2c.tap
                                });
                                break;
                        }
                    }
                }
            });
            if (!O2c) {
                T6C();
            }
        };
        g2c._init = function() {
            if (!j73.themes.form[W2c.theme]) {
                W2c.theme = 'mobiscroll';
            }
            if (!B2c.hasClass('mbsc-form')) {
                B2c.on('touchstart', R2c).show();
            }
            if (y2c) {
                B2c.removeClass(y2c);
            }
            y2c = 'mbsc-form mbsc-no-touch mbsc-' + W2c.theme + (W2c.baseTheme ? ' mbsc-' + W2c.baseTheme : '') + (W2c.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
            B2c.addClass(y2c);
            g2c.refresh();
        };
        g2c._destroy = function() {
            B2c.removeClass(y2c).off('touchstart', R2c);
            for (var i2c in n2c) {
                n2c[i2c].destroy();
            }
        };
        W2c = g2c.settings;
        K2c = g2c.trigger;
        g2c.init(u2c);
    };
    G23.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _class: 'form',
        _defaults: {
            tap: true,
            stopProp: true,
            lang: 'en'
        }
    };
    j73.themes.form.mobiscroll = {};
    j73.classes.Form = G23;
    j73.presetShort('form', 'Form');
    if (X23) {
        x73(function() {
            var E2c = '[mbsc-enhance],[mbsc-form]';
            x73(E2c).each(function() {
                new G23(this);
            });
            x73(document).on('mbsc-enhance', function(C2c, N2c) {
                if (x73(C2c.target).is(E2c)) {
                    new G23(C2c.target, N2c);
                } else {
                    x73(E2c, C2c.target).each(function() {
                        new G23(this, N2c);
                    });
                }
            });
            x73(document).on('mbsc-refresh', function(U2c) {
                var q2c;
                if (x73(U2c.target).is(E2c)) {
                    q2c = y1C[U2c.target.id];
                    if (q2c) {
                        q2c.refresh();
                    }
                } else {
                    x73(E2c, U2c.target).each(function() {
                        q2c = y1C[this.id];
                        if (q2c) {
                            q2c.refresh();
                        }
                    });
                }
            });
        });
    }
    var g5C = {
        invalid: [],
        showInput: true,
        inputClass: ''
    };
    j73.presets.scroller.list = function(d2c) {
        function I8c(n8c, g8c, B8c) {
            var L8c = 0,
                W8c = [];
            while (L8c < n8c) {
                W8c[L8c] = f8c(B8c, L8c, g8c);
                L8c++;
            }
            return W8c;
        }

        function f8c(k8c, O8c, r8c) {
            var y8c = 0,
                u8c, P8c = r8c,
                R8c = [];
            while (y8c < O8c) {
                var K8c = k8c[y8c];
                for (u8c in P8c) {
                    if (P8c[u8c].key == K8c) {
                        P8c = P8c[u8c].children;
                        break;
                    }
                }
                y8c++;
            }
            y8c = 0;
            while (y8c < P8c.length) {
                if (P8c[y8c].invalid) {
                    R8c.push(P8c[y8c].key);
                }
                y8c++;
            }
            return R8c;
        }

        function A8c(T8c, a8c) {
            var t8c = [];
            while (T8c) {
                t8c[--T8c] = true;
            }
            t8c[a8c] = false;
            return t8c;
        }

        function l2c(C8c) {
            var E8c = [],
                i8c;
            for (i8c = 0; i8c < C8c; i8c++) {
                E8c[i8c] = Z2c.labels && Z2c.labels[i8c] ? Z2c.labels[i8c] : i8c;
            }
            return E8c;
        }

        function M2c(h8c, G8c, o8c) {
            var N8c = 0,
                q8c, V8c, d8c, Z8c = [
                    []
                ],
                U8c = G2c;
            if (G8c) {
                for (q8c = 0; q8c < G8c; q8c++) {
                    if (c2c) {
                        Z8c[0][q8c] = {};
                    } else {
                        Z8c[q8c] = [{}];
                    }
                }
            }
            while (N8c < h8c.length) {
                if (c2c) {
                    Z8c[0][N8c] = w2c(U8c, b2c[N8c]);
                } else {
                    Z8c[N8c] = [w2c(U8c, b2c[N8c])];
                }
                q8c = 0;
                d8c = undefined;
                while (q8c < U8c.length && d8c === undefined) {
                    if (U8c[q8c].key == h8c[N8c] && (o8c !== undefined && N8c <= o8c || o8c === undefined)) {
                        d8c = q8c;
                    }
                    q8c++;
                }
                if (d8c !== undefined && U8c[d8c].children) {
                    N8c++;
                    U8c = U8c[d8c].children;
                } else if ((V8c = p2c(U8c)) && V8c.children) {
                    N8c++;
                    U8c = V8c.children;
                } else {
                    return Z8c;
                }
            }
            return Z8c;
        }

        function p2c(p8c, e8c) {
            if (!p8c) {
                return false;
            }
            var S8c = 0,
                m8c;
            while (S8c < p8c.length) {
                if (!(m8c = p8c[S8c++]).invalid) {
                    return e8c ? S8c - 1 : m8c;
                }
            }
            return false;
        }

        function w2c(Y8c, v8c) {
            var J8c = {
                    data: [],
                    label: v8c
                },
                c8c = 0;
            while (c8c < Y8c.length) {
                J8c.data.push({
                    value: Y8c[c8c].key,
                    display: Y8c[c8c].value
                });
                c8c++;
            }
            return J8c;
        }

        function Q2c(b8c) {
            if (d2c._isVisible) {
                x73('.mbsc-sc-whl-w', d2c._markup).css('display', '').slice(b8c).hide();
            }
        }

        function X8c(j8c) {
            var D8c = [],
                M8c = j8c,
                F8c, H8c = true,
                x8c = 0;
            while (H8c) {
                F8c = p2c(M8c);
                D8c[x8c++] = F8c.key;
                H8c = F8c.children;
                if (H8c) {
                    M8c = H8c;
                }
            }
            return D8c;
        }

        function D2c(l8c, I1T) {
            var f1T = [],
                w8c = G2c,
                s8c = 0,
                X1T = false,
                z8c, A1T, Q8c;
            if (l8c[s8c] !== undefined && s8c <= I1T) {
                z8c = 0;
                A1T = l8c[s8c];
                Q8c = undefined;
                while (z8c < w8c.length && Q8c === undefined) {
                    if (w8c[z8c].key == l8c[s8c] && !w8c[z8c].invalid) {
                        Q8c = z8c;
                    }
                    z8c++;
                }
            } else {
                Q8c = p2c(w8c, true);
                A1T = w8c[Q8c].key;
            }
            X1T = Q8c !== undefined ? w8c[Q8c].children : false;
            f1T[s8c] = A1T;
            while (X1T) {
                w8c = w8c[Q8c].children;
                s8c++;
                X1T = false;
                Q8c = undefined;
                if (l8c[s8c] !== undefined && s8c <= I1T) {
                    z8c = 0;
                    A1T = l8c[s8c];
                    Q8c = undefined;
                    while (z8c < w8c.length && Q8c === undefined) {
                        if (w8c[z8c].key == l8c[s8c] && !w8c[z8c].invalid) {
                            Q8c = z8c;
                        }
                        z8c++;
                    }
                } else {
                    Q8c = p2c(w8c, true);
                    Q8c = Q8c === false ? undefined : Q8c;
                    A1T = w8c[Q8c].key;
                }
                X1T = Q8c !== undefined && p2c(w8c[Q8c].children) ? w8c[Q8c].children : false;
                f1T[s8c] = A1T;
            }
            return {
                lvl: s8c + 1,
                nVector: f1T
            };
        }

        function x2c(W1T) {
            var L1T = [];
            o2c = o2c > J2c++ ? o2c : J2c;
            W1T.children('li').each(function(R1T) {
                var n1T = x73(this),
                    g1T = n1T.clone();
                g1T.children('ul,ol').remove();
                var P1T = d2c._processMarkup ? d2c._processMarkup(g1T) : g1T.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
                    u1T = n1T.attr('data-invalid') ? true : false,
                    B1T = {
                        key: n1T.attr('data-val') === undefined || n1T.attr('data-val') === null ? R1T : n1T.attr('data-val'),
                        value: P1T,
                        invalid: u1T,
                        children: null
                    },
                    y1T = n1T.children('ul,ol');
                if (y1T.length) {
                    B1T.children = x2c(y1T);
                }
                L1T.push(B1T);
            });
            J2c--;
            return L1T;
        }

        function z2c(O1T, i1T, t1T) {
            var K1T, k1T = (i1T || 0) + 1,
                T1T = [],
                r1T = {},
                a1T = {};
            r1T = M2c(O1T, null, i1T);
            for (K1T = 0; K1T < O1T.length; K1T++) {
                d2c._tempWheelArray[K1T] = O1T[K1T] = t1T.nVector[K1T] || 0;
            }
            while (k1T < t1T.lvl) {
                a1T[k1T] = c2c ? r1T[0][k1T] : r1T[k1T][0];
                T1T.push(k1T++);
            }
            Q2c(t1T.lvl);
            Y2c = O1T.slice(0);
            if (T1T.length) {
                e2c = true;
                d2c.changeWheel(a1T);
            }
        }
        var s2c = Q73({}, d2c.settings),
            Z2c = Q73(d2c.settings, g5C, s2c),
            v2c = Z2c.layout || (/top|bottom/.test(Z2c.display) ? 'liquid' : ''),
            c2c = v2c == 'liquid',
            j2c = Z2c.readonly,
            S2c = x73(this),
            V2c, e2c, m2c = this.id + '_dummy',
            o2c = 0,
            J2c = 0,
            h2c, Y2c = [],
            G2c = Z2c.wheelArray || x2c(S2c),
            b2c = l2c(o2c),
            H2c = X8c(G2c),
            F2c = M2c(H2c, o2c);
        x73('#' + m2c).remove();
        if (Z2c.input) {
            V2c = x73(Z2c.input);
        } else if (Z2c.showInput) {
            V2c = x73('<input type="text" id="' + m2c + '" value="" class="' + Z2c.inputClass + '" placeholder="' + (Z2c.placeholder || '') + '" readonly />').insertBefore(S2c);
        }
        if (V2c) {
            d2c.attachShow(V2c);
        }
        if (!Z2c.wheelArray) {
            S2c.hide();
        }
        return {
            wheels: F2c,
            anchor: V2c,
            layout: v2c,
            headerText: false,
            setOnTap: o2c == 1,
            formatValue: function E1T(C1T) {
                if (h2c === undefined) {
                    h2c = D2c(C1T, C1T.length).lvl;
                }
                return C1T.slice(0, h2c).join(' ');
            },
            parseValue: function N1T(q1T) {
                return q1T ? (q1T + '').split(' ') : (Z2c.defaultValue || H2c).slice(0);
            },
            onBeforeShow: function U1T() {
                var Z1T = d2c.getArrayVal(true);
                Y2c = Z1T.slice(0);
                Z2c.wheels = M2c(Z1T, o2c, o2c);
                e2c = true;
            },
            onWheelGestureStart: function d1T(o1T) {
                Z2c.readonly = A8c(o2c, o1T.index);
            },
            onWheelAnimationEnd: function V1T(p1T) {
                var h1T = p1T.index,
                    G1T = d2c.getArrayVal(true),
                    S1T = D2c(G1T, h1T);
                h2c = S1T.lvl;
                Z2c.readonly = j2c;
                if (G1T[h1T] != Y2c[h1T]) {
                    z2c(G1T, h1T, S1T);
                }
            },
            onFill: function m1T(e1T) {
                h2c = undefined;
                if (V2c) {
                    V2c.val(e1T.valueText);
                }
            },
            validate: function c1T(b1T) {
                var Y1T = b1T.values,
                    v1T = b1T.index,
                    J1T = D2c(Y1T, Y1T.length);
                h2c = J1T.lvl;
                if (v1T === undefined) {
                    Q2c(J1T.lvl);
                    if (!e2c) {
                        z2c(Y1T, v1T, J1T);
                    }
                }
                e2c = false;
                return {
                    disabled: I8c(h2c, G2c, Y1T)
                };
            },
            onDestroy: function H1T() {
                if (V2c) {
                    x73('#' + m2c).remove();
                }
                S2c.show();
            }
        };
    };
    var u1C = j73.presets.scroller;
    j73.presetShort('image');
    u1C.image = function(D1T) {
        if (D1T.settings.enhance) {
            D1T._processMarkup = function(M1T) {
                var F1T = M1T.attr('data-icon');
                M1T.children().each(function(j1T, x1T) {
                    x1T = x73(x1T);
                    if (x1T.is('img')) {
                        x73('<div class="mbsc-img-c"></div>').insertAfter(x1T).append(x1T.addClass('mbsc-img'));
                    } else if (x1T.is('p')) {
                        x1T.addClass('mbsc-img-txt');
                    }
                });
                if (F1T) {
                    M1T.prepend('<div class="mbsc-ic mbsc-ic-' + F1T + '"></div');
                }
                M1T.html('<div class="mbsc-img-w">' + M1T.html() + '</div>');
                return M1T.html();
            };
        }
        return u1C.list.call(this, D1T);
    };
    var k23;
    var K1C = j73.classes;
    var I23 = j73.util;
    var k1C = I23.prefix;
    var W23 = I23.jsPrefix;
    var f23 = I23.getCoord;
    var O5C = I23.testTouch;
    var r1C = I23.vibrate;
    var t1C = I23.animEnd;
    var Q23 = 1;
    var j23 = function Q1T() {};
    var i1C = 'transparent';
    var E1C = function w1T(H0T, R0T) {
        function K0T() {
            R6T = false;
            V6T = false;
            u5T = 0;
            J0T = 0;
            c0T = new Date();
            j5T = O5T.width();
            O0T = A6T(O5T);
            X5T = O0T.index(z1T);
            W5T = z1T[0].offsetHeight;
            B5T = z1T[0].offsetTop;
            f5T = Q5T[z1T.attr('data-type') || 'defaults'];
            I6T = f5T.stages;
        }

        function w0T(z0T) {
            var l0T;
            if (z0T.type === 'touchstart') {
                S6T = true;
                clearTimeout(t0T);
            }
            if (O5C(z0T, this) && !N5T && !q5T && !k23 && !p6T) {
                N5T = true;
                i6T = true;
                T6T = f23(z0T, 'X');
                Y6T = f23(z0T, 'Y');
                K5T = 0;
                c5T = 0;
                z1T = x73(this);
                l0T = z1T;
                K0T();
                B0T = l1T.onItemTap || f5T.tap || z1T.hasClass('mbsc-lv-parent') || z1T.hasClass('mbsc-lv-back');
                s0T = n5T.offset().top;
                z6T = z1T.offset().top;
                if (B0T) {
                    F5T = setTimeout(function() {
                        l0T.addClass('mbsc-lv-item-active');
                        g5T('onItemActivate', {
                            target: l0T[0],
                            domEvent: z0T
                        });
                    }, 120);
                }
                if (s1T.sortable && !z1T.hasClass('mbsc-lv-back')) {
                    if (!s1T.sortable.group) {
                        j6T = z1T.nextUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                        x6T = z1T.prevUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
                    }
                    r6T = (!s1T.sortable.group ? x6T.length ? x6T.eq(-1) : z1T : O5T.children(Z5T).eq(0))[0].offsetTop - B5T;
                    O6T = (!s1T.sortable.group ? j6T.length ? j6T.eq(-1) : z1T : O5T.children(Z5T).eq(-1))[0].offsetTop - B5T;
                    if (s1T.sortable.handle) {
                        if (x73(z0T.target).hasClass('mbsc-lv-handle')) {
                            clearTimeout(F5T);
                            if (W23 === 'Moz') {
                                z0T.preventDefault();
                                n0T();
                            } else {
                                N6T = setTimeout(function() {
                                    n0T();
                                }, 100);
                            }
                        }
                    } else {
                        N6T = setTimeout(function() {
                            g6T.appendTo(z1T);
                            g6T[0].style[W23 + 'Animation'] = 'mbsc-lv-fill ' + (l1T.sortDelay - 100) + 'ms linear';
                            clearTimeout(U0T);
                            clearTimeout(F5T);
                            i6T = false;
                            N6T = setTimeout(function() {
                                g6T[0].style[W23 + 'Animation'] = '';
                                n0T();
                            }, l1T.sortDelay - 80);
                        }, 80);
                    }
                }
                if (z0T.type == 'mousedown') {
                    x73(document).on('mousemove', g0T).on('mouseup', E6T);
                }
            }
        }

        function g0T(f4T) {
            var X4T = false,
                I4T = true;
            if (N5T) {
                Z0T = f23(f4T, 'X');
                d0T = f23(f4T, 'Y');
                K5T = Z0T - T6T;
                c5T = d0T - Y6T;
                clearTimeout(U0T);
                if (!b5T && !o5T && !H5T && !z1T.hasClass('mbsc-lv-back')) {
                    if (Math.abs(c5T) > 10) {
                        H5T = true;
                        E6T(Q73({}, f4T, {
                            type: f4T.type == 'mousemove' ? 'mouseup' : 'touchend'
                        }));
                        clearTimeout(F5T);
                    } else if (Math.abs(K5T) > 7) {
                        u0T();
                    }
                }
                if (o5T) {
                    f4T.preventDefault();
                    u5T = K5T / j5T * 100;
                    y0T();
                } else if (b5T) {
                    f4T.preventDefault();
                    var n4T, L4T = I5T.scrollTop(),
                        A4T = Math.max(r6T, Math.min(c5T + B6T, O6T)),
                        W4T = U5T ? z6T - Q6T + L4T - B6T : z6T;
                    if (D5T + L4T < W4T + A4T + W5T) {
                        I5T.scrollTop(W4T + A4T - D5T + W5T);
                        n4T = true;
                    } else if (W4T + A4T < L4T) {
                        I5T.scrollTop(W4T + A4T);
                        n4T = true;
                    }
                    if (n4T) {
                        B6T += I5T.scrollTop() - L4T;
                    }
                    if (G5T) {
                        if (s1T.sortable.multiLevel && k5T.hasClass('mbsc-lv-parent')) {
                            if (B5T + W5T / 4 + A4T > G5T) {
                                X4T = true;
                            } else if (B5T + W5T - W5T / 4 + A4T > G5T) {
                                T5T = k5T.addClass('mbsc-lv-item-hl');
                                I4T = false;
                            }
                        } else if (B5T + W5T / 2 + A4T > G5T) {
                            if (k5T.hasClass('mbsc-lv-back')) {
                                if (s1T.sortable.multiLevel) {
                                    E5T = k5T.addClass('mbsc-lv-item-hl');
                                    I4T = false;
                                }
                            } else {
                                X4T = true;
                            }
                        }
                        if (X4T) {
                            i5T.insertAfter(k5T);
                            y5T = k5T;
                            k5T = t6T(k5T, 'next');
                            V5T = G5T;
                            G5T = k5T.length && k5T[0].offsetTop;
                            t5T++;
                        }
                    }
                    if (!X4T && V5T) {
                        if (s1T.sortable.multiLevel && y5T.hasClass('mbsc-lv-parent')) {
                            if (B5T + W5T - W5T / 4 + A4T < V5T) {
                                X4T = true;
                            } else if (B5T + W5T / 4 + A4T < V5T) {
                                T5T = y5T.addClass('mbsc-lv-item-hl');
                                I4T = false;
                            }
                        } else if (B5T + W5T / 2 + A4T < V5T) {
                            if (y5T.hasClass('mbsc-lv-back')) {
                                if (s1T.sortable.multiLevel) {
                                    E5T = y5T.addClass('mbsc-lv-item-hl');
                                    I4T = false;
                                }
                            } else {
                                X4T = true;
                            }
                        }
                        if (X4T) {
                            i5T.insertBefore(y5T);
                            k5T = y5T;
                            y5T = t6T(y5T, 'prev');
                            G5T = V5T;
                            V5T = y5T.length && y5T[0].offsetTop + y5T[0].offsetHeight;
                            t5T--;
                        }
                    }
                    if (I4T) {
                        if (T5T) {
                            T5T.removeClass('mbsc-lv-item-hl');
                            T5T = false;
                        }
                        if (E5T) {
                            E5T.removeClass('mbsc-lv-item-hl');
                            E5T = false;
                        }
                    }
                    if (X4T) {
                        g5T('onSortChange', [z1T, t5T]);
                    }
                    q0T(z1T, A4T);
                    g5T('onSort', [z1T, t5T]);
                } else if (Math.abs(K5T) > 5 || Math.abs(c5T) > 5) {
                    w6T();
                }
            }
        }

        function E6T(y4T) {
            var P4T, g4T, B4T, u4T, R4T = z1T;
            if (N5T) {
                N5T = false;
                w6T();
                if (y4T.type == 'mouseup') {
                    x73(document).off('mousemove', g0T).off('mouseup', E6T);
                }
                if (!H5T) {
                    t0T = setTimeout(function() {
                        S6T = false;
                    }, 300);
                }
                if (o5T || H5T || b5T) {
                    V6T = true;
                }
                if (o5T) {
                    h0T();
                } else if (b5T) {
                    B4T = O5T;
                    if (T5T) {
                        l5T(z1T.detach());
                        g4T = a5T[T5T.attr('data-ref')];
                        t5T = A6T(g4T.child).length;
                        T5T.removeClass('mbsc-lv-item-hl');
                        if (l1T.navigateOnDrop) {
                            v6T(T5T, function() {
                                s1T.add(null, z1T, null, null, T5T, true);
                                f6T(z1T);
                                u6T(z1T, X5T, B4T, true);
                            });
                        } else {
                            s1T.add(null, z1T, null, null, T5T, true);
                            u6T(z1T, X5T, B4T, true);
                        }
                    } else if (E5T) {
                        l5T(z1T.detach());
                        g4T = a5T[E5T.attr('data-back')];
                        t5T = A6T(g4T.parent).index(g4T.item) + 1;
                        E5T.removeClass('mbsc-lv-item-hl');
                        if (l1T.navigateOnDrop) {
                            v6T(E5T, function() {
                                s1T.add(null, z1T, t5T, null, O5T, true);
                                f6T(z1T);
                                u6T(z1T, X5T, B4T, true);
                            });
                        } else {
                            s1T.add(null, z1T, t5T, null, g4T.parent, true);
                            u6T(z1T, X5T, B4T, true);
                        }
                    } else {
                        P4T = i5T[0].offsetTop - B5T;
                        q0T(z1T, P4T, Math.abs(P4T - Math.max(r6T, Math.min(c5T + B6T, O6T))) * 6, function() {
                            l5T(z1T);
                            z1T.insertBefore(i5T);
                            u6T(z1T, X5T, B4T, t5T !== X5T);
                        });
                    }
                    b5T = false;
                } else if (!H5T && Math.abs(K5T) < 5 && Math.abs(c5T) < 5) {
                    if (f5T.tap) {
                        u4T = f5T.tap.call(P5T, {
                            target: z1T,
                            index: X5T,
                            domEvent: y4T
                        }, s1T);
                    }
                    if (B0T) {
                        if (y4T.type === 'touchend') {
                            I23.preventClick();
                        }
                        z1T.addClass('mbsc-lv-item-active');
                        g5T('onItemActivate', {
                            target: z1T[0],
                            domEvent: y4T
                        });
                    }
                    u4T = g5T('onItemTap', {
                        target: z1T[0],
                        index: X5T,
                        domEvent: y4T
                    });
                    if (u4T !== false) {
                        v6T(z1T);
                    }
                }
                clearTimeout(F5T);
                setTimeout(function() {
                    R4T.removeClass('mbsc-lv-item-active');
                    g5T('onItemDeactivate', {
                        target: R4T[0]
                    });
                }, 100);
                H5T = false;
                R5T = null;
            }
        }

        function u0T() {
            o5T = z5T(f5T.swipe, {
                target: z1T[0],
                index: X5T,
                direction: K5T > 0 ? 'right' : 'left'
            });
            if (o5T) {
                w6T();
                clearTimeout(F5T);
                if (f5T.actions) {
                    L6T = v0T(f5T, K5T);
                    a6T.html(f5T.icons).show().children().css('width', L6T + '%');
                    r5T.hide();
                    x73('.mbsc-lv-ic-m', L5T).removeClass('mbsc-lv-ic-disabled');
                    x73(f5T.leftMenu).each(T0T);
                    x73(f5T.rightMenu).each(T0T);
                } else {
                    r5T.show();
                    a6T.hide();
                    J5T = f5T.start + (K5T > 0 ? 0 : 1);
                    e5T = I6T[J5T - 1];
                    v5T = I6T[J5T];
                }
                z1T.addClass('mbsc-lv-item-swiping').removeClass('mbsc-lv-item-active');
                C6T.css('line-height', W5T + 'px');
                L5T.css({
                    top: B5T,
                    height: W5T,
                    backgroundColor: Y0T(K5T)
                }).addClass('mbsc-lv-stage-c-v').appendTo(O5T.parent());
                if (l1T.iconSlide) {
                    z1T.append(r5T);
                }
                g5T('onSlideStart', {
                    target: z1T[0],
                    index: X5T
                });
            }
        }

        function y0T() {
            var K4T = false;
            if (!K6T) {
                if (f5T.actions) {
                    L5T.attr('class', 'mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-' + (u5T < 0 ? 'right' : 'left'));
                } else {
                    if (e5T && u5T <= e5T.percent) {
                        J5T--;
                        v5T = e5T;
                        e5T = I6T[J5T];
                        K4T = true;
                    } else if (v5T && u5T >= v5T.percent) {
                        J5T++;
                        e5T = v5T;
                        v5T = I6T[J5T];
                        K4T = true;
                    }
                    if (K4T) {
                        R5T = u5T > 0 ? e5T : v5T;
                        if (R5T) {
                            o6T(R5T, l1T.iconSlide);
                            g5T('onStageChange', {
                                target: z1T[0],
                                index: X5T,
                                stage: R5T
                            });
                        }
                    }
                }
                if (!M5T) {
                    K6T = true;
                    F0T = m83(E0T);
                }
            }
        }

        function h0T(k4T) {
            var t4T, T4T, r4T, O4T = false,
                a4T = true;
            h83(F0T);
            K6T = false;
            if (!M5T) {
                E0T();
            }
            if (f5T.actions) {
                if (Math.abs(u5T) > 10 && L6T) {
                    s5T(z1T, u5T < 0 ? -L6T : L6T, 200);
                    O4T = true;
                    k23 = true;
                    P0T = z1T;
                    V0T = X5T;
                    x73(document).on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(i4T) {
                        i4T.preventDefault();
                        G6T(z1T, true, k4T);
                    });
                }
            } else if (u5T) {
                if (l1T.quickSwipe && !M5T) {
                    r4T = new Date() - c0T;
                    t4T = r4T < 300 && K5T < -50;
                    T4T = r4T < 300 && K5T > 50;
                    if (t4T) {
                        R6T = true;
                        R5T = f5T.left;
                        o6T(R5T, l1T.iconSlide);
                    } else if (T4T) {
                        R6T = true;
                        R5T = f5T.right;
                        o6T(R5T, l1T.iconSlide);
                    }
                }
                if (R5T && R5T.action) {
                    C0T = z5T(R5T.disabled, {
                        target: z1T[0],
                        index: X5T
                    });
                    if (!C0T) {
                        O4T = true;
                        k23 = M5T || z5T(R5T.confirm, {
                            target: z1T[0],
                            index: X5T
                        });
                        if (k23) {
                            s5T(z1T, (u5T < 0 ? -1 : 1) * r5T[0].offsetWidth * 100 / j5T, 200, true);
                            i0T(R5T, z1T, X5T, false, k4T);
                        } else {
                            A0T(R5T, z1T, X5T, k4T);
                        }
                    }
                }
            }
            if (!O4T) {
                G6T(z1T, a4T, k4T);
            }
            o5T = false;
        }

        function n0T() {
            b5T = true;
            T5T = false;
            E5T = false;
            B6T = 0;
            t5T = X5T;
            if (l1T.vibrate) {
                r1C();
            }
            k5T = t6T(z1T, 'next');
            G5T = k5T.length && k5T[0].offsetTop;
            y5T = t6T(z1T, 'prev');
            V5T = y5T.length && y5T[0].offsetTop + y5T[0].offsetHeight;
            i5T.height(W5T).insertAfter(z1T);
            z1T.css({
                top: B5T
            }).addClass('mbsc-lv-item-dragging').removeClass('mbsc-lv-item-active').appendTo(N0T);
            g5T('onSortStart', {
                target: z1T[0],
                index: t5T
            });
        }

        function u6T(E4T, C4T, N4T, q4T) {
            E4T.removeClass('mbsc-lv-item-dragging');
            i5T.remove();
            g5T('onSortEnd', {
                target: E4T[0],
                index: t5T
            });
            if (l1T.vibrate) {
                r1C();
            }
            if (q4T) {
                s1T.addUndoAction(function(U4T) {
                    s1T.move(E4T, C4T, null, U4T, N4T, true);
                }, true);
                g5T('onSortUpdate', {
                    target: E4T[0],
                    index: t5T
                });
            }
        }

        function k0T() {
            if (!S6T) {
                clearTimeout(m0T);
                if (k23) {
                    x73(document).trigger('touchstart');
                }
                if (l6T) {
                    s1T.close(h5T, c6T);
                    l6T = false;
                    h5T = null;
                }
            }
        }

        function X0T() {
            clearTimeout(a0T);
            a0T = setTimeout(function() {
                D5T = I5T[0].innerHeight || I5T.innerHeight();
                Q6T = U5T ? I5T.offset().top : 0;
                if (N5T) {
                    B5T = z1T[0].offsetTop;
                    W5T = z1T[0].offsetHeight;
                    L5T.css({
                        top: B5T,
                        height: W5T
                    });
                }
            }, 200);
        }

        function r0T(Z4T) {
            if (V6T) {
                Z4T.stopPropagation();
                Z4T.preventDefault();
                V6T = false;
            }
        }

        function Q0T() {
            if (b5T || !N5T) {
                var V4T, h4T = I5T.scrollTop(),
                    o4T = n5T.offset().top,
                    G4T = n5T[0].offsetHeight,
                    d4T = U5T ? I5T.offset().top : h4T;
                x73('.mbsc-lv-gr-title', n5T).each(function(p4T, S4T) {
                    if (x73(S4T).offset().top < d4T) {
                        V4T = S4T;
                    }
                });
                if (o4T < d4T && o4T + G4T > d4T) {
                    d5T.show().empty().append(x73(V4T).clone());
                } else {
                    d5T.hide();
                }
            }
        }

        function T0T(e4T, m4T) {
            if (z5T(m4T.disabled, {
                    target: z1T[0],
                    index: X5T
                })) {
                x73('.mbsc-ic-' + m4T.icon, L5T).addClass('mbsc-lv-ic-disabled');
            }
        }

        function A0T(Y4T, c4T, J4T, H4T) {
            var v4T, b4T = {
                icon: 'undo2',
                text: l1T.undoText,
                color: '#b1b1b1',
                action: function D4T() {
                    s1T.undo();
                }
            };
            if (Y4T.undo) {
                s1T.startActionTrack();
                if (x73.isFunction(Y4T.undo)) {
                    s1T.addUndoAction(function() {
                        Y4T.undo.call(P5T, {
                            target: c4T[0],
                            index: J4T
                        }, s1T);
                    });
                }
                Z6T = c4T.attr('data-ref');
            }
            v4T = Y4T.action.call(P5T, {
                target: c4T[0],
                index: J4T
            }, s1T);
            if (Y4T.undo) {
                s1T.endActionTrack();
                if (v4T !== false) {
                    s5T(c4T, +c4T.attr('data-pos') < 0 ? -100 : 100, 200);
                }
                i5T.height(W5T).insertAfter(c4T);
                c4T.css('top', B5T).addClass('mbsc-lv-item-undo');
                a6T.hide();
                r5T.show();
                L5T.append(r5T);
                o6T(b4T);
                i0T(b4T, c4T, J4T, true, H4T);
            } else {
                G6T(c4T, v4T, H4T);
            }
        }

        function i0T(w4T, M4T, s4T, F4T, x4T) {
            var j4T, Q4T;
            k23 = true;
            x73(document).off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(z4T) {
                z4T.preventDefault();
                if (F4T) {
                    o0T(M4T);
                }
                G6T(M4T, true, x4T);
            });
            if (!X6T) {
                r5T.off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(l4T) {
                    l4T.stopPropagation();
                    j4T = f23(l4T, 'X');
                    Q4T = f23(l4T, 'Y');
                }).on('touchend.mbsc-lv-conf mouseup.mbsc-lv-conf', function(A3T) {
                    A3T.preventDefault();
                    if (A3T.type === 'touchend') {
                        I23.preventClick();
                    }
                    if (Math.abs(f23(A3T, 'X') - j4T) < 10 && Math.abs(f23(A3T, 'Y') - Q4T) < 10) {
                        A0T(w4T, M4T, s4T, x4T);
                        if (F4T) {
                            d6T = null;
                            o0T(M4T);
                        }
                    }
                });
            }
        }

        function E0T() {
            s5T(z1T, J0T + K5T * 100 / j5T);
            K6T = false;
        }

        function G6T(X3T, I3T, f3T) {
            x73(document).off('.mbsc-lv-conf');
            r5T.off('.mbsc-lv-conf');
            if (I3T !== false) {
                s5T(X3T, 0, X3T.attr('data-pos') !== '0' ? 200 : 0, false, function() {
                    F6T(X3T, f3T);
                    l5T(X3T);
                });
            } else {
                F6T(X3T, f3T);
            }
            k23 = false;
        }

        function s5T(W3T, L3T, n3T, B3T, g3T) {
            L3T = Math.max(o5T == 'right' ? 0 : -100, Math.min(L3T, o5T == 'left' ? 0 : 100));
            C5T = W3T[0].style;
            W3T.attr('data-pos', L3T);
            C5T[W23 + 'Transform'] = 'translate3d(' + (B3T ? j5T * L3T / 100 + 'px' : L3T + '%') + ',0,0)';
            C5T[W23 + 'Transition'] = k1C + 'transform ' + (n3T || 0) + 'ms';
            if (g3T) {
                q5T++;
                setTimeout(function() {
                    g3T();
                    q5T--;
                }, n3T);
            }
            u5T = L3T;
        }

        function q0T(R3T, y3T, P3T, u3T) {
            y3T = Math.max(r6T, Math.min(y3T, O6T));
            C5T = R3T[0].style;
            C5T[W23 + 'Transform'] = 'translate3d(0,' + y3T + 'px,0)';
            C5T[W23 + 'Transition'] = k1C + 'transform ' + (P3T || 0) + 'ms ease-out';
            if (u3T) {
                q5T++;
                setTimeout(function() {
                    u3T();
                    q5T--;
                }, P3T);
            }
        }

        function w6T() {
            clearTimeout(N6T);
            if (!i6T && s1T.sortable) {
                i6T = true;
                g6T.remove();
            }
        }

        function o6T(K3T, O3T) {
            var k3T = z5T(K3T.text, {
                target: z1T[0],
                index: X5T
            }) || '';
            if (z5T(K3T.disabled, {
                    target: z1T[0],
                    index: X5T
                })) {
                L5T.addClass('mbsc-lv-ic-disabled');
            } else {
                L5T.removeClass('mbsc-lv-ic-disabled');
            }
            L5T.css('background-color', K3T.color || (K3T.percent === 0 ? Y0T(u5T) : i1C));
            r5T.attr('class', 'mbsc-lv-ic-c mbsc-lv-ic-' + (O3T ? 'move-' : '') + (u5T < 0 ? 'right' : 'left'));
            n6T.attr('class', ' mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-' + (K3T.icon || 'none'));
            C6T.attr('class', 'mbsc-lv-ic-text' + (K3T.icon ? '' : ' mbsc-lv-ic-text-only') + (k3T ? '' : ' mbsc-lv-ic-only')).html(k3T || '&nbsp;');
            if (l1T.animateIcons) {
                if (R6T) {
                    n6T.addClass('mbsc-lv-ic-v');
                } else {
                    setTimeout(function() {
                        n6T.addClass('mbsc-lv-ic-a');
                    }, 10);
                }
            }
        }

        function F6T(r3T, t3T) {
            if (!N5T) {
                n6T.attr('class', 'mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none');
                L5T.attr('style', '').removeClass('mbsc-lv-stage-c-v');
                C6T.html('');
            }
            L5T.removeClass('mbsc-lv-left mbsc-lv-right');
            if (r3T) {
                g5T('onSlideEnd', {
                    target: r3T[0],
                    index: X5T
                });
                if (t3T) {
                    t3T();
                }
            }
        }

        function o0T(T3T) {
            T3T.css('top', '').removeClass('mbsc-lv-item-undo');
            if (d6T) {
                s1T.animate(i5T, 'collapse', function() {
                    i5T.remove();
                });
            } else {
                i5T.remove();
            }
            F6T();
            Z6T = null;
            d6T = null;
        }

        function l5T(a3T) {
            C5T = a3T[0].style;
            C5T[W23 + 'Transform'] = '';
            C5T[W23 + 'Transition'] = '';
            C5T.top = '';
            a3T.removeClass('mbsc-lv-item-swiping');
        }

        function z5T(i3T, E3T) {
            return x73.isFunction(i3T) ? i3T.call(this, E3T, s1T) : i3T;
        }

        function G0T(C3T) {
            var N3T;
            if (!C3T.attr('data-ref')) {
                N3T = Q23++;
                C3T.attr('data-ref', N3T);
                a5T[N3T] = {
                    item: C3T,
                    child: C3T.children(p5T),
                    parent: C3T.parent(),
                    ref: C3T.parent()[0] === P5T ? null : C3T.parent().parent().attr('data-ref')
                };
            }
            C3T.addClass('mbsc-lv-item');
            if (s1T.sortable.handle && C3T.attr('data-role') != 'list-divider' && !C3T.children('.mbsc-lv-handle-c').length) {
                C3T.append(b0T);
            }
            if (l1T.enhance && !C3T.hasClass('mbsc-lv-item-enhanced')) {
                var q3T = C3T.attr('data-icon'),
                    U3T = C3T.find('img').eq(0).addClass('mbsc-lv-img');
                if (U3T.is(':first-child')) {
                    C3T.addClass('mbsc-lv-img-' + (l1T.rtl ? 'right' : 'left'));
                } else if (U3T.length) {
                    C3T.addClass('mbsc-lv-img-' + (l1T.rtl ? 'left' : 'right'));
                }
                C3T.addClass('mbsc-lv-item-enhanced').children().each(function(d3T, Z3T) {
                    Z3T = x73(Z3T);
                    if (Z3T.is('p, h1, h2, h3, h4, h5, h6')) {
                        Z3T.addClass('mbsc-lv-txt');
                    }
                });
                if (q3T) {
                    C3T.addClass('mbsc-lv-item-ic-' + (C3T.attr('data-icon-align') || (l1T.rtl ? 'right' : 'left'))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + q3T + '"></div>');
                }
            }
        }

        function S0T(o3T) {
            x73(Z5T, o3T).not('.mbsc-lv-item').each(function() {
                G0T(x73(this));
            });
            x73('[data-role="list-divider"]', o3T).removeClass('mbsc-lv-item').addClass('mbsc-lv-gr-title');
            x73(p5T, o3T).not('.mbsc-lv').addClass('mbsc-lv').prepend(J6T).parent().addClass('mbsc-lv-parent').prepend(f0T);
            x73('.mbsc-lv-back', o3T).each(function() {
                x73(this).attr('data-back', x73(this).parent().parent().attr('data-ref'));
            });
        }

        function A6T(V3T) {
            return V3T.children(Z5T).not('.mbsc-lv-back').not('.mbsc-lv-removed').not('.mbsc-lv-ph');
        }

        function w5T(h3T) {
            if ((typeof h3T === 'undefined' ? 'undefined' : q23(h3T)) !== 'object') {
                h3T = x73(Z5T + '[data-id="' + h3T + '"]', A5T);
            }
            return x73(h3T);
        }

        function x0T(p3T) {
            var S3T = 0,
                G3T = a5T[p3T.attr('data-ref')];
            while (G3T && G3T.ref) {
                S3T++;
                G3T = a5T[G3T.ref];
            }
            return S3T;
        }

        function t6T(m3T, e3T) {
            m3T = m3T[e3T]();
            while (m3T.length && (!m3T.hasClass('mbsc-lv-item') || m3T.hasClass('mbsc-lv-ph') || m3T.hasClass('mbsc-lv-item-dragging'))) {
                if (!s1T.sortable.group && m3T.hasClass('mbsc-lv-gr-title')) {
                    return false;
                }
                m3T = m3T[e3T]();
            }
            return m3T;
        }

        function Y0T(c3T) {
            return (c3T > 0 ? f5T.right : f5T.left).color || i1C;
        }

        function S5T(Y3T) {
            return I23.isNumeric(Y3T) ? Y3T + '' : 0;
        }

        function v0T(J3T, v3T) {
            return +(v3T < 0 ? S5T((J3T.actionsWidth || 0).right) || S5T(J3T.actionsWidth) || S5T(l1T.actionsWidth.right) || S5T(l1T.actionsWidth) : S5T((J3T.actionsWidth || 0).left) || S5T(J3T.actionsWidth) || S5T(l1T.actionsWidth.left) || S5T(l1T.actionsWidth));
        }

        function f6T(D3T, F3T) {
            if (D3T) {
                var H3T = I5T.scrollTop(),
                    M3T = D3T.is('.mbsc-lv-item') ? D3T[0].offsetHeight : 0,
                    b3T = D3T.offset().top + (U5T ? H3T - Q6T : 0);
                if (F3T) {
                    if (b3T < H3T || b3T + M3T > H3T + D5T) {
                        I5T.scrollTop(b3T);
                    }
                } else {
                    if (b3T < H3T) {
                        I5T.scrollTop(b3T);
                    } else if (b3T + M3T > H3T + D5T) {
                        I5T.scrollTop(Math.min(b3T, b3T + M3T - D5T / 2));
                    }
                }
            }
        }

        function b6T(s3T, x3T, j3T, Q3T, z3T) {
            var l3T = x3T.parent(),
                w3T = x3T.prev();
            Q3T = Q3T || j23;
            if (w3T[0] === r5T[0]) {
                w3T = r5T.prev();
            }
            if (O5T[0] !== x3T[0]) {
                g5T('onNavStart', {
                    level: Y5T,
                    direction: s3T,
                    list: x3T[0]
                });
                D6T.prepend(x3T.addClass('mbsc-lv-v mbsc-lv-sl-new'));
                f6T(A5T);
                M0T(D6T, 'mbsc-lv-sl-' + s3T, function() {
                    O5T.removeClass('mbsc-lv-sl-curr');
                    x3T.removeClass('mbsc-lv-sl-new').addClass('mbsc-lv-sl-curr');
                    if (h6T && h6T.length) {
                        O5T.removeClass('mbsc-lv-v').insertAfter(h6T);
                    } else {
                        e6T.append(O5T.removeClass('mbsc-lv-v'));
                    }
                    h6T = w3T;
                    e6T = l3T;
                    O5T = x3T;
                    f6T(j3T, z3T);
                    Q3T.call(P5T, j3T);
                    g5T('onNavEnd', {
                        level: Y5T,
                        direction: s3T,
                        list: x3T[0]
                    });
                });
            } else {
                f6T(j3T, z3T);
                Q3T.call(P5T, j3T);
            }
        }

        function v6T(A9T, X9T) {
            if (!q5T) {
                if (A9T.hasClass('mbsc-lv-parent')) {
                    Y5T++;
                    b6T('r', a5T[A9T.attr('data-ref')].child, null, X9T);
                } else if (A9T.hasClass('mbsc-lv-back')) {
                    Y5T--;
                    b6T('l', a5T[A9T.attr('data-back')].parent, a5T[A9T.attr('data-back')].item, X9T);
                }
            }
        }

        function M0T(f9T, L9T, I9T) {
            function W9T() {
                clearTimeout(n9T);
                q5T--;
                f9T.off(t1C, W9T).removeClass(L9T);
                I9T.call(P5T, f9T);
            }
            var n9T;
            I9T = I9T || j23;
            if (l1T.animation && L9T !== 'mbsc-lv-item-none') {
                q5T++;
                f9T.on(t1C, W9T).addClass(L9T);
                n9T = setTimeout(W9T, 500);
            } else {
                I9T.call(P5T, f9T);
            }
        }

        function W0T(g9T, B9T) {
            var y9T, P9T = g9T.attr('data-ref');
            y9T = m6T[P9T] = m6T[P9T] || [];
            if (B9T) {
                y9T.push(B9T);
            }
            if (g9T.attr('data-action')) {
                return;
            }
            B9T = y9T.shift();
            g9T.attr('data-action', 1);
            B9T(function() {
                g9T.removeAttr('data-action');
                if (y9T.length) {
                    W0T(g9T);
                } else {
                    delete m6T[P9T];
                }
            });
        }

        function s6T(R9T, k9T, O9T) {
            var K9T, u9T;
            if (R9T && R9T.length) {
                K9T = 100 / (R9T.length + 2);
                x73.each(R9T, function(t9T, r9T) {
                    if (r9T.key === undefined) {
                        r9T.key = M6T++;
                    }
                    if (r9T.percent === undefined) {
                        r9T.percent = k9T * K9T * (t9T + 1);
                        if (O9T) {
                            u9T = Q73({}, r9T);
                            u9T.key = M6T++;
                            u9T.percent = -K9T * (t9T + 1);
                            R9T.push(u9T);
                            P6T[u9T.key] = u9T;
                        }
                    }
                    P6T[r9T.key] = r9T;
                });
            }
        }
        var N5T, L6T, F5T, u5T, i6T, P0T, V0T, A5T, t5T, O5T, h6T, e6T, O0T, R5T, J5T, a0T, X6T, C0T, K5T, c5T, T5T, E5T, b5T, N0T, U0T, Z0T, d0T, g5T, g6T, q6T, d5T, I0T, j0T, U5T, b0T, D0T, h5T, l6T, c6T, e0T, m0T, J6T, f0T, n6T, r5T, L5T, j5T, z1T, W5T, X5T, W6T, Z5T, z6T, y6T, p5T, s0T, O6T, r6T, a6T, k5T, G5T, v5T, j6T, U6T, V6T, S6T, t0T, x6T, i5T, y5T, V5T, e5T, R6T, F0T, K6T, l1T, H5T, M5T, D6T, M6T, I6T, J0T, c0T, T6T, Y6T, C5T, o5T, L0T, p0T, B0T, C6T, N6T, f5T, Q5T, Z6T, d6T, I5T, D5T, B6T, Q6T, s1T = this,
            P5T = H0T,
            n5T = x73(P5T),
            q5T = 0,
            Y5T = 0,
            B5T = 0,
            P6T = {},
            m6T = {},
            a5T = {};
        K1C.Base.call(this, H0T, R0T, true);
        s1T.animate = function(T9T, a9T, i9T) {
            M0T(T9T, 'mbsc-lv-item-' + a9T, i9T);
        };
        s1T.add = function(J9T, S9T, U9T, G9T, Y9T, d9T) {
            var m9T, o9T, p9T, c9T, Z9T, h9T, V9T = '',
                C9T = Y9T === undefined ? n5T : w5T(Y9T),
                N9T = C9T,
                E9T = (typeof S9T === 'undefined' ? 'undefined' : q23(S9T)) !== 'object' ? x73('<' + W6T + ' data-ref="' + Q23++ + '" data-id="' + J9T + '">' + S9T + '</' + W6T + '>') : S9T,
                e9T = E9T.attr('data-pos') < 0 ? 'left' : 'right',
                q9T = E9T.attr('data-ref');
            G9T = G9T || j23;
            if (!q9T) {
                q9T = Q23++;
                E9T.addClass('mbsc-lv-item').attr('data-ref', q9T);
            }
            G0T(E9T);
            if (!d9T) {
                s1T.addUndoAction(function(v9T) {
                    if (c9T) {
                        s1T.navigate(C9T, function() {
                            N9T.remove();
                            C9T.removeClass('mbsc-lv-parent').children('.mbsc-lv-arr').remove();
                            Z9T.child = C9T.children(p5T);
                            s1T.remove(E9T, null, v9T, true);
                        });
                    } else {
                        s1T.remove(E9T, null, v9T, true);
                    }
                }, true);
            }
            W0T(E9T, function(b9T) {
                l5T(E9T.css('top', '').removeClass('mbsc-lv-item-undo'));
                if (C9T.is(Z5T)) {
                    h9T = C9T.attr('data-ref');
                    if (!C9T.children(p5T).length) {
                        c9T = true;
                        C9T.append('<' + y6T + '></' + y6T + '>');
                    }
                } else {
                    h9T = C9T.children('.mbsc-lv-back').attr('data-back');
                }
                Z9T = a5T[h9T];
                if (Z9T) {
                    if (!Z9T.child.length) {
                        C9T.addClass('mbsc-lv-parent').prepend(f0T);
                        N9T = C9T.children(p5T).prepend(J6T).addClass('mbsc-lv');
                        Z9T.child = N9T;
                        x73('.mbsc-lv-back', C9T).attr('data-back', h9T);
                    } else {
                        N9T = Z9T.child;
                    }
                }
                a5T[q9T] = {
                    item: E9T,
                    child: E9T.children(p5T),
                    parent: N9T,
                    ref: h9T
                };
                p9T = A6T(N9T);
                o9T = p9T.length;
                if (U9T === undefined || U9T === null) {
                    U9T = o9T;
                }
                if (d9T) {
                    V9T = 'mbsc-lv-item-new-' + (d9T ? e9T : '');
                }
                S0T(E9T.addClass(V9T));
                if (U9T !== false) {
                    if (!o9T) {
                        m9T = x73('.mbsc-lv-back', N9T);
                        if (m9T.length) {
                            E9T.insertAfter(m9T);
                        } else {
                            N9T.append(E9T);
                        }
                    } else if (U9T < o9T) {
                        E9T.insertBefore(p9T.eq(U9T));
                    } else {
                        E9T.insertAfter(p9T.eq(o9T - 1));
                    }
                }
                if (N9T.hasClass('mbsc-lv-v')) {
                    s1T.animate(E9T.height(E9T[0].offsetHeight), d9T && Z6T === q9T ? 'none' : 'expand', function(H9T) {
                        s1T.animate(H9T.height(''), d9T ? 'add-' + e9T : 'pop-in', function(D9T) {
                            G9T.call(P5T, D9T.removeClass(V9T));
                            b9T();
                        });
                    });
                } else {
                    G9T.call(P5T, E9T.removeClass(V9T));
                    b9T();
                }
                A5T.trigger('mbsc-refresh');
                g5T('onItemAdd', {
                    target: E9T[0]
                });
            });
        };
        s1T.swipe = function(M9T, x9T, F9T, j9T, Q9T) {
            M9T = w5T(M9T);
            z1T = M9T;
            X6T = j9T;
            M5T = true;
            N5T = true;
            F9T = F9T === undefined ? 300 : F9T;
            K5T = x9T > 0 ? 1 : -1;
            K0T();
            u0T();
            s5T(M9T, x9T, F9T);
            clearTimeout(p0T);
            clearInterval(L0T);
            L0T = setInterval(function() {
                u5T = I23.getPosition(M9T) / j5T * 100;
                y0T();
            }, 10);
            p0T = setTimeout(function() {
                clearInterval(L0T);
                u5T = x9T;
                y0T();
                h0T(Q9T);
                X6T = false;
                M5T = false;
                N5T = false;
            }, F9T);
        };
        s1T.openStage = function(s9T, w9T, z9T, l9T) {
            if (P6T[w9T]) {
                s1T.swipe(s9T, P6T[w9T].percent, z9T, l9T);
            }
        };
        s1T.openActions = function(A7T, f7T, I7T, L7T) {
            A7T = w5T(A7T);
            var X7T = v0T(Q5T[A7T.attr('data-type') || 'defaults'], f7T == 'left' ? -1 : 1);
            s1T.swipe(A7T, f7T == 'left' ? -X7T : X7T, I7T, L7T);
        };
        s1T.close = function(W7T, n7T) {
            s1T.swipe(W7T, 0, n7T);
        };
        s1T.remove = function(g7T, P7T, B7T, R7T) {
            var K7T, y7T, u7T;
            B7T = B7T || j23;
            g7T = w5T(g7T);
            if (g7T.length) {
                y7T = g7T.parent();
                K7T = A6T(y7T).index(g7T);
                u7T = g7T[0].style;
                if (!R7T) {
                    if (g7T.attr('data-ref') === Z6T) {
                        d6T = true;
                    }
                    s1T.addUndoAction(function(k7T) {
                        s1T.add(null, g7T, K7T, k7T, y7T, true);
                    }, true);
                }
                W0T(g7T, function(O7T) {
                    P7T = P7T || (g7T.attr('data-pos') < 0 ? 'left' : 'right');
                    if (y7T.hasClass('mbsc-lv-v')) {
                        s1T.animate(g7T.addClass('mbsc-lv-removed'), R7T ? 'pop-out' : 'remove-' + P7T, function(r7T) {
                            u7T.height = r7T[0].offsetHeight + 'px';
                            s1T.animate(r7T, 'collapse', function(t7T) {
                                u7T.height = '';
                                l5T(t7T.removeClass('mbsc-lv-removed'));
                                if (B7T.call(P5T, t7T) !== false) {
                                    t7T.remove();
                                }
                                O7T();
                            });
                        });
                    } else {
                        if (B7T.call(P5T, g7T) !== false) {
                            g7T.remove();
                        }
                        O7T();
                    }
                    g5T('onItemRemove', {
                        target: g7T[0]
                    });
                });
            }
        };
        s1T.move = function(T7T, i7T, E7T, C7T, N7T, a7T) {
            T7T = w5T(T7T);
            if (!a7T) {
                s1T.startActionTrack();
            }
            L5T.append(r5T);
            s1T.remove(T7T, E7T, null, a7T);
            s1T.add(null, T7T, i7T, C7T, N7T, a7T);
            if (!a7T) {
                s1T.endActionTrack();
            }
        };
        s1T.navigate = function(q7T, d7T) {
            var U7T, Z7T;
            q7T = w5T(q7T);
            U7T = a5T[q7T.attr('data-ref')];
            Z7T = x0T(q7T);
            if (U7T) {
                b6T(Z7T >= Y5T ? 'r' : 'l', U7T.parent, q7T, d7T, true);
                Y5T = Z7T;
            }
        };
        s1T._processSettings = function() {
            if (n5T.is('[mbsc-enhance]')) {
                I0T = true;
                n5T.removeAttr('mbsc-enhance');
            }
        };
        s1T._init = function() {
            var S7T, p7T, m7T, o7T = 0, 
                V7T = '',
                h7T = '',
                G7T = '';
			m7T = l1T.sort || l1T.sortable;
            y6T = l1T.listNode;
            p5T = l1T.listSelector;
            W6T = l1T.itemNode;
            Z5T = l1T.itemSelector;
			
			S7T = 'mbsc-lv-cont mbsc-lv-' + l1T.theme + (l1T.rtl ? ' mbsc-lv-rtl' : '') + (l1T.baseTheme ? ' mbsc-lv-' + l1T.baseTheme : '') + (l1T.animateIcons ? ' mbsc-lv-ic-anim' : '') + (l1T.striped ? ' mbsc-lv-alt-row ' : '') + (l1T.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
			 
            s1T.sortable = m7T || false;
            if (!A5T) {
                V7T += '<div class="mbsc-lv-multi-c"></div>';
                V7T += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
                n5T.addClass('mbsc-lv mbsc-lv-v mbsc-lv-root').show();
                L5T = x73('<div class="mbsc-lv-stage-c">' + V7T + '</div>');
                r5T = x73('.mbsc-lv-ic-c', L5T);
                a6T = x73('.mbsc-lv-multi-c', L5T);
                n6T = x73('.mbsc-lv-ic-s', L5T);
                C6T = x73('.mbsc-lv-ic-text', L5T);
                i5T = x73('<' + W6T + ' class="mbsc-lv-item mbsc-lv-ph"></' + W6T + '>');
                g6T = x73('<div class="mbsc-lv-fill-item"></div>');
                A5T = x73('<div class="' + S7T + '"><' + y6T + ' class="mbsc-lv mbsc-lv-dummy"></' + y6T + '><div class="mbsc-lv-sl-c"></div></div>');
                U5T = l1T.context !== 'body';
                I5T = x73(U5T ? l1T.context : window);
                N0T = x73('.mbsc-lv-dummy', A5T);
                A5T.insertAfter(n5T);
                I5T.on('orientationchange resize', X0T);
                X0T();
                A5T.on('touchstart mousedown', '.mbsc-lv-item', w0T).on('touchmove', '.mbsc-lv-item', g0T).on('touchend touchcancel', '.mbsc-lv-item', E6T);
                P5T.addEventListener('click', r0T, true);
                A5T.on('touchstart mousedown', '.mbsc-lv-ic-m', function(e7T) {
                    if (!X6T) {
                        e7T.stopPropagation();
                        e7T.preventDefault();
                    }
                    T6T = f23(e7T, 'X');
                    Y6T = f23(e7T, 'Y');
                }).on('touchend mouseup', '.mbsc-lv-ic-m', function(c7T) {
                    if (!X6T) {
                        if (c7T.type === 'touchend') {
                            I23.preventClick();
                        }
                        if (k23 && !x73(this).hasClass('mbsc-lv-ic-disabled') && Math.abs(f23(c7T, 'X') - T6T) < 10 && Math.abs(f23(c7T, 'Y') - Y6T) < 10) {
                            A0T((u5T < 0 ? f5T.rightMenu : f5T.leftMenu)[x73(this).index()], P0T, V0T);
                        }
                    }
                });
                D6T = x73('.mbsc-lv-sl-c', A5T).append(n5T.addClass('mbsc-lv-sl-curr')).attr('data-ref', Q23++);
                O5T = n5T;
                e6T = A5T;
				
				J6T = '<li class="mbsc-lv-item mbsc-lv-back">' + l1T.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + l1T.leftArrowClass + '"></div></li>';
				f0T = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + l1T.rightArrowClass + '"></div>';
				if (s1T.sortable.handle) {
					var t59 =  s1T.sortable.handle === true ? p : s1T.sortable.handle;
					b0T = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + t59 + ' mbsc-lv-handle"><div class="' + l1T.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + l1T.handleMarkup + '</div></div>';
				}
				
            } else {
                A5T.attr('class', S7T);
                if (m7T.handle) {
                    x73('.mbsc-lv-handle-c', n5T).remove();
                }
                x73(Z5T + ':not(.mbsc-lv-back)', n5T).removeClass('mbsc-lv-item');
            }
            S0T(n5T);
            M6T = 0;
            Q5T = l1T.itemGroups || {};
            Q5T.defaults = {
                swipeleft: l1T.swipeleft,
                swiperight: l1T.swiperight,
                stages: l1T.stages,
                actions: l1T.actions,
                actionsWidth: l1T.actionsWidth
            };
            x73.each(Q5T, function(J7T, Y7T) {
                Y7T.swipe = Y7T.swipe !== undefined ? Y7T.swipe : l1T.swipe;
                Y7T.stages = Y7T.stages || [];
                s6T(Y7T.stages, 1, true);
                s6T(Y7T.stages.left, 1);
                s6T(Y7T.stages.right, -1);
                if (Y7T.stages.left || Y7T.stages.right) {
                    Y7T.stages = [].concat(Y7T.stages.left || [], Y7T.stages.right || []);
                }
                q6T = false;
                if (!Y7T.stages.length) {
                    if (Y7T.swipeleft) {
                        Y7T.stages.push({
                            percent: -30,
                            action: Y7T.swipeleft
                        });
                    }
                    if (Y7T.swiperight) {
                        Y7T.stages.push({
                            percent: 30,
                            action: Y7T.swiperight
                        });
                    }
                }
                x73.each(Y7T.stages, function(b7T, v7T) {
                    if (v7T.percent === 0) {
                        q6T = true;
                        return false;
                    }
                });
                if (!q6T) {
                    Y7T.stages.push({
                        percent: 0
                    });
                }
                Y7T.stages.sort(function(H7T, D7T) {
                    return H7T.percent - D7T.percent;
                });
                x73.each(Y7T.stages, function(M7T, F7T) {
                    if (F7T.percent === 0) {
                        Y7T.start = M7T;
                        return false;
                    }
                });
                if (q6T) {
                    Y7T.left = Y7T.right = Y7T.stages[Y7T.start];
                } else {
                    Y7T.left = Y7T.stages[Y7T.start - 1] || {};
                    Y7T.right = Y7T.stages[Y7T.start + 1] || {};
                }
                if (Y7T.actions) {
                    Y7T.leftMenu = Y7T.actions.left || Y7T.actions;
                    Y7T.rightMenu = Y7T.actions.right || Y7T.leftMenu;
                    h7T = '';
                    G7T = '';
                    for (o7T = 0; o7T < Y7T.leftMenu.length; o7T++) {
                        h7T += '<div ' + (Y7T.leftMenu[o7T].color ? 'style="background-color: ' + Y7T.leftMenu[o7T].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + Y7T.leftMenu[o7T].icon + '">' + (Y7T.leftMenu[o7T].text || '') + '</div>';
                    }
                    for (o7T = 0; o7T < Y7T.rightMenu.length; ++o7T) {
                        G7T += '<div ' + (Y7T.rightMenu[o7T].color ? 'style="background-color: ' + Y7T.rightMenu[o7T].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + Y7T.rightMenu[o7T].icon + '">' + (Y7T.rightMenu[o7T].text || '') + '</div>';
                    }
                    if (Y7T.actions.left) {
                        Y7T.swipe = Y7T.actions.right ? Y7T.swipe : 'right';
                    }
                    if (Y7T.actions.right) {
                        Y7T.swipe = Y7T.actions.left ? Y7T.swipe : 'left';
                    }
                    Y7T.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + h7T + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + G7T + '</div>';
                }
            });
            if (l1T.fixedHeader) {
                p7T = 'mbsc-lv-fixed-header' + (U5T ? ' mbsc-lv-fixed-header-ctx mbsc-lv-' + l1T.theme + (l1T.baseTheme ? ' mbsc-lv-' + l1T.baseTheme : '') : '');
                if (!d5T) {
                    d5T = x73('<div class="' + p7T + '"></div>');
                    if (U5T) {
                        I5T.before(d5T);
                    } else {
                        A5T.prepend(d5T);
                    }
                    U6T = I23.throttle(Q0T, 200);
                    I5T.on('scroll touchmove', U6T);
                } else {
                    d5T.attr('class', p7T);
                }
            }
            if (l1T.hover) {
                if (!c6T) {
                    A5T.on('mouseover.mbsc-lv', '.mbsc-lv-item', function() {
                        if (!h5T || h5T[0] != this) {
                            k0T();
                            h5T = x73(this);
                            if (Q5T[h5T.attr('data-type') || 'defaults'].actions) {
                                m0T = setTimeout(function() {
                                    if (!S6T) {
                                        l6T = true;
                                        s1T.openActions(h5T, D0T, c6T, false);
                                    } else {
                                        h5T = null;
                                    }
                                }, e0T);
                            }
                        }
                    }).on('mouseleave.mbsc-lv', k0T);
                }
                c6T = l1T.hover.time || 200;
                e0T = l1T.hover.timeout || 200;
                D0T = l1T.hover.direction || l1T.hover || 'right';
            }
            if (I0T) {
                A5T.attr('mbsc-enhance', '');
            }
            A5T.trigger('mbsc-enhance', [{
                theme: l1T.theme,
                lang: l1T.lang
            }]);
        };
        s1T._destroy = function() {
            var x7T;
            e6T.append(O5T);
            if (U5T && d5T) {
                d5T.remove();
            }
            if (I0T) {
                n5T.attr('mbsc-enhance', '');
                x7T = j73.instances[A5T[0].id];
                if (x7T) {
                    x7T.destroy();
                }
            }
            P5T.removeEventListener('click', r0T, true);
            A5T.find('.mbsc-lv-txt,.mbsc-lv-img').removeClass('mbsc-lv-txt mbsc-lv-img');
            A5T.find(p5T).removeClass('mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr').find(Z5T).removeClass('mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right').removeAttr('data-ref');
            x73('.mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic', A5T).remove();
            n5T.insertAfter(A5T);
            A5T.remove();
            L5T.remove();
            I5T.off('orientationchange resize', X0T);
            if (U6T) {
                I5T.off('scroll touchmove', U6T);
            }
        };
        var p6T, H6T = [],
            m5T = [],
            k6T = [],
            x5T = 0;
        s1T.startActionTrack = function() {
            if (!x5T) {
                k6T = [];
            }
            x5T++;
        };
        s1T.endActionTrack = function() {
            x5T--;
            if (!x5T) {
                m5T.push(k6T);
            }
        };
        s1T.addUndoAction = function(Q7T, w7T) {
            var j7T = {
                action: Q7T,
                async: w7T
            };
            if (x5T) {
                k6T.push(j7T);
            } else {
                m5T.push([j7T]);
                if (m5T.length > l1T.undoLimit) {
                    m5T.shift();
                }
            }
        };
        s1T.undo = function() {
            function A2T() {
                if (z7T < 0) {
                    p6T = false;
                    X2T();
                } else {
                    s7T = l7T[z7T];
                    z7T--;
                    if (s7T.async) {
                        s7T.action(A2T);
                    } else {
                        s7T.action();
                        A2T();
                    }
                }
            }

            function X2T() {
                l7T = H6T.shift();
                if (l7T) {
                    p6T = true;
                    z7T = l7T.length - 1;
                    A2T();
                }
            }
            var s7T, z7T, l7T;
            if (m5T.length) {
                H6T.push(m5T.pop());
            }
            if (!p6T) {
                X2T();
            }
        };
        l1T = s1T.settings;
        g5T = s1T.trigger;
        s1T.init(R0T);
    };
    E1C.prototype = {
        _class: 'listview',
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _defaults: {
            context: 'body',
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: true,
            quickSwipe: true,
            animateIcons: true,
            animation: true,
            revert: true,
            vibrate: true,
            handleClass: '',
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            listNode: 'ul',
            listSelector: 'ul,ol',
            itemNode: 'li',
            itemSelector: 'li',
            leftArrowClass: 'mbsc-ic-arrow-left4',
            rightArrowClass: 'mbsc-ic-arrow-right4',
            backText: 'Back',
            undoText: 'Undo',
            stages: []
        }
    };
    K1C.ListView = E1C;
    j73.themes.listview.mobiscroll = {
        leftArrowClass: 'mbsc-ic-arrow-left5',
        rightArrowClass: 'mbsc-ic-arrow-right5'
    };
    j73.presetShort('listview', 'ListView');
    var C5C = {
        batch: 50,
        min: 0,
        max: 100,
        defaultUnit: '',
        units: null,
        unitNames: null,
        invalid: [],
        sign: false,
        step: 0.05,
        scale: 2,
        convert: function f2T(I2T) {
            return I2T;
        },
        signText: '&nbsp;',
        wholeText: 'Whole',
        fractionText: 'Fraction',
        unitText: 'Unit'
    };
    j73.presets.scroller.measurement = function(E2T) {
        function Q2T(z2T) {
            return Math.max(u2T, Math.min(T2T, g2T ? z2T < 0 ? Math.ceil(z2T) : Math.floor(z2T) : v2T(Math.round(z2T - S2T), r2T) + S2T));
        }

        function Y2T(l2T) {
            return g2T ? v2T((Math.abs(l2T) - Math.abs(Q2T(l2T))) * U2T - p2T, r2T) + p2T : 0;
        }

        function G2T(A8T) {
            var X8T = Q2T(A8T),
                f8T = Y2T(A8T),
                I8T = A8T < 0 ? '-' : '+';
            if (f8T >= U2T) {
                if (A8T < 0) {
                    X8T--;
                } else {
                    X8T++;
                }
                f8T = 0;
            }
            return [I8T, X8T, f8T];
        }

        function F2T(L8T) {
            var W8T = +L8T[y2T],
                n8T = g2T ? L8T[a2T] / U2T * (W8T < 0 ? -1 : 1) : 0;
            return (n2T && L8T[0] == '-' ? -1 : 1) * (W8T + n8T);
        }

        function v2T(B8T, g8T) {
            return Math.round(B8T / g8T) * g8T;
        }

        function s2T(y8T, P8T) {
            y8T = y8T + '';
            while (y8T.length < P8T) {
                y8T = '0' + y8T;
            }
            return y8T;
        }

        function q2T(u8T, R8T, K8T) {
            if (R8T === K8T || !L2T.convert) {
                return u8T;
            }
            return L2T.convert.call(this, u8T, R8T, K8T);
        }

        function D2T(k8T, O8T, r8T) {
            k8T = k8T > r8T ? r8T : k8T;
            k8T = k8T < O8T ? O8T : k8T;
            return k8T;
        }

        function b2T(a8T) {
            var t8T, T8T;
            O2T = q2T(L2T.min, i2T, a8T);
            k2T = q2T(L2T.max, i2T, a8T);
            if (g2T) {
                u2T = O2T < 0 ? Math.ceil(O2T) : Math.floor(O2T);
                T2T = k2T < 0 ? Math.ceil(k2T) : Math.floor(k2T);
                H2T = Y2T(O2T);
                J2T = Y2T(k2T);
            } else {
                u2T = Math.round(O2T);
                T2T = Math.round(k2T);
                T2T = u2T + Math.floor((T2T - u2T) / r2T) * r2T;
                S2T = u2T % r2T;
            }
            t8T = u2T;
            T8T = T2T;
            if (n2T) {
                T8T = Math.abs(t8T) > Math.abs(T8T) ? Math.abs(t8T) : Math.abs(T8T);
                t8T = t8T < 0 ? 0 : t8T;
            }
            N2T.min = t8T < 0 ? Math.ceil(t8T / P2T) : Math.floor(t8T / P2T);
            N2T.max = T8T < 0 ? Math.ceil(T8T / P2T) : Math.floor(T8T / P2T);
        }

        function j2T(i8T) {
            return F2T(i8T).toFixed(g2T ? e2T : 0) + (K2T ? ' ' + o2T[i8T[d2T]] : '');
        }
        var w2T = Q73({}, E2T.settings),
            L2T = Q73(E2T.settings, C5C, w2T),
            h2T = {},
            Z2T = [
                []
            ],
            t2T = {},
            N2T = {},
            V2T = {},
            c2T = [],
            n2T = L2T.sign,
            K2T = L2T.units && L2T.units.length,
            i2T = K2T ? L2T.defaultUnit || L2T.units[0] : '',
            o2T = [],
            g2T = L2T.step < 1,
            P2T = L2T.step > 1 ? L2T.step : 1,
            e2T = g2T ? Math.max(L2T.scale, (L2T.step + '').split('.')[1].length) : 1,
            U2T = Math.pow(10, e2T),
            r2T = Math.round(g2T ? L2T.step * U2T : L2T.step),
            x2T, B2T, C2T, M2T = -1,
            a2T, y2T, d2T, O2T, k2T, u2T, T2T, H2T, J2T, S2T = 0,
            p2T = 0,
            m2T, W2T, R2T = 0;
        E2T.setVal = function(E8T, C8T, N8T, q8T, U8T) {
            E2T._setVal(x73.isArray(E8T) ? j2T(E8T) : E8T, C8T, N8T, q8T, U8T);
        };
        if (L2T.units) {
            for (W2T = 0; W2T < L2T.units.length; ++W2T) {
                m2T = L2T.units[W2T];
                o2T.push(L2T.unitNames ? L2T.unitNames[m2T] || m2T : m2T);
            }
        }
        if (n2T) {
            n2T = false;
            if (K2T) {
                for (W2T = 0; W2T < L2T.units.length; W2T++) {
                    if (q2T(L2T.min, i2T, L2T.units[W2T]) < 0) {
                        n2T = true;
                    }
                }
            } else {
                n2T = L2T.min < 0;
            }
        }
        if (n2T) {
            Z2T[0].push({
                data: ['-', '+'],
                label: L2T.signText
            });
            M2T = R2T++;
        }
        N2T = {
            label: L2T.wholeText,
            data: function Z8T(d8T) {
                return u2T % P2T + d8T * P2T;
            },
            getIndex: function o8T(V8T) {
                return Math.round((V8T - u2T % P2T) / P2T);
            }
        };
        Z2T[0].push(N2T);
        y2T = R2T++;
        b2T(i2T);
        if (g2T) {
            Z2T[0].push(V2T);
            V2T.data = [];
            V2T.label = L2T.fractionText;
            for (W2T = p2T; W2T < U2T; W2T += r2T) {
                c2T.push(W2T);
                V2T.data.push({
                    value: W2T,
                    display: '.' + s2T(W2T, e2T)
                });
            }
            a2T = R2T++;
            x2T = Math.ceil(100 / r2T);
            if (L2T.invalid && L2T.invalid.length) {
                x73.each(L2T.invalid, function(S8T, G8T) {
                    var h8T = G8T > 0 ? Math.floor(G8T) : Math.ceil(G8T);
                    if (h8T === 0) {
                        h8T = G8T <= 0 ? -0.001 : 0.001;
                    }
                    t2T[h8T] = (t2T[h8T] || 0) + 1;
                    if (G8T === 0) {
                        h8T = 0.001;
                        t2T[h8T] = (t2T[h8T] || 0) + 1;
                    }
                });
                x73.each(t2T, function(p8T, m8T) {
                    if (m8T < x2T) {
                        delete t2T[p8T];
                    } else {
                        t2T[p8T] = p8T;
                    }
                });
            }
        }
        if (K2T) {
            h2T = {
                data: [],
                label: L2T.unitText,
                cssClass: 'mbsc-msr-whl-unit',
                circular: false
            };
            for (W2T = 0; W2T < L2T.units.length; W2T++) {
                h2T.data.push({
                    value: W2T,
                    display: o2T[W2T]
                });
            }
            Z2T[0].push(h2T);
        }
        d2T = R2T;
        return {
            wheels: Z2T,
            minWidth: n2T && g2T ? 70 : 80,
            showLabel: false,
            formatValue: j2T,
            compClass: 'mbsc-msr',
            parseValue: function e8T(b8T) {
                var D8T = (typeof b8T === 'number' ? b8T + '' : b8T) || L2T.defaultValue,
                    H8T = (D8T + '').split(' '),
                    Y8T = +H8T[0],
                    v8T = [],
                    J8T, c8T = '';
                if (K2T) {
                    c8T = x73.inArray(H8T[1], o2T);
                    c8T = c8T == -1 ? x73.inArray(i2T, L2T.units) : c8T;
                    c8T = c8T == -1 ? 0 : c8T;
                }
                C2T = K2T ? L2T.units[c8T] : '';
                b2T(C2T);
                Y8T = isNaN(Y8T) ? 0 : Y8T;
                Y8T = D2T(Y8T, O2T, k2T);
                J8T = G2T(Y8T);
                J8T[1] = D2T(J8T[1], u2T, T2T);
                B2T = Y8T;
                if (n2T) {
                    v8T[0] = J8T[0];
                    J8T[1] = Math.abs(J8T[1]);
                }
                v8T[y2T] = J8T[1];
                if (g2T) {
                    v8T[a2T] = J8T[2];
                }
                if (K2T) {
                    v8T[d2T] = c8T;
                }
                return v8T;
            },
            onCancel: function M8T() {
                B2T = undefined;
            },
            validate: function F8T(f1V) {
                var z8T, j8T, L1V, l8T, X1V, x8T = f1V.values,
                    s8T = f1V.index,
                    n1V = f1V.direction,
                    A1V = {},
                    Q8T = [],
                    I1V = {},
                    w8T = K2T ? L2T.units[x8T[d2T]] : '';
                if (n2T && s8T === 0) {
                    B2T = Math.abs(B2T) * (x8T[0] == '-' ? -1 : 1);
                }
                if (s8T === y2T || s8T === a2T && g2T || B2T === undefined || s8T === undefined) {
                    B2T = F2T(x8T);
                    C2T = w8T;
                }
                if (K2T && s8T === d2T && C2T !== w8T || s8T === undefined) {
                    b2T(w8T);
                    B2T = q2T(B2T, C2T, w8T);
                    C2T = w8T;
                    j8T = G2T(B2T);
                    if (s8T !== undefined) {
                        I1V[y2T] = N2T;
                        E2T.changeWheel(I1V);
                    }
                    if (n2T) {
                        x8T[0] = j8T[0];
                    }
                }
                Q8T[y2T] = [];
                if (n2T) {
                    Q8T[0] = [];
                    if (O2T > 0) {
                        Q8T[0].push('-');
                        x8T[0] = '+';
                    }
                    if (k2T < 0) {
                        Q8T[0].push('+');
                        x8T[0] = '-';
                    }
                    X1V = Math.abs(x8T[0] == '-' ? u2T : T2T);
                    for (R2T = X1V + P2T; R2T < X1V + 20 * P2T; R2T += P2T) {
                        Q8T[y2T].push(R2T);
                        A1V[R2T] = true;
                    }
                }
                B2T = D2T(B2T, O2T, k2T);
                j8T = G2T(B2T);
                L1V = n2T ? Math.abs(j8T[1]) : j8T[1];
                z8T = n2T ? x8T[0] == '-' : B2T < 0;
                x8T[y2T] = L1V;
                if (z8T) {
                    j8T[0] = '-';
                }
                if (g2T) {
                    x8T[a2T] = j8T[2];
                }
                x73.each(g2T ? t2T : L2T.invalid, function(P1V, y1V) {
                    if (n2T && z8T) {
                        if (y1V <= 0) {
                            y1V = Math.abs(y1V);
                        } else {
                            return;
                        }
                    }
                    y1V = v2T(q2T(y1V, i2T, w8T), g2T ? 1 : r2T);
                    A1V[y1V] = true;
                    Q8T[y2T].push(y1V);
                });
                x8T[y2T] = E2T.getValidValue(y2T, L1V, n1V, A1V);
                j8T[1] = x8T[y2T] * (n2T && z8T ? -1 : 1);
                if (g2T) {
                    Q8T[a2T] = [];
                    var W1V = n2T ? x8T[0] + x8T[1] : (B2T < 0 ? '-' : '+') + Math.abs(j8T[1]),
                        B1V = (O2T < 0 ? '-' : '+') + Math.abs(u2T),
                        g1V = (k2T < 0 ? '-' : '+') + Math.abs(T2T);
                    if (W1V === B1V) {
                        x73(c2T).each(function(R1V, u1V) {
                            if (z8T ? u1V > H2T : u1V < H2T) {
                                Q8T[a2T].push(u1V);
                            }
                        });
                    }
                    if (W1V === g1V) {
                        x73(c2T).each(function(k1V, K1V) {
                            if (z8T ? K1V < J2T : K1V > J2T) {
                                Q8T[a2T].push(K1V);
                            }
                        });
                    }
                    x73.each(L2T.invalid, function(r1V, O1V) {
                        l8T = G2T(q2T(O1V, i2T, w8T));
                        if ((j8T[0] === l8T[0] || j8T[1] === 0 && l8T[1] === 0 && l8T[2] === 0) && j8T[1] === l8T[1]) {
                            Q8T[a2T].push(l8T[2]);
                        }
                    });
                }
                return {
                    disabled: Q8T,
                    valid: x8T
                };
            }
        };
    };
    j73.presetShort('measurement');
    var C1C = j73.presets.scroller;
    var q5C = {
        min: 0,
        max: 100,
        defaultUnit: 'km',
        units: ['m', 'km', 'in', 'ft', 'yd', 'mi']
    };
    var N1C = {
        mm: 0.001,
        cm: 0.01,
        dm: 0.1,
        m: 1,
        dam: 10,
        hm: 100,
        km: 1000,
        'in': 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        ch: 20.1168,
        fur: 201.168,
        mi: 1609.344,
        lea: 4828.032
    };
    j73.presetShort('distance');
    C1C.distance = function(t1V) {
        var T1V = Q73({}, q5C, t1V.settings);
        Q73(t1V.settings, T1V, {
            sign: false,
            convert: function a1V(i1V, E1V, C1V) {
                return i1V * N1C[E1V] / N1C[C1V];
            }
        });
        return C1C.measurement.call(this, t1V);
    };
    var q1C = j73.presets.scroller;
    var d5C = {
        min: 0,
        max: 100,
        defaultUnit: 'N',
        units: ['N', 'kp', 'lbf', 'pdl']
    };
    var U1C = {
        N: 1,
        kp: 9.80665,
        lbf: 4.448222,
        pdl: 0.138255
    };
    j73.presetShort('force');
    q1C.force = function(N1V) {
        var q1V = Q73({}, d5C, N1V.settings);
        Q73(N1V.settings, q1V, {
            sign: false,
            convert: function U1V(Z1V, d1V, o1V) {
                return Z1V * U1C[d1V] / U1C[o1V];
            }
        });
        return q1C.measurement.call(this, N1V);
    };
    var Z1C = j73.presets.scroller;
    var h5C = {
        min: 0,
        max: 1000,
        defaultUnit: 'kg',
        units: ['g', 'kg', 'oz', 'lb'],
        unitNames: {
            tlong: 't (long)',
            tshort: 't (short)'
        }
    };
    var d1C = {
        mg: 0.001,
        cg: 0.01,
        dg: 0.1,
        g: 1,
        dag: 10,
        hg: 100,
        kg: 1000,
        t: 1000000,
        drc: 1.7718452,
        oz: 28.3495,
        lb: 453.59237,
        st: 6350.29318,
        qtr: 12700.58636,
        cwt: 50802.34544,
        tlong: 1016046.9088,
        tshort: 907184.74
    };
    j73.presetShort('mass');
    Z1C.mass = function(V1V) {
        var h1V = Q73({}, h5C, V1V.settings);
        Q73(V1V.settings, h1V, {
            sign: false,
            convert: function G1V(S1V, p1V, m1V) {
                return S1V * d1C[p1V] / d1C[m1V];
            }
        });
        return Z1C.measurement.call(this, V1V);
    };
    var o1C = j73.presets.scroller;
    var p5C = {
        min: 0,
        max: 100,
        defaultUnit: 'kph',
        units: ['kph', 'mph', 'mps', 'fps', 'knot'],
        unitNames: {
            kph: 'km/h',
            mph: 'mi/h',
            mps: 'm/s',
            fps: 'ft/s',
            knot: 'knot'
        }
    };
    var V1C = {
        kph: 1,
        mph: 1.60934,
        mps: 3.6,
        fps: 1.09728,
        knot: 1.852
    };
    j73.presetShort('speed');
    o1C.speed = function(e1V) {
        var c1V = Q73({}, p5C, e1V.settings);
        Q73(e1V.settings, c1V, {
            sign: false,
            convert: function Y1V(J1V, v1V, b1V) {
                return J1V * V1C[v1V] / V1C[b1V];
            }
        });
        return o1C.measurement.call(this, e1V);
    };
    var h1C = j73.presets.scroller;
    var c5C = {
        min: -20,
        max: 40,
        defaultUnit: 'c',
        units: ['c', 'k', 'f', 'r'],
        unitNames: {
            c: '°C',
            k: 'K',
            f: '°F',
            r: '°R'
        }
    };
    var Y5C = {
        c2k: function H1V(D1V) {
            return D1V + 273.15;
        },
        c2f: function M1V(F1V) {
            return F1V * 9 / 5 + 32;
        },
        c2r: function x1V(j1V) {
            return (j1V + 273.15) * 9 / 5;
        },
        k2c: function Q1V(w1V) {
            return w1V - 273.15;
        },
        k2f: function s1V(z1V) {
            return z1V * 9 / 5 - 459.67;
        },
        k2r: function l1V(A5V) {
            return A5V * 9 / 5;
        },
        f2c: function X5V(f5V) {
            return (f5V - 32) * 5 / 9;
        },
        f2k: function I5V(L5V) {
            return (L5V + 459.67) * 5 / 9;
        },
        f2r: function W5V(n5V) {
            return n5V + 459.67;
        },
        r2c: function g5V(B5V) {
            return (B5V - 491.67) * 5 / 9;
        },
        r2k: function y5V(P5V) {
            return P5V * 5 / 9;
        },
        r2f: function u5V(R5V) {
            return R5V - 459.67;
        }
    };
    j73.presetShort('temperature');
    h1C.temperature = function(K5V) {
        var k5V = Q73({}, c5C, K5V.settings);
        Q73(K5V.settings, k5V, {
            sign: true,
            convert: function O5V(r5V, t5V, T5V) {
                return Y5C[t5V + '2' + T5V](r5V);
            }
        });
        return h1C.measurement.call(this, K5V);
    };
    var G1C = j73.classes;
    var v5C = 1;
    var S1C = function a5V(Y5V, A6V) {
        function D5V(I6V) {
            clearTimeout(z5V);
            z5V = setTimeout(function() {
                F5V(I6V.type !== 'load');
            }, 200);
        }

        function m5V(L6V, g6V) {
            if (!L6V.length) {
                return;
            }
            var B6V = L6V.offset().left,
                W6V = L6V[0].offsetLeft,
                n6V = L6V[0].offsetWidth,
                y6V = N5V.offset().left;
            U5V = L6V;
            if (g6V === undefined) {
                g6V = !h5V;
            }
            if (H5V && g6V) {
                if (h5V) {
                    if (L6V.attr('data-selected') == 'true') {
                        e5V(L6V);
                    } else {
                        x5V(L6V);
                    }
                } else {
                    e5V(x73('.mbsc-ms-item-sel', q5V));
                    x5V(L6V);
                }
            }
            if (S5V) {
                W6V = p5V - W6V - n6V;
            }
            if (s5V == 'a') {
                if (B6V < y6V) {
                    o5V.scroll(S5V ? W6V + n6V - C5V : -W6V, v5V, true);
                } else if (B6V + n6V > y6V + C5V) {
                    o5V.scroll(S5V ? W6V : C5V - W6V - n6V, v5V, true);
                }
            } else {
                o5V.scroll(C5V / 2 - W6V - n6V / 2, v5V, true);
            }
            if (g6V) {
                Z5V('onItemTap', {
                    target: L6V[0]
                });
            }
        }

        function x5V(P6V) {
            P6V.addClass(c5V).attr('data-selected', 'true').attr('aria-selected', 'true');
        }

        function e5V(u6V) {
            u6V.removeClass(c5V).removeAttr('data-selected').removeAttr('aria-selected');
        }

        function G5V(R6V) {
            if ((typeof R6V === 'undefined' ? 'undefined' : q23(R6V)) !== 'object') {
                R6V = q5V.children('[data-id="' + R6V + '"]');
            }
            return x73(R6V);
        }

        function X6V() {
            if (V5V && V5V != 'inline') {
                b5V.find('.mbsc-page').css('padding-' + V5V, '');
            }
        }

        function f6V() {
            var K6V, k6V;
            q5V.find('.mbsc-ripple').remove();
            q5V.children().each(function(E6V) {
                var a6V, O6V = x73(this),
                    t6V = H5V && O6V.attr('data-selected') == 'true',
                    i6V = O6V.attr('data-disabled') == 'true',
                    T6V = O6V.attr('data-icon'),
                    r6V = O6V.attr('data-ref');
                if (!r6V) {
                    r6V = v5C++;
                }
                if (E6V === 0) {
                    j5V = O6V;
                }
                if (H5V && !h5V && t6V) {
                    U5V = O6V;
                }
                if (T6V) {
                    K6V = true;
                }
                if (O6V.text()) {
                    k6V = true;
                }
                a6V = 'mbsc-ms-item ' + (E5V.itemClass || '') + (E5V.tapHighlight ? ' mbsc-btn-e' : '') + (t6V ? c5V : '') + (i6V ? ' mbsc-btn-d ' + (E5V.disabledClass || '') : '') + (T6V ? ' mbsc-ms-ic mbsc-ic mbsc-ic-' + T6V : '');
                O6V.attr('data-ref', r6V).attr('data-role', 'button').attr('aria-selected', t6V ? 'true' : 'false').attr('aria-disabled', i6V ? 'true' : 'false').removeClass(J5V[r6V]).addClass(a6V);
                J5V[r6V] = a6V;
            });
            if (K6V) {
                N5V.addClass('mbsc-ms-icons');
            } else {
                N5V.removeClass('mbsc-ms-icons');
            }
            if (k6V) {
                N5V.addClass('mbsc-ms-txt');
            } else {
                N5V.removeClass('mbsc-ms-txt');
            }
        }

        function F5V(q6V, U6V) {
            var C6V = E5V.itemWidth,
                N6V = E5V.layout;
            i5V.contWidth = C5V = N5V.width();
            if (q6V && l5V === C5V || !C5V) {
                return;
            }
            l5V = C5V;
            if (j73.util.isNumeric(N6V)) {
                d5V = C5V ? C5V / N6V : C6V;
                if (d5V < C6V) {
                    N6V = 'liquid';
                }
            }
            if (C6V) {
                if (N6V == 'liquid') {
                    d5V = C5V ? C5V / Math.min(Math.floor(C5V / C6V), q5V.children().length) : C6V;
                } else if (N6V == 'fixed') {
                    d5V = C6V;
                }
            }
            if (d5V) {
                q5V.children().css('width', d5V + 'px');
            }
            if (V5V != 'inline') {
                b5V.find('.mbsc-page').css('padding-' + V5V, Y5V.offsetHeight + 'px');
            }
            i5V.totalWidth = p5V = Y5V.offsetWidth;
            Q73(o5V.settings, {
                contSize: C5V,
                maxSnapScroll: E5V.paging ? 1 : false,
                maxScroll: 0,
                minScroll: p5V > C5V ? C5V - p5V : 0,
                snap: E5V.paging ? C5V : E5V.snap ? d5V || '.mbsc-ms-item' : false,
                elastic: p5V > C5V ? d5V || C5V : false
            });
            o5V.refresh(U6V);
        }
        var U5V, N5V, b5V, j5V, Q5V, M5V, C5V, V5V, d5V, h5V, l5V, z5V, S5V, H5V, c5V, o5V, s5V, E5V, p5V, w5V, Z5V, J5V = {},
            v5V = 1000,
            i5V = this,
            q5V = x73(Y5V);
        G1C.Base.call(this, Y5V, A6V, true);
        i5V.navigate = function(Z6V, d6V) {
            m5V(G5V(Z6V), d6V);
        };
        i5V.next = function(V6V) {
            var o6V = U5V ? U5V.next() : j5V;
            if (o6V.length) {
                U5V = o6V;
                m5V(U5V, V6V);
            }
        };
        i5V.prev = function(G6V) {
            var h6V = U5V ? U5V.prev() : j5V;
            if (h6V.length) {
                U5V = h6V;
                m5V(U5V, G6V);
            }
        };
        i5V.select = function(S6V) {
            if (!h5V) {
                e5V(x73('.mbsc-ms-item-sel', q5V));
            }
            x5V(G5V(S6V));
        };
        i5V.deselect = function(p6V) {
            e5V(G5V(p6V));
        };
        i5V.enable = function(m6V) {
            G5V(m6V).removeClass('mbsc-btn-d').removeAttr('data-disabled').removeAttr('aria-disabled');
        };
        i5V.disable = function(e6V) {
            G5V(e6V).addClass('mbsc-btn-d').attr('data-disabled', 'true').attr('aria-disabled', 'true');
        };
        i5V.refresh = i5V.position = function(c6V) {
            f6V();
            F5V(false, c6V);
        };
        i5V._init = function() {
            b5V = x73(E5V.context);
            Q5V = x73(E5V.context == 'body' ? window : E5V.context);
			
            X6V();
            V5V = E5V.display;
            S5V = E5V.rtl;

            H5V = E5V.select != 'off';
            h5V = E5V.select == 'multiple';
            c5V = ' mbsc-ms-item-sel ' + (E5V.activeClass || '');
			
            M5V = 'mbsc-ms-c' + ' mbsc-ms-' + E5V.variant + ' mbsc-ms-' + E5V.display + ' mbsc-' + E5V.theme + ' ' + (E5V.baseTheme ? ' mbsc-' + E5V.baseTheme : '') + ' ' + (E5V.cssClass || '') + ' ' + (E5V.wrapperClass || '') + (E5V.rtl ? ' mbsc-ms-rtl' : ' mbsc-ms-ltr') + (E5V.itemWidth ? ' mbsc-ms-hasw' : '') + (E5V.context == 'body' ? '' : ' mbsc-ms-ctx') + (H5V ? '' : ' mbsc-ms-nosel');
            if (!N5V) {
                N5V = x73('<div class="' + M5V + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(q5V);
                N5V.find('.mbsc-ms-sc').append(q5V);
                o5V = new X83(N5V[0], {
                    axis: 'X',
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: S5V,
                    mousewheel: E5V.mousewheel,
                    thresholdX: E5V.threshold,
                    onStart: function Y6V(J6V) {
                        if (!w5V && J6V.domEvent.type == 'touchstart') {
                            w5V = true;
                            b5V.find('.mbsc-no-touch').removeClass('mbsc-no-touch');
                        }
                    },
                    onBtnTap: function v6V(b6V) {
                        m5V(x73(b6V.target), true);
                    },
                    onGestureStart: function H6V(D6V) {
                        Z5V('onGestureStart', D6V);
                    },
                    onGestureEnd: function M6V(F6V) {
                        Z5V('onGestureEnd', F6V);
                    },
                    onMove: function x6V(j6V) {
                        Z5V('onMove', j6V);
                    },
                    onAnimationStart: function Q6V(w6V) {
                        Z5V('onAnimationStart', w6V);
                    },
                    onAnimationEnd: function s6V(z6V) {
                        Z5V('onAnimationEnd', z6V);
                    }
                });
            } else {
                N5V.attr('class', M5V);
                q5V.off('.mbsc-ripple');
            }
            q5V.css('display', '').addClass('mbsc-ms ' + (E5V.groupClass || ''));
            f6V();
            Z5V('onMarkupReady', {
                target: N5V[0]
            });
            F5V();
            N5V.find('img').on('load', D5V);
            Q5V.on('orientationchange resize', D5V);
        };
        i5V._destroy = function() {
            X6V();
            Q5V.off('orientationchange resize', D5V);
            q5V.removeClass('mbsc-ms mbsc-ms-a mbsc-ms-b').insertAfter(N5V).find('.mbsc-ms-item').each(function() {
                var l6V = x73(this);
                l6V.width('').removeClass(J5V[l6V.attr('data-ref')]);
            });
            N5V.remove();
            o5V.destroy();
        };
        E5V = i5V.settings;
        Z5V = i5V.trigger;
        i5V.init(A6V);
    };
    S1C.prototype = {
        _class: 'menustrip',
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _defaults: {
            context: 'body',
            type: 'options',
            display: 'inline',
            layout: 'liquid',
            tapHighlight: true
        }
    };
    G1C.MenuStrip = S1C;
    j73.presetShort('menustrip', 'MenuStrip');
    j73.presets.scroller.number = j73.presets.scroller.measurement;
    j73.presetShort('number');
    var J23 = j73.util;
    var F23 = j73.presets.numpad;
    var M5C = J23.testTouch;
    var M23 = J23.getCoord;
    var x5C = J23.isNumeric;
    var c1C = function A0V() {};
    var Y1C = function X0V(P0V, J0V, D0V) {
        function R0V(x0V) {
            var M0V, F0V = I0V.validate.call(P0V, {
                    values: L0V.slice(0),
                    variables: n0V
                }, f0V) || [],
                j0V = F0V && F0V.disabled || [];
            f0V._isValid = F0V.invalid ? false : true;
            f0V._tempValue = I0V.formatValue.call(P0V, L0V.slice(0), n0V, f0V);
            g0V = L0V.length;
            E0V = F0V.length || B0V;
            if (f0V._isVisible) {
                x73('.mbsc-np-ph', y0V).each(function(Q0V) {
                    x73(this).html(I0V.fill == 'ltr' ? Q0V >= g0V ? t0V : K0V || L0V[Q0V] : Q0V >= B0V - E0V ? Q0V + g0V < B0V ? t0V : K0V || L0V[Q0V + g0V - B0V] : '');
                });
                x73('.mbsc-np-cph', y0V).each(function() {
                    x73(this).html(n0V[x73(this).attr('data-var')] || x73(this).attr('data-ph'));
                });
                if (g0V === B0V) {
                    for (M0V = 0; M0V <= 9; M0V++) {
                        j0V.push(M0V);
                    }
                }
                x73('.mbsc-np-btn', y0V).removeClass(k0V);
                for (M0V = 0; M0V < j0V.length; M0V++) {
                    x73('.mbsc-np-btn[data-val="' + j0V[M0V] + '"]', y0V).addClass(k0V);
                }
                if (f0V._isValid) {
                    x73('.mbsc-fr-btn-s .mbsc-fr-btn', y0V).removeClass(k0V);
                } else {
                    x73('.mbsc-fr-btn-s .mbsc-fr-btn', y0V).addClass(k0V);
                }
                if (f0V.live) {
                    f0V._hasValue = x0V || f0V._hasValue;
                    O0V(x0V, false, x0V);
                    if (x0V) {
                        C0V('onSet', {
                            valueText: f0V._value
                        });
                    }
                }
            }
        }

        function O0V(s0V, z0V, w0V, l0V) {
            if (z0V) {
                R0V();
            }
            if (!l0V) {
                T0V = L0V.slice(0);
                U0V = Q73({}, n0V);
                d0V = W0V.slice(0);
                f0V._value = f0V._hasValue ? f0V._tempValue : null;
            }
            if (s0V) {
                if (f0V._isInput) {
                    u0V.val(f0V._hasValue && f0V._isValid ? f0V._value : '');
                }
                C0V('onFill', {
                    valueText: f0V._hasValue ? f0V._tempValue : '',
                    change: w0V
                });
                if (w0V) {
                    f0V._preventChange = true;
                    u0V.trigger('change');
                }
            }
        }

        function e0V(L4V) {
            var A4V, f4V, X4V = L4V || [],
                I4V = [];
            W0V = [];
            n0V = {};
            for (A4V = 0; A4V < X4V.length; A4V++) {
                if (/:/.test(X4V[A4V])) {
                    f4V = X4V[A4V].split(':');
                    n0V[f4V[0]] = f4V[1];
                    W0V.push(f4V[0]);
                } else {
                    I4V.push(X4V[A4V]);
                    W0V.push('digit');
                }
            }
            return I4V;
        }

        function o0V(W4V, n4V) {
            if (!g0V && !n4V && !I0V.allowLeadingZero || W4V.hasClass('mbsc-fr-btn-d') || W4V.hasClass('mbsc-np-btn-empty')) {
                return;
            }
            if (g0V < B0V) {
                W0V.push('digit');
                L0V.push(n4V);
                R0V(true);
            }
        }

        function Y0V(P4V) {
            var B4V, g4V, y4V = P4V.attr('data-val'),
                R4V = P4V.attr('data-track') !== 'false',
                u4V = P4V.attr('data-var');
            if (!P4V.hasClass('mbsc-fr-btn-d')) {
                if (u4V) {
                    g4V = u4V.split(':');
                    if (R4V) {
                        W0V.push(g4V[0]);
                    }
                    n0V[g4V[0]] = g4V[2] === undefined ? g4V[1] : n0V[g4V[0]] == g4V[1] ? g4V[2] : g4V[1];
                }
                if (y4V.length + g0V <= E0V) {
                    for (B4V = 0; B4V < y4V.length; ++B4V) {
                        g4V = x5C(y4V[B4V]) ? +y4V[B4V] : y4V[B4V];
                        if (I0V.allowLeadingZero || g0V || g4V) {
                            W0V.push('digit');
                            L0V.push(g4V);
                            g0V = L0V.length;
                        }
                    }
                }
                R0V(true);
            }
        }

        function q0V() {
            var k4V, O4V, K4V = W0V.pop();
            if (g0V || K4V !== 'digit') {
                if (K4V !== 'digit' && n0V[K4V]) {
                    delete n0V[K4V];
                    O4V = W0V.slice(0);
                    W0V = [];
                    for (k4V = 0; k4V < O4V.length; k4V++) {
                        if (O4V[k4V] !== K4V) {
                            W0V.push(O4V[k4V]);
                        }
                    }
                } else {
                    L0V.pop();
                }
                R0V(true);
            }
        }

        function b0V(r4V) {
            a0V = true;
            m0V = M23(r4V, 'X');
            p0V = M23(r4V, 'Y');
            clearInterval(i0V);
            clearTimeout(i0V);
            q0V();
            i0V = setInterval(function() {
                q0V();
            }, 150);
        }

        function v0V() {
            clearInterval(i0V);
            a0V = false;
        }

        function H0V(t4V) {
            if (M5C(t4V, this)) {
                if (t4V.type == 'keydown' && t4V.keyCode != 32) {
                    return;
                }
                b0V(t4V);
                if (t4V.type == 'mousedown') {
                    x73(document).on('mousemove', N0V).on('mouseup', Z0V);
                }
            }
        }

        function N0V(T4V) {
            if (a0V) {
                S0V = M23(T4V, 'X');
                h0V = M23(T4V, 'Y');
                c0V = S0V - m0V;
                V0V = h0V - p0V;
                if (Math.abs(c0V) > 7 || Math.abs(V0V) > 7) {
                    v0V();
                }
            }
        }

        function Z0V(a4V) {
            if (a0V) {
                a4V.preventDefault();
                v0V();
                if (a4V.type == 'mouseup') {
                    x73(document).off('mousemove', N0V).off('mouseup', Z0V);
                }
            }
        }
        var y0V, k0V, t0V, g0V, I0V, K0V, m0V, p0V, S0V, h0V, c0V, V0V, a0V, i0V, L0V, E0V, C0V, B0V, T0V, u0V = x73(P0V),
            f0V = this,
            d0V = [],
            W0V = [],
            n0V = {},
            U0V = {},
            G0V = {
                107: '+',
                109: '-'
            },
            r0V = {
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9,
                96: 0,
                97: 1,
                98: 2,
                99: 3,
                100: 4,
                101: 5,
                102: 6,
                103: 7,
                104: 8,
                105: 9
            };
        n23.call(this, P0V, J0V, true);
        f0V.setVal = f0V._setVal = function(i4V, E4V, C4V, N4V) {
            f0V._hasValue = i4V !== null && i4V !== undefined;
            L0V = e0V(x73.isArray(i4V) ? i4V.slice(0) : I0V.parseValue.call(P0V, i4V, f0V));
            O0V(E4V, true, C4V === undefined ? E4V : C4V, N4V);
        };
        f0V.getVal = f0V._getVal = function(q4V) {
            return f0V._hasValue || q4V ? f0V[q4V ? '_tempValue' : '_value'] : null;
        };
        f0V.setArrayVal = f0V.setVal;
        f0V.getArrayVal = function(U4V) {
            return U4V ? L0V.slice(0) : f0V._hasValue ? T0V.slice(0) : null;
        };
        f0V._readValue = function() {
            var Z4V = u0V.val() || '';
            if (Z4V !== '') {
                f0V._hasValue = true;
            }
            if (K0V) {
                n0V = {};
                W0V = [];
                L0V = [];
            } else {
                n0V = f0V._hasValue ? U0V : {};
                W0V = f0V._hasValue ? d0V : [];
                L0V = f0V._hasValue && T0V ? T0V.slice(0) : e0V(I0V.parseValue.call(P0V, Z4V, f0V));
                O0V(false, true);
            }
        };
        f0V._fillValue = function() {
            f0V._hasValue = true;
            O0V(true, false, true);
        };
        f0V._generateContent = function() {
            var G4V, S4V, V4V, o4V = 1,
                h4V = '',
                d4V = '';
            d4V += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + I0V.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + I0V.deleteIcon + '"></div><div class="mbsc-np-dsp">';
            h4V = I0V.template.replace(/d/g, '<span class="mbsc-np-ph">' + t0V + '</span>').replace(/&#100;/g, 'd');
            h4V = h4V.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
            d4V += h4V;
            d4V += '</div></div>';
            d4V += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
            for (G4V = 0; G4V < 4; G4V++) {
                d4V += '<div class="mbsc-np-row">';
                for (S4V = 0; S4V < 3; S4V++) {
                    V4V = o4V;
                    if (o4V == 10 || o4V == 12) {
                        V4V = '';
                    } else if (o4V == 11) {
                        V4V = 0;
                    }
                    if (V4V === '') {
                        if (o4V == 10 && I0V.leftKey) {
                            d4V += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (I0V.leftKey.variable ? 'data-var="' + I0V.leftKey.variable + '"' : '') + ' data-val="' + (I0V.leftKey.value || '') + '" ' + (I0V.leftKey.track !== undefined ? ' data-track="' + I0V.leftKey.track + '"' : '') + '>' + I0V.leftKey.text + '</div>';
                        } else if (o4V == 12 && I0V.rightKey) {
                            d4V += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (I0V.rightKey.variable ? 'data-var="' + I0V.rightKey.variable + '"' : '') + ' data-val="' + (I0V.rightKey.value || '') + '" ' + (I0V.rightKey.track !== undefined ? ' data-track="' + I0V.rightKey.track + '"' : '') + ' >' + I0V.rightKey.text + '</div>';
                        } else {
                            d4V += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>';
                        }
                    } else {
                        d4V += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + V4V + '">' + V4V + '</div>';
                    }
                    o4V++;
                }
                d4V += '</div>';
            }
            d4V += '</div></div>';
            return d4V;
        };
        f0V._markupReady = function() {
            y0V = f0V._markup;
            R0V();
        };
        f0V._attachEvents = function(p4V) {
            p4V.on('keydown', function(m4V) {
                var e4V;
                if (G0V[m4V.keyCode] !== undefined) {
                    e4V = x73('.mbsc-np-btn[data-var="sign:-:"]', p4V);
                    if (e4V.length) {
                        n0V.sign = m4V.keyCode == 107 ? '-' : '';
                        Y0V(e4V);
                    }
                } else if (r0V[m4V.keyCode] !== undefined) {
                    o0V(x73('.mbsc-np-btn[data-val="' + r0V[m4V.keyCode] + '"]', p4V), r0V[m4V.keyCode]);
                } else if (m4V.keyCode == 8) {
                    m4V.preventDefault();
                    q0V();
                }
            });
            f0V.tap(x73('.mbsc-np-btn', p4V), function() {
                var c4V = x73(this);
                if (c4V.hasClass('mbsc-np-btn-custom')) {
                    Y0V(c4V);
                } else {
                    o0V(c4V, +c4V.attr('data-val'));
                }
            }, false, 30, true);
            x73('.mbsc-np-del', p4V).on('touchstart mousedown keydown', H0V).on('touchmove mousemove', N0V).on('touchend mouseup keyup', Z0V);
        };
        f0V.__init = function() {
            I0V = f0V.settings;
            I0V.cssClass = (I0V.cssClass || '') + ' mbsc-np';
            I0V.template = I0V.template.replace(/\\d/, '&#100;');
            t0V = I0V.placeholder;
            B0V = (I0V.template.match(/d/g) || []).length;
            k0V = 'mbsc-fr-btn-d ' + (I0V.disabledClass || '');
            K0V = I0V.mask;
            C0V = f0V.trigger;
            if (K0V && u0V.is('input')) {
                u0V.attr('type', 'password');
            }
        };
        f0V._indexOf = function(J4V, v4V) {
            var Y4V;
            for (Y4V = 0; Y4V < J4V.length; ++Y4V) {
                if (J4V[Y4V].toString() === v4V.toString()) {
                    return Y4V;
                }
            }
            return -1;
        };
        if (!D0V) {
            f0V.init(J0V);
        }
    };
    Y1C.prototype = {
        _hasDef: true,
        _hasTheme: true,
        _hasLang: true,
        _hasPreset: true,
        _class: 'numpad',
        _defaults: Q73({}, n23.prototype._defaults, {
            template: 'dd.dd',
            placeholder: '0',
            deleteIcon: 'backspace',
            allowLeadingZero: false,
            headerText: false,
            fill: 'rtl',
            deleteText: 'Delete',
            decimalSeparator: '.',
            thousandsSeparator: ',',
            validate: c1C,
            parseValue: c1C,
            formatValue: function b4V(s4V, l4V, z4V) {
                var D4V, F4V = 1,
                    Q4V = z4V.settings,
                    w4V = Q4V.placeholder,
                    x4V = Q4V.template,
                    j4V = s4V.length,
                    M4V = x4V.length,
                    H4V = '';
                for (D4V = 0; D4V < M4V; D4V++) {
                    if (x4V[M4V - D4V - 1] == 'd') {
                        if (F4V <= j4V) {
                            H4V = s4V[j4V - F4V] + H4V;
                        } else {
                            H4V = w4V + H4V;
                        }
                        F4V++;
                    } else {
                        H4V = x4V[M4V - D4V - 1] + H4V;
                    }
                }
                x73.each(l4V, function(A3V, X3V) {
                    H4V = H4V.replace('{' + A3V + '}', X3V);
                });
                return x73('<div>' + H4V + '</div>').text();
            }
        })
    };
    j73.classes.Numpad = Y1C;
    j73.themes.numpad = j73.themes.frame;
    j73.presetShort('numpad', 'Numpad', false);
    var w5C = {
        min: 0,
        max: 99.99,
        scale: 2,
        prefix: '',
        suffix: '',
        returnAffix: false
    };
    F23.decimal = function(I3V) {
        function L3V(u3V, R3V) {
            var y3V, P3V = u3V.slice(0),
                B3V = 0;
            while (P3V.length) {
                B3V = B3V * 10 + P3V.shift();
            }
            for (y3V = 0; y3V < f3V.scale; y3V++) {
                B3V /= 10;
            }
            return R3V ? B3V * -1 : B3V;
        }

        function n3V(k3V) {
            var K3V = L3V(k3V).toFixed(f3V.scale).replace('.', f3V.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, f3V.thousandsSeparator);
            return K3V;
        }
        var g3V = Q73({}, I3V.settings),
            f3V = Q73(I3V.settings, w5C, g3V),
            W3V = f3V.min < 0;
        I3V.getVal = function(t3V) {
            var O3V = I3V._getVal(t3V),
                r3V = (O3V + '').replace(f3V.decimalSeparator, '.').replace(f3V.thousandsSeparator, '');
            return J23.isNumeric(r3V) ? +r3V : O3V;
        };
        return {
            template: (W3V ? '{sign}' : '') + f3V.prefix.replace(/d/g, '\\d') + Array((Math.floor(Math.max(f3V.max, Math.abs(f3V.min))) + '').length + 1).join('d') + (f3V.scale ? '.' + Array(f3V.scale + 1).join('d') : '') + f3V.suffix.replace(/d/g, '\\d'),
            leftKey: W3V ? {
                text: '-/+',
                variable: 'sign:-:',
                track: false
            } : undefined,
            parseValue: function T3V(N3V) {
                var i3V, a3V, C3V = N3V || f3V.defaultValue,
                    E3V = [];
                if (C3V) {
                    C3V = (C3V + '').replace(f3V.decimalSeparator, '.').replace(f3V.thousandsSeparator, '');
                    a3V = C3V.match(/\d+\.?\d*/g);
                    if (a3V) {
                        a3V = (+a3V[0]).toFixed(f3V.scale);
                        for (i3V = 0; i3V < a3V.length; i3V++) {
                            if (a3V[i3V] != '.') {
                                if (+a3V[i3V]) {
                                    E3V.push(+a3V[i3V]);
                                } else if (E3V.length) {
                                    E3V.push(0);
                                }
                            }
                        }
                    }
                }
                if (N3V < 0) {
                    E3V.push('sign:' + '-');
                }
                return E3V;
            },
            formatValue: function q3V(Z3V, d3V) {
                var U3V = n3V(Z3V),
                    o3V = L3V(Z3V, d3V && d3V.sign == '-');
                return (o3V < 0 ? '-' : '') + (f3V.returnAffix ? f3V.prefix + U3V + f3V.suffix : U3V);
            },
            validate: function V3V(h3V) {
                var G3V = h3V.values,
                    m3V = n3V(G3V),
                    S3V = L3V(G3V, h3V.variables && h3V.variables.sign == '-'),
                    p3V = [];
                if (!G3V.length && !f3V.allowLeadingZero) {
                    p3V.push(0);
                }
                if (I3V.isVisible()) {
                    x73('.mbsc-np-dsp', I3V._markup).html((h3V.variables.sign || '') + f3V.prefix + m3V + f3V.suffix);
                }
                return {
                    disabled: p3V,
                    invalid: S3V > f3V.max || S3V < f3V.min || (f3V.invalid ? I3V._indexOf(f3V.invalid, S3V) != -1 : false)
                };
            }
        };
    };
    var v1C = ['h', 'm', 's'];
    var l5C = {
        min: 0,
        max: 362439,
        defaultValue: 0,
        hourTextShort: 'h',
        minuteTextShort: 'm',
        secTextShort: 's'
    };
    F23.timespan = function(b3V) {
        function M3V(w3V) {
            var j3V, x3V = '',
                Q3V = 60 * 60;
            x73(v1C).each(function(z3V, s3V) {
                j3V = Math.floor(w3V / Q3V);
                w3V -= j3V * Q3V;
                Q3V /= 60;
                if (j3V > 0 || s3V == 's' && !x3V) {
                    x3V = x3V + (x3V ? ' ' : '') + j3V + D3V[s3V];
                }
            });
            return x3V;
        }
        var F3V = Q73({}, b3V.settings),
            v3V = Q73(b3V.settings, l5C, F3V),
            D3V = {
                h: v3V.hourTextShort.replace(/d/g, '\\d'),
                m: v3V.minuteTextShort.replace(/d/g, '\\d'),
                s: v3V.secTextShort.replace(/d/g, '\\d')
            },
            H3V = 'd<span class="mbsc-np-sup mbsc-np-time">' + D3V.s + '</span>';
        if (v3V.max > 9) {
            H3V = 'd' + H3V;
        }
        if (v3V.max > 99) {
            H3V = '<span class="mbsc-np-ts-m">' + (v3V.max > 639 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + D3V.m + '</span>' + H3V;
        }
        if (v3V.max > 6039) {
            H3V = '<span class="mbsc-np-ts-h">' + (v3V.max > 38439 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + D3V.h + '</span>' + H3V;
        }
        b3V.setVal = function(l3V, A9V, X9V, f9V) {
            if (J23.isNumeric(l3V)) {
                l3V = M3V(l3V);
            }
            return b3V._setVal(l3V, A9V, X9V, f9V);
        };
        b3V.getVal = function(I9V) {
            return b3V._hasValue || I9V ? J1C(b3V.getArrayVal(I9V)) : null;
        };
        return {
            template: H3V,
            parseValue: function L9V(B9V) {
                var n9V, g9V = B9V || M3V(v3V.defaultValue),
                    W9V = [];
                if (g9V) {
                    x73(v1C).each(function(P9V, y9V) {
                        n9V = new RegExp('(\\d+)' + D3V[y9V], 'gi').exec(g9V);
                        if (n9V) {
                            n9V = +n9V[1];
                            if (n9V > 9) {
                                W9V.push(Math.floor(n9V / 10));
                                W9V.push(n9V % 10);
                            } else {
                                if (W9V.length) {
                                    W9V.push(0);
                                }
                                if (n9V || W9V.length) {
                                    W9V.push(n9V);
                                }
                            }
                        } else if (W9V.length) {
                            W9V.push(0);
                            W9V.push(0);
                        }
                    });
                }
                return W9V;
            },
            formatValue: function u9V(R9V) {
                return M3V(J1C(R9V));
            },
            validate: function K9V(t9V) {
                var O9V = t9V.values,
                    k9V = J1C(O9V.slice(0)),
                    r9V = [];
                if (!O9V.length) {
                    r9V.push(0);
                }
                return {
                    disabled: r9V,
                    invalid: k9V > v3V.max || k9V < v3V.min || (v3V.invalid ? b3V._indexOf(v3V.invalid, +k9V) != -1 : false)
                };
            }
        };
    };
    var A6C = {
        timeFormat: 'hh:ii A',
        amText: 'am',
        pmText: 'pm'
    };
    F23.time = function(h9V) {
        function S9V(e9V, Y9V) {
            var m9V, c9V = '';
            for (m9V = 0; m9V < e9V.length; ++m9V) {
                c9V += e9V[m9V] + (m9V % 2 == (e9V.length % 2 == 1 ? 0 : 1) && m9V != e9V.length - 1 ? ':' : '');
            }
            x73.each(Y9V, function(v9V, J9V) {
                c9V += ' ' + J9V;
            });
            return c9V;
        }

        function p9V(H9V) {
            var b9V, F9V, M9V, w9V, s9V, A7V, x9V, j9V, z9V, l9V, D9V = [],
                Q9V = 2 * U9V.length;
            V9V = Q9V;
            if (!H9V.length) {
                if (a9V) {
                    D9V.push(0);
                    D9V.push(T9V.leftKey.value);
                }
                D9V.push(T9V.rightKey.value);
            }
            if (!a9V && (Q9V - H9V.length < 2 || H9V[0] != 1 && (H9V[0] > 2 || H9V[1] > 3) && Q9V - H9V.length <= 2)) {
                D9V.push('30');
                D9V.push('00');
            }
            if ((a9V ? H9V[0] > 1 || H9V[1] > 2 : H9V[0] != 1 && (H9V[0] > 2 || H9V[1] > 3)) && H9V[0]) {
                H9V.unshift(0);
                V9V = Q9V - 1;
            }
            if (H9V.length == Q9V) {
                for (b9V = 0; b9V <= 9; ++b9V) {
                    D9V.push(b9V);
                }
            } else if (H9V.length == 1 && a9V && H9V[0] == 1 || H9V.length && H9V.length % 2 === 0 || !a9V && H9V[0] == 2 && H9V[1] > 3 && H9V.length % 2 == 1) {
                for (b9V = 6; b9V <= 9; ++b9V) {
                    D9V.push(b9V);
                }
            }
            z9V = H9V[1] !== undefined ? '' + H9V[0] + H9V[1] : '';
            l9V = +C9V == +(H9V[3] !== undefined ? '' + H9V[2] + H9V[3] : '');
            if (T9V.invalid) {
                for (b9V = 0; b9V < T9V.invalid.length; ++b9V) {
                    A7V = T9V.invalid[b9V].getHours();
                    x9V = T9V.invalid[b9V].getMinutes();
                    j9V = T9V.invalid[b9V].getSeconds();
                    if (A7V == +z9V) {
                        if (U9V.length == 2 && (x9V < 10 ? 0 : +('' + x9V)[0]) == +H9V[2]) {
                            D9V.push(x9V < 10 ? x9V : +('' + x9V)[1]);
                            break;
                        } else if ((j9V < 10 ? 0 : +('' + j9V)[0]) == +H9V[4]) {
                            D9V.push(j9V < 10 ? j9V : +('' + j9V)[1]);
                            break;
                        }
                    }
                }
            }
            if (T9V.min || T9V.max) {
                F9V = +i9V == +z9V;
                M9V = +E9V == +z9V;
                s9V = M9V && l9V;
                w9V = F9V && l9V;
                if (H9V.length === 0) {
                    for (b9V = a9V ? 2 : i9V > 19 ? i9V[0] : 3; b9V <= (i9V[0] == 1 ? 9 : i9V[0] - 1); ++b9V) {
                        D9V.push(b9V);
                    }
                    if (i9V >= 10) {
                        D9V.push(0);
                        if (i9V[0] == 2) {
                            for (b9V = 3; b9V <= 9; ++b9V) {
                                D9V.push(b9V);
                            }
                        }
                    }
                    if (E9V && E9V < 10 || i9V && i9V >= 10) {
                        for (b9V = E9V && E9V < 10 ? +E9V[0] + 1 : 0; b9V < (i9V && i9V >= 10 ? i9V[0] : 10); ++b9V) {
                            D9V.push(b9V);
                        }
                    }
                }
                if (H9V.length == 1) {
                    if (H9V[0] === 0) {
                        for (b9V = 0; b9V < i9V[0]; ++b9V) {
                            D9V.push(b9V);
                        }
                    }
                    if (i9V && H9V[0] !== 0 && (a9V ? H9V[0] == 1 : H9V[0] == 2)) {
                        for (b9V = a9V ? 3 : 4; b9V <= 9; ++b9V) {
                            D9V.push(b9V);
                        }
                    }
                    if (H9V[0] == i9V[0]) {
                        for (b9V = 0; b9V < i9V[1]; ++b9V) {
                            D9V.push(b9V);
                        }
                    }
                    if (H9V[0] == E9V[0] && !a9V) {
                        for (b9V = +E9V[1] + 1; b9V <= 9; ++b9V) {
                            D9V.push(b9V);
                        }
                    }
                }
                if (H9V.length == 2 && (F9V || M9V)) {
                    for (b9V = M9V ? +C9V[0] + 1 : 0; b9V < (F9V ? +Z9V[0] : 10); ++b9V) {
                        D9V.push(b9V);
                    }
                }
                if (H9V.length == 3 && (M9V && H9V[2] == C9V[0] || F9V && H9V[2] == Z9V[0])) {
                    for (b9V = M9V && H9V[2] == C9V[0] ? +C9V[1] + 1 : 0; b9V < (F9V && H9V[2] == Z9V[0] ? +Z9V[1] : 10); ++b9V) {
                        D9V.push(b9V);
                    }
                }
                if (H9V.length == 4 && (w9V || s9V)) {
                    for (b9V = s9V ? +N9V[0] + 1 : 0; b9V < (w9V ? +q9V[0] : 10); ++b9V) {
                        D9V.push(b9V);
                    }
                }
                if (H9V.length == 5 && (w9V && H9V[4] == q9V[0] || s9V && H9V[4] == N9V[0])) {
                    for (b9V = s9V && H9V[4] == N9V[0] ? +N9V[1] + 1 : 0; b9V < (w9V && H9V[4] == q9V[0] ? +q9V[1] : 10); ++b9V) {
                        D9V.push(b9V);
                    }
                }
            }
            return D9V;
        }
        var G9V = Q73({}, h9V.settings),
            T9V = Q73(h9V.settings, A6C, G9V),
            U9V = T9V.timeFormat.split(':'),
            a9V = T9V.timeFormat.match(/a/i),
            o9V = a9V ? a9V[0] == 'a' ? T9V.amText : T9V.amText.toUpperCase() : '',
            d9V = a9V ? a9V[0] == 'a' ? T9V.pmText : T9V.pmText.toUpperCase() : '',
            V9V = 0,
            i9V = T9V.min ? '' + T9V.min.getHours() : '',
            E9V = T9V.max ? '' + T9V.max.getHours() : '',
            Z9V = T9V.min ? '' + (T9V.min.getMinutes() < 10 ? '0' + T9V.min.getMinutes() : T9V.min.getMinutes()) : '',
            C9V = T9V.max ? '' + (T9V.max.getMinutes() < 10 ? '0' + T9V.max.getMinutes() : T9V.max.getMinutes()) : '',
            q9V = T9V.min ? '' + (T9V.min.getSeconds() < 10 ? '0' + T9V.min.getSeconds() : T9V.min.getSeconds()) : '',
            N9V = T9V.max ? '' + (T9V.max.getSeconds() < 10 ? '0' + T9V.max.getSeconds() : T9V.max.getSeconds()) : '';
        T9V.min ? T9V.min.setFullYear(2014, 7, 20) : '';
        T9V.max ? T9V.max.setFullYear(2014, 7, 20) : '';
        return {
            placeholder: '-',
            allowLeadingZero: true,
            template: (U9V.length == 3 ? 'dd:dd:dd' : U9V.length == 2 ? 'dd:dd' : 'dd') + (a9V ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ''),
            leftKey: a9V ? {
                text: o9V,
                variable: 'ampm:' + o9V,
                value: '00'
            } : {
                text: ':00',
                value: '00'
            },
            rightKey: a9V ? {
                text: d9V,
                variable: 'ampm:' + d9V,
                value: '00'
            } : {
                text: ':30',
                value: '30'
            },
            parseValue: function X7V(n7V) {
                var I7V, L7V, f7V = n7V || T9V.defaultValue,
                    W7V = [];
                if (f7V) {
                    f7V = f7V + '';
                    L7V = f7V.match(/\d/g);
                    if (L7V) {
                        for (I7V = 0; I7V < L7V.length; I7V++) {
                            W7V.push(+L7V[I7V]);
                        }
                    }
                    if (a9V) {
                        W7V.push('ampm:' + (f7V.match(new RegExp(T9V.pmText, 'gi')) ? d9V : o9V));
                    }
                }
                return W7V;
            },
            formatValue: function g7V(B7V, y7V) {
                return S9V(B7V, y7V);
            },
            validate: function P7V(k7V) {
                var u7V = k7V.values,
                    O7V = k7V.variables,
                    K7V = S9V(u7V, O7V),
                    R7V = u7V.length >= 3 ? new Date(2014, 7, 20, '' + u7V[0] + (u7V.length % 2 === 0 ? u7V[1] : ''), '' + u7V[u7V.length % 2 === 0 ? 2 : 1] + u7V[u7V.length % 2 === 0 ? 3 : 2]) : '';
                return {
                    disabled: p9V(u7V),
                    length: V9V,
                    invalid: (a9V ? !new RegExp('^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9])' + ' (?:' + T9V.amText + '|' + T9V.pmText + ')$', 'i').test(K7V) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(K7V)) || (T9V.invalid ? h9V._indexOf(T9V.invalid, R7V) != -1 : false) || !((T9V.min ? T9V.min <= R7V : true) && (T9V.max ? R7V <= T9V.max : true))
                };
            }
        };
    };
    var X6C = {
        dateOrder: 'mdy',
        dateFormat: 'mm/dd/yy',
        delimiter: '/'
    };
    F23.date = function(V7V) {
        function S7V(J7V) {
            return J7V % 4 === 0 && J7V % 100 !== 0 || J7V % 400 === 0;
        }

        function p7V(b7V) {
            var v7V, D7V, s7V, x7V, j7V, H7V = [],
                M7V = b7V[t7V + 3] !== undefined ? '' + b7V[t7V] + b7V[t7V + 1] + b7V[t7V + 2] + b7V[t7V + 3] : '',
                F7V = b7V[T7V + 1] !== undefined ? '' + b7V[T7V] + b7V[T7V + 1] : '',
                Q7V = b7V[i7V + 1] !== undefined ? '' + b7V[i7V] + b7V[i7V + 1] : '',
                l7V = '' + r7V.getMaxDayOfMonth(M7V || 2012, F7V - 1 || 0),
                z7V = C7V === M7V && +q7V === +F7V,
                w7V = E7V === M7V && +U7V === +F7V;
            if (r7V.invalid) {
                for (v7V = 0; v7V < r7V.invalid.length; ++v7V) {
                    s7V = r7V.getYear(r7V.invalid[v7V]);
                    x7V = r7V.getMonth(r7V.invalid[v7V]);
                    j7V = r7V.getDay(r7V.invalid[v7V]);
                    if (s7V == +M7V && x7V + 1 == +F7V) {
                        if ((j7V < 10 ? 0 : +('' + j7V)[0]) == +b7V[i7V]) {
                            H7V.push(j7V < 10 ? j7V : +('' + j7V)[1]);
                            break;
                        }
                    }
                    if (x7V + 1 == +F7V && j7V == +Q7V) {
                        if (('' + s7V).substring(0, 3) == '' + b7V[t7V] + b7V[t7V + 1] + b7V[t7V + 2]) {
                            H7V.push(('' + s7V)[3]);
                            break;
                        }
                    }
                    if (s7V == +M7V && j7V == +Q7V) {
                        if ((x7V < 10 ? 0 : +('' + (x7V + 1))[0]) == +b7V[T7V]) {
                            H7V.push(x7V < 10 ? x7V : +('' + (x7V + 1))[1]);
                            break;
                        }
                    }
                }
            }
            if (Q7V == '31' && (b7V.length == T7V || b7V.length == T7V + 1)) {
                if (b7V[T7V] != 1) {
                    H7V.push(2, 4, 6, 9, 11);
                } else {
                    H7V.push(1);
                }
            }
            if (Q7V == '30' && b7V[T7V] === 0 && b7V.length <= T7V + 1) {
                H7V.push(2);
            }
            if (b7V.length == T7V) {
                for (v7V = E7V === M7V && +U7V < 10 ? 1 : 2; v7V <= 9; ++v7V) {
                    H7V.push(v7V);
                }
                if (C7V === M7V && +q7V >= 10) {
                    H7V.push(0);
                }
            }
            if (b7V.length == T7V + 1) {
                if (b7V[T7V] == 1) {
                    for (v7V = E7V === M7V ? +U7V[1] + 1 : 3; v7V <= 9; ++v7V) {
                        H7V.push(v7V);
                    }
                    if (C7V == M7V) {
                        for (v7V = 0; v7V < +q7V[1]; ++v7V) {
                            H7V.push(v7V);
                        }
                    }
                }
                if (b7V[T7V] === 0) {
                    H7V.push(0);
                    if (E7V === M7V || C7V === M7V) {
                        for (v7V = E7V === M7V ? +Q7V > +d7V ? +U7V : +U7V + 1 : 0; v7V <= (C7V === M7V ? +Q7V < +Z7V ? +q7V - 1 : +q7V - 1 : 9); ++v7V) {
                            H7V.push(v7V);
                        }
                    }
                }
            }
            if (b7V.length == i7V) {
                for (v7V = w7V ? (+d7V > 10 ? +d7V[0] : 0) + 1 : +l7V[0] + 1; v7V <= 9; ++v7V) {
                    H7V.push(v7V);
                }
                if (z7V) {
                    for (v7V = 0; v7V < (+Z7V < 10 ? 0 : Z7V[0]); ++v7V) {
                        H7V.push(v7V);
                    }
                }
            }
            if (b7V.length == i7V + 1) {
                if (b7V[i7V] >= 3 || F7V == '02') {
                    for (v7V = +l7V[1] + 1; v7V <= 9; ++v7V) {
                        H7V.push(v7V);
                    }
                }
                if (w7V && +d7V[0] == b7V[i7V]) {
                    for (v7V = +d7V[1] + 1; v7V <= 9; ++v7V) {
                        H7V.push(v7V);
                    }
                }
                if (z7V && Z7V[0] == b7V[i7V]) {
                    for (v7V = 0; v7V < +Z7V[1]; ++v7V) {
                        H7V.push(v7V);
                    }
                }
                if (b7V[i7V] === 0) {
                    H7V.push(0);
                    if (w7V || z7V) {
                        for (v7V = w7V ? +d7V + 1 : 1; v7V <= (z7V ? +Z7V - 1 : 9); ++v7V) {
                            H7V.push(v7V);
                        }
                    }
                }
            }
            if (b7V[t7V + 2] !== undefined && F7V == '02' && Q7V == '29') {
                for (D7V = +('' + b7V[t7V] + b7V[t7V + 1] + b7V[t7V + 2] + 0); D7V <= +('' + b7V[t7V] + b7V[t7V + 1] + b7V[t7V + 2] + 9); ++D7V) {
                    H7V.push(!S7V(D7V) ? D7V % 10 : '');
                }
            }
            if (b7V.length == t7V) {
                if (r7V.min) {
                    for (v7V = 0; v7V < +C7V[0]; ++v7V) {
                        H7V.push(v7V);
                    }
                }
                if (r7V.max) {
                    for (v7V = +E7V[0] + 1; v7V <= 9; ++v7V) {
                        H7V.push(v7V);
                    }
                }
                H7V.push(0);
            }
            if (r7V.min || r7V.max) {
                for (D7V = 1; D7V < 4; ++D7V) {
                    if (b7V.length == t7V + D7V) {
                        if (b7V[t7V + D7V - 1] == +C7V[D7V - 1] && (D7V == 3 ? b7V[t7V + D7V - 2] == +C7V[D7V - 2] : true)) {
                            for (v7V = 0; v7V < +C7V[D7V] + (D7V == 3 && b7V[T7V + 1] && +q7V > +F7V ? 1 : 0); ++v7V) {
                                H7V.push(v7V);
                            }
                        }
                        if (b7V[t7V + D7V - 1] == +E7V[D7V - 1] && (D7V == 3 ? b7V[t7V + D7V - 2] == +E7V[D7V - 2] : true)) {
                            for (v7V = +E7V[D7V] + (D7V == 3 && +U7V < +F7V ? 0 : 1); v7V <= 9; ++v7V) {
                                H7V.push(v7V);
                            }
                        }
                    }
                }
            }
            return H7V;
        }

        function h7V(A2V) {
            return new Date(+('' + A2V[t7V] + A2V[t7V + 1] + A2V[t7V + 2] + A2V[t7V + 3]), +('' + A2V[T7V] + A2V[T7V + 1]) - 1, +('' + A2V[i7V] + A2V[i7V + 1]));
        }
        var t7V, T7V, i7V, o7V, N7V = [],
            G7V = Q73({}, V7V.settings),
            r7V = Q73(V7V.settings, l73.defaults, X6C, G7V),
            a7V = r7V.dateOrder,
            q7V = r7V.min ? '' + (r7V.getMonth(r7V.min) + 1) : 0,
            U7V = r7V.max ? '' + (r7V.getMonth(r7V.max) + 1) : 0,
            Z7V = r7V.min ? '' + r7V.getDay(r7V.min) : 0,
            d7V = r7V.max ? '' + r7V.getDay(r7V.max) : 0,
            C7V = r7V.min ? '' + r7V.getYear(r7V.min) : 0,
            E7V = r7V.max ? '' + r7V.getYear(r7V.max) : 0;
        a7V = a7V.replace(/y+/gi, 'yyyy');
        a7V = a7V.replace(/m+/gi, 'mm');
        a7V = a7V.replace(/d+/gi, 'dd');
        t7V = a7V.toUpperCase().indexOf('Y');
        T7V = a7V.toUpperCase().indexOf('M');
        i7V = a7V.toUpperCase().indexOf('D');
        a7V = '';
        N7V.push({
            val: t7V,
            n: 'yyyy'
        }, {
            val: T7V,
            n: 'mm'
        }, {
            val: i7V,
            n: 'dd'
        });
        N7V.sort(function(m7V, e7V) {
            return m7V.val - e7V.val;
        });
        x73.each(N7V, function(Y7V, c7V) {
            a7V += c7V.n;
        });
        t7V = a7V.indexOf('y');
        T7V = a7V.indexOf('m');
        i7V = a7V.indexOf('d');
        a7V = '';
        for (o7V = 0; o7V < 8; ++o7V) {
            a7V += 'd';
            if (o7V + 1 == t7V || o7V + 1 == T7V || o7V + 1 == i7V) {
                a7V += r7V.delimiter;
            }
        }
        V7V.getVal = function(X2V) {
            return V7V._hasValue || X2V ? h7V(V7V.getArrayVal(X2V)) : null;
        };
        return {
            placeholder: '-',
            fill: 'ltr',
            allowLeadingZero: true,
            template: a7V,
            parseValue: function f2V(g2V) {
                var W2V, I2V = [],
                    n2V = g2V || r7V.defaultValue,
                    L2V = l73.parseDate(r7V.dateFormat, n2V, r7V);
                if (n2V) {
                    for (W2V = 0; W2V < N7V.length; ++W2V) {
                        if (/m/i.test(N7V[W2V].n)) {
                            I2V = I2V.concat(((r7V.getMonth(L2V) < 9 ? '0' : '') + (r7V.getMonth(L2V) + 1)).split(''));
                        } else if (/d/i.test(N7V[W2V].n)) {
                            I2V = I2V.concat(((r7V.getDay(L2V) < 10 ? '0' : '') + r7V.getDay(L2V)).split(''));
                        } else {
                            I2V = I2V.concat((r7V.getYear(L2V) + '').split(''));
                        }
                    }
                }
                return I2V;
            },
            formatValue: function B2V(y2V) {
                return l73.formatDate(r7V.dateFormat, h7V(y2V), r7V);
            },
            validate: function P2V(K2V) {
                var R2V = K2V.values,
                    u2V = h7V(R2V);
                return {
                    disabled: p7V(R2V),
                    invalid: !(u2V != 'Invalid Date' && (r7V.min ? r7V.min <= u2V : true) && (r7V.max ? u2V <= r7V.max : true)) || (r7V.invalid ? V7V._indexOf(r7V.invalid, u2V) != -1 : false)
                };
            }
        };
    };
    var b1C = j73.presets.scroller;
    var L23 = j73.util.datetime;
    var L6C = j73.util;
    var W6C = L6C.testTouch;
    var n6C = {
        autoCorrect: true,
        showSelector: true,
        minRange: 1,
        rangeTap: true,
        fromText: 'Start',
        toText: 'End'
    };
    j73.presetShort('range');
    b1C.range = function(O2V) {
        function x2V(A8V, X8V) {
            if (A8V) {
                A8V.setFullYear(X8V.getFullYear());
                A8V.setMonth(X8V.getMonth());
                A8V.setDate(X8V.getDate());
            }
        }

        function z2V(f8V) {
            O2V._startDate = N2V = t2V;
            O2V._endDate = C2V = r2V;
            if (k2V.startInput) {
                x73(k2V.startInput).val(U2V);
                if (f8V) {
                    x73(k2V.startInput).trigger('change');
                }
            }
            if (k2V.endInput) {
                x73(k2V.endInput).val(q2V);
                if (f8V) {
                    x73(k2V.endInput).trigger('change');
                }
            }
        }

        function M2V(L8V, W8V) {
            var I8V = true;
            if (L8V && t2V && r2V) {
                if (r2V - t2V > k2V.maxRange - 1) {
                    if (T2V) {
                        t2V = new Date(r2V - k2V.maxRange + 1);
                    } else {
                        r2V = new Date(+t2V + k2V.maxRange - 1);
                    }
                }
                if (r2V - t2V < k2V.minRange - 1) {
                    if (T2V) {
                        t2V = new Date(r2V - k2V.minRange + 1);
                    } else {
                        r2V = new Date(+t2V + k2V.minRange - 1);
                    }
                }
            }
            if (!t2V || !r2V) {
                I8V = false;
            }
            if (W8V) {
                w2V();
            }
            return I8V;
        }

        function s2V() {
            return t2V && r2V ? Math.max(1, Math.round((new Date(r2V).setHours(0, 0, 0, 0) - new Date(t2V).setHours(0, 0, 0, 0)) / 86400000) + 1) : 0;
        }

        function l2V(n8V) {
            n8V.addClass('mbsc-range-btn-sel').attr('aria-checked', 'true').find('.mbsc-range-btn').addClass(e2V);
        }

        function v2V() {
            if (b2V && a2V) {
                x73('.mbsc-range-btn-c', a2V).removeClass('mbsc-range-btn-sel').removeAttr('aria-checked').find('.mbsc-range-btn', a2V).removeClass(e2V);
                l2V(x73('.mbsc-range-btn-c', a2V).eq(T2V));
            }
        }

        function w2V() {
            var g8V, u8V, B8V, R8V, y8V, P8V = 0,
                K8V = i2V || !T2V ? ' mbsc-cal-day-hl mbsc-cal-sel-start' : ' mbsc-cal-sel-start',
                k8V = i2V || T2V ? ' mbsc-cal-day-hl mbsc-cal-sel-end' : ' mbsc-cal-sel-end';
            U2V = t2V ? L23.formatDate(E2V, t2V, k2V) : '';
            q2V = r2V ? L23.formatDate(E2V, r2V, k2V) : '';
            if (a2V) {
                x73('.mbsc-range-btn-v-start', a2V).html(U2V || '&nbsp;');
                x73('.mbsc-range-btn-v-end', a2V).html(q2V || '&nbsp;');
                g8V = t2V ? new Date(t2V) : null;
                B8V = r2V ? new Date(r2V) : null;
                if (!g8V && B8V) {
                    g8V = new Date(B8V);
                }
                if (!B8V && g8V) {
                    B8V = new Date(g8V);
                }
                y8V = T2V ? B8V : g8V;
                x73('.mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i', a2V).removeClass(e2V);
                x73('.mbsc-cal-table .mbsc-cal-day-hl', a2V).removeClass(S2V);
                x73('.mbsc-cal-table .mbsc-cal-day-sel', a2V).removeClass('mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end').removeAttr('aria-selected');
                if (g8V && B8V) {
                    u8V = g8V.setHours(0, 0, 0, 0);
                    R8V = B8V.setHours(0, 0, 0, 0);
                    while (B8V >= g8V && P8V < 84) {
                        x73('.mbsc-cal-day[data-full="' + y8V.getFullYear() + '-' + y8V.getMonth() + '-' + y8V.getDate() + '"]', a2V).addClass('mbsc-cal-day-sel' + (y8V.getTime() === u8V ? K8V : '') + (y8V.getTime() === R8V ? k8V : '')).attr('aria-selected', 'true').find('.mbsc-cal-day-i ').addClass(e2V);
                        y8V.setDate(y8V.getDate() + (T2V ? -1 : 1));
                        P8V++;
                    }
                }
            }
        }

        function c2V(O8V, r8V) {
            return {
                h: O8V ? O8V.getHours() : r8V ? 23 : 0,
                i: O8V ? O8V.getMinutes() : r8V ? 59 : 0,
                s: O8V ? O8V.getSeconds() : r8V ? 59 : 0
            };
        }
        var V2V, a2V, o2V, E2V, J2V, Z2V, h2V, U2V, q2V, t2V, G2V, r2V, m2V, H2V, Q2V, j2V, b2V, N2V = O2V._startDate,
            C2V = O2V._endDate,
            T2V = 0,
            p2V = new Date(),
            F2V = Q73({}, O2V.settings),
            k2V = Q73(O2V.settings, n6C, F2V),
            Y2V = k2V.anchor,
            i2V = k2V.rangeTap,
            e2V = k2V.activeClass || '',
            D2V = 'mbsc-fr-btn-d ' + (k2V.disabledClass || ''),
            S2V = 'mbsc-cal-day-hl',
            d2V = k2V.defaultValue === null ? [] : k2V.defaultValue || [new Date(p2V.setHours(0, 0, 0, 0)), new Date(p2V.getFullYear(), p2V.getMonth(), p2V.getDate() + 6, 23, 59, 59, 999)];
        if (i2V) {
            k2V.tabs = true;
        }
        J2V = b1C.calbase.call(this, O2V);
        V2V = Q73({}, J2V);
        E2V = O2V.format;
        H2V = k2V.controls.join('') === 'time';
        b2V = k2V.controls.length == 1 && k2V.controls[0] == 'calendar' ? k2V.showSelector : true;
        if (k2V.startInput) {
            Q2V = x73(k2V.startInput).prop('readonly');
            O2V.attachShow(x73(k2V.startInput).prop('readonly', true), function() {
                T2V = 0;
                k2V.anchor = Y2V || x73(k2V.startInput);
            });
        }
        if (k2V.endInput) {
            j2V = x73(k2V.endInput).prop('readonly');
            O2V.attachShow(x73(k2V.endInput).prop('readonly', true), function() {
                T2V = 1;
                k2V.anchor = Y2V || x73(k2V.endInput);
            });
        }
        O2V.setVal = function(a8V, E8V, C8V, i8V, N8V) {
            var t8V = a8V || [],
                T8V = a8V;
            if (t8V[0] === undefined || t8V[0] === null || t8V[0].getTime) {
                h2V = true;
                t2V = t8V[0] || null;
                U2V = t2V ? L23.formatDate(E2V, t2V, k2V) : '';
                if (!T2V) {
                    T8V = V2V.parseValue(U2V, O2V);
                }
            }
            if (t8V[1] === undefined || t8V[1] === null || t8V[1].getTime) {
                h2V = true;
                r2V = t8V[1] || null;
                q2V = r2V ? L23.formatDate(E2V, r2V, k2V) : '';
                if (T2V) {
                    T8V = V2V.parseValue(q2V, O2V);
                }
            }
            if (!i8V) {
                O2V._startDate = N2V = t2V;
                O2V._endDate = C2V = r2V;
            }
            O2V._setVal(T8V, E8V, C8V, i8V, N8V);
        };
        O2V.getVal = function(q8V) {
            return q8V ? [t2V, r2V] : O2V._hasValue ? [N2V, C2V] : null;
        };
        O2V.getDayProps = function(Z8V) {
            var U8V = t2V ? new Date(t2V.getFullYear(), t2V.getMonth(), t2V.getDate()) : null,
                d8V = r2V ? new Date(r2V.getFullYear(), r2V.getMonth(), r2V.getDate()) : null;
            return {
                selected: U8V && d8V && Z8V >= U8V && Z8V <= r2V,
                cssClass: ((i2V || !T2V) && U8V && U8V.getTime() === Z8V.getTime() || (i2V || T2V) && d8V && d8V.getTime() === Z8V.getTime() ? S2V : '') + (U8V && U8V.getTime() === Z8V.getTime() ? ' mbsc-cal-sel-start' : '') + (d8V && d8V.getTime() === Z8V.getTime() ? ' mbsc-cal-sel-end' : '')
            };
        };
        O2V.setActiveDate = function(V8V) {
            var o8V;
            T2V = V8V == 'start' ? 0 : 1;
            o8V = V8V == 'start' ? t2V : r2V;
            if (O2V.isVisible()) {
                v2V();
                if (!i2V) {
                    x73('.mbsc-cal-table .mbsc-cal-day-hl', a2V).removeClass(S2V);
                    if (o8V) {
                        x73('.mbsc-cal-day[data-full="' + o8V.getFullYear() + '-' + o8V.getMonth() + '-' + o8V.getDate() + '"]', a2V).addClass(S2V);
                    }
                }
                if (o8V) {
                    Z2V = true;
                    O2V.setDate(o8V, false, 1000, true);
                }
            }
        };
        O2V.getValue = O2V.getVal;
        Q73(J2V, {
            highlight: false,
            outerMonthChange: false,
            formatValue: function h8V() {
                return U2V + (k2V.endInput ? '' : q2V ? ' - ' + q2V : '');
            },
            parseValue: function G8V(p8V) {
                var S8V = p8V ? p8V.split(' - ') : [];
                k2V.defaultValue = d2V[1];
                if (k2V.endInput) {
                    C2V = x73(k2V.endInput).val() ? L23.parseDate(E2V, x73(k2V.endInput).val(), k2V) : d2V[1];
                } else {
                    C2V = S8V[1] ? L23.parseDate(E2V, S8V[1], k2V) : d2V[1];
                }
                k2V.defaultValue = d2V[0];
                if (k2V.startInput) {
                    N2V = x73(k2V.startInput).val() ? L23.parseDate(E2V, x73(k2V.startInput).val(), k2V) : d2V[0];
                } else {
                    N2V = S8V[0] ? L23.parseDate(E2V, S8V[0], k2V) : d2V[0];
                }
                k2V.defaultValue = d2V[T2V];
                U2V = N2V ? L23.formatDate(E2V, N2V, k2V) : '';
                q2V = C2V ? L23.formatDate(E2V, C2V, k2V) : '';
                O2V._startDate = N2V;
                O2V._endDate = C2V;
                return V2V.parseValue(T2V ? q2V : U2V, O2V);
            },
            onFill: function m8V(e8V) {
                z2V(e8V.change);
            },
            onBeforeClose: function c8V(Y8V) {
                if (Y8V.button === 'set' && !M2V(true, true)) {
                    O2V.setActiveDate(T2V ? 'start' : 'end');
                    return false;
                }
            },
            onHide: function J8V() {
                V2V.onHide.call(O2V);
                T2V = 0;
                a2V = null;
                k2V.anchor = Y2V;
            },
            onClear: function v8V() {
                if (i2V) {
                    T2V = 0;
                }
            },
            onBeforeShow: function b8V() {
                k2V.headerText = false;
                t2V = N2V;
                r2V = C2V;
                G2V = c2V(t2V, 0);
                m2V = c2V(r2V, 1);
                if (k2V.counter) {
                    k2V.headerText = function() {
                        var H8V = s2V();
                        return (H8V > 1 ? k2V.selectedPluralText || k2V.selectedText : k2V.selectedText).replace(/{count}/, H8V);
                    };
                }
                h2V = true;
            },
            onMarkupReady: function D8V(M8V) {
                var F8V;
                if (t2V) {
                    Z2V = true;
                    O2V.setDate(t2V, false, 0, true);
                    t2V = O2V.getDate(true);
                }
                if (r2V) {
                    Z2V = true;
                    O2V.setDate(r2V, false, 0, true);
                    r2V = O2V.getDate(true);
                }
                if (T2V && r2V || !T2V && t2V) {
                    Z2V = true;
                    O2V.setDate(T2V ? r2V : t2V, false, 0, true);
                }
                w2V();
                V2V.onMarkupReady.call(this, M8V);
                a2V = x73(M8V.target);
                a2V.addClass('mbsc-range');
                if (b2V) {
                    F8V = '<div class="mbsc-range-btn-t" role="radiogroup">' + '<div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + k2V.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (U2V || '&nbsp;') + '</div></div></div>' + '<div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + k2V.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (q2V || '&nbsp;') + '</div></div></div>' + '</div>';
                    x73('.mbsc-cal-tabs', a2V).before(F8V);
                    v2V();
                }
                x73('.mbsc-range-btn-c', a2V).on('touchstart click', function(x8V) {
                    if (W6C(x8V, this)) {
                        O2V.showMonthView();
                        O2V.setActiveDate(x73(this).index() ? 'end' : 'start');
                    }
                });
            },
            onDayChange: function j8V(Q8V) {
                Q8V.active = T2V ? 'end' : 'start';
                o2V = true;
            },
            onSetDate: function w8V(l8V) {
                var s8V = l8V.date,
                    z8V = O2V.order;
                if (!Z2V) {
                    if (z8V.h === undefined) {
                        s8V.setHours(T2V ? 23 : 0);
                    }
                    if (z8V.i === undefined) {
                        s8V.setMinutes(T2V ? 59 : 0);
                    }
                    if (z8V.s === undefined) {
                        s8V.setSeconds(T2V ? 59 : 0);
                    }
                    s8V.setMilliseconds(T2V ? 999 : 0);
                    if (!h2V || o2V) {
                        if (i2V && o2V) {
                            if (T2V == 1 && s8V < t2V) {
                                T2V = 0;
                            }
                            if (T2V) {
                                s8V.setHours(m2V.h, m2V.i, m2V.s, 999);
                            } else {
                                s8V.setHours(G2V.h, G2V.i, G2V.s, 0);
                            }
                        }
                        if (T2V) {
                            r2V = new Date(s8V);
                            m2V = c2V(r2V);
                        } else {
                            t2V = new Date(s8V);
                            G2V = c2V(t2V);
                        }
                        if (H2V && k2V.autoCorrect) {
                            x2V(t2V, s8V);
                            x2V(r2V, s8V);
                        }
                        if (i2V && o2V && !T2V) {
                            r2V = null;
                        }
                    }
                }
                if (H2V && !k2V.autoCorrect && r2V < t2V) {
                    r2V = new Date(r2V.setDate(r2V.getDate() + 1));
                }
                O2V._isValid = M2V(h2V || o2V || k2V.autoCorrect, !Z2V);
                l8V.active = T2V ? 'end' : 'start';
                if (!Z2V && i2V) {
                    if (o2V) {
                        T2V = T2V ? 0 : 1;
                    }
                    v2V();
                }
                if (O2V.isVisible()) {
                    if (O2V._isValid) {
                        x73('.mbsc-fr-btn-s .mbsc-fr-btn', O2V._markup).removeClass(D2V);
                    } else {
                        x73('.mbsc-fr-btn-s .mbsc-fr-btn', O2V._markup).addClass(D2V);
                    }
                }
                o2V = false;
                h2V = false;
                Z2V = false;
            },
            onTabChange: function A1K(X1K) {
                if (X1K.tab != 'calendar') {
                    O2V.setDate(T2V ? r2V : t2V, false, 1000, true);
                }
                M2V(true, true);
            },
            onDestroy: function f1K() {
                x73(k2V.startInput).prop('readonly', Q2V);
                x73(k2V.endInput).prop('readonly', j2V);
            }
        });
        return J2V;
    };
    var g6C = {
        inputClass: '',
        values: 5,
        order: 'desc',
        style: 'icon',
        invalid: [],
        icon: {
            filled: 'star3',
            empty: 'star3'
        }
    };
    j73.presetShort('rating');
    j73.presets.scroller.rating = function(P1K) {
        var q1K = Q73({}, P1K.settings),
            I1K = Q73(P1K.settings, g6C, q1K),
            n1K = x73(this),
            t1K = this.id + '_dummy',
            E1K = x73('label[for="' + this.id + '"]').attr('for', t1K),
            U1K = I1K.label !== undefined ? I1K.label : E1K.length ? E1K.text() : n1K.attr('name'),
            k1K = I1K.defaultValue,
            i1K = [
                []
            ],
            C1K = {
                data: [],
                label: U1K,
                circular: false
            },
            R1K = {},
            W1K = [],
            g1K, r1K = false,
            L1K, y1K, K1K, T1K, a1K, N1K, B1K, O1K, Z1K, u1K = I1K.style === 'grade' ? 'circle' : 'icon';
        if (n1K.is('select')) {
            I1K.values = {};
            x73('option', n1K).each(function() {
                I1K.values[x73(this).val()] = x73(this).text();
            });
            x73('#' + t1K).remove();
        }
        if (x73.isArray(I1K.values)) {
            for (L1K = 0; L1K < I1K.values.length; L1K++) {
                B1K = +I1K.values[L1K];
                if (isNaN(B1K)) {
                    B1K = L1K + 1;
                    r1K = true;
                }
                W1K.push({
                    order: B1K,
                    key: I1K.values[L1K],
                    value: I1K.values[L1K]
                });
            }
        } else if (x73.isPlainObject(I1K.values)) {
            L1K = 1;
            r1K = true;
            for (O1K in I1K.values) {
                B1K = +O1K;
                if (isNaN(B1K)) {
                    B1K = L1K;
                }
                W1K.push({
                    order: B1K,
                    key: O1K,
                    value: I1K.values[O1K]
                });
                L1K++;
            }
        } else {
            for (L1K = 1; L1K <= I1K.values; L1K++) {
                W1K.push({
                    order: L1K,
                    key: L1K,
                    value: L1K
                });
            }
        }
        if (I1K.showText === undefined && r1K) {
            I1K.showText = true;
        }
        if (I1K.icon.empty === undefined) {
            I1K.icon.empty = I1K.icon.filled;
        }
        W1K.sort(function(d1K, o1K) {
            return I1K.order == 'desc' ? o1K.order - d1K.order : d1K.order - o1K.order;
        });
        Z1K = I1K.order == 'desc' ? W1K[0].order : W1K[W1K.length - 1].order;
        for (L1K = 0; L1K < W1K.length; L1K++) {
            N1K = W1K[L1K].order;
            T1K = W1K[L1K].key;
            a1K = W1K[L1K].value;
            K1K = '';
            for (y1K = 1; y1K < N1K + 1; y1K++) {
                K1K += '<span class="mbsc-rating-' + u1K + (u1K === 'circle' ? '' : ' mbsc-ic mbsc-ic-' + I1K.icon.filled) + ' ">' + (u1K == 'circle' ? y1K : ' ') + '</span>';
            }
            for (y1K = N1K + 1; y1K <= Z1K; y1K++) {
                K1K += '<span class="mbsc-rating-' + u1K + (u1K === 'circle' ? ' mbsc-rating-circle-unf' : ' mbsc-ic mbsc-ic-' + (I1K.icon.empty ? I1K.icon.empty + ' mbsc-rating-icon-unf' : '') + (I1K.icon.empty === I1K.icon.filled ? ' mbsc-rating-icon-same' : '')) + '"></span>';
            }
            if (k1K === undefined) {
                k1K = T1K;
            }
            K1K += I1K.showText ? '<span class="mbsc-rating-txt">' + a1K + '</span>' : '';
            C1K.data.push({
                value: T1K,
                display: K1K,
                label: a1K
            });
            R1K[T1K] = a1K;
        }
        if (n1K.is('select')) {
            g1K = x73('<input type="text" id="' + t1K + '" value="' + R1K[n1K.val()] + '" class="' + I1K.inputClass + '" placeholder="' + (I1K.placeholder || '') + '" readonly />').insertBefore(n1K);
        }
        i1K[0].push(C1K);
        if (g1K) {
            P1K.attachShow(g1K);
        }
        if (n1K.is('select')) {
            n1K.hide().closest('.ui-field-contain').trigger('create');
        }
        P1K.getVal = function(h1K) {
            var V1K = P1K._hasValue ? P1K[h1K ? '_tempWheelArray' : '_wheelArray'][0] : null;
            return j73.util.isNumeric(V1K) ? +V1K : V1K;
        };
        return {
            anchor: g1K,
            wheels: i1K,
            headerText: false,
            compClass: 'mbsc-rating',
            setOnTap: true,
            formatValue: function G1K(S1K) {
                return R1K[S1K[0]];
            },
            parseValue: function p1K(e1K) {
                var m1K;
                for (m1K in R1K) {
                    if (g1K && m1K == e1K || !g1K && R1K[m1K] == e1K) {
                        return [m1K];
                    }
                }
                return [k1K];
            },
            validate: function c1K() {
                return {
                    disabled: [I1K.invalid]
                };
            },
            onFill: function Y1K(J1K) {
                if (g1K) {
                    g1K.val(J1K.valueText);
                    n1K.val(P1K._tempWheelArray[0]);
                }
            },
            onDestroy: function v1K() {
                if (g1K) {
                    g1K.remove();
                }
                n1K.show();
            }
        };
    };
    var B6C = 0;
    j73.util.getJson = M1C;
    var U23 = j73.util;
    var T83 = U23.isString;
    var k6C = {
        inputClass: '',
        invalid: [],
        rtl: false,
        showInput: true,
        groupLabel: 'Groups',
        dataHtml: 'html',
        dataText: 'text',
        dataValue: 'value',
        dataGroup: 'group',
        dataDisabled: 'disabled',
        filterPlaceholderText: 'Type to filter',
        filterEmptyText: 'No results',
        filterClearIcon: 'material-close'
    };
    j73.presetShort('select');
    j73.presets.scroller.select = function(A5K) {
        function G5K(f6K) {
            var A6K, B6K, X6K, z5K, g6K, l5K, W6K = 0,
                I6K = 0,
                L6K = {};
            I5K = {};
            u5K = {};
            n5K = [];
            q5K = [];
            k5K.length = 0;
            if (N5K) {
                x73.each(i5K, function(P6K, y6K) {
                    g6K = y6K[l1K.dataText];
                    B6K = y6K[l1K.dataHtml];
                    l5K = y6K[l1K.dataValue];
                    X6K = y6K[l1K.dataGroup];
                    z5K = {
                        value: l5K,
                        html: B6K,
                        text: g6K,
                        index: P6K
                    };
                    I5K[l5K] = z5K;
                    if (!f6K || m5K(g6K, f6K)) {
                        n5K.push(z5K);
                        if (t5K) {
                            if (L6K[X6K] === undefined) {
                                A6K = {
                                    text: X6K,
                                    value: I6K,
                                    options: [],
                                    index: I6K
                                };
                                u5K[I6K] = A6K;
                                L6K[X6K] = I6K;
                                q5K.push(A6K);
                                I6K++;
                            } else {
                                A6K = u5K[L6K[X6K]];
                            }
                            if (O5K) {
                                z5K.index = A6K.options.length;
                            }
                            z5K.group = L6K[X6K];
                            A6K.options.push(z5K);
                        }
                        if (y6K[l1K.dataDisabled]) {
                            k5K.push(l5K);
                        }
                    }
                });
            } else {
                if (t5K) {
                    var n6K = true;
                    x73('optgroup', f5K).each(function(u6K) {
                        u5K[u6K] = {
                            text: this.label,
                            value: u6K,
                            options: [],
                            index: u6K
                        };
                        n6K = true;
                        x73('option', this).each(function(R6K) {
                            z5K = {
                                value: this.value,
                                text: this.text,
                                index: O5K ? R6K : W6K++,
                                group: u6K
                            };
                            I5K[this.value] = z5K;
                            if (!f6K || m5K(this.text, f6K)) {
                                if (n6K) {
                                    q5K.push(u5K[u6K]);
                                    n6K = false;
                                }
                                n5K.push(z5K);
                                u5K[u6K].options.push(z5K);
                                if (this.disabled) {
                                    k5K.push(this.value);
                                }
                            }
                        });
                    });
                } else {
                    x73('option', f5K).each(function(K6K) {
                        z5K = {
                            value: this.value,
                            text: this.text,
                            index: K6K
                        };
                        I5K[this.value] = z5K;
                        if (!f6K || m5K(this.text, f6K)) {
                            n5K.push(z5K);
                            if (this.disabled) {
                                k5K.push(this.value);
                            }
                        }
                    });
                }
            }
            if (n5K.length) {
                Y5K = n5K[0].value;
            }
            if (e5K) {
                n5K = [];
                W6K = 0;
                x73.each(u5K, function(O6K, k6K) {
                    if (k6K.options.length) {
                        l5K = '__group' + O6K;
                        z5K = {
                            text: k6K.text,
                            value: l5K,
                            group: O6K,
                            index: W6K++,
                            cssClass: 'mbsc-sel-gr'
                        };
                        I5K[l5K] = z5K;
                        n5K.push(z5K);
                        k5K.push(z5K.value);
                        x73.each(k6K.options, function(t6K, r6K) {
                            r6K.index = W6K++;
                            n5K.push(r6K);
                        });
                    }
                });
            }
            if (C5K) {
                if (n5K.length) {
                    C5K.removeClass('mbsc-sel-empty-v');
                } else {
                    C5K.addClass('mbsc-sel-empty-v');
                }
            }
        }

        function v5K(a6K, E6K, C6K) {
            var T6K, i6K = [];
            for (T6K = 0; T6K < a6K.length; T6K++) {
                i6K.push({
                    value: a6K[T6K].value,
                    display: a6K[T6K].html || a6K[T6K].text,
                    cssClass: a6K[T6K].cssClass
                });
            }
            return {
                circular: false,
                multiple: E6K,
                data: i6K,
                label: C6K
            };
        }

        function b5K() {
            return v5K(q5K, false, l1K.groupLabel);
        }

        function S5K() {
            return v5K(O5K ? u5K[y5K].options : n5K, K5K, c5K);
        }

        function D5K() {
            var q6K, U6K, N6K = [
                []
            ];
            if (B5K) {
                q6K = b5K();
                if (h5K) {
                    N6K[0][g5K] = q6K;
                } else {
                    N6K[g5K] = [q6K];
                }
            }
            U6K = S5K();
            if (h5K) {
                N6K[0][X5K] = U6K;
            } else {
                N6K[X5K] = [U6K];
            }
            return N6K;
        }

        function U5K(Z6K) {
            if (P5K) {
                if (Z6K && T83(Z6K)) {
                    Z6K = Z6K.split(',');
                }
                if (x73.isArray(Z6K)) {
                    Z6K = Z6K[0];
                }
            }
            L5K = Z6K === undefined || Z6K === null || Z6K === '' || !I5K[Z6K] ? Y5K : Z6K;
            if (B5K) {
                y5K = I5K[L5K] ? I5K[L5K].group : null;
            }
        }

        function s5K(o6K, V6K) {
            var d6K = o6K ? A5K._tempWheelArray : A5K._hasValue ? A5K._wheelArray : null;
            return d6K ? l1K.group && V6K ? d6K : d6K[X5K] : null;
        }

        function w5K(p6K) {
            var h6K, G6K, S6K = [];
            if (K5K) {
                for (h6K in A5K._tempSelected[X5K]) {
                    S6K.push(o5K[h6K] || (I5K[h6K] ? I5K[h6K].text : ''));
                }
                return S6K.join(', ');
            }
            G6K = p6K[X5K];
            return I5K[G6K] ? I5K[G6K].text : '';
        }

        function j5K() {
            var m6K = A5K.getVal(),
                e6K = A5K._tempValue;
            if (!(l1K.filter && l1K.display == 'inline')) {
                W5K.val(e6K);
            }
            if (f5K[0] !== W5K[0]) {
                f5K.val(m6K);
            }
        }

        function Q5K() {
            var c6K = {};
            c6K[X5K] = S5K();
            Z5K = true;
            A5K.changeWheel(c6K);
        }

        function m5K(J6K, Y6K) {
            Y6K = Y6K.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            return J6K.match(new RegExp(Y6K, 'ig'));
        }

        function F5K(v6K) {
            return l1K.data.dataField ? v6K[l1K.data.dataField] : l1K.data.processResponse ? l1K.data.processResponse(v6K) : v6K;
        }

        function M5K(H6K) {
            var b6K = {};
            G5K(H6K);
            l1K.wheels = D5K();
            U5K(L5K);
            b6K[X5K] = S5K();
            A5K._tempWheelArray[X5K] = L5K;
            if (B5K) {
                b6K[g5K] = b5K();
                A5K._tempWheelArray[g5K] = y5K;
            }
            if (A5K._isVisible) {
                A5K.changeWheel(b6K, 0, true);
            }
        }
        var W5K, i5K, Y5K, J5K, R5K, y5K, q5K, u5K, g5K, a5K, L5K, n5K, X5K, Z5K, o5K = {},
            p5K = 1000,
            f5K = x73(this),
            x5K = Q73({}, A5K.settings),
            l1K = Q73(A5K.settings, k6C, x5K),
            C5K = x73('<div class="mbsc-sel-empty">' + l1K.filterEmptyText + '</div>'),
            H5K = l1K.readonly,
            I5K = {},
            V5K = l1K.layout || (/top|bottom|inline/.test(l1K.display) || l1K.filter ? 'liquid' : ''),
            h5K = V5K == 'liquid',
            P5K = U23.isNumeric(l1K.select) ? l1K.select : l1K.select == 'multiple' || f5K.prop('multiple'),
            K5K = P5K || (l1K.filter ? 1 : false),
            E5K = this.id + '_dummy',
            d5K = x73('label[for="' + this.id + '"]').attr('for', E5K),
            c5K = l1K.label !== undefined ? l1K.label : d5K.length ? d5K.text() : f5K.attr('name'),
            N5K = !!l1K.data,
            t5K = N5K ? !!l1K.group : x73('optgroup', f5K).length,
            r5K = l1K.group,
            B5K = t5K && r5K && r5K.groupWheel !== false,
            O5K = t5K && r5K && B5K && r5K.clustered === true,
            e5K = t5K && (!r5K || r5K.header !== false && !O5K),
            T5K = f5K.val() || (P5K ? [] : ['']),
            k5K = [];
        A5K.setVal = function(D6K, F6K, x6K, M6K, j6K) {
            if (K5K) {
                if (D6K && !P5K) {
                    D6K = [D6K];
                }
                if (D6K && T83(D6K)) {
                    D6K = D6K.split(',');
                }
                A5K._tempSelected[X5K] = U23.arrayToObject(D6K);
                if (!M6K) {
                    A5K._selected[X5K] = U23.arrayToObject(D6K);
                }
                D6K = D6K ? D6K[0] : null;
            }
            A5K._setVal(D6K, F6K, x6K, M6K, j6K);
        };
        A5K.getVal = function(w6K, s6K) {
            if (K5K) {
                var Q6K = U23.objectToArray(w6K ? A5K._tempSelected[X5K] : A5K._selected[X5K]);
                return P5K ? Q6K : Q6K.length ? Q6K[0] : null;
            }
            return s5K(w6K, s6K);
        };
        A5K.refresh = function(z6K, l6K) {
            if (z6K) {
                i5K = z6K;
            } else if (x73.isArray(l1K.data)) {
                i5K = l1K.data;
            }
            if (!z6K && a5K && l6K === undefined) {
                M1C(l1K.data.url, function(A0K) {
                    i5K = F5K(A0K);
                    M5K();
                }, l1K.data.dataType);
            } else {
                M5K(l6K);
            }
        };
        if (!l1K.invalid.length) {
            l1K.invalid = k5K;
        }
        if (B5K) {
            g5K = 0;
            X5K = 1;
        } else {
            g5K = -1;
            X5K = 0;
        }
        if (K5K) {
            if (P5K) {
                f5K.prop('multiple', true);
            }
            if (T5K && T83(T5K)) {
                T5K = T5K.split(',');
            }
            A5K._selected[X5K] = U23.arrayToObject(T5K);
        }
        if (A5K._dummyInput) {
            A5K._dummyInput.remove();
        }
        if (f5K.next().is('input.mbsc-control')) {
            W5K = f5K.off('.mbsc-form').next().removeAttr('tabindex');
        } else {
            if (l1K.input) {
                W5K = x73(l1K.input);
            } else {
                if (l1K.filter && l1K.display == 'inline') {
                    A5K._dummyInput = x73('<div class="mbsc-sel-input-wrap"><input type="text" id="' + E5K + '" class="mbsc-control ' + l1K.inputClass + '" readonly /></div>');
                } else {
                    W5K = x73('<input type="text" id="' + E5K + '" class="mbsc-control ' + l1K.inputClass + '" readonly />');
                    A5K._dummyInput = W5K;
                }
                if (l1K.showInput) {
                    A5K._dummyInput.insertBefore(f5K);
                    if (!W5K) {
                        W5K = A5K._dummyInput.find('#' + E5K);
                    }
                }
            }
        }
        A5K.attachShow(W5K.attr('placeholder', l1K.placeholder || ''));
        if (W5K[0] !== f5K[0]) {
            f5K.addClass('mbsc-sel-hdn').attr('tabindex', -1);
        }
        if (l1K.filter) {
            J5K = l1K.filter.minLength || 0;
        }
        a5K = l1K.data && l1K.data.url;
        if (a5K) {
            A5K.refresh();
        } else {
            if (N5K) {
                i5K = l1K.data;
            }
            G5K();
            U5K(f5K.val());
        }
        return {
            layout: V5K,
            headerText: false,
            anchor: W5K,
            compClass: 'mbsc-sel' + (B5K ? ' mbsc-sel-gr-whl' : '') + (K5K ? ' mbsc-sel-multi' : ''),
            setOnTap: B5K ? [false, true] : true,
            formatValue: w5K,
            parseValue: function X0K(f0K) {
                U5K(f0K === undefined ? f5K.val() : f0K);
                return B5K ? [y5K, L5K] : [L5K];
            },
            validate: function I0K(n0K) {
                var W0K = n0K.index,
                    L0K = [];
                L0K[X5K] = l1K.invalid;
                if (O5K && !Z5K && W0K === undefined) {
                    Q5K();
                }
                Z5K = false;
                return {
                    disabled: L0K
                };
            },
            onRead: j5K,
            onFill: j5K,
            onMarkupReady: function g0K(k0K, P0K) {
                if (l1K.filter) {
                    var u0K, K0K, B0K, R0K = x73('.mbsc-fr-w', k0K.target),
                        y0K = x73('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + l1K.filterClearIcon + '"></span>');
                    if (l1K.display == 'inline') {
                        u0K = W5K;
                        W5K.parent().find('.mbsc-sel-filter-clear').remove();
                    } else {
                        R0K.prepend('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>');
                        u0K = R0K.find('.mbsc-sel-filter-input');
                    }
                    R5K = '';
                    B0K = u0K[0];
                    u0K.prop('readonly', false).attr('placeholder', l1K.filterPlaceholderText).parent().append(y0K);
                    R0K.find('.mbsc-fr-c').prepend(C5K);
                    P0K.tap(y0K, function() {
                        B0K.value = '';
                        P0K.refresh();
                        y0K.removeClass('mbsc-sel-filter-show-clear');
                    });
                    u0K.on('keydown', function(O0K) {
                        if (O0K.keyCode == 13 || O0K.keyCode == 27) {
                            O0K.stopPropagation();
                            B0K.blur();
                        }
                    }).on('keyup', function() {
                        clearTimeout(K0K);
                        if (B0K.value.length) {
                            y0K.addClass('mbsc-sel-filter-show-clear');
                        } else {
                            y0K.removeClass('mbsc-sel-filter-show-clear');
                        }
                        K0K = setTimeout(function() {
                            if (R5K === B0K.value || P0K.trigger('onFilter', {
                                    filterText: B0K.value
                                }) === false) {
                                return;
                            }
                            R5K = B0K.value;
                            if (R5K.length >= J5K || !R5K.length) {
                                if (a5K && l1K.data.remoteFilter) {
                                    M1C(l1K.data.url + encodeURIComponent(R5K), function(r0K) {
                                        P0K.refresh(F5K(r0K));
                                    }, l1K.data.dataType);
                                } else {
                                    P0K.refresh(undefined, R5K);
                                }
                            }
                        }, 500);
                    });
                }
            },
            onBeforeShow: function t0K() {
                if (P5K && l1K.counter) {
                    l1K.headerText = function() {
                        var T0K = 0;
                        x73.each(A5K._tempSelected[X5K], function() {
                            T0K++;
                        });
                        return (T0K > 1 ? l1K.selectedPluralText || l1K.selectedText : l1K.selectedText).replace(/{count}/, T0K);
                    };
                }
                U5K(f5K.val());
                if (l1K.filter) {
                    G5K(undefined);
                }
                A5K.settings.wheels = D5K();
                Z5K = true;
            },
            onWheelGestureStart: function a0K(i0K) {
                if (i0K.index == g5K) {
                    l1K.readonly = [false, true];
                }
            },
            onWheelAnimationEnd: function E0K(N0K) {
                var C0K = A5K.getArrayVal(true);
                if (N0K.index == g5K) {
                    l1K.readonly = H5K;
                    if (C0K[g5K] != y5K) {
                        y5K = C0K[g5K];
                        L5K = u5K[y5K].options[0].value;
                        C0K[X5K] = L5K;
                        if (O5K) {
                            Q5K();
                        } else {
                            A5K.setArrayVal(C0K, false, false, true, p5K);
                        }
                    }
                } else if (N0K.index == X5K && C0K[X5K] != L5K) {
                    L5K = C0K[X5K];
                    if (B5K && I5K[L5K] && I5K[L5K].group != y5K) {
                        y5K = I5K[L5K].group;
                        C0K[g5K] = y5K;
                        A5K.setArrayVal(C0K, false, false, true, p5K);
                    }
                }
            },
            onItemTap: function q0K(U0K) {
                if (U0K.index == X5K) {
                    o5K[U0K.value] = I5K[U0K.value].text;
                    if (K5K && !P5K && U0K.selected) {
                        return false;
                    }
                }
            },
            onClose: function Z0K() {
                if (a5K && l1K.data.remoteFilter && R5K) {
                    A5K.refresh();
                }
            },
            onDestroy: function d0K() {
                if (A5K._dummyInput) {
                    A5K._dummyInput.remove();
                }
                f5K.removeClass('mbsc-sel-hdn').removeAttr('tabindex');
            }
        };
    };
    var O6C = {
        autostart: false,
        step: 1,
        useShortLabels: false,
        labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds', ''],
        labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Reset',
        lapText: 'Lap',
        hideText: 'Hide'
    };
    j73.presetShort('timer');
    j73.presets.scroller.timer = function(o0K) {
        function g4K(K4K) {
            return new Date(K4K.getUTCFullYear(), K4K.getUTCMonth(), K4K.getUTCDate(), K4K.getUTCHours(), K4K.getUTCMinutes(), K4K.getUTCSeconds(), K4K.getUTCMilliseconds());
        }

        function R4K(E4K) {
            var k4K = {};
            if (X4K && p0K[Y0K].index > p0K.days.index) {
                var T4K, t4K, C4K, a4K, i4K = new Date(),
                    O4K = e0K ? i4K : c0K,
                    r4K = e0K ? c0K : i4K;
                r4K = g4K(r4K);
                O4K = g4K(O4K);
                k4K.years = O4K.getFullYear() - r4K.getFullYear();
                k4K.months = O4K.getMonth() - r4K.getMonth();
                k4K.days = O4K.getDate() - r4K.getDate();
                k4K.hours = O4K.getHours() - r4K.getHours();
                k4K.minutes = O4K.getMinutes() - r4K.getMinutes();
                k4K.seconds = O4K.getSeconds() - r4K.getSeconds();
                k4K.fract = (O4K.getMilliseconds() - r4K.getMilliseconds()) / 10;
                for (T4K = m0K.length; T4K > 0; T4K--) {
                    t4K = m0K[T4K - 1];
                    C4K = p0K[t4K];
                    a4K = m0K[x73.inArray(t4K, m0K) - 1];
                    if (p0K[a4K] && k4K[t4K] < 0) {
                        k4K[a4K]--;
                        k4K[t4K] += a4K == 'months' ? 32 - new Date(O4K.getFullYear(), O4K.getMonth(), 32).getDate() : C4K.until + 1;
                    }
                }
                if (Y0K == 'months') {
                    k4K.months += k4K.years * 12;
                    delete k4K.years;
                }
            } else {
                x73(m0K).each(function(q4K, N4K) {
                    if (p0K[N4K].index <= p0K[Y0K].index) {
                        k4K[N4K] = Math.floor(E4K / p0K[N4K].limit);
                        E4K -= k4K[N4K] * p0K[N4K].limit;
                    }
                });
            }
            return k4K;
        }

        function u4K(d4K) {
            var o4K = 1,
                U4K = p0K[d4K],
                Z4K = U4K.wheel,
                V4K = U4K.prefix,
                G4K = 0,
                S4K = U4K.until,
                h4K = p0K[m0K[x73.inArray(d4K, m0K) - 1]];
            if (U4K.index <= p0K[Y0K].index && (!h4K || h4K.limit > w0K)) {
                if (!b0K[d4K]) {
                    n4K[0].push(Z4K);
                }
                b0K[d4K] = 1;
                Z4K.data = [];
                Z4K.label = U4K.label || '';
                Z4K.cssClass = 'mbsc-timer-whl-' + d4K;
                if (w0K >= U4K.limit) {
                    o4K = Math.max(Math.round(w0K / U4K.limit), 1);
                    j0K = o4K * U4K.limit;
                }
                if (d4K == Y0K) {
                    Z4K.min = 0;
                    Z4K.data = function(p4K) {
                        return {
                            value: p4K,
                            display: y4K(p4K, V4K, U4K.label)
                        };
                    };
                    Z4K.getIndex = function(m4K) {
                        return m4K;
                    };
                } else {
                    for (s0K = G4K; s0K <= S4K; s0K += o4K) {
                        Z4K.data.push({
                            value: s0K,
                            display: y4K(s0K, V4K, U4K.label)
                        });
                    }
                }
            }
        }

        function y4K(e4K, c4K, Y4K) {
            return (c4K || '') + (e4K < 10 ? '0' : '') + e4K + '<span class="mbsc-timer-lbl">' + Y4K + '</span>';
        }

        function D0K(H4K) {
            var J4K = [],
                v4K, b4K = R4K(H4K);
            x73(m0K).each(function(M4K, D4K) {
                if (b0K[D4K]) {
                    v4K = Math.max(Math.round(w0K / p0K[D4K].limit), 1);
                    J4K.push(Math.round(b4K[D4K] / v4K) * v4K);
                }
            });
            return J4K;
        }

        function W4K(F4K) {
            if (X4K) {
                G0K = c0K - new Date();
                if (G0K < 0) {
                    G0K *= -1;
                    e0K = true;
                } else {
                    e0K = false;
                }
                h0K = 0;
                F0K = true;
            } else if (c0K !== undefined) {
                F0K = false;
                G0K = c0K * 1000;
                e0K = V0K.mode != 'countdown';
                if (F4K) {
                    h0K = 0;
                }
            } else {
                G0K = 0;
                e0K = V0K.mode != 'countdown';
                F0K = e0K;
                if (F4K) {
                    h0K = 0;
                }
            }
        }

        function L4K() {
            if (J0K) {
                x73('.mbsc-fr-w', S0K).addClass('mbsc-timer-running mbsc-timer-locked');
                x73('.mbsc-timer-btn-toggle-c > div', S0K).text(V0K.stopText);
                if (o0K.buttons.start.icon) {
                    x73('.mbsc-timer-btn-toggle-c > div', S0K).removeClass('mbsc-ic-' + o0K.buttons.start.icon);
                }
                if (o0K.buttons.stop.icon) {
                    x73('.mbsc-timer-btn-toggle-c > div', S0K).addClass('mbsc-ic-' + o0K.buttons.stop.icon);
                }
                if (V0K.mode == 'stopwatch') {
                    x73('.mbsc-timer-btn-resetlap-c > div', S0K).text(V0K.lapText);
                    if (o0K.buttons.reset.icon) {
                        x73('.mbsc-timer-btn-resetlap-c > div', S0K).removeClass('mbsc-ic-' + o0K.buttons.reset.icon);
                    }
                    if (o0K.buttons.lap.icon) {
                        x73('.mbsc-timer-btn-resetlap-c > div', S0K).addClass('mbsc-ic-' + o0K.buttons.lap.icon);
                    }
                }
            } else {
                x73('.mbsc-fr-w', S0K).removeClass('mbsc-timer-running');
                x73('.mbsc-timer-btn-toggle-c > div', S0K).text(V0K.startText);
                if (o0K.buttons.start.icon) {
                    x73('.mbsc-timer-btn-toggle-c > div', S0K).addClass('mbsc-ic-' + o0K.buttons.start.icon);
                }
                if (o0K.buttons.stop.icon) {
                    x73('.mbsc-timer-btn-toggle-c > div', S0K).removeClass('mbsc-ic-' + o0K.buttons.stop.icon);
                }
                if (V0K.mode == 'stopwatch') {
                    x73('.mbsc-timer-btn-resetlap-c > div', S0K).text(V0K.resetText);
                    if (o0K.buttons.reset.icon) {
                        x73('.mbsc-timer-btn-resetlap-c > div', S0K).addClass('mbsc-ic-' + o0K.buttons.reset.icon);
                    }
                    if (o0K.buttons.lap.icon) {
                        x73('.mbsc-timer-btn-resetlap-c > div', S0K).removeClass('mbsc-ic-' + o0K.buttons.lap.icon);
                    }
                }
            }
        }
        var s0K, f4K, j0K, M0K, x0K, Q0K, G0K, h0K, e0K, S0K, P4K, B4K = Q73({}, o0K.settings),
            V0K = Q73(o0K.settings, O6C, B4K),
            v0K = V0K.useShortLabels ? V0K.labelsShort : V0K.labels,
            I4K = ['toggle', 'resetlap'],
            m0K = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'fract'],
            p0K = {
                'years': {
                    index: 6,
                    until: 10,
                    limit: 1000 * 60 * 60 * 24 * 365,
                    label: v0K[0],
                    wheel: {}
                },
                'months': {
                    index: 5,
                    until: 11,
                    limit: 1000 * 60 * 60 * 24 * 30,
                    label: v0K[1],
                    wheel: {}
                },
                'days': {
                    index: 4,
                    until: 31,
                    limit: 1000 * 60 * 60 * 24,
                    label: v0K[2],
                    wheel: {}
                },
                'hours': {
                    index: 3,
                    until: 23,
                    limit: 1000 * 60 * 60,
                    label: v0K[3],
                    wheel: {}
                },
                'minutes': {
                    index: 2,
                    until: 59,
                    limit: 1000 * 60,
                    label: v0K[4],
                    wheel: {}
                },
                'seconds': {
                    index: 1,
                    until: 59,
                    limit: 1000,
                    label: v0K[5],
                    wheel: {}
                },
                'fract': {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: v0K[6],
                    prefix: '.',
                    wheel: {}
                }
            },
            b0K = {},
            l0K = [],
            A4K = 0,
            J0K = false,
            H0K = true,
            F0K = false,
            w0K = Math.max(10, V0K.step * 1000),
            Y0K = V0K.maxWheel,
            z0K = V0K.mode == 'stopwatch' || X4K,
            c0K = V0K.targetTime,
            X4K = c0K && c0K.getTime !== undefined,
            n4K = [
                []
            ];
        o0K.start = function() {
            if (H0K) {
                o0K.reset();
            }
            if (!J0K) {
                W4K();
                if (!F0K && h0K >= G0K) {
                    return;
                }
                J0K = true;
                H0K = false;
                x0K = new Date();
                M0K = h0K;
                V0K.readonly = true;
                o0K.setVal(D0K(e0K ? h0K : G0K - h0K), true, true, false, 100);
                f4K = setInterval(function() {
                    h0K = new Date() - x0K + M0K;
                    o0K.setVal(D0K(e0K ? h0K : G0K - h0K), true, true, false, Math.min(100, j0K - 10));
                    if (!F0K && h0K + j0K >= G0K) {
                        clearInterval(f4K);
                        setTimeout(function() {
                            o0K.stop();
                            h0K = G0K;
                            o0K.setVal(D0K(e0K ? h0K : 0), true, true, false, 100);
                            o0K.trigger('onFinish', {
                                time: G0K
                            });
                            H0K = true;
                        }, G0K - h0K);
                    }
                }, j0K);
                L4K();
                o0K.trigger('onStart');
            }
        };
        o0K.stop = function() {
            if (J0K) {
                J0K = false;
                clearInterval(f4K);
                h0K = new Date() - x0K + M0K;
                L4K();
                o0K.trigger('onStop', {
                    ellapsed: h0K
                });
            }
        };
        o0K.toggle = function() {
            if (J0K) {
                o0K.stop();
            } else {
                o0K.start();
            }
        };
        o0K.reset = function() {
            o0K.stop();
            h0K = 0;
            l0K = [];
            A4K = 0;
            o0K.setVal(D0K(e0K ? 0 : G0K), true, true, false, 100);
            o0K.settings.readonly = z0K;
            H0K = true;
            if (!z0K) {
                x73('.mbsc-fr-w', S0K).removeClass('mbsc-timer-locked');
            }
            o0K.trigger('onReset');
        };
        o0K.lap = function() {
            if (J0K) {
                Q0K = new Date() - x0K + M0K;
                P4K = Q0K - A4K;
                A4K = Q0K;
                l0K.push(Q0K);
                o0K.trigger('onLap', {
                    ellapsed: Q0K,
                    lap: P4K,
                    laps: l0K
                });
            }
        };
        o0K.resetlap = function() {
            if (J0K && V0K.mode == 'stopwatch') {
                o0K.lap();
            } else {
                o0K.reset();
            }
        };
        o0K.getTime = function() {
            return G0K;
        };
        o0K.setTime = function(x4K) {
            c0K = x4K / 1000;
            G0K = x4K;
        };
        o0K.getEllapsedTime = function() {
            return J0K ? new Date() - x0K + M0K : 0;
        };
        o0K.setEllapsedTime = function(j4K, Q4K) {
            if (!H0K) {
                M0K = h0K = j4K;
                x0K = new Date();
                o0K.setVal(D0K(e0K ? h0K : G0K - h0K), true, Q4K, false, 100);
            }
        };
        W4K(true);
        if (!Y0K && !G0K) {
            Y0K = 'minutes';
        }
        if (V0K.display !== 'inline') {
            I4K.push('hide');
        }
        if (!Y0K) {
            x73(m0K).each(function(s4K, w4K) {
                if (!Y0K && G0K >= p0K[w4K].limit) {
                    Y0K = w4K;
                    return false;
                }
            });
        }
        x73(m0K).each(function(l4K, z4K) {
            u4K(z4K);
        });
        j0K = Math.max(87, j0K);
        if (V0K.autostart) {
            setTimeout(function() {
                o0K.start();
            }, 0);
        }
        o0K.handlers.toggle = o0K.toggle;
        o0K.handlers.start = o0K.start;
        o0K.handlers.stop = o0K.stop;
        o0K.handlers.resetlap = o0K.resetlap;
        o0K.handlers.reset = o0K.reset;
        o0K.handlers.lap = o0K.lap;
        o0K.buttons.toggle = {
            parentClass: 'mbsc-timer-btn-toggle-c',
            text: V0K.startText,
            icon: V0K.startIcon,
            handler: 'toggle'
        };
        o0K.buttons.start = {
            text: V0K.startText,
            icon: V0K.startIcon,
            handler: 'start'
        };
        o0K.buttons.stop = {
            text: V0K.stopText,
            icon: V0K.stopIcon,
            handler: 'stop'
        };
        o0K.buttons.reset = {
            text: V0K.resetText,
            icon: V0K.resetIcon,
            handler: 'reset'
        };
        o0K.buttons.lap = {
            text: V0K.lapText,
            icon: V0K.lapIcon,
            handler: 'lap'
        };
        o0K.buttons.resetlap = {
            parentClass: 'mbsc-timer-btn-resetlap-c',
            text: V0K.resetText,
            icon: V0K.resetIcon,
            handler: 'resetlap'
        };
        o0K.buttons.hide = {
            parentClass: 'mbsc-timer-btn-hide-c',
            text: V0K.hideText,
            icon: V0K.closeIcon,
            handler: 'cancel'
        };
        return {
            wheels: n4K,
            headerText: false,
            readonly: z0K,
            buttons: I4K,
            mode: 'countdown',
            compClass: 'mbsc-timer',
            parseValue: function A3K() {
                return D0K(e0K ? 0 : G0K);
            },
            formatValue: function X3K(L3K) {
                var I3K = '',
                    f3K = 0;
                x73(m0K).each(function(n3K, W3K) {
                    if (W3K == 'fract') {
                        return;
                    }
                    if (b0K[W3K]) {
                        I3K += L3K[f3K] + (W3K == 'seconds' && b0K.fract ? '.' + L3K[f3K + 1] : '') + ' ' + v0K[n3K] + ' ';
                        f3K++;
                    }
                });
                return I3K;
            },
            validate: function g3K(y3K) {
                var P3K = y3K.values,
                    u3K = y3K.index,
                    B3K = 0;
                if (H0K && u3K !== undefined) {
                    c0K = 0;
                    x73(m0K).each(function(K3K, R3K) {
                        if (b0K[R3K]) {
                            c0K += p0K[R3K].limit * P3K[B3K];
                            B3K++;
                        }
                    });
                    c0K /= 1000;
                    W4K(true);
                }
            },
            onBeforeShow: function k3K() {
                V0K.showLabel = true;
            },
            onMarkupReady: function O3K(r3K) {
                S0K = x73(r3K.target);
                L4K();
                if (z0K) {
                    x73('.mbsc-fr-w', S0K).addClass('mbsc-timer-locked');
                }
            },
            onPosition: function t3K(T3K) {
                x73('.mbsc-fr-w', T3K.target).css('min-width', 0).css('min-width', x73('.mbsc-fr-btn-cont', T3K.target)[0].offsetWidth);
            },
            onDestroy: function a3K() {
                clearInterval(f4K);
            }
        };
    };
    var r6C = {
        wheelOrder: 'hhiiss',
        useShortLabels: false,
        min: 0,
        max: Infinity,
        labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'],
        labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs']
    };
    j73.presetShort('timespan');
    j73.presets.scroller.timespan = function(q3K) {
        function h3K(F3K) {
            var M3K = {};
            x73(G3K).each(function(j3K, x3K) {
                M3K[x3K] = U3K[x3K] ? Math.floor(F3K / E3K[x3K].limit) : 0;
                F3K -= M3K[x3K] * E3K[x3K].limit;
            });
            return M3K;
        }

        function D3K(s3K) {
            var l3K = false,
                z3K = m3K[U3K[s3K] - 1] || 1,
                w3K = E3K[s3K],
                A9K = w3K.label,
                Q3K = w3K.wheel;
            Q3K.data = [];
            Q3K.label = w3K.label;
            if (S3K.match(new RegExp(w3K.re + w3K.re, 'i'))) {
                l3K = true;
            }
            if (s3K == d3K) {
                Q3K.min = V3K[s3K];
                Q3K.max = o3K[s3K];
                Q3K.data = function(X9K) {
                    return {
                        value: X9K * z3K,
                        display: J3K(X9K * z3K, l3K, A9K)
                    };
                };
                Q3K.getIndex = function(f9K) {
                    return Math.round(f9K / z3K);
                };
            } else {
                for (Z3K = 0; Z3K <= w3K.until; Z3K += z3K) {
                    Q3K.data.push({
                        value: Z3K,
                        display: J3K(Z3K, l3K, A9K)
                    });
                }
            }
        }

        function J3K(I9K, L9K, W9K) {
            return (I9K < 10 && L9K ? '0' : '') + I9K + '<span class="mbsc-ts-lbl">' + W9K + '</span>';
        }

        function b3K(g9K) {
            var B9K = 0,
                n9K = 0;
            x73.each(C3K, function(y9K, P9K) {
                if (!isNaN(+g9K[B9K])) {
                    n9K += E3K[P9K.v].limit * g9K[y9K];
                }
            });
            return n9K;
        }

        function H3K(R9K, u9K) {
            return Math.floor(R9K / u9K) * u9K;
        }
        var Z3K, p3K, v3K, V3K, o3K, c3K = Q73({}, q3K.settings),
            i3K = Q73(q3K.settings, r6C, c3K),
            S3K = i3K.wheelOrder,
            N3K = i3K.useShortLabels ? i3K.labelsShort : i3K.labels,
            G3K = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
            E3K = {
                'years': {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 1000 * 60 * 60 * 24 * 365,
                    label: N3K[0],
                    re: 'y',
                    wheel: {}
                },
                'months': {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 1000 * 60 * 60 * 24 * 30,
                    label: N3K[1],
                    re: 'm',
                    wheel: {}
                },
                'days': {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 1000 * 60 * 60 * 24,
                    label: N3K[2],
                    re: 'd',
                    wheel: {}
                },
                'hours': {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 1000 * 60 * 60,
                    label: N3K[3],
                    re: 'h',
                    wheel: {}
                },
                'minutes': {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 1000 * 60,
                    label: N3K[4],
                    re: 'i',
                    wheel: {}
                },
                'seconds': {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1000,
                    label: N3K[5],
                    re: 's',
                    wheel: {}
                }
            },
            C3K = [],
            m3K = i3K.steps || [],
            U3K = {},
            d3K = 'seconds',
            Y3K = i3K.defaultValue || Math.max(i3K.min, Math.min(0, i3K.max)),
            e3K = [
                []
            ];
        x73(G3K).each(function(k9K, K9K) {
            p3K = S3K.search(new RegExp(E3K[K9K].re, 'i'));
            if (p3K > -1) {
                C3K.push({
                    o: p3K,
                    v: K9K
                });
                if (E3K[K9K].index > E3K[d3K].index) {
                    d3K = K9K;
                }
            }
        });
        C3K.sort(function(O9K, r9K) {
            return O9K.o > r9K.o ? 1 : -1;
        });
        x73.each(C3K, function(T9K, t9K) {
            U3K[t9K.v] = T9K + 1;
            e3K[0].push(E3K[t9K.v].wheel);
        });
        V3K = h3K(i3K.min);
        o3K = h3K(i3K.max);
        x73.each(C3K, function(i9K, a9K) {
            D3K(a9K.v);
        });
        q3K.getVal = function(E9K, C9K) {
            return C9K ? q3K._getVal(E9K) : q3K._hasValue || E9K ? b3K(q3K.getArrayVal(E9K)) : null;
        };
        return {
            showLabel: true,
            wheels: e3K,
            compClass: 'mbsc-ts',
            parseValue: function N9K(U9K) {
                var q9K = [],
                    Z9K;
                if (j73.util.isNumeric(U9K) || !U9K) {
                    v3K = h3K(U9K || Y3K);
                    x73.each(C3K, function(o9K, d9K) {
                        q9K.push(v3K[d9K.v]);
                    });
                } else {
                    x73.each(C3K, function(h9K, V9K) {
                        Z9K = new RegExp('(\\d+)\\s?(' + i3K.labels[E3K[V9K.v].ord] + '|' + i3K.labelsShort[E3K[V9K.v].ord] + ')', 'gi').exec(U9K);
                        q9K.push(Z9K ? Z9K[1] : 0);
                    });
                }
                x73(q9K).each(function(G9K, S9K) {
                    q9K[G9K] = H3K(S9K, m3K[G9K] || 1);
                });
                return q9K;
            },
            formatValue: function p9K(e9K) {
                var m9K = '';
                x73.each(C3K, function(c9K, Y9K) {
                    m9K += +e9K[c9K] ? e9K[c9K] + ' ' + E3K[Y9K.v].label + ' ' : '';
                });
                return m9K ? m9K.replace(/\s+$/g, '') : 0;
            },
            validate: function J9K(w9K) {
                var j9K, v9K, b9K, H9K, x9K = w9K.values,
                    Q9K = w9K.direction,
                    F9K = [],
                    M9K = true,
                    D9K = true;
                x73(G3K).each(function(z9K, s9K) {
                    if (U3K[s9K] !== undefined) {
                        b9K = U3K[s9K] - 1;
                        F9K[b9K] = [];
                        H9K = {};
                        if (s9K != d3K) {
                            if (M9K) {
                                for (v9K = o3K[s9K] + 1; v9K <= E3K[s9K].until; v9K++) {
                                    H9K[v9K] = true;
                                }
                            }
                            if (D9K) {
                                for (v9K = 0; v9K < V3K[s9K]; v9K++) {
                                    H9K[v9K] = true;
                                }
                            }
                        }
                        x9K[b9K] = q3K.getValidValue(b9K, x9K[b9K], Q9K, H9K);
                        j9K = h3K(b3K(x9K));
                        M9K = M9K && j9K[s9K] == o3K[s9K];
                        D9K = D9K && j9K[s9K] == V3K[s9K];
                        x73.each(H9K, function(l9K) {
                            F9K[b9K].push(l9K);
                        });
                    }
                });
                return {
                    disabled: F9K
                };
            }
        };
    };
    j73.presets.scroller.treelist = j73.presets.scroller.list;
    j73.presetShort('list');
    j73.presetShort('treelist');
    j73.i18n.ca = {
        setText: 'Acceptar',
        cancelText: 'Cancel·lar',
        clearText: 'Esborrar',
        selectedText: '{count} seleccionat',
        selectedPluralText: '{count} seleccionats',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayText: 'Dia',
        hourText: 'Hores',
        minuteText: 'Minuts',
        monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        monthText: 'Mes',
        secText: 'Segons',
        timeFormat: 'HH:ii',
        yearText: 'Any',
        nowText: 'Ara',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Avui',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Temps',
        calendarText: 'Calendari',
        closeText: 'Tancar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Sencer',
        fractionText: 'Fracció',
        unitText: 'Unitat',
        labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
        labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
        startText: 'Iniciar',
        stopText: 'Aturar',
        resetText: 'Reiniciar',
        lapText: 'Volta',
        hideText: 'Amagar',
        backText: 'Enrere',
        undoText: 'Desfés',
        offText: 'No',
        onText: 'Si'
    };
    j73.i18n.cs = {
        setText: 'Zadej',
        cancelText: 'Storno',
        clearText: 'Vymazat',
        selectedText: 'Označený: {count}',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
        dayText: 'Den',
        hourText: 'Hodiny',
        minuteText: 'Minuty',
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
        monthText: 'Měsíc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teď',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendář',
        closeText: 'Zavřít',
        fromText: 'Začátek',
        toText: 'Konec',
        wholeText: 'Celý',
        fractionText: 'Část',
        unitText: 'Jednotka',
        labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovat',
        lapText: 'Etapa',
        hideText: 'Schovat',
        backText: 'Zpět',
        undoText: 'Zpět',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.da = {
        setText: 'Sæt',
        cancelText: 'Annuller',
        clearText: 'Ryd',
        selectedText: '{count} valgt',
        selectedPluralText: '{count} valgt',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timer',
        minuteText: 'Minutter',
        monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Måned',
        secText: 'Sekunder',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH.ii',
        yearText: 'År',
        nowText: 'Nu',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Luk',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hele',
        fractionText: 'Dele',
        unitText: 'Enhed',
        labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Nulstil',
        lapText: 'Omgang',
        hideText: 'Skjul',
        offText: 'Fra',
        onText: 'Til',
        backText: 'Tilbage',
        undoText: 'Fortryd'
    };
    j73.i18n.de = {
        setText: 'OK',
        cancelText: 'Abbrechen',
        clearText: 'Löschen',
        selectedText: '{count} ausgewählt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayNamesMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
        dayText: 'Tag',
        delimiter: '.',
        hourText: 'Stunde',
        minuteText: 'Minuten',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        monthText: 'Monat',
        secText: 'Sekunden',
        timeFormat: 'HH:ii',
        yearText: 'Jahr',
        nowText: 'Jetzt',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Heute',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Zeit',
        calendarText: 'Kalender',
        closeText: 'Schließen',
        fromText: 'Von',
        toText: 'Um',
        wholeText: 'Ganze Zahl',
        fractionText: 'Bruchzahl',
        unitText: 'Maßeinheit',
        labels: ['Jahre', 'Monate', 'Tage', 'Stunden', 'Minuten', 'Sekunden', ''],
        labelsShort: ['Jahr.', 'Mon.', 'Tag.', 'Std.', 'Min.', 'Sek.', ''],
        startText: 'Starten',
        stopText: 'Stoppen',
        resetText: 'Zurücksetzen',
        lapText: 'Lap',
        hideText: 'Ausblenden',
        backText: 'Zurück',
        undoText: 'Rückgängig machen',
        offText: 'Aus',
        onText: 'Ein',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n['en-GB'] = j73.i18n['en-UK'] = {
        dateFormat: 'dd/mm/yy',
        timeFormat: 'HH:ii'
    };
    j73.i18n.es = {
        setText: 'Aceptar',
        cancelText: 'Cancelar',
        clearText: 'Borrar',
        selectedText: '{count} seleccionado',
        selectedPluralText: '{count} seleccionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'D&#237;a',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        monthText: 'Mes',
        secText: 'Segundos',
        timeFormat: 'HH:ii',
        yearText: 'A&ntilde;o',
        nowText: 'Ahora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Fecha',
        timeText: 'Tiempo',
        calendarText: 'Calendario',
        closeText: 'Cerrar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Entero',
        fractionText: 'Fracción',
        unitText: 'Unidad',
        labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
        startText: 'Iniciar',
        stopText: 'Deténgase',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Atrás',
        undoText: 'Deshacer',
        offText: 'No',
        onText: 'Sí',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    var z73 = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    };
    z73.jalaliToGregorian = function(B7K, n7K, g7K) {
        B7K = parseInt(B7K);
        n7K = parseInt(n7K);
        g7K = parseInt(g7K);
        var X7K;
        var L7K = B7K - 979;
        var P7K = n7K - 1;
        var y7K = g7K - 1;
        var W7K = 365 * L7K + parseInt(L7K / 33) * 8 + parseInt((L7K % 33 + 3) / 4);
        for (X7K = 0; X7K < P7K; ++X7K) {
            W7K += z73.jDaysInMonth[X7K];
        }
        W7K += y7K;
        var A7K = W7K + 79;
        var f7K = 1600 + 400 * parseInt(A7K / 146097);
        A7K = A7K % 146097;
        var I7K = true;
        if (A7K >= 36525) {
            A7K--;
            f7K += 100 * parseInt(A7K / 36524);
            A7K = A7K % 36524;
            if (A7K >= 365) {
                A7K++;
            } else {
                I7K = false;
            }
        }
        f7K += 4 * parseInt(A7K / 1461);
        A7K %= 1461;
        if (A7K >= 366) {
            I7K = false;
            A7K--;
            f7K += parseInt(A7K / 365);
            A7K = A7K % 365;
        }
        for (X7K = 0; A7K >= z73.gDaysInMonth[X7K] + (X7K == 1 && I7K); X7K++) {
            A7K -= z73.gDaysInMonth[X7K] + (X7K == 1 && I7K);
        }
        var R7K = X7K + 1;
        var u7K = A7K + 1;
        return [f7K, R7K, u7K];
    };
    z73.checkDate = function(k7K, K7K, O7K) {
        return !(k7K < 0 || k7K > 32767 || K7K < 1 || K7K > 12 || O7K < 1 || O7K > z73.jDaysInMonth[K7K - 1] + (K7K == 12 && (k7K - 979) % 33 % 4 === 0));
    };
    z73.gregorianToJalali = function(N7K, i7K, E7K) {
        N7K = parseInt(N7K);
        i7K = parseInt(i7K);
        E7K = parseInt(E7K);
        var t7K;
        var T7K = N7K - 1600;
        var C7K = i7K - 1;
        var U7K = E7K - 1;
        var a7K = 365 * T7K + parseInt((T7K + 3) / 4) - parseInt((T7K + 99) / 100) + parseInt((T7K + 399) / 400);
        for (t7K = 0; t7K < C7K; ++t7K) {
            a7K += z73.gDaysInMonth[t7K];
        }
        if (C7K > 1 && (T7K % 4 === 0 && T7K % 100 !== 0 || T7K % 400 === 0)) {
            ++a7K;
        }
        a7K += U7K;
        var r7K = a7K - 79;
        var Z7K = parseInt(r7K / 12053);
        r7K %= 12053;
        var q7K = 979 + 33 * Z7K + 4 * parseInt(r7K / 1461);
        r7K %= 1461;
        if (r7K >= 366) {
            q7K += parseInt((r7K - 1) / 365);
            r7K = (r7K - 1) % 365;
        }
        for (t7K = 0; t7K < 11 && r7K >= z73.jDaysInMonth[t7K]; ++t7K) {
            r7K -= z73.jDaysInMonth[t7K];
        }
        var o7K = t7K + 1;
        var d7K = r7K + 1;
        return [q7K, o7K, d7K];
    };
    j73.i18n.fa = {
        setText: 'تاييد',
        cancelText: 'انصراف',
        clearText: 'واضح ',
        selectedText: '{count} منتخب',
        dateFormat: 'yy/mm/dd',
        dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
        dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayText: 'روز',
        hourText: 'ساعت',
        minuteText: 'دقيقه',
        monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthText: 'ماه',
        secText: 'ثانيه',
        timeFormat: 'HH:ii',
        timeWheels: 'iiHH',
        yearText: 'سال',
        nowText: 'اکنون',
        amText: 'ب',
        pmText: 'ص',
        todayText: 'امروز',
        getYear: function V7K(h7K) {
            return z73.gregorianToJalali(h7K.getFullYear(), h7K.getMonth() + 1, h7K.getDate())[0];
        },
        getMonth: function G7K(S7K) {
            return --z73.gregorianToJalali(S7K.getFullYear(), S7K.getMonth() + 1, S7K.getDate())[1];
        },
        getDay: function p7K(m7K) {
            return z73.gregorianToJalali(m7K.getFullYear(), m7K.getMonth() + 1, m7K.getDate())[2];
        },
        getDate: function e7K(J7K, c7K, v7K, b7K, H7K, D7K, M7K) {
            if (c7K < 0) {
                J7K += Math.floor(c7K / 12);
                c7K = 12 + c7K % 12;
            }
            if (c7K > 11) {
                J7K += Math.floor(c7K / 12);
                c7K = c7K % 12;
            }
            var Y7K = z73.jalaliToGregorian(J7K, +c7K + 1, v7K);
            return new Date(Y7K[0], Y7K[1] - 1, Y7K[2], b7K || 0, H7K || 0, D7K || 0, M7K || 0);
        },
        getMaxDayOfMonth: function F7K(j7K, Q7K) {
            var x7K = 31;
            while (z73.checkDate(j7K, Q7K + 1, x7K) === false) {
                x7K--;
            }
            return x7K;
        },
        firstDay: 6,
        rtl: true,
        dateText: 'تاریخ ',
        timeText: 'زمان ',
        calendarText: 'تقویم',
        closeText: 'نزدیک',
        fromText: 'شروع ',
        toText: 'پایان',
        wholeText: 'تمام',
        fractionText: 'کسر',
        unitText: 'واحد',
        labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        startText: 'شروع',
        stopText: 'پايان',
        resetText: 'تنظیم مجدد',
        lapText: 'Lap',
        hideText: 'پنهان کردن',
        backText: 'پشت',
        undoText: 'واچیدن'
    };
    j73.i18n.fr = {
        setText: 'Terminer',
        cancelText: 'Annuler',
        clearText: 'Effacer',
        selectedText: '{count} sélectionné',
        selectedPluralText: '{count} sélectionnés',
        dateFormat: 'dd/mm/yy',
        dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'Jour',
        monthText: 'Mois',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        hourText: 'Heures',
        minuteText: 'Minutes',
        secText: 'Secondes',
        timeFormat: 'HH:ii',
        yearText: 'Année',
        nowText: 'Maintenant',
        pmText: 'pm',
        amText: 'am',
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: 'Date',
        timeText: 'Heure',
        calendarText: 'Calendrier',
        closeText: 'Fermer',
        fromText: 'Démarrer',
        toText: 'Fin',
        wholeText: 'Entier',
        fractionText: 'Fraction',
        unitText: 'Unité',
        labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
        labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
        startText: 'Démarrer',
        stopText: 'Arrêter',
        resetText: 'Réinitialiser',
        lapText: 'Lap',
        hideText: 'Cachez',
        backText: 'Retour',
        undoText: 'Annuler',
        offText: 'Non',
        onText: 'Oui',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.he = {
        rtl: true,
        setText: 'שמירה',
        cancelText: 'ביטול',
        clearText: 'נקה',
        selectedText: '{count} נבחר',
        selectedPluralText: '{count} נבחרו',
        dateFormat: 'dd/mm/yy',
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        dayText: 'יום',
        hourText: 'שעות',
        minuteText: 'דקות',
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: 'חודש',
        secText: 'שניות',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        timeWheels: 'iiHH',
        yearText: 'שנה',
        nowText: 'עכשיו',
        firstDay: 0,
        dateText: 'תאריך',
        timeText: 'זמן',
        calendarText: 'תאריכון',
        closeText: 'סגירה',
        todayText: 'היום',
        eventText: 'מִקרֶה',
        eventsText: 'מִקרֶה',
        fromText: 'התחלה',
        toText: 'סיום',
        wholeText: 'כֹּל',
        fractionText: 'שבריר',
        unitText: 'יחידה',
        labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        startText: 'התחל',
        stopText: 'עצור',
        resetText: 'אתחול',
        lapText: 'הקפה',
        hideText: 'הסתר',
        offText: 'כיבוי',
        onText: 'הפעלה',
        backText: 'חזור',
        undoText: 'ביטול פעולה'
    };
    j73.i18n.hu = {
        setText: 'OK',
        cancelText: 'Mégse',
        clearText: 'Törlés',
        selectedText: '{count} kiválasztva',
        dateFormat: 'yy.mm.dd.',
        dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
        dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
        dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
        dayText: 'Nap',
        delimiter: '.',
        hourText: 'Óra',
        minuteText: 'Perc',
        monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Hónap',
        secText: 'Másodperc',
        timeFormat: 'H:ii',
        yearText: 'Év',
        nowText: 'Most',
        pmText: 'pm',
        amText: 'am',
        firstDay: 1,
        dateText: 'Dátum',
        timeText: 'Idő',
        calendarText: 'Naptár',
        todayText: 'Ma',
        prevMonthText: 'Előző hónap',
        nextMonthText: 'Következő hónap',
        prevYearText: 'Előző év',
        nextYearText: 'Következő év',
        closeText: 'Bezár',
        eventText: 'esemény',
        eventsText: 'esemény',
        fromText: 'Eleje',
        toText: 'Vége',
        wholeText: 'Egész',
        fractionText: 'Tört',
        unitText: 'Egység',
        labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
        labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
        startText: 'Indít',
        stopText: 'Megállít',
        resetText: 'Visszaállít',
        lapText: 'Lap',
        hideText: 'Elrejt',
        backText: 'Vissza',
        undoText: 'Visszavon',
        offText: 'Ki',
        onText: 'Be',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.it = {
        setText: 'OK',
        cancelText: 'Annulla',
        clearText: 'Chiarire',
        selectedText: '{count} selezionato',
        selectedPluralText: '{count} selezionati',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
        dayText: 'Giorno',
        hourText: 'Ore',
        minuteText: 'Minuti',
        monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        monthText: 'Mese',
        secText: 'Secondi',
        timeFormat: 'HH:ii',
        yearText: 'Anno',
        nowText: 'Ora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Oggi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Volta',
        calendarText: 'Calendario',
        closeText: 'Chiudere',
        fromText: 'Inizio',
        toText: 'Fine',
        wholeText: 'Intero',
        fractionText: 'Frazione',
        unitText: 'Unità',
        labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
        labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
        startText: 'Inizio',
        stopText: 'Arresto',
        resetText: 'Ripristina',
        lapText: 'Lap',
        hideText: 'Nascondi',
        backText: 'Indietro',
        undoText: 'Annulla',
        offText: 'Via',
        onText: 'Su',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.ja = {
        setText: 'セット',
        cancelText: 'キャンセル',
        clearText: 'クリア',
        selectedText: '{count} 選択',
        dateFormat: 'yy年mm月dd日',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        dayText: '日',
        hourText: '時',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '今',
        pmText: '午後',
        amText: '午前',
        yearSuffix: '年',
        monthSuffix: '月',
        daySuffix: '日',
        todayText: '今日',
        dateText: '日付',
        timeText: '時間',
        calendarText: 'カレンダー',
        closeText: 'クローズ',
        fromText: '開始',
        toText: '終わり',
        wholeText: '全数',
        fractionText: '分数',
        unitText: '単位',
        labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        startText: '開始',
        stopText: '停止',
        resetText: 'リセット',
        lapText: 'ラップ',
        hideText: '隠す',
        backText: 'バック',
        undoText: 'アンドゥ'
    };
    j73.i18n.lt = {
        setText: 'OK',
        cancelText: 'Atšaukti',
        clearText: 'Išvalyti',
        selectedText: 'Pasirinktas {count}',
        selectedPluralText: 'Pasirinkti {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
        dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayText: 'Diena',
        hourText: 'Valanda',
        minuteText: 'Minutes',
        monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
        monthText: 'Mėnuo',
        secText: 'Sekundes',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'Metai',
        nowText: 'Dabar',
        todayText: 'Šiandien',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Laikas',
        calendarText: 'Kalendorius',
        closeText: 'Uždaryti',
        fromText: 'Nuo',
        toText: 'Iki',
        wholeText: 'Visas',
        fractionText: 'Frakcija',
        unitText: 'Vienetas',
        labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
        labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
        startText: 'Pradėti',
        stopText: 'Sustabdyti',
        resetText: 'Išnaujo',
        lapText: 'Ratas',
        hideText: 'Slėpti',
        backText: 'Atgal',
        undoText: 'Anuliuoti',
        offText: 'Išj.',
        onText: 'Įj.',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.nl = {
        setText: 'Instellen',
        cancelText: 'Annuleren',
        clearText: 'Duidelijk',
        selectedText: '{count} gekozen',
        dateFormat: 'dd-mm-yy',
        dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
        dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
        dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
        dayText: 'Dag',
        hourText: 'Uur',
        minuteText: 'Minuten',
        monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        monthText: 'Maand',
        secText: 'Seconden',
        timeFormat: 'HH:ii',
        yearText: 'Jaar',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Vandaag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tijd',
        calendarText: 'Kalender',
        closeText: 'Sluiten',
        fromText: 'Start',
        toText: 'Einde',
        wholeText: 'geheel',
        fractionText: 'fractie',
        unitText: 'eenheid',
        labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
        labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Reset',
        lapText: 'Ronde',
        hideText: 'Verbergen',
        backText: 'Terug',
        undoText: 'Onged. maken',
        offText: 'Uit',
        onText: 'Aan',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.no = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Tømme',
        selectedText: '{count} valgt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        delimiter: '.',
        hourText: 'Time',
        minuteText: 'Minutt',
        monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        monthText: 'Måned',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nå',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Lukk',
        fromText: 'Start',
        toText: 'End',
        wholeText: 'Hele',
        fractionText: 'Fraksjon',
        unitText: 'Enhet',
        labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Tilbakestille',
        lapText: 'Runde',
        hideText: 'Skjul',
        backText: 'Tilbake',
        undoText: 'Angre',
        offText: 'Av',
        onText: 'På',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.pl = {
        setText: 'Zestaw',
        cancelText: 'Anuluj',
        clearText: 'Oczyścić',
        selectedText: 'Wybór: {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
        dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
        dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
        dayText: 'Dzień',
        hourText: 'Godziny',
        minuteText: 'Minuty',
        monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        monthText: 'Miesiąc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dzisiaj',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Czas',
        calendarText: 'Kalendarz',
        closeText: 'Zakończenie',
        fromText: 'Rozpoczęcie',
        toText: 'Koniec',
        wholeText: 'Cały',
        fractionText: 'Ułamek',
        unitText: 'Jednostka',
        labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
        startText: 'Rozpoczęcie',
        stopText: 'Zatrzymać',
        resetText: 'Zresetować',
        lapText: 'Zakładka',
        hideText: 'Ukryć',
        backText: 'Wróć',
        undoText: 'Cofnij',
        offText: 'Wył',
        onText: 'Wł',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n['pt-BR'] = {
        setText: 'Selecionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Hora',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'Mês',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Agora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoje',
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calendário',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Fração',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Começar',
        stopText: 'Pare',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Anterior',
        undoText: 'Desfazer',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n['pt-PT'] = {
        setText: 'Seleccionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd-mm-yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'M&ecirc;s',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Actualizar',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calend&aacute;rio',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Frac&ccedil;&atilde;o',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Come&ccedil;ar',
        stopText: 'Parar',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Anterior',
        undoText: 'Anular',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.ro = {
        setText: 'Setare',
        cancelText: 'Anulare',
        clearText: 'Ştergere',
        selectedText: '{count} selectat',
        selectedPluralText: '{count} selectate',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: ' Ziua',
        delimiter: '.',
        hourText: ' Ore ',
        minuteText: 'Minute',
        monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        monthText: 'Luna',
        secText: 'Secunde',
        timeFormat: 'HH:ii',
        yearText: 'Anul',
        nowText: 'Acum',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Astăzi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Ora',
        calendarText: 'Calendar',
        closeText: 'Închidere',
        fromText: 'Start',
        toText: 'Final',
        wholeText: 'Complet',
        fractionText: 'Parţial',
        unitText: 'Unitate',
        labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
        labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetare',
        lapText: 'Tură',
        hideText: 'Ascundere',
        backText: 'Înapoi',
        undoText: 'Anulează',
        offText: 'Nu',
        onText: 'Da',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n['ru-UA'] = {
        setText: 'Установить',
        cancelText: 'Отменить',
        clearText: 'Очиститьr',
        selectedText: '{count} Вібрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Часы',
        minuteText: 'Минуты',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
        monthText: 'Месяцы',
        secText: 'Сикунды',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Весь',
        fractionText: 'Часть',
        unitText: 'Единица',
        labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
        labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: ' Сброс ',
        lapText: ' Этап ',
        hideText: ' Скрыть ',
        backText: 'назад',
        undoText: 'ОтменитЬ',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n['ru-RU'] = j73.i18n.ru = {
        setText: 'Установить',
        cancelText: 'Отмена',
        clearText: 'Очистить',
        selectedText: '{count} Выбрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Час',
        minuteText: 'Минут',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        monthText: 'Месяц',
        secText: 'Секунд',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Целое',
        fractionText: 'Дробное',
        unitText: 'Единица',
        labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
        labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: 'Сбросить',
        lapText: 'Круг',
        hideText: 'Скрыть',
        backText: 'назад',
        undoText: 'ОтменитЬ',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.sk = {
        setText: 'Zadaj',
        cancelText: 'Zrušiť',
        clearText: 'Vymazať',
        selectedText: 'Označený: {count}',
        dateFormat: 'd.m.yy',
        dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
        dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
        dayText: 'Ďeň',
        hourText: 'Hodiny',
        minuteText: 'Minúty',
        monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Mesiac',
        secText: 'Sekundy',
        timeFormat: 'H:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendár',
        closeText: 'Zavrieť',
        fromText: 'Začiatok',
        toText: 'Koniec',
        wholeText: 'Celý',
        fractionText: 'Časť',
        unitText: 'Jednotka',
        labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovať',
        lapText: 'Etapa',
        hideText: 'Schovať',
        backText: 'Späť',
        undoText: 'Späť',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    j73.i18n.sv = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Klara',
        selectedText: '{count} vald',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
        dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timme',
        minuteText: 'Minut',
        monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Månad',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Stäng',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hela',
        fractionText: 'Bråk',
        unitText: 'Enhet',
        labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Återställ',
        lapText: 'Varv',
        hideText: 'Dölj',
        backText: 'Tillbaka',
        undoText: 'Ångra',
        offText: 'Av',
        onText: 'På'
    };
    j73.i18n.tr = {
        setText: 'Seç',
        cancelText: 'İptal',
        clearText: 'Temizleyin',
        selectedText: '{count} seçilmiş',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
        dayText: 'Gün',
        delimiter: '.',
        hourText: 'Saat',
        minuteText: 'Dakika',
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        monthText: 'Ay',
        secText: 'Saniye',
        timeFormat: 'HH:ii',
        yearText: 'Yıl',
        nowText: 'Şimdi',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Bugün',
        firstDay: 1,
        dateText: 'Tarih',
        timeText: 'Zaman',
        calendarText: 'Takvim',
        closeText: 'Kapatmak',
        fromText: 'Başla',
        toText: 'Son',
        wholeText: 'Tam',
        fractionText: 'Kesir',
        unitText: 'Birim',
        labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
        labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
        startText: 'Başla',
        stopText: 'Durdur',
        resetText: 'Sıfırla',
        lapText: 'Tur',
        hideText: 'Gizle',
        backText: 'Geri',
        undoText: 'Geri Al',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: '.'
    };
    j73.i18n.zh = {
        setText: '确定',
        cancelText: '取消',
        clearText: '明确',
        selectedText: '{count} 选',
        dateFormat: 'yy/mm/dd',
        dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayText: '日',
        hourText: '时',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '当前',
        pmText: '下午',
        amText: '上午',
        todayText: '今天',
        dateText: '日',
        timeText: '时间',
        calendarText: '日历',
        closeText: '关闭',
        fromText: '开始时间',
        toText: '结束时间',
        wholeText: '合计',
        fractionText: '分数',
        unitText: '单位',
        labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
        labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
        startText: '开始',
        stopText: '停止',
        resetText: '重置',
        lapText: '圈',
        hideText: '隐藏',
        backText: '背部',
        undoText: '复原',
        offText: '关闭',
        onText: '开启',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
    var D23 = j73.themes;
    D23.frame['android-holo'] = {};
    D23.scroller['android-holo'] = Q73({}, D23.frame['android-holo'], {
        dateDisplay: 'Mddyy',
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: false,
        selectedLineHeight: true,
        selectedLineBorder: 2,
        useShortLabels: true,
        icon: {
            filled: 'star3',
            empty: 'star'
        },
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
    });
    D23.form['android-holo'] = {};
    var H23 = j73.themes;
    H23.frame.bootstrap = {
        disabledClass: 'disabled',
        activeClass: 'btn-primary',
        activeTabClass: 'active',
        todayClass: 'text-primary',
        onMarkupInserted: function w7K(z7K) {
            var s7K = x73(z7K.target);
            x73('.mbsc-fr-popup', s7K).addClass('popover');
            x73('.mbsc-fr-w', s7K).addClass('popover-content');
            x73('.mbsc-fr-hdr', s7K).addClass('popover-title');
            x73('.mbsc-fr-arr-i', s7K).addClass('popover');
            x73('.mbsc-fr-arr', s7K).addClass('arrow');
            x73('.mbsc-fr-btn', s7K).addClass('btn btn-default');
            x73('.mbsc-fr-btn-s .mbsc-fr-btn', s7K).removeClass('btn-default').addClass('btn btn-primary');
            x73('.mbsc-sc-btn-plus', s7K).addClass('glyphicon glyphicon-chevron-down');
            x73('.mbsc-sc-btn-minus', s7K).addClass('glyphicon glyphicon-chevron-up');
            x73('.mbsc-cal-next .mbsc-cal-btn-txt', s7K).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
            x73('.mbsc-cal-prev .mbsc-cal-btn-txt', s7K).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
            x73('.mbsc-cal-tabs ul', s7K).addClass('nav nav-tabs');
            x73('.mbsc-cal-sc-c', s7K).addClass('popover');
            x73('.mbsc-cal-week-nrs-c', s7K).addClass('popover');
            x73('.mbsc-cal-events', s7K).addClass('popover');
            x73('.mbsc-cal-events-arr', s7K).addClass('arrow');
            x73('.mbsc-range-btn', s7K).addClass('btn btn-sm btn-small btn-default');
            x73('.mbsc-np-btn', s7K).addClass('btn btn-default');
            x73('.mbsc-sel-filter-cont', s7K).removeClass('mbsc-input');
            x73('.mbsc-sel-filter-input', s7K).addClass('form-control');
        },
        onPosition: function l7K(A2K) {
            setTimeout(function() {
                x73('.mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i', A2K.target).removeClass('bottom').addClass('top');
                x73('.mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i', A2K.target).removeClass('top').addClass('bottom');
            }, 10);
        }
    };
    H23.scroller.bootstrap = Q73({}, H23.frame.bootstrap, {
        dateDisplay: 'Mddyy',
        btnCalPrevClass: '',
        btnCalNextClass: '',
        selectedLineHeight: true,
        onEventBubbleShow: function X2K(I2K) {
            var f2K = x73(I2K.eventList);
            x73('.mbsc-cal-event-list', f2K).addClass('list-group');
            x73('.mbsc-cal-event', f2K).addClass('list-group-item');
            setTimeout(function() {
                if (f2K.hasClass('mbsc-cal-events-b')) {
                    f2K.removeClass('top').addClass('bottom');
                } else {
                    f2K.removeClass('bottom').addClass('top');
                }
            }, 10);
        }
    });
    H23.menustrip.bootstrap = {
        wrapperClass: 'popover panel panel-default',
        groupClass: 'btn-group',
        activeClass: 'btn-primary',
        disabledClass: 'disabled',
        itemClass: 'btn btn-default'
    };
    var V23 = j73.themes;
    V23.frame.ios = {
        display: 'bottom',
        headerText: false,
        btnWidth: false,
        deleteIcon: 'ios-backspace',
        scroll3d: true
    };
    V23.scroller.ios = Q73({}, V23.frame.ios, {
        rows: 5,
        height: 34,
        minWidth: 55,
        selectedLineHeight: true,
        selectedLineBorder: 1,
        showLabel: false,
        useShortLabels: true,
        btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
        btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
        checkIcon: 'ion-ios7-checkmark-empty',
        filterClearIcon: 'ion-close-circled',
        dateDisplay: 'MMdyy',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
    });
    V23.listview.ios = {
        leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
        rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
    };
    V23.form.ios = {};
    var g23;
    var N23;
    var Z23 = j73.themes;
    var T1C = j73.util;
    var Q1C = T1C.testTouch;
    var a23 = T1C.getCoord;
    Z23.frame.material = {
        headerText: false,
        btnWidth: false,
        deleteIcon: 'material-backspace',
        onMarkupReady: function N2K(q2K) {
            G5C(x73(q2K.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
        }
    };
    Z23.scroller.material = Q73({}, Z23.frame.material, {
        showLabel: false,
        selectedLineBorder: 2,
        weekDays: 'min',
        icon: {
            filled: 'material-star',
            empty: 'material-star-outline'
        },
        checkIcon: 'material-check',
        btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
        btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
        btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
        btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
        onEventBubbleShow: function U2K(V2K) {
            var Z2K = x73(V2K.eventList),
                d2K = x73(V2K.target).closest('.mbsc-cal-row').index() < 2,
                o2K = x73('.mbsc-cal-event-color', Z2K).eq(d2K ? 0 : -1).css('background-color');
            x73('.mbsc-cal-events-arr', Z2K).css('border-color', d2K ? 'transparent transparent ' + o2K + ' transparent' : o2K + 'transparent transparent transparent');
        }
    });
    Z23.listview.material = {
        leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
        rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
        onItemActivate: function h2K(G2K) {
            H1C(x73(G2K.target), G2K.domEvent);
        },
        onItemDeactivate: function S2K() {
            f83(N23);
        },
        onSlideStart: function p2K(m2K) {
            x73('.mbsc-ripple', m2K.target).remove();
        },
        onSortStart: function e2K(c2K) {
            x73('.mbsc-ripple', c2K.target).remove();
        }
    };
    Z23.menustrip.material = {
        onInit: function Y2K() {
            G5C(x73(this), '.mbsc-ms-item.mbsc-btn-e', 'mbsc-btn-d', 'mbsc-btn-nhl');
        },
        onMarkupInit: function J2K() {
            x73('.mbsc-ripple', this).remove();
        },
        onDestroy: function v2K() {
            x73(this).off('.mbsc-ripple');
        }
    };
    Z23.form.material = {
        addRipple: function b2K(H2K, D2K) {
            H1C(H2K, D2K);
        },
        removeRipple: function M2K() {
            f83(N23);
        }
    };
    var O83 = j73.themes;
    O83.frame.wp = {
        headerText: false,
        deleteIcon: 'backspace4',
        setIcon: 'checkmark',
        cancelIcon: 'close',
        closeIcon: 'close',
        clearIcon: 'close',
        okIcon: 'checkmark',
        nowIcon: 'loop2',
        startIcon: 'play3',
        stopIcon: 'pause2',
        resetIcon: 'stop2',
        lapIcon: 'loop2',
        btnWidth: false
    };
    O83.scroller.wp = Q73({}, O83.frame.wp, {
        minWidth: 76,
        height: 76,
        dateDisplay: 'mmMMddDDyy',
        showLabel: false,
        icon: {
            filled: 'star3',
            empty: 'star'
        },
        btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
        btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
        btnPlusClass: 'mbsc-ic mbsc-ic-plus',
        btnMinusClass: 'mbsc-ic mbsc-ic-minus',
        onMarkupInserted: function F2K(z2K, l2K) {
            function A8K(X8K) {
                return x73.isArray(j2K.readonly) ? j2K.readonly[X8K] : j2K.readonly;
            }
            var x2K, Q2K, s2K, w2K = x73(z2K.target),
                j2K = l2K.settings;
            x73('.mbsc-sc-whl', w2K).on('touchstart mousedown wheel mousewheel', function(f8K) {
                if (f8K.type === 'mousedown' && Q2K || A8K(x73(this).attr('data-index'))) {
                    return;
                }
                Q2K = f8K.type === 'touchstart';
                x2K = true;
                s2K = x73(this).hasClass('mbsc-sc-whl-wpa');
                x73('.mbsc-sc-whl', w2K).removeClass('mbsc-sc-whl-wpa');
                x73(this).addClass('mbsc-sc-whl-wpa');
            }).on('touchmove mousemove', function() {
                x2K = false;
            }).on('touchend mouseup', function(I8K) {
                if (x2K && s2K && x73(I8K.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
                    x73(this).removeClass('mbsc-sc-whl-wpa');
                }
                if (I8K.type === 'mouseup') {
                    Q2K = false;
                }
                x2K = false;
            });
        }
    });
    O83.form.wp = {};
    j73.customTheme('android-holo-light', 'android-holo');
    j73.customTheme('ios-dark', 'ios');
    j73.customTheme('material-dark', 'material');
    j73.customTheme('mobiscroll-dark', 'mobiscroll');
    j73.customTheme('wp-light', 'wp');
    var m5C = j73.themes;
    var d23 = void 0;
    if (A23 == 'android') {
        d23 = Y23 >= 5 ? 'material' : 'android-holo';
    } else if (A23 == 'ios') {
        d23 = 'ios';
    } else if (A23 == 'wp') {
        d23 = 'wp';
    }
    j73.setAutoTheme = function() {
        x73.each(m5C.frame, function(L8K, W8K) {
            if (d23 && W8K.baseTheme == d23 && L8K != 'android-holo-light' && L8K != 'material-dark' && L8K != 'wp-light' && L8K != 'ios-dark') {
                j73.autoTheme = L8K;
                return false;
            } else if (L8K == d23) {
                j73.autoTheme = L8K;
            }
        });
    };
    j73.setAutoTheme();
    return j73;
}));