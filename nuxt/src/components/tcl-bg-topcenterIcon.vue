<template>
  <div class="section-heads rxsection-y-space productSixPoint bg-themelight-30 dark:bg-themedark-40">
    <div class="container">
      <div class="md:w-4/5 w-full mx-auto">
        <div v-html="title" ></div>
        <!-- <h2>{{ data.Title }}</h2> -->
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      </div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md colSixList circle_list"
      ></div>
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
    return{
      titleStyle : "h2 text-center",
    }
  },
};
</script>
<style lang="scss">
</style>