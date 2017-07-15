import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.base.config.js';

const app = express(),
      compiler = webpack(config),
      isDevelopemt = process.env.NODE_ENV !== 'production',
      DEFAULT_PORT = 3000,
      DIST_DIR = path.join(__dirname, 'dist'),
      HTML_FILE = path.join(DIST_DIR, 'index.html');

app.set('port', process.env.PORT || DEFAULT_PORT);

if (isDevelopemt) {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.get('*', (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

} else {
    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

app.listen(app.get('port'), function() {
    console.log('Serving ' + HTML_FILE + ' on port ' + app.get('port'));
});



// var express = require('express');
// var app = express();
// var path = require('path');
//
// var port = process.env.PORT || 8080;
//
// app.use('/', express.static('dist'))
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
//
// app.listen(port, function() {
//   console.log('Serving index.html on port ' + port);
// });
