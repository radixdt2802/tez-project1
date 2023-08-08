<template>
  <div
    class="
      rxsection-y-space
      bg-themelight-10
      dark:bg-themedark-70
      floatingicon-circle
      text-center
    "
  >
    <div class="container">
      <h2>{{ data.Title }}</h2>
      <div class="approach_img row t-space-40">
        <div class="center-img flex items-center">
          <img
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
        </div>
        <div class="floating-icon">
          <div class="icon-one" v-for="item in data.TitleContentMediaList">
            <img
              class="light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
            <p class="font-semibold">{{ item.Title }}</p>
          </div>
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
  .floatingicon-circle {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    .approach_img {
      position: relative;
      .center-img {
        @apply w-full;
        @screen md {
          height: 42.5rem;
        }
        img {
          max-width: 94%;
          @apply mx-auto h-auto sm:max-w-full;
        }
      }
      .floating-icon {
        @apply md:block flex flex-wrap mt-8 md:mt-0 w-full;
        img {
          max-width: 2.5rem;
          @apply mx-auto sm:max-w-full;
        }
        p {
          @apply text-sm sm:text-lg;
        }
        > div {
          @apply md:absolute relative  sm:w-1/4 w-1/3  md:w-auto mt-4 md:mt-0;
          &:nth-child(1) {
            @screen md {
              right: 33%;
            }
            @screen smd {
              right: 37%;
            }
            @screen xl {
              right: 40%;
            }
          }
          &:nth-child(3) {
            @screen md {
              right: 0%;
            }
            @screen smd {
              right: 18%;
            }
            @screen xl {
              right: 22%;
            }
          }

          &:nth-child(4) {
            @screen md {
              right: 29%;
            }
            @screen smd {
              right: 35%;
            }
            @screen xl {
              right: 38%;
            }
          }
          &:nth-child(3){
            @screen md {
              left: 62%;
            }
            @screen smd {
              left: 62%;
            }
            @screen xl {
              left: 60%;
            }

          }
          &:nth-child(5) {
            @screen md {
              left: 30%;
            }
            @screen smd {
              left: 36%;
            }
            @screen xl {
              left: 38%;
            }
          }
          &:nth-child(6) {
            @screen md {
              right: 76%;
            }
            @screen smd {
              right: 71%;
            }
            @screen xl {
              right: 65%;
            }
          }
          &:nth-child(7) {
            @screen md {
              left: 8%;
            }
            @screen smd {
              left: 14%;
            }
            @screen xl {
              left: 24%;
            }
          }
          &:nth-child(8) {
            @screen md {
              right: 55%;
            }
            @screen smd {
              right: 55%;
            }
            @screen xl {
              right: 54%;
            }
          }
          &:nth-child(1),
          &:nth-child(8) {
            @screen md {
              top: 2.9375rem;
            }
            @screen smd {
              top: 1.875rem;
            }
          }
          &:nth-child(7),
          &:nth-child(2) {
            @screen md {
              top: 10.5rem;
            }
            @screen smd {
              top: 11.625rem;
            }
          }
          &:nth-child(3),
          &:nth-child(6) {
            @screen md {
              bottom: 8.875rem;
            }
            @screen smd {
              bottom: 9.5625rem;
            }
          }
          &:nth-child(2) {
            @screen md {
              right: 6%;
            }
            @screen smd {
              right: 16%;
            }
            @screen xl {
              right: 23%;
            }
          }
          &:nth-child(5),
          &:nth-child(4) {
            @screen md {
              bottom: -0.125rem;
            }
            @screen smd {
              bottom: -1.25rem;
            }
          }
        }
      }
    }
  }
  .dark {
    .floatingicon-circle {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>