<template>
  <div
    class="rxsection-y-space bg3collist contentWhite relative beforeBlackDark"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="list_md square_list noBs"
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
  .bg3collist {
    
      ul {
        @apply flex flex-wrap;
        li {
          @apply sxl:w-4/12 md:w-1/2 w-full pt-1;
          &:before {
            content: "";
            @apply border-themelight-0;
          }
        }
    }
  }
}
</style>