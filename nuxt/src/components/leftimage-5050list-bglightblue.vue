<template>
  <div
    class="
      rxsection-y-space
      leftimg-5050list-bgblue
      bg-themelight-20
      dark:bg-themedark-40
    "
  >
    <div class="container">
      <div class="row justify-center">
        <div
          class="list-main-heading text-center mx-auto mb-1 smd:mb-12 w-11/12"
        >
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.ShortText"
            class="para_md"
            v-html="$md.render(data.ShortText)"
          ></div>
        </div>
        <div class="left-con">
          <div
            class="square_list child-flex pt-0 list_sm"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="img-right">
          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
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
  .leftimg-5050list-bgblue {
    .left-con {
      @apply smd:w-6/12 w-full smd:order-1 px-4;
      li {
        @apply md:w-1/2 w-full mb-0;
      }
    }
    .img-right {
      @apply smd:order-none smd:w-6/12 w-full px-4;
      img {
        margin-top: 1.875rem;
        @apply mx-auto smd:ml-0 smd:mt-0 hidden smd:block;
      }
    }
    .child-flex {
      h3 {
      }
      ul {
        @apply flex flex-wrap pb-0 md:pb-2 pt-0 md:pt-4;
      }
    }
  }
}
</style>