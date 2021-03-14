module.exports = function (app) {
    // Webpack for vue or dist loading
    if (!process.env.PROD) {
        const webpack = require('webpack');
        const webpackMiddleware = require('webpack-dev-middleware');
        const webpackConfig = require('../../build/webpack.dev.conf');
        app.use(webpackMiddleware(webpack(webpackConfig), {stats: "minimal"}));
    }
    else {
        const express = require('@feathersjs/express');
        app.use(express.static('dist', {
            setHeaders: function (res, path, stat) {
                res.set("X-Frame-Options", "SAMEORIGIN");
                res.set("X-Content-Type-Options", "nosniff");
            }
        }));
    }

    // Everything (except /api/*) is redirected to the webapp
    app.get(/^(?!\/api\/).*$/, (req, res) => {
        res.sendFile("index.html", {root: __dirname});
    });
};
