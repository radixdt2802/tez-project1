<template >
    <!-- v-bind:style="[
      data.HoverImage
        ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
        : '',
    ]" -->
  <div
    class="dev_reason rxsection-y-space bg-no-repeat"
    :class="{
      'bg-themelight-0 dark:bg-themedark-0 pt-0':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_react',
        'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_html',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter',
      'bg-themelight-0 dark:bg-themedark-0 pt-0':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_Rd',
      'bg-secondary dark:bg-themedark-0 contentWhite':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_DarkBg',
      'bg-themelight-10 dark:bg-themedark-70 bgboxwhite':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_GreyBg',
      'bg-themelight-20  dark:bg-themedark-70':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_TealBg',
        'bg-themelight-20 dark:bg-themedark-70' :
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_TealBg_Partner' ,
        'bg-themelight-30 dark:bg-themedark-10':
        data.VueReferenceCode == 'TCMC_6ColTealBg', 
        'bg-secondary dark:bg-themedark-10 contentWhite':
        data.VueReferenceCode == 'TCMC_SecondaryBg', 
    }"
    v-bind:style="[
      data.HoverImage
        ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
        : '',
    ]"
  >
    <div class="container">
      <div class="text-center" :class="{'xxl:pb-12': data.VueReferenceCode == 'TCMWithTCL_ImageCenter',}">
        <!-- <h2>{{ data.Title }}</h2> -->
              <div v-html="title"></div>
        <div
          class="para_md lg:pb-8 pb-2"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div class="flex items-center arrow-left justify-center">
          <div v-if="data.ShortText" v-html="$md.render(data.ShortText)"></div>
          <img
            v-if="data.ShortText"
            class="inline transition-all duration-300 ease-in-out ml-4"
            v-rzlaxy="'https://d2ms8rpfqc4h24.cloudfront.net/teld_arrow_21ccc66ae4.svg'"
            width="18"
            height="10"
            alt="Contact Us"
          />
        </div>
      </div>
      <div class="multi_component relative">
        <div class="reason_content" :class="{'mt-6' : data.VueReferenceCode == 'TCMWithTCL_ImageCenter_TealBg_Partner'}">
          <div class="image_component comp_size absolute">
            <img
              v-if="data.Image"
              v-rxlazy="data.Image.url"
              :alt="data.Image.alternativeText"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
          </div>
          <div class="content_outer" v-for="(item,i) in data.TitleContentList">
            <div
              class="comp_size"
              :class="[
                data.VueReferenceCode == 'TCMWithTCL_ImageCenter_DarkBg'
                  ? 'bg-opacitybg-40 dark:bg-themedark-70'
                  : 'bg-themelight-10 dark:bg-themedark-70',
                  data.VueReferenceCode == 'TCMC_6ColTealBg'
                  ? 'smd:border-transparent border border-themelight-50 bg-transparent'
                  : '',
                  data.VueReferenceCode == 'TCMWithTCL_ImageCenter_Md'
                  ? 'bg-themelight-10 dark:bg-themedark-70'
                  : '',
                  data.VueReferenceCode == 'TCMC_SecondaryBg'
                  ? 'bg-opacitybg-40 dark:bg-themedark-70'
                  : '',
                 
                 data.VueReferenceCode == 'TCMWithTCL_ImageCenter_TealBg_Partner'
                  ? 'bg-opacitybg-0' : ''
              ]"
            >
              <!-- <h3 class="h3_sm mb-0" v-if="item.CTA" v-html="$md.render(item.CTA)"></h3>
              <h3 class="h3_sm mb-0" v-else>{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                class="h3_para listanchor primary_list list_sm"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-8 lg:pt-10 pt-5 xsm:mt-12 text-center px-4 btn btn_md"
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
      ></div>
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
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm dark:contentWhite pb-2"
    }
  }
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .dev_reason {
     .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    .arrow-left {
      &:hover {
        img {
          margin-left: 0.625rem;
        }
      }
    }
    h3 {
      @screen lg {
        @apply pb-0;
      }
      @screen xxl {
        // margin-bottom: 0.625rem;
      }
    }
    .listanchor {
      p {
        @screen md {
          line-height: 1.875rem;
        }
        @screen smd {
          line-height: 1.875rem;
        }
      }
    }
    &.bgboxwhite {
      .comp_size {
        @apply sxl:bg-transparent bg-themelight-0 dark:bg-themedark-0 sxl:dark:bg-transparent;
      }
    }
    .comp_size {
      @apply h-full sxl:bg-transparent  sxl:dark:bg-transparent p-5;
      @screen sxl {
        @apply p-0;
      }
    }
    .reason_content {
      @apply relative top-0 flex flex-wrap content-between xl:justify-between h-full md:justify-between;
    }
    .image_component.comp_size {
      @apply w-1/3 m-auto px-4 top-0 bottom-0;
    }
    .content_outer:nth-child(even) {
      @apply xxl:pl-20 xxl:pr-4 sxl:pr-4 sxl:px-12 px-0;
    }
    .content_outer:nth-child(odd) {
      @apply xxl:pr-20 xxl:pl-4 sxl:pl-4 sxl:px-12 px-0;
    }
    .content_outer {
      margin-top: 1.5rem;
      @screen md {
        margin-top: 2.3rem;
      }
    }
  }
  .content_outer {
    @apply w-full xl:mb-0;
    @screen lg {
      margin-top: 2.5rem;
    }
    @screen md {
      width: 47%;
      @apply mt-0;
    }
    @screen smd {
      width: 48%;
    }
    @screen sxl {
      width: 34%;

      margin-top: 0;

      padding: 0 1.25rem;
    }
    .h3_para {
      @apply dark:text-themedark-75;
      p {
        @apply dark:text-themedark-75;
      }
    }
  }
  .image_component {
    @apply hidden sxl:flex sxl:items-center inset-x-0 text-center;
  }
  .dark{
      .dev_reason {
        .light-image {
      @apply hidden;
    }
    .dark-image {
      @apply block;
    }
      }
    }
}
</style>
