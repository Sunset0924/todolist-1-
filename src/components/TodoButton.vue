<template>
  <button class="button" @click="addTodo">추가</button>
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
            alert ("할일이 추가되었습니다.")
            console.log()
            this.$emit('clickAddBtn',this.testInput)
        }
    },
    props:{
        whatTodo:{
            type:String,
            default:'할일'
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