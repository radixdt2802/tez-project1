<template>
  <div class="ratingimage">
    <div class="container">
      <div class="single-rating-block width-style flex flex-wrap">
        <div class="csd-content">
          <div class="quoteicon">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/quote_f111564039.svg'"
              alt="quoteicon"
            />
          </div>
          
          <div class="para_md circle_list" v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <p class="rating-cmp">{{data.Title}}</p>
          <p class="rating-by" v-if="data.SubTitle">{{data.SubTitle}}</p>
        </div>
        <div class="cot-img">
          <img
            v-rxlazy="data.Image"
            alt="ratingimage"
            :width="data.Image.width"
            :height="data.Image.height"
          />
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
  .ratingimage {
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
    .single-rating-block {
      @apply border border-solid flex flex-wrap md:justify-between;
      border-color: #b7b6b6;
      padding: 1.25rem;
      @screen sm {
        padding: 1.875rem;
      }
      @screen md {
        padding: 2.5rem;
      }
      @screen xl {
        padding: 3.125rem;
      }

      .cot-img {
        @apply w-full;
        margin-top: 1.5rem;
        @screen md{
            max-width: 25%;
            padding: 0 0.9375rem;
        }
        @screen smd {
          @apply pr-0;
        }
        img {
          @apply max-w-full h-auto;
          /* max-width: 8.125rem;
            margin-bottom: 1.5rem; */
          /* max-width:90%; */
          @screen md {
            max-width: 100%;
          }
          @screen smd {
            /* max-width:12.5rem; */
            @apply mr-0;
          }
          @apply mx-auto;
        }
      }
      .csd-content {
        @apply md:px-0 text-left w-full;
        max-width: 36.25rem;
        @screen md {
          max-width: 75%;
        }
        @screen smd {
          max-width: 36.25rem;
          width: 100%;
        }
        .quoteicon {
          img {
            max-width: 2rem;
            @apply h-auto;
            @screen md {
              @apply max-w-full;
            }
            @screen smd {
              @apply mb-1;
            }
          }
        }
        .para_md {
          font-size: 1rem;
          line-height: 1.625rem;
          margin-bottom: 0.9375rem;
          @apply pt-2;

          @screen xsm {
            font-size: 1.0625rem;
            line-height: 1.75rem;
          }
          @screen sm {
            font-size: 1.125rem;
            line-height: 1.875rem;
          }
          @screen md {
            font-size: 1.25rem;
            line-height: 2rem;
            margin-bottom: 0.75rem;
            @apply pb-0;
          }
          @screen xl {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
        }
        .rating-cmp {
          @apply font-bold pt-2;
          font-size: 1rem;
          line-height: 1.625rem;
          margin-bottom: 0.9375rem;
          @screen xsm {
            font-size: 1.0625rem;
            line-height: 1.75rem;
          }
          @screen md {
            font-size: 1.125rem;
            line-height: 1.875rem;
            margin-bottom: 0.75rem;
            @apply pb-0;
          }
        }
        .rating-by {
          font-size: 1rem;
          line-height: 1.625rem;
          color: #30bcaf;
          @apply pt-2;
          @screen xsm {
            font-size: 1.0625rem;
            line-height: 1.75rem;
          }
          @screen sm {
            font-size: 1.125rem;
            line-height: 1.875rem;
          }
        }
      }
    }
  }
}
</style>