<template>
  <div
    class="custom-section-homepage rxsection-t-space"
  >
    <div class="container">
      <div class="serviceExpertise flex flex-wrap smd:flex-row flex-col-reverse">
        <div v-if="data.Image" class="smd:w-2/4 px-4 w-full smd:mt-0 mt-5">
          <img
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="block mx-auto"
          />
        </div>
        <div
          class="w-full smd:w-2/4 px-4 sxl:mt-0 mt-5 smd:text-left text-center"
        >
          <h2>{{ data.Title }}</h2>
          <p class="para_lg">{{ data.ShortText }}</p>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
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
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .imgBottom {
    background-size:100%;
    background-position:bottom;
    position: relative;
  }
  .custom-section-homepage {
    @apply overflow-hidden;
    .imageTranslate {
      @apply hidden sxl:block  mx-auto;
      transform: translateY(8.75rem);
    }
  }
}
</style>
