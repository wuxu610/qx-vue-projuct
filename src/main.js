import './assets/main.css'
import { createApp } from 'vue' //引入vue
import { createPinia } from 'pinia' //引入pinia
import 'element-plus/dist/index.css' //引入element-plus 样式
import App from './App.vue'
import axios from 'axios';
import router from './router' //引入router
import piniaPersist from 'pinia-plugin-persist' //引入 pinia-plugin-persist

const pinia = createPinia()
const app = createApp(App);

pinia.use(piniaPersist) //pinia 使用插件
app.use(router);
app.use(pinia);
app.mount('#app'); //挂在index.html


app.config.globalProperties.$axios = axios;

