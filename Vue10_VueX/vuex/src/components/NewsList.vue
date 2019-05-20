<template>
    <div class="news">
        <h3 class="news__features">{{newsTitle}}</h3>
        <ul class="list-group news__list">
            <NewsListItem 
                v-for="news in newsType"
                :key="news.url"
                :news="news"
                @newsSelect="onNewsSelect"
            />
            <!-- 用 @newsSelect接收來來自 child的event, 並且呼叫 onNewsSelect函數 -->
 
        </ul>
    </div>
</template>

<script>
import NewsListItem from './NewsListItem';

export default {
    name: 'NewsList',
    components: {
        NewsListItem
    },
    props: ['newsType','newsTitle'],
    methods:{
        onNewsSelect(news){
            this.$emit('newsSelect',news);
        }
    }
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
