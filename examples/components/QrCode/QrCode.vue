<template>
    <div class="qr-code" v-if="showQRcode">
        <div class="qr-code-main" ref="main">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import neteaseLogo from './netease-logo.png'


    export default {
        data() {
            return {
                showQRcode: false,
            }
        },
        mounted() {
            /* eslint-disable */
            if (!this.isMobile(navigator.userAgent)) {
                this.showQRcode = true
                require(['arale-qrcode'], (AraleQRCode) => {
                    const data = new AraleQRCode({
                        text: location.href,
                        image: neteaseLogo,
                        size: 250,
                        imageSize: 40,
                    })
                    this.$refs.main.appendChild(data)
                })
            }
        },
        methods: {
            isMobile(userAgent) {
                const reg = /(Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Windows Phone|SymbianOS)/i
                return userAgent.match(reg)
            },
        },
    }
</script>
<style type="text/postcss">
    .qr-code{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: #000;
        color: #fff;
        font-size:50px;
        z-index:999;
    }
    .qr-code-main{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        &:after{
            display: block;
            margin-top:40px;
            width:700px;
            content: '为了更好的体验，请使用手机扫面二维码浏览';
        }
        & canvas {
            padding:20px;
            border-radius: 5px;
            background: #fff;
        }
    }
</style>