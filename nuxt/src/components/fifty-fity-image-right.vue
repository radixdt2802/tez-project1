<template>
  <div
    class="relative fifty-fifty-right rxsection-y-space"
    :class="[ data.VueReferenceCode == 'TCM_BgImageRight' ? 'dark:bg-themedark-40 bg-themelight-10' : '',
      data.VueReferenceCode == 'TCM_BgImageRightBGWhite' ? 'dark:bg-themedark-0 bg-themelight-0' : '',
      data.VueReferenceCode == 'TCM_ImageRightLightTeal' ? 'dark:bg-themedark-40 bg-opacitybg-25': '',
      data.VueReferenceCode == 'TCM_ImageRightDark' ? 'bg-secondary contentWhite beforeDark dark:bg-themedark-40' : '',
      data.VueReferenceCode == 'TCM_ImageRightTeal' ? 'bg-themelight-20 dark:bg-themedark-70' : '']"
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
        <div
          class="square_list para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          :class="[ 
            data.VueReferenceCode == 'TCM_ImageRightDark'
              ? 'primary_list list_md noBs'
              : '',
            data.VueReferenceCode == 'TCM_BgImageRightBGWhite'
              ? 'primary_list list_md noBs'
              : '',
            data.VueReferenceCode == 'TCM_ImageRightLightTeal'
              ? 'list_black list_md noBs'
              : '',
            data.VueReferenceCode == 'TCM_ImageRightTeal'
              ? 'list_black list_md noBs'
              : '',
            data.VueReferenceCode == 'TCM_BgImageRight'
              ? 'primary_list list_md noBs'
              : '',
          ]"
        ></div>
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
  .fifty-fifty-right {
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