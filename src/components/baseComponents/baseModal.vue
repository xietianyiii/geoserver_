<template>
    <a-modal class="cgs-ds-base-components-modal" :title="title" :visible="vis"
        :width="width" @ok="handleOk" @cancel="handleCancel">
        <slot name="content"></slot>
        <template slot="footer">
            <slot name="footer">
            </slot>
        </template>
    </a-modal>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            visible: {
                type: Boolean,
                default: false
            },
            width: {
                type: [Number, String],
                default: 520
            }
        },
        data() {
            return {
                vis: false
            }
        },
        watch: {
            visible(newVal) {
                this.vis = newVal
            }
        },
        methods: {
            handleOk() {
                this.close()
            },
            handleCancel() {
                this.close()
            },
            close() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>