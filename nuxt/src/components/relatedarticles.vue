<template>
  <div class="overflow-hidden bloglisting container">
    
        <div class="font-normal h3 pb-6">Related Articles</div>
      <div class="row">        
        <div class="blog-size" v-for="item in data.dynamicResult" :key="item.id">
          <!-- <blogFilter
          id="blogFilter"
          :data="{
            categories: data['blog-categories'],
          }"
        /> -->
          <div class="blog-back">
            <div class="post-thumb">
              <tez-link :to="item.NavURL" :aria-label="item.Image.alternativeText">
                <img
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </tez-link>
            </div>
            <div class="post-body" v-if="item.Classification">
              <div>
                 <span  class="post-tag-container">{{ item.Classification.Title }} </span>
                 <tez-link
                  :to="item.Category[0].NavURL"
                  class="pt-0 font-14 post-category"
                >
                 in {{ item.Category[0].Title }}
                </tez-link>
              </div>
              <div class="mb-2 post-category-container">
                
              </div>
               <tez-link
                :to="item.NavURL"
                class="post-title"
                :title="item.Title"
                >{{ item.Title }}</tez-link> 
              <p class="pt-0 mb-0 featured-post-author-desc text-sm">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "short"
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <!-- <span class="span-reading-time rt-reading-time">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{ item.ReadingTime }} min read</span
                      >
                    </span> -->
                  </p>
            </div>
            <div class="post-footer">
              <div class="flex items-center  media">
                <tez-link
                  :to="item.BlogAuthor.NavURL"
                  :title="item.BlogAuthor.Name"
                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                >
                  <img
                    class="mr-3 featured-post-author-thumb"
                    v-rxlazy="item.BlogAuthor.Image"
                    width="60"
                    height="60"
                    :alt="item.Image.alternativeText"
                  />
                </tez-link>
                <div class="media-body">
                  <tez-link
                    :to="item.BlogAuthor.NavURL"
                    :title="item.BlogAuthor.Name"
                    class="mt-0 mb-0 featured-post-author-title"
                    v-if="item.BlogAuthor"
                    >{{ item.BlogAuthor.Name }}</tez-link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
export default {
  
  props: {
    data: Object
  },
    components: {
    DynamicComponent,
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
            @apply p-4 flex flex-col items-start flex-grow;
            @screen xsm {
              padding: 1.25rem;
            }

            @screen md {
              padding: 1.5rem;
            }

            @screen sxl {
              padding: 1.25rem 1.5625rem;
            }

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
              &:hover {
                transition: transform 0.6s cubic-bezier(0.11, 0, 0.31, 1),
                  -webkit-transform 0.6s cubic-bezier(0.11, 0, 0.31, 1);
                width: 100%;
              }
            }
          }
        }

        .post-footer {
          @apply border-t-2 py-3 px-4 border-solid border-white bg-themelight-10 dark:bg-themedark-65 dark:text-themelight-0 flex items-center;
          height: 86px;
          
          @screen xsm {
              padding: 0.75rem 1.25rem;
            }

            @screen md {
              padding: 0.75rem 1.5rem;
            }

            @screen sxl {
              padding: 0.75rem 1.5625rem;
            } 

          .featured-post-author-thumb {
            @apply border-2 border-solid border-primary rounded-full;
          }
          .featured-post-author-title {
            @apply font-normal text-sm;
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
