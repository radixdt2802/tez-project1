<template>
    <div class="rxsection-y-space multiimage"
    :class="{'pt-0': data.VueReferenceCode == 'Multi_ImageBspace',}">
      <div class="container">
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="text-center mx-auto para_md smd:w-11/12 w-full"
        ></div>
        <div class="row t-space-30 justify-center">
            <div class="multiicon justify-center flex flex-wrap ">
                <div
                  class="iconlist text-center logomain rounded-md items-center flex flex-wrap light-image"
                  v-for="item in data.ImageCollection "
                >
                    <template v-if="!item.caption">
                    <img
                      v-rxlazy="item"
                      :width="item.width"
                      :height="item.height"
                      :alt="item.alternativeText"
                      class="mx-auto"
                    />
                    <span class="text-xs w-full">{{ item.alternativeText }}</span>
                    </template>
                    <template v-if="item.caption">
                      <tez-link :to="item.caption" :title="item.alternativeText" class="mx-auto no-underline">
                      <img
                        v-rxlazy="item"
                        :width="item.width"
                        :height="item.height"
                        :alt="item.alternativeText"
                        class="mx-auto"
                      />
                      <span class="text-xs w-full">{{ item.alternativeText }}</span>
                      </tez-link>
                    </template>
                </div>
                <div
                  class="iconlist text-center logomain rounded-md items-center flex flex-wrap dark-image"
                  v-for="item in data.MultipleMedia"
                >
                <template v-if="!item.caption">
                  <img
                    v-rxlazy="item"
                    :width="item.width"
                    :height="item.height"
                    :alt="item.alternativeText"
                    class="mx-auto"
                  />
                  <span class="text-xs w-full">{{ item.alternativeText }}</span>
                  </template>
                  <template v-if="item.caption">
                    <tez-link :to="item.caption" :title="item.alternativeText" class="mx-auto no-underline">
                    <img
                      v-rxlazy="item"
                      :width="item.width"
                      :height="item.height"
                      :alt="item.alternativeText"
                      class="mx-auto"
                    />
                    <span class="text-xs w-full">{{ item.alternativeText }}</span>
                    </tez-link>
                  </template>
                </div>
              </div> 
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  import titleMixin from '../mixins/title.mixin';
  export default {
    mixins: [titleMixin],
    props: {
      data: Object,
    },
       data(){
    return {
      titleStyle : "h2 text-center",
     }
  }
  };
  </script>
  <style lang="scss">
  @layer utilities {
    .multiimage {
      .multiicon{
        max-width: 62.5rem;
       .iconlist{
          width: 100%;
          padding: 0.4375rem;
          margin-top: 3.125rem;
          max-width:9.0625rem;
         @screen sxl{
          max-width: 11.875rem;
          
         }
          &:hover{
            box-shadow:0 0 0.1875rem 0 #dadada8c, 0 0 0.9375rem 0 #dadada8c;
          }

          span{
            padding-top: 0.625rem;
            font-size: 1rem;
            line-height:1.625rem;
          }
       }
      }
      .light-image {
      @apply flex;
    }
    .dark-image {
      @apply hidden;
    }
    }
    .dark{
      .multiimage {
        .light-image {
      @apply hidden;
    }
    .dark-image {
      @apply flex;
    }
      }
    }
  }
  </style>