<template>
  <div
    class="valueTealSeaction rxsection-y-space bg-themelight-20 dark:bg-themedark-10"
    :style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="smd-col3 w-full smd:w-1/3 sxl:w-1/3 px-4 hidden smd:block">
          <img
            class="leftIconimg mx-auto w-full"
            loading="lazy"
            v-rxlazy="data.Icon"
            :width="data.Icon.width"
            :height="data.Icon.height"
          />
        </div>
        <div class="smd-col6 smd:w-2/3 sxl:w-2/3 px-4">
          <h2>{{ data.Title }}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class="square_list para_smd noBs"></div>
          <div v-html="$md.render(data.CTA ? data.CTA : '')" :class="data.ShortText"></div>
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
  .valueTealSeaction {
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