<template>
  <div class="todo-item-list">
    <div class="todo-item">
    {{todo}}
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  props:{
    todo:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">

</style>