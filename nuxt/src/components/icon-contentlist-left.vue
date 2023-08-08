<template>
  <div class="rxsection-y-space left-icon-content bg-secondary contentWhite">
    <div class="container">
      <h2 class="smd:text-center">{{ data.Title }}</h2>
      <div class="flex flex-wrap card_structure t-space-60 text-left">
        <div class="card_design" v-for="item in data.TitleContentMediaList">
          <div class="mb-8" v-if="item.Icon">
            <img
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>
          <h3 class="h3_sm">{{ item.Title }}</h3>
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont list_sm square_list listTwoCol"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
    <script type="text/javascript">
const sectionHeading = () => import("./section-heading90.vue");
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .left-icon-content {
    .section-heads90 {
      @apply smd:text-center;
    }
    .card_design {
      @apply w-full smd:w-1/3 smd:px-4;
      &:not(:last-child) {
        margin-bottom: 3.125rem;
      }
      .listTwoCol {
        ul {
          @apply flex flex-wrap;
          li {
            @apply w-full;
            &:before {
              top: 0.875rem;
              @apply border-primary;
            }
            &:not(:last-child) {
              @apply mb-5;
            }
          }
        }
      }
      .listanchor {
        @apply p-0;
      }
    }
  }
}
</style>