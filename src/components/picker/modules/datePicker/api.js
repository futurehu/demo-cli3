import createAPI from "vue-create-api"
export default function addDatePicker(Vue,datePicker){
  Vue.use(createAPI)
  Vue.createAPI(datePicker,['select','cancel'], false)
}