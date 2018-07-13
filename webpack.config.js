module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    }
};