<template>
  <div
    class="contentInlineList relative rxsection-b-space bg-themelight-10 dark:bg-themedark-70"
  >
    <div class="container">
      <div
        class="area-focuse-main list_md circle_list noBs area-chip"
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
  .contentInlineList {
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
            @apply inline-block;
          }
        }
      }
    }
  }
}
</style>