<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon"
                     v-for="item of iconList"
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src='item.imgUrl'/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data () {
            return {
                iconList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/' +
                        'f3dd6c383aeb3b02.png',
                    desc: '景点门票',
                },{
                    id: '0002',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/' +
                        'mp_piao_admin_mp_piao_admin/admin/20195/' +
                        '35d83bb968d80d54926f30cfb92cb6ff.png',
                    desc: '每周好货',
                }]
            }
        },
        computed: {
            pages() {
                const pages = []
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float: left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border
            padding .1rem
            .icon-img-content
                //display: block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
</style>