<template>
  <div class="rxsection-y-space bg-secondary contentWhite score-round-image">
    <div class="container">
      
      <!--<h2 class="text-center">{{ data.Title }}</h2>-->
    <div v-html="title"></div>
      <div class="row t-space-60">
        <div
          class="sm:w-1/3 w-full px-4 mb-8 sxl:mb-0"
          v-for="item in data.TitleContentMediaList"
        >
          <img
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
            :alt="item.Image.alternativeText"
            class="mx-auto xxl:max-w-full"
          />
          <p class="para_md text-center pt-4">{{ item.Title }}</p>
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
      titleStyle : "h2 text-center",
    }
  }
};
</script>
<style lang="scss">
  @layer utilities {
    .score-round-image{
      img{
        max-width: 7.5rem;
        @screen sm{
          max-width: 8.125rem;
        }
        @screen md{
          max-width: 10rem;
        }
        
      }
    }
  }

</style>