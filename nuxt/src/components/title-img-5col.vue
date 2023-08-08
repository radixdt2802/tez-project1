<template>
  <div
    class="
      bg-powerup
      rxsection-y-space
      contentWhite
      bg-cover bg-secondary bg-no-repeat bg-fixed
      beforeDark
      relative
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <div class="flex items-center justify-between power-up">
        <div class="powerup-head sxl:w-1/2 md:w-7/12 w-full">
          <h2 class="md:text-left text-center">{{ data.Title }}</h2>
        </div>
        <div class="powerup-img md:block hidden sxl:w-1/2 md:w-5/12 w-full">
          <img
            v-if="data.Icon"
            v-rxlazy="data.Icon"
            :width="data.Icon.width"
            :height="data.Icon.height"
            :alt="data.Icon.alternativeText"
            class="mx-auto"
          />
        </div>
      </div>
      <div class="row mt-12 justify-center">
        <div
          class="services_wrap p-5 text-center"
          v-for="item in data.TitleContentMediaList"
        >
          <img
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            :width="item.Icon.width"
            :height="item.Icon.height"
            :alt="item.Icon.alternativeText"
            class="mx-auto mb-4"
          />
          <p class="pb-0">{{ item.Title }}</p>
        </div>
      </div>
    </div>
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
@layer components {
  .bg-powerup {
    background-position: 0 78%;
    .powerup-img {
      img {
        @apply max-w-full mx-auto;
        @screen md {
          max-width: 6.875rem;
        }
        @screen smd {
          max-width: 9.375rem;
        }
        @screen sxl {
          max-width: 11.25rem;
        }
        @screen xxl {
          max-width: 100%;
        }
        animation: rotateSlot 40s linear infinite 0s;
      }
    }
    .services_wrap {
      @apply smd:w-1/5 md:w-1/3 w-1/2 transition-all duration-300 ease-in-out;
      @screen lg {
        &:hover {
          box-shadow: 0rem 0rem 0.75rem 0rem #fff;
          border-radius: 0.5rem;
        }
      }
    }
  }
  @keyframes rotateSlot {
    0%,
    19% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    20%,
    39% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    40%,
    59% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    60%,
    79% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
    80%,
    99% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>