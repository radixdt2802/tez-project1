<template>
  <div class="rxsection-y-space cms_bgimage-right">
    <div class="container">
      <div class="row">
        <div class="sxl:w-1/2 w-full px-4">
          <h2>{{ data.Title }}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div class="sxl:w-1/2 w-full px-4">
          <img
            class="lazyloaded mx-auto sxl:mr-0"
            v-if="data.Image"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
}
</style>