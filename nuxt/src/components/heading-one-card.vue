<template>
    <div class="pt-20 pb-12 image">
      <div class="container">
        <div class="pb-12 flex flex-col items-center justify-center">
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white text-center pt-4 lg:w-3/4" 
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div  class="flex flex-col items-center justify-center w-full gap-12">
        <div  class="card lg:w-3/4 p-9 rounded-3xl" v-for="(item) in data.TitleContentMediaList">
        <div class="flex items-center gap-10 pb-5">
            <div>
                <img
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <div>
                <h3 class=" text-white p-0 text-2xl">{{ item.Title }}</h3>
            </div>
        </div>    
            <div class="text-gray-300 longtext pb-5"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
            ></div>
           
            <div class="filled-btn py-3 px-8 rounded-lg mb-7">
              <a class="no-underline" href>
                <p class="text-paragraph text-primary-800 text-center font-semibold text-black py-0" v-html="$md.render(item.CTA ? item.CTA : '')" v-if="item.CTA"></p>
              </a>
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
        font-size: 18px;
      }
    }
    .filled-btn{
      width: fit-content;
      margin-bottom: 0;
      background: #42b883;
      a{
        text-decoration: none;
        p{
          p{
            @apply p-0 text-base;
          }
        }
      }
    }
    .filled-btn:hover{
        background: linear-gradient(45deg, #42b883, #0ebbd2) border-box;
      }
  }
  </style>