<template>
  <section class="selectedNews">
    <NewsCard 
      v-for="news in selectedNews"
      :key="news.title"
      :news="news"
    />
  </section>
</template>

<script>
import NewsCard from "./NewsCard";
import { mapGetters } from 'vuex';
export default {
  name: "SelectedNews",
  components: {
    NewsCard
  },
  computed: mapGetters([
      "selectedNews"
  ])
  //props: [
  //    "selectedNews"
  //]
};
</script>

<style lang="postcss" scoped>
@import "../styles/modules/_selectedNews.css";
</style>
