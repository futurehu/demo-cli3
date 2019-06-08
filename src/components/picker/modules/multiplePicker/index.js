import cascadePicker from "../../components/multiple-picker.vue"
import addCascadePicker from "./api"
cascadePicker.install = (Vue) => {
  Vue.component(cascadePicker.name, cascadePicker);
  addCascadePicker(Vue, cascadePicker)
}
export default cascadePicker