<template>
    <div class="rxsection-y-space contentWhite"
     v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    >
        <div class="container">
            <h2>{{data.Title}}</h2>
            <div v-if="data.LongText" v-rxhtml="data.LongText" class="square_list primary_list noBs list_md"></div>
       </div>
    </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>