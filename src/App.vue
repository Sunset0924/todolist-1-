<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @click="addItem"/>
    <TodoItem v-for="(item, k) in items" :key="k" :todo="item" :index="k" @delete="deleteItem"/>
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
      title:'To do list',
      indexNum: 1
      // tmp:{
      //   no: this.num,
      //   data: this.items
      // },
      // num:1,
    }
  },
  methods:{
    addItem(data){
      // tmp object 생성
      const tmpObj = {
        idx: this.indexNum,
        todoItem: data
      }
      this.items.push(tmpObj)
      console.log(tmpObj)
      this.indexNum++
      },
    deleteItem(data){
      console.log(data)
      const tmp = this.items.filter(item => item.idx !== data)
      console.log('필터링한 배열 나오는지', tmp)
      this.items = tmp
    }
  }
}

</script>

<style lang="scss">
// css file import는 style tag 안에서! 
@import url('./style/reset.css');
</style>
