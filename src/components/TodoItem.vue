<template>
  <div class="todo-item-list">
    <div class="todo-item">
      {{index+1}}. {{todo.todoItem}}
      <button class="delete-button" @click="deleteTodo">DEL</button>
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
.todo-item{
  background-color: #fff;
  padding:20px;
}
  .delete-button{
    color:rgb(255, 255, 255);
    background-color:rgb(211, 206, 198);
    border:none;
    font-size:10px;
  }

</style>