<template>
  <div class="rxsection-y-space imgcol-bggrey">
    <div class="container">
      <div v-html="title"></div>
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
       <div
          class="para_md text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      <div class="row justify-center">
        <div
          class="
            xl:w-1/5
            md:w-4/12
            sm:w-6/12
            w-full
            sm:mt-10
            mt-8
            text-center
            px-4
          "
          :key="item.id"
          v-for="item in data.TitleMediaList"
        >
          <div class="bg-themelight-10 dark:bg-themedark-70 p-4">
            <tez-link :to="item.Image.caption" v-if="item.Image.caption" >
                <img
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.Image.alternativeText"
                    class="mx-auto mb-5 light-image"
                />
                <img
                  v-rxlazy="item.HoverIcon"
                  :width="item.HoverIcon.width"
                  :height="item.HoverIcon.height"
                  :alt="item.HoverIcon.alternativeText"
                   class="mx-auto mb-5 dark-image"
                />
                
            <div>{{ item.Title }}</div>
            </tez-link>
          </div>
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
      titleStyle : "h2 text-center",
      sTitleStyle : "",
    }
  }
};
</script>
 <style lang="scss">
 @layer utilities {
   .dark{
     .imgcol-bggrey{
       .dark-image{
         @apply block;
       }
       .light-image{
         @apply hidden;
       }
     }
   }
   .imgcol-bggrey{
    .dark-image{
         @apply hidden;
       }
       .light-image{
         @apply block;
       }
        a {
      text-decoration: none;
    }
   }
 }
</style>