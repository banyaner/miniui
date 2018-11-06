<template>
    <div :class="{'page rotation-hint':true, 'hide':!showHintScreen}" v-if="showHintScreen">
        <div class="rotation-hint-main"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                showHintScreen: false,
            }
        },
        created() {
            window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', this.switchScreenState, false)
        },
        methods: {
            switchScreenState() {
                switch (window.orientation) {
                    case 0:
                    case 180:
                        this.showHintScreen = false
                        break
                    case -90:
                    case 90:
                        this.showHintScreen = true
                        break
                    default:
                        break
                }
            },
        },
    }
</script>
<style type="text/postcss">
    .rotation-hint {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: black;
        z-index: 999;
    }

    .rotation-hint-main {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .rotation-hint-main:before {
        content: '';
        display: block;
        width: 200px;
        height: 400px;
        margin: 0 auto 100px auto;
        background: url("common-landscape-phone.png") no-repeat center;
        background-size: 100% 100%;
        animation: common-landscape 2.4s ease infinite;
    }

    .rotation-hint-main:after {
        content: '为了更好的体验，请使用竖屏浏览';
        display: block;
        color: #fff;
        text-align: center;
        font-size: 64px;
    }

    @keyframes common-landscape {
        0% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            opacity: 0;
        }

        15% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            opacity: 1;
        }

        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }

        85% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }

        100% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 0;
        }
    }

    .hide {
        display: none;
    }
</style>
