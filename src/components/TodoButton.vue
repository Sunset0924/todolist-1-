<template>
  <button class="button" @click="addTodo">추가</button>
</template>

<script>
export default {
  methods:{
    addTodo: function(){
      alert ("할일이 추가되었습니다.")
    }
  }
}
</script>

<style lang="scss">
.button{
    display: inline-block;
    height:50px;
    width: 50px;
    text-align: center;
    border-radius: 5px;
    border:none;
    margin:2px;
    background-color:#ffcece;
}
</style>