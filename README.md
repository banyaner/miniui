# h5活动模板

原生的h5活动基本配置。如需支持vue或react需要额外配置解析

# 关于合图

合图的文件需要放在sprites目录下，每个css中的所有sprites图片会合并为一张

# 适配方案

使用rem做适配
项目按竖屏视频，最大宽度为750px

# 使用

## 压缩图片

压缩dist目录下的图片资源

```bash
gulp tinypng-dist
```

压缩开发目录下的图片资源

```bash
gulp tinypng-src-static
```

其中需要在下述的'.ftppass'文件中配置在www.tinypng.com上注册时获取的key值

## 开启HMR

```bash
npm run dev
```

## 开启HMR并使用mock数据

```bash
npm run dev --mock
```

## 构建文件
```bash
yarn run build
```
## 构建并生成包分析
```bash
yarn run build --analyze
```

## 构建上传到cdn的文件
```bash
yarn run build --cdn
```

其中cdn的路径在package.json中配置

# 功能介绍

## 图片合并
将需要合并到雪碧图的图片放在sprites目录下，构建时，会自动将合并后的图片放在src/assets/目录下。目前图片分组是按照每个css内的图片合并。如有其他需求可在**postcss.config.js**下修改。

## mock数据写法

将mock数据放在mock文件下，数据格式为：
```js
module.exports = {
    // 接口地址
    api: '/weeklist',
    // 返回数据
    response: function (req, res) {
        var data = {
            "name": "hello",
        }
        res.send(data)
    }
}
```


# 关于vendor打包

目前的配置中，如果部分模块使用懒加载，则懒加载模块import的node-modules包会单独的进行打包。
```js
// webpack.prod.js
    optimization: {
        splitChunks: {
            cacheGroups: {
                asyncvendors: { // 异步加载模块来自于npm安装的包
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'async',
                    reuseExistingChunk: true,
                    priority: -20,
                },
                vendors: { // 来自于npm安装的包且非异步加载的模块
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    reuseExistingChunk: false,
                    priority: -10,
                },
            }
        }
    },

```
如果希望将所有的vendor打包为一个，需将上述配置改为
```js
// webpack.prod.js
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: false,
                    priority: -10,
                },
            }
        }
    },
```
如果接口路径形如 '/xx/yy/zz'，则在mock目录下新建多个文件夹嵌套来模拟。

# 静态文件使用

由于项目支持cdn上传，所以使用static内的文件时需要使用js/utils/下的getStaticPath 来获取实际的图片地址。
例如：
  <img src={getStaticPath('static/test.png')} alt=""/>



## 文件gulp上传

需在根目录下新建一个文件 .ftpass,并写入在gulp文件中需要上传的服务器的账号和密码

```js
{
    "test": {
        "username": "",
        "host": ""
    },
    "tinypng": {
        "key": ""
    }
}
```
注：使用不同的服务器上传方式也不相同，需自己修改gulp内配置


# 线上地址
`http://wp.m.163.com/163/html/${pkg.name}/index.html`

## 关于eruda使用

eruda可以在没有开发者工具的移动端使用console、发现js错误等。目前，在移动端访问非wp.m.163.com域名下都会出现eruda功能。

# 补充：

## 包含统计数据的文件

通过 webpack 编译源文件时，用户可以生成包含有关于模块的统计数据的 JSON 文件。这些统计数据不仅可以帮助开发者来分析应用的依赖图表，还可以优化编译的速度。

```js
webpack --profile --json > compilation-stats.json
```


## 关于polyfill
使用babel-runtime默认配置，如果需要特殊的方法需要单独添加polyfill(目前看runtime不会polyfill实例的一些方法)

## 内联rem适配和manifest
因manifest文件很小，所以可以内联处理
rem适配影响页面布局尺寸需要在最开始加载
