<template>
    <div class="bgblue-content  contentWhite rxsection-y-space pb-0">
      <div class="container">
        <div class="spaceback bg-secondary width-style flex flex-wrap">  
          <div class="csd-content">
            <div v-if="data.LongText" v-rxhtml="data.LongText" class="para_md"></div>
          </div>
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
    .bgblue-content {
      .width-style {
          @apply mx-auto px-4;
        @media (min-width: 576px) {
          max-width: calc(100% - 1.25rem);
          width: 74.375rem;
        }
        @screen xl {
          width: 74.375rem;
        }
      }
      .spaceback {
        padding: 0.9375rem 1.25rem 1.25rem;
      @screen sm {
        padding: 1.5625rem 2.1875rem 2.1875rem;
      }

      @screen md {
        padding: 2.1875rem 2.8125rem 2.8125rem;
      }

      @screen xl {
        padding: 3.4375rem 4.0625rem 4.0625rem;
      }
       
      }
    }
  }
  </style>