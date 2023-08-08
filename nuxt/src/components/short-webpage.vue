<template>
  <div class="shortDetail rxsection-b-space">
    <div class="shortDetailInner">
      <div class="container">
        <div class="row">
          <div class="px-4 shortDetailContent mx-auto">
            <h1>{{ data.Title }}</h1>
            <div class="pb-4" v-html="$md.render(data.ShortText ? data.ShortText : '')"></div>
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
            />
            <div class="shortDetailInner-main ">
              <div class="list_sm circle_list" v-rxhtml="data.LongText"></div>
            </div>
          </div>
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
  .shortDetailInner {
    .shortDetailContent {
      @apply w-full px-4 smd:pr-16;
      @screen smd {
        width: 70%;
      }
      .post-category-container {
        @apply w-full mb-2;
        a {
          @apply text-primary font-semibold no-underline;
          &:hover,
          &:active {
            @apply text-themedark-0;
            transition: 0.3s ease all;
          }
        }
      }
      h1 {
        @apply font-poppins font-medium p-0 my-4;
        font-size: 1.625rem;
        line-height: 2.375rem;
        @screen xxsm {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }

        @screen xsm {
          font-size: 1.875rem;
          line-height: 2.625rem;
        }

        @screen md {
          font-size: 2rem;
          line-height: 2.75rem;
        }

        @screen smd {
          font-size: 2.125rem;
          line-height: 3rem;
        }

        @screen sxl {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
      }
      .shortDetailInner-main {
        @apply mt-5;
        @screen md {
          margin-top: 3.125rem;
        }
        p {
          @apply m-0 p-0 pb-5 font-poppins font-normal;
          strong {
            @apply font-semibold;
            line-height: 1.3125rem;
          }
        }
        ul{
          @apply pb-5;
        }
        p,
        li {
          font-size: 1.0625rem;
          line-height: 1.75rem;
          letter-spacing: 0.0437rem;
          word-break: break-word;
          @screen xxl {
            font-size: 1.3125rem;
            line-height: 2.375rem;
          }
        }
        h2 {
          @apply text-themedark-0 dark:text-themedark-75 text-2xl leading-9 mt-3 mb-5 p-0 font-medium;
          @screen xsm {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen smd {
            font-size: 1.75rem;
            @apply leading-10;
          }
          @screen sxl {
            @apply text-3xl;
            line-height: 2.875rem;
          }
        }
        blockquote {
          @apply border-t-2 border-b-2 border-solid border-themelight-10 relative font-normal bg-no-repeat;
          background-size: 2.125rem;
          background-position: 0.375rem 1.25rem;
          padding: 0.9375rem 0.9375rem 0.9375rem 2.875rem;
          margin-top: 0.625rem;
          @screen md {
            margin: 1.25rem 0 1.875rem;
          }
          font-family: "roboto-slab-regular";
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/quote_orange_70cb1ad6fb.svg");
          @screen xsm {
            padding: 0.9375rem 0.9375rem 0.9375rem 3.25rem;
            background-size: 2.5rem;
          }
          @screen md {
            padding: 0.9375rem 0.9375rem 0.9375rem 3.75rem;
            background-size: 2.8125rem;
            background-position: 0 1rem;
          }
          p {
            padding: 10px 0;
            a {
              display: inline-block;
            }
          }
          h6 {
            font-size: 1.0625rem;
            line-height: 1.75rem;
            letter-spacing: 0.0437rem;
            word-break: break-word;
            @screen xxl {
              font-size: 1.3125rem;
              line-height: 2.375rem;
            }
            @apply relative bg-no-repeat font-poppins;
            &::before {
              content: "";
              @apply absolute bg-no-repeat bg-themelight-0;
              width: 2.8125rem;
              height: 2.8125rem;
              background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/ol_Twitter_ac77858616_5af0edb1fb.svg");

              left: -2.5rem;
              background-size: 2.1875rem;
              @screen xsm {
                left: -3.125rem;
                background-size: 2.5rem;
              }
              @screen md {
                left: -3.75rem;
                background-size: 2.8125rem;
              }
            }
          }
        }
        h3 {
          @apply p-0 smd:pt-5 xxsm:pt-2  m-0 font-medium;
          margin-bottom: 0.625rem;
          font-size: 1.3125rem;
          line-height: 2rem;
          @screen xsm {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
          @screen md {
            font-size: 1.4375rem;
            line-height: 2.1875rem;
          }
          @screen smd {
            @apply text-2xl leading-9;
          }
        }
        a {
          @apply font-medium font-poppins text-customcolor-75;
        }
      }
    }
  }
}
</style>