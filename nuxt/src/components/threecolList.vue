<template>
  <div
    class="rxsection-y-space imggallery bg-themelight-10 dark:bg-themedark-10"
  >
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div
        class="smd:flex "
      >
        <div class="smd:w-1/3 w-full mt-10 sm:mt-8 h-auto 
        smd:px-4 "
          v-for="(item,i) in data.TitleContentList"
        :key="item.id">
       <div
            class="
              inner-box
              
              h-full
              bg-themelight-0 dark:bg-themedark-0 px-6 py-8 
              flex flex-col
              
            "
          >
            <h3 class="text-xl sxl:text-2xl">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="flex-grow break-words"
            ></div>
            <div
              class="btn btn_secondaryinverse btn_sm mt-6"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></div>
          </div>
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
  data() {
    return {
      titleStyle : "h2 text-center",
      sTitleStyle: "h3_sm ",
    };
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .imggallery{
    .flex-grow{
      p{
        strong{
          @apply text-themedark-85 dark:text-themelight-0;
        }
      }
    }
  }

}

</style>