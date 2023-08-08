<template>
  <div class="center-cta rxsection-y-space bg-primary dark:bg-themedark-70 contentWhite">
    <div class="container">
      <div class="w-full mx-auto text-center">
        <!-- <h3 class="font-normal">{{data.Title}}</h3> -->
        <div v-html="title"></div>
        <div v-html="$md.render(data.CTA ? data.CTA: '')" class="btn btn_white md:mt-10 mt-5"></div>
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
      titleStyle : "h3",
     }
  }
};
</script>