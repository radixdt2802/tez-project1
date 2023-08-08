<template>
  <div
    class="rxsection-y-space t-three-dot"
    :class="{
      'bg-themelight-10 dark:bg-themedark-70': data.TitleContentList,
      'bg-secondary text-white': data.TitleContentMediaList,
    }"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row">
        <div
          v-if="data.TitleContentMediaList"
          class="bgCard-row mt-8 w-full sxl:w-4/12 md:w-6/12 "
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="bgCard-dot">
            <!-- <a v-if="item.CTA" :href="item.CTA" :title="item.Title">
              <h3 class="para_lg">{{ item.Title }}</h3>
            </a>
            <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
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
          class="bgCard-row mt-8 w-full sxl:w-4/12 md:w-6/12"
          v-for="(item,i) in data.TitleContentList"
        >
          <div class="bgCard-dot">
            <!-- <a v-if="item.CTA" :href="item.CTA" :title="item.Title">
              <h3 class="para_lg">{{ item.Title }}</h3>
            </a>
            <h3 v-if="!item.CTA" class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
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
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "h3_sm"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .t-three-dot {
   
    &.bg-secondary {
      p {
        @apply text-themelight-10;
      }
    }
    .bgCard-dot {
      @apply h-full;
      padding-left: 3.125rem;
      h3,.h3_sm {
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
  }
}
</style>