<template>
  <div
    class="rxsection-y-space t-three-dot-bgwhite"
    :class="{
      'bg-themelight-0 dark:bg-themedark-0':
      data.VueReferenceCode == 'TWithTCL_WhiteBG_6Sec_Wd',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TWithTCL_WhiteBG_6Sec',
      'bg-themelight-10 dark:bg-themedark-70':
        data.VueReferenceCode == 'TWithTCL_GrayBG_6Sec',
      'bg-themelight-30 dark:bg-themedark-70':
        data.VueReferenceCode == 'TCMWithTCL_Teal_6Sec',
      'bg-themelight-0 dark:bg-themedark-0 pb-0':
        data.VueReferenceCode == 'TWithTCL_WhiteBG_6Sec_Tspace',        
    }"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row">
        <div class="bgCard-row w-full sxl:w-4/12 md:w-6/12 px-4 mt-8" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard-dot">
            <!-- <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <!-- <h3
              class="para_lg"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3> -->
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
        <div
          v-if="data.TitleContentList"
          class="bgCard-row w-full sxl:w-4/12 md:w-6/12 px-4 mt-8"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCard-dot">
            <!-- <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3>
            <h3
              class="para_lg ctaLink"
              :class="{
                contentWhite: data.VueReferenceCode == 'TCMWithTCL_Dark_6Sec',
              }"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3> -->
            <div v-html="sTitles[i]"></div>
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { defineAsyncComponent } from '@vue/runtime-core';  
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
		return {
		  sTitleStyle: "h3_sm h3 relative"
		}
	},
};
</script>
  <style lang="scss">
@layer utilities {
  .t-three-dot-bgwhite {
    &.bg-secondary {
      p {
        @apply text-themelight-0;
      }
    }
    .bgCard-dot {
      @apply h-full;
      padding-left: 3.125rem;
      h3, .h3 {
        @apply relative;
        font-size: 1.375rem;
        @apply leading-8;
        @screen sxl {
          font-size: 1.375rem;
          @apply leading-8;
        }
        @screen xl {
          @apply text-2xl leading-9;
        }
        @screen xxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 0.688rem;
          @screen sxl {
            top: 0.938rem;
          }
          left: -2.25rem;
        }
        p {
          @apply py-0;
        }
      }
    }
  }
}
</style>