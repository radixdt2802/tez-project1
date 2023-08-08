<template>
  <div
    class="tc-cs  rxsection-y-space"
    :class="{
      'bg-secondary dark:bg-themedark-0 contentWhite':
        data.VueReferenceCode == 'TC_CS_Dark',
      'bg-secondary dark:bg-themedark-0 contentWhite ':
        data.VueReferenceCode == 'TC_CS_Dark_Left',
      'bg-themelight-10 dark:bg-themedark-10':
        data.VueReferenceCode == 'TC_CS',
      'bg-themelight-20 dark:bg-themedark-65':
        data.VueReferenceCode == 'TC_CS_LightTeal',
    }"
  >
    <div class="container">
      <div class>
        <!-- <h2
          :class="[
            data.VueReferenceCode == 'TC_CS_Dark_Left'
              ? 'text-left'
              : 'text-center',
          ]"
        >
          {{ data.Title }}
        </h2> -->
        <div :class="[
            data.VueReferenceCode == 'TC_CS_Dark_Left'
              ? 'text-left'
              : 'text-center',
          ]" v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          class="square_list list_sm"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
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
      titleStyle : "h2 text-center",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .tc-cs {
    h3 {
      @apply xxsm:mt-8 mt-5;
    }
  }
}
</style>