<template>
  <div class="news-details mt-16">
    <div class="news-inner">
      <div class="container">
        <div class="row">
          <div class="px-4 news-content mx-auto">
            <div class="post-category-container"></div>
            <h1>{{ data.Title }}</h1>
              <div>
                <p class="post-category pb-6">
                  {{
                    new Date(data.PublishedDate).toLocaleString("default", {
                    month: "short",})
                  }}
                  {{ new Date(data.PublishedDate).getDate() }},
                  {{ new Date(data.PublishedDate).getFullYear() }}</p>
              </div>
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
            />
            <div class="news-inner-main min-h-screen">
              <div v-rxhtml="data.LongText"></div>
            </div>
             <!-- Static Footer -->
            <div class="custom-footer bg-themelight-10 dark:bg-themedark-10 p-4 border border-themelight-50 dark:border-themedark-65 rounded-xl">
            <div class="h3_sm">{{data.news_signature.Title}}</div>
            <p class="para_sm">{{data.news_signature.Description}}</p>
            

            <div class="h3_sm">Contact Person:</div>
            <address class="mb-0">
              <strong class="block"><em class="text-lg font-medium">{{data.news_signature.ContactPersonName}}</em></strong>
              <em class="block text-lg font-medium">{{data.news_signature.Designation}}</em>
              <em class="block text-lg font-medium">{{data.news_signature.Address}}</em>

             <a
                class="block text-lg mb-2"
                :href="'mailto:data.news_signature.Email'"
                :title="data.news_signature.Email"
                >{{data.news_signature.Email}}</a>
             <a class="block text-lg mb-2" :href="'tel:data.news_signature.PhoneNumber'" :title="data.news_signature.PhoneNumber"
                >{{data.news_signature.PhoneNumber}}</a>
             <tez-link to="/" class="block text-lg mb-2" :title="data.news_signature.Website">{{data.news_signature.Website}}</tez-link>
            </address>
            </div>
            <!-- Static Footer -->
            <!--  share this post! Starts -->
             <div class="rx-social-container">
              <div class="mr-auto">
                <div class="h4 font-normal">Don't Forget to share this post!</div>
              </div>
              <div
                class="radix-social-share flex flex-wrap"
                id="footer-social-menu"
              >
                <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Share_e47e21d3dd.svg'"
                  width="20"
                  height="36"
                  alt="Share"
                  @click="shareSocialClicks"
                  :class="{ 'share-icon-b ': istoggle == true }"
                  class="cursor-pointer smd:pointer-events-none pointer-events-auto"
                  aria-label="Shareicon"
                />
                  <ul class="hidden smd:flex">
                   
                    <li>
                      <a
                        v-bind:href="
                          'https://www.facebook.com/sharer.php?u=' +
                          hostname +
                          data.NavURL
                        "
                        target="_blank"
                        title="Share on Facebook"
                        rel="external nofollow"
                        :data-title="data.Title"
                      >
                        <img
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'
                          "
                          width="30"
                          height="36"
                          alt="Share on Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        v-bind:href="
                          'https://twitter.com/share?url' + hostname + data.NavURL
                        "
                        target="_blank"
                        title="Share on Twitter"
                        rel="external nofollow"
                        :data-title="data.Title"
                      >
                        <img
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'
                          "
                          width="30"
                          height="36"
                          alt="Share on Twitter"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        v-bind:href="
                          'https://www.linkedin.com/shareArticle?mini=true&url=' +
                          hostname +
                          data.NavURL
                        "
                        target="_blank"
                        title="Share on LinkedIn"
                        rel="external nofollow"
                        :data-title="data.Title"
                      >
                        <img
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'
                          "
                          width="30"
                          height="36"
                          alt="Share on LinkedIn"
                        />
                      </a>
                    </li>
                    <li>
                      <a  v-bind:href="
                          'https://www.pinterest.com/pin/create/button/?url=https://radixweb.com' +'&media='+data.Image.url+'&description='+data.Title
                        " target="_blank"
                        title="Share on Pinterest"
                        rel="external nofollow"
                        :data-title="data.Title">
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/Social_Pinterest_9295d1f4d7.svg'
                        "
                        width="30"
                        height="36"
                        alt="Share on Pinterest"
                      />
                      </a>
                    </li>
                  </ul>
               
              </div>
            </div> 
            <!--  share this post! End -->
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const blogSidebar = () => import("./blog-sidebar");
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
export default {
  
  data() {
    props: {
      data: Object;
    }
    return {
      // blogSidebar: blogSidebar,
    };
  },
  props: {
    data: Object,
  },
  components: {
    DynamicComponent,
  },
  computed: {
    hostname() {
      if (typeof window === "undefined") return process.env.SITE_URL;
      else return "https://" + window.location.hostname;
    },
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
     shareSocialClicks() {
      var div = document.querySelector("#footer-social-menu");
      console.log(
        "hello",
        window.innerHeight - div.getBoundingClientRect().bottom < 100
      );
      if (window.innerHeight - div.getBoundingClientRect().bottom < 100) {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible-upward");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible-upward");
        }
      } else {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .news-inner {
    @media only screen and (min-width: 1230px) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    
    .news-content {
      @apply w-full px-4 smd:pr-16;
      @screen smd {
        width: 70%;
      }
      .post-category-container {
        @apply w-full mb-2;
        a {
          @apply text-primary font-semibold no-underline;
          &:hover,
          &:active {
            @apply text-themedark-0;
            transition: 0.3s ease all;
          }
        }
      }
      h1 {
        @apply font-poppins font-medium p-0 mb-1;
        font-size: 1.625rem;
        line-height: 2.375rem;
        @screen xxsm {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }

        @screen xsm {
          font-size: 1.875rem;
          line-height: 2.625rem;
        }

        @screen md {
          font-size: 2rem;
          line-height: 2.75rem;
        }

        @screen smd {
          font-size: 2.125rem;
          line-height: 3rem;
        }

        @screen sxl {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
      }
      .blog-auth-detail {
        .featured-post-author-thumb {
          @apply border-2 border-solid border-primary rounded-full;
        }
        .featured-post-author-title {
          @apply font-semibold no-underline transition-all duration-300 ease-in-out;
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
      .radix-socialmedia,
      .radix-social-share {
         @apply relative;
        ul {
          // @apply flex items-center;
          @apply items-center h-0;
          transition: 0.5s all;

          @screen smd {
            @apply h-auto;
          }
          li {
            @apply ml-4;
          }
           &.icon-visible {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            top: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
          &.icon-visible-upward {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            bottom: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
        }
      }
      .news-inner-main {
        @apply mt-5;
        @screen md {
          margin-top: 3.125rem;
        }
        p {
          @apply m-0 p-0 pb-5 font-poppins font-normal;
          strong {
            @apply font-semibold;
            line-height: 1.3125rem;
          }
        }
        p,
        li {
          font-size: 1.0625rem;
          line-height: 1.75rem;
          letter-spacing: 0.0437rem;
          word-break: break-word;
          @screen xxl {
            font-size: 1.3125rem;
            line-height: 2.375rem;
          }
        }
        h2 {
          @apply text-themedark-0 dark:text-themedark-75 text-2xl leading-9 mt-3 mb-5 p-0 font-medium;
          @screen xsm {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen smd {
            font-size: 1.75rem;
            @apply leading-10;
          }
          @screen sxl {
            @apply text-3xl;
            line-height: 2.875rem;
          }
        }
        ul,
        ol {
          @apply pl-6 pb-4 m-0;
          li {
            @apply relative ml-5 mb-0 pt-1 pb-2;
            &::before {
              @apply bg-primary pr-0 absolute top-0 ml-0 rounded-full;
              content: "";
              top: 1.125rem;
              width: 0.5rem;
              height: 0.5rem;
              left: -1.25rem;
            }
          }
        }
        blockquote {
          @apply border-t-2 border-b-2 border-solid border-themelight-10 relative font-normal bg-no-repeat;
          background-size: 2.125rem;
          background-position: 0.375rem 1.25rem;
          padding: 0.9375rem 0.9375rem 0.9375rem 2.875rem;
          margin-top: 0.625rem;
          @screen md {
            margin: 1.25rem 0 1.875rem;
          }
          font-family: "roboto-slab-regular";
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/quote_orange_70cb1ad6fb.svg");
          @screen xsm {
            padding: 0.9375rem 0.9375rem 0.9375rem 3.25rem;
            background-size: 2.5rem;
          }
          @screen md {
            padding: 0.9375rem 0.9375rem 0.9375rem 3.75rem;
            background-size: 2.8125rem;
            background-position: 0 1rem;
          }
          p {
            padding: 10px 0;
            a {
              display: inline-block;
            }
          }
          h6 {
            font-size: 1.0625rem;
            line-height: 1.75rem;
            letter-spacing: 0.0437rem;
            word-break: break-word;
            @screen xxl {
              font-size: 1.3125rem;
              line-height: 2.375rem;
            }
            @apply relative bg-no-repeat font-poppins;
            &::before {
              content: "";
              @apply absolute bg-no-repeat bg-themelight-0;
              width: 2.8125rem;
              height: 2.8125rem;
              background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/ol_Twitter_ac77858616_5af0edb1fb.svg");

              left: -2.5rem;
              background-size: 2.1875rem;
              @screen xsm {
                left: -3.125rem;
                background-size: 2.5rem;
              }
              @screen md {
                left: -3.75rem;
                background-size: 2.8125rem;
              }
            }
          }
        }
        h3 {
          @apply p-0 smd:pt-5 xxsm:pt-2  m-0 font-medium;
          margin-bottom: 0.625rem;
          font-size: 1.3125rem;
          line-height: 2rem;
          @screen xsm {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
          @screen md {
            font-size: 1.4375rem;
            line-height: 2.1875rem;
          }
          @screen smd {
            @apply text-2xl leading-9;
          }
        }
        a {
          @apply font-medium font-poppins text-customcolor-75;
        }
      }
    }
    .rx-social-container {
      @apply flex items-start md:items-center py-6 md:px-4 border-t-2 border-b-2 border-solid border-themelight-10;
      margin-top: 0.625rem;
      margin-bottom: 1.875rem;
      @screen md {
        margin-top: 2.5rem;
        margin-bottom: 3.75rem;
      }
      h4 {
        @apply font-poppins font-medium mb-0 text-lg;
        letter-spacing: 0.025rem;
        line-height: 1.625rem;
        @screen sxl {
          @apply text-xl leading-6;
        }
      }
    }
    .news-detail-author {
      .featured-post-author-thumb {
        @apply border-2 border-solid border-primary rounded-full;
      }
      .featured-post-author-title {
        &:hover,
        &:active {
          @apply text-primary;
          transition: 0.3s ease all;
        }
      }
      .featured-post-author-title {
        @apply text-xl font-semibold leading-7 no-underline transition-all duration-300 ease-in-out;
        @screen md {
          font-size: 1.375rem;
        }
      }
      .featured-post-author-desc {
        @apply text-sm leading-6 font-poppins p-0;
        @screen md {
          font-size: 0.9375rem;
          letter-spacing: 0.0175rem;
        }
      }
    }
    .author-content {
      @apply lg:mb-12 md:py-6 py-2 md:text-lg text-base md:leading-8 leading-7;
      .btn {
        @apply text-primary bg-transparent rounded-full text-lg font-semibold;
        padding: 0.6875rem 3.25rem;
        &:hover {
          @apply bg-primary text-white;
        }
      }
    }
  }
}
</style>