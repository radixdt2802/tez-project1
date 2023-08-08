<template>
  <div
    class="
      rxsection-y-space
      csd-4colteallist
      bg-primary
      text-center
      contentWhite
    "
  >
    <div class="container">
      <div class="row">
        <div
          class="md:w-3/12 w-full px-4"
          v-for="item in data.TitleContentList"
        >
          <h3>
            <span>{{ item.Title }}</span
            ><sup>{{ item.SubTitle }}</sup>
          </h3>
          <div
            class="para_md"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
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
  .csd-4colteallist {
    .row {
      > div:not(:first-child) {
        @apply md:border-l md:border-themelight-0 md:border-solid;
      }
      h3 {
        font-size: 2.625rem;
        @screen smd {
          font-size: 3.125rem;
        }
        @screen sxl {
          font-size: 3.75rem;
        }
        line-height: 4.375rem;
      }
    }
  }
}
</style>