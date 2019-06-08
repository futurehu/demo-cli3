import { datePicker, Picker, cascadePicker,TimePicker } from "./modules"
import createAPI from "vue-create-api"

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  const components = [datePicker, Picker, cascadePicker,TimePicker];
  components.forEach((component) => {
    component.install(Vue)
  })
}
const Pickers = {
  version: "1.0.0",
  install
}
if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(createAPI);
  window.Vue.use(install);
}
export default Pickers