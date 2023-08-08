<template>
  <div class="rxsection-y-space digital-future">
    <div class="container text-center">
      <div class="h2">{{ data.Title }}</div>

      <div v-if="data.LongText" v-rxhtml="data.LongText" class="para_md"></div>
      <div class="row">
        <div class="progress-cont py-5 px-10" v-for="item in data.TitleContentList">
          <div class="para_lg font-semibold">{{ item.Title }}</div>
          <div class="progress-line">
            <img
              class="absolute left-0 right-0 mx-auto"
              v-rxlazy="setpDotImage"
              alt="Simple Dot"
              width="21"
              height="21"
            />
          </div>
          <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import staticImg from '../mixins/staticimg.mixin';
export default {
  mixins: [staticImg],
  data(){
    return {
      // setpDotImage:"https://d2ms8rpfqc4h24.cloudfront.net/step_dot_a21c4ed42a.svg"
    }
  },
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .digital-future {
    .row {
      margin-top: 0.625rem;
      @screen md {
        margin-top: 1.25rem;
      }
      @screen smd {
        margin-top: 2.5rem;
      }
    }
    .progress-cont {
      max-width: 33.125rem;
      @apply md:w-1/4 w-full md:max-w-full md:text-center text-left md:px-4 md:py-0 relative md:bg-transparent md:dark:bg-transparent dark:bg-themedark-10 bg-themelight-10 sm:mx-auto mx-4;

      + .progress-cont {
        @apply md:mt-0 mt-5;
      }
      &:last-child {
        .progress-line {
          height: 75%;
          @screen md {
            height: 0.0625rem;
          }
          &::after {
            transform: rotate(90deg);
            position: relative;
            bottom: -97%;
            left: -0.375rem;
            @apply bg-no-repeat block ml-auto;
            background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/step_arrow_3fde3d85f0.svg");
            content: "";
            width: 0.6875rem;
            height: 1.25rem;
            margin-top: -0.5625rem;
            @screen md {
              transform: rotate(0deg);
              left: 0;
              bottom: 0;
            }
          }
        }
      }
      &:first-child,
      &:last-child {
        .progress-line {
          @screen md {
            width: calc(100% - 1.875rem);
          }
        }
        &:first-child {
          .progress-line {
            left: 1.25rem;
            top: 20%;
            @apply md:left-auto;
            @screen md {
              top: auto;
            }
          }
        }
      }
      h3,.para_lg  {
        @apply relative;
        &::before {
          @apply md:hidden block bg-no-repeat absolute bg-primary rounded-full;
          content: "";
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          left: -1.5rem;
          top: 0.625rem;
        }
        @screen md {
          padding-bottom: 2.5rem;
          height: 5.875rem;
        }
        @screen sxl {
          @apply h-auto;
        }
        
      }
      .progress-line {
        width: 0.0625rem;
        height: 120%;
        top: 0;
        left: 1.25rem;
        @apply absolute bg-primary z-10 right-0 md:left-0 md:w-full;
        @screen md {
          height: 0.0625rem;
          top: auto;
        }
        img {
          top: -0.625rem;
        }
      }
      p {
        @screen md {
          padding-top: 1.875rem;
        }
      }
    }
  }
}
</style>