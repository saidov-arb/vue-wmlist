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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
