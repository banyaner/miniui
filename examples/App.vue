<template>
    <div id="app" class="container">
        <NavMenu class="container-nav"></NavMenu>
        <router-view class="container-main"></router-view>
    </div>
</template>
<script type="text/ecmascript-6">
    import NavMenu from './components/NavMenu'

    export default {
        components: {
            NavMenu,
        },
        methods: {
        },
    }
</script>
<style>
    body{
        margin: 0;
        height: 100vh;
        overflow-y: hidden;
    }
    .container{
        margin: 0 auto;
        display: flex;
        width: 100%;
        .container-nav{
            height: 100vh;
            border-right: 1px solid #dcdcdc;
            box-shadow: 0 0 40px #CCC;
            overflow-y: scroll;
        }
        .container-main{
            box-sizing: border-box;
            padding: 20px;
            height: 100vh;
            overflow-y: scroll;
            flex-grow: 1;
            box-shadow: 10px 0 40px #CCC;
        }
    }
    @media screen and (max-width: 750px) {
        body{
            margin: 0;
            height: auto;
            overflow-y: auto;
        }
        .container{
            flex-direction: column;
            .container-nav{
                height: auto;
                border-right: 0;
                box-shadow: none;
            }
            .container-main{
                box-sizing: border-box;
                height: auto;
                box-shadow: none;
            }
        }
    }
    @media screen and (min-width: 992px) {
        .container{
            width: 992px;
        }
    }

</style>