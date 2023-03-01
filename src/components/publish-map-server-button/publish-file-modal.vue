<template>
    <base-modal class="cgs-ds-publish-file-modal" :visible="vis" title="文件数据源" @close="closeModal" width="50%">
        <div slot="content">
            <div class="cgs-ds-publish-file-modal-content">
                <div class="cgs-ds-publish-file-modal-step-container">
                    <a-steps :current="currentStep">
                        <a-step title="选择文件" />
                        <a-step title="Waiting" description="This is a description." />
                        <a-step>
                            <template slot="title">
                                Finished
                            </template>
                            <span slot="description">This is a description.</span>
                        </a-step>
                    </a-steps>
                </div>
                <div></div>
            </div>
        </div>
        <template slot="footer"></template>
    </base-modal>
</template>

<script>
    import baseModal from '@component/baseComponents/baseModal.vue'
    export default {
        components: {
            baseModal
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
                steps: [{
                        title: 'First',
                        content: 'First-content',
                    },
                    {
                        title: 'Second',
                        content: 'Second-content',
                    },
                    {
                        title: 'Last',
                        content: 'Last-content',
                    }
                ],
            }
        },
        watch: {
            visible(newVal) {
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
        }
    }
</script>

<style scoped>

</style>