<template>
    <div class="imagetext"> 
    <div class="container flex flex-col lg:flex-row text-center lg:text-left w-full items-center gap-24">
      <div class="lg:w-1/2">
        <h2 class="text-white title" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
      </div>
      <div class="lg:w-1/2">
        <img class="image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
            />
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
    h2{
      &.title{
        p{
          @apply text-white text-4xl font-semibold;
          em{
            font-size: 36px;
            font-weight: 600;
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
  }
  .title h2 strong{
    background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  } 
  .image{
    margin-top: -50px;
    margin-bottom: -50px;
  }
}
</style>