<template >
  <div class="titlecenter-img bg-themelight-10 rxsection-y-space">
    <div class="container">
      <sectionHeading :data="data" />

      <div class="row t-space-60">
        <div
          class="lg:w-1/4 sm:w-1/2 w-full"
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
        >
          <div
            class="servicewrap flex items-center mx-auto w-full align-middle"
          >
            <img
              class="align-middle mx-auto"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
          <h3 v-if="!item.CTA" class="para_md text-center mx-auto max-w-xs">
            {{ item.Title }}
          </h3>
          <h3 v-if="item.CTA" class="para_md text-center mx-auto max-w-xs">
            <tez-link :to="item.CTA">{{ item.Title }}</tez-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
  components: {
    sectionHeading:sectionHeading,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .titlecenter-img {
    .row {
      > div {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(3),
          &:nth-child(4) {
            margin-top: 1.875rem;
          }
          &:nth-child(2) {
            @apply mt-0;
          }
        }
        @screen lg {
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            @apply mt-0;
          }
        }
      }
    }
    .servicewrap {
      background: rgba(255, 255, 255, 0.8);
      height: 7.625rem;
      width: 12rem;
      line-height: 7.5625rem;
      margin-bottom: 2rem;
      @screen sm {
        width: 14rem;
      }
      @screen sxl {
        width: 16rem;
      }
      @screen xl {
        width: 18rem;
      }
    }
  }
}
</style>