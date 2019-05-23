<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities"
                   :hot="hotCities"
                   :letter="letter"
        ></city-list>
        <city-alphabet
                :cities="cities"
                @change="hancleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from '../components/city/Header'
    import CitySearch from '../components/city/Search'
    import CityList from "../components/city/List";
    import CityAlphabet from "../components/city/Alphabet";
    export default {
        name: "City",
        components: {
            CityAlphabet,
            CityList,
            CityHeader,
            CitySearch,
        },
        data () {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/api/city.json')
                    .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            hancleLetterChange (letter) {
                this.letter = letter
                //window.console.log(letter)
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>