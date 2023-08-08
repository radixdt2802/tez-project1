<template>
  <div
    class="rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TL_ThreeCol-TealBG'
        ? 'bg-primary dark:bg-themedark-0 contentWhite'
        : '',
      data.VueReferenceCode == 'TL_ThreeCol_TealBG_full'
        ? 'bg-primary dark:bg-themedark-0 contentWhite'
        : '',
      data.VueReferenceCode == 'TL_ThreeCol_WhiteBG_full_CheckList'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
    ]"
  >
    <div class="container">
      <div class="text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      </div>
      <div class="row">
        <div
          class="px-4 three-col-list-bg"
          :class="[
            data.VueReferenceCode == 'TL_ThreeCol_TealBG_full' ||
            data.VueReferenceCode == 'TL_ThreeCol_WhiteBG_full_CheckList'
              ? 'w-full'
              : 'lg:w-3/4 mx-auto',
          ]"
        >
          <div
            class="threecol-list list_sm "
            :class="[data.VueReferenceCode == 'TL_ThreeCol_WhiteBG_full_CheckList' ? 'checkListImage' : 'square_list']"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
    titleStyle : ""
    }
  },
};
</script>
<style lang="scss">
  @layer utilities {
    .three-col-list-bg{
    .threecol-list{
      ul{
        li{
          @apply w-full md:w-1/2 smd:w-1/3 m-0;
          &:before{
              top:50%;
            }
        }
      }
     
    }
  }
  }
</style>