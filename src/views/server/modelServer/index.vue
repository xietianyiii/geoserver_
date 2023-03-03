<template>
    <a-layout class="data-server-map-server-container">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            模型服务
        </a-layout-content>
    </a-layout>
</template>

<script>
    export default {
        components: {
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