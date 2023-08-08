<template>
  <div class="rxsection-y-space six-list-image bg-themelight-0 dark:bg-themedark-0">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="multi_component pt-10 relative t-space-60 sxl:-mx-4">
        <div class="image_component absolute">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto"
          />
        </div>
        <div class="reason_content">
          <div class="content_outer" v-for="(item,i) in data.TitleContentMediaList">
            <div class="comp_size">
              <!-- <h3 class="h3_sm" v-if="!item.CTA">{{ item.Title }}</h3>
              <div
                v-html="$md.render(item.CTA ? item.CTA : '')"
                v-if="item.CTA"
                class="h3_sm ctaLink mb-2"
              ></div> -->
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
      titleStyle : "",
      sTitleStyle : "h3_sm h3",
     }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .six-list-image {
    .multi_component {
      @screen md {
        padding-top: 3.4375rem;
      }
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
      @apply h-auto  relative  sm:h-full;
      p {
        @apply pb-0;
      }
      @screen sxl {
        @apply pl-12;
      }
      @screen smd {
        padding-left: 3.125rem;
      }
    }
    .comp_size {
      @screen smd {
        &:before {
          @apply inline-block bg-primary rounded-full bg-clip-padding absolute left-0 h-5 w-5;
          content: "";
          border: 0.3125rem solid rgba(49, 187, 174, 0.2);
          margin-top: 0.5rem;
          margin-right: 0.9375rem;
        }
      }
    }
    .reason_content {
      @apply sm:relative top-0 flex flex-wrap content-between xl:justify-between h-full md:justify-between;
    }
    .comp_size .h3_para.listanchor {
      /* max-width: 21.75rem; */
    }
    .image_component.comp_size {
      @apply w-1/3 mx-auto px-4;
    }
    .content_outer:nth-child(even) {
      @apply sxl:px-4;
      @screen smd {
        margin-left: 33.333333%;
      }
      /* xxl:pl-20 xxl:pr-4  sxl:pr-4 */
    }
    .content_outer:nth-child(odd) {
      @apply sxl:px-4;
      /* xxl:pr-20 xxl:pl-4 sxl:px-12 */
    }
    .content_outer {
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    .content_outer {
      @apply w-full  xl:mb-10 p-5 smd:p-0 border border-solid;
      border-color: #dedede;
      @screen lg {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 2.5rem;
        }
      }
      @screen md {
        width: 48%;
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        @apply border-0 w-2/6;
      }
      @screen sxl {
        /* &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 0;
        } */
        padding: 0 1.25rem;
      }
      @screen xl {
        @apply mb-0;
      }
    }
    .image_component {
      @apply hidden smd:block sxl:w-full inset-x-0 text-center;
      top: 50%;
      transform: translateY(-50%);
      img {
        /* max-width: 33.333333%; */
        height: auto;
      }
    }
  }
}
</style>