<template>
  <div class="imgright-col rxsection-y-space">
    <div class="container flex flex-wrap xl:items-center">
      <div class="left-content md:w-7/12 w-full">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>
      <div class="right-img w-full md:pt-0 md:w-5/12">
        <img
          v-rxlazy="data.Image"
          :alt="data.Image.alternativeText"
          :width="data.Image.width"
          :height="data.Image.height"
        />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .imgright-col {
    min-height: 34.0625rem;
    .right-img {
      img {
        @apply hidden mx-auto max-w-full;
        animation: rotation 60s linear infinite 0s;
        -webkit-animation: rotation 60s linear infinite 0s;
        animation: rotation 60s linear infinite 0s;
        @screen xsm {
          max-width: 16.25rem;
          @apply block;
        }
        @screen md {
          @apply max-w-full;
        }
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
        }
      }
      @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
          transform: rotate(359deg);
        }
      }
    }
  }
}
</style>