<template>
    <div class="cgs-ds-published-map-server-list">
        <div class="cgs-ds-published-map-server-list-header"></div>
        <div class="cgs-ds-published-map-server-list-content">
            <div class="cgs-ds-published-map-server-list-item" v-for="item in list" :key="item.id">
                <div class="cgs-ds-published-map-server-list-item-banner">
                    <div class="cgs-ds-published-map-server-list-item-banner-mask">
                        <span
                            class="cgs-ds-published-map-server-item-preview dataServerIcon data-server-icon-yanjing"></span>
                    </div>
                </div>
                <div class="cgs-ds-published-map-server-list-item-oper-message">
                    <div class="cgs-ds-published-map-server-item-message">
                        <div class="cgs-ds-published-map-server-item-base-message">
                            <div class="cgs-ds-published-map-server-item-title">{{item.name}}</div>
                            <div class="cgs-ds-published-map-server-item-protocol">{{item.protocol.join(',')}}</div>
                        </div>
                        <div class="cgs-ds-published-map-server-item-status">{{ item.status===1?'运行中':'异常' }}</div>
                    </div>
                    <div class="cgs-ds-published-map-server-item-get-oper">
                        <div class="cgs-ds-published-map-server-item-oper">
                            <span title="编辑"
                                class="cgs-ds-published-map-server-item-icon cgs-ds-published-map-server-item-common dataServerIcon data-server-icon-tianxie"></span>
                            <span title="运行中"
                                class="cgs-ds-published-map-server-item-icon cgs-ds-published-map-server-item-common dataServerIcon data-server-icon-zanting"></span>
                            <span title="删除"
                                class="cgs-ds-published-map-server-item-icon cgs-ds-published-map-server-item-common dataServerIcon data-server-icon-shanchu"></span>
                        </div>
                        <div class="cgs-ds-published-map-server-item-get">
                            <div class="cgs-ds-published-map-server-item-get-block">获取</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DsPublishedMapServerList',
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
        background: url('./cover.png');
        width: 210px;
        height: 140px;
        background-repeat: round;
    }

    .cgs-ds-published-map-server-list-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .cgs-ds-published-map-server-item-message {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #eee;
    }

    .cgs-ds-published-map-server-item-title {
        width: 100%;
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 140px;
    }

    .cgs-ds-published-map-server-item-protocol {
        height: 16px;
        text-align: left;
        color: #999;
        font-size: 12px;
    }

    .cgs-ds-published-map-server-item-base-message {
        flex: 1;
    }

    .cgs-ds-published-map-server-item-status {
        color: #3b7cff;
        font-size: 12px;
    }

    .cgs-ds-published-map-server-list-item-oper-message {
        padding: 9px 10px;
    }

    .cgs-ds-published-map-server-list-item {
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        transition: .3s;
        margin: 10px;
    }

    .cgs-ds-published-map-server-list-item:hover {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }

    .cgs-ds-published-map-server-item-get-oper {
        display: flex;

    }

    .cgs-ds-published-map-server-item-oper {
        flex: 1;
    }

    .cgs-ds-published-map-server-item-get-block {
        color: #3b7cff;
        padding: 2px 5px;
        border: 1px solid #3b7cff;
        font-size: 12px;
        border-radius: 20px;
        cursor: pointer;
    }

    .cgs-ds-published-map-server-item-icon {
        margin-right: 10px;
        cursor: default;
        display: inline-block;
        font-size: 14px;
    }

    .cgs-ds-published-map-server-item-common {
        color: #303133;
    }

    .cgs-ds-published-map-server-list-item-banner-mask {
        display: none;
        transition: .3s;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .cgs-ds-published-map-server-list-item-banner:hover .cgs-ds-published-map-server-list-item-banner-mask {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cgs-ds-published-map-server-item-preview {
        font-size: 24px;
        color: #fff;
    }
</style>