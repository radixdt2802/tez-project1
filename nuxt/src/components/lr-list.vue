<template>
  <div
    class="
      rxsection-y-space
      centerMoveImg
      bg-themelight-20
      dark:bg-themedark-65
      relative
    "
  >
    <div class="container">
      <div class="multi_component relative sxl:-mx-4 pt-0">
        <div
          class="
            image_component
            absolute
            smd:w-4/12
            smd:block
            hidden
            left-0
            right-0
            mx-auto
          "
        >
           
            <img
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
           
        </div>
        <div
          class="
            reason_content
            sm:relative
            top-0
            flex flex-wrap
            content-between
            xl:justify-between
            h-full
            md:justify-between
          "
        >
          <div
            class="content_outer mx-auto ml-0"
            v-for="item in data.TitleContentMediaList"
          >
            <div class="comp_size">
              <div
                v-html="$md.render(item.CTA ? item.CTA : '')"
                v-if="item.CTA"
                class="h3_sm ctaLink mb-2"
              ></div>
              <div
                class="h3_sm customClass"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
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
  .centerMoveImg {
    &:before {
      content: "";
      height: 50%;
      @apply bg-secondary dark:bg-themedark-70 right-0 md:h-full w-full absolute md:top-0 md:w-1/2 bottom-0;
    }

    .comp_size {
      @apply h-auto relative sm:h-full;
      p {
        @apply pb-0;
      }
      @screen sxl {
        @apply pl-12;
      }
      @screen smd {
        padding-left: 3.125rem;
      }
      .customClass {
        h3, strong {
          @apply font-semibold mt-4;
          font-size: 1.375rem;
          line-height: 2rem;
          @screen smd {
            @apply font-semibold mt-4;
            font-size: 1.375rem;
            line-height: 2rem;
          }
          @screen xl {
            @apply mt-8;
            font-size: 1.5rem;
            line-height: 2.25rem;
          }
          @screen xxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
        }
        p {
          @apply font-normal;
          font-size:1rem;
           @screen smd {
               font-size:1.125rem;
           }
        }
      }
    }
    .image_component.comp_size {
      @apply w-1/3 mx-auto px-4;
    }
    .content_outer:nth-child(even) {
      @apply sxl:px-4;
      @screen smd {
        margin-left: 33.333333%;
      }
    }
    .content_outer:nth-child(odd) {
      @apply sxl:px-4;
    }
    .content_outer {
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    .content_outer {
      &:nth-child(even) {
        h3 {
          @apply text-themelight-0;
        }
        p {
          @apply text-themelight-0;
        }
      }
      @apply w-full  xl:mb-10 p-5 smd:p-0;
      @screen lg {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 2.5rem;
        }
      }
      @screen md {
        width: 48%;
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        @apply w-2/6;
      }
      @screen sxl {
        padding: 0 1.25rem;
      }
      @screen xl {
        @apply mb-0;
      }
    }
    .image_component {
      @apply hidden smd:block sxl:w-full inset-x-0 text-center;
      top: 50%;
      transform: translateY(-50%);
      max-width: 33.33%;
      padding: 0px 1.15rem;
      img {
        height: auto;
      }
    }
  }
}
</style>