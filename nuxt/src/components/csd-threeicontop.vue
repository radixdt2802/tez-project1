<template>
  <div class="rxsection-y-space csd-threeicontop">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row card_structure t-space-60">
        <div
          class="w-full smd:w-1/3 smd:mt-0 mt-8 px-4 text-center"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="bg-themelight-10 smd:bg-transparent p-5 smd:p-0">
            <img
              class="mx-auto mb-5"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />

            <h3 class="para_lg p-0" v-if="!item.CTA">{{ item.Title }}</h3>
            <h3
              v-if="item.CTA"
              class="para_lg p-0"
              v-html="$md.render(item.CTA)"
            ></h3>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
}
</style>