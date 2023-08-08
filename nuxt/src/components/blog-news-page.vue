<template>
  <div class="blog-news-page">
    <div class="container">
      <h1>11 Node.js Frameworks for App Development</h1>
      <div class="blog-auth-detail">
        <div class="media flex items-center mt-auto w-100">
          <div class="media-body">
            <p class="featured-post-author-desc mb-0 pt-0">December 29, 2020</p>
          </div>
        </div>
      </div>
      <div class="news-common-content">
        <h4>About Radixweb</h4>
        <p>
          Founded in 2000, Radixweb is a trusted partner of choice for crafting
          custom software development and software outsourcing services for
          world’s leading organizations. Combining deep domain expertise,
          unmatched experience and specialized skills, it serves across 25
          countries to over 2900+ SMBs to Fortune 500 companies. Achieving trust
          through outsourcing, Radixweb enables rapid response to changing
          market and technology needs.
        </p>
        <h5>Contact Person:</h5>
        <address class="mb-0">
          <strong>Pratik Mistry</strong>
          <br />Senior Business Head <br />Radixweb
          <br />
          <i class="fas fa-envelope align-middle fa-fw mr-2"></i>
          <a href="mailto:pratikm@radixweb.com" title="pratikm@radixweb.com"
            >pratikm@radixweb.com</a
          >
          <br />
          <i class="fas fa-phone-alt align-middle fa-fw mr-2"></i>
          <a href="tel:+16468016885" title="+1.646.801.6885">+1.646.801.6885</a>
          <br />
          <i class="fas fa-globe align-middle fa-fw mr-2"></i>
          <a href="/" title="https://radixweb.com/">radixweb.com</a>
          <br />
        </address>
      </div>
      <div class="rx-social-container">
        <div class="mr-auto">
          <h4>Don't Forget to share this post!</h4>
        </div>
        <div class="radix-social-share">
          <ul>
            <li>
              <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Share_e47e21d3dd.svg'"
                width="20"
                height="36"
              />
            </li>
            <li>
              <img
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'"
                width="30"
                height="36"
              />
            </li>
            <li>
              <img
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'"
                width="30"
                height="36"
              />
            </li>
            <li>
              <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'"
                width="30"
                height="36"
              />
            </li>
            <li>
              <img
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Social_Pinterest_9295d1f4d7.svg'"
                width="30"
                height="36"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .blog-news-page {
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
      @apply flex mb-2 md:mb-6 pb-2 pt-4 justify-between;
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
    .blog-inner-main {
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
        @apply text-primary text-2xl leading-9 mt-3 mb-5 p-0 font-medium;
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
          padding: 0.625rem 0;
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
    .news-common-content {
      @apply bg-themelight-10 dark:bg-themedark-10 p-4 border rounded-xl border-solid border-themelight-50;
      margin: 1.875rem 0 3.4375rem;
      h4 {
        @apply text-lg leading-5;
      }
      p {
        padding-top: 0.9375rem;
        margin-bottom: 0.75rem;
      }
      p,
      address {
        font-size: 1.0625rem;
        line-height: 1.75rem;
        @screen sxl {
          font-size: 1.1875rem;
          line-height: 1.875rem;
          letter-spacing: 0.0437rem;
        }
      }
      address {
        font-style: italic;
        a {
          @apply text-primary no-underline;
        }
      }
      h5 {
        @apply font-medium text-base leading-5;
      }
    }
    .rx-social-container {
      @apply flex items-start md:items-center py-6 md:px-4 border-t border-b border-solid border-themelight-10;
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
      .radix-social-share {
        @apply self-end;
        ul {
          @apply flex items-center;
          li {
            @apply ml-4;
          }
        }
      }
    }
  }
}
</style>