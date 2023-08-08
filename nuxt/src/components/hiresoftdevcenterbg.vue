<template>
  <div class="rxsection-y-space hiresodtdevcenter text-center">
    <div class="container">
      <div class="smd:w-8/12 mx-auto">
        <div v-for="item in data.TitleContentList">
          <div class="h3" v-if="item.LongText" v-rxhtml="item.LongText"></div>
        </div>
        <h2>{{ data.Title }}</h2>
        <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>
    </div>
  </div>
</template>
    <script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .hiresodtdevcenter {
    .h3 {
      p {
        @apply font-normal;
      }
      strong {
        @apply text-primary font-normal;
      }
    }
  }
}
</style>
  