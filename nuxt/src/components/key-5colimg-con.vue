<template>
  <div
    class="rxsection-y-space key-5colimg bg-themelight-10 dark:bg-themedark-70"
  >
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="flex flex-wrap t-space-60">
        <div
          class="sxl:w-1/5 smd:w-3/12 md:w-4/12 sm:w-6/12 w-full card-main"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="card-box h-full">
            <img
              class="mx-auto mb-6 light-image"
              v-if="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              v-rxlazy="item.Icon"
            />
            <img
              class="mx-auto mb-6 dark-image"
              v-if="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              v-rxlazy="item.HoverIcon"
            />
            <p class="text-center">{{ item.Title }}</p>
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
  .key-5colimg {
    .card-main {
      &:not(:nth-child(n + 10)) > div {
        border-bottom: 0.0625rem solid #e0e0e0;
      }
      @screen sm {
        &:not(:nth-child(2n)) > div {
          border-right: 0.0625rem solid #e0e0e0;
        }

        &:not(:nth-child(n + 10)) > div {
          border-bottom: 0;
        }
      }
      @screen md {
        &:not(:nth-child(n + 10)) > div {
          border-bottom: 0.0625rem solid #e0e0e0;
        }
        &:not(:nth-child(2n)) > div {
          border-right: 0;
        }
        &:not(:nth-child(3n)) > div {
          border-right: 0.0625rem solid #e0e0e0;
        }
      }
      @screen smd {
        &:not(:nth-child(n + 10)) > div {
          border-bottom: 0;
        }
        &:not(:nth-child(3n)) > div {
          border-right: 0;
        }
        &:not(:nth-child(4n)) > div {
          border-right: 0.0625rem solid #e0e0e0;
        }
      }
      &:not(:nth-child(n + 9)) > div {
        border-bottom: 0.0625rem solid #e0e0e0;
      }
      @screen sxl {
        &:not(:nth-child(4n)) > div {
          border-right: 0;
        }
        &:not(:nth-child(5n)) > div {
          border-right: 0.0625rem solid #e0e0e0;
        }
        &:not(:nth-child(n + 9)) > div {
          border-bottom: 0;
        }
        &:not(:nth-child(n + 6)) > div {
          border-bottom: 0.0625rem solid #e0e0e0;
        }
      }

      .card-box {
        padding: 2.1875rem 1.25rem;
        @screen sxl {
          padding: 3.125rem 0.875rem;
        }
        @screen xl {
          padding: 3.125rem 2.5625rem;
        }
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
    .key-5colimg {
      .card-main {
        &:not(:nth-child(n + 10)) > div {
          border-bottom: 0.0625rem solid #4c4c4c;
        }
        @screen sm {
          &:not(:nth-child(2n)) > div {
            border-right: 0.0625rem solid #4c4c4c;
          }

          &:not(:nth-child(n + 10)) > div {
            border-bottom: 0;
          }
        }
        @screen md {
          &:not(:nth-child(n + 10)) > div {
            border-bottom: 0.0625rem solid #4c4c4c;
          }
          &:not(:nth-child(2n)) > div {
            border-right: 0;
          }
          &:not(:nth-child(3n)) > div {
            border-right: 0.0625rem solid #4c4c4c;
          }
        }
        @screen smd {
          &:not(:nth-child(n + 10)) > div {
            border-bottom: 0;
          }
          &:not(:nth-child(3n)) > div {
            border-right: 0;
          }
          &:not(:nth-child(4n)) > div {
            border-right: 0.0625rem solid #4c4c4c;
          }
        }
        &:not(:nth-child(n + 9)) > div {
          border-bottom: 0.0625rem solid #4c4c4c;
        }
        @screen sxl {
          &:not(:nth-child(4n)) > div {
            border-right: 0;
          }
          &:not(:nth-child(5n)) > div {
            border-right: 0.0625rem solid #4c4c4c;
          }
          &:not(:nth-child(n + 9)) > div {
            border-bottom: 0;
          }
          &:not(:nth-child(n + 6)) > div {
            border-bottom: 0.0625rem solid #4c4c4c;
          }
        }
      }
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>