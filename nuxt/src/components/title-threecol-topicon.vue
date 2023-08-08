<template>
  <div
    class="rxsection-y-space threeicontop"
    id="scroll"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_3icon_Top_HoverBGTeal'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : '',
    ]"
  >
    <div class="container">
      <sectionHeading :data="data" />

      <div class="row card_structure t-space-60">
        <div
          class="card_design"
          :class="[
            data.VueReferenceCode == 'TCWithTCML_3icon_Top_HoverBGTeal'
              ? 'bg-transparent border-2 sxl:border-0 border-solid border-themedark-65'
              : 'bg-themelight-10 dark:bg-themedark-70',
          ]"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="back_circle">
            <img
              class="light-image"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"  
              
            />
            <img
              class="dark-image"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
          </div>
          <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
          <div v-html="sTitles[i]"></div>
          <div v-rxhtml="item.LongText" class="three-cont"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from "@vue/runtime-core";
const sectionHeading = defineAsyncComponent(() =>
  import("./section-heading100.vue")
);
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading: sectionHeading,
  },
  props: {
    data: Object,
  },
     data(){
    return {
      sTitleStyle : "h3 h3_sm",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .threeicontop {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
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
      @apply w-full text-left sxl:text-center;
      transition: all 0.3s ease-in-out;
      padding: 1.25rem;
      &:not(:last-child) {
        margin-bottom: 1.875rem;
      }
      .back_circle {
        @apply mb-6;
        img {
          @apply sxl:mx-auto ml-0;
          width: 3.75rem;
          height: 3.75rem;
          @screen md {
            width: 4.6875rem;
            height: 4.6875rem;
          }
        }
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
          @apply bg-themelight-10 rounded-md cursor-default dark:bg-themedark-70;
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
