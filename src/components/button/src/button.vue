<!--Created by zhongjx on 2018/11/6.-->
<template>
    <button class="mui-button" :disabled="disabled" @click="handleClick">
        <slot></slot>
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