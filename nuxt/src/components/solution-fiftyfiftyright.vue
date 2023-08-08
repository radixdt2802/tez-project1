<template>
  <div
    class="
      sol-5050imgcontentright
      smd:bg-themelight-10
      relative
      smd:dark:bg-themedark-70
      dark:text-themelight-0
    "
  >
    <div
      class="
        bg-cover bg-no-repeat bg-center
        top-0
        right-0
        h-full
        w-full
        smd:w-1/2
        absolute
        -z-1
        smd:z-0
        beforeDark
      "
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
    ></div>
    <!-- <div class="container"> -->
      <div
        class="
          contentarea
          w-full
          smd:w-1/2
          bg-opacitybg-10
          smd:bg-transparent
          dark:bg-opacitybg-30
          smd:dark:bg-transparent
        "
      >
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>

        <div
          class="square_list noBs list_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div class="iconblock row flex flex-wrap justify-between">
          <div class="iconsingle" v-for="item in data.TitleMediaList">
            <img
              class="light-image"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-rxlazy="item.HoverImage"
              :width="item.HoverImage.width"
              :height="item.HoverImage.height"
            />
            <p class="mt-2.5">{{ item.Title }}</p>
          </div>
        </div>
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_sm crm-btn"
        ></div>
      </div>
    <!-- </div> -->
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
    titleStyle : "h2"
  }
},
};
</script>
  <style lang="scss">
@layer utilities {
  .sol-5050imgcontentright {
    .light-image {
            @apply block;
          }
          .dark-image {
            @apply hidden;
          }
    padding: 0 0;
    @apply smd:p-0;

    .contentarea {
      padding-right: 3.75rem;
      padding-left: 3.75rem;
      @apply p-4;
      @screen smd {
        padding:5.25rem 2.4375rem;
      }
      @screen sxl {
        padding:6.25rem ;
      }
      .iconblock {
        margin-top: 1.875rem;
        > div {
          &:nth-child(odd) {
            @apply border-r border-themelight-20;
          }
        }

        @screen md {
          > div {
            &:not(:last-child) {
              @apply border-r border-solid border-themelight-20;
            }
          }
        }
        @screen smd {
          margin-top: 3.75rem;
          > div {
            &:nth-child(even) {
              @apply border-0;
            }
          }
        }
        @screen sxl {
          > div {
            &:not(:last-child) {
              @apply border-r border-solid border-themelight-20;
            }
          }
        }
        .iconsingle {
          @apply px-4 xxl:px-6 text-center w-1/2 md:w-1/4 smd:w-1/2 sxl:w-1/4;
          img {
            @apply mx-auto;
          }
          
          &:nth-child(n + 4),
          &:nth-child(3) {
            margin-top: 1.875rem;
          }
          @screen md {
            &:nth-child(n + 4),
            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 0;
            }
          }
          @screen smd {
            &:nth-child(n + 4),
            &:nth-child(3) {
              margin-top: 1.875rem;
            }
          }
          @screen sxl {
            &:nth-child(n + 4),
            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 0;
            }
          }

          &:hover {
            @screen smd {
              img {
                transform: translateY(-0.3125rem);
                transition: 0.5s all ease;
              }
            }
          }
          p {
            @apply px-4 xsm:px-6 smd:px-8 sxl:px-0 overflow-hidden;
            @screen sm {
              padding: 0 3.5rem 0 3.5rem;
            }
            @screen md {
              @apply px-4;
            }
            @screen sxl {
              @apply px-0 text-base;
            }
          }
        }
      }
      .crm-btn {
        margin-top: 0.625rem;
        @apply text-center smd:text-left;
        @screen smd {
          margin-top: 2.8125rem;
        }
      }
    }
  }
  .dark{
      .sol-5050imgcontentright {
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