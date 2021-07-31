<template>
  <div id="app">
    <!-- <TodoApp></TodoApp> -->
   <Nav/>
    <router-view>
    </router-view>
    <Footer/>
  
  </div>
</template>

<script>
//import TodoApp from './components/TodoApp.vue'
import Nav from './components/Nav.vue'
 import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
    //TodoApp,
    //Add
  }
}
</script>

