import Date from '../js/Date'

export default {
    install (Vue){
        console.log ('plugin use~')
        Vue.prototype.$date = new Date()

        }
    }