<template>
  <div class="heading-border-left rxsection-b-space">
    <div class="container flex flex-wrap">
      <div class="para-content width-style px-4">
        <!-- <h2>{{data.Title}}</h2> -->
        <div v-html="title"></div>
        <div class="para_md" v-if="data.LongText" v-rxhtml="data.LongText"></div>
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
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .heading-border-left {
    .width-style {
      margin-right: auto;
      margin-left: auto;

      @media (min-width: 576px) {
        max-width: calc(100% - 1.25rem);
        width: 74.375rem;
      }

      @screen xl {
        width: 74.375rem;
      }
    }

    .para-content {
      h2 , .h2 {
        @apply border-l-2 sm:border-l-4 border-solid border-primary pb-0;
        padding-left: 0.625rem;
        margin-bottom: 0.9375rem;
        @screen sm {
          padding-left: 0.9375rem;
          margin-bottom: 1.5625rem;
        }
      }

      p {
        @apply text-black dark:text-white pt-2 pb-0;
        margin-bottom: 0.9375rem;
        &:last-child {
          @apply mb-0;
        }
      }
    }
  }
}
</style>