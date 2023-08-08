<template>
  <div
    class="rxsection-y-space grey-bg-4col"
    :class="[
      data.VueReferenceCode == 'TWithTCL_GreyBG_4Sec'
        ? 'bg-themelight-10 dark:bg-themedark-40'
        : '',
      data.VueReferenceCode == 'TWithTCL_TealBG_4Sec'
        ? 'bg-opacitybg-25 dark:bg-themedark-40'
        : '',
      data.VueReferenceCode == 'TWithTCL_GreyBG_4Sec_dup'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TWithTCL_WhiteBG_4Sec'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
    ]"
  >
    <div class="container">
     
      <div class="sxl:w-11/12 w-full mx-auto text-center">
        <!--<h2>{{ data.Title }}</h2>-->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor para_md"></div>
      </div>
      <div class="row">
        <div
          v-if="data.TitleContentList"
          class="bgCard-row w-full md:w-6/12 px-4 mt-9"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="list-style"
            :class="[
              data.VueReferenceCode == 'TWithTCL_GreyBG_4Sec' ? 'pl-10 bgCard-dot' : '', 
              data.VueReferenceCode == 'TWithTCL_TealBG_4Sec' ? 'bgCard-dot':'',
              data.VueReferenceCode == 'TWithTCL_WhiteBG_4Sec' ? 'bgCard-dot':'',
              ]"
            >
            <!-- <h3 v-if="item.CTA"
              class="para_lg nopadding-cta"
              v-html="$md.render(item.CTA)"
            ></h3>
            <h3 v-if="!item.CTA" class="para_lg">
              {{ item.Title }}
            </h3> -->
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
<script type="text/javascript">

import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    
  },
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .grey-bg-4col {
    &.bg-secondary {
      p {
        @apply text-themelight-10;
      }
    }
    .bgCard-dot {
      @apply h-full pl-10;
      h3,.h3_sm {
        @apply relative;
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 0.688rem;
          @screen sxl {
            top: 0.813rem;
          }
          left: -2.25rem;
        }
        p {
          padding-top:0;
          padding-bottom:0;
        }
        
      }
    }
    .nopadding-cta {
      > p {
        @apply p-0;
      }
    }
   
  }
}
</style>