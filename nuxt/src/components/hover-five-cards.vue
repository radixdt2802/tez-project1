<template>
    <div class="pt-20 pb-20 image">
      <div class="container">
        <div class="pb-12">
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
        <h3 class="text-white text-center" v-html="$md.render(data.SubTitle)"></h3>
          <div class="longtext text-white text-center pt-4 pb-16"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div  class="flex flex-col lg:flex-row justify-between w-full gap-8 h-full cards">
        <div  class="cardd group p-9 lg:w-1/2 rounded-3xl flex flex-col justify-between customMinHeight h-80" v-for="(item) in data.TitleContentMediaList">
            <div class="imageicon group-hover:hidden">
                <img class="pb-4"
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <div>
                <p class=" text-white text-xl">{{ item.Title }}</p>
                <div class="text-gray-300 longtext text-sm ltext hidden group-hover:block"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
            <div>
                <img class="pt-3 hidden lg:block plus group-hover:hidden"
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
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
    .cards{
      min-height: 420px;
    }
    .cardd{
        background-color: rgb(37 37 41);
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .5s;
    }
    
    .image {
      background-color: rgb(26 26 26/1);
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
    .cardd:hover{
      height: fit-content;
    }
    // .cardd:hover{
    //   .imageicon{
    //     @apply hidden;
    //   }
    //   .ltext{
    //     @apply block;
    //   }
    //   .plus{
    //     @apply hidden;
    //   }
    // }
    // .ltext{
    //   @apply hidden;
    // }
    h3{
      @apply text-center;
        p{
          @apply text-white text-4xl text-center m-0;
          em{
            font-size: 36px;
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
    .longtext{
      p{
        @apply text-gray-500;
        font-size: 16px;
      }
    }
    .plus{
      color: #42b883;
    }
  }
  </style>