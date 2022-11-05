export default class Date{
    constructor() {
        // 이 클래스가 생성될 때 자동으로 셋팅되는 값들
        // 초기화
        this.dateArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']
        this.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }

    getDate(today){
        // date 객체를 받음 
        return today.getDate()

    }

    getMonth(today){
        return today.getMonth()
    }

    getDay (today){
        let day = today.getDay()
        console.log(day)
        return this.dayArray[day]
        // 0이 들어오면 일요일, 1이 들어오면 월요일, 2가 들어오면 화요일이 찍히도록

    }

    // dateFormatter (today){
    //     let month = this.dateArray[today.getMonth()]
    //     let date = today.getDate()
    //     return month + ',' + date + 'th'
    // }


}