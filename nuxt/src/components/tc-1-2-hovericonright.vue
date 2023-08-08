<template>
  <div
    class="communicationMain rxsection-y-space beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[data.Image ? 'bg-no-repeat bg-cover' : 'bg-secondary']"
  >
    <div class="overlayBg hidden smd:block z-10"></div>
    <div class="fluidContainer relative">
      <div class="row">
        <div class="col1-2">
          <div class="tcBlock">
            <!-- <div class="h2 text-white">{{ data.Title }}</div> -->
            <div v-html="title"></div>
            <div class="para_md contentWhite" v-if="data.LongText" v-rxhtml="data.LongText"></div>
          </div>
        </div>
        <div class="col1-2 relative">
          <div class="overlayBg block smd:hidden"></div>
          <div class="iconBlock">
            <!-- <div class="h2 text-white">{{ data.SubTitle }}</div> -->
            <div v-html="subTitle"></div>
            <div class="flex flex-wrap contentWraper">
              <div class="col-3" v-for="item in data.TitleContentMediaList">
                <div class="iconWrap">
                  <img v-rxlazy="item.Icon" :width="item.Icon.width" :height="item.Icon.height" />
                  <img
                    v-rxlazy="item.HoverIcon"
                    class="hoverIcon"
                    :width="item.HoverIcon.width"
                    :height="item.HoverIcon.height"
                  />
                </div>
                <p class="text-white">{{ item.Title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-white",
      subTitleStyle: "h2 text-white"
    }
  },
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .communicationMain {
    @apply bg-no-repeat bg-secondary relative overflow-hidden;
    background-size: 0;
    @screen smd {
      @apply relative overflow-hidden bg-contain;
      background-position: 0% 23%;
    }
    .col1-2 {
      @apply smd:w-1/2 w-full px-4 z-10 relative;
      &:last-child {
        @apply xsm:py-5 xsm:px-4 pt-8 md:pt-10 smd:pt-0;
      }
      &:first-child {
        @apply xsm:py-5 xsm:px-4 pb-8 md:pb-10 smd:pb-0;
      }
    }
    .tcBlock {
      @apply pr-4 ml-auto max-w-full;
      @screen sxl {
        @apply pr-10;
        max-width: 90%;
      }
    }
    .iconBlock {
      @apply pl-0;
      @screen sxl {
        @apply pl-10;
      }
      .col-3 {
        @apply sxl:w-1/3 smd:w-1/2 md:w-1/3 w-2/4 px-4 pt-5 sxl:pt-10 pb-4;
      }
      .contentWraper {
        @apply text-center;
        > div {
          @apply pb-0;
        }
        @screen sxl {
          > div:nth-child(n + 3) {
            @apply pb-0;
          }
        }
      }
      .iconWrap {
        @apply inline-block w-auto relative p-3 transition-all ease-in-out duration-300;
        max-width: 4.063rem;
        @screen md {
          @apply max-w-none;
        }
        .hoverIcon {
          @apply absolute opacity-0;
          top: 0.75rem;
        }
      }
      > div > div:hover {
        .iconWrap {
          @apply bg-white rounded-md transition-all ease-in-out duration-300;
          .hoverIcon {
            @apply opacity-100;
            max-width: 2.563rem;
            @screen md {
              @apply max-w-none;
            }
          }
          img:not(.hoverIcon) {
            @apply opacity-0;
          }
        }
      }
    }
    .overlayBg {
      @apply bg-primary dark:bg-themedark-40 left-50 transform absolute -translate-x-1/2 top-0 -z-1;
      height: 140%;
      width: calc(100vw + 2px);
      @screen smd {
        @apply bg-primary transform-none absolute left-auto right-0 w-1/2 top-0  h-full z-10;
      }
    }
    .fluidContainer {
    @apply ml-auto mr-auto pl-5 pr-5 w-full;
    @screen xl {
      @apply pl-8 pr-8;
    }
    max-width: 102.375rem;
  }
  }
}
</style>