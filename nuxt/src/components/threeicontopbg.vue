<template>
  <div
    class="rxsection-y-space threeicontop bg-cover contentWhite"
      :class="{
      'beforeDark relative':
        data.VueReferenceCode == 'TCWithTCML_3icon_Top_Hover_Bg',}"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div class="row card_structure t-space-60">
        <div
          class="
            card_design
            w-full
            text-left
            sxl:border-none
            border border-customcolor-85
            sxl:text-center
          "
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div v-if="item.Icon">
            <img
              v-rxlazy="item.Icon"
              v-if="item.Icon"
              class="sxl:mx-auto mb-8 light-image"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              class="sxl:mx-auto mb-8 dark-image "
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
          </div>
          <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
          <div v-html="sTitles[i]"></div>
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
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
		  sTitleStyle: "h3 h3_sm"
		}
	},
};
</script>
  <style lang="scss">
@layer utilities {
  .dark{
    .threeicontop{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  .threeicontop {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
    .card_structure {
      padding-right: 0.93rem;
      padding-left: 0.93rem;
      @screen lg {
        padding-right: 0;
        padding-left: 0;
      }
    }

    .card_design {
      transition: all 0.3s ease-in-out;
      padding: 1.25rem;
      &:not(:last-child) {
        margin-bottom: 1.875rem;
      }
      @screen smd {
        @apply mt-0 px-4;
      }

      @screen lg {
        margin: 0 0.9375rem 0 0.9375rem;
      }
      @screen sxl {
        width: 30.7%;
        @apply bg-transparent mb-0;
        &:hover {
          @apply bg-opacitybg-51 rounded-md cursor-default dark:bg-themedark-10;
          box-shadow: 0rem 0rem 0.1875rem #ccc;
        }
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
      @screen xl {
        padding: 1.875rem;
      }
      @screen xxl {
        padding: 1.875rem 2.5rem;
      }

      .listanchor {
        @apply p-0;
      }

      h3 {
        @apply font-semibold;
      }
    }
  }
}
</style>