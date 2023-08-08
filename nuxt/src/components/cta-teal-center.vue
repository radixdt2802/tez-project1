<template>
  <div class="rxsection-y-space ctaCenter contentWhite bg-primary dark:bg-themedark-70">
    <div class="container">
      <div class="flex flex-wrap items-center justify-center contentWhite">
        <!-- <h3 class="text-center font-normal pb-5 md:pb-8">{{ data.Title }}</h3> -->
      <div v-html="title"></div>

        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="text-center btn btn_white w-full mt-7"
        ></div>
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
      titleStyle : "h3 text-center font-normal",
      // sTitleStyle: "h3_sm"
    }
  }
};
</script>
