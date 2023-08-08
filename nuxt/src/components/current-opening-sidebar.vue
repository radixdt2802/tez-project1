<template>
  <div>
    <ul class="square_list para_sm">
      <li class="break-words" v-for="item in data.dynamicResult" :key="item.NavURL">
        <tez-link :to="item.NavURL" :title="item.JobTitle">{{
          item.JobTitle
        }}</tez-link>
      </li>
    </ul>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  props: {
    data: Object,
  },
  components: {},
};
</script>
<style lang="scss"></style>
