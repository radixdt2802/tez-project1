<template>
  <div
    class="
      rxsection-y-space
      bg-cover bg-center
      contentWhite
      bgimg-leftcon
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="sxl:w-7/12 w-full px-4 z-10">
          <h2>{{ data.Title }}</h2>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list noBs list_md para_md primary_list"
          ></div>
        </div>
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
  <style lang="scss" scoped>
@layer utilities {
  .bgimg-leftcon {
    &::before {
      content: "";
      @apply absolute w-full block left-0 top-0 h-full bg-secondary dark:bg-themedark-70;
      @screen sxl {
        width: 65%;
      }
    }
  }
}
</style>
  