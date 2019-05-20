import axios from "axios";
const apiKey = "321faa72901c4849bb47e8334170b75a";

export default axios.create({
    method:"get",
    baseURL:"https://newsapi.org/v2/everything",
    params:{
        pageSize: 4,
        page: 1
    },
    headers: {
        Authorization: apiKey
      }
});

