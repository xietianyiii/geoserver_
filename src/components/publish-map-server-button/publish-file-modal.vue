<template>
    <base-modal class="cgs-ds-publish-file-modal" :visible="vis" title="文件数据源" @close="closeModal" width="50%">
        <div slot="content">
            <div class="cgs-ds-publish-file-modal-content">
                <div class="cgs-ds-publish-file-modal-step-container">
                    <a-steps :current="currentStep">
                        <a-step title="选择文件" />
                        <a-step title="发布配置" />
                        <a-step title="完成" />
                    </a-steps>
                </div>
                <div class="cgs-ds-publish-file-modal-step-content">
                    <div class="cgs-ds-publish-file-modal-step-0-content" v-if="currentStep===0">
                        <a-upload-dragger name="file" accept=".zip" :fileList="fileList" :remove="handleUploadRemove"
                            :before-upload="beforeUpload">
                            <p class="ant-upload-drag-icon">
                                <a-icon type="inbox" />
                            </p>
                            <p class="ant-upload-text">
                                点击或将文件拖拽到当前区域
                            </p>
                            <p class="ant-upload-hint">
                                支持.zip文件
                            </p>
                        </a-upload-dragger>
                    </div>
                    <div class="cgs-ds-publish-file-modal-step-1-content" v-else-if="currentStep===1">
                        <publish-file-setting v-if="fileList.length === 1" :file="fileList[0]"></publish-file-setting>
                    </div>
                    <div class="cgs-ds-publish-file-modal-step-2-content" v-else>
                        <div class="cgs-ds-publish-file-modal-step-success">
                            <a-icon type="check-circle" style="font-size: 50px;" />
                            <span>发布成功</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template slot="footer">
            <a-button type="primary" v-if="currentStep===0" @click="currentStep++" :disabled="fileList.length === 0">
                下一步
            </a-button>
            <a-button type="primary" v-else-if="currentStep===1" @click="currentStep++">
                发布
            </a-button>
            <a-button type="primary" v-else @click="closeModal">
                关闭
            </a-button>
        </template>
    </base-modal>
</template>

<script>
    import baseModal from '@component/baseComponents/baseModal.vue'
    import publishFileSetting from './publish-file-setting.vue'

    export default {
        components: {
            baseModal,
            publishFileSetting
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                vis: false,
                currentStep: 0,
                fileList: []
            }
        },
        watch: {
            visible(newVal) {
                if(!newVal){
                    this.currentStep = 0;
                    this.fileList = []
                }
                this.vis = newVal
            }
        },
        methods: {
            closeModal() {
                this.$emit('close')
            },
            nextStep() {
                this.currentStep++;
            },
            prevStep() {
                this.currentStep--;
            },
            handleUploadRemove(file) {
                this.fileList = []
            },
            beforeUpload(file) {
                this.fileList = [file];
                return false;
            },
        }
    }
</script>

<style scoped>
    .cgs-ds-publish-file-modal-step-content {
        margin: 16px 0px;
    }

    .cgs-ds-publish-file-modal-step-success {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color:#87d068;
    }

    .cgs-ds-publish-file-modal-step-success>span {
        font-size: 20px;
        margin-top: 20px;
    }
</style>