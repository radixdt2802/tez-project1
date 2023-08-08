<template>
  <div
    class="rxsection-y-space right-con-list-left-img"
    :class="[
      data.VueReferenceCode == 'TCM_GreyBG_Left_Image'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : 'bg-themelight-0 dark:bg-themedark-0',
      data.VueReferenceCode == 'TCM_LightTealBG_Left_Image'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : '',
        data.VueReferenceCode == 'TCM_WhiteBG_Left_Image'
        ? 'dark:bg-themedark-70'
        : '',
        
    ]"
  >
    <div class="container">
      <div class="flex flex-wrap justify-between items-center">
        <div class="left-con smd:w-7/12 w-full px-4 smd:order-1">
          <h2>{{ data.Title }}</h2>
          <div
            class="square_list noBs list_sm"
            :class="[
              data.VueReferenceCode == 'TCM_LightTealBG_Left_Image'
                ? ''
                : 'primary_list',
            ]"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="img-right w-full max-w-md mx-auto smd:m-0 p-2 smd:h-56 h-full border  border-dashed smd:order-none smd:w-5/12"
        :class="[data.VueReferenceCode == 'TCM_WhiteBG_Left_Image'? 'border-themelight-10 dark:border-themedark-65':'border-themelight-0 dark:border-themedark-65']">
          <div class="image-area flex items-center p-5 bg-themelight-0 h-full"
          :class="[data.VueReferenceCode == 'TCM_WhiteBG_Left_Image'? 'bg-themelight-10 dark:bg-themedark-65':'bg-themelight-0 dark:bg-themedark-65']">
            <img
            v-rxlazy="data.Image.url"
              :alt="data.Image.alternativeText"
              :width="data.Image.width"
              :height="data.Image.height"
              class="
                mx-auto light-image smd:w-auto w-full 
              "
            />
            <img
            v-rxlazy="data.HoverImage.url"
              :alt="data.HoverImage.alternativeText"
              :width="data.HoverImage.width"
              :height="data.HoverImage.height"
              class="
                mx-auto dark-image smd:w-auto w-full 
              "
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
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .right-con-list-left-img {
      .light-image{
        @apply hidden;
      }
      .dark-image{
        @apply block;
      }
    }
  }
  .right-con-list-left-img {
      .light-image{
        @apply block;
      }
      .dark-image{
        @apply hidden;
      }
    .left-con {     
      li {
        margin-bottom: 0;
        &:before {
          top: 0.875rem;
        }
      }
    }
    .img-right {
      img {
        max-width: 25rem;
        @apply  smd:max-w-full ;
      }
    }
  }
  .quote {
    margin-top: 1.875rem;
    a {
      @apply underline;
    }
  }
}
</style>