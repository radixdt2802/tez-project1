<template>
  <div class="hlphpcta-center rxsection-y-space bg-primary contentWhite">
    <div class="flex flex-wrap">
      <div class="w-full text-center">
        <h2 class="font-normal">{{ data.Title }}</h2>
        <div
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
          class="text-center mt-10"
        ></div>
      </div>
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
}
</style>