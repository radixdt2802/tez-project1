<template>
  <div
    class="
      bg-title-two-list
      rxsection-y-space
      bg-cover bg-no-repeat
      beforeDark
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.VueReferenceCode == 'TCM_DarkBG_2ColList75'
        ? 'bg-secondary contentWhite'
        : '',
    ]"
  >
    <div class="container relative">
      <!-- <h2 v-if="!data.CTA" class="text-center mx-auto">{{ data.Title }}</h2>
      <h2
        class="text-center mx-auto"
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
      ></h2> -->
       <div v-html="title"></div>
      <div class="row justify-center items-center">
        <div class="sxl:w-9/12 w-full mx-auto px-4">
          <div
            class="circle_list list_md noBs"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-center mx-auto",
      sTitleStyle : "",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .bg-title-two-list {
    ul {
      @apply flex flex-wrap;
      li {
        @apply md:w-1/2 w-full sxl:mb-3 md:mb-2 mb-1;
      }
    }
  }
}
</style>