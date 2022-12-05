

<template>
  <div class="header">
    <!-- <img rel="mojo" src="https://item.kakaocdn.net/do/d660ac6c5065dd1481e3e962eed7fab0617ea012db208c18f6e83b1a90a7baa7"> -->
    <!-- <div class="flex_item"> -->
      <div class="date">{{dateOfToday}}</div>
      <div class="day">{{dayOfToday}}</div>
      <div class="task">4 Tasks</div>
    <!-- </div> -->
  </div>    
</template>

<script>


export default {

  data(){
    return{
      dateOfToday:'',
      dayOfToday:''
    }
  },
  created(){
    let today = new Date()
    // let today2 = new Date()
    // today에 Date 객체를 넣음
    this.dateOfToday = this.$date.dateFormatter(today)
    this.dayOfToday = this.$date.getDay(today)
    console.log('[TodoHeader.vue] created', this.dateOfToday, ',', this.dayOfToday)

    // let dd = this.$date.dateFormatter(today)
    // console.log(dd)

}

  
}
</script>

<style lang="scss">

@import url('../style/reset.css');

.header{
    width: auto;
    padding: 20px;
    box-sizing:border-box;
    width: 500px;
    height: 80px;
    display: flex;
    background-color: #f2fffb;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    border-radius: 15px 15px 0px 0px;
    color:#947a74;
    // justify-content: space-between;
    // flex-grow: 2;
    
    //   div:nth-child(3){
    //   color:rgb(255, 255, 255);
    //   font-style: bold;
    //   margin-left:300px;
    //   font-size:20px;
    //   align-content: left;
    // }
    }
.date{
  font-weight:bold;
}
.day{
  width: auto;
  font-size: 15px;
  flex: 2 1;
}
.task{
  font-size: 20px;
  color:rgb(188, 188, 188);
}
// .day {
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//     font-size: 8px;
//     flex-grow: 3
//     ;
//     }
// .task {
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//     font-size: 15px;
//     color:#fff;
//     flex-grow:1;
//     align-items: flex-end;
// }


</style>