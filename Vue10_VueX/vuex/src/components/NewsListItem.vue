<template>
    <li class="list-group-item news__item">
       
            <!-- @click設定發⽣生點擊 事件時就呼叫onNewsSelect函數  -->
        <p @click="onNewsSelect(news)" class="news__title">{{news.title}}</p>
        
    </li>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'NewsListItem',
    props: ['news'],
    methods:mapActions(['onNewsSelect'])
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>