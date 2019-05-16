<template>
  <div>
    <div class="home">home</div>
    <router-link to="/list" class="home">列表页面</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  }
}
</script>

<style>
  .home{
    font-size: 50px;
  }
</style>
