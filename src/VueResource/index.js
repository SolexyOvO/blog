import Vue from "vue"
import VueResource from "vue-resource"



Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true}
// Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true

// 解决跨域问题
Vue.http.interceptors.push(function(request, next){
  request.credentials = true;
  console.log("我是拦截器");
  next();
});