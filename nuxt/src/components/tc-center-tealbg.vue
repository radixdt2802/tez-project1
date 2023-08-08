<template>
  <div
    class="
      rxsection-y-space
      tc-center-tealbg
      bg-primary dark:bg-themedark-0
      contentWhite
      text-center
    "
  >
    <div class="container">
      <div class="flex flex-wrap justify-center items-center">
        <div v-html="title"></div>
        <!--<h2>{{ data.Title }}</h2>-->
        <div class="row">
          <div
            class="custom-width mt-10 sm:mt-8 px-4"
            v-for="item in data.TitleContentList"
            :key="item.id"
          >
            <span
              class="
                white-list
                rounded-full
                bg-themelight-0
                w-3
                h-3
                inline-block
                mb-8
              "
            ></span>
            <h3 class="para_lg">{{item.Title}}</h3>
          </div>
        </div>
        <div
          class="sxl:w-11/12 w-full"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
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
<style lang="scss">
@layer utilities {
  .tc-center-tealbg {
    .custom-width:first-child{
      @apply w-full;
      @screen sm{
        width:50%;;
      }
      @screen smd{
        width:16.66%;
      }
    }
    .custom-width:nth-child(2), .custom-width:nth-child(3){
      @apply w-full;
      @screen sm{
        width:50%;;
      }
      @screen smd{
        width:25%;
      }
    }
    .custom-width:last-child{
      @apply w-full;
      @screen sm{
        width:50%;;
      }
      @screen smd{
        width:33.33333%;
      }
    }
    .white-list {
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2);
    }
  }
}
</style>