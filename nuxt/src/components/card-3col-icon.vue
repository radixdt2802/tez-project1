<template>
  <div
    class="rxsection-y-space card-3col-icon"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[data.VueReferenceCode == 'TWithTCML_4Box_IconTop_Center' ? 'bg-themelight-10 dark:bg-themedark-10':'']"
  >
    <div class="container z-10 relative">
      <!-- <h2 class="z-10 relative">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        class="para_md dark:text-themedark-0"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row mt-10">
        <div
          class="sxl:w-1/4 md:w-1/2 w-full px-4"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="entrust-card">
            <img
              class="light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
            <!-- <h3>{{ item.Title }}</h3> -->
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
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
   data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "md:pb-2.5 h3_sm",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .card-3col-icon {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
      &:before {
        content: "";
        @apply absolute w-full h-full bg-themedark-0 top-0 left-0 z-0;
        opacity: 0.8;
      }
      .entrust-card {
        &:hover {
          box-shadow: 0rem 0rem 6px 0rem #666, 0rem 0rem 0.5rem 0rem #333;
        }
      }
    }
  }
  .card-3col-icon {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    @apply bg-no-repeat text-center bg-cover relative z-10;
    .row {
      > div {
        &:nth-child(n + 3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen md {
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen sxl {
          &:nth-child(n + 3) {
            margin-top: 0;
          }
        }
      }
    }
    .entrust-card {
      @apply p-5 transition-all duration-300 ease-in-out bg-themelight-0 dark:bg-themedark-70 h-full dark:text-themelight-0;
      @screen sxl {
        padding: 1.875rem 2.5rem;
      }
      @screen lg {
        &:hover {
          box-shadow: 0rem 0rem 12px 0rem #a9a9a9, 0rem 0rem 2rem 0rem #e7e7e7;
          border-radius: 0.375rem;
        }
      }
      img {
        margin: 0 auto;
        margin-bottom: 1.25rem;
      }
    }
  }
}
</style>