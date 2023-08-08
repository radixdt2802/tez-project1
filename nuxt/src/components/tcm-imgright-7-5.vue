<template>
  <div
    class="tcm-imgright-7-5 rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageRight_7_5BGTeal'
        ? 'bg-themelight-20 dark:bg-themedark-10'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_7_5BGgrey'
        ? 'bg-themelight-10 dark:bg-themedark-10'
        : '',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div class="smd:w-7/12 w-full pl-4 md:pr-16 pr-4">
          <div v-html="title"></div>
          <div
            class="list_sm para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            :class="[
              data.VueReferenceCode == 'TCM_ImageRight_7_5BGwhite'
                ? 'circle_list list_md'
                : 'square_list noBs',
              data.VueReferenceCode == 'TCM_ImageRight_7_5BGwhite_squareList'
                ? 'square_list noBs primary_list'
                : '',
            ]"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
        <div v-if="data.Image" class="smd:w-5/12 w-full px-4 hidden smd:block">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto mt-6 smd:mt-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2 pb-0 xl:pb-5",
    }
  },
};
</script>
<style lang="scss">
@layer utilities{
  .tcm-imgright-7-5{
    ul{
      li{
        p{
          @apply p-0;
        }
      }
    }
  }
}
</style>
