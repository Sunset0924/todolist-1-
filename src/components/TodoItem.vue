<template>
  <div class="todo-item-list">
    <div class="todo-item">
      {{index+1}}. {{todo.todoItem}}
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
      type:Object,
      default:()=>{}
    },
    index:{
      type:Number,
      default:0
    }
  },
  methods:{
    test(){
      console.log(this.keydata)
    },
    deleteTodo(){
      console.log('delete', this.todo.idx)
      this.$emit('delete',this.todo.idx)
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