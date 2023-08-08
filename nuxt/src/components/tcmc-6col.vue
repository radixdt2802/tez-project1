<template >
  <div
    class="tcmc-6col text-center "
    :class="{
      'bg-themelight-30 dark:bg-themedark-10 rxsection-y-space':
        data.VueReferenceCode == 'TCMC_6ColTealBg',
    }"
  >
    <div class="container">
      <h2>{{ data.Title }}</h2>
      <div class="para_md" v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <div class="row pt-7">
        <div class="smd:w-4/12 md:w-1/2 w-full px-4">
          <div v-for="(item,i) in data.TitleContentList">
          <div
            class="text-left p-4 content-area"
            :class="[data.VueReferenceCode == 'TCMC_6Col' ? 'border-0' : 'smd:border-transparent border border-themelight-50',]"
            :key="item.Title"
            v-if="item.VueReferenceCode !== 'RightRow'"
          >
            
            <!-- <div v-html="sTitles[i]"></div> -->
            <h3 class="para_lg">{{ item.Title }}</h3>
            <div
              class="square_list primary_list list_sm noBs"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
          </div>
        </div>
        <div class="smd:w-4/12 w-full smd:flex hidden items-center">
          <img
            v-if="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            v-rxlazy="data.Image"
          />
        </div>
        <div class="smd:w-4/12 md:w-1/2 px-4">
        <div v-for="(item,i) in data.TitleContentList">
          <div
            class="text-left smd:pl-10 p-4"
            :class="[data.VueReferenceCode == 'TCMC_6Col' ? 'border-0' : 'smd:border-transparent border border-themelight-50',]"
            :key="item.Title"
            v-if="item.VueReferenceCode === 'RightRow'"
          >
            
            <div v-html="sTitles[i]"></div>
            <!--<h3 class="para_lg">{{ item.Title }}</h3>-->
            <div
              class="square_list primary_list list_sm noBs"
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
      sTitleStyle : "h3_sm"
    }
  }
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .tcmc-6col {
    .row {
      > div {
        > div {
          /* @screen md {
            &:first-child {
              margin-top: 0;
            }
          } */
          
        }
      }
    }
  }
}
</style>
