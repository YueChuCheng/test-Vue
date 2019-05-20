<template>
<!-- figure簡寫 -->


  <header class="gallery">
    <!-- • 若若參參數為變數，則參參數前⾯面必須 加上冒號：變數直接寫在雙引號 內  -->
        <figure v-for="index in 16" v-bind:key="index" :class="`gallery__item gallery__item--${index}`">
      <!-- • 單純的參參數字串串使⽤用雙引號  -->
      <!-- • 範本提供的directive，⼀一律律使⽤用雙 引號設定條件 -->
      <img
        :src="totalNews[index-1].urlToImage"
        :alt="`Gallery image ${index}`"
        class="gallery__img"
      >
    </figure>
    
  </header>
</template>

<script>
export default {
  name: "Gallery",
 //• 在child元件利利⽤用props參參數，即可宣告所有傳入的props 
    props:["totalNews"]


};


</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_gallery.css";
</style>
