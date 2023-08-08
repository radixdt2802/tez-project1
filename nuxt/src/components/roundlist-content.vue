<template>
  <div
    class="
      rxsection-y-space
      roundlist-content
      bg-secondary
      dark:bg-themedark-40
      text-white
      contentWhite
    "
    v-bind:style="[
      data.Image
        ? { backgroundImage: 'url(' + data.Image.url + ')' }
        : '',
    ]"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row t-space-60">
        <div class="bgCard-row" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard-dot">
            <!-- <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3> 
            <h3
              class="para_lg w-full sxl:w-3/4 text-center"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3>-->
            <div v-html="sTitles[i]"></div>
            <!-- <div v-html="sTitles[i]"></div> -->
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
        <div
          v-if="data.TitleContentList"
          class="bgCard-row"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCard-dot">
            <!-- <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <!-- <h3
              class="para_lg ctaLink"
              :class="{
                contentWhite: data.VueReferenceCode == 'TCMWithTCL_Dark_6Sec',
              }"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3> -->
            <!-- <div v-html="sTitles[i]" class="h3"></div> -->
            <p v-if="item.ShortText">{{ item.ShortText }}</p>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "",
      subTitleStyle : "",
      sTitleStyle : "h3 h3_sm",
      sSubTitleStyle : ""
    }
  }
};
</script>
    <style lang="scss">
@layer utilities {
  .h3_sm {
    p {
       @apply py-0;
    }
  }
  .roundlist-content {
    &.bg-secondary {
      p {
        @apply text-themelight-0;
      }
    }
    .bgCard-dot {
      @apply h-full md:pl-12 pl-10;
      .h3 {
        @apply relative;
        font-size: 1.375rem;
        @apply leading-8;
        @screen sxl {
          font-size: 1.375rem;
          @apply leading-8;
        }
        @screen xl {
          @apply text-2xl leading-9;
        }
        @screen xxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 0.688rem;
          @screen sxl {
            top: 0.938rem;
          }
          left: -2.25rem;
        }
      }
    }
    .bgCard-row {
      @apply w-full sxl:w-4/12 md:w-6/12;
      padding: 0 0.9375rem;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }
    }
    @screen sm {
      .bgCard-row{
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-10;
        }
      }
    }
    @screen md {
      .bgCard-row {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
    @screen sxl {
      .bgCard-row {
        &:nth-child(3),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>