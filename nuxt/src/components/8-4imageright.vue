<template>
  <div
    class="eight-four-right rxsection-y-space relative"
    :class="{
      'dark:bg-themedark-40 bg-themelight-10':
        data.VueReferenceCode == 'TCM_GreyBgImageRight',
    }"
  >
    <div
      class="
        bgimg-right
        lg:block
        hidden
        absolute
        w-4/12
        h-full
        right-0
        top-0
        bg-no-repeat
        bg-cover
      "
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <div class="container">
      <div
        class="
          fifty-content
          z-10
          relative
          sxl:dark:text-themelight-0
          dark:text-themedark-10
          lg:w-8/12
        "
      >
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="square_list list_md para_md noBs primary_list"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
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
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer components {
  .eight-four-right {
    &.beforeDark {
      &:before {
        @apply bg-opacitybg-30;
      }
    }
    .bgimg-right {
      background-position: right center;
    }
    .fifty-content {
      ul {
        @apply sxl:block md:flex flex-wrap block;
        .list_black {
          li {
            @apply pt-1 w-full;
            &::before {
              @apply border-themedark-0;
            }
          }
        }
      }
    }
  }
}
</style>