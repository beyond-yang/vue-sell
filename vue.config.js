module.exports = {
    devServer: {
        before(app) {

        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'api': '@/api',
                'components': '@/components',
                'common': '@/common'
            }
        }
    },
    publicPath: ''
}