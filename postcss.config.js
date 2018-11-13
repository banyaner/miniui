const postcss = require('postcss')
const spriteOpts = {
    spritePath: './examples/assets/',
    spritesmith: {
        padding: 5,
    },
    filterBy: function (image) {
        if (image.url.indexOf('sprites/') === -1) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    groupBy: function (image) {
        let groupName = /.*\/(.*)\.vue/g.exec(image.styleFilePath)[1].toLowerCase();
        return Promise.resolve(groupName);
    },
    hooks: {
        onUpdateRule: function (rule, token, image) {
            var backgroundSizeX = (image.spriteWidth / image.coords.width) * 100;
            var backgroundSizeY = (image.spriteHeight / image.coords.height) * 100;
            var backgroundPositionX = (image.coords.x / (image.spriteWidth - image.coords.width)) * 100;
            var backgroundPositionY = (image.coords.y / (image.spriteHeight - image.coords.height)) * 100;
            backgroundSizeX = isNaN(backgroundSizeX) ? 0 : backgroundSizeX;
            backgroundSizeY = isNaN(backgroundSizeY) ? 0 : backgroundSizeY;
            backgroundPositionX = isNaN(backgroundPositionX) ? 0 : backgroundPositionX;
            backgroundPositionY = isNaN(backgroundPositionY) ? 0 : backgroundPositionY;
            var backgroundImage = postcss.decl({
                prop: 'background-image',
                value: 'url(' + image.spriteUrl + ')'
            });
            var backgroundPosition = postcss.decl({
                prop: 'background-position',
                value: backgroundPositionX + '% ' + backgroundPositionY + '%'
            });
            var backgroundSize = postcss.decl({
                prop: 'background-size',
                value: backgroundSizeX + '% ' + backgroundSizeY + '%'
            });
            rule.insertAfter(token, backgroundImage);
            rule.insertAfter(backgroundImage, backgroundPosition);
            rule.insertAfter(backgroundPosition, backgroundSize);
        },
    },
}
module.exports = {
    sourceMap: false,
    plugins: {
        precss: {},
        'postcss-write-svg': {},
        'postcss-preset-env': {},
        'postcss-sprites': spriteOpts,
        // 'postcss-plugin-px2rem': {
        //     rootValue: 100,
        //     propBlackList: ['border', 'border-top', 'border-bottom', 'border-left', 'border-right'],
        // },
    },
}
