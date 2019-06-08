import TimePicker from "../../components/time-picker"
import addTimePicker from "./api"
TimePicker.install = (Vue)=>{
  Vue.component(TimePicker.name,TimePicker)
  addTimePicker(Vue,TimePicker)
}
export default TimePicker