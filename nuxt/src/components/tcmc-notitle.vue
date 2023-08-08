<template>
  <div
    class="
      noTitle
      rxsection-y-space
      contentWhite
      dark:bg-themedark-70
      bg-secondary
    "
  >
    <div class="container">
      <div class="multi_component relative sxl:-mx-4">
        <div class="image_component h-auto p-5 sm:h-full sxl:p-0 absolute">
           
            <img
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
           
        </div>
        <div
          class="
            reason_content
            sm:relative
            top-0
            flex flex-wrap
            items-start
            xl:justify-between
            h-full
            md:justify-between
          "
        >
          <div
            class="
              content_outer
              smd:border-none
              border border-opacitybg-40
              md:mt-10
              mt-8
              h-auto
            "
            v-for="(item,i) in data.TitleContentList"
          >
            <div class="p-5 sxl:p-0">
              <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                class="h3_para leading-7 listanchor"
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
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import titleMixin from '../mixins/title.mixin';
export default {
   mixins: [titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
     data(){
    return {
      sTitleStyle : "h3_sm md:pb-2.5",
     }
  }
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .noTitle {
    .reason_content {
      @apply sxl:py-16;
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
      &:nth-child(1) {
        @apply mt-0;
      }

      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }

    .content_outer {
      @apply w-full sxl:w-4/12 xl:mb-0;

      @screen md {
        width: 47%;
      }
      @screen smd {
        width: 48%;
      }
      @screen sxl {
        width: 34%;
      }
    }
    .image_component {
      @apply hidden sxl:block inset-x-0 text-center;
    }
  }
}
</style>
