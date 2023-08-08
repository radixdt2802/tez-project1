<template>
  <div class="oaus rxsection-y-space">
    <div class="container">
      <div class="text-center h2">Our Approach to UI UX Services</div>
      <div class="overflow-hidden">
        <div class="oaus-body">
          <div class="oaus-container relative">
            <ul class="tab-list md:block hidden">
              <li
                class="text-right"
                :key="index"
                v-for="(item, index) in data.TitleContentList"
              >
                <div
                  class="flex items-center cursor-pointer"
                  @click="contentvisiblity(index)"
                  :class="index == tabId ? 'active' : ''"
                >
                  <p>{{ item.Title }}</p>
                  <span>{{ item.SubTitle }}</span>
                </div>
              </li>
            </ul>

            <div class="hidden md:block">
              <div
                class="tab-content tab-space"
                :key="index"
                v-for="(item, index) in data.TitleContentList"
              >
                <div v-show="index == tabId" v-bind:id="item.id">
                  <div class="text-center tabbing-inner mx-auto">
                    <div class="para_lg text-primary h3">{{ item.Title }}</div>
                    <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:hidden block responsive">
              <div v-for="item in data.TitleContentList" :key="item.id">
                <h3 class="para_lg text-primary">{{ item.Title }}</h3>
                <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
  name: "uiux-tabs",
  data() {
    return {
      tabId: 0,
    };
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
  },
};
</script>
<style lang="scss">
@layer components {
  .oaus {
    .oaus-body {
      max-width: 29.375rem;
      @screen md {
        max-width: 39.375rem;
      }
      @screen smd {
        max-width: 45rem;
      }
      @screen sxl {
      }
      @screen xl {
        max-width: 52.0625rem;
      }
      @screen xxl {
        max-width: 60.5625rem;
      }
      margin: 0 auto;
    }
    .oaus-container {
      min-height: 14.6875rem;
      @screen md {
        min-height: 19.6875rem;
      }
      @screen smd {
        min-height: 23.4375rem;
      }
      @screen sxl {
        min-height: 30.1875rem;
      }
      &::before {
        @apply absolute w-full left-0 bottom-0 rounded-full -z-1 border-4 border-dotted hidden md:block;
        content: "";
        height: 200%;
        border-color: #cfd6e7;
      }
    }
    .responsive {
      > div + div {
        margin-top: 1.875rem;
      }
    }
    .tab-content {
      .tabbing-inner {
        padding: 0;
        max-width: 18.125rem;
        @screen md {
          max-width: 25.5625rem;
          padding: 3.125rem 0 0;
        }
        @screen sxl {
          padding: 5.625rem 0;
        }
      }
    }
    .tab-list {
      li {
        position: absolute;
        &:nth-child(n + 4) {
          > div {
            span {
              order: 0;
            }
            p {
              order: 1;
              text-align: left;
              margin-left: 1.875rem;
              margin-right: 0;
            }
          }
        }
        &:nth-child(1) {
          left: -4%;
          @screen sxl {
            left: -28%;
          }
          @screen xl {
            left: -26%;
          }
          @screen xxl {
            left: -23%;
          }
          top: 0;
        }
        &:nth-child(2) {
          left: 5%;
          @screen sxl {
            left: -24%;
          }
          @screen xl {
            left: -19%;
          }
          @screen xxl {
            left: -14%;
          }
          top: 50%;
        }
        &:nth-child(3) {
          left: 29%;
          top: 84%;
          @screen sxl {
            left: -3%;
          }
          @screen xl {
            left: 2%;
          }
          @screen xxl {
            left: 9%;
            top: 86%;
          }
        }

        &:nth-child(4) {
          right: 28%;
          top: 83%;
          @screen sxl {
            right: -1%;
          }
          @screen xl {
            right: 8%;
            top: 84%;
          }
          @screen xxl {
            right: 11%;
            top: 86%;
          }
        }

        &:nth-child(5) {
          right: 5%;
          @screen sxl {
            right: -26%;
          }
          @screen xl {
            right: -19%;
          }
          @screen xxl {
            right: -14%;
          }
          top: 50%;
        }

        &:nth-child(6) {
          right: -4%;
          @screen sxl {
            right: -30%;
          }
          @screen xl {
            right: -26%;
          }
          @screen xxl {
            right: -23%;
          }
          top: 0;
        }
        p {
          @apply font-poppins font-normal xxl:text-xl text-lg leading-7 hidden sxl:block;
          max-width: 10rem;
          margin-right: 0.9375rem;
          @screen xl {
            margin-right: 1.875rem;
          }
          padding: 0;
        }
        div {
          text-decoration: none;
          &:hover,
          &.active {
            span {
              @apply bg-primary text-themelight-0 border-primary;
            }
          }
        }
        span {
          @apply rounded-full border border-solid border-secondary dark:border-themelight-10 font-poppins font-medium bg-themelight-0 transition-all duration-300 ease-in-out text-center dark:bg-themedark-10;
          width: 2.5rem;
          height: 2.5rem;
          line-height: 2.5rem;
          @screen md {
            width: 3.125rem;
            height: 3.125rem;
            font-size: 1.25rem;
            line-height: 3.125rem;
          }
          @screen smd {
            width: 3.75rem;
            height: 3.75rem;
            font-size: 1.875rem;
            line-height: 3.75rem;
          }
          @screen xxl {
            width: 4.125rem;
            height: 4.125rem;
            font-size: 2rem;
            line-height: 4.125rem;
          }
        }
      }
    }
  }
}
</style>