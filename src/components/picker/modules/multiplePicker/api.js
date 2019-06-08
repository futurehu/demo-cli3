import createAPI from "vue-create-api"
export default function addCascadePicker(Vue,cascadePicker){
  Vue.use(createAPI);
  Vue.createAPI(cascadePicker,['select','cancel','change'],false)
}