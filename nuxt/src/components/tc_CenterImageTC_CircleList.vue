<template>
  <div class="mt-12 container flex tc-centerImageTC_CircleList">
    <div class="w-1/4"></div>
    <div class="w-3/4 px-16 my-5 bg-themelight-0 dark:bg-themedark-0">
      <h2 v-if="data.Title">{{ data.Title }}</h2>
      <div class="para_sm" v-if="data.ShortText">{{ data.ShortText }}</div>
      <div class="">
        <img
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
          :alt="data.Image.alternativeText"
        />
      </div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="para_sm list4Col  list_sm circle_list"
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
  .tc-centerImageTC_CircleList {
    .list4Col {
      ul {
        @apply flex flex-wrap sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5;
        li {
          @apply sxl:w-1/4 md:w-2/4 w-full pb-0;
          padding-top: 0.625rem;
          padding-left: 1.875rem;
          padding-right: 0.5rem;
          &:before {
            margin-top: 0.25rem;
            @apply border-4 w-4 h-4 sm:w-5 sm:h-5;
            margin-right: 0.938rem;
          }
          @screen sm {
            @apply pl-10;
            &:before {
              border-width: 0.313rem;
              margin-top: 0.375rem;
            }
          }
        }
      }
    }
  }
}
</style>