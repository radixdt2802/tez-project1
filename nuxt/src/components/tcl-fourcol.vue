<template>
  <div
    class="rxsection-y-space tforColLeft "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
        data.Image ? 'beforeDark relative' : '',
        data.VueReferenceCode == 'TCL_fourcol_Whitebg_space' ?'dark:bg-themedark-0':'',
        data.VueReferenceCode == 'TCL_fourcol_Whitebg'
        ? 'pt-0 dark:bg-themedark-0':
        '',

        data.VueReferenceCode == 'TCL_fourcol_whitebg_sd'
        ? 'bg-themelight-0 dark:bg-themedark-0 pt-0':
        '',

        data.VueReferenceCode == 'TCL_fourcol_Greybg'
        ? 'bg-themelight-10 dark:bg-themedark-0'
        : '',
        
        data.VueReferenceCode == 'TCL_fourcol_Greybg_Wp'
        ? 'bg-themelight-10 dark:bg-themedark-40'
        : '',
        data.VueReferenceCode == 'TCL_fourcol_Nobottom_Space'
        ? 'bg-themelight-0 dark:bg-themedark-0 pb-0'
        : ''
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center sxl:w-10/12 smd:w-11/12 w-full mx-auto para_md"
      ></div>
      <div class="row">
        <div
          class="bgCard-row mt-8 sxl:w-1/4 sm:w-1/2 w-full px-4"
          v-if="data.TitleContentList"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCard w-full">
            <!-- <h3
              class="relative para_lg font-semibold text-xl md:pb-6 xl:text-2xl xl:leading-9"
              :class="{ 'black-border': data.Image }"
            >
              {{ item.Title }}
            </h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
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
      titleStyle : "h2 text-center",
      sTitleStyle: "h3  h3_sm relative"
    }
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .tforColLeft {
    .bgCard-row {
      .bgCard {
        h3, .h3 {
          line-height: 1.875rem;
          padding-bottom: 0.625rem;
          @screen smd {
            @apply leading-8;
            font-size: 1.375rem;
          }
          @screen xxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          &:after {
            @apply absolute bg-primary dark:bg-themedark-65 left-0 bottom-0;
            content: "";
            height: 0.188rem;
            width: 3.75rem;
          }
          &.black-border {
            &::after {
              @apply bg-themedark-0;
            }
          }
          p {
            @apply pt-0;
          }
        }
        p {
          padding: 0.625rem 0 0 0;
          @screen md {
            padding-top: 1.063rem;
          }
        }
      }
    }
  }
}
</style>