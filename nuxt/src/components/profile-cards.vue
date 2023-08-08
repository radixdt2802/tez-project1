<template>
    <div class="pt-20 pb-40 image">
      <div class="container">
        <div class="pb-12">
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white text-center pt-4 pb-16"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="flex flex-row justify-between w-full px-48 ">
        <div class="card w-80 rounded-3xl flex flex-col justify-between" v-for="(item) in data.TitleContentMediaList">
            <div>
                <img class="rounded-t-3xl scale-50 hover:scale-75 ease-in duration-500"
                v-if="item.Image"
                v-rxlazy="item.Image"
                width="320"
                height="240"
              />
            </div>
            <div class="p-6 flex flex-col justify-between">
            <div>
            <h3 class="text-white text-2xl">{{ item.Title }}</h3>
            <div class="text-gray-300 text-base longtext"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
            ></div>
            </div>
            <div class="flex gap-2">
            <div
            class="text-center flex flex-row p-3 bg-gray-600 rounded-full cursor-pointer hover:bg-green-500"
            v-for="item in item.ImageCollection"
            :key="item.id"
          >
            <img
              class="xl:mx-auto ml-5 flex"
              v-rxlazy="item.url"
              :width="item.width"
              :height="item.height"
            />
          </div>
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
    }
    .image {
      background-color: rgb(26 26 26/1);
      h3{
        @apply text-left;
      }
    h2{
      &.title{
        p{
          @apply text-white;
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