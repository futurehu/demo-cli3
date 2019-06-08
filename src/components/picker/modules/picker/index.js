import Picker from "../../components/picker.vue"
import addPicker from "./api"
Picker.install = (Vue)=>{
  Vue.component(Picker.name,Picker);
  addPicker(Vue,Picker)
}
export default Picker