<template>
  <div
    class="
      hsdrighttitleleftlist
      bg-secondary
      contentWhite
      py-10
      smd:p-0
      text-center
      smd:text-left
    "
  >
    <div class="container">
      <div class="row">
        <div class="smd:pl-12 smd:w-auto w-full smd:order-1 smd:py-16">
          <h2>{{ data.Title }}</h2>
          <div
            v-if="data.CTA"
            v-html="$md.render(data.CTA)"
            class="btn smd:block hidden"
          ></div>
        </div>
        <div class="smd:pl-16 smd:w-auto w-full list_block smd:py-16">
          <div
            class="list_md listTwoCol text-left"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
      </div>
      <div
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
        class="btn block smd:hidden mt-8"
      ></div>
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
  .hsdrighttitleleftlist {
    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
    .list_block {
      @screen smd {
        background-color: #f4fcff;
        @apply dark:bg-themedark-10;
        flex-basis: 0;
        flex-grow: 1;
      }
      ul {
        max-width: 21.25rem;
        @screen smd {
          max-width: 100%;
        }
        margin: 0 auto;
      }
      li {
        @apply xl:w-1/2 w-full smd:text-themedark-0  relative px-4 py-1 smd:dark:text-themelight-0;
        &::before {
          content: "";
          @apply absolute left-0 rounded-full smd:border-themedark-0 smd:dark:border-themelight-0 border-themelight-0 w-1 h-1;
          border-width: 0.1875rem;
          top: 1rem;
        }
      }
    }
  }
}
</style>
  