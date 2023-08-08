<template>
  <div
    class="rxsection-y-space levelcomp"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_3icon_Top' ? 'ssss' : '',
      data.VueReferenceCode == 'TCWithTCML_3icon_Top_BgTeal'
        ? 'bg-themelight-20 dark:bg-themedark-70 bgtealOpacity'
        : '',
      data.VueReferenceCode == 'TCWithTCML_3icon_Top_GrayBg'
        ? 'bg-themelight-10 dark:bg-themedark-10'
        : '',
      data.VueReferenceCode == 'TCWithTCML_3icon_Top_LightTealBg'
      ? 'bg-opacitybg-25 dark:bg-themedark-40'
      :''
    ]"
  >
    <!-- 't-space-60': data.VueReferenceCode == 'TCWithTCML_3icon_Top', -->
    <div class="container">
      <sectionHeading :data="data" />
      <div
        class="row card_structure px-4 lg:px-0"
        :class="{
          't-space-40': data.VueReferenceCode == 'TCWithTCML_3icon_Top',
          '': data.VueReferenceCode == 'TCWithTCML_3icon_Top_BgTeal',
          't-card-40': data.VueReferenceCode == 'TCWithTCML_3icon_Top_GrayBg'
        }"
      >
        <div
          class="card_design md:mt-10 mt-8 w-full smd:w-1/3 text-center px-4 md:w-1/2"
          v-for="(item,i) in data.TitleContentMediaList"
          :key="item"
        >
          <div
            class="back_circle w-20 h-20 rounded-full text-center mx-auto flex mb-6 smd:w-24 smd:h-24"
            :class="[
              data.VueReferenceCode == 'TCWithTCML_3icon_Top'
                ? 'bg-themelight-10 dark:bg-themedark-10'
                : 'bg-themelight-0 dark:bg-themedark-0'
            ]"
            v-if="item.Icon"
          >
            <img
              class="mx-auto light-image "
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="mx-auto dark-image "
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
          </div>
          <!-- <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3>
          <h3 v-if="item.CTA" class="h3_sm" v-html="$md.render(item.CTA)"></h3> -->
          <div v-html="sTitles[i]"></div>
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading:sectionHeading
  },
  props: {
    data: Object
  },
  data(){
    return {
      titleStyle : "",
      subTitleStyle : "",
      sTitleStyle : "h3_sm h3",
      sSubTitleStyle : ""
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .levelcomp {
      .dark-image {
        @apply block;
      }
      .light-image {
        @apply hidden;
      }
    }
  }
  .levelcomp {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply block;
    }
    .card_design {
      .h3_sm{
        p{
          @apply p-0;
        }
      }
      .back-circle{
        @screen md { 
          width: 5.37rem;
          height: 5.37rem;   
        }
        @screen smd {
          img {
            width: 3.125rem;
          }
          .card_design:not(:last-child) {
          @apply mb-0;
        }
        .card_design:not(:last-child) {
          @apply mb-0;
        }
        }
      }
    }
    .bgtealOpacity {
      .back_circle {
        @apply w-20 h-20 bg-themelight-0 dark:bg-themedark-10 rounded-full text-center mx-auto flex mb-6;
        img {
          width: 2.18rem;
        }
      }
    }
  }
}
</style>