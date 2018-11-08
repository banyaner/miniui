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
        methods: {},
    }
</script>
<style>
    .container{
        display: flex;
        width: 100%;
    }
    @media screen and (max-width: 750px) {
        .container-nav{
            width: 200px;
        }
    }
    @media screen and (min-width: 992px) {
        .container-nav{
            width: 600px;
        }
    }

</style>