<template>
  <div>
    <div class="jumbotron jumbotron-bg text-white text-center">
      <h2 class="display-4">Google News API</h2>
    </div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        Login
      </h2>
      <!-- login with email and password -->
      <form>
        <div>
          <!-- v-modal自動顯示輸入，加入trim則會自動移除空白 -->
          <v-text-field
            v-model.trim="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <v-text-field 
            v-model.trim="password"
            type="passward"
            password="password"
            placeholder="password"
            required
          />
        </div>
      </form>
       <!-- social login -->
       <!-- • Vuetify提供多種UI標籤，都是 Material Design的UI元件  -->
      <div v-if="loading" class="text-center mt-4">
        <v-progress-circular 
        :size="70"
        :width="7"
        color="#415893"
        indeterminate
        />

      </div>
     
       <div v-else class="text-center mt-4">
         <!-- • 當程式正在Google登入畫⾯面操作時，可以講 原本登入畫⾯面的<v-btn>按鈕⽤用spinner元件 取代，以便便讓使⽤用者知道正在進⾏行行登入動作  -->
         <v-btn @click="loginWithGoogle" large color="#415893" class="btn btn-bg btn-lg btn-block">Login with Google</v-btn>
       </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from "../router";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: ""
    };
  },
  methods: {
    async loginWithGoogle() {
      // loading set to true
      this.loading = true;
      // clear old errors
      this.errors = [];
      try {
        //• 利用ﬁrebase.auth().signInWithPopup()函數， 並且傳遞ﬁrebase.auth.GoogleAuthProvider() 物件就會導向Google的登入畫面
        //• 如果登入成功就會回覆response變數 
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user = response.user;
        //• 登入成功後，利用Vue-Router提供的 router.push(“/“)即可直接導覽到Main.vue畫面
        this.loading = false;
        router.push("/");
      }catch(error){
        this.errors.push(error.message);
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