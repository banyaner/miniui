<!--Created by zhongjx on 2018/11/12.-->
<template>
    <transition name="mui-modal--fade">
        <div v-show="visible" class="mui-modal" @click.self="dealMaskClick">
            <div class="mui-modal__container">
                <mui-button :class="['mui-modal__button-close']" v-if="showClose" @click="close" :circle="true">X</mui-button>
                <div class="mui-modal__header">
                    <slot name="header">
                        {{title}}
                    </slot>
                </div>
                <div class="mui-modal__body">
                    <slot></slot>
                </div>
                <slot name="footer">
                    <div class="mui-modal__footer">
                        <mui-button v-if="showClose" @click="ok">{{okText}}</mui-button>
                        <mui-button @click="cancel">{{cancelText}}</mui-button>
                    </div>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'MuiModal',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: '',
            },
            okText: {
                type: String,
                default: '确认',
            },
            cancelText: {
                type: String,
                default: '取消',
            },
            maskClosable: {
                type: Boolean,
                default: true,
            },
            showClose: {
                type: Boolean,
                default: true,
            },
        },
        methods: {
            dealMaskClick() {
                if (this.maskClosable) {
                    this.close()
                }
            },
            close() {
                this.$emit('update:visible', false)
            },
            ok() {
                this.$emit('ok')
                this.close()
            },
            cancel() {
                this.$emit('cancel')
                this.close()
            },
        },
    }
</script>