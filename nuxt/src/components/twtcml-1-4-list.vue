<template>
  <div
    class="container"
    :class="{
      'rxsection-b-space': data.VueReferenceCode == 'TWithTCML_1_4_List_Bspace',
    }"
  >
    <!-- <div class="h3_sm">{{ data.Title }}</div> -->
    <div v-html="title"></div>

    <div class="py-5">
      <div class="row">
        <div
          class="sxl:w-1/4 sm:w-1/2 w-full px-4"
          v-if="data.TitleContentMediaList"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <p class="para_md pb-0">{{ item.Title }}</p>
          <div
            class="square_list noBs primary_list list_sm"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
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
    titleStyle : "h3_sm"
    }
  },

};
</script>