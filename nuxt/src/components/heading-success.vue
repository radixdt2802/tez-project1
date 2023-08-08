<template>
  <div class="success-heads">
    <div class="width-style mx-auto px-4">
      <div class="w-full mx-auto pt-5">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md"
        ></div>
      </div>
      <!-- <div class="image-area w-full mt-10">
        <img
          v-rxlazy="data.Image"
          :alt="data.Image.alternativeText"
          :width="data.Image.width"
          :height="data.Image.height"
          class="mx-auto"
        />
      </div> -->
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
      titleStyle : "h1",
     }
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .success-heads {
    .width-style {
      @media (min-width: 576px) {
        max-width: calc(100% - 1.25rem);
        width: 74.375rem;
      }

      @screen xl {
        width: 74.375rem;
      }
    }
    @apply text-center;
    > h2 {
      @apply text-center w-4/5 mx-auto;
    }
    > p {
      @apply text-center pt-2 w-4/5 mx-auto;
    }
    > div {
      @apply text-center pt-2 mx-auto;
    }
    div.para_md {
      p {
        padding: 0rem 0rem;
      }
    }
  }
}
</style>