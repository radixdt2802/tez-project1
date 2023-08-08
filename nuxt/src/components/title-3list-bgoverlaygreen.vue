<template>
  <div
    class="
      three-col-list-bg
      rxsection-y-space
      text-center
      beforeDark
      relative
      bg-cover
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="relative">
        <div class="w-full threecol-list relative text-center">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="para_md"
            v-if="data.ShortText"
            v-rxhtml="data.ShortText"
          ></div>
          <div
            class="circle_list list_md text-left"
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
  mixins: [mountedMixin, titleMixin],
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
  <style lang="scss" scoped>
@layer components {
  .three-col-list-bg {
    .bg-overlay {
      &::before {
        @apply w-full h-full absolute top-0 left-0 dark:bg-themedark-0 opacity-75;
        content: "";
      }
    }
    @apply dark:bg-themedark-10 bg-cover bg-no-repeat;
    .main-content-heading {
      @apply ml-0;
    }
  }
}
</style>
  