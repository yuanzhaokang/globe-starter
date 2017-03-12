var path = require('path');

module.exports = {
    entry: "./static/app.js",
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader|postcss-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader|postcss-loader"
            },

            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: "jsx-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192"
            },
        ]
    },
    devtool: 'inline-source-map'
}