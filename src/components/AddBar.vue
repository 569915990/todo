<template>
  <div>
    <input type="text" v-model="newItemContent">
    <button @click="addItem">Add</button>
  </div>
</template>
<script type="application/ecmascript6">
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      newItemContent: ''
    }
  },
  methods: {
    addItem () {
      if (this.newItemContent) {
        this.addItem({
          id: Math.random() * 100000000,
          content: this.newItemContent,
          isComplete: false,
          date: new Date()
        })
      }
    },
    ...mapMutations({
      addItem: 'ADD_ITEM'
    })
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
