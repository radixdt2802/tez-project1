<template>
  <div
    class="fourcolimgcenter rxsection-y-space"
  >
    <div class="container">
      <div v-html="title"></div>
      <div
        class="para_md text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row justify-center mt-6">
        <div
          class="flex justify-center items-center sm:mt-10 mt-8 text-center px-4 smd:w-3/12 sm:w-1/2 md:w-4/12 w-full"
          v-for="(item,i) in data.TitleMediaList">
          <img
            v-if="item.Icon"
            class="light-image border border-teal-300 px-0 mx-0 mr-3 text-center"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
          />
          <img
            class="dark-image border dark:border-themedark-65 px-0 mx-0 mr-3"
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            :width="item.HoverIcon.width"
            :height="item.HoverIcon.height"
          />
          <div v-html="sTitles[i]"></div>
        </div>
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
      sTitleStyle: "h3_sm my-auto text-center p-0 icon-title px-0 mx-0"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .fourcolimgcenter {
    .icon-title {
      max-width: 14.375rem;
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .fourcolimgcenter {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>