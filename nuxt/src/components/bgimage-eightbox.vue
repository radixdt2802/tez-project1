<template>
  <div
    class="rxsection-y-space four-comp bg-cover bg-no-repeat"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
     :class="[
      data.VueReferenceCode == 'TCMWithTCL_BGTeal_8Box'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : 'contentWhite beforeDark relative',
      data.Image ? ' ' : '',
    ]"
  >
    <div class="container relative">
        <div class="section-heads100 text-center">
          <div class="w-full mx-auto">
            <!--<h2>{{ data.Title }}</h2> -->
            <div v-html="title"></div>
            <div
              v-if="data.LongText"
              v-rxhtml="data.LongText"
              class="listanchor para_md"
            ></div>
          </div>
       </div>
      <div class="row bgcontent justify-center">
        <div
          class="bgCard-row w-full px-4 md:w-1/2 sxl:w-1/4 mx-auto mt-8"
          v-for="(item,i) in data.TitleContentList"
        >
          <div
            class="bgCard px-4 py-5 sm:py-8 md:py-10 bg-opacitybg-40 dark:bg-opacitybg-15 h-full"
            :class="[
              data.VueReferenceCode == 'TCMWithTCL_BGTeal_8Box'
                ? 'textDark'
                : '',
            ]"
          >
            <!--<h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3>-->
            <!-- <div v-if="!item.CTA" v-html="sTitles[i]"></div> -->
            <!-- <h3 v-if="item.CTA" class="h3_sm">
              <a :href="item.CTA" class="nuxt-anchore">{{ item.Title }}</a>
            </h3> -->
            <!-- <div v-if="item.CTA" v-html="$md.render(item.CTA)" class="h3_sm"></div> -->
            <div v-html="sTitles[i]"></div>
            
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor p-0"
            ></div>
          </div>
        </div>
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
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .four-comp {
      &.beforeDark {
        &:before {
          content: "";  
          @apply absolute w-full h-full top-0 bg-themedark-70 dark:bg-themedark-0;
        }
      }
    }
  }
  .four-comp {
    .section-heads100 > div {
      @screen xxsm {
        padding-top: 0;
      }
    }
    div.para_md p {
      padding: 0.625rem 0;
    }
    .h3_sm p{
      padding-top: 0;
      padding-bottom:0;
    }
    
  }
}
</style>