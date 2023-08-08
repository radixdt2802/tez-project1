
<template>
  <div class="fourColimg rxsection-y-space">
    <div class="container">
      <sectionHeading :data="data" />
    </div>
    <div class="flex flex-wrap t-space-60 squareGridblocks">
      <div
        class="md:w-1/4 w-full bg-center bg-cover"
        v-for="item in data.TitleContentMediaList"
      >
        <div
          v-if="item.VueReferenceCode === 'OnlyBg'"
          class="h-full md:bg-cover hidden md:block bg-center"
          v-bind:style="[
            item.Image
              ? { backgroundImage: 'url(' + item.Image.url + ')' }
              : '',
          ]"
        ></div>
        <div
          class="squareContent mx-auto text-center h-full bg-cover bg-center"
          v-if="item.VueReferenceCode !== 'OnlyBg'"
          v-bind:style="[
            item.Image
              ? { backgroundImage: 'url(' + item.Image.url + ')' }
              : '',
          ]"
        >
          <div class="contentOverlay md:text-themedark-0 text-themelight-0  bg-opacitybg-50 p-5">
            <h3 class="h3_sm md:text-themedark-0 text-themelight-0 ">{{ item.Title }}</h3>
            <div
              
              v-if="item.LongText"
              v-rxhtml="item.LongText"
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
  .fourColimg {
    .squareGridblocks {
      .squareContent {
        @apply p-8;
        @screen md {
          padding: 20% 0.9375rem;
          max-width: 25.75rem;
          background-image: none !important;
        }
        .contentOverlay {
          p{
            @apply text-themelight-0 md:text-themedark-0 md:dark:text-themelight-0;
          }
          @screen md {
            @apply bg-transparent p-0;
          }
        }
      }
    }
  }
}
</style>