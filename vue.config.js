const path = require('path')
module.exports = {
	pages: {
		index: {
			entry: './src/main.js',
			template: './public/index.html'
		}
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': path.join(__dirname, 'src')
			}
		}
	}
}
