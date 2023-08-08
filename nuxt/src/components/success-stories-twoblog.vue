<template>
  <div class="success-stories-blogtwolist">
    <div class="container">
      <div class="border-b border-customcolor-60 border-solid pb-7 md:pb-10">
        <div class="row">
          <div
            class="blog-size cursor-pointer"
            v-for="item in data.TitleContentMediaList"
            :title="item.Title"
            @click="anchor(item.CTA)"
          >
            <div class="blog-back">
              <div class="post-thumb">
                <img
                  v-rxlazy="item.Image"
                  class="w-full"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.Image.alternativeText"
                />
              </div>
              <div class="post-body">
                <tez-link :to="item.CTA" class="nuxt-anchore">
                  {{ item.Title }}
                </tez-link>
              </div>
            </div>
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
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .success-stories-blogtwolist {
    a {
      @apply no-underline font-semibold text-xl leading-8;
      &:hover {
        @apply text-primary dark:text-primary;
        transition: 0.3s all ease;
      }
      @screen xxsm {
        font-size: 1.375rem;
      }
      @screen xl {
        font-size: 1.75rem;
        line-height: 2.625rem;
      }
    }

    .row {
      padding: 0 0.938rem;

      .blog-size {
        @apply w-full mt-6 md:mt-8;
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
        min-height: 100%;
        @screen md {
          @apply w-1/2;
          padding: 0 0.938rem;
        }
        .blog-back {
          @apply bg-themelight-10 flex flex-col h-full;
          transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;

          .post-body {
            @apply flex flex-col flex-grow items-start p-4 dark:bg-themedark-10;
            @screen xsm {
              padding: 1.25rem;
            }

            @screen md {
              padding: 1.5rem;
            }

            @screen sxl {
              padding: 1.25rem 1.563rem;
            }

            .post-tag-container {
              @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0;
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
          }
          &:hover {
            .post-thumb {
              img {
                transform: scale(1.1, 1.1);
                transition: all ease-in-out 0.4s;
              }
            }
          }
          .post-thumb {
            overflow: hidden;
            img {
              transform: scale(1, 1);
              transition: all ease-in-out 0.4s;
            }
          }
        }
      }
    }
  }
}
</style>