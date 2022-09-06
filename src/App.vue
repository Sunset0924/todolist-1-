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
  created(){

  },
  mounted(){
    const todoItem = window.localStorage.getItem('todoItem')
    // 만약 todoItem이 null인 경우 item에도 ㅡ*null이 들어감. Null에는 push를 할 수 없음. 배열에만 가능.
    if(todoItem !== null){
      this.items = JSON.parse(todoItem)
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
      // items => 객체 배열
      window.localStorage.setItem('todoItem',JSON.stringify(this.items))

      },
    deleteItem(data){
      console.log(data)
      const tmp = this.items.filter(item => item.idx !== data)
      console.log('필터링한 배열 나오는지', tmp)
      this.items = tmp //삭제된 배열을 아래에서 local storage에 다시 저장
      window.localStorage.setItem('todoItem',JSON.stringify(this.items))

    }
  }
}

</script>

<style lang="scss">
// css file import는 style tag 안에서! 
@import url('./style/reset.css');
</style>
