<template>
  <div
    class="
      rxsection-y-space
      circle-centerimg
      bg-themedark-0
      contentWhite
      md:pb-40
      pb-16
      relative
      beforeSecondary
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.HoverImage.url + ')' } : '',
    ]"
  >
    <div class="container">
      <!-- <h2 class="text-center relative">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="relative">
        <div class="row mt-8">
          <div
            class="
              md:w-8/12
              ml-auto
              w-full
              md:block
              hidden
              mx-auto
              px-4
              py-40
              hexa-img
            "
          >
            <img
              class="mx-auto"
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.widthImage"
              :height="data.heightImage"
            />
          </div>
        </div>
        <div class="row hexagonal-card">
          <div
            class="
              sxl:w-3/12
              smd:w-4/12
              md:w-5/12
              w-full
              px-4
              md:absolute
              relative
              p-4
              md:py-0 md:my-0
              m-3
              bg-opacitybg-0
              md:bg-transparent
            "
            v-for="(item,i) in data.TitleContentList"
          >
            <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : "text-center relative h2",
    sTitleStyle: "h3 h3_sm"
    }
  },

};
</script>
<style lang="scss">
@layer utilities {
  .circle-centerimg {
    &::before {
      content: "";
      @apply absolute top-0 left-0 w-full h-full bg-no-repeat bg-fixed bg-center bg-cover z-0;
    }
    .hexa-img {
      img {
        width: 23.75rem;
        @apply smd:w-2/5;
      }
    }
    .hexagonal-card {
      @screen md {
        > div {
          &:nth-child(even) {
            @screen md {
              margin-left: 58.3%;
            }
            @screen smd {
              margin-left: 66.67%;
            }
          }
          &:nth-child(odd) {
            @screen smd {
              margin-left: 8.33%;
            }
          }
          &:nth-child(1),
          &:nth-child(2) {
            top: 0;
          }
          &:nth-child(3),
          &:nth-child(4) {
            top: 50%;
            transform: translateY(-50%);
            @apply md:w-3/12;
          }
          &:nth-child(3) {
            margin-left: 0;
          }
          &:nth-child(4) {
            margin-left: 78%;
          }
          &:nth-child(5),
          &:nth-child(6) {
            top: 85%;
          }
        }
      }
    }
    &.beforeSecondary {
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(40, 40, 40, 0.2);
      }
    }
  }
}
</style>