<template>
  <div
    class="sol-fiftyimagecontent relative contentWhite bg-cover"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div
      class="
        absolute
        smd:h-full
        block
        w-full
        smd:w-1/2
        left-auto
        right-0
        top-0
        bg-primary
        dark:bg-themedark-40
      "
    ></div>
    <div class="parentsection mx-auto">
      <div class="flex flex-wrap">
        <div class="contentarea rxsection-y-space-100 w-full smd:w-1/2 px-4">
          <div class="contentonly">
            <!-- <h2>{{ data.Title }}</h2> -->
            <div v-html="title"></div>
            <div
              class="para_md"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
          </div>
        </div>
        <div
          class="iconarea relative rxsection-y-space-100 z-10 w-full smd:w-1/2"
        >
          <!-- <h2>{{ data.SubTitle }}</h2> -->
          <div v-html="subTitle"></div>
          <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
          <div class="icongroup flex flex-wrap">
            <div
              class="iconspace text-center smd:text-left"
              v-if="data.TitleMediaList"
              v-for="item in data.TitleMediaList"
            >
              <div class="logo-back">
                <img
                  class="light-image"
                  v-if="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                  v-rxlazy="item.Icon"
                />
                <img
                  class="dark-image"
                  v-if="item.HoverImage"
                  :width="item.HoverImage.width"
                  :height="item.HoverImage.height"
                  v-rxlazy="item.HoverImage"
                />
              </div>
              <p class="para_md mx-auto">{{ item.Title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
  titleStyle : "h2",
  subTitleStyle: "h2"
  }
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .sol-fiftyimagecontent {
    @apply bg-secondary;
    @screen smd {
      background: #0f1628 no-repeat 0% 23%;
      background-size: content;
      // @apply bg-cover;
    }
    @screen xsm {
      background-image: none;
    }
    .parentsection {
      max-width: 100.5rem;
      .contentarea {
        .contentonly {
          padding-right: 2.75rem;
          @screen sxl {
            margin-left: 3.75rem;
          }
        }
      }
      .iconarea {
        @apply px-4;
        @screen lg {
          padding-left: 1rem;
        }
        @screen smd {
          padding-left: 1rem;
        }
        @screen sxl {
          padding-left: 3.6875rem;
        }
        .icongroup {
          .iconspace {
            @apply relative w-1/2 md:w-2/6 sxl:w-4/12 smd:w-1/2;
            padding: 2.5rem 1rem 1rem 1rem;
            .logo-back {
              padding: 0.9375rem;
              text-align: center;
              display: inline-block;
              vertical-align: middle;
              .dark-image {
                 @apply hidden;
               }
               .light-image {
                 @apply block;
               }
            }
            &:hover {
               .logo-back {
                 @apply bg-white rounded-md;
                 transition: 0.3s all ease;
               }
               .dark-image {
                 @apply block;
               }
               .light-image {
                 @apply hidden;
               }
            }
            p {
              max-width: 12.5rem;
            }
          }
        }
        &:before {
          content: "";
          @apply block absolute top-0 left-0 bottom-0 w-full bg-primary dark:bg-themedark-40 -z-1 smd:hidden;
          min-height: 68%;
        }
      }
    }
  }
 
}
</style>