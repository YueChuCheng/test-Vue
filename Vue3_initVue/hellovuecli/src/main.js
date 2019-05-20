//• main.js會結合vue.js以及內建webpack的設 定打包所有的Xxx.vue 
//• .vue檔案屬於類別宣告，所以檔案名稱都要 ⼤大寫開頭
//• 與利利⽤用Vue Instance 直接宣告的專案不同，利利⽤用vue-cli建立的專案為 模組化，實際對與HTML的元件配置是設定在main.js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//• 在此，⼀一般不使⽤用el宣告元件連結，⽽而是使⽤用$mount的⽅方式宣告 
//• 此外，可以將createElement函數簡化為h
new Vue({
  render: h => h(App),
}).$mount('#app')
