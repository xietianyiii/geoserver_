<template>
    <div class="cgs-ds-published-map-server-list">
        <div class="cgs-ds-published-map-server-list-header"></div>
        <div class="cgs-ds-published-map-server-list-content">
            <div class="cgs-ds-published-map-server-list-item" v-for="item in list" :key="item.id">
                <div class="cgs-ds-published-map-server-list-item-banner"></div>
                <div class="cgs-ds-published-map-server-list-item-oper-message">
                    <div class="cgs-ds-published-map-server-item-message">
                        <div class="cgs-ds-published-map-server-item-base-message">
                            <div class="cgs-ds-published-map-server-item-title"></div>
                            <div class="cgs-ds-published-map-server-item-protocol"></div>
                        </div>
                        <div class="cgs-ds-published-map-server-item-status"></div>
                    </div>
                    <div class="cgs-ds-published-map-server-item-oper"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    id: '1',
                    name: '河流',
                    protocol: ['WMS', 'WMTS', 'WFS', 'TMS'],
                    status: 1,
                    time: '2023-03-01 18:19:47'
                }]
            }
        },

    }
</script>

<style scoped>
    .cgs-ds-published-map-server-list-item-banner {
        background: url('~@image/cover.png');
        width: 210px;
        height: 140px;
    }
</style>