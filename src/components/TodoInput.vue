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