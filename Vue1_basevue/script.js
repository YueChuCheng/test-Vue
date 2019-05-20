new Vue ({
    el:"#app",// 利利⽤用變數el (element)指定HTML內 id=#app的元件內的HTML為Vue Instance控制的範本
    data: {
        textInput: ''
    },
    computed: {
       textOutput:function(){
           //data只用來定義變數，在使用變數時，直接用變數的properties名稱 
           return `my input is ${this.textInput}`; //印出字串
       }
    },
    methods: {
        onInput:function(event){
            this.textInput=event.target.value; //將輸入值放入textInput
        }
    }
});

