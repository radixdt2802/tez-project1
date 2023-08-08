<template>
  <div class="rxsection-y-space title-listfullleft">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      <div class="row justify-content-center align-items-center">
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="para_md list_md square_list primary_list fullWidthList"
        ></div>
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
  .title-listfullleft {
    p {
      @apply md:pb-10 pb-8 text-left;
    }
    div.fullWidthList {
      ul {
        @apply w-full;
        li {
          &::before {
            top: 0.25rem;
          }
          @screen md {
            padding: 0.3125rem 3rem 0.3125rem 2.5rem;
          }
          padding: 0.3125rem 1rem 0.3125rem 2.5rem;
        }
      }
    }
  }
}
</style>