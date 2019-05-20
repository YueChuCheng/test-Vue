//檔安名稱必需是main.js，因為vue系 統預設會尋找在src⽬目錄之內的main.js做為開 始動作的檔案
//與利利⽤用Vue Instance 直接宣告的專案不同，利利⽤用vue-cli建立的專案為 模組化，實際對與HTML的元件配置是設定在main.js

import Vue from 'vue';
import App from './App.vue'

//• 在此，⼀一般不使⽤用el宣告元件連結，⽽而是使⽤用$mount的⽅方式宣告 
//• 此外，可以將createElement函數簡化為h
new Vue ({
    render:h =>h(App)
}).$mount('#app');

