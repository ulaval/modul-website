const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = function (env) {
    var isProd = !!(env && env.prod);

    var config = {
        entry: {
            app: ["./src/app/main.ts"]
        },

        output: {
            path: resolve("dist"),
            publicPath: isProd ? 'https://contenu.monportail.ulaval.ca/mpo/@ulaval/modul-website/master/' : '/',
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
                                sourceMap: true,
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
                    exclude: /(logo-ul|grid)\.svg$/,
                    options: {
                        removeTags: true,
                        removingTags: ['desc', 'defs', 'style'],
                        removeSVGTagAttrs: true
                    }
                },
                {
                    test: /(logo-ul\.svg|grid\.svg|\.png)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000
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
                        formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
                        emitErrors: true
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
                emitErrors: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': env
                }
            })
            // , new BundleAnalyzerPlugin()
        ]
    }

    return config;
}