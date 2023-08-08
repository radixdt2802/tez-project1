<template>
  <div class="imagetext">
    <div class="container text-center pt-20 pb-10 w-full">
      <div>
        <h2 class="text-white text-center title6Xl" v-html="$md.render(data.Title)"></h2>
        <div class="longtext text-white" v-if="data.LongText" v-rxhtml="data.LongText"></div>
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
      h2 {
        &.title6Xl {
          p {
            @apply text-white text-6xl font-semibold p-0;
            em {
              font-style: normal;
              font-weight: 600;
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

    .longtext {
      p {
        @apply text-gray-400;
      }
    }

    .title h2 strong {
      background: -webkit-linear-gradient(#eee, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>