<template>
  <div
    class="rxValueSection rxsection-y-space bg-cover bg-center bg-no-repeat bg-secondary"
    :class="{
      'beforeDarkSecondary relative': data.VueReferenceCode == 'TCM_IconRight_Light',
      'contentWhite bg-left-bottom beforeDark relative':
        data.VueReferenceCode == 'TCM_IconRight_Dark',
    }"
    :style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <div class="row">
        <div class="smd-col6 smd:w-2/3 sxl:w-2/3  px-4">
          <h2>{{ data.Title }}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class="square_list para_smd noBs"></div>
          <div v-html="$md.render(data.CTA ? data.CTA : '')" :class="data.ShortText"></div>
        </div>
        <div class="smd-col3 w-full smd:w-1/3 sxl:w-1/3  px-4 hidden smd:block">
          <img
            class="leftIconimg mx-auto w-full"
            loading="lazy"
            v-rxlazy="data.Icon"
            :width="data.Icon.width"
            :height="data.Icon.height"
          />
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
  .rxValueSection {
    .leftIconimg {
      max-width: 22.875rem;
    }
    .btn {
      @apply text-center;
      @screen sm {
        @apply text-left;
      }
    }
  }
}
</style>