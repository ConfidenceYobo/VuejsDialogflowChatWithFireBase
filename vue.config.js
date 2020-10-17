module.exports = {
    productionSourceMap: false,
    publicPath: '/',
    outputDir: 'chat/dist',
    pwa: {
        workboxOptions: {
            skipWaiting: true
        },
        name: 'Dialogflow Agent',
        themeColor: '#42a5f5'
    }
}