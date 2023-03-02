<template>
    <div class="cgs-ds-publish-file-setting">
        <div>
            <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" @submit="handleSubmit">
                <a-form-item label="服务名称">
                    <a-input v-model="name" />
                </a-form-item>
                <a-form-item label="服务描述">
                    <a-textarea v-model="desc" :auto-size="{ minRows: 5, maxRows: 5 }" />
                </a-form-item>
                <a-form-item label="编码格式">
                    <a-select v-model="codeFormat" style="width: 120px" @change="handleChange">
                        <a-select-option value="gbk">
                            GBK
                        </a-select-option>
                        <a-select-option value="utf-8">
                            UTF-8
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </div>
        <div class="cgs-ds-publish-file-setting-senior-button">
            <span @click='openCloseSeniorSetting = !openCloseSeniorSetting'>
                <span>高级设置</span>
            </span>
        </div>
        <div>
            <a-form :form="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }" @submit="handleSubmit">
                <a-form-item label="协议配置">
                    <div>
                        <a-checkable-tag :checked="protocol.includes('WMS')" @change="checkProtocol('WMS')">WMS</a-checkable-tag>
                        <a-checkable-tag :checked="protocol.includes('WMTS')" @change="checkProtocol('WMTS')">WMTS</a-checkable-tag>
                        <a-checkable-tag :checked="protocol.includes('WFS')" @change="checkProtocol('WFS')">WFS</a-checkable-tag>
                        <a-checkable-tag :checked="protocol.includes('TMS')" @change="checkProtocol('TMS')">TMS</a-checkable-tag>
                    </div>
                    <div>
                        <a-checkbox :checked="autoSlice" @change="autoSlice = !autoSlice">自动切片</a-checkbox>
                    </div>
                </a-form-item>
                <a-form-item label="符号配置">
                    <div class="cgs-ds-map-server-style-container">
                        <div class="cgs-ds-map-server-style-select-container">
                            <a-input-search placeholder="搜索符号配置" v-model="searchSymbolValue" />
                            <div class="cgs-ds-map-server-style-select-img-container">
                                <img :src="selectedSymbol.img" :alt="selectedSymbol.label">
                            </div>
                        </div>
                        <div class="cgs-ds-map-server-style-list-container">
                            <div class="cgs-ds-map-server-style-list-item" v-for="symbol in showSymbolList" :key="symbol.id" @click="selectSymbol(symbol)">
                                <img :src="symbol.img" :alt="symbol.label">
                                <div class="cgs-ds-map-server-style-list-item-label">{{symbol.label}}</div>
                            </div>
                        </div>
                    </div>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            file: {
                type: [Object, undefined],
                default: () => undefined
            }
        },
        data() {
            return {
                name: '',
                desc: '',
                codeFormat: 'gbk',
                protocol: ['WMS', 'WMTS', 'WFS', 'TMS'],
                autoSlice: false,
                symbol: '1',
                openCloseSeniorSetting: false,
                searchSymbolValue: '',
                symbolList: [{
                        id: '1',
                        label: '默认面',
                        img: require('/src/assets/image/symbol/defaultPoly.png')
                    },
                    {
                        id: '2',
                        label: '湖泊',
                        img: require('/src/assets/image/symbol/hupo.png')
                    },
                    {
                        id: '3',
                        label: '草坪',
                        img: require('/src/assets/image/symbol/caoping.png')
                    },
                    {
                        id: '4',
                        label: '沙漠',
                        img: require('/src/assets/image/symbol/shamo.png')
                    },
                    {
                        id: '5',
                        label: '市界',
                        img: require('/src/assets/image/symbol/shijie.png')
                    },
                    {
                        id: '6',
                        label: '建筑',
                        img: require('/src/assets/image/symbol/jianzhu.png')
                    },
                    {
                        id: '7',
                        label: '省界面',
                        img: require('/src/assets/image/symbol/shengjiemian.png')
                    }
                ]
            }
        },
        computed: {
            selectedSymbol: {
                get() {
                    let symbol = this.symbolList.find(style => style.id === this.symbol)
                    return symbol
                },
                set() {}
            },
            showSymbolList: {
                get() {
                    let _list = this.symbolList.filter(_item => _item.label.indexOf(this.searchSymbolValue) > -1)
                    return _list
                },
                set() {}
            }
        },
        mounted() {
            let _name = this.file.name;
            this.name = _name.split('.')[0]
        },
        methods:{
            selectSymbol(symbol){
                this.symbol = symbol.id
            },
            checkProtocol(protocol){
                let _index = this.protocol.findIndex(_item => _item === protocol);
                if(_index > -1){
                    this.protocol.splice(_index, 1)
                } else {
                    this.protocol.push(protocol)
                }
            }
        }
    }
</script>

<style scoped>
    .cgs-ds-map-server-style-list-container {
        display: flex;
    }

    .cgs-ds-map-server-style-list-item {
        align-items: center;
        height: 50px;
        width: 40px;
        margin: 10px;
        cursor: pointer;
    }

    .cgs-ds-publish-file-setting-senior-button {
        margin: 16px 8px 0px 8px;
        font-size: 17px;
    }

    .cgs-ds-map-server-style-select-container {
        display: flex;
    }

    .cgs-ds-map-server-style-select-img-container {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        background-color: #ddd;
        line-height: 26px;

    }

    .cgs-ds-map-server-style-list-item>img {
        height: 30px;
        width: 30px;
    }

    .cgs-ds-map-server-style-list-item-label {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        font-size: 14px;
        line-height: 15px;
    }
</style>