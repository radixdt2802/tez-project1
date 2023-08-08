<template>
  <div
    class="leftText rxsection-y-space beforeBlackDark relative tcm_CTALink_contentLeft"
    v-bind:style="[data.Image ? {backgroundImage: 'url(' + data.Image.url + ')',backgroundAttachment: 'fixed'}: '']"
  >
    <div class="container relative">
      <div class="mx-auto text-left">
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div v-if="data.LongText" v-rxhtml="data.LongText" :class="[data.VueReferenceCode == 'TCM_CTALink' ? 'circle_list list_md noBs': '']"></div>
        <!-- CTA here -->
        <div class="pt-3 customCta" v-if="data.CTA">
          <div class="inline customContent btn btn_sm space-t" v-if="data.VueReferenceCode == 'TCM_CTALink'" v-html="$md.render(data.CTA ? data.CTA : '')"></div>
          <div class="flex items-center tcwithcta" v-if="data.VueReferenceCode == 'TC_with_CTA_link'">
            <div
              v-html="$md.render(data.CTA ? data.CTA : '')"
              class="ctaPrimary inline w-auto"
            ></div>
            <img
              class="primary-arrowBtn inline"
              v-rxlazy="arrowImage"
              width="18"
              height="10"
              alt="Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleMixin from '../mixins/title.mixin';
import staticImg from '../mixins/staticimg.mixin';
export default {
  mixins: [titleMixin, staticImg],
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
@layer components {
  .tcm_CTALink_contentLeft {
    .ctaPrimary {
      p {
        display: inline;
      }
      a {
        @apply text-primary mr-4 transition-all ease-in-out duration-300 inline no-underline;
        &:hover {
          @apply mr-3;
        }
      }
    }
  }
}
</style>