<template>
    <div id="app">
        <h1>test</h1>
        <!--<router-view></router-view>-->
        <mui-button></mui-button>
    </div>
</template>
<script type="text/ecmascript-6">
    // import Share from './components/Share/Share'
    import QrCode from './components/QrCode/QrCode'

    export default {
        components: {
            QrCode,
        },
        methods: {},
    }
</script>
<style>
    html,
    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        position: relative;
        font: 28px/1.2 sans-serif;
        tap-highlight-color: transparent;
        overflow-scrolling: touch;
        text-size-adjust: 100%;
        user-select: none;
    }

    a,
    img {
        -webkit-touch-callout: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    p {
        margin: 0;
        padding: 0;
    }

    /* vue-router 访问时样式*/
    .router-link-active {
        text-decoration: none
    }

    [type="button"] {
        border-style: none;
        padding: 0;
        -webkit-appearance: none;
        outline: none;
        background: #fff;
    }

    #app {
        margin: 0 auto;
        width: 750px;
        height: 100%;
        overflow: hidden;
        transform-origin: top center;
    }

    .page {
        width: 750px;
        height: 100%;
        overflow: hidden;
    }

    .page-scroll {
        width: 750px;
        height: 100%;
        overflow-y: scroll;
    }
</style>