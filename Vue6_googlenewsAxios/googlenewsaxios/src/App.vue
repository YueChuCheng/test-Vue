<template>
  <div class="container">
    <Nav/>
    <!-- • 在Vue之中，利利⽤用props可以由⽗父元件將資 料傳遞給⼦子元件  -->
    <Gallery
      v-bind:socialNews="socialNews"
      v-bind:entertainmentNews="entertainmentNews"
      v-bind:sportNews="sportNews"
      v-bind:taiwanNews="taiwanNews"
    />
    <Section
      v-bind:socialNews="socialNews"
      v-bind:entertainmentNews="entertainmentNews"
      v-bind:sportNews="sportNews"
      v-bind:taiwanNews="taiwanNews"
    />
    <Footer/>
  </div>
</template>

<script>
import "babel-polyfill";
import gNews from "./js/gNews";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      socialNews: [],
      entertainmentNews: [],
      sportNews: [],
      taiwanNews: []
    };
  },
  components: {
    Nav,
    Gallery,
    Section,
    Footer
  },
  //• created是Vue的系統函數，當元件要被 產⽣生時，created函數就會被呼叫
  //• 將created設定為async函數，在函數裡⾯面 就可以⽤用await呼叫axios
  async created() {
    let socialResp = await gNews("/?q=social");
    this.socialNews = socialResp.data.articles;
    let entertainmentResp = await gNews("/?q=entertainment");
    this.entertainmentNews = entertainmentResp.data.articles;
    let sportResp = await gNews("/?q=sport");
    this.sportNews = sportResp.data.articles;
    let taiwanResp = await gNews("/?q=taiwan");
    this.taiwanNews = taiwanResp.data.articles;
  }
};
</script>

<style lang="postcss">
@import "./styles/base/_variables.css";
@import "./styles/base/_global.css";
</style>

