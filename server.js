const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const jsonServer = require('json-server');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

//adds webpack-hot-middleware attached to the same compiler instance
app.use(require("webpack-hot-middleware")(compiler));

//routing rules
app.get(/^\/app\/([^#].*)$/, (req, res) => res.redirect('/#!/app/'+req.params[0]));

app.use('/api', jsonServer.router(path.join(__dirname, 'db.json')));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Dev server listening on port 3000!\n');
});

