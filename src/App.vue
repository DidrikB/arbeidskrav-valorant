<template>
    <the-navigation></the-navigation>
    <div>
      <router-view></router-view>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import TheNavigation from './components/shared/TheNavigation.vue'

export default {
  name: 'App',
  components: {
    TheNavigation
  }
}

</script>


<style>
  img{
    width: 500px;
    height: 120px;
  }
</style>