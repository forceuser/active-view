/* global __dirname */
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const webpack = require("webpack");
const isWSL = require("is-wsl");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env = {}) => {
	const result = merge(baseConfig(env), {
		mode: "production",
		optimization: {
			minimizer: [
				// new UglifyJsPlugin({
				// 	parallel: isWSL ? false : true,
				// }),
				// new BabelMinifyPlugin(
				// 	{builtIns: false},
				// 	{
				// 		babel: require("@babel/core"),
				// 		minifyPreset: require("babel-preset-minify"),
				// 	}
				// ),
				new TerserPlugin({
					sourceMap: true,
				}),
			],
		},
	});
	// result.plugins.push(new webpack.optimize.MinChunkSizePlugin({minChunkSize: 100000}));

	return result;
};
