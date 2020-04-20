//获取path
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	//入口
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path :path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer:{
		open: true,
		port: 7000,
		contentBase: 'src',
		hot: true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),//热启动
		new htmlWebpackPlugin({
			//指定生成的首页
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module:{
		//配置第三方加载器
		rules:[
			{test:/\.css$/, use: ['style-loader','css-loader']},
			{test:/\.(jpg|png|gif|bmp|jepg)$/,use:'url-loader?limit=10240&name=[hash:8]-[name].[ext]'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			{test:/\.vue$/,use:'vue-loader'}
			
			
		]
	},
	resolve:{
		alias:{
			//"vue$":"vue/dist/vue.js"
		}
	}
	
}