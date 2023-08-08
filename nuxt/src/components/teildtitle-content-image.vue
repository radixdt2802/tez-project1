<template>
  <div class="headingcontentimage rxsection-y-space">
    <div class="container">
      <div class="width-style">
        <div class="row">
          <div class="content-area w-full smd:w-2/4 px-4">
            <div class="heading-border">
              <!-- <h2>{{data.Title}}</h2> -->
              <div v-html="title"></div>
            </div>
            <div class="quelist">
              <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
            </div>
          </div>
          <div class="image-area w-full smd:w-2/4 px-4">
            <img
              v-rxlazy="data.Image"
              alt="quotewhite"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .headingcontentimage {
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
      .content-area {
        .heading-border {
          /* @apply w-full;
                @screen smd{
                   @apply w-1/4;
                } */
          h2, .h2 {
            font-size: 1.5rem;
            line-height: 2.125rem;
            @apply border-l-2 sm:border-l-4 border-solid border-primary pb-0;
            padding-left: 0.625rem;
            margin-bottom: 0.9375rem;
            @screen xxsm {
              font-size: 1.6875rem;
              line-height: 2.3125rem;
            }
            @screen sm {
              font-size: 1.875rem;
              line-height: 2.625rem;
              padding-left: 0.9375rem;
              margin-bottom: 1.5625rem;
            }
            @screen md {
              font-size: 2.125rem;
              line-height: 2.875rem;
            }

            @screen smd {
              font-size: 2.375rem;
              line-height: 3.125rem;
            }
            @screen sxl {
              font-size: 2.5rem;
              line-height: 3.25rem;
            }
            @screen xl {
              font-size: 2.75rem;
              line-height: 3.5rem;
            }
          }
        }
        .quelist {
          /* @apply w-full;
                @screen smd{
                   @apply w-3/4;
                } */
          h3 {
            font-size: 1.25rem;
            line-height: 1.875rem;
            margin-bottom: 0.9375rem;
            @screen sm {
              font-size: 1.375rem;
              line-height: 2rem;
            }
            @screen md {
              font-size: 1.25rem;
              line-height: 1.875rem;
              margin-bottom: 1.375rem;
            }

            @screen smd {
              font-size: 1.375rem;
              line-height: 2rem;
            }
            @screen lg {
              @apply pb-0;
            }
            @screen sxl {
            }
            @screen xl {
              font-size: 1.625rem;
              line-height: 2.375rem;
            }
          }
          p {
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: 0.9375rem;
            padding-top: 0.5rem;
            @apply pb-0;
            @screen xsm {
              font-size: 1.0625rem;
              line-height: 1.75rem;
            }
            @screen md {
              font-size: 1.125rem;
              line-height: 1.875rem;
              margin-bottom: 0.75rem;
            }
            @screen smd {
              margin-bottom: 1.375rem;
            }
            &:last-child {
              @apply mb-0;
            }
          }
        }
      }
      .image-area {
        img {
          padding-top: 1.5rem;
          @screen smd {
            padding-top: 0;
          }
        }
      }
    }
  }
}
</style>