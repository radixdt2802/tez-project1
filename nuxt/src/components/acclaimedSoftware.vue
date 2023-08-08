<template>
  <div class="rxsection-t-space acclaimedSoftware">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div
        class="para_md text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div
        class="acclaimedSoftware_wrapper flex flex-wrap items-start t-space-60"
      >
        <div
          class="
            acclaimedSoftware_left
            border-4 border-solid border-themelight-10
            dark:border-themedark-65 dark:bg-themedark-0
            smd:bg-themelight-0
          "
        >
          <div v-for="item in data.TitleContentList">
            <div
              class="acclaimedSoftwareCont mt-8"
              v-if="item.VueReferenceCode == 'TC'"
            >
              <h3>{{ item.Title }}</h3>
              <div
                class="border_leftCon childH2"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="
            acclaimedSoftware_right
            bg-themelight-10
            mt-0
            ml-0
            dark:bg-themedark-70 dark:text-themelight-0
            smd:-ml-8 smd:mt-16 smd:w-2/4
          "
        >
          <div v-for="(item, index) in data.TitleContentList">
            <div
              class="acclaimedSoftwareCont mt-8"
              v-if="item.VueReferenceCode == 'TC_Right'"
              :key="item.Title + index"
            >
              <h3>{{ item.Title }}</h3>
              <div
                class="border_leftCon childH2"
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
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .acclaimedSoftware {
    .acclaimedSoftware_wrapper {
      > div {
        @apply smd:w-6/12 w-full;
        padding: 1.875rem 0.938rem;
        @screen xsm {
          padding: 1.875rem 1.25rem;
        }
        @screen sm {
          padding: 1.875rem 2.5rem;
        }
        @screen sxl {
          padding: 3.125rem;
        }
        @screen xl {
          padding: 3.75rem;
        }
      }

      .acclaimedSoftwareCont {
        h3 {
          max-width: 25.625rem;
          @screen sm {
            font-size: 1.375rem;
            @apply leading-8;
          }
          @screen smd {
            @apply text-2xl leading-9;
          }
          @screen sxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen xl {
            font-size: 2rem;
            line-height: 2.75rem;
          }
        }
        p {
          padding-top: 1.563rem;
          padding-bottom: 2.5rem;
          @apply text-left dark:text-themelight-0;
        }
        .border_leftCon {
         
          @apply p-0;
          ul {
            @apply flex items-start;
            li {
              max-width: 18.75rem;
              @apply smd:w-auto w-full relative border-l-2 border-solid border-secondary dark:border-themedark-65;
              padding-left: 0.938rem;
              @screen sxl {
                max-width: 16.875rem;
              }

              &:first-child {
                margin-right: 1.25rem;
                @screen sxl {
                  margin-right: 6.25rem;
                }
              }
              h6 {
                @apply text-primary p-0;
                strong {
                  @apply p-0 block font-normal text-themedark-0 dark:text-themelight-0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>