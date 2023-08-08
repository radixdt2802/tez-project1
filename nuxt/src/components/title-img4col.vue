<template >
 
  <div class="fourimg rxsection-y-space">
    <div class="container">
      
      <sectionHeading :data="data" />
      <div class="row t-space-60">
        <div
          class="md:w-1/4 sm:w-1/2 w-full px-4 cursor-pointer"
          v-for="item in data.TitleMediaList"
          @click="anchor(item.CTA)"
          :title="item.Title"
        >
          <div class="servicewrap flex items-center mx-auto w-full bg-themelight-10 dark:bg-themedark-70">
            <img
              class="mx-auto light-image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
        
            <img
            class="mx-auto dark-image"
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            :width="item.HoverIcon.width"
            :height="item.HoverIcon.height"
            :alt="item.HoverIcon.alternativeText"
          />
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
export default {
  
  props: {
    data: Object,
  },
  components: {
    sectionHeading:sectionHeading,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .fourimg {
    .light-image {
        @apply flex;
        }
        .dark-image {
        @apply hidden;
      }
    .row {
      > div {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(n + 5) {
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
        @screen md {
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            @apply mt-0;
          }
        }
      }
      .servicewrap{
         .dark-mode-image{
      @apply hidden;
    }
    .light-mode-image{
      @apply block;
  }
      }
    }
  }
 
  .dark{
    .fourimg {
        .light-image {
        @apply hidden;
        }
        .dark-image {
        @apply flex;
      }
    }
    }
}
</style>