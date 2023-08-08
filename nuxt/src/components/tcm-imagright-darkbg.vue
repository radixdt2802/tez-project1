<template>
  <div
    class="
      service-bgsec
      rxsection-y-space
      contentWhite
      bg-secondary
      dark:bg-themedark-10
      text-center
      smd:text-left
    "
    id="scroll"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div>
          <div class="pr-0 sxl:pr-8">
            <!-- <h2>{{ data.Title }}</h2> -->
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
        <div v-if="data.Image">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mt-6 md:mt-0 w-full max-w-md mx-auto smd:max-w-full"
          />
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
  .service-bgsec {
    .serviceExpertise {
      > div:not(:first-child) {
        @apply w-full px-4 smd:w-2/4 transform transition duration-300 mt-8 smd:mt-0;
      }

      > div {
        > div {
          @apply mx-auto;
        }
      }
      > div:not(:last-child) {
        @apply w-full smd:w-2/4 px-4;
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
    .methodContent {
      p {
        @apply text-white;
      }
    }
  }
}
</style>
