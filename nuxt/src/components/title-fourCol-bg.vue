<template>
  <div
    class="rxsection-y-space bg-img contentWhite beforeDark relative"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <sectionHeading :data="data" />
      <div class="row t-space-40">
        <div class="bgCard-row" v-for="item in data.TitleContentMediaList">
          <div class="bgCard">
            <img
              class="light-image"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
            <p class="para_md">{{ item.Title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .bg-img {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .bg-img {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    @apply bg-secondary  text-center bg-cover bg-no-repeat;
    animation: bg_anim 40s infinite;
    animation-timing-function: cubic-bezier(0, 0, 1, 1.02);
    .bgCard-row {
      @apply md:w-1/3 w-full;
      padding: 0 0.938rem;
      &:nth-child(n + 4),
      &:nth-child(3),
      &:nth-child(2) {
        @apply mt-5;
      }
      @screen md {
        &:nth-child(3),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      .bgCard {
        @apply md:border-none border-opacitybg-40 border border-solid p-4 md:p-0;
        p {
          @apply relative  pt-5 smd:max-w-full mx-auto;
          max-width: 21.875rem;
          @screen md {
            max-width: 40rem;
          }
          &:before {
            @apply absolute bg-themelight-0 left-0 right-0 top-0 mx-auto transition-all duration-300 ease-in-out;
            content: "";
            width: 0rem;
          }
        }
        @screen lg {
          &:hover {
            p {
              &:before {
                width: 8.313rem;
                height: 0.125rem;
              }
            }
          }
        }
        img {
          @apply mx-auto mt-3 mb-5;
        }
        h3 {
          @apply mb-2 font-semibold relative pb-5;
        }
      }
    }
  }
  @keyframes bg_anim {
    0% {
      background-size: 110% auto;
      background-position: center center;
    }
    75% {
      background-size: 180% auto;
      background-position: center center;
    }
    100% {
      background-size: 110% auto;
      background-position: center center;
    }
  }
}
</style>