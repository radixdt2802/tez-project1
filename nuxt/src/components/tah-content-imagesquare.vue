<template>
  <div
    class="tah-contimages rxsection-y-space smd:py-0 relative beforeDarkSecondary"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="squarestucture smd:flex smd:flex-wrap relative">
      <div class="w-full smd:w-1/2 floating-heading text-center">
        <!-- <h2 class="dark:text-themelight-0">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>

      <div
        class="
          rightimageclub
          w-full
          sm:justify-evenly
          smd:w-1/2
          flex flex-wrap
          contentWhite
        "
      >
        <div
          v-for="(item, index) in data.TitleContentMediaList"
          :class="[
            item.VueReferenceCode == 'Bg_Image'
              ? 'w-1/2 squareimage-one hidden smd:block'
              : 'squrecontent-second  text-center',
          ]"
          v-bind:style="[
            item.Image
              ? { backgroundImage: 'url(' + item.Image.url + ')' }
              : '',
          ]"
        >
          <img
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
            class="mx-auto mb-8"
          />
          <div class="h3" v-if="item.Icon">{{ item.Title }}</div>
          <!-- <div v-html="sTitles[i]"></div> -->
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
    titleStyle : "h2 dark:text-themelight-0"
    }
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .tah-contimages {
    @screen sm {
      background-size: 100% auto;
    }
    @screen smd {
      background-size: 50% auto;
    }
    background: #f0f7fd no-repeat;
    @apply relative overflow-hidden bg-cover;
    background-position: bottom -2.1875rem left 0;

    .squarestucture {
      .floating-heading {
        @screen sm {
          padding-bottom: 3.75rem;
        }
        @screen smd {
          padding-top: 7.5rem;
          @apply pb-0;
        }
        @screen sxl {
          @apply w-4/12;
          margin-left: 8.33333%;
        }

        @apply px-4;
      }
      .rightimageclub {
        @screen sxl {
          @apply w-1/2;
          margin-left: 8.33333%;
        }
        .squareimage-one,
        .squareimage-four {
          padding: 5vw 1.25rem;
          @apply text-center bg-center bg-cover bg-no-repeat transition-all ease-in-out duration-300;
        }
        .squrecontent-second,
        .squrecontent-third {
          @apply text-white mx-auto mt-8 text-center bg-center bg-cover bg-no-repeat;
          padding: 5vw 1.25rem;
          max-width: 85%;
          @screen sm {
            max-width: 45%;
            padding: 1.875rem 1.25rem;
            @apply mt-0;
          }
          @screen smd {
            max-width: 50%;
            padding: 3vw 1.25rem;
          }
          @screen sxl {
            padding: 4vw 1.25rem;
          }
          @screen xl {
            padding: 5vw 1.25rem;
          }
        }
        .squrecontent-second {
          background-color: rgba(42, 172, 187, 0.94);
          @apply dark:bg-themedark-70;
          &:hover {
            @apply bg-secondary dark:bg-themedark-40 transition-all ease-in-out duration-300;
          }
        }
        // .squrecontent-third {
        //   background-color: rgba(49, 187, 174, 0.85);
        //   &:hover {
        //     @apply bg-themedark-40 transition-all ease-in-out duration-300;
        //   }
        // }
      }
    }
  }
}
</style>
  