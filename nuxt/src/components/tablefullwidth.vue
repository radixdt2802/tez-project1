


<template>
  <div class=" rxsection-y-space container react-dev-tcm" :id="data.GuideURL">

    <div class="lg:w-3/3 lg:px-6 px-2 center">
      <h2 class="mt-3 center pb-7 border-b-4 border-primary border-transparent border-solid" v-if="data.VueReferenceCode != 'React_Dev_NoTitleCM'">
        {{ data.Title }}
      </h2>
      <div class="embed-responsive embed-responsive-16by9" v-if="data.CTA">
        <iframe
          width="1280"
          height="720"
          :src="data.CTA"
          frameborder="0"
          class="embed-responsive-item"
          title="Worldwide. Past 12 months. Web Search"
          rel="nofollow"
        ></iframe>
      </div>
     <div class="description-main">
     <div class="flex flex-wrap justify-between border-b border-gray-300 border-solid border-transparent py-4"  v-for="item in data.TitleContentList">
     <div class="lg:w-5/12 w-full"><h5 class="text-xl font-bold w-full lg:mb-0 mb-2 py-3">{{ item.Title }}</h5>
     </div>
     <div class="lg:w-7/12 w-full" v-if="item.LongText"
            v-rxhtml="item.LongText">
     </div>
     </div>
     </div>

      <img
        v-if="data.Image"
        v-rxlazy="data.Image.url"
        :alt="data.Image.alternativeText"
        :width="data.Image.width"
        :height="data.Image.height"
        class="mx-auto my-2"
      />

      <!-- <div v-if="data.Image" class="text-right mb-2">
          <p class="text-xs m-0 p-0" v-if="data.Image.caption">{{data.Image.caption}}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import mountedMixin from "../mixins/mounted.mixin";
const sidebarMenu = defineAsyncComponent(() => import("./React-dev-menu.vue"));
export default {
  props: {
    data: Object,
  },
  components: {
    sidebarMenu: sidebarMenu,
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .react-dev-tcm {
    code {
      @apply px-4 bg-themelight-10 dark:bg-themedark-65 mb-2 inline-block italic;
    }
    div.codeSnipet {
      @apply bg-themelight-10 dark:bg-themedark-65  p-4 text-xl break-words leading-loose;
    }
    ul{
      li{
        p{
          @apply p-0;
        }
      }
    }
    .list4col {
      ul {
        @apply flex flex-wrap sm:pt-4 pt-1 w-full sm:mb-5 sm:pb-5;
        li {
          @apply sxl:w-1/4 md:w-2/4 w-full pb-0;
          padding-top: 0.625rem;
          padding-left: 1.875rem;
          padding-right: 0.5rem;
          &:before {
            margin-top: 0.25rem;
            @apply border-4 w-4 h-4 sm:w-5 sm:h-5;
            margin-right: 0.938rem;
          }
          @screen sm {
            @apply pl-10;
            &:before {
              border-width: 0.313rem;
              margin-top: 0.375rem;
            }
          }
        }
      }
    }
    .description-main{
    > div{
    &:last-child{
    border-bottom:0;}
    }
    }
  }

  
    table {
        
      display: hidden;
      table,
      th,
      td {
          border: 0px;
        border-bottom: 1px solid #bbb;
      }
      th,
      td {
        padding: 10px;
        text-align: left;
      }
      th {
       
      display:none;
      }
    }
  }

</style>