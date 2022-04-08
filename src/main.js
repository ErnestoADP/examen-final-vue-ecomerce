import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNxIc_fxioNGgoScfvLPxMeCwr_yWaIA4",
  authDomain: "examenvuejs.firebaseapp.com",
  projectId: "examenvuejs",
  storageBucket: "examenvuejs.appspot.com",
  messagingSenderId: "148665377440",
  appId: "1:148665377440:web:76103101399de3dc31dfc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
