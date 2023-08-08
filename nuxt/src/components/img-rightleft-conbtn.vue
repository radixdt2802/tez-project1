<template>
  <div
    class="
      img-rightleft-conbtn
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-70
    "
  >
    <div class="container">
      <div class="row items-center">
        <div class="smd:w-1/2 w-full px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div class="ctaOverall pt-3 flex" v-if="data.CTA">
            <div
              class="cta-arrow block underline hover:no-underline"
              v-html="$md.render(data.CTA ? data.CTA : '')"
            ></div>
            <img
              class="block transition-all duration-300 ease-in-out ml-4 hover:ml-2.5"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg'"
              width="18"
              height="10"
              alt="Contact Us"
            />
          </div>
        </div>
        <div v-if="data.Image" class="smd:w-1/2 w-full px-4">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto block mt-6 smd:mt-0 sxl:mr-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2"
		}
	},
};
</script>
 <style lang="scss">
@layer utilities {
  .cta-arrow {
    p {
      @apply inline;
      a {
        @apply text-primary no-underline;
      }
    }
  }
 
}
</style>

