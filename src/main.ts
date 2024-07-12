import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//导入store
import store from './store'

import router from '@/router';

import ElementPlus from 'element-plus' 
import 'element-plus/dist/index.css'

// 创建vue实例
const app = createApp(App)

app.use(ElementPlus)

// 挂载pinia
app.use(store)
app.use(router);

// 挂载实例
app.mount('#app');
