<template>
  <div
    class="
      rxsection-y-space
      bgscrollright2
      bg-fixed
      relative
      bg-left-bottom
      overflow-hidden
      bg-cover
      beforeDarkSecondary
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div
      class="
        secoandBgimg
        absolute
        bg-no-repeat
        h-full
        w-full
        bg-cover
        opacity-25
        lg:block
        hidden
      "
      v-bind:style="[
        data.HoverImage
          ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
          : '',
      ]"
    ></div>
    <div class="container">
      <div class="row">
        <div class="sxl:w-5/12 md:w-6/12 w-full px-4">
          <!-- <h2 class="relative">{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list list_sm relative"
          ></div>
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
  data(){
return {
titleStyle : "relative",
}
},
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .bgscrollright2 {
    &::before {
      content: "";
      @apply absolute top-0 left-0 h-full block w-full;
      @screen sxl {
        width: 63%;
      }
    }
    .secoandBgimg {
      background-position: bottom -49% left -7.5rem;
      background-size: 31.25rem;
    }
    .square_list {
      ul {
        @apply flex flex-wrap mt-8;
        li {
          @apply md:w-1/2 w-full mb-0;
          &:before {
            top: 0.875rem;
          }
        }
      }
    }
  }
}
</style>