<template>
  <div class="phpcallingsuper relative">
    <div class="sxl:pb-40 pb-24">
      <div
        class="
          left-con
          bg-cover bg-no-repeat
          md:bg-center
          bg-left
          pb-12
          md:pb-0
        "
        v-bind:style="[
          data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
        ]"
      >
        <div class="container">
          <div class="smd:w-7/12 w-full md:text-left text-center">
            <p
              class="
                uppercase
                text-customcolor-96
                py-2
                px-5
                sxl:py-4 sxl:px-8
                bg-themelight-0
                para_md
                inline-block
                rounded-full
                mb-6
              "
            >
              {{ data.Title }}
            </p>
            <div class="contentWhite">
              <h2 class="" v-if="data.LongText" v-rxhtml="data.LongText"></h2>
            </div>
            <div
              v-if="data.CTA"
              v-html="$md.render(data.CTA)"
              class="btn mt-10 font-bold inline-block md:-mb-10"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="
          main-content
          relative
          md:absolute md:right-0 md:top-0
          right-img
          w-full
          flex
          items-end
        "
      >
        <img
          class="mt-auto md:mr-0 mx-auto"
          v-if="data.HoverImage"
          v-rxlazy="data.HoverImage"
          :width="data.HoverImage.width"
          :height="data.HoverImage.height"
          :alt="data.HoverImage.alternativeText"
        />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import headParaBgblue from "./head-para-bgblue.vue";
export default {
  components: { headParaBgblue },
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .phpcallingsuper {
    .left-con {
      padding-top: 18vw;
      @screen sxl {
        padding-top: 25.54vw;
      }
    }
    .container {
      @screen xxl {
        max-width: 102.375rem;
      }
    }
    .right-img {
      @screen md {
        height: calc(100% + 0.9375rem);
        max-width: 34.48vw;
      }
      img {
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
        @screen md {
          border-top-right-radius: 0;
        }
      }
    }
  }
}
</style>