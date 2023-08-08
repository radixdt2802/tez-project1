<template>
    <div class="py-28 image">
      <div class="container">
        <div>
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white text-center pt-4 pb-8 lg:pb-16"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-12">
          <div class="card p-9 lg:w-1/2 rounded-3xl" v-for="(item) in data.TitleContentMediaList">
            <div class="relative flex h-36 items-start gap-8">
                <div class="justify-start">
                <img
                    v-if="item.Icon"
                    v-rxlazy="item.Icon"
                    width="32"
                    height="32"
              />
                </div>
                <div class="text-gray-300 longtext text-sm flex-1"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
                <div class="flex h-full w-fit flex-col justify-end">
                    <img
                    v-if="item.HoverIcon"
                    v-rxlazy="item.HoverIcon"
                    width="32"
                    height="32"
              />
                </div>
            </div>
            <div class="flex gap-6 items-center">
                <div>
                    <img
                    v-if="item.Image"
                    v-rxlazy="item.Image"
                    width="56"
                    height="56"
              />
                </div>
                <div class="content">
                    <h3 class="text-lg text-white font-semibold">{{ item.Title }}</h3>
                    <p class="text-sm">{{ item.ShortText }}</p>
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
    .content{
      h3{
        @apply text-white p-0;
      }
      p{
        @apply text-sm p-0;
      }
    }
    }
    .image {
      background-color: rgb(26 26 26/1);
    h2{
      &.title{
        p{
          @apply text-white text-6xl p-0;
          line-height: normal;
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
        @apply text-gray-500 p-0;
      }
    }
  }
  </style>