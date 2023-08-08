<template>
  <div
    class="method-desc rxsection-y-space bg-themelight-0 dark:bg-themedark-10 text-center smd:text-left"
  >
    <div class="container">
      <div
        class="serviceExpertise row"
        :class="{'items-center':
        data.VueReferenceCode == 'ImageLeft_GreyBG'}"
      >
        <div v-if="data.Image">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="w-full max-w-lg md:max-w-2xl mx-auto smd:mx-0"
          />
        </div>
        <div>
          <div class="pr-0 sxl:pr-8">
            <div v-html="title"></div>
            <div
              v-if="data.LongText"
              v-rxhtml="data.LongText"
              class="methodContent"
            ></div>
            <div
              v-html="$md.render(data.CTA ? data.CTA : '')"
              v-if="data.CTA"
              class="btn"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from "../mixins/title.mixin";

export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2 text-left",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .method-desc {
    .serviceExpertise {
      > div:not(:first-child) {
        @apply w-full px-4 smd:w-1/2 sxl:w-2/5 transform transition duration-300;
      }

      > div {
        > div {
          @apply mx-auto;
        }
      }
      > div:not(:last-child) {
        @apply w-full smd:w-1/2 sxl:w-3/5 px-4 mb-10 md:mb-0;
      }
      &:nth-child(even) {
        > div:not(:last-child) {
          @apply lg:order-1;
        }
        > div:not(:first-child) {
          > div {
            @apply mx-auto;
          }
        }
      }
      .btn {
        p {
          @apply p-0;
        }
      }
    }
  }
}
</style>
