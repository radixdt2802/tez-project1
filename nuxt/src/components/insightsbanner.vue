<template>
  <div>
    <div class="blog-banner">
    <div class="flex items-center bg-no-repeat bg-cover banner-img-title-center bg-secondary py-12 md:py-14 smd:pt-16 smd:pb-12 xl:pt-20">
      <div class="container customContainer text-center smd:text-left">
        <h1 class="pb-0 my-0 text-themelight-0 featured-post-author-title h3 smd:text-left text-center inline-block">{{data.dynamic.title}}</h1>
      </div>
    </div>
    </div>
    <div class="container customContainer text-center my-5 smd:text-left">
       <div
             v-bind:class="isActive ? 'ReadHide' : 'ReadShow'"
            class="para_sm portfolioContent"
            v-if="data.dynamic.content"
            v-html="$md.render(data.dynamic.content)"
        ></div>
        <div class="contentToggle pt-2">
        <a href="#" @click="toggleContent()" class="text-secondary">
          <img
            v-if="isActive"
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/double_arrow_down_91955adf1b.svg'"
            alt="Read More"
            width="20"
            height="20"
          />
          <img
            v-if="!isActive"
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/double_arrow_down_91955adf1b.svg'"
            class="readLessIcon"
            alt="Read Less"
            width="20"
            height="20"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin],
  props: {
    data: Object
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    toggleContent() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .banner-img-title-center {
      background-image : url('https://d2ms8rpfqc4h24.cloudfront.net/author_bg_pattern_24b2c26d77.png');
    
    }
      @media only screen and (min-width: 1230px) {
      .container.customContainer {
        max-width: 100%;
        width:76.875rem;
      }
    }
    .contentToggle {
    @apply text-center md:hidden block;
    a {
      @apply inline-block;
    }
    .readLessIcon {
      @apply transform rotate-180;
    }
  }
  .portfolioContent {
    @apply relative;
    &.ReadHide {
      height: 4.875rem;
      overflow: hidden;
      @apply transition-all duration-1000 ease-in-out;
      &:before {
        content: "";
        background: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 1)
        );
        display: block;
        width: 103%;
        height: 100%;
        position: absolute;
        top: 0;
        left: -0.6875rem;
      }
    }
    &.ReadShow {
      @apply transition-all duration-1000 ease-in-out h-auto;
    }
  }
  @screen md {
    .portfolioContent {
      &.ReadHide {
        height: auto;
        overflow: hidden;
        @apply transition-none;
        &:before {
          @apply hidden;
        }
      }
      &.ReadShow {
        @apply transition-none;
      }
    }
  }
  .dark {
    .portfolioContent {
      &.ReadHide {
        &:before {
          background: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 1)
          );
        }
      }
    }
  }
}
</style>