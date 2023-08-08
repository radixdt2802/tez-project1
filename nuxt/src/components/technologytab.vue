<template>
  <div
    class="technology-tabs font-medium"
    :class="{
      'rxsection-y-space dark:bg-themedark-0':
        data.VueReferenceCode == 'TechnologyExpertise_Tab_WSpace',
      'noSpace': data.VueReferenceCode == 'TechnologyExpertise_Tab_NoSpace',
      'rxsection-t-space': data.VueReferenceCode == 'TechnologyExpertise_Tab',
      'rxsection-b-space': data.VueReferenceCode == 'TechnologyExpertise_Tab_BSpace',
      
    }"
  >
    <div class="container m-auto">
      <div class="w-full text-center">
        <div v-html="title"></div>
        <!-- <div class="h2">{{ data.Title }}</div> -->
        <p class="para_md pb-5 smd:pb-8 dark:text-themedark-75" v-if="data.SubTitle">
          {{ data.SubTitle }}
        </p>
        <p class="para_md dark:text-themedark-75" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md"
        ></div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full relative">
          <ul class="techDomain flex mb-0 list-none overflow-x-auto overflow-y-hidden pt-3 flex-row border-b border-themelight-50 dark:border-themedark-10 cursor-pointer" v-if="data.TitleContentMediaList">
            <li
              class="flex-auto text-center"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div
                class="techname block leading-normal whitespace-no-wrap text-lg no-underline pt-3 cursor-pointer py-5 px-6"
                @click="contentvisiblity(index)"
                :class="index == tabId ? 'active text-primary border-b border-primary' : ''"
                >{{ item.Title }}</div>
            </li>
          </ul>

          <ul v-if="data.TitleContentList" class="techDomainList flex mb-0 list-none overflow-auto pt-3 flex-row border-b border-themelight-50 dark:border-themedark-10 cursor-pointer justify-center">
            <li
              class="flex-auto text-center"
              v-for="(item, index) in data.TitleContentList"
              :key="index"
            >
              <div
                class="techname block leading-normal whitespace-no-wrap no-underline text-lg py-4 cursor-pointer"
                @click="contentvisiblity(index)"
                :class="index == tabId ? 'active text-primary border-b-2 border-primary' : ''"
                >{{ item.Title }}</div>
            </li>
          </ul>

          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              w-full
              mb-6
              lg:pt-12
              md:pt-10
              pt-8
              flex-auto
            "
          >
            <div
              class="tab-content tab-space"
              v-if="data.TitleContentMediaList"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div v-bind:id="item.id" :key="item.id" v-show="index == tabId">
                <div class="justify-center flex flex-wrap">
                  <div
                    class="technologyBlock-item transition-all duration-300 ease-in-out light-mode-image"
                    v-for="key in item.ImageCollection"
                    :key="key.id"
                  >
                    <tez-link v-if="key.caption && key.name !='TezJS'" :to="key.caption" :title="key.name" class="no-underline">
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :title="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />

                      <div class="technologyBlock-name py-2 font-light">{{ key.name }}</div>
                    </tez-link>
                    <a v-else-if="key.caption && key.name =='TezJS'" :href="key.caption" target="_blank" :title="key.name" class="no-underline">
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :title="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />

                      <div class="technologyBlock-name py-2 font-light">{{ key.name }}</div>
                    </a>
                    <div v-else>
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />
                      <div class="technologyBlock-name py-2 font-light">{{ key.name }}</div>
                    </div>
                  </div>

                  <div
                    class="technologyBlock-item transition-all duration-300 ease-in-out dark-mode-image"
                    v-for="key in item.MultipleMedia"
                    :key="key.id"
                  >
                  
                    <tez-link v-if="key.caption && key.name !='TezJS'" :to="key.caption" :title="key.name" class="no-underline">
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :title="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />

                      <div class="technologyBlock-name py-2 font-light">
                        {{ key.name }}
                      </div>
                    </tez-link>
                    <a v-else-if="key.caption && key.name =='TezJS'" :href="key.caption" target="_blank" :title="key.name" class="no-underline">
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :title="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />

                      <div class="technologyBlock-name py-2 font-light">{{ key.name }}</div>
                    </a>
                    <div v-else>
                      <img
                        v-rxlazy="key"
                        :alt="key.alternativeText"
                        :width="key.width"
                        :height="key.height"
                      />
                      <div class="technologyBlock-name py-2 font-light">
                        {{ key.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-content tab-space"
              v-if="data.TitleContentList"
              v-for="(item, index) in data.TitleContentList"
              :key="index"
            >
              <div v-bind:id="item.id" :key="item.id" v-show="index == tabId">
                <div class="technologyBlockMain justify-center flex flex-wrap">
                  <div
                    class="square_list primary_list"
                    v-rxhtml="item.LongText"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';
import titleMixin from '../mixins/title.mixin';

export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  name: "tech-tabs",
  data() {
    return {
      tabId: 0,
      titleStyle : "h2"
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
  .dark {
    .technology-tabs {
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
  .technology-tabs {
    .tab-content {
      .light-mode-image {
        display: block;
      }
      .dark-mode-image {
        display: none;
      }
    }

    
    .techDomain {
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

    .techname {
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

    .technologyBlock-item {
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
      /* .technologyBlock-name {
        @apply py-2 font-light;
      } */
    }
    .technologyBlockMain {
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
    .techDomain {
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