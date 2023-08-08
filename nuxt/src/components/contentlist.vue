<template>
  <div
    class="contentList border-b-grey relative"
    :class="[
      data.VueReferenceCode == 'ContentList_Design' ? 'border-b-grey' : '',
    ]"
  >
    <div class="container">
      <div
        class="area-focuse-main mt-6 area-chip"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  .contentList {
    padding-bottom: 3.75rem;
    .area-focuse-main {
      p {
        padding-bottom: 1.125rem;
      }
      h5 {
        @apply font-semibold text-xl py-3;
      }
      &.area-chip {
        ul {
          li {
            @apply border border-solid border-primary rounded inline-block text-lg font-semibold;
            padding: 0.313rem 0.938rem;
            margin-right: 0.313rem;
            margin-bottom: 0.625rem;
          }
        }
      }
    }
  }
}
</style>