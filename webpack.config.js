var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'./assets/js/index'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.less$/,
			loaders: ['style','css','postcss','less?strictMath&noIeCompat'],
			include: path.resolve(__dirname, 'assets/css')
		},
		{
			test: /\.css$/,
			loaders: ['style','css','postcss'],
			include: path.resolve(__dirname, 'assets/css')
		},
		{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
        	loaders: [
        		'url?limit=10000'
        	]
		}

		]
	},
	plugins: [
  			new webpack.optimize.UglifyJsPlugin({minimize: true}),
 	],
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}