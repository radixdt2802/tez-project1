<template>
  <div
    class="tcm-imageleft-translate overflow-hidden rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageBgLeftTeal' ? 'bg-opacitybg-25 dark:bg-themedark-70' : '',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div v-if="data.Image" class="sxl:w-2/4 px-4 w-full">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="hidden sxl:block imageTranslate mx-auto"
          />
        </div>
        <div class="w-full sxl:w-2/4 px-4 sxl:mt-0 mt-5">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div class="ctaOverall pt-3 flex" v-if="data.CTA">
            <div
              class="cta-arrow inline"
              v-html="$md.render(data.CTA ? data.CTA : '')"
            ></div>
            <img
              class="inline transition-all duration-300 ease-in-out ml-4"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg'"
              width="18"
              height="10"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .tcm-imageleft-translate {
    .imageTranslate {
      transform: translateY(8.75rem);
    }
    .cta-arrow{
      p{
        a{
          @apply underline;
          &:hover{
            @apply no-underline text-primary;
            transition: 0.3s all ease;
          }
        }
      }
    }
  }
}
</style>
