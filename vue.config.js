module.exports = {
    pages: {
        'index' : {
            entry: './src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'Welcome',
            chunks: ['chunk-vendors','chunk-common', 'index']
        }
    }
}