const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
