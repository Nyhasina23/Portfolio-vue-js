/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import LottieAnimation from "lottie-web-vue";
import 'boxicons'
const app = createApp(App)



app.use(router).use(LottieAnimation).mount('#app');
