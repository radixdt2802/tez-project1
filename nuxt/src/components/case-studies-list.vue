<template>
  <div class="px-4 py-8">
    <div
      class="container m-auto"
      v-if="data['case-studies-categories'].data.dynamicResult"
    >
      <div class="caseStudies-tabs row relative md:justify-center">
        <ul
          class="
            caseStudyDomainList
            flex
            mb-0
            list-none
            overflow-x-auto overflow-y-hidden
            pt-3
            cursor-pointer
            list_md
          "
        >
          <li>
            <div
              class="
                caseStudyName
                block
                leading-normal
                whitespace-nowrap
                cursor-pointer
                text-center
              "
              @click="backToAll()"
              :class="allDataTrigger ? 'border-b-2 border-primary' : ''"
            >
              All
            </div>
          </li>
          <li
            v-for="item in data['case-studies-categories'].data.dynamicResult"
            v-bind:key="item.id"
          >
            <div
              class="
                caseStudyName
                block
                leading-normal
                whitespace-nowrap
                cursor-pointer
                text-center
              "
              @click="contentvisiblity(item.id)"
              :class="
                item.id == tabId && !allDataTrigger
                  ? 'border-b-2 border-primary'
                  : ''
              "
            >
              {{ item.Title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row rxsection-b-space t-space-60" v-if="data.dynamicResult">
      <div
        class="px-4 xl:w-1/4 sxl:w-1/3 md:w-1/2 w-full"
        v-for="item in data.dynamicResult"
        :key="item.id"
        v-bind:id="item.Category.id"
        v-show="item.Category.id == tabId || allDataTrigger"
      >
        <div class="relative cswraper overflow-hidden mb-6 smd:mb-8">
          <div>
            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
            />
          </div>
          <tez-link
            class="
              casBox
              absolute
              top-0
              left-0
              w-full
              h-full
              flex
              items-center
              justify-center
              mx-auto
              text-center
            "
            :to="item.NavURL"
            :title="item.Title"
          >
            <span class="btn btn_sm btn_white">View</span>
          </tez-link>
          <h3 class="csTitle para_md">
            {{ item.Title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
export default {
  props: {
    data: Object,
  },
  components: {
    DynamicComponent,
  },
  data() {
    return {
      tabId: 0,
      allDataTrigger: {
        type: Boolean,
        default: true,
      },
    };
  },
  methods: {
    contentvisiblity(value) {
      this.tabId = value;
      this.allDataTrigger = false;
    },
    backToAll() {
      this.allDataTrigger = true;
      this.tabId = "";
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .caseStudies-tabs {
      ul.caseStudyDomainList {
        &::after {
          @apply absolute right-0 top-0 h-full;

          content: "";
          width: 3.125rem;

          background: -o-linear-gradient(
            left,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.98) 98%,
            rgba(0, 0, 0, 1) 100%
          );
          background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 0)),
            color-stop(98%, rgba(0, 0, 0, 0.98)),
            to(rgba(0, 0, 0, 1))
          );
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.98) 98%,
            rgba(0, 0, 0, 1) 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
        }
      }
    }
  }
  .caseStudies-tabs {
    ul.caseStudyDomainList {
      &::after {
        @apply absolute right-0 top-0 h-full;

        content: "";
        width: 3.125rem;

        background: -o-linear-gradient(
          left,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.98) 98%,
          rgba(255, 255, 255, 1) 100%
        );
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(255, 255, 255, 0)),
          color-stop(98%, rgba(255, 255, 255, 0.98)),
          to(rgba(255, 255, 255, 1))
        );
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.98) 98%,
          rgba(255, 255, 255, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
      }
    }
    @apply font-medium;
    a {
      @apply no-underline;
    }
    .caseStudyName {
      @apply pt-3 no-underline cursor-pointer font-semibold;
      padding-bottom: 1.875rem;
      padding: 1.25rem 1.5625rem;
      @screen smd {
        padding: 1.25rem 1.5625rem;
      }
      @screen sxl {
        padding: 1.875rem 0.625rem;
        margin: 0 0.4375rem;
      }
      @screen xl {
        padding: 1.875rem 0.625rem;
        margin: 0 1rem;
      }
      li > a {
        font-size: 1.125em;
        @apply border-b-2 border-transparent cursor-pointer;
        &.active {
          @apply border-primary;
        }
      }
    }
  }
  .csTitle {
    @apply absolute w-full text-center bottom-0 px-4 py-8 bg-opacitybg-30 text-white transition-all ease-in-out duration-300;
  }
  .cswraper {
    &:hover {
      .csTitle {
        @apply transform translate-y-full;
      }
      .casBox {
        opacity: 1;
        &::after,
        &::before {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
  .casBox {
    content: "";
    background: rgba(15, 22, 40, 0.7);
    opacity: 0;
    backface-visibility: hidden;
    &::before,
    &::after {
      position: absolute;
      content: "";
      opacity: 0;
      transition: opacity 0.3s, transform 0.6s;
    }
    &::after {
      top: 2rem;
      right: 3.125rem;
      bottom: 2rem;
      left: 3.125rem;
      border-right: 0.0625rem solid #ffffff;
      border-left: 0.0625rem solid #ffffff;
      transform: scale(1, 0);
      transform-origin: 100% 0;
    }
    &::before {
      top: 3.125rem;
      right: 2rem;
      bottom: 3.125rem;
      left: 2rem;
      border-top: 0.0625rem solid #fff;
      border-bottom: 0.0625rem solid #fff;
      transform: scale(0, 1);
      transform-origin: 0 0;
    }
  }
}
</style>