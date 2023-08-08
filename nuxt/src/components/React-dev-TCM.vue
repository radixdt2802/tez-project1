<template>
  <div class="mt-14 container md:flex react-dev-tcm" :id="data.GuideURL">
    <div class="bg-themelight-10 md:bg-transparent lg:w-1/3 px-2" :class="[
        data.VueReferenceCode == 'React_Dev_NoTitleCM_Full'
          ? 'hidden'
          : '',
        data.VueReferenceCode == 'React_Dev_TCM_Full'
          ? 'hidden'
          : '',
      ]" >
      <!-- <sidebarMenu :data="data.TitleContentList" /> -->
    </div>
    <div class="lg:px-6 px-2" :class="{
        'w-full':
          data.VueReferenceCode == 'React_Dev_TCM_Full',
        'lg:w-2/3':
          data.VueReferenceCode == 'React_Dev_TCM',
        
      }">
      <h2 class="mt-3" v-if="data.VueReferenceCode != 'React_Dev_NoTitleCM' && data.VueReferenceCode !=  'React_Dev_NoTitleCM_Full'">
        {{ data.Title }}
      </h2>
      <img
        v-if="data.HoverImage"
        v-rxlazy="data.HoverImage.url"
        :alt="data.HoverImage.alternativeText"
        :width="data.HoverImage.width"
        :height="data.HoverImage.height"
        class="mx-auto my-2"
      />
      <div class="responsive-iframe" v-if="data.CTA">
        <iframe
          width="100%"
          :src="data.CTA"
          frameborder="0"
          class="aspect-video"
          rel="nofollow"
        ></iframe>
      </div>
      <div
        class="circle_list list_sm"
        :class="[
          data.VueReferenceCode == 'TCM_ReactDev_List4Col' ? 'list4col' : '',
        ]"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        :id="[data.NavURL ? data.NavURL : '']"
      ></div>

      <img
        v-if="data.Image"
        v-rxlazy="data.Image.url"
        :alt="data.Image.alternativeText"
        :width="data.Image.width"
        :height="data.Image.height"
        class="mx-auto mt-4"
      />

      <!-- <div v-if="data.Image" class="text-right mb-2">
          <p class="text-xs m-0 p-0" v-if="data.Image.caption">{{data.Image.caption}}</p>
      </div> -->

      <hr class="mt-12" />
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
    h3 {
      @apply mt-3;
    }
    ul {
      li {
        p {
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
  }

  table {
    display: hidden;
    table,
    th,
    td {
      border: 1px solid #bbb;
    }
    th,
    td {
      padding: 10px;
      text-align: left;
    }
    th {
      background-color: black;
      color: white;
    }
  }
}
</style>