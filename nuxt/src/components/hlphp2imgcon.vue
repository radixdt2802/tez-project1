<template>
  <div class="hlphp2imgcon rxsection-t-space pt-0 smdL">
    <div class="flex flex-wrap">
      <div class="smd:w-1/2 w-full order-1 smd:-order-1 left-img flex-grow">
        <img
          class="mx-auto"
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
          :alt="data.Image.alternativeText"
        />
      </div>
      <div class="right-img smd:order-1 smd:w-1/2 w-full">
        <img
          class="w-full smd:mt-10 mb-16"
          v-if="data.HoverImage"
          v-rxlazy="data.HoverImage"
          :width="data.HoverImage.width"
          :height="data.HoverImage.height"
          :alt="data.HoverImage.alternativeText"
        />
        <h3 class="font-normal text-center mx-auto px-4 md:px-0 smd:mb-0 mb-5">
          {{ data.Title }}
        </h3>
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
  .hlphp2imgcon {
    .left-img {
      img {
        border-top-left-radius: 1rem;
        @screen smd {
          border-left: 0;
          border-top-left-radius: 0;
        }
        border-top-right-radius: 1rem;
        border: 0.3125rem solid #0ac5dd;
        border-bottom: 0;
      }
    }
    h3 {
      max-width: 41.875rem;
    }
    .left-img {
      img {
        max-width: 44.25rem;
        @screen smd {
          max-width: 100%;
        }
        width: 100%;
      }
    }
  }
}
</style>