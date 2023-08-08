<template>
  <div
    class="
      leftlist-rightimg
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-40
    "
  >
    <div class="container">
      <div class="row items-center">
        <div class="left-con">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="square_list list_md para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="right-img">
          <img
            class="mx-auto"
            v-rxlazy="data.Image"
            alt="Development Company"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
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
  .leftlist-rightimg {
    .left-con {
      @apply md:w-7/12 w-full px-4;
      li {
        @apply mb-0 pt-1;
        &::before {
          @apply border-primary;
          top: 0.8125rem;
          @screen sm {
            top: 1rem;
          }
        }
      }
    }
    .right-img {
      @apply px-4 md:w-5/12 w-full md:block hidden;
    }
  }
}
</style>