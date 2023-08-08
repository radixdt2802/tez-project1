<template>
  <div class="rxsection-t-space opening-page">
    <div class="container">
      <div class="row">
        <div class="w-full px-4 md:w-8/12">
          <!-- v-for="item in data.dynamicResult" -->
          <div class="careerDtl_left">
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
            />
            <div class="careerDtl_content">
              <h2 class="h3_sm">{{ data.JobTitle }}</h2>
              <div class="career-fields">
                <h3 class="para_md">Number Of openings</h3>
                <p class="para_md">{{ data.Opening }}</p>
              </div>
              <div class="career-fields">
                <h3 class="para_md">Experience</h3>
                <p class="para_md">{{ data.Experience }}</p>
              </div>
              <div
                v-if="data.VueReferenceCode != 'Career_details_skills'"
                class="career-fields"
              >
                <h3 class="para_md">Qualification</h3>
                <p class="para_md">{{ data.Qualification }}</p>
              </div>
              <div
                v-if="data.VueReferenceCode == 'Career_details_skills'"
                class="career-fields"
              >
                <h3 class="para_md">Skills</h3>
                <p class="para_md">{{ data.Qualification }}</p>
              </div>
              <div class="career-fields responsiveAdd">
                <h3 class="para_md">Date</h3>
                <p class="para_md">4<sup>th</sup> February 2023 (Saturday)</p>
              </div>
              <div class="career-fields responsiveAdd">
                <h3 class="para_md">Time</h3>
                <p class="para_md">9:30 AM to 5:00 PM</p>
              </div>
              <div class="career-fields responsiveAdd">
                <h3 class="para_md">Venue</h3>
                <p class="para_md">Ekyarth, Nr. Malabar County, B/H Nirma University, Beside Vandematram Fabula, Gota, Ahmedabad - 382481</p>
              </div>
              <!-- <div
                class="square_list"
                v-if="data.ShortText"
                v-html="$md.render(data.ShortText ? data.ShortText : '')"
              ></div> -->
              <div
                class="square_list"
                v-if="data.LongText"
                v-rxhtml="data.LongText"
              ></div>
              <a class="cursor-pointer btn" target="_blank" @click="carrerForm"
                >Apply Now</a
              >
              <!-- @click="carrerForm" -->
              <div class="social-media-career">
                <p class="para_md h3">Share</p>
                <ul>
                  <li>
                    <a
                      v-bind:href="
                        'https://www.facebook.com/sharer.php?u=https://radixweb.com' +
                        data.NavURL
                      "
                      target="_blank"
                      title="Share on Facebook"
                    >
                      <img
                        :src="fbIcon"
                        alt="Share on Facebook"
                        @mouseover="
                          () => {
                            this.fbIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/fb_teal_hover_500ecc605d.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.fbIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/fb_teal_db75df1a37.svg';
                          }
                        "
                        class="w-8 h-8 lightIcon sm:w-11 sm:h-11"
                      />
                      <img
                        :src="darkFbIcon"
                        alt="Share on Facebook"
                        @mouseover="
                          () => {
                            this.darkFbIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_fb_hover_b4e45ceb41.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.darkFbIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_fb_b33e1af23f.svg';
                          }
                        "
                        class="w-8 h-8 darkIcon sm:w-11 sm:h-11"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      v-bind:href="
                        'https://twitter.com/intent/tweet?url=https://radixweb.com' +
                        data.NavURL +
                        '&via=radixweb'
                      "
                      target="_blank"
                      title="Share on Twitter"
                    >
                      <img
                        :src="twitterIcon"
                        alt="Share on Twitter"
                        @mouseover="
                          () => {
                            this.twitterIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/twit_hover_dcaf57db8d.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.twitterIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/twit_teal_62ae09f150.svg';
                          }
                        "
                        class="w-8 h-8 lightIcon sm:w-11 sm:h-11"
                      />
                      <img
                        :src="darkTwitterIcon"
                        alt="Share on Twitter"
                        @mouseover="
                          () => {
                            this.darkTwitterIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_twit_hover_84abb2171b.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.darkTwitterIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_twit_fa0ce3d0bc.svg';
                          }
                        "
                        class="w-8 h-8 darkIcon sm:w-11 sm:h-11"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      v-bind:href="
                        'https://www.linkedin.com/shareArticle?mini=true&url=https://radixweb.com' +
                        data.NavURL
                      "
                      target="_blank"
                      title="Share on LinkedIn"
                    >
                      <img
                        :src="linkedinIcon"
                        alt="Share on LinkedIn"
                        @mouseover="
                          () => {
                            this.linkedinIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/lnk_hover_3ab456a431.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.linkedinIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/lnk_teal_e228e7d9cd.svg';
                          }
                        "
                        class="w-8 h-8 lightIcon sm:w-11 sm:h-11"
                      />
                      <img
                        :src="darkLinkedinIcon"
                        alt="Share on LinkedIn"
                        @mouseover="
                          () => {
                            this.darkLinkedinIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_lnkd_hover_bc69036e25.svg';
                          }
                        "
                        @mouseout="
                          () => {
                            this.darkLinkedinIcon =
                              'https://d2ms8rpfqc4h24.cloudfront.net/dark_lnkd_d36efd43cc.svg';
                          }
                        "
                        class="w-8 h-8 darkIcon sm:w-11 sm:h-11"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-4/12 md:block hidden">
          <div class="careerDtl_right">
            <WalkinDetails/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import WalkinDetails from "./walkin-details.vue";
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      fbIcon: "https://d2ms8rpfqc4h24.cloudfront.net/fb_teal_db75df1a37.svg",
      darkFbIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_fb_b33e1af23f.svg",
      twitterIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/twit_teal_62ae09f150.svg",
      darkTwitterIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_twit_fa0ce3d0bc.svg",
      linkedinIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/lnk_teal_e228e7d9cd.svg",
      darkLinkedinIcon:
        "https://d2ms8rpfqc4h24.cloudfront.net/dark_lnkd_d36efd43cc.svg",
    };
  },
  components: {
    WalkinDetails,
  },
  methods: {
    carrerForm() {
      let routeData = `/careerform-experience?job_code=${
        this.data.JobCode
      }&subject=${this.data.JobTitle}&emailid=${
        this.data.TurboEmail || "resume@radixweb.com"
      }`;
      console.log({routeData});
      if (routeData) {
        window.open(routeData, "_blank");
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .darkIcon {
      @apply block;
    }
    .lightIcon {
      @apply hidden;
    }
    .career-fields {
    }
  }
  .darkIcon {
    @apply hidden;
  }
  .lightIcon {
    @apply block;
  }
  .opening-page {
    .careerDtl_left {
      @apply bg-themelight-10 dark:text-themedark-0 dark:bg-themedark-10;
      .careerDtl_content {
        padding: 1.563rem 0.938rem;
        @screen md {
          padding: 2.188rem 1.563rem;
        }
        @screen sxl {
          padding: 3.438rem 2.188rem;
        }

        > p {
          @apply text-base leading-6 dark:text-themedark-0;
          margin-top: 1.875rem;
        }
        a {
          @apply text-primary no-underline;
          &.btn {
            &:hover {
              @apply text-primary;
            }
            @apply text-black inline-block text-base leading-6 mt-5;
            padding: 0.5rem 1.25rem;
            @screen sm {
              @apply text-lg;
              padding: 0.625rem 1.563rem;
              margin-top: 1.875rem;
            }
            @screen sxl {
              @apply text-xl mt-10;
              line-height: 1.625rem;
              padding: 0.688rem 2.188rem;
            }
          }
        }
        .career-fields {
          &.responsiveAdd{
            @apply md:hidden block;
          }
          padding: 0.625rem 1.25rem;
          @apply flex flex-wrap items-start bg-themelight-0 dark:bg-themedark-65 smd:dark:bg-transparent  text-themedark-0 smd:p-0 smd:bg-transparent;
          & + .career-fields {
            @apply mt-5;
          }
          h3 {
            @apply w-full smd:w-4/12 relative my-0 py-0 dark:text-white smd:dark:text-themelight-0;
            &:after {
              content: ":";
              right: -0.625rem;
              @apply relative smd:absolute smd:right-0 top-0 font-normal;
            }
          }
          p {
            @apply w-full smd:w-8/12 py-0 smd:pl-4 dark:text-white smd:dark:text-themelight-0;
          }
        }
        h3 {
          margin-top: 1.875rem;
          @screen sxl {
            margin-top: 3.125rem;
            margin-bottom: 0.625rem;
          }
          @apply py-0;
        }
        ul {
          @apply md:ml-5 py-3;
          li {
            @apply py-0 pr-0  dark:text-white;
            &:before {
              top: 0.5rem;
              border-width: 0.188rem;
            }
            p {
              @apply text-base leading-6 m-0 dark:text-white;
            }
          }
        }

        .social-media-career {
          p {
            @apply dark:text-white;
          }
          ul {
            @apply flex flex-wrap items-center ml-6;
            li {
              @apply p-0 mr-4 dark:text-themedark-0;
            }
          }
          padding-top: 1.875rem;
          @screen sm {
            margin-top: 3.125rem;
            padding-top: 3.125rem;
          }
          @apply border-t border-solid border-themedark-65 mt-10 flex flex-wrap items-center;
        }
      }
    }
    .careerDtl_right {
      margin-top: 1.875rem;
      @apply bg-themelight-20 dark:bg-themedark-70 h-full p-5 sxl:p-10 md:mt-0 dark:text-white;
      a {
        @apply no-underline transition-all duration-300 ease-in-out;
      }
      ul {
        li {
          @apply pl-5;
          a {
            @apply dark:text-white;
          }
          &:hover {
            a {
              padding-left: 2px;
            }
          }
          &:before {
            top: 0.875rem;
          }
          @screen md {
            padding-left: 1.875rem;
          }
          margin-bottom: 0.625rem;
        }
      }
    }
  }
}
</style>
