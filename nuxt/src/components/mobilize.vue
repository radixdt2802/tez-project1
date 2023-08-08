<template>
  <div>
    <div
      class="rxsection-y-space mobilizesection beforeDark relative"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    >
      <div class="container">
        <div class="mobilize-content flex relative flex-wrap">
          <div class="content-style">
            <div class="head_xl">{{ data.Title }}</div>
            <p class="para_md">{{ data.SubTitle }}</p>
            <div class="mobize-badge">
              <div class="cntent-style flex flex-col">
                <span class="mobize-content para_md">{{ data.ShortText }}</span>

                <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
              </div>
            </div>
          </div>
          <div class="mob-image">
              <img
                class="light-image"
                v-if="data.HoverIcon"
                v-rxlazy="data.HoverIcon"
                :width="data.HoverIcon.width"
                :height="data.HoverIcon.height"
                :alt="data.HoverIcon.alternativeText"
              />
              <img
                class="dark-image"
                v-if="data.HoverImage"
                v-rxlazy="data.HoverImage"
                :width="data.HoverImage.width"
                :height="data.HoverImage.height"
                :alt="data.HoverImage.alternativeText"
              />
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
  .mobilizesection {
    @apply bg-no-repeat bg-cover;
    .mobilize-content {
      @apply flex-col md:flex-row;
      @screen md {
        @apply items-center;
      }
      .content-style {
        @apply w-full md:w-1/2 text-center;

        @screen md {
          @apply text-left;
        }

        .head_xl {
          @apply uppercase font-bold p-0;
          font-size: 9vw;
          line-height: 9vw;
          @screen xl {
            font-size: 8.5vw;
            line-height: 8.5vw;
          }
          @screen xxl {
            font-size: 8vw;
            line-height: 8vw;
          }
          @screen xxxl {
            font-size: 6.25rem;
            line-height: 6.875rem;
          }
        }
        p {
          @apply text-black font-semibold dark:text-white;
          font-size: 1.5rem;
          line-height: 1.938rem;

          @screen sxl {
            font-size: 2.75rem;
            line-height: 3.5rem;
          }
        }

        .mobize-badge {
          @apply mt-5 p-5 smd:mt-10  border-8 border-solid bg-clip-padding text-center text-white bg-primary inline-block;
          border-color: rgba(237, 237, 239, 0);
          box-shadow: 0 0 0 0.125rem #31bbae;
          @screen smd {
            padding: 1.875rem 1.25rem;
          }

          .mobize-content {
            @apply text-white p-0 overflow-hidden;
          }

          p:last-child {
            @apply text-white font-bold p-0 overflow-hidden;
            font-size: 1.5rem;
            line-height: 1.938rem;
            @screen sxl {
              font-size: 2.75rem;
              line-height: 3.5rem;
            }
          }
        }
      }
      .mob-image {
        width: 36rem;
        height: 33.25rem;
        @apply w-full md:w-1/2 h-auto;
        margin-top: 3.125rem;
        @screen sm {
          margin-left: 0.813rem;
          margin-right: 0.813rem;
        }
        @screen md {
          margin: 0;
        }
        img {
          transform: none;
          transition: transform 0.6s ease 0s;
          @apply ml-auto;
          @screen sxl {
            max-height: 74vh;
          }
        }
      }
      @screen xxxl {
        font-size: 2.75rem;
        line-height: 3.5rem;
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .mobilizesection {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
      &.beforeDark {
        &:before {
          @apply bg-opacity-75 bg-themedark-0;
        }
      }
    }
  }
}
</style>
