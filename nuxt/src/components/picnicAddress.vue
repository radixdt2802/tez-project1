<template>
  <div class="text-center picnicaddress rxsection-y-space">
    <div v-rxhtml="data.LongText"></div>
  </div>
</template>

<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .picnicaddress {
    background-color: #ffd664;
  }
}
</style>