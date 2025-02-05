
import { createApp } from 'vue';
import {createBootstrap} from 'bootstrap-vue-next';

// Add the necessary CSS
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css';


const app = createApp(App)
app.use(createBootstrap()) // Important
app.mount('#app')
