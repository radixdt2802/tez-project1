<template>
  <footer class="bg-themelight-10 dark:bg-themedark-10 contactFooter">
    <div class="footer_wrapper py-10 md:py-12 smd:py-16 sxl:py-24">
      <div class="container">
        <div class="footerContact_wrap">
          <div
            class="footerContact_top pb-0 mb-5 smd:pb-12 smd:mb-12 smd:border-b border-opacitybg-35 dark:border-themedark-65 footer-landing location-wrapper bg-themelight-0 smd:bg-transparent smd:dark:bg-transparent dark:bg-themedark-0 relative"
          >
            <div class="row">
              <div class="smd:w-1/4 w-full px-4">
                <div
                  class="py-3 px-4 smd:py-0 smd:px-0 border-b-2 border-themelight-10 dark:border-themedark-65 smd:border-0"
                >
                  <div class="text-xl lg:text-2xl font-semibold">Our Locations</div>
                </div>
              </div>
              <div class="smd:w-3/4 w-full px-4">
                <swiper
                  :slides-per-view="4"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                  navigation
                  :slidesPerGroup="1"
                  :breakpoints="swiperOptions.breakpoints"
                >
                  <swiper-slide>
                    <div class="locationBlock">
                      <address class="para_xs">
                        <span class="poppins_semibold inline-block h2">India</span>
                        <br />Ekyarth, B/H Nirma
                        <br />University, Chharodi,
                        <br />Ahmedabad – 382481
                        <br />India
                      </address>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="locationBlock">
                      <address class="para_xs">
                        <span class="poppins_semibold inline-block h2">United States</span>
                        <br />17510 Pioneer Boulevard
                        <br />Artesia, California
                        90701
                        <br />United States
                      </address>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="locationBlock">
                      <address class="para_xs">
                        <span class="poppins_semibold inline-block h2">Canada</span>
                        <br />123 Everhollow street
                        <br />SW, Calgary, Alberta
                        <br />T2Y 0H4, Canada
                      </address>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="locationBlock">
                      <address class="para_xs">
                        <span class="poppins_semibold inline-block h2">Australia</span>
                        <br />Suite 411, 343 Little
                        <br />Collins St, Melbourne,
                        <br />Vic, 3000 Australia
                      </address>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="locationBlock">
                      <address class="para_xs">
                        <span class="poppins_semibold inline-block h2">Morocco</span>
                        <br />Rue Saint Savin, Ali
                        <br />residence, la Gironde,
                        <br />Casablanca, Morocco
                      </address>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div
            class="footerEmail_bottom bg-themelight-0 smd:bg-transparent smd:dark:bg-transparent dark:bg-themedark-0"
          >
            <div class="row">
              <div class="smd:w-1/4 w-full px-4">
                <div
                  class="py-3 px-4 smd:py-0 smd:px-0 border-b-2 border-themelight-10 dark:border-themedark-65 smd:border-0"
                >
                  <div class="text-xl lg:text-2xl font-semibold">Contact Details</div>
                </div>
              </div>
              <div class="colAutoMd1-2 px-4">
                <div class="py-3 px-4 smd:py-0 smd:px-0">
                  <div class="h2">Email</div>
                  <div class="contanct">
                    <ul>
                      <li>
                        <a href="mailto:biz@radixweb.in" title="biz@radixweb.in">biz@radixweb.in</a>
                      </li>
                      <li>
                        <a href="mailto:resumes@radixweb.com" title="resumes@radixweb.com">resumes@radixweb.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="colAutoMd1-2 px-4">
                <div class="py-3 px-4 smd:py-0 smd:px-0">
                  <div class="h2">Phone</div>
                  <div class="contanct">
                    <ul>
                      <li>
                        Sales
                        <a href="tel:+13125283083" title="+13125283083">+1 312 528 3083</a>
                      </li>
                      <li>
                        Careers
                        <a href="tel:+917935200685" title="+91-79-35200685">+91-79-35200685</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="colAutoMd1-2 px-4">
                <div class="py-3 px-4 smd:py-0 smd:px-0">
                  <div class="h2">Social Media</div>
                  <div class="flex pb-3">
                    <ul class="socialLinks flex">
                      <li>
                        <a
                          title="Facebook"
                          target="_blank"
                          rel="nofollow noopener"
                          href="https://www.facebook.com/radixweb"
                        >
                          <i class="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Instagram"
                          target="_blank"
                          rel="nofollow noopener"
                          href="https://www.instagram.com/radixweb"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Linkedin"
                          target="_blank"
                          rel="nofollow noopener"
                          href="https://www.linkedin.com/company/radixweb"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Twitter"
                          target="_blank"
                          rel="nofollow noopener"
                          href="https://twitter.com/radixweb"
                        >
                          <i class="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Youtube"
                          target="_blank"
                          rel="nofollow noopener"
                          href="https://www.youtube.com/user/Radixweb2000"
                        >
                          <i class="fab fa-youtube-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="siteInfor bg-themelight-0 dark:bg-themedark-0 py-4">
      <div class="container">
        <div class="row items-center justify-center">
          <div class="w-full px-4">
            <div class="text-center">
              <p class="p-0 mb-0">
                Copyright &copy;
                <span class="inline">{{ new Date().getFullYear() }}</span>
                Radixweb. All Rights Reserved. An ISO 9001:2015 Certified
                Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from "@vue/runtime-core";
import mountedMixin from "../mixins/mounted.mixin";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
export default {
  props: {
    data: Object
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    };
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    }
  },
  async created() {
    try {
      await load(import.meta.env.VITE_GOOGLE_SITEKEY, {});
    } catch (error) {
      // console.log(" form error", error);
    }
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 4
          },
          1371: {
            slidesPerView: 4
          },

          1200: {
            slidesPerView: 4
          },

          768: {
            slidesPerView: 1
          },

          640: {
            slidesPerView: 1
          },

          460: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      arrowImage: "https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg"
    };
  }
};
</script>
<style lang="scss" scoped>
@layer utilities {
  footer.contactFooter {
    .colAutoMd1-2 {
      @apply sm:w-1/2 w-full;
      @screen smd {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      }
    }
    .h2 {
      @apply text-xl leading-snug font-semibold pb-3;
    }
    address {
      @apply text-base not-italic leading-relaxed;
    }
    .poppins_semibold {
      @apply font-semibold;
    }
    .navLink {
      column-count: 1;
      @screen sm {
        column-count: 2;
        column-gap: 2.5rem;
      }
    }
    .hoverBorder {
      @screen smd {
        @apply pl-4 relative;
        position: relative;
        border-left: 0.125rem solid rgba(221, 221, 221, 0.5);
        &:not(.afterNone)::after {
          content: "";
          width: 0.125rem;
          height: 100%;
          background: rgba(221, 221, 221, 0.5);
          position: absolute;
          left: calc(50% + 0.5625rem);
          top: 0;
        }
        li {
          @apply relative mb-1;
          &::before {
            content: "";
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            height: 100%;
            width: 0.125rem;
            position: absolute;
            left: -1.125rem;
          }
          &:hover {
            a {
              @apply text-primary;
            }
            &::before {
              @apply bg-primary;
            }
          }
        }
      }
    }
    .awwards {
      li {
        @apply w-1/3;
        img {
          width: auto;
          max-height: 4.25rem;
          margin: 0 auto;
        }
      }
      @screen xsm {
        li {
          @apply w-auto;
          img {
            width: auto;
            max-height: 3.563rem;
            margin: 0 auto;
          }
        }
      }
      @screen sxl {
        li {
          img {
            width: auto;
            max-height: inherit;
          }
        }
      }
    }
    .colSmd_2 {
      li {
        @apply w-1/2;
      }
      @screen smd {
        li {
          @apply w-full;
        }
      }
    }
    ul {
      li {
        @apply leading-8;
      }
    }
    a {
      @apply no-underline leading-8 transition-all ease-in-out duration-300;
      &:hover {
        @apply text-primary;
      }
    }
    .contanct {
      a,
      li {
        @screen lg {
          font-size: 0.98rem;
        }
        @screen smd {
          font-size: 0.961rem;
        }
      }
    }
    .autoCol {
      width: 100%;
      @screen smd {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      }
    }
    .menuTerms {
      @apply flex items-center justify-center mt-2 flex-wrap;
      li:first-child,
      .borderRight {
        @apply pr-3 mr-3 border-r leading-tight border-secondary dark:border-themelight-0;
        a {
          @apply text-sm leading-3 inline-block;
        }
      }
      li:nth-child(2) {
        @apply pr-0 mr-0 border-0;
        @screen sm {
          @apply pr-3 mr-3 border-r leading-tight border-secondary;
          a {
            @apply text-sm leading-3 inline-block;
          }
        }
      }
      li:last-child {
        @apply smd:w-auto w-full text-center my-2 smd:my-0 leading-none;
      }
    }
    .slid-arrow {
      &::before {
        display: none;
      }
      height: auto;
      width: auto;
      font-size: 0.75rem;
      top: -1.688rem;
      right: 1rem;
      margin: 0 0.375rem;
      z-index: 1;
      @screen smd {
        right: 0;
        top: -2.375rem;
      }
      &.slick-prev {
        right: 3.5rem;
        left: auto;
        @screen smd {
          right: 2.5rem;
        }
      }
      &.slick-disabled {
        opacity: 0.3;
      }
    }
    .socialLinks {
      li {
        display: inline-block;
        line-height: 0;
        &:not(:last-child) {
          margin-right: 0.75rem;
        }
        a {
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/footer_social_6306d1be00_19_7dd3651c2e.svg");
          @apply inline-block bg-cover bg-no-repeat overflow-hidden transition-all ease-in-out duration-500;
          background-size: 3.8125rem;
          background-position: left -1.0005rem top -0.5005rem;
          width: 2rem;
          height: 2rem;
          &:hover {
            @apply transition-all ease-in-out duration-500;
            background-position: left -1.0005rem top -3.563rem;
          }
        }
        &:nth-child(2) {
          a {
            background-position: left -1.0005rem top -6.5625rem;
            &:hover {
              background-position: left -0.938rem top -9.625rem;
            }
          }
        }
        &:nth-child(3) {
          a {
            background-position: left -1.0005rem top -12.5625rem;
            &:hover {
              background-position: left -1.063rem top -15.625rem;
            }
          }
        }
        &:nth-child(4) {
          a {
            background-position: left -1.063rem top -18.6255rem;
            &:hover {
              background-position: left -1.063rem top -21.688rem;
            }
          }
        }
        &:last-child {
          a {
            background-position: left -1.063rem top -24.6255rem;
            &:hover {
              background-position: left -1.063rem top -27.688rem;
            }
          }
        }
      }
    }
    a.btn_sm {
      @apply text-lg inline-block;
      line-height: 2.75rem;
      padding: 0rem 1.125rem;
      @screen md {
        padding: 0rem 1.375rem;
        @apply text-lg;
        line-height: 2.75rem;
      }
      @screen sxl {
        @apply text-xl;
        padding: 0rem 1.5rem;
        line-height: 2.875rem;
      }
    }
  }
}
</style>