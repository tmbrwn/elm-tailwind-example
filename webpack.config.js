const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    // many plugins and loaders will be more verbose or provide extra debugging
    // information when mode is set to 'development'.
    mode: 'development',
    // entry is the root node of the dependency graph. this means it usually
    // has to be a .js file, but it can be anything webpack is capable of
    // processing, as long as it references all necessary source files.
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // starts with the applicable source files, then applies
                // loaders in reverse order (see comment in
                // src/css/main.css).
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                include: [path.resolve(__dirname, 'src/css')],
            },
            {
                test: /\.elm$/,
                // hot reloading (maintaining page state when reloading from
                // code changes) doesn't work out of the box, so we need a
                // special loader to enable it.
                use: ['elm-hot-webpack-loader', 'elm-webpack-loader'],
                // be sure that elm.json knows the source root is 'src/elm/'
                // rather than the default of 'src/'
                include: [path.resolve(__dirname, 'src/elm')],
            },
        ],
    },
    plugins: [
        // generates index.html to put our JS into. note that although
        // html-webpack-plugin includes CSS files which are generated in the
        // build, the mechanism which gets CSS into this project is
        // style-loader, since the CSS pipeline we have defined above doesn't
        // result in any CSS files being added to the bundle.
        new HtmlWebpackPlugin({
            title: 'Stuff Tough',
        }),
    ],
    // webpack-dev-server config isn't required here, because the dev server
    // defaults to serving {outputDir}/index.html, which is also what
    // html-webpack-plugin defaults to generating.
}