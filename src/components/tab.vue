<template>
  <div class="tabContainer">
    <router-link to="/todo" class="tabItem">
      <span class="tabSpan">
        todo
      </span>
    </router-link>
    <router-link to="/social" class="tabItem">
      <span class="tabSpan">
        social
      </span>
    </router-link>
  </div>
</template>
<script type="application/ecmascript6">
export default {

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tabContainer
    display flex
    .tabItem
      flex 1
      color black
      text-decoration none

</style>
