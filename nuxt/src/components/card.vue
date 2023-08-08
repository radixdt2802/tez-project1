  <template>
  <div
    class="rxsection-y-space four-card text-center;"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[

    data.VueReferenceCode == 'TWithTCL_4BGImgBox'
    ? 'beforeBlackDark relative'
    : '',
      data.VueReferenceCode == 'TWithTCL_4GrayBox'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
        data.VueReferenceCode == 'TCWithTCL_Teal_4Box_Cp'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
        data.VueReferenceCode == 'TCWithTCL_Teal_4Box'
        ? 'dark:bg-themedark-0' : '',
    ]"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div
        class="row"
      >
        <div class="card-row w-full sxl:w-1/4 sm:w-1/2 mt-8 px-4" v-for="(item,i) in data.TitleContentList">
          <div
            class="card-bg px-5 py-10 h-full lg:py-12 lg:px-4 bg-primary contentWhite"
            :class="[
              data.VueReferenceCode == 'TCWithTCL_Teal_4BoxLeft'
                ? 'text-left dark:bg-themedark-0 '
                : '',
              data.VueReferenceCode == 'TWithTCL_4BGImgBox'
                ? 'bg-themelight-0 dark:bg-themedark-0'
                : '',
              data.VueReferenceCode == 'TCWithTCL_Teal_4Box'
                ? 'dark:bg-themedark-70 text-center' : '',
              data.VueReferenceCode == 'TCWithTCL_Teal_4Box_Cp'
                ? 'dark:bg-themedark-70 text-center' : '',
              data.VueReferenceCode == 'TWithTCL_4GrayBox'
                ? 'dark:bg-themedark-0 text-center' : '',
            ]"
          >
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
             <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
        <div
          class="cardwBg mt-8 w-full lg:w-1/4 md:w-1/2 px-4"
          v-if="data.TitleContentMediaList"
          v-for="(item,i) in data.TitleContentMediaList"
        >
            <!-- {{item.Icon.url}} -->
          <div class="cardcontent text-center dark:bg-themedark-70 p-8 h-full" :class="[
          data.VueReferenceCode == 'TCWithTCL_Teal_4Box_HY'
                ? 'bg-primary contentWhite' : 'bg-themelight-0',
          ]">
            <img
              class="mx-auto pb-4 light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="mx-auto pb-4 dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
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
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "font-semibold para_lg md:pb-2.5"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
   
    .four-card{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  
  .four-card {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
   
    .card-bg {
      @media screen and (max-width: 1365px) and (min-width: 1024px) {
        @apply px-5;
      }
    }
    .card-row {  
      p {
        @apply text-themelight-0;
      }
     
    }  
  }
}
</style>