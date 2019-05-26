<template>
  <div>
    <div class="jumbotron jumbotron-bg text-white text-center">
      <h2 class="display-3">Google News</h2>
    </div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        <i class="fa fa-user"></i> Login
      </h2>
      <!-- login with email and password -->
      <form>
        <div class="form-group">
          <!-- v-modal自動顯示輸入，加入trim則會自動移除空白 -->
          <input
            v-model.trim="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
          >
          <input
            v-model.trim="password"
            type="password"
            password="password"
            class="form-control"
            placeholder="Password"
            required
          >    
        </div>
      </form>
       <!-- social login -->
       <div class="text-center mt-4">
         <button @click="loginWithGoogle" class="btn btn-bg btn-lg btn-block">Login with with Google</button>
       </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from "../router";
export default {
  name: "Login",
  data(){
    return {
      email:"",
      password:"",
      errors:[],
      loading:false,
      user:""
    };
  },
  methods:{
    async loginWithGoogle(){
      this.loading=true;
      this.errors=[];
      try{
        //• 利用ﬁrebase.auth().signInWithPopup()函數， 並且傳遞ﬁrebase.auth.GoogleAuthProvider() 物件就會導向Google的登入畫面
        //• 如果登入成功就會回覆response變數 
        let response=await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user=response.user;
        //• 登入成功後，利用Vue-Router提供的 router.push(“/“)即可直接導覽到Main.vue畫面
        router.push("/");
      }catch(error){
        this.errors.pudh(error.message);
        this.loading=false;
      }
    }
  }
};
</script>

<style lang='postcss' scoped>
@import "../styles/base/_variables.css";


* {
  border-radius: 0;
}

.jumbotron-bg {
  background-color: $color-primary;
}

.login-header {
  color: $color-primary-dark;
}

.btn-bg {
  background-color: $color-google;
  color: $color-white;
}
</style>