<template>
  <div class="rxsection-y-space whitepaper-bloglisting pb-0">
    <div class="container">
      <div class="row">
        <div
          class="blog-size"
          v-for="item in data.dynamicResult"
          :key="item.id"
        >
          <div class="blog-back">
            <div class="post-thumb">
              <tez-link :to="item.NavURL" :aria-label="item.Image.alternativeText">
             
                <img
                  class="lazyloaded "
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </tez-link>
            </div>
            <div class="post-body dark:bg-themedark-40">
              <span class="post-tag-container" v-if="item.Classification">{{
                item.Classification.Title
              }}</span>
              <div class="mb-2 post-category-container text-themedark-0" v-if="item.Category">
                <tez-link
                  v-if="item.Category.NavURL"
                  :to="item.Category.NavURL"
                  class="pt-0 font-14 post-category font-bold"
                >
                  {{ item.Category.Title }}
                </tez-link>
              </div>
              <tez-link :to="item.NavURL" class="pt-0 font-14 post-category">
                <h2 class="hover:text-primary transition-all ease-in-out duration-300">{{ item.Title }}</h2>
              </tez-link>
              <div class="mailpoet_paragraph">
                <button
                  @click="emitURLEvent(item.NavURL, item.Attachment.url)"
                  class="mt-4 btn btn_primary btn_sm"
                >
                  Download Now
                </button>
                <!-- <tez-link :to="item.NavURL" class="mt-4 btn btn_sm">Download Now</tez-link> -->
              </div>
              <!--  <div class="">
                <tcmform :url="item.Attachment" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
// import tcmform from "./tcml-form-content.vue";
export default {
  
  props: {
    data: Object,
  },
  // components: {
  //   tcmform,
  // },
  methods: {
    emitURLEvent(navURL, attachmentURL) {
      this.$root.$emit("", attachmentURL);
      return this.$tezRouter.push(navURL);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .whitepaper-bloglisting {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    a {
      @apply no-underline;
    }

    .row {
      padding: 0 0.938rem;

      .blog-size {
        @apply w-full;
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out,
          -webkit-transform 0.15s ease-in-out;
        min-height: 100%;

        @screen md {
          @apply w-1/2;
          padding: 0 0.938rem;
        }

        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 1.5rem;
        }

        @screen md {
          &:nth-child(2) {
            @apply mt-0;
          }

          &:nth-child(n + 4),
          &:nth-child(3) {
            margin-top: 3rem;
          }
        }

        .blog-back {
          @apply bg-themelight-10 flex flex-col min-h-full overflow-hidden;

          .post-body {
            @apply flex flex-col flex-grow items-start p-4;

            @screen xsm {
              padding: 1.25rem;
            }

            @screen md {
              padding: 1.5rem;
            }

            @screen sxl {
              padding: 1.25rem 1.563rem;
            }

            .mailpoet_submit {
              @apply font-semibold bg-primary text-white border-2 border-solid border-primary mt-4;

              border-radius: 1.5rem;
              padding: 0.5rem 1.25rem;
              font-size: 0.875rem;
              transition: all 0.3s;

              @screen sm {
                font-size: 1rem;
              }

              @screen smd {
                padding: 0.563rem 1.875rem;
              }

              @screen xl {
                padding: 0.563rem 1.875rem;
                font-size: 1.125rem;
              }

              &:hover {
                @apply bg-themelight-0 text-primary;
              }
            }

            .post-tag-container {
              @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0;
              font-size: 0.75rem;
              padding: 0.125rem 0.625rem;
              margin-right: 0.313rem;
              line-height: normal;

              @screen sm {
                font-size: 0.875rem;
                padding: 0.125rem 0.875rem;
              }
            }

            .post-category-container {
              @apply w-full mb-2;
              margin-top: 0.625rem;

              a {
                @apply text-primary;

                &:hover,
                &:active {
                  @apply text-themedark-0;
                  transition: 0.3s ease all;
                }
              }
            }

            .post-title {
              @apply text-themedark-0 w-full;
              font-size: 1.25rem;
              line-height: 2rem;

              &:hover,
              &:active {
                @apply text-primary;
                transition: 0.3s ease all;
              }

              @screen xxsm {
                font-size: 1.375rem;
              }

              @screen xl {
                font-size: 1.75rem;
                line-height: 2.625rem;
              }
            }

            h2 {
              font-size: 1.25rem;
              line-height: 2rem;
              @apply p-0;

              @screen xxsm {
                font-size: 1.375rem;
              }

              @screen xl {
                font-size: 1.75rem;
                line-height: 2.625rem;
              }
            }
          }

          img{
            @apply transition-all ease-in-out duration-300 transform scale-100  hover:scale-105;
          }
        }

        .post-footer {
          padding: 1.25rem 1.563rem;
          @apply border-t-2 border-solid border-white bg-themelight-10;

          p {
            font-size: 0.875rem;
            line-height: 1.5rem;
          }

          .featured-post-author-thumb {
            @apply border-2 border-solid border-primary;

            border-radius: 50%;
          }

          .featured-post-author-title {
            &:hover,
            &:active {
              @apply text-primary;
              transition: 0.3s ease all;
            }
          }
        }
      }
    }
    .btn.btn_sm {
      border-radius: 1.5rem;
    }
  }
}
</style>