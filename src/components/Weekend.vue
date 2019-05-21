<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data () {
            return {
                recommendList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/' +
                        'sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
                    title: '北京世界园艺博览会',
                    desc: '619条评论',
                },{
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/' +
                        'source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '北京世界园艺博览会',
                    desc: '619条评论',
                },{
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '北京世界园艺博览会',
                    desc: '619条评论',
                },{
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title: '北京世界园艺博览会',
                    desc: '619条评论',
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .title
        margin-top .2rem
        line-height .4rem
        background #ccc
        text-indent .2rem
        text-align left
    .item-img-wrapper
        overflow hidden
        height: 0
        padding-bottom 33.9%
    .item-img
        width 100%
    .item-info
        padding .1rem
        text-align left
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>