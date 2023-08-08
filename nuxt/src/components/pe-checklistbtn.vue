<template>
  <div
    class="
      rxsection-y-space
      pe-checklistbtn
      bg-no-repeat bg-bottom bg-cover
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <h2 class="text-center relative">{{ data.Title }}</h2>
      <div class="list_md" v-rxhtml="data.LongText" v-if="data.LongText"></div>
      <div
        class="btn text-center mt-10 relative"
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
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
@layer components {
  .dark {
    .pe-checklistbtn {
      &::before {
        content: "";
        @apply absolute top-0 left-0 right-0 bottom-0 bg-opacitybg-80;
      }
    }
  }
  .pe-checklistbtn {
    li {
      @apply pl-8 inline-block;
      margin: 0.9375rem 0;
      position: relative;
      &::before {
        content: "";
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/check_7a1d409898.svg");
        @apply bg-no-repeat absolute left-0;
        width: 1.625rem;
        height: 1.625rem;
        top: 0.375rem;
        background-size: 1rem;
        @screen sm {
          background-size: 1.25rem;
        }
        @screen md {
          background-size: 1.625rem;
        }
      }
    }
  }
}
</style>
  