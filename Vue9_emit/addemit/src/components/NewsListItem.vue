<template>
    <li class="list-group-item news__item">
       
            <!-- @click設定發⽣生點擊 事件時就呼叫onNewsSelect函數  -->
        <p @click="onNewsSelect" class="news__title">{{news.title}}</p>
        
    </li>
</template>

<script>
export default {
    name: 'NewsListItem',
    props: ['news'],
    methods:{
        //利利⽤用this.$emit函數發出⼀一個叫做 newsSelect的⾃自訂事件，並且附帶 送出本則新聞的內容this.news 
        onNewsSelect(){
            this.$emit('newsSelect',this.news);
        }
    }
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>