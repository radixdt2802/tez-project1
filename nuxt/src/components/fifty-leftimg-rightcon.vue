<template>
  <div
    class="
      rxsection-y-space
      fifty-leftimg-rightcon
      smd:pb-24
      pb-0
      bg-secondary
      dark:bg-themedark-70
      contentWhite
      relative
    "
  >
    <div class="container-fluid mx-auto px-4">
      <div class="row">
        <div
          class="
            xxl:w-5/12
            sxl:w-6/12
            smd:w-1/2
            w-full
            mx-auto
            md:mr-0
            smd:pl-6
            px-4
            z-10
          "
        >
          <h2>{{ data.Title }}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div class="row sm:mt-12 mt-8 count-div">
            <div
              class="text-center sm:w-4/12 w-full px-4"
              v-for="item in data.TitleContentList"
            >
              <div class="para_xl font-bold">{{ item.Title }}</div>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
        <div
          class="
            bg-primary
            smd:dark:bg-themedark-0
            dark:bg-themedark-0
            z-10
            float-con-left
            smd:absolute
            bottom-0
            md:pt-12
            md:pb-24
            smd:pt-0
            smd:pb-0
            xxsm:py-12
            pt-6
            pb-12
            mt-0
            left-0
            smd:w-1/2
            w-full
            md:h-full
            relative
            flex
            items-center
          "
        >
          <p
            class="para_md text-center px-4 z-10 mx-auto"
            v-if="data.ShortText"
          >
            {{ data.ShortText }}
          </p>
        </div>
        <div
          class="float-bg bg-center"
          v-bind:style="[
            data.Image
              ? { backgroundImage: 'url(' + data.Image.url + ')' }
              : '',
          ]"
          :class="[data.Image ? '' : 'bg-secondary']"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .fifty-leftimg-rightcon {
    .container-fluid {
      max-width: 102.375rem;
    }
    .count-div {
      > div {
        &:not(:last-child) {
          @apply sm:mb-0 mb-8 sm:border-r border-solid border-themelight-0 dark:border-themedark-65;
        }
        p {
          max-width: 12.5rem;
          margin: 0 auto;
        }
      }
    }
    .float-con-left {
      height: 50%;
      margin-top: 1.5625rem;
      @screen xxsm {
        margin-top: 3.125rem;      
      }
      @screen md {
        margin-top: 2.8125rem;
      }
      p {
        max-width: 40.625rem;
        @screen smd {
          max-width: 37.5rem;
        }
      }
    }
    .float-bg {
      opacity: 0.1;
      @apply absolute w-full smd:w-1/2 top-0 left-0 bg-cover bg-no-repeat sm:block h-full sm:z-0 hidden smd:opacity-100;
      @screen smd {
        height: 50%;
      }
    }
    .para_xl {
      font-size: 1.625rem;
      line-height: 1.625rem;
      @apply text-themelight-0;
      @screen xxsm {
        font-size: 5.2vw;
        line-height: 5.2vw;
      }
      @screen sm {
        font-size: 4.8vw;
        line-height: 4.8vw;
      }
      @screen md {
        font-size: 4.1vw;
        line-height: 4.1vw;
      }
      @screen smd {
        font-size: 1.875rem;
        line-height: 2.625rem;
      }
      @screen sxl {
        font-size: 2.25rem;
        line-height: 3rem;
      }
      @screen xxl {
        font-size: 2.75rem;
        line-height: 3.5rem;
      }
    }
  }
  .dark {
    .float-con-left {
      --bg-opacity: 0.3;
      @screen smd {
        --bg-opacity: 1;
      }
    }
  }
}
</style>