module.exports = {
    devServer: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://localhost:8088',
                pathRewrite: {
                    '^/api': '/static/mock'
                }
            }
        },
        host: 'localhost',
        port: 8088, // 端口
    },
};