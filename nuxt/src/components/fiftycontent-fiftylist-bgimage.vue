<template>
  <div
    class="rxsection-y-space fiftycontent-list contentWhite beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="flex flex-wrap relative">
        <div class="w-full smd:w-5/12 p-0 smd:px-4">
          <!--h2 class="titlebar">{{ data.Title }}</h2> !-->
          <div v-html="title"></div>
          <div
            class="parabar"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="content-list w-full t-space-40 smd:w-7/12">
          <div class="bgCard-row">
            <div
              class="bgCard flex flex-wrap"
              v-for="(item,i) in data.TitleContentMediaList"
            >
              <div
                class="
                  imageblock
                  mt-2
                  relative
                  mr-4
                  w-full
                  sxl:w-1/5
                  mb-4
                  smd:mb-0
                  hoverIconVisible
                "
              >
                <img
                  class="transition-all duration-300 ease-in-out"
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                />
                <img
                  v-if="item.HoverIcon"
                  class="hoverIcons"
                  :width="item.HoverIcon.width"
                  :height="item.HoverIcon.height"
                  v-rxlazy="item.HoverIcon"
                />
              </div>
              <div class="contentdetails w-full sxl:w-4/5">
                <!--<h3 class="h3_sm">{{ item.Title }}</h3>-->
                <div v-html="sTitles[i]"></div>
                <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
              </div>
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
      titleStyle : "h2 titlebar",
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer components {
  .fiftycontent-list {
    @apply bg-no-repeat bg-cover;
    .parabar {
      p {
        @screen smd {
          font-size: 1.375rem;
        }
      }
    }
    .content-list {
      @screen smd {
        padding: 0 0.9375rem 0 3.4375rem;
      }
      .bgCard {
        background: rgba(255, 255, 255, 0.1);
        @apply  p-5 smd:p-0 smd:bg-transparent;

        &:not(:last-child) {
          margin-bottom: 2.1875rem;
        }
        .imageblock {
          @screen smd {
            width: 2.5625rem;
          }
        }
        .contentdetails {
          @screen smd {
            width: 90%;
          }
        }
        .hoverIcons {
          @apply absolute opacity-0 invisible transition-all duration-300 ease-in-out top-0;
          transform: translateY(0);
        }
        &:hover {
          img {
            @apply opacity-0 invisible;
            transform: translateY(-0.3125rem);
          }
          .hoverIcons {
            @apply opacity-100 block visible;
            transform: translateY(-0.3125rem);
          }
        }
      }
    }
  }
}
</style>
  