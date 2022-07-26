<template>
    <input class="input" type="text" v-molel="todoInput" placeholder="오늘 할 일을 입력하세요.">
</template>

<script>
export default {
    methods:{
        todoInput(){
            return{
                todoInput:'',
            }
        }
    }
    //dataa (){ return{}} 요거랑 차이가 뭔가용
    }
</script>

<style lang="scss">
    .input{
        display: inline-block;
        background-color:#fff9f9;
        width:400px;
        height:50px;
        border:none;
        border-bottom: solid 2px #5c5c5c;
        border-radius: 5px;
        
    }
</style>