<template>
  <div class="rxsection-y-space rescue-mision dark:bg-themedark-70">
    <div class="container">
    <div class="h2 text-center" v-html="title"></div>
     <div class="para_md dark:text-themedark-0 text-center mb-12"
            v-if="data.SubTitle"
            v-rxhtml="data.SubTitle"
          ></div>
           <div class="para_md dark:text-themedark-0 text-center mb-12"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
      <div class="flex flex-wrap">
        <div class=" w-full lg:w-1/2">
         
          <!-- <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="para_md pb-8"
          ></div> -->
          <div class="flex flex-col justify-center">
            <div class="flex" v-for="(item, i) in data.TitleContentMediaList">
              <div
                class="
                  mission-card
                  p-5
                  dark:bg-themedark-10
                  sxl:bg-transparent
                  sxl:dark:bg-transparent
                  w-full xl:mb-0 mb-3
                  h-full
                  sxl:p-2
                  flex
                  items-center
                "
              >
                <div
                  class="
                    mission-icon
                    border  border-primary
                    relative
                    rounded-full
                    mx-auto md:mx-0
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ease-in-out;
                  "
                >
                  <img
                    class="dis-icon mx-auto"
                    v-if="item.Icon"
                    v-rxlazy="item.Icon"
                    :width="item.Icon.width"
                    :height="item.Icon.height"
                    alt="Icon"
                  />
                </div>
                <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
                <div class="block mx-4">
                  <div v-html="sTitles[i]"></div>
                  <div v-if="item.LongText" v-rxhtml="item.LongText" class="para-main"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:mt-0 mt-5">
        <div v-if="data.Image">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="xl:mr-0 mx-auto"
          />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from "../mixins/title.mixin";
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
     
      sTitleStyle: "h3_sm pb-0",
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .rescue-mision {
    // @apply text-center;
    .para-main {
        p{
        @apply py-0;
        }
    }
    .row {
      > div {
        &:nth-child(n + 4),
        &:nth-child(3),
        &:nth-child(2) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen md {
          &:nth-child(3),
          &:nth-child(2) {
            margin-top: 0;
          }
        }
        @screen sxl {
          &:nth-child(n + 4) {
            margin-top: 0;
          }
        }
        &:last-child {
          .mission-icon {
            &::before {
              @apply hidden;
            }
          }
        }
      }
    }
    .mission-card {
    
      @screen sxl {
        box-shadow: none;
      }
      &:hover {
        .mission-icon {
          //   @apply bg-primary dark:bg-themedark-80 border-transparent;
          //   .hover-icon {
          //     @apply block;
          //   }
          //   .dis-icon {
          //     @apply hidden;
          //   }
        }
      }
      .mission-icon {
        min-width: 2.5rem;
        min-height: 2.5rem;

        .hover-icon {
          @apply hidden;
        }
        .dis-icon {
          @apply block;
        }
        @screen sxl {
          width: 4rem;
          height: 4rem;
          flex: 0 0 auto;
          &::before {
            @apply absolute bottom-0 left-0 z-0;
            content: "";
            width: calc(100% - 4.999rem);
            height: 0.0625rem;
          }
        }
        @screen xl {
          &::before {
            width: calc(100% - 3.999rem);
          }
          
        }
        @screen xxl {
          &::before {
            width: calc(100% - 1.5rem);
          }
        }
      }
    }
  }
}
</style>
