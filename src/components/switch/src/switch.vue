<!--Created by zhongjx on 2019-03-06.-->
<template>
  <span :class="wrapClasses" @click="toggle">

  </span>
</template>

<script>
    export default {
        name: 'MuiSwitch',
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            wrapClasses() {
                return {
                    'mui-switch': true,
                    'mui-switch--checked': this.value,
                    'mui-switch--disabled': this.disabled,
                }
            },
        },
        methods: {
            toggle() {
                !this.disabled && this.$emit('change')
            },
        },
    }
</script>

<style>

</style>