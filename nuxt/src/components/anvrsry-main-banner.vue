<template>
  <div
    id="scroll"
    class="
      anniversry-data
      anyersry-main-banner
      bg-cover bg-no-repeat bg-center
      relative
      bg-customcolor-97
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <tez-link
      to="/"
      title="Home"
      class="home-icon absolute h-auto sxl:w-10 sxl:h-10"
    >
      <div>
        <img
          class="mx-auto"
          v-rxlazy="data.Icon"
          :width="data.Icon.width"
          :height="data.Icon.height"
          :alt="data.Icon.alternativeText"
        />
      </div>
    </tez-link>

    <div class="logo-image">
      <img
        v-if="data.HoverImage"
        v-rxlazy="data.HoverImage"
        :width="data.HoverImage.width"
        :height="data.HoverImage.height"
        :alt="data.HoverImage.alternativeText"
      />
    </div>
    <div class="bottom-section absolute w-full text-center">
      <div class="celebrating-image">
        <img
          v-if="data.HoverIcon"
          :width="data.HoverIcon.width"
          :height="data.HoverIcon.height"
          v-rxlazy="data.HoverIcon"
          :alt="data.HoverIcon.alternativeText"
        />
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
  @-webkit-keyframes beforeLineAnim {
    0% {
      background-position: 80% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  @-moz-keyframes beforeLineAnim {
    0% {
      background-position: 80% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  @-o-keyframes beforeLineAnim {
    0% {
      background-position: 80% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  @keyframes beforeLineAnim {
    0% {
      background-position: 80% 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  .anyersry-main-banner {
    animation: animateBackground infinite ease-in-out 100s;
    .home-icon {
      top: 5%;
      left: 4%;
      max-width: 1.875rem;
    }
    .bottom-section {
      bottom: 6%;
      .celebrating-image {
        display: inline-block;
        position: relative;
        transition: 0.1s;
        width: 32.81vw;
        &::before {
          transform: scale(1, -1);
          animation: beforeLineAnim 2s infinite;
          position: absolute;
          content: "";
          background: linear-gradient(
            90deg,
            rgba(83, 227, 242, 0.7) 40%,
            #cecccc00 40%
          );
          top: -0.3125rem;
          bottom: -0.3125rem;
          left: -0.3125rem;
          right: -0.3125rem;
          z-index: 1;
          border-radius: 0.25rem;
          background-size: 200% 0.0625rem;
          background-repeat: no-repeat;
          filter: drop-shadow(0 0 8px #fff);
          background-position: -100% 0;
        }
      }
    }
  }
}
</style>