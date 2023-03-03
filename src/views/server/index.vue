<template>
    <a-layout class="data-server-server-container">
        <a-layout-sider width="200" style="background: #fff">
            <a-menu :default-selected-keys="activeMenuIds" :default-open-keys="openMenuIds" mode="inline"
                :style="{ height: '100%', borderRight: 0 }">
                <a-sub-menu v-for="menu in menuConfig" :key="menu.id">
                    <template #title>
                        <span>
                            {{menu.label}}
                        </span>
                    </template>
                    <a-menu-item v-for="sMenu in secondMenuConfig[menu.id]" :key="sMenu.id" @click="toServer(sMenu)">{{sMenu.label}}
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <router-view></router-view>
    </a-layout>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                activeMenuIds: ['mapServer'],
                openMenuIds: ['dataServer'],
                menuConfig: [{
                    id: 'dataServer',
                    label: '数据服务'
                }],
                secondMenuConfig: {
                    dataServer: [{
                        id: 'mapServer',
                        label: '地图服务'
                    }, {
                        id: 'modelServer',
                        label: '模型服务'
                    }, {
                        id: 'obliquePhotographServer',
                        label: '倾斜摄影服务'
                    }]
                }
            };
        },
        methods:{
            toServer(menuItem){
                this.$router.push({
                    name: menuItem.id
                })
            }
        }
    };
</script>
<style>
    .data-server-server-container.ant-layout {
        width: 100%;
        height: 100%;
    }

    #components-layout-demo-top-side-2 .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        background: rgba(255, 255, 255, 0.3);
    }

    .ant-row-rtl #components-layout-demo-top-side-2 .logo {
        float: right;
        margin: 16px 0 16px 24px;
    }

    .site-layout-background {
        background: #fff;
    }
</style>