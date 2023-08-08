<template>
  <footer class="bg-themelight-10 dark:bg-themedark-10">
    <div class="footer_wrapper py-10 md:py-12 smd:py-16 sxl:py-24">
      <div class="container">
        <div class="row">
          <div class="px-4 w-full smd:w-2/12 flex-grow smd:order-none max-w-full order-3 mt-4 smd:mt-0 py-4 smd:py-0">
            <div
              class="bg-themelight-0 dark:bg-themedark-0 smd:bg-transparent smd:dark:bg-transparent relative location-wrapper"
            >
              <div class="h2">Locations</div>
              <swiper
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :slidesPerGroup="1"
                navigation
                :breakpoints="swiperOptions.breakpoints"
              >
                <swiper-slide>
                  <div class="locationBlock my-4 smd:my-0">
                    <address class="para_xs">
                      <span class="poppins_semibold">India</span>
                      <br />Ekyarth, B/H Nirma
                      <br />University, Chharodi,
                      <br />Ahmedabad – 382481
                      <br />India
                    </address>
                  </div>
                  <div class="locationBlock mb-4 smd:mb-0">
                    <address class="para_xs">
                      <span class="poppins_semibold">United States</span>
                      <br />17510 Pioneer Boulevard
                      <br />Artesia, California
                      90701
                      <br />United States
                    </address>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="locationBlock my-4 smd:my-0">
                    <address class="para_xs">
                      <span class="poppins_semibold">Canada</span>
                      <br />123 Everhollow street
                      <br />SW, Calgary, Alberta
                      <br />T2Y 0H4, Canada
                    </address>
                  </div>
                  <div class="locationBlock mb-4 smd:mb-0">
                    <address class="para_xs">
                      <span class="poppins_semibold">Australia</span>
                      <br />Suite 411, 343 Little
                      <br />Collins St, Melbourne,
                      <br />Vic, 3000 Australia
                    </address>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="locationBlock my-4 smd:my-0">
                    <address class="para_xs">
                      <span class="poppins_semibold">Morocco</span>
                      <br />Rue Saint Savin, Ali
                      <br />residence, la Gironde,
                      <br />Casablanca, Morocco
                    </address>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="px-4 smd:order-none order-2 smd:w-7/12 w-full mt-4 smd:mt-0 mx-auto">
            <div
              class="bg-themelight-0 dark:bg-themedark-0 smd:bg-transparent smd:dark:bg-transparent"
            >
              <div class="h2">Dedicated Developers</div>
              <ul class="navLink hoverBorder py-3 px-4 smd:py-0 smd:px-0">
                <li>
                  <tez-link
                    title="Hire Software Developers"
                    to="/hire-software-developers"
                  >Hire Software Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Mobile App Developers"
                    to="/hire-mobile-app-developers"
                  >Hire Mobile App Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Front-end Developers"
                    to="/hire-front-end-developers"
                  >Hire Front-end Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Back-end Developers"
                    to="/hire-back-end-developers"
                  >Hire Back-end Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Full Stack Developers"
                    to="/hire-full-stack-developers"
                  >Hire Full Stack Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire MEAN Stack Developers"
                    to="/hire-mean-stack-developers"
                  >Hire MEAN Stack Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire MERN Stack Developers"
                    to="/hire-mern-stack-developers"
                  >Hire MERN Stack Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Devops Engineer"
                    to="/hire-devops-engineer"
                  >Hire Devops Engineer</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire .NET Developers"
                    to="/hire-dot-net-developer"
                  >Hire .NET Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Flutter Developers"
                    to="/hire-flutter-developers"
                  >Hire Flutter Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire React Native Developers"
                    to="/hire-react-native-developers"
                  >Hire React Native Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire PHP Developers"
                    to="/hire-php-developer"
                  >Hire PHP Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire iOS Developers"
                    to="/hire-ios-developers"
                  >Hire iOS Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Android Developers"
                    to="/hire-android-developers"
                  >Hire Android Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Django Developers"
                    to="/hire-django-developers"
                  >Hire Django Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Python Developers"
                    to="/hire-python-developers"
                  >Hire Python Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Node.js Developers"
                    to="/hire-node-js-developers"
                  >Hire Node.js Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire AngularJS Developers"
                    to="/hire-angularjs-developers"
                  >Hire AngularJS Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire ReactJS Developers"
                    to="/hire-reactjs-developers"
                  >Hire ReactJS Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Vue.js Developers"
                    to="/hire-vuejs-developers"
                  >Hire Vue.js Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire JavaScript Developers"
                    to="/hire-javascript-developers"
                  >Hire JavaScript Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Web Developers"
                    to="/hire-web-developers"
                  >Hire Web Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Ruby on Rails Developers"
                    to="/hire-ruby-on-rails-developers"
                  >Hire Ruby on Rails Developers</tez-link>
                </li>
                <li>
                  <tez-link
                    title="Hire Next.js Developers"
                    to="/hire-next-js-developers"
                  >Hire Next.js Developers</tez-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4  smd:order-none order-1 smd:w-3/12 w-full mt-4 smd:mt-0">
            <div
              class="bg-themelight-0 dark:bg-themedark-0 smd:bg-transparent smd:dark:bg-transparent"
            >
              <div class="h2">Contact</div>
              <div class="contanct py-3 px-4 smd:py-0 smd:px-0">
                <div class="mailInfo">
                  <div>
                    <a href="mailto:biz@radixweb.in" title="biz@radixweb.in">biz@radixweb.in</a>
                  </div>
                  <a
                    href="mailto:resumes@radixweb.com"
                    title="resumes@radixweb.com"
                  >resumes@radixweb.com</a>
                </div>
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
            <div
              class="bg-themelight-0 dark:bg-themedark-0 smd:bg-transparent smd:dark:bg-transparent mt-5"
            >
              <div class="h2">Quick Links</div>
              <ul class="hoverBorder afterNone flex flex-wrap colSmd_2 py-3 px-4 smd:py-0 smd:px-0">
                <li>
                  <tez-link to="/services">Services</tez-link>
                </li>
                <li>
                  <tez-link to="/solutions">Solutions</tez-link>
                </li>
                <li>
                  <tez-link to="/industries">Industries</tez-link>
                </li>
                <li>
                  <tez-link to="/areas-we-serve">Areas We Serve</tez-link>
                </li>
                <li>
                  <tez-link to="/careers">Careers</tez-link>
                </li>
                <li>
                  <tez-link to="/insights">Insights</tez-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_logoMap pb-16">
      <div class="container">
        <div class="row">
          <div class="smd:w-5/12 w-full px-4">
            <div class="smd:max-w-lg pb-16 smd:pb-0 text-center smd:text-left">
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/radixweb_footer_logo_1119629006.png'
                "
                alt="Radixweb – An IT Software and App Development Company"
                width="108"
                height="109"
                class="mx-auto smd:mx-0 light-image"
              />
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/footer_dark_mode_logo_cb0c2f6790.png'
                "
                alt="Radixweb – An IT Software and App Development Company"
                width="108"
                height="109"
                class="mx-auto smd:mx-0 dark-image"
              />
              <p class="pt-6 pb-2">
                Radixweb is a globally acclaimed IT consulting and offshore
                software development leader. Our talented developers, functional
                knowledge, superior code quality, and expertise around a wide
                array of programming languages — from .Net to Node.js to React
                helped thousands of customers outperform.
              </p>
              <a class="btn btn_sm my-5" href="/contact-us" title="Let's Talk">Let's Talk</a>
              <ul class="flex flex-wrap items-center justify-center smd:justify-start mt-5 awwards">
                <li class="my-3 xsm:my-0 xsm:mr-5 xl:mr-6">
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/software_development_footer_323fcff708.png'
                    "
                    width="81"
                    height="88"
                    alt="Clutch - Top Software Developers"
                  />
                </li>
                <li class="my-3 xsm:my-0 xsm:mr-5 xl:mr-6">
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/gptw_footer_bd719e0443.png'
                      
                    "
                    width="74"
                    height="74"
                    alt="Great Place to Work"
                  />
                </li>
                <li class="my-3 xsm:my-0 xsm:mr-5 xl:mr-6">
                  <img
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/footer_custom_software_development_companies_a0acb98ad8.png'
                    "
                    width="78"
                    height="79"
                    alt="Custom Software Development Companies"
                  />
                </li>
                <li class="my-3 xsm:my-0">
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/footer_global_outsourcing_100_b909ef8571.png'
                    "
                    width="143"
                    height="61"
                    alt="IOAP Global Outsourcing 100"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/IAOP_Logo_efb4ded410.png'
                    "
                    width="143"
                    height="61"
                    alt="IOAP Global Outsourcing 100"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="smd:w-7/12 w-full px-4">
            <span class="para_md font-semibold mb-5 text-center inline-block w-full">We Work Across</span>
            <div class="working-country relative">
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/radixweb_locations_a09e9a0694.png'
                "
                height="458"
                width="883"
                alt="Radixweb Locations"
                class="light-image"
              />
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/Map_and_Country_Dot_Dark_Mode_1a80824a87.png'
                "
                alt="Radixweb – An IT Software and App Development Company"
                width="883"
                height="458"
                class="dark-image"
              />
              <svg
                class="absolute top-0 left-0 mx-auto right-0 h-auto max-w-full hidden smd:block"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="882px"
                height="458px"
                viewBox="0 0 882 458"
                enable-background="new 0 0 882 458"
                xml:space="preserve"
              >
                <text
                  transform="matrix(1 0 0 1 444.7393 128.4097)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Denmark</text>
                <text
                  transform="matrix(1 0 0 1 371.3486 154.688)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Germany</text>
                <text transform="matrix(1 0 0 1 345.3486 119.1011)">
                  <tspan
                    x="0"
                    y="0"
                    fill="#0F1628"
                    font-family="'Poppins-Regular'"
                    font-size="11"
                  >United</tspan>
                  <tspan
                    x="0"
                    y="13.2"
                    fill="#0F1628"
                    font-family="'Poppins-Regular'"
                    font-size="11"
                  >Kingdom</tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 319.9326 162.9321)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Ireland</text>
                <text
                  transform="matrix(1 0 0 1 349.9326 203.606)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Spain</text>
                <text
                  transform="matrix(1 0 0 1 456.2666 153.7715)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Austria</text>
                <text
                  transform="matrix(1 0 0 1 151.5107 138.2715)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Canada</text>
                <text
                  transform="matrix(1 0 0 1 160.7578 187.9771)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Denver</text>
                <text transform="matrix(1 0 0 1 174.0107 204.9912)">
                  <tspan
                    x="0"
                    y="0"
                    fill="#0F1628"
                    font-family="'Poppins-Regular'"
                    font-size="11"
                  >United</tspan>
                  <tspan
                    x="0"
                    y="13.2"
                    fill="#0F1628"
                    font-family="'Poppins-Regular'"
                    font-size="11"
                  >States</tspan>
                </text>
                <text
                  transform="matrix(1 0 0 1 438.2666 178.9976)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Switzerland</text>
                <text
                  transform="matrix(1 0 0 1 462.2666 207.3667)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >ltaly</text>
                <text
                  transform="matrix(1 0 0 1 491.7998 225.9448)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >lsrael</text>
                <text
                  transform="matrix(1 0 0 1 526.7998 257.1143)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Oman</text>
                <text
                  transform="matrix(1 0 0 1 711.7998 342.8057)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >Australia</text>
                <text
                  transform="matrix(1 0 0 1 800.7998 401.2783)"
                  fill="#0F1628"
                  font-family="'Poppins-Regular'"
                  font-size="11"
                >New Zealand</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="siteInfor bg-themelight-0 dark:bg-themedark-0 py-8">
      <div class="container">
        <div class="row items-center">
          <div class="autoCol mb-4 smd:mb-0 px-4 text-center smd:text-left">
            <a
              href="https://clutch.co/profile/radixweb#reviews"
              target="_blank"
              title="Radixweb Reviews"
              rel="nofollow noopener"
              class="inline-block"
            >
              <img
                v-rxlazy="
                  'https://d2ms8rpfqc4h24.cloudfront.net/clutch_2474e65ea1.png'
                "
                width="130"
                height="40"
                alt="Clutch Reviews"
              />
            </a>
          </div>
          <div class="smd:w-7/12 w-full">
            <div class="text-center">
              <p class="p-0 mb-0 text-sm">
                Copyright &copy;
                <span class="inline">{{ new Date().getFullYear() }}</span>
                Radixweb. All Rights Reserved. An ISO 9001:2015 Certified
                Company
              </p>
              <ul class="menuTerms">
                <li>
                  <tez-link to="/terms-of-use">Terms of Use</tez-link>
                </li>
                <li>
                  <tez-link to="/privacy-policy">Privacy Policy</tez-link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href="https://www.dmca.com/Protection/Status.aspx?ID=7b2ff332-3f38-4ddb-9be6-1ce7e228b890"
                    title="DMCA.com Protection Status"
                    class="dmca-badge inline-block"
                  >
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/dmca_protected_sml_120l_eabb8ea68d.png'
                      "
                      alt="DMCA.com Protection Status"
                      width="121"
                      height="24"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="autoCol px-4">
            <div class="flex py-3 smd:justify-end justify-center">
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
  </footer>
</template>
<script type="text/javascript">
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
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 1
          },
          1371: {
            slidesPerView: 1
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
  .dark {
    footer {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
      .hoverBorder {
        @screen smd {
          // border-left: 0.125rem solid #4c4c4c;
          &:not(.afterNone)::after {
            background: #4c4c4c;
          }
        }
      }
    }
  }
  footer {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    svg text,
    svg tspan {
      @apply font-semibold;
      font-family: "Poppins";
    }
    .h2 {
      @apply text-xl leading-snug font-semibold pt-3 pb-3 px-4 smd:pt-0 smd:pb-5 smd:px-0 border-b border-themelight-10 dark:border-themedark-65 smd:border-0;
    }
    address {
      @apply text-base not-italic leading-relaxed smd:mb-10 mb-0;
    }
    .poppins_semibold {
      @apply font-semibold;
    }
    .navLink {
      column-count: 1;
      @screen md {
        column-count: 2;
        column-gap: 0rem;
      }

      @screen sxl {
        column-count: 3;
        column-gap: 1.5rem;
      }
    }
    .hoverBorder {
      @screen sxl {
        @apply pl-4 relative;
        position: relative;
        // border-left: 0.125rem solid rgba(221, 221, 221, 0.5);
        // &:not(.afterNone)::after {
        //   content: "";
        //   width: 0.125rem;
        //   height: 100%;
        //   background: rgba(221, 221, 221, 0.5);
        //   position: absolute;
        //   left: calc(50% - 7.62rem);
        //   top: 0;
        // }
        // &:not(.afterNone)::before {
        //   content: "";
        //   width: 0.125rem;
        //   height: 100%;
        //   background: rgba(221, 221, 221, 0.5);
        //   position: absolute;
        //   left: calc(50% + 6.75rem);
        //   top: 0;
        // }
        li {
          @apply relative;
          &::before {
            content: "";
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
            height: 100%;
            width: 0.125rem;
            position: absolute;
            left: -1.1875rem;
            z-index: 9;
            background-color: rgba(221, 221, 221, 0.5);
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
          max-height: auto;
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
        @apply pr-3 mr-3 border-r leading-tight  dark:border-themedark-65;
      }
      a {
        @apply text-sm leading-3 inline-block;
      }
      li:nth-child(2) {
        @apply pr-0 mr-0 border-0  dark:border-themedark-65;
        @screen sm {
          @apply pr-3 mr-3 border-r leading-tight;
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
  .dark {
    footer {
      svg text,
      svg tspan {
        fill: #ffffff;
      }
    }
  }
}
</style>