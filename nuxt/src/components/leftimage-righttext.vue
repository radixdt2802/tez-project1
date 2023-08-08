<template>
  <div class="imagetext"> 
  <div class="container flex flex-col lg:flex-row w-full py-20 items-center gap-24">
    <div class="lg:w-3/5">
      <img class="image rounded-3xl"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
    </div>
    <div class="lg:w-2/5">
      <h2 class="text-white lirt-title lg:text-4xl" v-html="$md.render(data.Title)"></h2>
        <div class="longtext text-white"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
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
      &.lirt-title{
        p{
          font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
          @apply text-white p-0;
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
  .lirt-title h2 strong{
    background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  } 
}
</style>