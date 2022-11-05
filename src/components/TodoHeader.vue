

<template>
  <div class="header">
    <!-- <img rel="mojo" src="https://item.kakaocdn.net/do/d660ac6c5065dd1481e3e962eed7fab0617ea012db208c18f6e83b1a90a7baa7"> -->
    <div>Date</div>
    <div class="container">
      <div>Month</div>
      <div>Year</div>
    </div>
    <div>Day</div>
  </div>    
</template>

<script>


export default {
  created(){
    let today = new Date()
    // today에 Date 객체를 넣음
    let date = this.$date.getDate(today)
    let month = this.$date.getMonth(today)
    let day = this.$date.getDay(today)
    console.log(date, month, day)
    // let dd = this.$date.dateFormatter(today)
    // console.log(dd)

}

  
}
</script>

<style lang="scss">
.header{
    width: auto;
    padding: 20px;
    height: 50px;
    display: flex;
    background-color: rgb(160, 185, 243);
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    font-size:30px;
    div:nth-child(3){
      color:rgb(255, 255, 255);
      font-style: bold;
      margin-left:300px;
      font-size:20px;
      align-content: left;
    }
    }
.container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 8px;
}

</style>