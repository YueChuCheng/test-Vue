import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import Login from "../pages/Login";

//• 利用Vue.use(VueRouter)將Router功能 加入Vue，如此才能在Vue的範本使 用router的標籤<router-view> 
Vue.use(VueRouter);

export default new VueRouter({
    //router會將一 般的網址設定為router的URL 
    mode: "history",
  routes: [
    { path: "/", component: Main },
    { path: "/login", component: Login }
  ]
});