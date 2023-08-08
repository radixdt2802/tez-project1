<template>
  <div class="multimediacontentlist rxsection-y-space dark:bg-themedark-0 "
      :class="[data.VueReferenceCode == 'TCWithTCML_Contentlist-Media-ListBG-Gray' ? 'bg-themelight-10' : '']"
  >
    <div class="container">
      <div class="lg:w-4/5 w-full mx-auto text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="alternatemedialist t-space-60">
        <div
          class="flex flex-wrap image-content-section"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="
              image-area
              hidden
              smd:block
              xxl:w-1/3
              sxl:w-2/5
              smd:w-1/2
              
            "
          >
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
          <div
            class="
              content-area
              text-left
              w-full
              smd:w-1/2
              sxl:w-3/5
              xxl:w-2/3
              smd:px-4
            "
          >
            <div class="detail">
              <!-- <h3 class="pb-2">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div class="para_sm" v-if="item.ShortText" v-rxhtml="item.ShortText"></div>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="listitems square_list list_sm primary_list"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "pb-2 h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .multimediacontentlist {
    .alternatemedialist {
      .image-content-section {
        padding: 0.9375rem;
        border: 0.0625rem solid #e2e2e2;
        margin-top: 1.25rem;
        @apply md:p-5 border border-solid border-customcolor-99 dark:border-themedark-65;
        &:first-child {
          @apply mt-0;
        }

        @screen smd {
          margin-top: 3.75rem;
          @apply border-0 p-0 border-b border-solid border-customcolor-99 dark:border-themedark-65 ;
          padding-bottom: 3.75rem;

          
          &:last-child {
            @apply pb-0 border-b-0;
          }
        }
        .content-area {
          .detail {
            .listitems {
              h3 {
                font-size:1.25rem;
                line-height:1.75rem;
                
                @screen sm {
                  font-size:1.25rem;
                    line-height: 1.75rem;
                }
                @screen smd {
                   font-size: 1.375rem;
                   line-height: 2rem;
                }
                @screen xl {
                   font-size: 1.625rem;
                   line-height: 2.25rem;
                }
                @screen xxl {
                  font-size: 1.625rem;
                    line-height: 2.375rem;
                }
            }
            }
            ul {
              padding-bottom:0.75rem;
              li {
                @apply mb-0 text-lg;
              }
            }
          }
        }
        &:nth-child(even) {
          .image-area {
            order: 1;
          }
        }
      }
    }
  }
}
</style>