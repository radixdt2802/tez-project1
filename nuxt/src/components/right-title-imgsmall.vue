<template>
  <div
    class="
      rxsection-y-space
      relative
      overflow-hidden
      right-title-imgsmall
      bg-themelight-20 dark:bg-themedark-40
    "
  >
    <div
      class="
        top-0
        h-full
        block
        absolute
        bg-no-repeat bg-left bg-cover bg-fixed
        right-0
        md:w-8/12
        w-full
        z-0
        beforeDark
      "
      v-bind:style="[
        data.HoverImage
          ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
          : '',
      ]"
    ></div>
    <div class="container relative">
      <div class="">
        <div
          class="
            smd:w-4/12
            p-4 
            md:w-5/12
            w-full
            md:text-left
            text-center
            md:bg-transparent md:dark:bg-transparent
            bg-themelight-20 dark:bg-themedark-40
            relative
            mx-auto
            md:mx-0
          "
        >
          <div
            class="h2 p-0 text-themedark-0"
            v-html="data.Title"
          ></div>
        </div>
        <div
          class="
            contentWhite
            smd:w-6/12
            md:w-7/12
            w-full
            ml-auto
            px-4
            relative
            xxl:py-12
            py-8
          "
        >
          <div class="h2" v-html="data.SubTitle"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div class="absolute top-0 absImg md:block hidden">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .right-title-imgsmall {
    .absImg {
      bottom: -15vw;
      left: 16vw;
      max-width: 28%;
      top: auto;
      height: auto;
      @screen lg {
        bottom: 19%;
        left: 10.5%;
        max-width: 100%;
        top: auto;
      }
      @screen sxl {
        top: 58%;
        left: 0%;
      }
    }
  }
}
</style>