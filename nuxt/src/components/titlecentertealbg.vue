<template>
  <div
    class="
      application-cot
      rxsection-y-space
      bg-themelight-20
      dark:bg-themedark-70
    "
  >
    <div class="container">
      <!-- <h2 class="text-center mx-auto lg:w-10/12 w-full leading-relaxed">
        {{ data.Title }}
      </h2> -->
      <div v-html="title"></div>
      <div class="row md:pt-10">
        <div class="px-4 sxl:w-4/12 w-full">
          <img  
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
            class="mx-auto"
            :class="[data.VueReferenceCode == 'Title_Center_TealBg_List' ? '':'light-image']"
          />
          <img
          v-if="data.HoverImage"
          v-rxlazy="data.HoverImage"
          :width="data.HoverImage.width"
          :height="data.HoverImage.height"
          :alt="data.HoverImage.alternativeText"
          class="mx-auto dark-image"
        />
        </div>
        <div class="cot-content sxl:w-8/12 w-full px-4">
          <div
            class="para_md square_list"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .application-cot{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  .application-cot {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
    
    .cot-content {
      li {
        padding-left: 1.563rem;
        @screen sm {
          padding-left: 2.188rem;
        }
        &::before {
          top: 0.75rem;
          @screen sm {
            top: 0.9375rem;
          }
        }
      }
    }
  }
}
</style>