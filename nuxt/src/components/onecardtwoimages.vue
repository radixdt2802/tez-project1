<template>
    <div class="imagetext pb-20"> 
    <div class="container card p-6 lg:p-8 rounded-3xl">
    <div class="w-full gap-12">
      <div class="pb-8">
          <p class="pt-4 text-green-500" v-html="data.SubTitle"></p>
      </div>
      <div class="flex items-start gap-16">
          <div>
              <img
              v-if="data.Icon"
              v-rxlazy="data.Icon"
              :width="data.Icon.width"
              :height="data.Icon.height"
            />
          </div>
          <div>
              <h3 class=" text-white" v-html="data.Title"></h3>
              <div class="text-gray-300 longtext"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
      </div>
      </div>
      <div class="flex flex-col lg:flex-row w-full">
        <div class="left lg:w-1/2">
            <img class="pt-3"
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
            />
        </div>
        <div class="right lg:w-1/2">
            <img class="pt-3"
              v-if="data.HoverImage"
              v-rxlazy="data.HoverImage"
              :width="data.HoverImage.width"
              :height="data.HoverImage.height"
            />
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
    .imagetext {
      background-color: rgb(26 26 26/1);
    }
    .longtext{
      p{
        @apply text-gray-400;
      }
    }
    .card{
      background-color: rgb(37 37 41);
  }
  }
  </style>