<template>
  <div class="hlphpleftarrow rxsection-b-space">
    <div class="container">
      <div class="row">
        <div class="sxl:w-7/12 md:w-8/12 w-full px-4">
          <div class="main-content mx-auto md:text-left text-center">
            <h3 class="font-normal pb-2 w-56 xsm:w-full mx-auto">
              {{ data.Title }}
            </h3>
            <span class="relative w-full inline-block"> </span>
            <div
              class="bottom-text"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
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
  .hlphpleftarrow {
    .main-content {
      max-width: 26.875rem;
      @screen sm {
        max-width: 31.25rem;
      }
      @screen smd {
        max-width: 34.375rem;
      }
      @screen sxl {
        max-width: 48.125rem;
      }
    }
    span {
      width: 18.125rem;
      @screen xsm {
        width: 100%;
      }
      &::before {
        @apply inline-block align-middle bg-themedark-40;
        content: "";
        width: calc(100% - 0.8125rem);
        height: 0.125rem;
      }
      &::after {
        border-width: 0.5rem 0 0.5rem 0.5rem;
        @screen xsm {
          border-width: 0.625rem 0 0.625rem 0.625rem;
        }
        @apply inline-block align-middle w-0 h-0;
        content: "";
        border-width: 0.8125rem 0 0.8125rem 0.8125rem;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-left-color: #bcbcbc;
        border-right-color: transparent;
        border-right-width: 0;
      }
    }
    .bottom-text {
      p {
        @apply font-medium text-customcolor-96 p-0;
        font-size: 1.25rem;
        @screen xsm {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
        @screen sxl {
          font-size: 2.5rem;
          line-height: 2.875rem;
        }
        @screen xxl {
          font-size: 2.8125rem;
          line-height: 3.5625rem;
        }
      }
    }
  }
}
</style>