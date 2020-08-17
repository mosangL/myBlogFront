module.exports = {
	outputDir: 'dist', 
	assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
	runtimeCompiler: false,
	lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		disableHostCheck:true,
	
	}
}