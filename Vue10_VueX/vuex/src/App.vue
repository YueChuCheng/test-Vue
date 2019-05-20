<template>
  <div class="container">
    <Nav/>
    <Gallery :totalNews="totalNews" />
    <SelectedNews
      :selectedNews="selected.news"
    />    
     <!-- 用 @newsSelect接收來來自 child的event, 並且呼叫 onNewsSelect函數 -->
    <Section
      :socialNews="news.socialNews"
      :entertainmentNews="news.entertainmentNews"
      :sportNews="news.sportNews"
      :taiwanNews="news.taiwanNews"
      @newsSelect="onNewsSelect"
    />
    <Footer/>
  </div>
</template>

<script>
import gNews from "./js/gNews.js";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import SelectedNews from "./components/SelectedNews";
import Section from "./components/Section";
import Footer from "./components/Footer";


export default {
  name: "App",
  data() {
    return {
      //news是一個1x4的陣列，用來來儲存四個最近被點擊的新聞 
      news:{
       socialNews: [],
        entertainmentNews: [],
        sportNews: [],
        taiwanNews: [],
      },
      //用來儲存 點擊的新聞內容 
      selected:{
        news:[],
        id:0
      }
    };
  },
  computed: {
    totalNews() {
      return [
           ...this.news.socialNews,
          ...this.news.entertainmentNews,
          ...this.news.sportNews,
          ...this.news.taiwanNews
        ];
    }
    },
   
  components: {
    Nav,
    Gallery,
    SelectedNews,
    Section,
    Footer
  },
   methods:{
    onNewsSelect(news){
        this.selected.id = this.selected.id + 1;
      if (this.selected.id == 4) this.selected.id = 0;
      //必須將this.selected.news重新設定，使用到此變數的元件才會重新渲染
      //• 為了增加渲染效率，Vue(React/Angular)前端框架設定，當狀狀態變數被 重新設定時，使⽤用狀狀態變數的元件才會被重新渲染 
      //• 為了讓Vue重新渲染畫⾯面，我們必須把this.selected.news重新設定，而不 是只修改其中的⼀個陣列列元件
 
       this.selected.news = [...this.selected.news];
      this.selected.news[this.selected.id] = news;
    }
  },
  async created() {
   let socialResp = await gNews("/?q=social");
    this.news.socialNews = socialResp.data.articles;
    let entertainmentResp = await gNews("/?q=entertainment");
    this.news.entertainmentNews = entertainmentResp.data.articles;
    let sportResp = await gNews("/?q=sport");
    this.news.sportNews = sportResp.data.articles;
    let taiwanResp = await gNews("/?q=taiwan");
    this.news.taiwanNews = taiwanResp.data.articles;
    this.selected.news.push(this.news.socialNews[0]);
    this.selected.news.push(this.news.entertainmentNews[0]);
    this.selected.news.push(this.news.sportNews[0]);
    this.selected.news.push(this.news.taiwanNews[0]);
    
  }
  
  
 
  
  
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
@import "./styles/modules/_selectedNews.css";
</style>

