import createAPI from "vue-create-api"
export default function addTimePicker (Vue,TimePicker){
  Vue.use(createAPI);
  Vue.createAPI(TimePicker,['select','change','cancel'],false);
} 