<template>
  <div
    class="rxsection-y-space relative overflow-hidden right-title-img bg-secondary dark:bg-themedark-70"
  >
    <div
      class="top-0 h-full block absolute bg-no-repeat bg-left bg-cover bg-fixed right-0 md:w-8/12 w-full z-0 beforeDarkSecondary"
      v-bind:style="[
        data.HoverImage
          ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
          : '',
      ]"
    ></div>
    <div class="container relative">
      <div class="row">
        <div
          class="smd:w-4/12 px-4 md:w-5/12 w-full md:text-left text-center md:bg-transparent bg-primary relative mx-auto md:mx-0"
        >
          <!-- <div class="h2 contentWhite"><p v-html="data.Title"></p></div> -->
        </div>
        <div
          class="smd:w-6/12 md:w-7/12 w-full ml-auto px-4 relative xxl:py-24 py-8"
        >
          <!-- <div class="h2" v-html="data.SubTitle"></div> -->
          <div v-html="title" class="h2"></div>
          <div v-html="subTitle"></div>

          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div
          class=""
          :class="{
            'absolute md:block hidden absImg':
              data.VueReferenceCode == 'Health-Services-Right-Title-Img',
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
      subTitleStyle: "h3",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .right-title-img {
    .absImg {
      bottom: -15vw;
      left: 0vw;
      max-width: 38%;
      top: auto;
      height: auto;
      @screen smd {
        bottom: -24%;
        left: 9.5%;
        // top: auto;
      }
      @screen lg {
        bottom: -20%;
        left: 10.5%;
        // top: auto;
      }
      @screen sxl {
        // top: 0;
        left: 9%;
        // display: flex;
        // align-items: flex-end;
      }
    }
  }
}
</style>
