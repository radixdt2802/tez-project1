<template>
  <div
    class="fsm-multiimage relative contentWhite beforeDark"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container section_head relative text-center z-10">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md mx-auto"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
    </div>
    <div
      class="leftimage"
      v-bind:style="[
        data.HoverIcon
          ? { backgroundImage: 'url(' + data.HoverIcon.url + ')' }
          : '',
      ]"
    ></div>
    <div
      class="rightimage"
      v-bind:style="[
        data.Icon ? { backgroundImage: 'url(' + data.Icon.url + ')' } : '',
      ]"
    ></div>
  </div>
</template>
  <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : "h2"
    }
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .fsm-multiimage {
    background: no-repeat #2b2b2b scroll 0 100%;
    @apply bg-fixed text-white py-12;
    backface-visibility: hidden;
    z-index: 2;
    @screen xsm {
      padding-bottom: 21vw;
    }
    @screen smd {
      padding-top: 12vw;
      padding-bottom: 24vw;
    }
    .section_head {
      p {
        max-width: 65vw;
        margin: 0 auto;
      }
    }
    .leftimage {
      @apply hidden;
      @screen xsm {
        @apply block absolute top-0 left-0 z-0;
        width: 29%;
        max-width: 40.1875rem;
        height: 100%;
        background-size: 90%;
        background-repeat: no-repeat;
        background-position: bottom 1.5625rem left -8vw;
      }

      @screen smd {
        background-position: bottom 2.8125rem left -8vw;
      }
      @screen sxl {
        background-position: bottom 3.125rem left -8vw;
      }
      @screen xxxl {
        background-position: bottom 3.125rem left -10.625rem;
      }
    }
    .rightimage {
      @apply hidden;
      @screen xsm {
        @apply absolute top-0 right-0 z-0 h-full block;
        width: 16%;
        width: 14.5%;
        background-repeat: no-repeat;
        max-width: 22.4375rem;
        background-position: bottom 2.8125rem right -1.25rem;
        background-size: 100% auto;
      }
      @screen smd {
        width: 15.5%;
      }
      @screen xl {
        width: 16%;
      }
      @screen xxxl {
        width: 17%;
      }
    }
    &:after {
      @apply hidden;
      @screen xsm {
        @apply absolute block bottom-0 left-0 w-full h-full z-0 bg-no-repeat bg-left-bottom;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/cloud_based_shape_d0d87ac00b.png");
        background-size: 100% auto;
        content: "";
      }
    }
  }
}
</style>