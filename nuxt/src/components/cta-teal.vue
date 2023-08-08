<template>
  <div class="rxsection-y-space cta-teal bg-primary dark:bg-themedark-80 contentWhite"
  :class="[
  data.VueReferenceCode == 'CTA_TealBG_php'
    ? 'dark:bg-themedark-70'
    : '',
    data.VueReferenceCode == 'CTA_TealBG_Aws'
    ? 'dark:bg-themedark-70'
    : '',]">
    <div class="container">
      <div class="row items-center">
        <div class="px-4 sxl:w-8/12 flex flex-wrp mx-auto">
          <!--<div v-if="!data.LongText" class="h3 sxl:border-l-4 font-normal border-solid border-white dark:border-themedark-65 pb-0 sxl:text-left text-center leading-8 md:px-4 sxl:pl-6">{{ data.Title }}</div>-->
         <div v-html="title" class="h3 sxl:border-l-4 font-normal border-solid border-white dark:border-themedark-65 pb-0 sxl:text-left text-center leading-8 md:px-4 sxl:pl-6">
          </div>
          <!-- <div
            class="h3 sxl:border-l-4 font-normal border-solid border-white dark:border-themedark-65 pb-0 sxl:text-left text-center leading-8 md:px-4 sxl:pl-6 contentWhite"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            
          ></div> -->
        </div>
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_white flex justify-center sxl:justify-end sxl:pr-4 sxl:w-4/12 w-full text-center sxl:mt-0 mt-5 "
        ></div>
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
      titleStyle : "h3 pb-0 font-normal",
    }
  }
};
</script>
