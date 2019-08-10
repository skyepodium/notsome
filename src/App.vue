<template>
  <div id="app">
    <vue-page-transition name="overlay-left">
      <router-view :key="$route.fullPath" />
    </vue-page-transition>
  </div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>
input[type="text"], input[type="password"] { outline: none; }
textarea[type="text"], textarea[type="password"] { outline: none; }
textarea:focus {
    outline: none;
    box-shadow: 0 0 10px #719ECE;
}
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Nunito&display=swap');
#app{
}
</style>
