<template>
  <div
    class="rxsection-y-space text-center"
    :class="{
      'bg-themelight-10 dark:bg-themedark-40 amplified-content':
        data.VueReferenceCode == 'CMS_GreyBg_Center_FourCol',
      'bg-themelight-0 dark:bg-themedark-0 fiveCol':
        data.VueReferenceCode == 'Top_Fiveicon_BGwhite',
    }"
  >
    <div class="container">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div v-if="data.LongText" v-rxhtml="data.LongText" class="para_md"></div>
      <div class="row t-space-40 justify-center">
        <div
          :class="{
            'sxl:w-1/4 md:w-1/2 w-full px-4':
              data.VueReferenceCode == 'CMS_GreyBg_Center_FourCol',
            'sxl:w-1/5 md:w-1/2 w-full px-4':
              data.VueReferenceCode == 'Top_Fiveicon_BGwhite',
          }"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="
              bg-card
              md:px-3
              md:py-0
              p-5
              border border-solid border-themelight-50
              md:border-none
            "
          >
            <img
              class="mx-auto mb-5 light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="mx-auto mb-5 dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
            <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
      sTitleStyle : "h3_sm md:pb-2.5",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .amplified-content {
    .row {
      > div {
        &:nth-child(n + 5),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen md {
          &:nth-child(2) {
            margin-top: 0;
          }
          @screen sxl {
            &:nth-child(3),
            &:nth-child(4) {
              margin-top: 0;
            }
          }
        }
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .fiveCol {
    .row {
      > div {
        &:nth-child(n + 5),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen md {
          &:nth-child(2) {
            margin-top: 0;
          }
          @screen sxl {
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
              margin-top: 0;
            }
          }
        }
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .fiveCol,
    .amplified-content {
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