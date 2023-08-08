<template>
  <div class="rxsection-y-space essence-uiux bg-opacitybg-25 dark:bg-themedark-70">
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center sxl:w-10/12 smd:w-11/12 w-full mx-auto px-4"
      ></div>
      <img
        class="mt-5 mb-8 smd:mt-10 smd:mb-12 sxl:mt-16 sxl:mb-20 mx-auto"
        v-rxlazy="data.Image"
        :width="data.Image.width"
        :height="data.Image.height"
        :alt="data.Image.alternativeText"
      />
      <div class="row">
        <div
          class="smd:w-1/4 sm:w-1/2 w-full px-4"
          v-for="item in data.TitleContentList"
        >
          <div
            class="
              inner-box
              bg-themelight-0
              dark:bg-themedark-0
              border border-dashed border-primary dark:border-themedark-65
              xl:p-6
              h-full
              flex
              items-center
              justify-center
              text-center
            "
          >
            <p class="font-semibold p-0">{{ item.Title }}</p>
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
      titleStyle : "h2 text-center",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .essence-uiux {
    .row {
      > div {
        &:nth-child(n + 5),
        &:nth-child(4),
        &:nth-child(3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen smd {
          &:nth-child(4),
          &:nth-child(3) {
            margin-top: 0;
          }
        }
      }
    }
    .inner-box {
      padding: 0.9375rem 0.625rem;
      @screen sm {
        padding: 1.25rem 0.9375rem;
      }
      @screen sxl {
        padding: 0.9375rem 0.625rem;
      }
    }
  }
}
</style>