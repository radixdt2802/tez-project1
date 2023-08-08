<template>
  <div
    class="leftservice-desc overflow-hidden rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageLeft_WhiteBG'
        ? 'dark:bg-themedark-0 bg-themelight-0'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_WhiteBG_ImgVisible'
        ? 'dark:bg-themedark-0 bg-themelight-0'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_WhiteBG_ImgVisible_Fw'
        ? 'dark:bg-themedark-0 bg-themelight-0'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_GreyBG'
        ? 'dark:bg-themedark-10 bg-themelight-10'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_GreyBGImgVisible'
        ? 'dark:bg-themedark-10 bg-themelight-10'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_ImgVisible'
        ? 'dark:bg-themedark-40 bg-opacitybg-25'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_Square_list'
        ? 'dark:bg-themedark-70 bg-themelight-10'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_TealBG'
        ? 'bg-themelight-20 dark:bg-themedark-65'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_GreyBGImg'
        ? 'imgBottom relative bg-auto bg-themelight-10 bg-bottom bg-no-repeat dark:bg-themedark-10'
        : '',
      data.VueReferenceCode == 'TCM_ImageLeft_WhiteBG_ImgVisible_bg'
        ? 'dark:bg-themedark-0 bg-themelight-0'
        : '',
    ]"
    v-bind:style="[
      data.HoverImage
        ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
        : '',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise items-center row">
        <div v-if="data.Image" class="smd:w-2/4 px-4 w-full" 
        :class="[ data.VueReferenceCode == 'TCM_ImageLeft_GreyBGImgVisible'
        ? 'hidden sxl:block'
        : '',  ]"
        >
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="block mx-auto"
          />
        </div>
        <div
          class="w-full smd:w-2/4 px-4 sxl:mt-0 mt-5 smd:text-left text-left"
        >
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            :class="{
              'square_list noBs pt-0 primary_list list_sm':
                data.VueReferenceCode == 'TCM_ImageLeft_Square_list',
              'square_list pt-0 primary_list list_sm':
                data.VueReferenceCode == 'TCM_ImageLeft_ImgVisible',
            }"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins:[titleMixin],
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

