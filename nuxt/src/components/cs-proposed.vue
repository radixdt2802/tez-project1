<template>
  <div class="rxsection-t-space bg-themelight-20 dark:bg-themedark-70">
    <div class="container">
      <div class :class="{ contentWhite: data.VueReferenceCode == 'CS_AboutProject' }">
        <h2 class="text-center">{{ data.Title }}</h2>
        <div class="para_md list_fifty square_list" v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>
      <div class="row mt-8 cspropsedContent">
        <div class="smd:w-5/12 md:w-1/2 w-full px-4" v-for="item in data.TitleContentList">
          <h3 class="para_lg">{{ item.Title }}</h3>
          <div class="square_list" v-rxhtml="item.LongText"></div>
        </div>
      </div>
      <div class="mt-10">
        <img
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.width"
          class="mx-auto"
        />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .cspropsedContent {
    > div {
      &:not(:first-child) {
        @apply ml-auto;
        .square_list h3 {
          @apply mt-4;
        }
      }
    }
  }
}
</style>