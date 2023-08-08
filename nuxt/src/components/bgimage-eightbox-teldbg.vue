<template>
    <div
      class="rxsection-y-space eightbox-teldbg bg-cover bg-no-repeat beforeDark relative"
      v-bind:style="[
        data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
      ]"
      
    >
      <div class="container relative">
        <sectionHeading :data="data" />
        <div class="row bgcontent justify-center">
          <div
            class="bgCard-row w-full px-4 md:w-1/2 sxl:w-1/4 mx-auto mt-8"
            v-for="(item,i) in data.TitleContentList"
          >
            <div
              class="bgCard px-4 py-5 sm:py-8 md:py-10 bg-opacitybg-40 dark:bg-opacitybg-15 h-full"
            >
               <div v-html="sTitles[i]"></div>
              <!-- <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3>
             
              <h3 v-if="item.CTA" v-html="$md.render(item.CTA)" class="h3_sm"></h3> -->
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="p-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  import { defineAsyncComponent } from '@vue/runtime-core';  
  import titleMixin from '../mixins/title.mixin';
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
  import mountedMixin from "../mixins/mounted.mixin";
  export default {
     mixins: [mountedMixin, titleMixin],
    components: {
      sectionHeading:sectionHeading,
    },
    props: {
      data: Object,
    },
     data(){
    return {
      sTitleStyle : "h3_sm md:pb-2.5",
     }
  }
  };
  </script>
  <style lang="scss">
  @layer utilities {
    .dark{
      .eightbox-teldbg {
        &.beforeDark{
          &:before {
            content: "";
            
            @apply absolute w-full h-full top-0 bg-themedark-70 dark:bg-themedark-0;
          }
        }
      }
    }
    .eightbox-teldbg{
    
      .section-heads100 > div {
        @screen xxsm {
          padding-top: 0;
        }
      }
      div.para_md p {
        padding: 0.625rem 0;
      }
    }
  }
  </style>