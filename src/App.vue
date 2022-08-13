<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoItem />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
require ('@/components/reset.css')
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoItem from '@/components/TodoItem.vue'
//input만들어서 임포트 해오기!! 최대한 안 보고 해보기! 

export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoItem
  }
}

</script>

<style lang="scss">
</style>
