<template>
  <div class="rxsection-y-space benifitsfour "
    :class="[data.VueReferenceCode == 'TCWithTCL_4_NoBox_BgWhite' 
            ? 'bg-themelight-0 dark:bg-themedark-0' : 'bg-themelight-20 dark:bg-themedark-40',]"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row t-space-60">
        <div class="bgCard-row w-full sm:w-1/2 sxl:w-3/12" v-for="(item,i) in data.TitleContentList">
          <div class="bgCard w-full text-left">
            <!--<h3>{{ item.Title }}</h3>-->
            <div v-html="sTitles[i]"></div>
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
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  components: {
   sectionHeading: sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .benifitsfour {
    
    .bgCard {
     
      padding: 0 0.937rem;
      h3,.h3 {
        @apply font-semibold;
        @screen lg {
          @apply pb-0;
        }
        @screen sxl {
          margin-bottom: 0.625rem;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
      }

      .listanchor {
        @screen xxl {
          max-width: 18.18rem;
        }
      }
    }
    .bgCard-row {
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    @screen sm {
      .bgCard-row {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        &:nth-child(4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
    }

    .bgCard-row {
      @apply w-full sm:w-1/2 smd:w-3/12;
     
    }
  }
}
</style>
