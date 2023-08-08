<template>
  <div class="rxsection-y-space titlelisttwocol bg-opacitybg-25">
    <div class="container">
    <h2>{{data.Title}}</h2>
    <div class="row">
      <div class="md:w-1/2 w-full px-4" v-for="(item,i) in data.TitleContentList">
        
        <!--<h3 class="para_lg">{{item.Title}}</h3>-->
        <div v-html="sTitles[i]"></div>
        <div
            class="list_sm square_list noBs"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import titleMixin from '../mixins/title.mixin';

export default {
  mixins: [titleMixin],  

  props: {
    data: Object,
  },
   data(){
    return {
      sTitleStyle : "h3_sm",
    }
  }
};
</script>
