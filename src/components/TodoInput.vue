<template>
    <div>
        <input class="input" v-model="newTodoItem" type="text" placeholder="오늘 할 일을 입력하세요.">
        <TodoButton @clickAddBtn="addTodo" />
    </div>

</template>

<script>
import TodoButton from '@/components/TodoButton.vue'

export default {
    data(){
        return{
            newTodoItem:""
        }
    },
    components: {
        TodoButton
    },
    methods: {
        // methods는 동사 형태로 작성을 권장
        addTodo () {
            this.$emit('click', this.newTodoItem)
            this.newTodoItem=''
        }
}
}
</script>

<style lang="scss">
@import url('../style/reset.css');

    // .container{
    //     display: inline-block;
    //     width:500px;
    // }
    .input{
        display: inline-block;
        background-color:#fff;
        width: 440px;
        box-sizing: border-box;
        padding:20px;
        height:50px;
        border:none;
        border-bottom: solid 0.5pt #b9b9b9;
        
        
    }
</style>