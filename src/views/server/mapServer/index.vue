<template>
    <a-layout class="data-server-map-server-container">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <div class="data-server-map-server-content">
                <div class="data-server-map-server-header-container">
                    <publish-map-server-button></publish-map-server-button>
                </div>
                <div class="data-server-map-server-content-container">
                    <published-map-server-list></published-map-server-list>
                </div>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import publishMapServerButton from '@component/publish-map-server-button/index.vue'
    import publishedMapServerList from '@component/published-map-server-list/index.vue'
    export default {
        components: {
            publishMapServerButton,
            publishedMapServerList
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .data-server-map-server-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .data-server-map-server-content-container{
        flex: 1;
        margin-top: 16px
    }
</style>

<style>
    .data-server-map-server-container.ant-layout {
        padding: 0 24px 24px;
    }
</style>