<template>
    <div class="py-20 image">
      <div class="container">
        <div>
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white text-center pt-4 pb-8 lg:pb-16"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-12">
          <div class="card p-8 lg:w-1/4 rounded-3xl" v-for="(item) in data.TitleContentMediaList">
            <div>
            <div class="flex gap-4 lg:flex-col">
              <img
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
              <div>
                <h3 class="pt-4 text-white text5Xl" v-html="$md.render(item.Title)"></h3>
              </div>
              </div>
              <div class="text-gray-300 longtext"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
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
        h3{
      &.text5Xl{
        p{
          @apply text-white text-5xl text-left;
          em{
            font-size: 48px;
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
    .image {
      background-color: rgb(26 26 26/1);
    h2{
      &.title{
        p{
          @apply text-white text-6xl p-0;
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
      @apply text-gray-400;
    }
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
  .title h2 strong{
    background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    }
    .longtext{
      p{
        @apply text-gray-500;
      }
    }
  }
  </style>