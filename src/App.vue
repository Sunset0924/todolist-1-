<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @click="addItem"/>
    <TodoItem v-for="(todo,k) in items.lenght" :key="k"/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoItem from '@/components/TodoItem.vue'
//input만들어서 임포트 해오기!! 최대한 안 보고 해보기! 

export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoItem
  },
  data(){
    return{
      items:[],
    }
  },
  methods:{
    addItem(todo){
      console.log(todo)
      this.items.push(todo)
    }
  }
}

</script>

<style lang="scss">
// css file import는 style tag 안에서! 
@import url('./style/reset.css');
</style>
