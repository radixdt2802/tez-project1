<template>
  <div
    class="right-con-left-img"
    :class="{
      'bg-themelight-20 dark:bg-themedark-70': data.VueReferenceCode == 'TCM_LeftImage_LightTealBG',
      'bg-themelight-0 dark:bg-themedark-70': data.VueReferenceCode == 'TCM_LeftImage_WhiteBG',
      'bg-themelight-10 dark:bg-themedark-70': data.VueReferenceCode == 'TCM_LeftImage_GreyBG',
      'bg-secondary contentWhite': data.VueReferenceCode == 'TCM_LeftImage_DarkBG',
      'rxsection-y-space' : data.VueReferenceCode != 'TCM_LeftImage_GreyBG_Tspace',
      'rxsection-t-space bg-themelight-10 dark:bg-themedark-70' : data.VueReferenceCode == 'TCM_LeftImage_GreyBG_Tspace',
    }"

  >
    <div class="container">
      <div class="flex flex-wrap justify-between items-center">
        <div class="left-con smd:order-1 smd:w-7/12 w-full px-4">
          <h2>{{data.Title}}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div class="img-right smd:order-none smd:w-5/12 w-full max-w-md mx-auto smd:m-0 p-2 smd:h-56 h-auto border border-dashed" :class="[
      data.VueReferenceCode == 'TCM_LeftImage_DarkBG'
        ? 'border-themelight-10 dark:border-themedark-65'
        : '',
	data.VueReferenceCode == 'TCM_LeftImage_LightTealBG'
        ? 'border-themelight-10 dark:border-themedark-65'
        : '',
		data.VueReferenceCode == 'TCM_LeftImage_WhiteBG'
        ? 'border-themelight-10 dark:border-themedark-65'
        : '',
	  data.VueReferenceCode == 'TCM_LeftImage_GreyBG_Tspace'
        ? 'border-themelight-0 dark:border-themedark-65'
        : '',
		data.VueReferenceCode == 'TCM_LeftImage_GreyBG'
        ? 'border-themelight-0 dark:border-themedark-65'
        : '',
		
    ]">
          <div class="image-area flex items-center p-5 h-full" :class="[
      data.VueReferenceCode == 'TCM_LeftImage_DarkBG'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
	data.VueReferenceCode == 'TCM_LeftImage_LightTealBG'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
		data.VueReferenceCode == 'TCM_LeftImage_WhiteBG'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
	  data.VueReferenceCode == 'TCM_LeftImage_GreyBG_Tspace'
        ? 'bg-themelight-0 dark:bg-themedark-65'
        : '',
		data.VueReferenceCode == 'TCM_LeftImage_GreyBG'
        ? 'bg-themelight-0 dark:bg-themedark-65'
        : '',
		
    ]">
             <img
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="light-image mx-auto smd:max-w-full"
          />
             <img
             v-if="data.HoverImage"
            v-rxlazy="data.HoverImage"
            :alt="data.HoverImage.alternativeText"
            :width="data.HoverImage.width"
            :height="data.HoverImage.height"
            class="dark-image mx-auto smd:max-w-full"
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
  
  .right-con-left-img{
    .light-image {
        @apply block;
      }
      .dark-image {
        @apply hidden;
      }
  
  }
  .dark{
    .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
  }
}

</style>