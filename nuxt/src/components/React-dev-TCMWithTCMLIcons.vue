<template>
  <div class="mt-12 container md:flex" :id="data.GuideURL">
    <div class="lg:w-1/3" :class="{
        'hidden':
          data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons_Full',
        
      }">
      <!-- need to change css of component based on sidebar -->
    </div>
    <div class=" lg:px-6 px-2 customOl" :class="{
        'w-full':
          data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons_Full',
        'lg:w-2/3':
          data.VueReferenceCode == 'React_Dev_TCMWithTCMLIcons',
        
      }">
      <h2>{{ data.Title }}</h2>
      <div class="" v-if="data.LongText" v-rxhtml="data.LongText"></div>
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
      <div
        v-for="item in data.TitleContentMediaList"
        class="icon-list md:p-0 border border-gray-300 smd:border-none"
      >
        <div class="flex p-4">
          <div v-if="item.Icon" class="bounce-img">
            <img
              v-if="item.Icon"
              class="light-image"
              :width="item.Icon.width"
              :height="item.Icon.height"
              v-rxlazy="item.Icon"
            />
            <img
              v-if="item.HoverIcon"
              class="dark-image"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              v-rxlazy="item.HoverIcon"
            />
          </div>
          <div>
            <h3 class="h3_sm">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              class="circle_list list_sm"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-12" />
  </div>
</template>

<script>
import mountedMixin from "../mixins/mounted.mixin";

export default {
  props: {
    data: Object,
  },
};
</script>

 <style lang="scss">
 @layer utilities{
  .dark{
    .bounce-img{
      .light-image {
          @apply hidden;
        }
        .dark-image {
          @apply block;
        }
    }
  }
   .customOl{
     ol {
       list-style: decimal;
       padding-left: 1rem;
       li {
             margin-bottom: 0.25rem;
       }
     }

   }
   .bounce-img {
    .light-image {
        @apply block opacity-100 transition-all duration-300 ease-in-out;
      }
      .dark-image {
        @apply hidden;
      }
     &:hover {
       img {
         transform: translateY(-0.3125rem);
       }
     }
     margin-bottom: 1.25rem;
     padding-right: 0.875rem;
     min-width: 3.125rem;
     @screen md {
       min-width: 3.875rem;
       padding-right: 1.375rem;
     }
     @screen smd {
       margin-bottom: 0;
     }
     @screen sxl {
       min-width: 4.375rem;
     }
   }
 }
// .icon-list {
//   border: 1px solid #dedede;
// }
</style>