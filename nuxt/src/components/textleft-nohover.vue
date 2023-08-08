<template>
  <div class="rxsection-y-space titlebottomborder">
    <div class="container">
      <h2 class="titleborder">{{ data.Title }}</h2>

      <div class="row t-space-60">
        <div class="bgCard-row" v-for="item in data.TitleContentList">
          <div class="bgCard">
            <h3 class="para_lg">{{ item.Title }}</h3>
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
  .titlebottomborder {
    @apply bg-themelight-20 dark:bg-themedark-0;
    .titleborder {
      @apply border-b border-solid border-themedark-0 dark:border-themedark-65 pb-2 sm:pb-5 xl:pb-6;
      @screen xsm {
        padding-bottom: 0.625rem;
      }
     
    }

    .bgCard { 
      @apply w-full text-left;
      padding: 0 0.937rem;
      h3 {
        @apply font-semibold text-left lg:pb-0 xl:text-2xl xl:leading-9;

       
        @screen sxl {
          margin-bottom: 0.625rem;
        }
      }

      .listanchor {
        @apply text-left;
        @screen xxl {
          max-width: 18.18rem;
        }
      }
    }
    .bgCard-row {
      @apply w-full sm:w-1/2 smd:w-1/3;
      .bgCard {
        @apply text-center sm:text-left;
      }
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        margin-top: 1.875rem;
      }

      @screen sm {
        &:nth-child(2) {
          @apply mt-0;
        }
      }

      @screen smd {
        &:nth-child(3) {
          margin-top: 0;
        }
        &:nth-child(n + 4) {
          margin-top: 3.125rem;
        }
      }

      @screen sxl {
        @apply w-1/4;
        &:nth-child(4) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
  