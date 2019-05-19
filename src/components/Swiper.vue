<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                },
                swiperList: [{
                    id: "0001",
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/' +
                        'admin/20194/522b43cda83d29460da14ec8975b4060.jpg_750x200_2ff9e60a.jpg',
                },{
                    id: '0002',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/' +
                        'admin/20195/5eb82a8ca5b0cebb2c3ae1a53a4d8f81.jpg_750x200_645bfba1.jpg',
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background :#fff
    .wrapper
        overflow :hidden
        width: 100%
        height:0
        padding-bottom:26.67%
        background：#eee
        .swiper-img
            width: 100%
</style>