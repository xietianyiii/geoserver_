<template>
    <div class="cgs-ds-publish-map-server-button">
        <a-button type="primary" icon="plus-circle" disabled v-if="showDropdownMenuList.length === 0">{{buttonName}}
        </a-button>
        <a-button type="primary" icon="plus-circle" v-else-if="showDropdownMenuList.length === 1"
            @click="goToPublish(showDropdownMenuList[0])">{{buttonName}}</a-button>
        <a-dropdown placement="bottomCenter" v-else>
            <a-button type="primary" icon="plus-circle">{{buttonName}}</a-button>
            <a-menu slot="overlay">
                <a-menu-item v-for="menuItem in showDropdownMenuList" :key="menuItem.id" @click="openPublishModal(menuItem.id)">
                    <div class="cgs-ds-publish-map-server-dropdown-item">
                        <span class="dataServerIcon cgs-ds-publish-map-server-dropdown-item-icon"
                            :class="menuItem.icon"></span>
                        <span>{{menuItem.label}}</span>
                    </div>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
        <publish-file-modal :visible="publishModalConfig['file']['visible']" @close="closePublishModal('file')"></publish-file-modal>
    </div>
</template>

<script>
    import publishFileModal from './publish-file-modal.vue'
    export default {
        components: {
            publishFileModal
        },
        props: {
            buttonName: {
                type: String,
                default: '发布服务'
            },
            publishType: {
                type: Array,
                default: () => ['file', 'database']
            }
        },
        data() {
            return {
                allDropdownMenuList: [{
                    id: 'file',
                    label: '文件数据源',
                    icon: 'data-server-icon-wenjian'
                }, {
                    id: 'database',
                    label: '数据库',
                    icon: 'data-server-icon-database'
                }],
                publishModalConfig: {
                    file: {
                        visible: false
                    }
                }
            };
        },
        computed: {
            showDropdownMenuList: {
                get() {
                    return this.allDropdownMenuList.filter(_item => this.publishType.includes(_item.id))
                },
                set() {}
            }
        },
        methods: {
            openPublishModal(type) {
                this.publishModalConfig[type]['visible'] = true
            },
            closePublishModal(type){
                this.publishModalConfig[type]['visible'] = false
            }
        }
    };
</script>

<style scoped>
    .cgs-ds-publish-map-server-button {
        display: inline-block;
    }

    .cgs-ds-publish-map-server-dropdown-item-icon {
        margin-right: 5px;
    }
</style>

<style>
</style>