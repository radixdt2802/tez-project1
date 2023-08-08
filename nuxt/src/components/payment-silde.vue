<template>
    <div class="company">
      <div class="container py-20 relative overflow-hidden text-center">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center justify-evenly items-center">   
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-5 items-center">   
        <div>
            <img
                class="bg-gray-200 rounded-2xl"
                v-if="data.Icon"
                v-rxlazy="data.Icon"
                :width="data.Icon.width"
                :height="data.Icon.height"
              />
        </div>
        <div>
            <p class="text-gray-400 text-center md:text-left p-0 lg:w-96">{{ data.Title }}</p>
        </div>
        </div>
        <div>
          <div class="hidden md:block">
            <img
                v-if="data.Image"
                v-rxlazy="data.Image"
                :width="data.Image.width"
                :height="data.Image.height"
              />
          </div>
          <div class="block md:hidden">
            <img
                v-if="data.HoverImage"
                v-rxlazy="data.HoverImage"
                :width="data.HoverImage.width"
                :height="data.HoverImage.height"
              />
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
export default {
    props: {
      data: Object,
    },
}
</script>
  <style lang="scss">
  @layer utilities {
  .company {
    background-color: rgb(26 26 26/1);
  }
  }
  </style>