<!--• v-for=“news in socialNews”設定4次迴圈 
• 利利⽤用v-for設定的迴圈額外要⽤用v-bind_key設 定唯⼀一的雖號以管理理迴圈次數 
• news in socialNews的意思是由socialNews迴 圈逐⼀一取出個別的新聞儲存在news -->
<template>
    <section class="section">
    <div class="news">
      <h3 class="news__features">SocialNews</h3>
      <ul id="socialNews" class="list-group news__list">
        <li v-for="news in socialNews" v-bind:key="news.url"  class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">EntertainmentNews</h3>
      <ul id="entertainmentNews" class="list-group news__list">
        <li v-for="news in entertainmentNews" v-bind:key="news.url"  class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">SportNews</h3>
      <ul id="sportNews" class="list-group news__list">
        <li v-for="news in sportNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <h3 class="news__features">TaiwanNews</h3>
      <ul id="taiwanNews" class="list-group news__list">
        <li v-for="news in taiwanNews" v-bind:key="news.url" class="list-group-item news__item">
          <a class="news__link" :href="news.url">
            <p class="news__title">{{news.title}}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    name:"Section",
    //• 在child元件利利⽤用props參參數，即可宣告所有傳入的props 
    props:["socialNews","entertainmentNews","sportNews","taiwanNews"]
}
</script>
<style lang="postcss" scoped>
    @import "../styles/base/_variables.css";
    @import "../styles/base/_global.css";
    @import "../styles/modules/_section.css";
</style>


