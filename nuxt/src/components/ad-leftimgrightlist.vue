<template>
  <div
    class="
      ad-leftimgrightlist
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-10
    "
  >
    <div class="container">
      <div class="row">
        <div class="px-4 sxl:w-1/2 w-full sxl:block hidden">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
            class="mx-auto"
          />
        </div>
        <div class="sxl:w-1/2 w-full px-4">
          <!-- <h2 class="mx-auto w-full">
            {{ data.Title }}
          </h2> -->
          <div v-html="title"></div>
          <div
            class="para_md square_list"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2"
		}
	},
};
</script>