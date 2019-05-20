<template>
    <div>
        <!-- • 使⽤用v-on directive可以設定event  -->
        <input @input="onInput" />
        <!-- 簡化寫法  -->
        <!-- <input v-on:input="onInput" />  -->
        <!-- • 設定當v-on:input事件發⽣生時，就呼 叫onInput method將輸入資料顯⽰示在 console.log -->
        <br>
        <p>{{inputText}}</p>
    </div>
</template>

<script>
export default {
    name:'InputBar',
    data(){   //為一函數
        return {
            inputText:null
        }
    },
    methods:{
        onInput: function(event){
           this.inputText=event.target.value;
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>


