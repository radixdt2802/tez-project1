<template>
    <div class="content-only">
      <div class="container">
        <div class="text-left">
          <!-- <h1>{{data.dynamic.title}}</h1> -->
          <div
            v-if="data.dynamic.content"
            v-rxhtml="data.dynamic.content"
            class="listanchor para_sm"
          ></div>
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  export default {
    
    props: {
      data: Object,
    },
  };
  </script>
  <style lang="scss">
   @layer utilities {
      .content-only{
     @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
  }
  }
  </style>