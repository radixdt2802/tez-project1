<template>
  <div
    class="
      rxsection-y-space
      head-para-blue
      bg-secondary
      dark:bg-themedark-70
      contentWhite
    "
  >
    <div class="container">
      <div class="text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="contentWhite"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
    </div>
  </div>
</template>
  <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
    data(){
    return {
      titleStyle : "h2",
     }
  }
};
</script>