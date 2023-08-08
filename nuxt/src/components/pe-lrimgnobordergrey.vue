<template>
  <div
    class="lrnobordergrey rxsection-y-space"
    :class="{
      'bg-themelight-10 dark:bg-themedark-65':
        data.VueReferenceCode == 'PE_LRImgNOBorderBGGrey',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'PE_LRImgNOBorderBGWhite',
    }"
  >
    <div class="container">
      <div class="lg:w-10/12 w-full mx-auto text-center">
        <h2 v-if="data.Title">{{ data.Title }}</h2>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="alternatemedialist t-space-60">
        <div
          class="row image-content-section items-center"
          v-for="item in data.TitleContentMediaList"
        >
          <div
            class="
              image-area
              hidden
              smd:block
              smd:w-1/2
              sxl:w-5/12
              xxl:w-1/3
              px-4
            "
          >
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
          <div
            class="
              content-area
              text-left
              w-full
              smd:w-1/2
              sxl:w-6/12
              xxl:w-4/6
              px-4
            "
          >
            <div class="detail">
              <h3 class="para_lg" v-if="item.Title">{{ item.Title }}</h3>
              <div v-if="item.ShortText" v-rxhtml="item.ShortText"></div>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
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
  .lrnobordergrey {
    .alternatemedialist {
      .image-content-section {
        padding: 0.9375rem;
        margin-top: 1.25rem;
        border: 0.0625rem solid #e2e2e2;
        @apply md:p-5;
        &:first-child {
          @apply mt-0;
        }
        @screen smd {
          margin-top: 3.75rem;
          @apply border-0 p-0;
          padding-bottom: 3.75rem;
          &:last-child {
            @apply pb-0;
          }
        }
        &:nth-child(even) {
          .image-area {
            order: 1;
          }
        }
      }
    }
  }
}
</style>