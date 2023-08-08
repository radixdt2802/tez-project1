<template>
  <div
    class="
      rxsection-y-space
      relative
      overflow-hidden
      right-title-img
      bg-secondary
      dark:bg-themedark-70
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
        beforeDarkSecondary
      "
      v-bind:style="[
        data.HoverImage
          ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
          : '',
      ]"
    ></div>
    <div class="container relative">
      <div class="row">
        <div
          class="
            smd:w-4/12
            px-4
            md:w-5/12
            w-full
            md:text-left
            text-center
            md:bg-transparent
            bg-primary
            relative
            mx-auto
            md:mx-0
          "
        >
          <!-- <div class="h2 contentWhite"><p v-html="data.Title"></p></div> -->
          <div v-html="title" class="contentWhite"></div>
        </div>
        <div
          class="
            smd:w-6/12
            md:w-7/12
            w-full
            ml-auto
            px-4
            relative
            xxl:py-24
            py-8
          "
        >
          <!-- <div class="h2" v-html="data.SubTitle"></div> -->
          <div v-html="subTitle"></div>

          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div
          class=""
          :class="{
            'absolute md:block hidden':
              data.VueReferenceCode == 'HM_Title_BeforeImage_NoTop',
            'absolute top-0 absImg md:block hidden':
              data.VueReferenceCode == 'HM_Title_BeforeImage',
          }"
        >
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
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2 pb-0",
      subTitleStyle: "h2",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .right-title-img {
    .absImg {
      bottom: -15vw;
      left: 16vw;
      max-width: 28%;
      top: auto;
      height: auto;
      @screen smd {
        bottom: -24%;
        left: 21.5%;
        max-width: 28%;
        top: auto;
      }
      @screen lg {
        bottom: -15%;
        left: 18.5%;
        max-width: 28%;
        top: auto;
      }
      @screen sxl {
        top: 0;
        left: 20%;
      }
    }
  }
}
</style>