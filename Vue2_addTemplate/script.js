new Vue ({
    el:"#app",// 利利⽤用變數el (element)指定HTML內 id=#app的元件內的HTML為Vue Instance控制的範本
    data: {
        textInput: ''
    },
    computed: {
       textOutput:function(){
           //data只用來定義變數，在使用變數時，直接用變數的properties名稱 
           return `my input is ${this.textInput}`; //印出字串
       },
       htmlOutput:function(){
            return`
                <h1>
                    the input is ${this.textInput}
                </h1>
            `
       }
    },
    methods: {
        onInput:function(event){
            this.textInput=event.target.value; //將輸入值放入textInput
        }
    },
    //template自動產生新頁面 
    //• v-html可以設定有HTML標籤的輸出內容
    template:`    
    <div >
    <div class="view">
        <label for="text">Please Input:</label>
        <input v-on:input="onInput" type="text" id="text"><!--v-on:input="onInput" vue的及時印出資料-->
    </div>
    <!--• 利用兩兩個⼤大括號{{..}}就可以使⽤用Vue Instance裡的變數 
        • 在{{}}之中，可以是data變數，也可以是computed變數-->
    <p class="data">{{textOutput}}</p>
    <div v-html="htmlOutput"></div>
</div>`
});

