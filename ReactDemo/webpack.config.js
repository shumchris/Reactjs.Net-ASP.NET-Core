var path = require('path');

module.exports = {
    context: path.join(__dirname, 'wwwroot/js'),
    entry: {
        server: './server',
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        "react": 'React',
    }
};