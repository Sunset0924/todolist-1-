<template>
  <div class="container">
    <button class="button" @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            testInput:'테스트 값'
        }
    },
    methods:{
        addTodo: function(){
            // alert ("할일이 추가되었습니다.")
            this.$emit('clickAddBtn')
        }
    },
    // props:{
    //     whatTodo:{
    //         type:String,
    //         default:'할일'
    //     }
    // }
  }
</script>

<style lang="scss">
@import url('../style/reset.css');
.container{
  display:inline-block;
}
.button{
    display: inline-block;
    height:50px;
    width:60px;
    box-sizing: border-box;
    // text-align: center;
    border:none;
    background-color:#947a74;
    color:white;
    padding:0;
}
</style>