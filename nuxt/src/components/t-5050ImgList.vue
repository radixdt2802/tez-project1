<template>
  <div class="t-5050imglist rxsection-y-space">
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
          class="image-content-section row relative smd:static"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="imagespace smd:w-1/2 w-full px-4 static smd:relative">
            <div
              class="
                imageSpaceBefor
                -z-1
                sxl:hidden
                block
                w-full
                absolute
                h-full
                top-0
                left-0
                right-0
                bg-cover bg-no-repeat bg-center
              "
              v-bind:style="[
                item.Image
                  ? { backgroundImage: 'url(' + item.Image.url + ')' }
                  : '',
              ]"
            ></div>
            <div class="image-area">
              <img
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                :alt="item.Image.alternativeText"
                class="sxl:block hidden w-full"
              />
            </div>
          </div>
          <div class="content-area text-left smd:w-1/2 w-full p-4 smd:p-8">
            <div
              :class="{ detail: data.VueReferenceCode !== 'QA_FullImgList' }"
            >
              <!-- <h3 class="p-0">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                v-if="item.ShortText"
                v-rxhtml="item.ShortText"
                class="my-5 para_md"
              ></div>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="listitems square_list list_sm py-0"
                :class="{ noBs: data.VueReferenceCode == 'QA_FullImgList' }"
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
  mixins: [titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "h3 p-0",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .t-5050imglist {
    .alternatemedialist {
      .image-content-section {
        padding: 0.9375rem;
        margin-top: 1.25rem;
        @apply md:p-5 relative;
        &:first-child {
          @apply mt-0;
        }

        @screen smd {
          @apply border-0 p-0 mt-0;
          &:last-child {
            @apply pb-0 border-b-0;
          }
        }
        @screen sxl {
          margin-top: 3.75rem;
        }
        .content-area {
          @apply items-center flex dark:bg-opacitybg-30;
          background: rgba(245, 245, 245, 0.94);
          @screen smd {
            @apply bg-transparent dark:bg-transparent;
          }

          .detail {
            ul {
              @apply flex flex-wrap;
              li {
                @apply mb-0 text-lg w-full md:w-1/2 smd:w-full sxl:w-1/2;
              }
            }
          }
        }
        &:nth-child(even) .imagespace {
          order: 1;
        }
      }
    }
  }
}
</style>