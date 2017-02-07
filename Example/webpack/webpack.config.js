var path = require("path");
var webpack = require('webpack');
// var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
    entry:[
         "./app.js"
        ],
    output: {
        filename: "build.js",
        path: __dirname       
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
      				test: /\.js$/,
      				exclude: /(node_modules|bower_components)/,
      				loader: ['babel'],
                    query: {
                        presets: ['es2015', 'react']
                    } // 'babel-loader' is also a legal name to reference
				     
    }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
    // plugins: [
    //     new LiveReloadPlugin()
    // ] 
};