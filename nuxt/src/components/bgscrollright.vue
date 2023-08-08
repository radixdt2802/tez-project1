<template>
  <div class="rxsection-y-space bg-fixed bg-left-bottom relative bg-no-repeat bg-cover"
  :class="[data.VueReferenceCode == 'AD_BgScrollRight_WhiteBG'
        ? 'bgscrollrightWhiteBg'
        : 'bgscrollright',]"
  v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '']">
      <div class="container">
        <div class="row">
            <div class="sxl:w-8/12 w-full px-4">
              <!-- <h2 class="relative">{{data.Title}}</h2> -->
              <div v-html="title"></div>
              <div v-if="data.LongText" v-rxhtml="data.LongText" class="square_list list_sm para_md relative"></div>
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
      titleStyle : "h2 relative",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .bgscrollright {
    position: relative;
    &::before {
      content: "";
      @apply absolute top-0 left-0 h-full block dark:bg-opacitybg-30 bg-opacitybg-75 w-full;
      @screen sxl {
        width: 70%;
      }
    }
    .square_list {
      ul {
        @apply flex flex-wrap mt-8;
        li {
          @apply md:w-1/2 w-full mb-0;
        }
      }
    }
  }
  .bgscrollrightWhiteBg {
    position: relative;
    &::before {
      content: "";
      @apply absolute top-0 left-0 h-full block dark:bg-opacitybg-90 bg-opacitybg-65 w-full;
      @screen sxl {
        width: 70%;
      }
    }
    .square_list {
      ul {
        @apply flex flex-wrap mt-8;
        li {
          @apply md:w-1/2 w-full mb-0;
        }
      }
    }
  }
}
</style>