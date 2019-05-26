import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

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
    { path: "*", 
      component: Main,
      //• 利用ﬁrebase.auth().currentUser可以取得目前登入人員的帳號資訊 
      //• 利用判斷!ﬁrebase.auth().currentUser的真偽就可知道是否登入成 功
      //• beforeEnter是router提供的middleware 
      //• 利用middleware可以在進行router動作之前插 入指令 
      //• beforeEnter擁有三個參數函數，利用next函 數可以管理導覽 
      beforeEnter:(to,from,next)=>{
        if(!firebase.auth().currentUser){
          //• 如果未登入，就利利⽤用next(‘/login’)導覽到login 畫⾯面
          next("/login");
        }else{
          //• 如果已經登入，就利利⽤用next()進⾏行行預設的導覽
          next();
        }
      } 

    },
    { path: "/login", component: Login },
    //props:true 可以將變數ID傳遞給New16頁面
    { path:"/news/:id",component:News16,
      props:true,
      beforeEnter:(to,from,next)=>{
        if(!firebase.auth().currentUser){
          next("/login");
        }
        else{
          next();
        }
      }  
    }
  ]
});