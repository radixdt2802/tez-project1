<template>
  <div class="rxsection-y-space hovericontop">
    <div class="container">
      <div class="sxl:w-11/12 w-full mx-auto text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor para_md p-0"></div>
      </div>
      
      <div class="row card_structure px-4 lg:px-0 t-space-60">
        <div class="card_design w-full sxl:w-1/3  text-left bg-themelight-10 sxl:dark:bg-transparent dark:bg-themedark-10  sxl:text-center
        transition-all duration-300 ease-in-out p-5 smd:mt-0 smd:px-4 lg:mx-4  sxl:bg-transparent sxl:mx-0
        sxl:hover:bg-themelight-0 sxl:hover:dark:bg-themedark-10 sxl:hover:rounded-md sxl:hover:cursor-default xl:p-8 xxl:py-8 xxl:px-10" 
        v-for="(item,i) in data.TitleContentMediaList">
          <div class="mb-8" v-if="item.Icon">
            <img
              class="sxl:mx-auto mr-auto"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>
          <!-- <h3 class="h3_sm font-semibold">{{ item.Title }}</h3> -->
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
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  components: {
  },
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
  .hovericontop {
    .card_design {
      &:not(:last-child) {
        margin-bottom: 1.875rem;
      }
      @screen sxl {
        &:hover {
         box-shadow: 0rem 0rem 0.1875rem 0rem #dadada8c,
            0rem 0rem 0.9375rem 0rem #dadada8c;
        }
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>