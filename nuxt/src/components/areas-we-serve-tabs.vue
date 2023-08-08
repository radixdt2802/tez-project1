<template>
  <div
    class="area-tabs font-medium rxsection-t-space"
  >
    <!-- <main>{{data}}</main> -->
    <div class="container m-auto">
      <div class="w-full text-center">
        <div v-html="title"></div>
        
      </div>
      <div class="flex flex-wrap">
        <div class="w-full relative">
          <ul
            v-if="data.OnlyTitleList"
            class="
              areaDomainList
              flex
              mb-0
              list-none
              overflow-auto
              pt-3
              flex-row
              border-b border-themelight-50
              dark:border-themedark-10
              cursor-pointer
              justify-center
            "
          >
            <li
              class="flex-auto text-center"
              v-for="(item, index) in data.OnlyTitleList"
              :key="index"
            >
              <div
                class="
                  areaname
                  block
                  leading-normal
                  whitespace-no-wrap
                  no-underline
                  text-lg
                  py-4
                  cursor-pointer
                "
                @click="contentvisiblity(item.VueReferenceCode)"
                :class="
                item.VueReferenceCode == tabId
                    ? 'active text-primary border-b-2 border-primary'
                    : ''
                "
              >
                {{ item.Title }}
              </div>
            </li>
          </ul>

          <div
            class="
              flex flex-wrap
              min-w-0
              break-words
              w-full
              mb-6
              lg:pt-12
              md:pt-10
              pt-8
              flex-auto
              -mx-4
            "
          >
          <template v-for="item in data.OnlyTitleList" :key="item.VueReferenceCode">
            <div
              class="tab-content tab-space w-9/12 px-4 mb-8 mx-auto "
              v-show="item.VueReferenceCode == tabId">
              <div class="text-center">
                <div class="areaBlockMain justify-center 4">
                    
                    <h3 class="h3_sm" v-if="!item.CTA">{{ item.Title }}</h3>
                    <h3 class="h3_sm" v-if="item.CTA" v-html="$md.render(item.CTA ? item.CTA : '')"></h3>
                  <div
                    class="square_list primary_list para_sm"
                    
                  >{{ item.ShortText }}</div>
                    
                    
                </div>
              </div>
              
            </div>
            
          </template>
          <template v-for="item in data.TCLIST" :key="item.VueReferenceCode">
            <div
              class="tab-content tab-space lg:w-1/3 md:w-1/2 w-full px-4 mb-4"
              
              v-show="item.VueReferenceCode == tabId"
              v-if="item.CTA"
              @click="anchor(item.CTA)"
            >
              <div class="border-b-4 border-themelight-20
              hover:border-primary
              dark:border-primary
              smd:flex smd:flex-wrap
              bg-opacitybg-25
              dark:bg-themedark-70
              hover:shadow-lg p-8
              transition-all duration-300 ease-in-out
              h-full cursor-pointer"
             
              >
                <div class="areaBlockMain justify-center 4">
                    
                    <h3>{{item.Title}}</h3>
                  <div
                    class="square_list primary_list"
                    v-rxhtml="item.LongText"
                  ></div>
                    
                    
                </div>
              </div>
              
            </div>
            <div
              class="tab-content tab-space lg:w-1/3 md:w-1/2 w-full px-4 mb-4"
              
              v-show="item.VueReferenceCode == tabId"
              v-if="!item.CTA"
            >
              <div class="border-b-4 border-themelight-20
              hover:border-primary
              dark:border-primary
              smd:flex smd:flex-wrap
              bg-opacitybg-25
              dark:bg-themedark-70
              hover:shadow-lg p-8
              transition-all duration-300 ease-in-out
              h-full cursor-pointer"
             
              >
                <div class="areaBlockMain justify-center 4">
                    
                    <h3>{{item.Title}}</h3>
                  <div
                    class="square_list primary_list"
                    v-rxhtml="item.LongText"
                  ></div>
                    
                    
                </div>
              </div>
              
            </div>
          </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import titleMixin from "../mixins/title.mixin";

export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  name: "area-tabs",
  data() {
    return {
      tabId: "United States",
      titleStyle: "h2",
    };
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
  <style lang="scss">
@layer components {
  .dark {
    .area-tabs {
      .tab-content {
        .light-mode-image {
          display: none;
        }
        .dark-mode-image {
          display: block;
        }
      }
    }
  }
  .area-tabs {
    .tab-content {
      .light-mode-image {
        display: block;
      }
      .dark-mode-image {
        display: none;
      }
    }

    .areaDomain {
      li:focus,
      a:focus {
        @apply bg-transparent;
      }

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
      @screen sxl {
        &::after {
          @apply hidden;
        }
      }
    }

    .areaname {
      @screen sxl {
        padding: 1.875rem 0.625rem;
        margin: 0 0.4375rem;
      }
      @screen xl {
        margin: 0 1rem;
      }
      &.active {
        &:after {
          content: "";
          @apply border-b-2 border-themelight-50 dark:border-themedark-10;
        }
      }
      li > a {
        @apply border-b-2 border-transparent cursor-pointer;
        &.active {
          @apply border-primary;
        }
      }
    }

    .areaBlock-item {
      &:hover {
        box-shadow: 0px 0px 3px 0px #dadada8c, 0px 0px 15px 0px #dadada8c;
      }
      width: 7rem;
      @screen sm {
        width: 12rem;
      }
      @screen lg {
        width: 10rem;
      }
      @apply p-1 text-center my-2 mx-1 transition duration-500;
      img {
        @apply mx-auto;
        max-width: 3.4375rem;
        @screen sm {
          max-width: 5rem;
        }
        @screen lg {
          max-width: 4.688rem;
        }
      }
      /* .areaBlock-name {
          @apply py-2 font-light;
        } */
    }
    .areaBlockMain {
      ul {
        @apply flex flex-wrap items-center justify-center;
        li {
          margin-bottom: 0;
          &::before {
            top: 0.75rem;
          }
          &:not(:last-child) {
            @apply md:mr-10 sm:mr-3 mr-2;
          }
        }
      }
    }
  }
  .dark {
    .areaDomain {
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
</style>