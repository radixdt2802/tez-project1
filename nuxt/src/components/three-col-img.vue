
<template>
  <div class="threeColimg rxsection-t-space">
    <div class="container">
      <sectionHeading :data="data" />
    </div>
    <div class="flex flex-wrap t-space-60 squareGridblocks">
      <div class="md:w-4/12 w-full bg-center bg-cover" v-for="(item,i) in data.TitleContentMediaList">
        <div
          v-if="item.VueReferenceCode === 'OnlyBg' "
          class="h-full md:bg-cover hidden md:block bg-center"
          v-bind:style="[
            item.Image ? { backgroundImage: 'url(' + item.Image.url + ')' } : '',
          ]"
        ></div>
        <div
          class="squareContent mx-auto text-center h-full bg-cover p-8"
          v-if="item.VueReferenceCode !== 'OnlyBg' "
          v-bind:style="[
          item.Image ? { backgroundImage: 'url(' + item.Image.url + ')' } : '',
          ]"
        >
          <div class="contentOverlay bg-opacitybg-50 p-5 md:bg-transparent md:p-0">
            <div v-html="sTitles[i]"></div>
            <!-- <h3 class="h3_sm text-themelight-0 md:text-themedark-0">{{item.Title}}</h3> -->
            <div v-if="item.LongText" v-rxhtml="item.LongText" class="para_style"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'; 
import titleMixin from '../mixins/title.mixin'; 
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
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
    sTitleStyle: "h3 text-themelight-0 md:text-themedark-0"
    }
  },

};
</script>
<style lang="scss">
@layer utilities {
  .threeColimg {
    .squareGridblocks {
      .squareContent {
        .contentOverlay{
          p{
            @apply text-themelight-0 md:text-themedark-0;
            @screen md{
              @apply dark:text-themelight-0;
            }
          }
        }
        @screen md {
          padding: 20% 0.9375rem;
          max-width: 25.75rem;
          background-image: none !important;
        }
      }
    }
  }
}
</style>