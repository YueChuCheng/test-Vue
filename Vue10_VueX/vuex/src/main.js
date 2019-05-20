import Vue from 'vue';
import App from './App.vue';
//只要指引到store目錄，vue就會自 動尋找index.js並且將index.js的內容 設定為store 
import store from './store';


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

