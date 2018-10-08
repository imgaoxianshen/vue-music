<template>
    <div class="singer">
        <list-view :data="singers"></list-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import {getSingerList} from 'api/singer'
    import {ERR_OK} from 'api/config'
    import ListView from 'base/listview/listview'

    export default {
        data () {
            return {
                singers: []
            }
        },
        created () {
            this._getsingerList()
        },
        methods: {
            _getsingerList () {
                getSingerList().then((res) => {
                    if (res.code === ERR_OK) {
                        this.singers = res.singerList.data.singerlist
                    }
                })
            }
        },
        components: {
            ListView
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .singer
        position: fixed
        top: 88px
        bottom: 0
        width: 100%
</style>
