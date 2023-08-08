<template>
  <div
    class="
      rxsection-y-space
      hr-5050rightlist
      bg-themelight-10
      dark:bg-themedark-10
    "
  >
    <div
      class="container -z-1 backgroundHide"
    >
      <div class="row">
        <div class="sxl:w-1/2 w-full px-4 ml-auto hidden sxl:block">
        <img
                v-if="data.Image"
                v-rxlazy="data.Image"
                :width="data.Image.width"
                :height="data.Image.height"
                :alt="data.Image.alternativeText"
              />
        </div>
        <div class="sxl:w-1/2 w-full px-4 ml-auto">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div  v-html="title"></div>
          <div
            class="para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div class="row md:mt-12 mt-8">
            <div
              class="sm:w-1/2 w-full px-4"
              v-for="(item,i) in data.TitleContentList"
            >
              <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                class="para_smd square_list noBs"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : "h2",
    sTitleStyle: "h3_sm h3"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .hr-5050rightlist{
    .backgroundHide{
      @apply bg-no-repeat;
      background-image: none;
      @screen lg{
        @apply bg-cover;
      }
  }
  }
  
}
</style>