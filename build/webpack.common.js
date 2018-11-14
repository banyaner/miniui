/**
 * Created by zhongjx on 2018/6/6.
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const wrapCustomClass = function (render) {
    return function (...args) {
        return render(...args)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">')
    }
}

const convertHtml = function (str) {
    return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}


const vueMarkdown = {
    raw: true,
    preprocess: (MarkdownIt, source) => {
        MarkdownIt.renderer.rules.table_open = function () {
            return '<table class="table">'
        }
        MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence)
        return source
    },
    use: [
        [MarkdownItContainer, 'demo', {
            // 校验包含demo的代码块
            validate: params => params.trim().match(/^demo\s*(.*)$/),
            render: function(tokens, idx) {
                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                if (tokens[idx].nesting === 1) {
                    var desc = tokens[idx + 2].content;
                    // 编译成html
                    const html = convertHtml(striptags(tokens[idx + 1].content, 'script'))
                    // 移除描述，防止被添加到代码块
                    tokens[idx + 2].children = [];

                    return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
                }
                return '</div></demo-block>\n';
            }
        }]
    ]
}

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, '../examples/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: require("eslint-friendly-formatter"),
                },
            },
            {
                enforce: "pre",
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: require("eslint-friendly-formatter"),
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:7].[ext]',
                            outputPath: 'img/',   // 图片打包后存放的目录
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:7].[ext]',
                            outputPath: 'font/',
                        }
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: vueMarkdown
                    },
                ]
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json', '.vue', '.scss', '.css', '.pcss']
    },
}
