<template >
  <div
    class="moveImg rxsection-y-space"
    :class=" [{
      'bg-themelight-10 dark:bg-themedark-10':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_MoveImg_NoTitle',
        
    },
    {
     'bg-white dark:bg-themedark-0':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_MoveImg_white',
    },
    {
     'bg-themelight-10 dark:bg-themedark-70':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_MoveImg',
    },
    {
     'bg-themelight-10 dark:bg-themedark-70':
        data.VueReferenceCode == 'TCMWithTCL_ImageCenter_MoveImg_NoTitle',
    }
    ]"
  >
    <div class="container">
      <sectionHeading
        v-if="!TCMWithTCL_ImageCenter_MoveImg_NoTitle"
        :data="data"
      />
      <div class="multi_component relative sxl:-mx-4 smd:pt-10">
        <div class="image_component comp_size">
          <img
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
        </div>
        <div class="reason_content sxl:pt-12">
          <div class="content_outer" v-for="(item,i) in data.TitleContentList">
            <div class="comp_size">
              <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                class="h3_para leading-7 listanchor square_list noBs list_sm"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
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
  },

};
</script>
<style lang="scss" scoped>
@layer utilities {
  .moveImg {
    .multi_component {
      
      @screen lg {
        padding-top: 4.6875rem;
      }
      @screen xl {
        padding-top: 4.6875rem;
      }
    }
    h3 {
      @screen lg {
        @apply pb-0;
      }
      @screen xxl {
        margin-bottom: 0.625rem;
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
    .comp_size {
      @apply h-auto sxl:bg-transparent bg-themelight-0 dark:bg-themedark-0 sxl:dark:bg-transparent p-5 sxl:p-0 sm:h-full;
    }
    .reason_content {
      @apply sxl:absolute sm:relative top-0 flex flex-wrap content-between xl:justify-between h-full md:justify-between;
    }
    .comp_size .h3_para.listanchor {
      max-width: 21.75rem;
    }
    .image_component.comp_size {
      @apply w-1/3 mx-auto px-4;
    }
    .content_outer:nth-child(even) {
      @apply xxl:pl-20 xxl:pr-4 sxl:pr-4 sxl:px-12 px-0;
    }
    .content_outer:nth-child(odd) {
      @apply xxl:pr-20 xxl:pl-4 sxl:pl-4 sxl:px-12 px-0;
    }
    .content_outer {
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    .content_outer {
      @apply w-full sxl:w-4/12 xl:mb-0;
      @screen lg {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 2.5rem;
        }
      }
      @screen md {
        width: 47%;
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        width: 48%;
      }
      @screen sxl {
        width: 34%;
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 0;
        }
        padding: 0 1.25rem;
      }
    }
    .image_component {
      @apply hidden sxl:block inset-x-0 text-center;
    }
  }
}
</style>
