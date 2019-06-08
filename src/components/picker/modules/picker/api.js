import createAPI from "vue-create-api"
export default function addPicker(Vue, Picker) {
  Vue.use(createAPI)
  Vue.createAPI(Picker, ['select', 'change', 'cancel'], false)
}