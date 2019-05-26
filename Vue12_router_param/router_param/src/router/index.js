import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import Login from "../pages/Login";
import News16 from "../pages/News16"
//• 利用Vue.use(VueRouter)將Router功能 加入Vue，如此才能在Vue的範本使 用router的標籤<router-view> 
Vue.use(VueRouter);

export default new VueRouter({
    //router會將一 般的網址設定為router的URL 
    mode: "history",
  routes: [
    //"*"讓所有不符合的URL都導向Main頁面
    { path: "*", component: Main },
    { path: "/login", component: Login },
    //props:true 可以將變數ID傳遞給New16頁面
    { path:"/news/:id",component:News16,props:true}
  ]
});