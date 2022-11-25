<template>
  <div>
    <div v-if="error">
      <h2>{{ error }}</h2>
    </div>
    <div v-else>
      <div v-if="loading">
        <h2>Lodaing Data...</h2>
      </div>
      <div v-else-if="data">
        <h1>WM</h1>
        <!-- <h2>Countries</h2>
        <ul>
          <li v-for="item in data.flags">
            <img :src="item.link" />
            {{ item.country }}
          </li>
        </ul> -->
        <h2>Groups</h2>
        <ul>
          <li v-for="item in data.groups">
            <!-- {{ item.group }} -->
            <WMGroup :groupchar="item.group" :members="item.members" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useFetch } from '../composable/UseFetch.js';
import WMGroup from './WMGroup.vue';

export default {
  components: {
    WMGroup,
  },
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
  border-radius: 5px;
}
</style>
