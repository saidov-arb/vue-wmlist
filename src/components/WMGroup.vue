<template>
  <div id="wmgroup">
    <h3>Group {{ groupchar }}</h3>
    <div v-for="member in members">
      <hr />
      <p>{{ member.date }} - {{ member.time }}</p>
      <p>
        <img :src="getFlag(member.teams[0].team1)" />
        {{ member.teams[0].team1 }} : {{ member.teams[2].goals_team1 }}
      </p>
      <p>
        <img :src="getFlag(member.teams[1].team2)" />
        {{ member.teams[1].team2 }} : {{ member.teams[3].goals_team2 }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  props: {
    groupchar: {
      type: String,
      required: true,
    },
    members: {
      type: Array,
      required: true,
    },
    getFlag: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped>
#wmgroup {
  width: 50%;
}
</style>
