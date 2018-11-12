<!--Created by zhongjx on 2018/11/8.-->
<template>
    <transition name="mui-toast--fade" :duration="duration">
        <div v-if="showToast" class="mui-toast">
            <p v-html="msg"></p>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'MuiToast',
        data() {
            return {
                showToast: false,
                msg: '',
                duration: 3000,
            }
        },
        mounted() {
            this.showToast = true
            if (this.duration <= 0) {
                this.duration = 3000
            }
            setTimeout(() => {
                this.showToast = false
            }, this.duration)
        },
    }
</script>