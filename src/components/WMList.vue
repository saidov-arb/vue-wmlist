<template>
  <div>
    <div v-if="error">
      <h2>{{ error }}</h2>
    </div>
    <div v-else>
      <div v-if="loading">
        <h2>Lodaing Data...</h2>
      </div>
      <div v-else>
        <h1>WM</h1>
        <h2>Countries</h2>
        <ul>
          <li v-if="data" v-for="item in data.flags">
            <img :src="item.link" />
            {{ item.country }}
          </li>
        </ul>
        <h2>Groups</h2>
        <ul>
          <li v-if="data" v-for="item in data.groups">
            {{ item.group }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useFetch } from '../composable/UseFetch.js';
import { ref, reactive, toRefs } from 'vue';

export default {
  setup() {
    const { data, error, loading } = useFetch(
      'https://raw.githubusercontent.com/htlWels/WM/main/spielplan.json',
      {}
    );

    return {
      data,
      error,
      loading,
    };
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
img {
  width: 30px;
  height: 20px;
}
</style>
