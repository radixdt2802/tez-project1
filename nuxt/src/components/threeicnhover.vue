<template>
  <div class="rxsection-y-space threeHover">
    <div class="container">
      <div class="row card_structure px-4 lg:px-0">
        <div
          class="card_design border-t-4 border-transparent px-8 py-10 w-full smd:w-1/3 text-center smd:mt-0 smd:px-4 bg-themelight-10 hover:border-themelight-50 smd:bg-transparent smd:border-transparent transition-all ease-linear duration-300
          smd:hover:bg-themelight-10 smd:hover:border-themelight-50 smd:dark:hover:bg-themedark-10 smd:dark:hover:border-themedark-65
         "
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div v-if="item.Icon">
            <img
              class="mx-auto w-24 max-w-full mb-4"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>
          <!-- <h3 class="h3_sm">{{ item.Title }}</h3> -->
          <div v-html="sTitles[i]"></div>
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
return {
sTitleStyle: "h3 h3_sm"
}
},
};
</script>
<style lang="scss">
@layer utilities {
  .threeHover {
    .card_design:not(:last-child) {
      @apply mb-10;
    }
    @screen smd {
      .card_design:not(:last-child) {
        @apply mb-0;
      }
    }
    .card_design {
      @screen smd {
        .card_design:not(:last-child) {
          @apply mb-0;
        }
        .card_design:not(:last-child) {
          @apply mb-0;
        }
      }
    }
  }
}
</style>