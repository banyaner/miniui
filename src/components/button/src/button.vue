<!--Created by zhongjx on 2018/11/6.-->
<template>
    <button class="mui-button" :disabled="disabled" @click="handleClick">
        按钮
    </button>
</template>

<script>
    export default {
        name: 'MuiButton',
        props: {
            disabled: Boolean,
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt)
            },
        },
    }
</script>
<style>
    /*.mui-button{*/
        /*border: 0;*/
        /*background: white;*/
        /*outline: none;*/
        /*-webkit-appearance: none;*/
    /*}*/
</style>