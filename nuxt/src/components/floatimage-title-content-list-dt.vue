<template>
  <div
    class="
      rxsection-y-space
      floatingimagecontent-dt
      floatimage-dt
      bg-secondary
      dark:bg-themedark-70
    "
  >
    <div class="container">
      <div class="icon-content-list flex flex-wrap">
        <div class="maintitle">
          <div class="text-themelight-0 text-center title-box h2">
            {{ data.Title }}
          </div>

          <div
            class="para_md smBtmHighlight"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div class="contentlist row t-space-60 content-between">
          <div class="bgCard-row flex flex-wrap justify-between">
            <div class="bgCard" v-for="(item, i) in data.TitleContentMediaList">
              <div class="inline-block w-auto IconWrap relative">
                <img
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                  :alt="item.Icon.alternativeText"
                  class="mb-3 light-image"
                />
                <img
                  v-if="item.HoverIcon"
                  v-rxlazy="item.HoverIcon"
                  :width="item.HoverIcon.width"
                  :height="item.HoverIcon.height"
                  :alt="item.HoverIcon.alternativeText"
                  class="mb-3 hoverIcon"
                />
                <img
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.Image.alternativeText"
                  class="mb-3 dark-image"
                />
              </div>
              <!-- <h3>{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-if="data.SubTitle" class="afterText hidden sxl:block">{{
      data.SubTitle
    }}</span>
  </div>
</template>
    <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      sTitleStyle: "h3",
    };
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .floatimage-dt {
    @apply bg-none;
    @screen sxl {
      background-image: url("~assets/images/floating.jpg");
      background-size: 57.8125% auto;
      @apply bg-no-repeat bg-right-top;
      transition: background-size 3s ease;
      &:hover {
        /* background-size:57.8125% auto; */
        background-size: 60% auto;
      }
    }
  }

  .floatingimagecontent-dt {
    .contentlist {
      max-width: 22.5rem;
      @apply w-full mx-auto;
      @screen sm {
        max-width: 47.93rem;
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    .hoverIcon {
      @apply bg-contain bg-no-repeat;
    }
    .bgCard {
      .IconWrap {
        img:not(.hoverIcon) {
          @apply opacity-100 transform scale-100;
          transition: all ease-in-out 0.7s;
        }
        @apply rounded-none;
        transition: all ease-in-out 0.5s;
        .hoverIcon {
          @apply absolute top-0 transform left-auto right-auto opacity-0;
        }
      }
      &:hover {
        .IconWrap {
          img:not(.hoverIcon) {
            @apply opacity-0 scale-50;
            transition: inherit;
          }
          @apply bg-primary;
          transition: all ease-in-out 0.4s;
          border-radius: 50%;
          .hoverIcon {
            @apply opacity-100 scale-50;
          }
        }
      }
    }
    @screen sxl {
      @apply relative;
      .afterText {
        font-size: 11.2vw;
        @apply text-opacitybg-55 dark:text-opacitybg-55 absolute block left-0 font-semibold;
        bottom: 11rem;
        line-height: 15rem;
      }
      @apply bg-secondary bg-no-repeat bg-right-top;
      transition: background-size 3s ease;
    }
    @screen xl {
      .afterText {
        font-size: 11.5vw;
        bottom: 8rem;
      }
    }
    @screen xxl {
      .afterText {
        bottom: 8.3rem;
      }
    }
    @screen xxxl {
      .afterText {
        font-size: 11.8vw;
        bottom: 7.5rem;
      }
    }
    .maintitle {
      @apply w-full  text-center mb-12;
      .smBtmHighlight {
        @apply pb-6 lg:w-full relative text-themelight-0;
        &:after {
          content: "";
          @apply bg-primary dark:bg-themedark-65 absolute inline-block w-20 left-0 right-0 bottom-0 mt-8 mx-auto;
          width: 20vw;
          height: 0.188rem;
        }
        p {
          @apply text-themelight-0;
        }
        @screen smd {
          padding-bottom: 1.875rem;
        }
        @screen sxl {
          @apply pb-4 lg:w-full relative;
          &:after {
            content: "";
            @apply bg-primary absolute inline-block left-0 bottom-0  m-0;
            width: 4.688rem;
            height: 0.188rem;
          }
        }
      }

      p {
        @screen xl {
          padding-bottom: 1.875rem;
        }
      }
      h2 {
        @screen xxsm {
          font-size: 1.5rem;
          line-height: 2.125rem;
        }
        @screen xsm {
          font-size: 1.875rem;
          line-height: 2.625rem;
        }
        @screen md {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
        @screen sxl {
          font-size: 2.5rem;
          line-height: 3.25rem;
        }
        @screen xl {
          font-size: 2.75rem;
          line-height: 1 rem;
        }
      }
    }

    @screen sxl {
      .maintitle {
        @apply w-2/6 text-themelight-0 mb-12;
        .title-box {
          border-width: 0.93rem;
          @apply text-left border-customcolor-65 dark:border-themedark-65 border-solid leading-tight;
          margin: 4.25rem auto 4.375rem;
          padding: 1.875rem;
          @apply pr-16;
        }

        p {
          @apply text-left pr-4 relative text-white;
          line-height: 2.125rem;
          padding-bottom: 1.25rem;
        }
        .para_md {
          @apply p-0;
        }
      }
    }

    .contentlist {
      @apply w-full bg-opacitybg-10 py-6 dark:bg-opacitybg-30;
      .bgCard {
        @apply w-full text-center;
        padding: 1.563rem 0.93rem;

        img {
          margin: 0 auto;
          @apply w-16 h-16;
        }
        h3,
        .h3 {
          @apply font-semibold mt-3;
          font-size: 1.375rem;
          line-height: 2rem;
          @screen md {
            font-size: 1.25rem;
            line-height: 1.875rem;
          }
          @screen smd {
            font-size: 1.5rem;
            line-height: 2.25rem;
          }
          @screen lg {
            padding-bottom: 0;
          }
          @screen sxl {
            font-size: 1.375rem;
            line-height: 2rem;
          }
          @screen xl {
            font-size: 1.5rem;
            line-height: 2.25rem;
          }
        }

        p {
          /* @apply text-base font-poppins; */
          line-height: 1.625rem;
          @screen xxsm {
            padding: 0.625rem 0;
          }
          @screen sm {
            font-size: 1.063rem;
            line-height: 1.75rem;
          }
          @screen md {
            font-size: 1.25rem;
            line-height: 2rem;
          }
          @screen smd {
            line-height: 2rem;
          }

          @screen xl {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
        }
      }
    }
    @screen sm {
      .contentlist {
        .bgCard {
          @apply w-2/4;
        }
      }
    }
    @screen md {
      .contentlist {
        @apply mx-auto;
        max-width: 47.937rem;
      }
    }
    @screen sxl {
      .contentlist {
        @apply bg-opacitybg-10 m-0;
        padding: 2.625rem 3.125rem 2.625rem 6.25rem;
        max-width: 66.66%;
        .bgCard {
          @apply w-2/4 text-left py-6 px-5;
          img {
            @apply m-0;
          }
          p {
            @apply dark:text-themelight-0;
          }
        }
      }
    }
  }
  .dark {
    .floatingimagecontent-dt {
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