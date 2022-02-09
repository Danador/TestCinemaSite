const path = require('path');
const mix = require('laravel-mix');

const arJsPage = [
    'src/js/app.js',
];

const arCssPage = [
    'src/css/index.css',
];

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    }
});

arJsPage.forEach(sJsPage => {
    mix.js(sJsPage, 'assets/js');
});

arCssPage.forEach(sCssPage => {
    mix.postCss(sCssPage, 'assets/css')
});

mix.disableNotifications();
