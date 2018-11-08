<!--Created by zhongjx on 2018/11/8.-->
<template>
    <div v-show="showToast" :class="{'toast':true, 'fadeInToast':showToast}">
        <p v-html="msg"></p>
    </div>
</template>

<script>
    export default {
        name: 'MuiToast',
        data() {
            return {
                showToast: false,
                msg: '',
            }
        },
        created() {
            window.bus.$on('showToast', (msg) => {
                this.showToast = true
                this.msg = msg
                const that = this
                setTimeout(() => {
                    that.showToast = false
                }, 3000)
            })
        },
    }
</script>

<style>

</style>