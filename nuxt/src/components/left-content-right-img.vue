<template>
  <div class="left-con-right-img" :class="{
      'bg-themelight-20 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCM_RightImage_LightTealBG',
      'bg-themelight-0 dark:bg-themedark-0':
        data.VueReferenceCode == 'TCM_RightImage_WhiteBg',
      'bg-themelight-10 dark:bg-themedark-40 pb-0':
        data.VueReferenceCode == 'TCM_RightImage_GreyBG',
        'bg-themelight-10 dark:bg-themedark-40':
        data.VueReferenceCode == 'TCM_RightImage_GreyBG_Tbspace',
      
      'bg-secondary dark:bg-themedark-0 contentWhite':
        data.VueReferenceCode == 'TCM_RightImage_DarkBG',
           'rxsection-y-space' : data.VueReferenceCode != 'TCM_RightImage_GreyBG_Tspace',
        'rxsection-t-space bg-themelight-10 dark:bg-themedark-70' : data.VueReferenceCode == 'TCM_RightImage_GreyBG_Tspace',
    }">
    <div class="container">
      <div class="flex flex-wrap justify-between items-center">
        <div class="left-con smd:w-7/12 w-full">
          <!--<h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div class="square_list noBs primary_list list_sm" v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div class="img-right smd:w-5/12 max-w-md mx-auto smd:m-0 p-2 h-auto smd:h-56 border border-dashed w-full "
        :class="[data.VueReferenceCode == 'TCM_RightImage_WhiteBg' ? 
        'border-themelight-10 dark:border-themedark-65' : 'border-themelight-0 dark:border-themedark-65',]">
         
          <div class="image-area flex items-center p-5 h-full "
              :class="[data.VueReferenceCode == 'TCM_RightImage_WhiteBg' ? 
              'bg-themelight-10 dark:bg-themedark-65' : 'bg-themelight-0 dark:bg-themedark-65',]">
           
                <img v-rxlazy="data.Image" :alt="data.Image.alternativeText" :width="data.Image.width"
                  :height="data.Image.height" class="
                  mx-auto
                  smd:max-w-full light-image
                " />
                <img v-rxlazy="data.HoverImage"  :width="data.HoverImage.width" v-if="data.HoverImage" :alt="data.HoverImage.alternativeText"
                   :height="data.HoverImage.height" class="
                  mx-auto
                  smd:max-w-full dark-image
                " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  import titleMixin from '../mixins/title.mixin';

  export default {
    mixins: [titleMixin],    
    props: {
      data: Object,
    },
    data(){
      return {
        titleStyle : "h2",
      }
    }
  };
</script>
<style lang="scss">
  @layer utilities {
    .dark{
      .left-con-right-img {
        .light-image{
          @apply hidden;
        }
        .dark-image{
          @apply block;
        }
    }

    }
    .left-con-right-img {
      .light-image{
          @apply block;
        }
        .dark-image{
          @apply hidden;
        }
    }
  }
</style>