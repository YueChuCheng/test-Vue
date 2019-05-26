import Vue from 'vue';
import Vuex from 'vuex';
import googleNews from './modules/googleNews';

//利用Vue.use指令連結不同系統程式
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        
        googleNews
    }
})
