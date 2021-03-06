'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackBaseConfig = require('./webpack.base.config.js');

var _webpackBaseConfig2 = _interopRequireDefault(_webpackBaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    compiler = (0, _webpack2.default)(_webpackBaseConfig2.default),
    isDevelopemt = process.env.NODE_ENV !== 'production',
    DEFAULT_PORT = 3000,
    DIST_DIR = _path2.default.join(__dirname, 'dist'),
    HTML_FILE = _path2.default.join(DIST_DIR, 'index.html');

app.set('port', process.env.PORT || DEFAULT_PORT);

if (isDevelopemt) {
    app.use((0, _webpackDevMiddleware2.default)(compiler, {
        publicPath: _webpackBaseConfig2.default.output.publicPath
    }));

    app.get('*', function (req, res, next) {
        compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
} else {
    app.use(_express2.default.static(DIST_DIR));
    app.get('*', function (req, res) {
        return res.sendFile(HTML_FILE);
    });
}

app.listen(app.get('port'), function () {
    console.log('Serving ' + HTML_FILE + ' on port ' + app.get('port'));
});
