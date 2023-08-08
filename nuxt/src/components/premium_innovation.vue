<template>
  <div class="premium_innovation rxsection-b-space relative">
    <div class="container">
      
      <div class="row items-center">
        <div
          class="
            smd:w-5/12
            w-full
            mx-auto
            smd:ml-0
            left-con
            z-10
            sxl:text-left
            text-center
            px-4
            md:pr-0
          "
          v-for="(item,i) in data.TitleContentList"
        >
          <!-- <h2
            class="
              title-box
              smd:p-8
              p-6
              w-64
              smd:w-full
              smd:max-w-xs
              xxl:max-w-lg
              border-solid border-customcolor-65
              xxl:block
              sxl:inline-block
            "
          >
            {{ item.Title }}
          </h2> -->
          <div v-html="sTitles[i]"></div>
          <div
            class="para_md xl:pb-8 relative pb-3"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
        <div class="smd:w-7/12 w-full smd:block hidden">
          <div class="md:w-10/12 w-full mr-0 ml-auto px-4">
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
            />
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
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
  return {
    sTitleStyle : "h2 title-box smd:p-8 p-6 w-64 smd:w-full smd:max-w-xs xxl:max-w-lg border-solid border-customcolor-65 xxl:block sxl:inline-block"
    }
  },
};
</script>
<style lang="scss">
@layer components {
  .premium_innovation {
    &:after {
      @apply sxl:block hidden text-themelight-10 dark:text-opacitybg-15 absolute left-0 z-0 font-poppins font-semibold;
      content: "Solidity";
      @screen sxl {
        bottom: 5vw;
        font-size: 12vw;
      }
      @screen xxl {
        bottom: 7vw;
      }
      @screen xxxl {
        font-size: 15rem;
      }
      line-height: 15rem;
    }
    .left-con {
      max-width: 32.5rem;
      .title-box {
        margin: 0 auto 1.25rem;
        border-width: 0.625rem;
        @screen smd {
          border-width: 0.9375rem;
        }
        @screen sxl {
          margin: 4.25rem auto 4.375rem;
        }
      }
      p {
        &:after {
          @apply absolute inline-block bottom-0 left-0 bg-primary sxl:right-100 right-0 mx-auto;
          content: "";
          width: 6.25rem;
          @screen sxl {
            width: 4.6875rem;
          }
          height: 0.1875rem;
        }
      }
    }
  }
}
</style>