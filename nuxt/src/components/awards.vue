<template>
  <section class="rxsection-b-space">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap justify-center">
        <div
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
          class="xl:w-1/3 md:w-1/2 w-full px-8 customSeprator"
        >
          <div>
            <img
              class="mx-auto"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              :alt="item.Icon.alternativeText"
              :title="item.Icon.alternativeText"
            />
            <div class="py-3">
              <h3 class="h3_sm text-center px-3">
               {{item.Title}}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  .customSeprator {
    @screen xl{
      &:not(:last-child) {
        @apply border-r-2 border-gray-200 border-opacity-60;
      }
    }
  }
}
</style>
