<template>
  <div class="container">
    <Nav/>
    <Gallery/>
    <SelectedNews/>    
     <!-- 用 @newsSelect接收來來自 child的event, 並且呼叫 onNewsSelect函數 -->
    <Section/>
    <Footer/>
  </div>
</template>

<script>
//• 利利⽤用mapActions函數可以取得宣告在vuex store 裡⾯面的actions函數
import{mapActions} from 'vuex';
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import SelectedNews from "./components/SelectedNews";
import Section from "./components/Section";
import Footer from "./components/Footer";


export default {
  name: "App",
  components: {
    Nav,
    Gallery,
    SelectedNews,
    Section,
    Footer
  },
  //• child元件需要的資料資料不再經由App.vue利利⽤用 props傳送，⽽而是直接從vuex store取得
   methods:mapActions(['init']),
    created() {
      this.init();
  }
  
  
 
  
  
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
@import "./styles/modules/_selectedNews.css";
</style>

