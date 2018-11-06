<template>
    <transition name="fade-share">
        <div class="block-share" v-show="showShare">
            <img src="./common-share-tip.png" alt="">
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    import NewsappShare from 'newsapp-share'
    import ShareIcon from './share-icon.png'

    export default {
        data() {
            return {
                showShare: false,
            }
        },
        created() {
            // 默认分享
            NewsappShare.config({
                title: '这是标题',
                desc: '这是描述',
                imgUrl: this.getAbsPath(ShareIcon),
                link: this.getAbsPath(),
                shareDone: this.shareDone,
                onlyImg: false,
            })
            window.bus.$on('share', () => {
                this.$countEvt('shareClick')
                NewsappShare.show(() => {
                    this.displayShare()
                })
            })
        },
        methods: {
            displayShare() {
                this.showShare = true
                const setTime = setTimeout(() => {
                    this.showShare = false
                    clearTimeout(setTime)
                }, 1500)
            },
            getAbsPath(url) {
                if (url) {
                    const el = document.createElement('a')
                    el.href = url
                    return el.href
                }
                return window.location.href.replace(/(\?|#).*/, '')
            },
            shareDone() {
                this.$countEvt('sharedone')
            },
        },
    }
</script>
<style type="text/postcss">
    .block-share {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9;

        & img {
            display: block;
            margin: 0 auto;
            width: 750px;
        }

    }

    .fade-share-enter-active, .fade-share-leave-active {
        transition: opacity .5s;
    }

    .fade-share-enter, .fade-share-leave-to {
        opacity: 0
    }

    .hide {
        display: none;
    }
</style>