const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: ["./src/app/main.ts"]
    },

    output: {
        path: resolve("dist"),
        publicPath: "/",
        filename: "app.js"
    },

    resolve: {
        extensions: ['.js', '.ts', '.html'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": resolve('src')
        }
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                enforce: 'post',
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                enforce: 'post',
                test: /\.scss$/,
                use: ['style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.scss$/,
                loader: "sass-loader",
                options: {
                    includePaths: ["./node_modules/@ulaval/modul-components/dist/styles", "./src/app/styles"]
                }
            },
            {
                test: /\.html$/,
                loader: 'vue-template-loader',
                exclude: resolve('src/index.html'),
                options: {
                    scoped: true
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: ['desc', 'defs', 'style'],
                    removeSVGTagAttrs: true
                }
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: resolve('tsconfig.json')
                }
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [resolve('src'), resolve('test')],
                options: {
                    configFile: 'conf/tslint.json',
                    formatter: 'grouped',
                    formattersDirectory: 'node_modules/custom-tslint-formatters/formatters'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            template: resolve('src/index.html'),
            inject: 'body'
        }),
        new CompressionPlugin(),
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            emitErrors: false
        })
    ]
}