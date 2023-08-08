<template>
  <div class="termsPolicyMain">
    <div class="container">
      <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
    </div>
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
<style lang="scss">
@layer utilities {
  .termsPolicyMain {
    h2 {
      @apply pt-5 mt-4 sm:pt-8 sm:mt-6 border-t border-opacitybg-35;
    }
  }
}
</style>