<template>
<div class="rxsection-y-space bg-cover bg-no-repeat contentWhite" 
v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '']">
   
    <div class="container fifty-fifty-title-content">
      <div class="md:flex md:space-x-16 smd:space-x-24 lg:space-x-32">
        <div class="content-left">
          <div v-html="title"></div>
                    <p v-if="data.ShortText" class="border-t border-teal-500 md:border-t-2 md:border-teal-700 pt-5 sm:pt-8 mt-2 sm:mt-4"> {{data.ShortText}} </p>
        </div>
        <div class="content-right mt-6 md:mt-0">
          <div v-html="subTitle"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class="">  </div>
        </div>
      </div>
      <div v-if="data.TitleContentList" class="flex w-full point-row mt-8">
          <div class="grid w-1/4 md:border-t sm:border-gray-600 point" v-for="content in data.TitleContentList" :key="content.id">
              <div class="w-1/2 border-r border-gray-600 p-6 hidden md:block" ></div>
              <img class="justify-self-center" v-rxlazy="titleImage" alt="">
              <p class="text-center text-sm sm:text-base">{{(content.Title).split(" ")[0]}} <br />{{(content.Title).split(" ")[1]}} </p>
          </div> 
      </div>
    </div>

<!-- {{data}} -->
</div>
</template>

<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  data(){
    return{
      titleImage:"https://d2ms8rpfqc4h24.cloudfront.net/step_dot_a21c4ed42a.svg",

      titleStyle : "h2",
      subTitleStyle: "h2",
      sTitleStyle : "",
    }
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  .fifty-fifty-title-content {
    .content-right {
      div > p{
        @apply border-t md:border-t-2 pt-5 sm:pt-8 mt-2 sm:mt-4;
      }
    }
  }
  
}


</style>