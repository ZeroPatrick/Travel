module.exports = {
    devServer: {
        //assetsSubDirectory: 'static',
        //assetsPublicPath: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:8088',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/static/mock'
                }
            }
        },
        host: 'localhost',
        port: 8088, // 端口
    }
};