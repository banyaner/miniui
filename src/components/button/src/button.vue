<!--Created by zhongjx on 2018/11/6.-->
<template>
    <button :class="['mui-button', {'is-disabled': disabled}, {'is-circle':circle}]" :disabled="disabled"
            @click="handleClick" :type="nativeType">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MuiButton',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            nativeType: {
                type: String,
                default: 'button',
            },
            circle: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt)
            },
        },
    }
</script>