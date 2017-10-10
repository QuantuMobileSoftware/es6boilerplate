module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js"
    },

    devtool: "inline-source-map",

    resolve: {
        extensions: [".js", ".css"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    },

    devServer: {
        proxy: {
            "/api1": {
                target: "http://backend:9000",
                secure: false
            }
        }
    }
};
