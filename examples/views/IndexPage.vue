<template>
    <div class="index page">
        <h1 style="text-align: center">Vue Template</h1>
        <h3 @click="openShare">分享</h3>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        components: {},
        methods: {
            openShare() {
                window.bus.$emit('share')
            },
        },
    }
</script>
<style type="text/postcss">
</style>
