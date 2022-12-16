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
        <input type="text" v-model="groupfilter" />
        <ul>
          <div v-for="item in data.groups">
            <li v-if="item.group === groupfilter">
              <WMGroup
                :groupchar="item.group"
                :members="item.members"
                :getFlag="getFlag"
              />
            </li>
          </div>
          <!--li v-for="item in data.groups">
            < {{ item.group }} >
            <div v-if="item.group">
              <WMGroup
                :groupchar="item.group"
                :members="item.members"
                :getFlag="getFlag"
              />
            </div>
          </li-->
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

    let groupfilter = ref('A');

    function getFlag(countryname) {
      let countryflag;
      countryname = countryname.charAt(0).toLowerCase() + countryname.slice(1);

      data.value.flags.forEach((flag) => {
        if (flag.country == countryname) {
          countryflag = flag.link;
        }
      });

      return countryflag;
    }

    return {
      data,
      error,
      loading,
      getFlag,
      groupfilter,
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
