<template>
  <div
    class="
      rxsection-y-space
      successtories-1-2
      bg-themelight-10
      dark:bg-themedark-10
    "
  >
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="row">
        <div
          class="sxl:w-1/2 w-full px-4 sm:mt-10 mt-8"
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
        >
          <div class="md:flex block md:text-left text-center">
            <!-- <a
              href="/success-stories/improved-customer-engagement-and-leads"
              title="Reasonable Timeframes Contributed to My Success Factor"
              class="inline-block"
            >
              <img
                class="pr-6 h-full"
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
              />
            </a> -->
            <div class="content flex-1 text-left">
              <h3 class="h3_sm p-0 leading-7 mt-4 smd:mt-0">
                {{ item.Title }}
              </h3>
              <div
                v-if="item.LongText"
                class="para_xsm"
                v-rxhtml="item.LongText"
              ></div>
              <div
                v-html="$md.render(item.CTA ? item.CTA : '')"
                v-if="item.CTA"
                class="btn btn_md md:text-left text-center"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="$md.render(data.CTA ? data.CTA : '')"
        v-if="data.CTA"
        class="btn md:mt-16 mt-10 text-center"
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
  .successtories-1-2 {
    .para_xsm {
      p {
        @apply text-base leading-6;
        color: #989898;
      }
    }
    .btn_md {
      p {
        a {
          @apply py-1;
        }
      }
    }
  }
}
</style>