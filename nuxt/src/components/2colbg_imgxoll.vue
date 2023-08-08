<template>
  <div class="new-gen rxsection-y-space">
    <div>
      <div class="container">
        <div class="row">
          <div class="new-gen-main sxl:w-8/12 smd:w-7/12 w-full px-4">
            <div class="row">
              <div class="new-gen-head sxl:w-1/2 w-full px-4">
                <h2>{{ data.Title }}</h2>
              </div>
              <div
                class="sxl:w-1/2 w-full px-4"
                :class="[
                  data.VueReferenceCode == 'AM_2Col_ImgColl6'
                    ? 'new-gen-content-6img'
                    : 'new-gen-content-5img',
                ]"
              >
                <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
                <ul
                  class="
                    flex flex-wrap item-collection
                    justify-between
                    sm:justify-start
                    mx-auto
                    sm:ml-0
                    py-1
                    items-center
                  "
                >
                  <li
                    v-for="item in data.ImageCollection"
                    class=" transition-all duration-300 ease-in-out light-image"
                    :key="item.id"
                  >
                  <tez-link v-if="item.caption" :to="item.caption" >
                    <img
                      v-if="item"
                      v-rxlazy="item"
                      :alt="item.alternativeText"
                      :title="item.alternativeText"
                      :width="item.width"
                      :height="item.height"
                     
                    />
                  </tez-link>
                  <div v-else>
                    <img
                      v-if="item"
                      v-rxlazy="item"
                      :alt="item.alternativeText"
                      :title="item.alternativeText"
                      :width="item.width"
                      :height="item.height"
                    />
                  </div>
                  </li>
                  <li
                    v-for="item in data.MultipleMedia"
                    class=" transition-all duration-300 ease-in-out dark-image"
                    :key="item.id"  
                  >
                  <tez-link v-if="item.caption" :to="item.caption">
                    <img
                      v-if="item"
                      v-rxlazy="item"
                      :alt="item.alternativeText"
                      :title="item.alternativeText"
                      :width="item.width"
                      :height="item.height"
                    />
                  </tez-link>
                  <div v-else>
                    <img
                      v-if="item"
                      v-rxlazy="item"
                      :alt="item.alternativeText"
                      :title="item.alternativeText"
                      :width="item.width"
                      :height="item.height"
                     
                    />
                  </div>
                  </li>
                </ul>
                <div
                  class="btn btn_md text-center sm:text-left sm:mt-5 mt-2"
                  v-if="data.CTA"
                  v-html="$md.render(data.CTA)"
                ></div>
              </div>
            </div>
          </div>
          <div class="sxl:w-4/12 smd:w-5/12 w-full px-4 smd:block hidden">
             
              <img
                v-if="data.Image"
                v-rxlazy="data.Image"
                :width="data.Image.width"
                :height="data.Image.height"
                :alt="data.Image.alternativeText"
              />
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';  

import { KinesisContainer, KinesisElement  } from 'vue-kinesis'
const kinesisContainer  = defineAsyncComponent(KinesisContainer);
const kinesisElement   = defineAsyncComponent(KinesisElement);
export default {

  components:{
    KinesisContainer :KinesisContainer,
     KinesisElement:KinesisElement
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer components {
  .dark{
      .new-gen {
        .item-collection{
        .light-image {
           @apply hidden;
        }
        .dark-image {
          @apply flex;
        }
      }
      }
    }
  .new-gen {
    .item-collection{
    .light-image {
      @apply flex;
    }
    .dark-image {
      @apply hidden;
    }
  }

    @apply relative overflow-hidden;
    &:before,
    &:after {
      content: "";
      @apply h-full block absolute bg-primary opacity-50;
      @screen md {
        width: 80%;
        right: -75%;
        transform: skewX(-46deg);
      }
      @screen smd {
        @apply right-0 top-0;
        width: 40%;
        right: -21%;
        background: rgba(49, 187, 174, 0.5);
        transform: skewX(-25deg);
      }
    }
    &::before {
      @apply bg-primary opacity-100 -z-1;
    }

    .new-gen-main {
      .new-gen-content-5img {
        ul {
        max-width: 20rem;
          @screen sm {
            max-width: 26.5625rem;
          }
          @screen sxl {
            max-width: 100%;
          }
          li {
            @apply  items-center xsm:p-2 px-1 my-2 xsm:mx-1;
            min-height: auto;
            width: 3.375rem;
            @screen xsm {
              width: 4.375rem;
            }
            @screen smd {
              width: calc(20% - 0.5rem);
            }
            &:hover {
              @apply rounded-md;
              box-shadow: 0.0625rem 0.0625rem 0.5rem -0.125rem #a7a7a7,
                0.0625rem 0.0625rem 0.5rem 0.125rem #d3d2d2;
            }
            img {
              @apply mx-auto max-w-full max-h-full w-auto h-auto;
            }
          }
        }
      }
      .new-gen-content-6img {
        ul {
          max-width: 18rem;
          @screen xsm {
            max-width: 20rem;
          }

          @screen sm {
            max-width: 26.5625rem;
          }
          @screen sxl {
            max-width: 100%;
          }
          li {
            @apply  items-center sm:p-2 px-1 my-2 xsm:mx-1;
            width: 2.625rem;
            @screen sm {
              width: 3.75rem;
              height: 4.375rem;
            }
            @screen smd {
              width: calc(16.67% - 0.5rem);
            }

            &:hover {
              @apply rounded-md;
              box-shadow: 0.0625rem 0.0625rem 0.5rem -0.125rem #a7a7a7,
                0.0625rem 0.0625rem 0.5rem 0.125rem #d3d2d2;
            }
            img {
              @apply mx-auto max-w-full max-h-full w-auto h-auto;
            }
          }
        }
      }
    }
  }
 
}
</style>