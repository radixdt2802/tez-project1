<template>
  <div
    class="
      rxsection-y-space
      au-tealbg-3box
      dark:bg-themedark-70
      bg-themelight-20
    "
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row sm:pt-5">
        <div
          class="bgBoxrow sm:mt-10 mt-8 w-full smd:w-4/12 px-4"
          v-for="item in data.TitleContentList"
        >
          <div class="bgBox p-8 bg-opacitybg-0 h-full dark:bg-themedark-0">
            <h3 class="h3_sm relative pb-4 mb-4" v-if="!item.CTA">
              {{ item.Title }}
            </h3>
            <h3
              class="h3_sm"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3>
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
import mountedMixin from "../mixins/mounted.mixin";
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
  .au-tealbg-3box {
    .bgBox {
      h3 {
        &:after {
          content: "";
          @apply absolute left-0 bottom-0 bg-themedark-0 dark:bg-themelight-0;
          height: 0.1875rem;
          width: 3.75rem;
        }
      }
      p {
        @apply p-0 dark:text-themedark-75;
      }
    }
  }
}
</style>