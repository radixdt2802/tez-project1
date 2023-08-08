<template>
  <div
    class="
      rxsection-t-space
      center-img-2col
      bg-themelight-10
      dark:bg-themedark-10
      pb-12
      md:pb-0
    "
  >
    <div class="container relative">
      <div class="row card sxl:absolute relative w-full h-full top-0 left-4">
        <div
          class="
            sxl:w-3/12
            smd:w-4/12
            md:w-5/12
            w-full
            text-center
            pl-4
            p-4
            md:py-0
            border
            md:border-0
            border-solid border-themelight-50
          "
          v-for="(item,i) in data.TitleContentList"
        >
          <!-- <h3>{{ item.Title }}</h3> -->
          <div v-html="sTitles[i]"></div>
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
        </div>
      </div>
      <div class="row md:block hidden">
        <div class="md:w-8/12 mx-auto">
          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
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
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
    sTitleStyle: "h3"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .center-img-2col {
    .card {
      > div {
        &:last-child {
          @apply ml-auto mr-0 md:pl-0 pr-4 mt-8 md:mt-0;
        }
      }
    }
  }
}
</style>