<template>
  <div class="container">
    <div class="itemContainer">
      <span>
        eat ice cream
      </span>
    </div>
    <add-bar></add-bar>
  </div>
</template>
<script type="application/ecmascript6">
import AddBar from 'components/AddBar'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters{

    }
  },
  components: {
    AddBar
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    display flex
    flex-direction column
    justify-content space-between
</style>
