<template>
  <div
    class="section-heads rxsection-y-space productPoint"
    :class="[
      data.VueReferenceCode == 'TCM_Insights_White'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : 'bg-themelight-10 dark:bg-themedark-10',
    ]"
  >
    <div class="container">
      <div class="md:w-4/5 w-full mx-auto text-center" v-if="data.Title">
        <h2>{{ data.Title }}</h2>
      </div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="colFourList text-center"
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
  .productPoint {
    .colFourList {
      h6 {
        @apply text-3xl md:text-4xl smd:text-5xl sxl:text-6xl leading-normal text-primary pb-0 font-bold p-4 mx-0 smd:my-5 smd:mx-5 smd:p-5;
        line-height: initial;
        em {
          @apply text-black dark:text-white font-normal not-italic text-lg leading-6 block mt-0 pt-3 sxl:mt-5 sxl:pt-5 border-t border-primary dark:border-themedark-65;
          @screen sxl {
            font-size: 1.375rem;
          }
        }
      }
    }
  }
}
</style>