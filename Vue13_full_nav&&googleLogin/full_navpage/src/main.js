//加入bootstrap套件
//• 直接在程式進入點的main.js利利⽤用import加入Bootstrap套件，即可在所有的範 本之中使⽤用Bootstrap提供的類別
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "./firebase";

import Vue from 'vue';
import App from './App';
//只要指引到store目錄，vue就會自 動尋找index.js並且將index.js的內容 設定為store 
import store from './store';
import router from './router';


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

