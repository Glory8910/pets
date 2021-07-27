const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: path.join(__dirname, '/avail.ts'),
	output: {
		filename: 'avai.js',
		path: path.resolve('./build')
		// path: __dirname
	},
	
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
	
		// New plugin
		new HtmlWebpackPlugin({
		  // injects bundle.js to our new index.html
		  inject: true,
		  // copys the content of the existing index.html to the new /build index.html
		  template:  path.resolve('./pets.html'),
		}),
	  ]
}
