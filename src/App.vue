<template>
  <div id="app">
    <tab></tab>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Tab from 'components/tab'
import store from 'store/index'
export default {
  name: 'App',
  components: {
    Tab
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
