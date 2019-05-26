<template>
  <div class='container-grid'>
    <Nav />
    <Gallery :totalNews = 'news16' />
    <SelectedNews :selectedNews = 'news16' />  
    <Footer />
  </div>
</template>

 <script>
 import {mapActions}from 'vuex';
 import {mapGetters} from 'vuex';

 import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import SelectedNews from "../components/SelectedNews";
import Footer from "../components/Footer";

 export default {
     name:"News16",
     components:{
         Nav,
         Gallery,
         SelectedNews,
         Footer
     },
     methods: mapActions(['initnews16']),
     computed: mapGetters(['news16']),
     props: ['id'],
     //• 可以利用watch監看任何的變數，一旦該變數發生 變化，就會行設定的函數
     //• 本範例在News16頁面利利⽤用watch監看收到的id參數 
     watch:{
       id(){
         this.initnews16(this.id);
       }
     },
     created() {
         this.initnews16(this.id);
     }
 };
 </script>
 

 <style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_selectedNews.css";
</style>
