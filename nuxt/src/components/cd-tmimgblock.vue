<template>
  <div class="rxsection-y-space text-center cd-tmimgblock pb-0">
    <div class="container">
      <!-- <h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <img
        class="mt-10 mx-auto"
        v-if="data.Image"
        :width="data.Image.width"
        :height="data.Image.height"
        v-rxlazy="data.Image"
      />
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
		  titleStyle : "h2 text-center",
		}
	},
};
</script>
