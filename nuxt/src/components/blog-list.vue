<template>
  <div class="overflow-hidden bloglisting rxsection-b-space">
    <!-- <div>{{data}}</div> -->
    <div class="container">
      <div class="row min-h-screen">
        <rx-lazy
          :disabledLazy="data.dynamicResult !== undefined"
          :currentPage="currentPage"
          @addItems="addItems"
          :sourcePath="data.dynamicSourcePath"
        >
          <div class="blog-size" v-for="item in items" :key="item.Title">
            <blogFilter
              id="blogFilter"
              :data="{
                categories: data['blog-categories'],
              }"
            />
            <div class="blog-back">
              <div class="post-thumb">
                <tez-link
                  :to="item.NavURL"
                  :title="item.Title"
                  :aria-label="item.Title"
                >
                  <img
                    v-if="item.Image"
                    v-rxlazy="item.Image"
                    :alt="item.Image.alternativeText"
                    :width="item.Image.width"
                    :height="item.Image.height"
                  />
                </tez-link>
              </div>
              <div class="post-body" v-if="item.Classification">
                <div>
                  <span class="post-tag-container"
                    >{{ item.Classification.Title }}
                  </span>
                  <tez-link
                    :to="item.Category[0].NavURL"
                    class="pt-0 font-14 post-category"
                  >
                    in {{ item.Category[0].Title }}
                  </tez-link>
                </div>
                <div class="mb-2 post-category-container"></div>
                <tez-link
                  :to="item.NavURL"
                  class="post-title"
                  :title="item.Title"
                  :aria-label="item.Title"
                  >{{ item.Title }}</tez-link
                >
                <p v-if="item.PublishedDate" class="pt-0 mb-0 featured-post-author-desc text-sm">
                  {{
                    new Date(item.PublishedDate).toLocaleString("default", {
                      month: "short",
                    })
                  }}
                  {{ new Date(item.PublishedDate).getDate() }},
                  {{ new Date(item.PublishedDate).getFullYear() }}
                  <!-- <span class="span-reading-time rt-reading-time">
                    <span class="rt-label rt-prefix"></span>
                    <span class="rt-time">{{ item.ReadingTime }} min read</span>
                  </span> -->
                </p>
                <p v-if="item.LastModifiedDate" class="pt-0 mb-0 featured-post-author-desc text-sm">
                  {{
                    new Date(item.LastModifiedDate).toLocaleString("default", {
                      month: "short",
                    })
                  }}
                  {{ new Date(item.LastModifiedDate).getDate() }},
                  {{ new Date(item.LastModifiedDate).getFullYear() }}
                  <!-- <span class="span-reading-time rt-reading-time">
                    <span class="rt-label rt-prefix"></span>
                    <span class="rt-time">{{ item.ReadingTime }} min read</span>
                  </span> -->
                </p>
              </div>
              <div class="post-footer">
                <div class="flex items-center media">
                  <tez-link
                    :to="item.BlogAuthor.NavURL"
                    :title="item.BlogAuthor.Name"
                    v-if="item.BlogAuthor && item.BlogAuthor.Image"
                    class="mr-3 p-featured"
                  >
                    <img
                      class="featured-post-author-thumb"
                      v-rxlazy="item.BlogAuthor.Image"
                      width="60"
                      height="60"
                      :alt="item.Image.alternativeText"
                    />
                  </tez-link>
                  <span class="media-body">
                    <a
                      :href="item.BlogAuthor.NavURL"
                      :title="item.BlogAuthor.Name"
                      class="mt-0 mb-0 featured-post-author-title"
                      v-if="item.BlogAuthor"
                      >{{ item.BlogAuthor.Name }}</a
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </rx-lazy>
      </div>
      <div
        v-if="data.dynamicResult === undefined"
        class="
          row
          border-t-2 border-b-2 border-themedark-75
          dark:border-themedark-65
          py-5
          my-7
          justify-around
        "
      >
        <button
          class="
            rounded-3xl
            border-2 border-themedark-75
            dark:border-themedark-65
            py-2
            px-5
            md:px-8 md:py-3
            hover:border-primary hover:text-primary
          "
          :disabled="disablePrevious"
          @click="movePrevious()"
        >
          Back
        </button>
        <div class="font-semibold items-baseline">
          <p>Page {{ currentPage }} of {{ totalPages }}</p>
        </div>
        <button
          class="
            rounded-3xl
            border-2 border-themedark-75
            py-2
            px-5
            md:px-8 md:py-3
            dark:border-themedark-65
            hover:border-primary hover:text-primary
          "
          :disabled="disableNext"
          @click="moveNext()"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from "@vue/runtime-core";
import ParserInline from "markdown-it/lib/parser_inline";
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
const RxLazy = defineAsyncComponent(() => import("./rx-lazy.vue"));
const blogFilter = defineAsyncComponent(() => import("./blog-filter.vue"));
export default {
  data() {
    return {
      items: [],
      totalPages: 0,
      currentPage: 1,
      disableNext: false,
      disablePrevious: false,
      isTicked: false,
    };
  },
  props: {
    data: Object,
  },
  computed: {
    next() {
      var page = this.currentPage + 1;
      this.disableNext = this.currentPage > this.totalPages;
      return page < this.totalPages ? page : this.totalPages;
    },
    previous() {
      var page = this.currentPage - 1;
      this.disablePrevious = page === 0;
      return this.disablePrevious ? 0 : this.currentPage - 1;
    },
  },
  watch: {
    data(value) {
      this.items = [];
      this.currentPage = 1;
      this.dataChanged();
    },
  },
  components: {
    DynamicComponent,
    RxLazy: RxLazy,
    blogFilter: blogFilter,
  },
  mounted() {
    this.dataChanged();
  },
  methods: {
    dataChanged() {
      this.isTicked = false;
      this.totalPages = 0;
      if (this.data.dynamicResult) this.items = this.data.dynamicResult;
      // if (this.$route.query.page) {
      //   this.currentPage = parseInt(this.$route.query.page);
      this.currentPage = 1;
      //} else this.currentPage = 1;
    },
    createLink(type, pageNumber) {
      var linkElement = document.getElementById(type);
      var isExits = true;
      if (!linkElement) {
        linkElement = document.createElement("link");
        isExits = false;
      }
      linkElement.id = type;
      linkElement.rel = type;
      linkElement.href = pageNumber
        ? `${window.location.host}${this.$tezRouter.path}?page=${pageNumber}`
        : `${window.location.host}${this.$tezRouter.path}`;
      if (!isExits) document.head.appendChild(linkElement);
    },
    moveNext() {
      this.isTicked = true;
      this.currentPage = this.currentPage + 1;
      this.$router.replace({ query: { page: this.currentPage } });
    },
    movePrevious() {
      this.isTicked = true;
      this.currentPage = this.currentPage - 1;
      this.$router.replace({ query: { page: this.currentPage } });
    },
    addItems(page) {
      this.totalPages = page.pages;
      this.currentPage = page.currentPage;
      if (this.items.length === 0 || this.isTicked) {
        this.items = page.items;
        this.isTicked = false;
      } else page.items.forEach((t) => this.items.push(t));
      this.createLink("prev", this.previous);
      this.createLink("next", this.next);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .bloglisting {
    margin-top: 1.875rem;
    @screen md {
      margin-top: 3.75rem;
    }
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    a {
      @apply no-underline;
    }
    .row {
      .blog-size {
        @apply w-full;
        transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out,
          -webkit-transform 0.15s ease-in-out;
        min-height: 100%;
        padding: 0 0.938rem;
        @screen md {
          @apply w-1/2;
        }
        @screen smd {
          @apply w-1/3;
        }
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 1.5rem;
        }
        @screen md {
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4),
          &:nth-child(3) {
            margin-top: 1.5rem;
          }
        }
        @screen smd {
          &:nth-child(3),
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4) {
            margin-top: 3rem;
          }
        }
        .blog-back {
          @apply bg-themelight-10 flex flex-col h-full dark:bg-themedark-10;
          .post-body {
            @apply p-4 flex flex-col items-start flex-grow;
            @screen xsm {
              padding: 1.25rem;
            }
            @screen md {
              padding: 1.5rem;
            }
            @screen sxl {
              padding: 1.25rem 1.5625rem;
            }
            .post-tag-container {
              @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0 font-medium;
              font-size: 0.75rem;
              padding: 0.125rem 0.625rem;
              margin-right: 0.313rem;
              line-height: normal;
              margin-bottom: 0.625rem;
              @screen sm {
                font-size: 0.875rem;
                padding: 0.125rem 0.875rem;
              }
            }
            .post-category-container {
              @apply w-full mb-2;
              a {
                @apply text-primary font-semibold;
                &:hover,
                &:active {
                  @apply text-themedark-0;
                  transition: 0.3s ease all;
                }
              }
            }
            .post-title {
              @apply w-full font-medium;
              font-size: 1.25rem;
              line-height: 2rem;
              &:hover,
              &:active {
                @apply text-primary;
                transition: 0.3s ease all;
              }
              @screen xxsm {
                font-size: 1.375rem;
              }
              @screen xl {
                font-size: 1.75rem;
                line-height: 2.625rem;
              }
            }
          }
          .post-thumb {
            img {
              &:hover {
                transition: transform 0.6s cubic-bezier(0.11, 0, 0.31, 1),
                  -webkit-transform 0.6s cubic-bezier(0.11, 0, 0.31, 1);
                width: 100%;
              }
            }
          }
        }
        .post-footer {
          @apply border-t-2 py-3 px-4 border-solid border-white bg-themelight-10 dark:bg-themedark-65 dark:text-themelight-0 flex items-center;
          height: 86px;
          @screen xsm {
            padding: 0.75rem 1.25rem;
          }
          @screen md {
            padding: 0.75rem 1.5rem;
          }
          @screen sxl {
            padding: 0.75rem 1.5625rem;
          }
          .p-featured {
            width: 60px;
            height: 60px;
            overflow: hidden;
          }
          .featured-post-author-thumb {
            @apply border-2 border-solid border-primary rounded-full;
          }
          .featured-post-author-title {
            @apply font-normal text-sm;
            &:hover,
            &:active {
              @apply text-primary;
              transition: 0.3s ease all;
            }
          }
          .featured-post-author-desc {
            @apply text-sm leading-6 font-poppins p-0;
            letter-spacing: 0.0175rem;
          }
        }
      }
    }
  }
}
</style>