<template>
  <div class="rxsection-t-space" :class="{'pt-0':
        data.VueReferenceCode == 'Title_Single_NoSpace_top'}">
    <div class="container">
      <!-- <h2>{{data.Title}}</h2> -->
      <div v-html="title"></div>
    </div>
  </div>
</template>
<script>
import titleMixin from '../mixins/title.mixin'
export default {
  mixins: [titleMixin],
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
