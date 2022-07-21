<template>
    <div>
        <input type="text" placeholder="오늘 할 일을 입력하세요.">
        <button id="inputbutton">입력</button>
    </div>
</template>

<script>
export default {
    methods:{
        addTodo(){

        }
    }
    }
</script>

<style lang="scss">
    input{
        background-color:#fff9f9;
        width:300px;
        height:40px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        
    }
    button{
        height:48px;
        width: 60px;
        text-align: center;
        border-radius: 5px;
        border:none;
        background-color:#ffcece;
    }
</style>