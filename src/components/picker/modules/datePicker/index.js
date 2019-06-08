import DatePicker from "../../components/datePicker.vue"
import addDatePicker from "./api"
DatePicker.install = (Vue)=>{
  Vue.component(DatePicker.name,DatePicker)
  addDatePicker(Vue,DatePicker)
}
export default DatePicker