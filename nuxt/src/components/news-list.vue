<template>
<div>
<div class="bloglisting">
    <div class="container">
      <div class="row">
        <div class="blog-size" v-for="item in data.dynamicResult">
          <div class="blog-back">
            <div class="post-thumb">
              <a :href="item.NavURL" :aria-label="item.Image.alternativeText">
                <img
                  class="lazyloaded"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </a>
            </div>
            <div class="post-body">
              <span
                class="post-tag-container"
                v-if="item.Classification && item.Classification.Title"
                >{{ item.Classification.Title }}</span
              >
              <div
                class="post-category-container mb-2"
                v-if="item.Category"
                v-for="items in item.Category"
              >
                <a :href="items.NavURL" class="font-14 post-category pt-0">{{
                  items.Title
                }}</a>
              </div>
              <tez-link
                :to="item.NavURL"
                class="post-title"
                :title="item.Title"
                >{{ item.Title }}</tez-link>
            </div>
            <div class="post-footer">
              <div class="media flex items-center mt-auto">
                <!-- <a
                  href="https://radixweb.com/author/pratik-mistry"
                  title="Pratik Mistry"
                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                >
                  <img
                    class="
                      mr-3
                      rounded-circle
                      featured-post-author-thumb
                      ls-is-cached
                      lazyloaded
                    "
                    v-rxlazy="item.BlogAuthor.Image"
                    width="60"
                    height="60"
                  />
                </a> -->
                <div class="media-body">
                  <!-- <a
                    href="https://radixweb.com/author/pratik-mistry"
                    title="Pratik Mistry"
                    class="mt-0 featured-post-author-title mb-0"
                    v-if="item.BlogAuthor"
                    >{{ item.BlogAuthor.Name }}</a
                  > -->
                  <p class="featured-post-author-desc mb-0 pt-0">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "short",
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <!-- <i class="author-time-dot fas fa-circle"></i>
                    <span class="span-reading-time rt-reading-time">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">8</span>
                      <span class="rt-label rt-postfix"> min read </span>
                    </span> -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h1>hello form news page to check if the error is resolved or not</h1> -->
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
  .bloglisting {
    margin-top: 1.875rem;
    @screen md {
      margin-top: 3.75rem;
    }
    @media only screen and (min-width: 1230px) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    a {
      @apply no-underline;
    }

    .row {
      .blog-size {
        @apply w-full;
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out,
          -webkit-transform 0.15s ease-in-out;
        min-height: 100%;
        padding: 0 0.938rem;
        @screen md {
          @apply w-1/2;
        }
        @screen smd {
          @apply w-1/3;
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
            margin-top: 1.5rem;
          }
        }
        @screen smd {
          &:nth-child(3),
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4) {
            margin-top: 3rem;
          }
        }

        .blog-back {
          @apply bg-themelight-10 flex flex-col h-full dark:bg-themedark-10;

          .post-body {
            @apply p-4 xsm:p-5 md:p-6 sxl:py-5 sxl:px-6 flex flex-col items-start flex-grow;
            /* @screen xsm {
              padding: 1.25rem;
            }

            @screen md {
              padding: 1.5rem;
            }

            @screen sxl {
              padding: 1.25rem 1.5625rem;
            } */

            .post-tag-container {
              @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0 font-medium;
              font-size: 0.75rem;
              padding: 0.125rem 0.625rem;
              margin-right: 0.313rem;
              line-height: normal;
              margin-bottom: 0.625rem;

              @screen sm {
                font-size: 0.875rem;
                padding: 0.125rem 0.875rem;
              }
            }

            .post-category-container {
              @apply w-full mb-2;
              a {
                @apply text-primary font-semibold;
                &:hover,
                &:active {
                  @apply text-themedark-0;
                  transition: 0.3s ease all;
                }
              }
            }

            .post-title {
              @apply w-full font-medium;
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
          }
          .post-thumb {
            img {
              @screen lg {
                &:hover {
                  transition: transform 0.6s cubic-bezier(0.11, 0, 0.31, 1),
                    -webkit-transform 0.6s cubic-bezier(0.11, 0, 0.31, 1);
                  width: 100%;
                }
              }
            }
          }
        }

        .post-footer {
          @apply border-t-2 border-solid border-white py-5 px-4 xsm:px-5 md:px-6  bg-themelight-10 dark:bg-themedark-65 dark:text-themelight-0;
          
          
          .featured-post-author-thumb {
            @apply border-2 border-solid border-primary rounded-full;
          }
          .featured-post-author-title {
            @apply font-semibold;
            &:hover,
            &:active {
              @apply text-primary;
              transition: 0.3s ease all;
            }
          }
          .featured-post-author-desc {
            @apply text-sm leading-6 font-poppins p-0;
            letter-spacing: 0.0175rem;
          }
        }
      }
    }
  }
}
</style>