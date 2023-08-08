<template>
  <div class="pt-20 pb-24 image">
    <div class="container">
      <div class="pb-12">
        <h2 class="text-white title" v-html="$md.render(data.Title)"></h2>
        <div class="longtext text-white text-center pt-4 pb-16"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div  class="flex flex-col lg:flex-row justify-between w-full gap-12">
      <div  class="card p-6 w-full lg:p-8 lg:w-1/2 rounded-3xl" v-for="(item) in data.TitleContentMediaList">
      <div class="pb-8">
          <p class="pt-4 subtit">{{ item.SubTitle }}</p>
      </div>
      <div class="flex items-start">
          <div class="w-1/6">
              <img class="pt-2 m-0"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
          </div>
          <div class="w-5/6">
              <h3 class=" text-white">{{ item.Title }}</h3>
              <div class="text-gray-300 longtext"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
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
  .card{
      background-color: rgb(37 37 41);
      .subtit{
        @apply text-green-500 text-lg font-semibold;
      }
  }
  .image {
      background-color: rgb(26 26 26/1);
    h2{
      &.title{
        p{
          @apply text-white text-center;
          em{
            font-style: normal;
            background-image: linear-gradient(to right, #42b883 50%, #0ebbd2 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
        }
      }
    }
  }
  .longtext{
    p{
      @apply text-gray-500;
    }
  }
}
</style>