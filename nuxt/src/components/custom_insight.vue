<template>
  <div
    class="relative custom-insight-section rxsection-y-space"
    :class="[data.VueReferenceCode == 'TCM_ImageRightDark_CustomInsightSection' ? 'bg-secondary contentWhite beforeDark dark:bg-themedark-40' : '',]"
  >
    <div
      class="hidden bgimg-right absolute w-1/2 h-full right-0 top-0 bg-no-repeat bg-center bg-cover smd:block"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <div class="container">
      <div
        class="
          fifty-content z-10 relative dark:text-themelight-0
          sxl:dark:text-themelight-0
          smd:w-1/2 smd:pr-8 lg:pr-12
        "
      >
        <!-- <h2>{{ data.Title }}</h2> -->
        <!-- <div v-html="title" :class="{'text-themelight-0' : data.VueReferenceCode == 'TCM_ImageRightDark',}"></div> -->
        <div v-html="title"></div>
        <p class="font-bold para_md">{{data.SubTitle}}</p>
        <div
          class="square_list list_md para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"></div>
        <div
                  class="btn btn_md text-center sm:text-left sm:mt-5 mt-2"
                  v-html="$md.render(data.CTA)"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      subTitleStyle : "",
      sTitleStyle : "",
      sSubTitleStyle : ""
    }
  }
};
</script>
<style lang="scss">
@layer components {
  .custom-insight-section {
    .bgimg-right {
      background-size: auto 100%;
      background-position : right;
    }

    &.beforeDark {
      &:before {
        @apply bg-opacitybg-30;
      }
    }
    .fifty-content {
     
      ul {
        @apply sxl:block md:flex flex-wrap block;
        li {
          @apply w-full;
          p{
            @apply p-0;
          }
        }
      }
      .list_black {
        ul {
          li {
            @apply pt-1 w-full;
            &::before {
              @apply border-themedark-0 dark:border-themelight-0;
            }
          }
        }
      }
    }
  }
}
</style>