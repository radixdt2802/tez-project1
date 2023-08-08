<template>
  <div class="ratingimageCustomSection">
    <div class="container">
      <div
        class="
          single-rating-block
          width-style
          flex flex-wrap
          border border-themelight-50
          p-5
          xl:p-12
          md:p-10
          sm:p-7
          justify-around
          items-center
        "
      >
        <div class="clientTestimonials lg:w-5/12 w-full px-4">
          <div class="clientVideo">
            <iframe
              width="100%"
              :src="data.GuideURL"
              frameborder="0"
              class="aspect-video"
              rel="nofollow"
            ></iframe>
          </div>
        </div>
        <div
          class="
            csd-content
            lg:w-7/12
            w-full
            lg:mt-0
            mt-6
            flex flex-wrap
            justify-evenly-center
            items-center
          "
        >
          <div
            class="sm:w-8/12 w-full px-4 sm:border-r-2 sm:border-themelight-50"
          >
            <h3 class="h3_sm rating-cmp">{{ data.Title }}</h3>
            <div
              class="para_md circle_list"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
          <div class="sm:w-4/12 pt-4 sm:pt-0 w-full px-4 light-mode-image">
            <img
              class="mx-auto"
              v-rxlazy="data.Image"
              alt="ratingimageCustomSection"
              :width="data.Image.width"
              :height="data.Image.height"
            />
          </div>
          <div class="sm:w-4/12 pt-4 sm:pt-0 w-full px-4 dark-mode-image">
            <img
              class="mx-auto"
              v-rxlazy="data.HoverImage"
              alt="ratingimageCustomSection"
              :width="data.HoverImage.width"
              :height="data.HoverImage.height"
            />
          </div>
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
   .dark {
    .ratingimageCustomSection {
        .light-mode-image {
          display: none;
        }
        .dark-mode-image {
          display: block;
        }
      
    }
  }
  .ratingimageCustomSection {
    .width-style {
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;

      @media (min-width: 576px) {
        max-width: calc(100% - 1.25rem);
        width: 74.375rem;
      }
      @screen xl {
        width: 74.375rem;
      }
    }
     .light-mode-image {
          display: block;
        }
        .dark-mode-image {
          display: none;
        }
    .clientVideo {
      max-inline-size: 100%;
      block-size: auto;
      iframe {
        max-inline-size: 100%;
        @screen sxl {
          max-inline-size: unset;
        }
        &.aspect-video {
          aspect-ratio: 16 / 9;
        }
      }
    }
  }
}
</style>