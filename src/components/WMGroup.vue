<template>
  <div id="wmgroup">
    <h3>Group {{ groupchar }}</h3>
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
  },
  setup(props) {
    return {};
  },
};
</script>

<style scoped></style>
