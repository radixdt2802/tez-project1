<template>
  <div class="rxsection-y-space rpl-thankyoubanner text-center">
    <div class="container rxsection-t-space ">
      <h1 class="h2 md:pb-10 text-primary min-h-full">{{ data.Title }}</h1>
      <div class="head-img-block mx-auto">
        <div
          class="para_lg mx-auto text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .rpl-thankyoubanner {
    h1 {
      font-size: 3.375rem;
      line-height: 3.75rem;
      @screen xsm {
        font-size: 4.375rem;
        line-height: 4.375rem;
      }
      @screen md {
        font-size: 4.5rem;
      }
      @screen xl {
        font-size: 5rem;
        line-height: 5rem;
      }
    }
    .head-img-block {
      max-width: 56.0625rem;
    }
    .para_block {
      @screen md {
        max-width: 20.3125rem;
      }
      top: 22%;
      left: 2%;
    }
    .para_xsm {
      p {
        @apply text-base p-0;
        a {
          @apply text-primary no-underline font-semibold;
        }
      }
    }
  }
}
</style>