<template>
  <div
    class="bg-themelight-10 dark:bg-themedark-10 rxsection-y-space tcl-csgray"
  >
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <p class="para_md">{{ data.ShortText }}</p>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="circle_list list_sm"
      ></div>
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
  .tcl-csgray {
    ul {
      @apply flex flex-wrap md:my-6 my-2;
      li {
        @apply sxl:w-3/12 md:w-1/2 w-full;
      }
    }
  }
}
</style>