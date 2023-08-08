<template>
  <div class="company ">
    <div class="container">
      <div class="container pb-20 relative overflow-hidden mr-0">
        <div class="flex flex-row justify-between lg:items-center gap-12 p-12 card lg:w-3/4 rounded-2xl m-auto">   
        <div>
            <img
                v-if="data.Icon"
                v-rxlazy="data.Icon"
                width="92"
                height="92"
              />
        </div>
        <div>
            <p class="text-gray-500 text-2xl  p-0" v-html="$md.render(data.Title)"></p>
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
  .company {
    background-color: rgb(26 26 26/1);
  }
  .card{
        background-color: rgb(37 37 41);
        p{
          @apply text-gray-500;
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
  </style>