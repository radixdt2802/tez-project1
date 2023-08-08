<template>
  <div class="application-cot rxsection-y-space">
    <div class="container">
      <!-- <h2 class="text-center mx-auto lg:w-10/12 w-full">
        {{ data.Title }}
      </h2> -->
     <div v-html="title"></div>
      <div class="row">
        <div class="px-4 smd:w-4/12 w-full">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
            class="mx-auto"
          />
        </div>
        <div class="cot-content smd:w-8/12 w-full px-4">
          <div
            class="para_md square_list"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
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
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "text-center mx-auto lg:w-10/12 w-full h2",
      subTitleStyle : "",
      sTitleStyle : "",
      sSubTitleStyle : ""
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .application-cot {
    .cot-content {
      li {
        padding-left: 1.563rem;
        @screen sm {
          padding-left: 2.188rem;
        }
        &::before {
          top: 0.75rem;
          @screen sm {
            top: 0.9375rem;
          }
        }
      }
    }
  }
}
</style>