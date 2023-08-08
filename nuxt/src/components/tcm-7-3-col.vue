<template>
  <div class="rxsection-y-space">
    <div class="container">
      <div class="row items-center">
        <div class="sxl:w-8/12 smd:w-7/12 w-full px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="circle_list list_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="sxl:w-1/3 smd:w-5/12 w-full px-4">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
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