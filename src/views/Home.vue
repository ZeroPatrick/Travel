<template>
  <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
    import HomeHeader from '../components/home/Header';
    import HomeSwiper from '../components/home/Swiper';
    import HomeIcons from '../components/home/Icons';
    import HomeRecommend from "../components/home/Recommend";
    import HomeWeekend from "../components/home/Weekend";
    import axios from 'axios'
    export default {
  name: 'Home',
  components: {
      HomeWeekend,
      HomeRecommend,
      HomeHeader,
      HomeSwiper,
      HomeIcons,
  },
  data () {
      return {
          city: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: [],
      }
  },
  methods: {
      getHomeInfo () {
          axios.get('/api/index.json')
              .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
          window.console.log(res)
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.city = data.city
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }
      }
  },
  mounted () {
      this.getHomeInfo()
  }
}
</script>

<style>

</style>
