<template>
  <div class="todo-item-list">
    <div class="todo-item">
      {{keydata+1}}. {{todo}}
      <button class="delete-button" @click="deleteTodo">삭제</button>
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
      default:()=>{}
    },
    keydata:{
      type:Number,
      default:0
    }
  },
  methods:{
    test(){
      console.log(this.keydata)
    },
    deleteTodo(){
      console.log('delete', this.keydata)
    }
}
}
</script>

<style lang="scss">
  .delete-button{
    color:rgb(133, 133, 133);
    border:none;
  }

</style>