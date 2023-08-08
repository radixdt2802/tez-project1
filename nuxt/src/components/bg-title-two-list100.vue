<template>
  <div
    class="bg-title-two-list rxsection-y-space bg-cover beforeDark relative bg-no-repeat"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.Image ? 'bg-secondary contentWhite' : '',
      data.VueReferenceCode == 'TCM_GreyBG_2ColList100'
        ? 'bg-themelight-10 dark:bg-themedark-10 text-themedark-0'
        : '',
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <p class="text-center para_md md:pb-10 pb-8" v-if="data.ShortText">
        {{ data.ShortText }}
      </p>
      <div class="row">
        <div class="w-full mx-auto px-4">
          <div
            class="circle_list para_md list_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .bg-title-two-list {
    ul {
      @apply flex flex-wrap;
      li {
        @apply md:w-1/2 w-full mt-4;
        &::before {
          width: 1.15rem;
          height: 1.15rem;
          @apply sm:w-5 sm:h-5;
        }
      }
    }
  }
}
</style>