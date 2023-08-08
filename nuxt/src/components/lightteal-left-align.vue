<template>
  <div
    class="
      rxsection-y-space
      lightteal-left-align 
      dark:bg-themedark-70
    "
    :class="[data.VueReferenceCode == 'TWithTeal_LeftalignBG_3Section' ? 'bg-themelight-20' : 'bg-themelight-30']"
  >
  <!-- TWithTeal_LeftalignBG_3Section -->
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row t-space-60">
        <div class="bgCard-row" v-for="(item,i) in data.TitleContentList">
          <div class="bgCard">
            <!-- <h3 class="para_lg" 
            :class="[data.VueReferenceCode == 'TWithTeal_LeftalignBG_3Section' 
            ? 'black':'teal']"
            >
              {{ item.Title }}
            </h3> -->
            <div v-html="sTitles[i]" class="para_lg" 
            :class="[data.VueReferenceCode == 'TWithTeal_LeftalignBG_3Section' 
            ? 'black':'teal']"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
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
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
   data(){
    return {
      sTitleStyle : "para_lg h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .lightteal-left-align {
    .bgCard-row {
      @apply md:w-3/6 sxl:w-3/12 mx-auto;
      padding: 0 0.938rem;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-6;
      }
      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen sxl {
        &:nth-child(4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }

      .bgCard {
        @apply w-full;
        @screen xsm {
          max-width: 25rem;
        }
        @screen smd {
          max-width: 17.8125rem;
        }
        @screen lg {
          &:hover {
            h3 {
              &:after {
                left: 0.9375rem;
              }
            }
          }
        }

        .teal {
          @apply mb-1 md:mb-3 relative pb-5 md:pb-6;
          &:after {
            @apply absolute bg-primary dark:bg-themedark-65 left-0 bottom-0 transition-all duration-300 ease-in-out;
            content: "";
            height: 0.188rem;
            width: 5.625rem;
          }
        }
        .black {
          @apply mb-1 md:mb-3 relative pb-5 md:pb-6;
          &:after {
            @apply absolute bg-themedark-0 dark:bg-themedark-65 left-0 bottom-0 transition-all duration-300 ease-in-out;
            content: "";
            height: 0.188rem;
            width: 5.625rem;
          }
        }
      }
    }
  }
}
</style>