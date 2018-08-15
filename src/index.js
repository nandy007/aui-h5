

window.__AGILE_UI_NAME__ = 'agile-ui';

require('agile-ui');

module.exports = {
    router: require('./utils/router'),
    $: require('agile-ce')
}