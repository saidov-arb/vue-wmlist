<template>
  <div id="app">
    <WMList />
  </div>
</template>

<script>
import WMList from './components/WMList.vue';

export default {
  name: 'App',
  components: {
    WMList,
  },
};
</script>

<style>
body {
  background-color: rgb(30, 40, 50);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //color: #2c3e50;
  color: white;
  margin-top: 60px;
}
</style>
