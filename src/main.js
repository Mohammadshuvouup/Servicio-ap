import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRouter from "vue-router";
import Add from "./components/Add.vue";
import Todo from "./components/TodoApp.vue";
// import Nav from "./components/Nav"
// import Footer from "./components/Footer"
// import DefaultLayout from '@/layouts/DefaultLayout'
//import SecondLayout from '@/layouts/SecondLayout'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const router = new VueRouter({
  routes: [
    // {
    //   path: '/',
    //   component: DefaultLayout,
    //   children: [
    //     {
    //       path: '',
    //       name: 'Todos',
    //       component: Todo,
    //       children: [
    //         {
    //           path: ''
    //         }
    //       ],
    //     },
    //     {
    //       path: 'add',
    //       name: 'AddTodos',
    //       component: Add
    //     },
    //   ]
    // },
    {
      path: '/',
      component: Todo
     },
    {
      path: '/add',
      component: Add
    }
    // {
    //   path: '/nav',
    //   name: 'Navbar',
    //   component: Nav,
    //   children: [
    //     {
    //       path: 'footer',
    //       name: 'Footer',
    //       component: Footer
    //     }
    //   ]
    // },
  ],
  mode: 'history',
  base: process.env.BASE_URL,

});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
