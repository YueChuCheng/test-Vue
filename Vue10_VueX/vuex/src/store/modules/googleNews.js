import gNews from "../../js/gNews.js"


//state: 儲存元件的狀態變數 
const state={
    news:{
        socialNews:[],
        entertainmentNews:[],
        sportNews:[],
        taiwanNews:[]
    },
    selected:{
        news:[],
        id:0
    }
}

//getters: 計算元件的輸出變數 
//getters對應的是 computed 
//在VueX之中利利⽤用state 即可取得狀狀態變數
 
const getters={
    totalNews:state=>[
            ...state.news.socialNews,
            ...state.news.entertainmentNews,
            ...state.news.sportNews,
            ...state.news.taiwanNews
    ],
    news:state=>state.news,
    socialNews:state=>state.news.socialNews,
    entertainmentNews:state=>state.news.entertainmentNews,
    sportNews:state=>state.news.sportNews,
    taiwanNews:state=>state.news.taiwanNews,
    selected:state=>state.selected.news

}

//• 非同步運算不能寫在mutations， mutations只負責修改state • commit呼叫mutations時，
// actions: 變更更狀態變數的函數(可能 數個actions對應到相同的mutations)
const actions={
    onNewsSelect({ commit }, news) {
        commit('onNewsSelect', news);
    },
    async init({ commit }) {
        let socialResp = await gNews("/?q=social");
        let entertainmentResp = await gNews("/?q=entertainment");
        let sportResp = await gNews("/?q=sport");
        let taiwanResp = await gNews("/?q=taiwan");
        commit(
            'init', {
                social: socialResp.data.articles, 
                entertainment: entertainmentResp.data.articles,
                sport: sportResp.data.articles,
                taiwan: taiwanResp.data.articles
            }
        );
    }
}

//• mutations只針對state變數運算， 其餘的運算都放在actions 
//• mutations無法⾃自⼰己被執⾏行行，必 須由actions呼叫mutations 
//• actions不直接呼叫mutations, actions利利⽤用commit函數呼叫 mutations
//• actions呼叫mutations時，可以攜 帶參參數
 
//mutations(突變): 計算狀態變數的函數 
const mutations={
    onNewsSelected:(state,news)=>{
        state.selected.id=state.selected.id+1;
        if (state.selected.id == 4) state.selected.id = 0;
        //必須將this.selected.news重新設定，使用到此變數的元件才會重新渲染
        state.selected.news = [...state.selected.news];
        state.selected.news[state.selected.id] = news;
    },
    init:(state,resultNews)=>{
        state.news.socialNews = resultNews.social;
        state.news.entertainmentNews = resultNews.entertainment;
        state.news.sportNews = resultNews.sport;
        state.news.taiwanNews = resultNews.taiwan;
        state.selected.news.push(state.news.socialNews[0]);
        state.selected.news.push(state.news.entertainmentNews[0]);
        state.selected.news.push(state.news.sportNews[0]);
        state.selected.news.push(state.news.taiwanNews[0]);
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}