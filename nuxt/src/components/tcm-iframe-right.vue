<template>
  <div
    class="rightIframe overflow-hidden rxsection-y-space"
    
  >
    <div class="container">
      <div class="serviceExpertise items-center row">
        <div
          class="w-full smd:w-2/4 px-4 sxl:mt-0 mt-5 smd:text-left text-left"
        >
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            :class="[
      data.VueReferenceCode == 'TCM_IframeRight_List_Circle'
        ? 'circle_list'
        : '',
    ]"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
        <div class="externalVideo smd:w-2/4 px-4 w-full">
          <iframe width="100%"
              :src="data.GuideURL"
              frameborder="0"
              class="aspect-video"
              rel="nofollow"></iframe>
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
<style lang="scss">
@layer utilities{
  .externalVideo {
      max-inline-size: 100%;
      block-size: auto;
      iframe {
        max-inline-size: 100%;
        @screen sxl {
          max-inline-size: unset;
        }
        &.aspect-video {
          aspect-ratio: 16 / 9;
        }
      }
    }
}
</style>

