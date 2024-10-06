<template>
  
  <div>
    <MyHome/>
    <router-view></router-view>
    <MyFooter/>
  </div>
</template>

<script>
import MyHome from './components/MyHome.vue';
import MyFooter from './components/MyFooter.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    MyHome,
    MyFooter,
  },
  setup() {
    const route = useRoute();
    
    const isHomePage = computed(() => {
      return route.path === '/';
    });

    return { isHomePage };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
