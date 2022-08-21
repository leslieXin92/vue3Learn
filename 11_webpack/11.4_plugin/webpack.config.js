const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"), // 必须是绝对路径
		filename: "main.js"
	},
	module: {
		rules: [
			// css
			{
				test: /\.css$/, // 正则
				use: ["style-loader", "css-loader"] // 从后往前执行
			},

			// less
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},

			// image
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				type: "asset",
				generator: {
					filename: "img/[name]_[hash:6][ext]"
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024
					}
				}
			},

			// font
			{
				test: /\.(eot|ttf|woff2?)/,
				type: "asset/resource",
				generator: {
					filename: "font/[name]_[hash:6].[ext]"
				}
			}
		]
	},
	plugins: [new CleanWebpackPlugin()]
}
