<template>
  <div
    class="rxsection-y-space cta contentWhite bg-secondary dark:bg-themedark-70 beforeDark relative bg-no-repeat bg-cover"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="{
      'bg-secondary dark:bg-themedark-0':
        data.VueReferenceCode == 'CTA_BlackBG',
     
    }"
  >
    <div class="container ">
      <div class="flex flex-wrap items-center relative justify-center sxl:justify-start">
        <div
          :class="{
            '': data.VueReferenceCode == 'CTA_ImageBG',
            'border-primary dark:border-themedark-65 cta-blue-wrap sxl:border-l-4 border-solid':
              data.VueReferenceCode == 'CTA_DrakBG' || 'CTA_BlackBG',
          }"
        >
         <!-- {{ data.Title }} -->
          <div v-html="title"></div>
        </div>
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_md btn-4col flex justify-center sxl:justify-end"
          :class="[data.VueReferenceCode == 'CTA_DrakBG' ? 'btn_white_secondary':'btn_white']"
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
      titleStyle : "h3 font-normal pb-0",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .cta {
    .cta-blue-wrap{
       @apply font-normal pb-0 sxl:text-left text-center leading-8 sxl:w-8/12 md:px-4 smd:pl-6;
    h3 {
     
      font-size: 1.375rem;
      @screen md {
        @apply text-2xl leading-9;
      }
      @screen sxl {
        font-size: 1.625rem;
        line-height: 2.375rem;
      }
      @screen xl {
        font-size: 2rem;
        line-height: 2.75rem;
      }
    }
  }
    .btn-4col {
      @apply sxl:w-4/12 w-full text-center sxl:mt-0 mt-8;
    }
  }
}
</style>