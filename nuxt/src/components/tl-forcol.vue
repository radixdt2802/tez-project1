<template>
  <div
    class="rxsection-y-space tlFour"
    :class="[
      data.VueReferenceCode == 'TL_FourCol-TealBG_Html'
        ? 'bg-primary dark:bg-themedark-40 contentWhite'
        : '',
      data.VueReferenceCode == 'TL_FourCol-TealBG'
        ? 'bg-primary dark:bg-themedark-70 contentWhite'
        : '',
      data.VueReferenceCode == 'TL_FourCol-TealBG_Core_Tspace'
        ? 'bg-primary dark:bg-themedark-0 contentWhite'
        : '',
    ]"
  >
    <div class="container">
      <div class="text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
      </div>
      <div class="row">
        <div class="mx-auto lg:w-5/6 w-10/12 px-4">
          <div
            class="square_list fourcol-list list_sm customList"
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
		  titleStyle : "h2",
		}
	},
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .tlFour {
    .customList {
      ul {
        li {
          // @apply w-1/2;
          p{
            @apply p-0;
          }
        }
      }
    }
  }
}
</style>