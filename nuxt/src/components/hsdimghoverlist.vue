<template>
  <div class="rxsection-y-space text-center">
    <div class="container">
      <h2>{{ data.Title }}</h2>
      <div class="row">
        <div
          class="smd:w-1/6 xsm:w-1/3 w-1/2 px-4 main-block mt-10 sm:mt-8"
          v-for="item in data.TitleMediaList"
        >
          <div class="p-3">
            <img
              class="mx-auto"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>
          <h3 class="para_sm">{{ item.Title }}</h3>
        </div>
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
  .hsdimghover {
    .main-block {
      &:hover {
        > div {
          @apply bg-primary;
        }
      }
    }
  }
}
</style>
  