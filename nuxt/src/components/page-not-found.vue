<template>
  <div class="rxsection-y-space bg-themelight-0 dark:bg-themedark-0">
    <div class="container">
      <div class="flex justify-center items-center">
        <img
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
          :alt="data.Image.alternativeText"
        />
      </div>
      <div class="text-center">
        <h2>{{ data.Title }}</h2>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      </div>
      <div class="para_sm text-center" v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <div class="text-center">
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_md space-t"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
</style>