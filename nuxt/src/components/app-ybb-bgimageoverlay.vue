<template>
  <div
    class="rxsection-y-space t-three-dot-bgoverlay"
    :class="{
      'bg-themelight-10 dark:bg-themedark-10': data.TitleContentList,
      'bg-secondary contentWhite': data.TitleContentMediaList,
    }"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row t-space-60">
        <div class="bgCard-row" v-for="item in data.TitleContentMediaList">
          <div class="bgCard-dot">
            <h3 class="para_lg">{{ item.Title }}</h3>
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
          v-for="item in data.TitleContentList"
        >
          <div class="bgCard-dot">
            <h3 class="para_lg">{{ item.Title }}</h3>
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
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .t-three-dot-bgoverlay {
    &.bg-secondary {
      p {
        @apply text-themelight-10;
      }
    }
    .bgCard-dot {
      @apply h-full;
      padding-left: 3.125rem;
      h3 {
        @apply relative;
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 0.625rem;
          @screen lg {
            top: 0.8125rem;
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
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-10;
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