<template>
  <div
    class="
      software-upgrade
      bg-secondary
      dark:bg-themedark-70
      contentWhite
      rxsection-y-space
      smd:py-0
      relative
    "
  >
    <div class="flex flex-wrap items-center">
      <div
        class="
          sxl:w-4/12
          smd:w-1/2
          w-full
          px-4
          margin-left
          left-con
          smd:mb-0
          mb-16
          smd:text-left
          text-center
        "
      >
        <div class="h2">{{ data.Title }}</div>
     
        <div
          class="relative"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="smd:w-1/2 w-full margin-left">
        <div class="flex flex-wrap right-con">
          <div
            class="xsm:w-8/12 w-1/2 sm:w-1/2 h-auto mx-auto"
            v-for="item in data.TitleContentMediaList"
          >
            <div
              class="aspect h-full bg-cover bg-center"
              v-if="item.VueReferenceCode === 'Bg_Img'"
              v-bind:style="[
                item.Image
                  ? { backgroundImage: 'url(' + item.Image.url + ')' }
                  : '',
              ]"
            >
              <img
                class="opacity-0"
                v-rxlazy="retailChannelImage"
                width="90"
                height="90"
              />
              <h3 class="opacity-0">{{ item.Title }}</h3>
              <div
                class="opacity-0"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
            <div
              class="bg-primary text-center aspect mx-auto block"
              v-if="item.VueReferenceCode !== 'Bg_Img'"
            >
              <img
                v-if="item.Icon"
                class="mx-auto mb-8 xl:mb-5"
                v-rxlazy="retailChannelImage"
                width="90"
                height="90"
              />
              <h3 class="sxl:pb-0 xl:pb-2">{{ item.Title }}</h3>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  data(){
return {
retailChannelImage:"https://d2ms8rpfqc4h24.cloudfront.net/retail_omnichannel_b932ccb6c3.svg"
  }
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer components {
  .software-upgrade {
    &:after {
      @apply sxl:block hidden text-opacitybg-55  absolute left-0 z-0 font-poppins font-semibold;
      content: "ENGAGE";
      @screen sxl {
        bottom: 11.25rem;
        font-size: 12vw;
      }
      @screen xxxl {
        font-size: 15rem;
      }
      line-height: 15rem;
    }
    .left-con {
      > div {
        &:last-child {
          padding-bottom: 1.875rem;
          &:after {
            @apply absolute inline-block bottom-0 left-0 bg-primary smd:right-100 right-0 mx-auto;
            content: "";
            width: 6.25rem;
            @screen sxl {
              width: 4.6875rem;
            }
            height: 0.1875rem;
          }
        }
      }
    }
    .right-con {
      > div {
        &:not(:nth-child(3)) {
          @apply smd:block hidden;
        }
      }
    }
    @screen sxl {
      .margin-left {
        margin-left: 8.33333%;
      }
    }
    .aspect {
      padding: 10% 1.25rem;
      @screen smd {
        padding: 20% 1.25rem;
      }
      img {
        max-width: 3.75rem;
        @screen sxl {
          max-width: 100%;
        }
      }
    }
  }
}
</style>