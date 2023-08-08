<template>
  <div
    class="rxsection-y-space imgthreecard bg-opacitybg-25 dark:bg-themedark-70"
  >
    <div class="container">
      <img
        class="mx-auto pb-5 light-image"
        v-if="data.Image"
        v-rxlazy="data.Image"
        :width="data.Image.width"
        :height="data.Image.height"
        :alt="data.Image.alternativeText"
      />
      <img
        class="mx-auto pb-5 dark-image"
        v-if="data.HoverImage"
        v-rxlazy="data.HoverImage"
        :width="data.HoverImage.width"
        :height="data.HoverImage.height"
        :alt="data.HoverImage.alternativeText"
      />
      <sectionHeading :data="data" />
      <div class="row">
        <div
          class="card-row w-full sxl:w-1/3 px-4 smd:mt-16 mt-5"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="card-bg p-8 h-full bg-themelight-0 dark:bg-themedark-0">
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.width"
              class="mb-5 light-image"
            />
            <img
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.width"
              class="mb-5 dark-image"
            />
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
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
import titleMixin from '../mixins/title.mixin'; 
export default {
  mixins: [titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
		return {
		  sTitleStyle: "h3 h3_sm"
		}
	},
};
</script>

<style lang="scss">
@layer utilities {
  .dark{
      .imgthreecard{
        .dark-image{
          @apply block;
        }
        .light-image{
          @apply hidden;
        }
    }
  }
  .imgthreecard {
    .dark-image{
      @apply hidden;
    }
    .light-image{
      @apply block;
    }
  }
  .h3_sm {
    p {
      @apply py-0;
    }
  }
}
</style>