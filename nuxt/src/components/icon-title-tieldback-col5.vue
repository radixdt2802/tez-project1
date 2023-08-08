<template>
  <div class="rxsection-y-space five-card-tield text-center" 
  :class="[data.VueReferenceCode == 'TWithTML_IconTitle_4Box' ? 'bg-secondary dark:bg-themedark-40 contentWhite' : '']">
    <div class="container">
      <!-- <sectionHeading :data="data" /> -->
      <!-- <h2 class="pb-6">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md pb-10"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row">
        <div
          class="
            card-row
            w-full
            px-4
            mt-8
            sxl:mt-10
            sm:mt-8
          "
           :class="[data.VueReferenceCode == 'TWithTML_IconTitle_4Box' ? 'sxl:w-1/4 md:w-1/2 sm:w-1/2' : 'sxl:w-1/5 md:w-1/3 sm:w-1/2']"
          v-for="(item,i) in data.TitleMediaList"
        >
          <div
            class="
              card-bg
              px-5
              py-10
              
              text-white
              h-full
              dark:bg-themedark-70
            "
            :class="[data.VueReferenceCode == 'TWithTML_IconTitle_4Box' ? 'bg-opacitybg-40' : 'bg-primary']"
          >
            <img
              v-rxlazy="item.Icon"
              :height="item.Icon.height"
              :width="item.Icon.width"
              class="mx-auto"
              alt
            />
            <div v-html="sTitles[i]"></div>
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
      titleStyle : "h2 pb-6",
      sTitleStyle: "para_md py-2"
     }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .five-card-tield {
    h2 {
      font-size: 1.5rem;
      line-height: 2.125rem;
      @apply p-0;

      @screen xsm {
        font-size: 1.875rem;
        line-height: 2.625rem;
      }
      @screen smd {
        font-size: 2.375rem;
        line-height: 3.125rem;
      }
      @screen sxl {
        font-size: 2.5rem;
        line-height: 3.25rem;
        padding-bottom: 1.25rem;
      }
      @screen xxl {
        font-size: 2.75rem;
        line-height: 3.5rem;
        @apply pb-0;
      }
    }
    .card-row {
      p {
        font-size: 1rem;
        line-height: 1.625rem;
        @apply font-normal text-white;
        @screen xsm {
          font-size: 1.0625rem;
          line-height: 1.75rem;
        }
        @screen sm {
          font-size: 1.125rem;
          line-height: 1.875rem;
        }
        @screen md {
          font-size: 1.25rem;
          line-height: 2rem;
        }

        @screen xl {
          font-size: 1.375rem;
          line-height: 2.125rem;
        }
      }
    }
  }
}
</style>