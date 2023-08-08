<template>
    <div
      class="company">
      <div class="container py-20 overflow-hidden text-center">
        <div>
          <div class="pb-12">
            <h2 class="text-white title" v-html="$md.render(data.Title)"></h2>
          </div>
        </div>
        <div class="flex flex-wrap text-center gap-7 lg:justify-evenly">
          <div
            class="text-center"
            v-for="item in data.ImageCollection"
            :key="item.id"
          >
            <img
              class="xl:mx-auto ml-5"
              v-rxlazy="item.url"
              :width="item.width"
              :height="item.height"
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
  .company{
    background-color: rgb(26 26 26/1);
    h2{
      &.title{
        p{
          @apply text-white p-0 text-6xl;
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
  }
  .title h2 strong{
    background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  } 
}
</style>