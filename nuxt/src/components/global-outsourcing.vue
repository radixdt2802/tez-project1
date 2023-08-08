<template>
  <div
    class="rxsection-y-space global-outsourcing "
    :class="[data.VueReferenceCode == 'TCM_GreyBG_LeftImage'? 'bg-themelight-10 dark:bg-themedark-70':'',
    data.VueReferenceCode == 'TCM_White_BG_LeftImage' ? 'bg-themelight-0 dark:bg-themedark-10':'']"
  >
    <div class="container">
      <div class="flex flex-wrap justify-between items-center">
        <div class="lg:w-7/12 w-full lg:order-1 px-4">
          <h2>{{ data.Title }}</h2>
          <div
            class="circle_list"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div
          class="img-left lg:w-5/12 lg:order-none max-w-md mx-auto smd:m-0 p-2 h-auto border border-themelight-0 dark:border-themedark-65 border-dashed w-full"
          v-if="data.Image"
        >
        <div class="image-area flex items-center p-5 bg-themelight-0 dark:bg-themedark-65 h-full">
          <img
            class="mx-auto smd:w-auto light-mode-image"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
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
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object
  }
};
</script>
<style lang="scss">
@layer utilities {
  
  .global-outsourcing {
    
    .img-left {
      img {
        max-width: 25rem;
       
      }
    }
    .circle_list {
      margin-top: 0.313rem;
      @screen sm {
        @apply mt-5;
        margin-bottom: 0.313rem;
      }
      li {
        @apply sxl:w-3/12 md:w-6/12 w-full py-0 px-4 flex m-0;
        padding-left: 0.063rem;
        @screen sxl {
          margin-bottom: 0.625rem;
        }
        &::before {
          @apply relative;
          width: 1.125rem;
          height: 1.125rem;
          margin-top: 0.36rem;
          margin-right: 0.938rem;
          @screen sm {
            @apply w-5 h-5 mr-5;
          }
        }
      }
    }
  }
}
</style>
