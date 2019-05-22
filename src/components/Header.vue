<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl'
    .header
        display: flex
        line-height: .86rem //行高
        background :$bgColor
        color: #fff   //字体颜色：白色
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            line-height: .64rem
            height : .64rem
            text-align: left
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .8rem
            background :#fff
            border-radius: .1rem //圆角
            color: #ccc
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            font-size: .3rem
            .arrow-icon
                font-size: .26rem
</style>