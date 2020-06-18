// vue.config.js
module.exports = {
    lintOnSave: false,
    // publicPath: process.env.NODE_ENV === 'production' ? 'http://10.157.28.240:8086' : '/',
    devServer: {
        // host: 'test02.baidu.com',
        // port: 8080,
        proxy: {
            '/api': {
                // target: 'http://test.ares.duxiaoman-int.com',
                // target: 'http://172.30.10.112:8110',
                // target: 'http://172.30.22.133:8110',
                target: 'http://172.30.7.30:8110',
                ws: true,
                changeOrigin: true,
                // pathRewrite: {
                //    // '^/api': '/api/new-path'
                // }
            }
        }
    }
}