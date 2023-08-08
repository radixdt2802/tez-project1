<template>
  <div
    class="rxsection-y-space hiresoftdevbanner contentWhite h-screen"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <h1 class="text-center">{{ data.Title }}</h1>
      <div class="row items-center t-space-40">
        <div class="smd:w-1/2 w-full px-4">
          <div class="h3 font-medium">{{ data.ShortText }}</div>
          <div
            class="para_lg"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div
          class="smd:w-1/2 w-full px-4"
          v-for="item in data.TitleContentList"
        >
          <div
            class="list_lg text-center"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
      </div>
      <div
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
        class="btn mt-10 block text-center"
      ></div>
    </div>
  </div>
</template>
    <script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .hiresoftdevbanner {
    ul {
      @apply sm:p-8 p-6 border border-dashed border-themelight-0 inline-block relative;
      &::before {
        content: "";
        height: 0.1875rem;
        top: -0.0625rem;
        @apply absolute smd:top-0 w-full smd:h-full bg-themelight-0 left-0;

        @screen smd {
          left: -0.0625rem;
          width: 0.1875rem;
        }
      }
      &::after {
        content: "";
        top: -0.1875rem;
        @apply absolute smd:left-0 smd:top-0 smd:bottom-0 m-auto w-0 h-0 transform smd:rotate-0 rotate-90;
        border-top: 0.5625rem solid transparent;
        border-left: 0.5625rem solid #fff;
        border-bottom: 0.5625rem solid transparent;
      }
      li {
        padding-left: 1.875rem;
        @apply py-3 text-left relative;
        &::before {
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/circle_check_1a037ab2d8.svg");
          content: "";
          @apply absolute bg-no-repeat left-0 top-0 inline-block;
          margin-top: 1.125rem;
          @screen xxl {
            margin-top: 1.375rem;
          }
          width: 1.125rem;
          height: 1.125rem;
        }
      }
    }
  }
}
</style>
  