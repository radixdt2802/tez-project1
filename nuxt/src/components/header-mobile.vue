<template>
  <header :class="{ getShowHeader, getIsServices }" class="header-mobile">
    <div class="headerMobileMain relative">
      <div class="container m-auto md:px-4">
        <div class="row items-center">
          <div class="w-1/2 px-4">
            <div class="flex items-center w-full flex-row overflow-hidden">
              <div @click="showMenu">
                <img
                  v-if="!IsDark"
                  class="bars light-image"
                  v-rxlazy="closeIcon"
                  width="40"
                  height="40"
                  alt="MenuBar"
                />
                <img
                  v-if="IsDark"
                  v-rxlazy="closeIcon"
                  class="dark-image bars"
                  width="40"
                  height="40"
                  alt="Menubar"
                />
              </div>
              <tez-link to="/">
                <img
                  class="logo h-11 light-image"
                  v-rxlazy="
                    'https://d2ms8rpfqc4h24.cloudfront.net/logo_of_Radixweb_d6e60bbc5b.png'
                  "
                  alt="Logo of Radixweb – An IT Software and App Development Company"
                  width="80"
                  height="88"
                />
                <img
                  class="logo h-11 dark-image"
                  v-rxlazy="
                    'https://d2ms8rpfqc4h24.cloudfront.net/Radix_white_logo_a33259efac.png'
                  "
                  alt="Logo of Radixweb – An IT Software and App Development Company"
                  width="80"
                  height="88"
                />
              </tez-link>
            </div>
          </div>
          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-end w-auto">
              <tez-link to="/contact-us" class="btn btn_header_mobile"
                >Contact</tez-link
              >
              <button
                @click="darkModeClick"
                :class="{ 'hide-btn': istoggle == true }"
                class="pl-1 pr-3 sm:pl-3 outline-none focus:outline-none"
                aria-label="Thememode"
              >
                <img
                  width="24"
                  height="24"
                  class="w-6 h-6"
                  v-rxlazy="imageLink"
                  alt="Theme"
                />
              </button>
            </div>
          </div>
        </div>
        <div v-if="istoggle" class="col">
          <transition
            enter-active-class="transition ease-out duration-900"
            enter-class="opacity-75 translate-y-100"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-100"
            leave-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-100"
          >
            <nav
              class="block items-center justify-end navMobile"
              v-show="istoggle"
            >
              <!-- Services Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isServices = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isServices = false;
                  bgHeaderWhite = false;
                "
                :class="isServices ? '' : ''"
              >
                <div
                  @click="showSubmenu('isServices')"
                  class="
                    cursor-pointer
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    submenuName
                  "
                >
                  <span>Services</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>
                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isServices' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0 md:py-8">
                      <div class="flex flex-wrap md:flex-row">
                        <div class="menu-contentBox custom-box">
                          <tez-link
                            to="/services/software-development"
                            @click="hideMenu"
                          >
                            <span class="nav_text">Software Development</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              border-l-2 border-themedark-65
                              px-5
                            "
                          >
                            <li class="mb-2">
                              <tez-link
                                to="/services/strategy-consulting"
                                @click="hideMenu"
                                >Strategy Consulting</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/custom-software-development"
                                @click="hideMenu"
                                >Custom Software</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/software-product-development"
                                @click="hideMenu"
                                >Software Product</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/enterprise-mobility"
                                @click="hideMenu"
                                >Enterprise Mobility</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/software-development-outsourcing"
                                @click="hideMenu"
                                >Software Outsourcing</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/digital-transformation"
                                @click="hideMenu"
                                >Digital Transformation</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/software-project-rescue"
                                @click="hideMenu"
                                >Project Rescue</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/software-maintenance"
                                @click="hideMenu"
                                >Maintenance and support</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="menu-contentBox custom-box">
                          <tez-link
                            to="/services/web-application-development"
                            @click="hideMenu"
                            class
                          >
                            <span class="nav_text"
                              >Application Development</span
                            >
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2">
                              <tez-link
                                to="/services/custom-application-development"
                                @click="hideMenu"
                                >Custom Application</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/application-modernization"
                                @click="hideMenu"
                                >Application Modernization</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/application-management"
                                @click="hideMenu"
                                >Application Management</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/application-maintenance"
                                @click="hideMenu"
                                >Application Maintenance</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/cloud-application-development"
                                @click="hideMenu"
                                >Cloud Application</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/application-integration"
                                @click="hideMenu"
                                >Application Integration</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/ecommerce-website-development"
                                @click="hideMenu"
                                >Ecommerce</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/cms-website-development"
                                @click="hideMenu"
                                >CMS</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="menu-contentBox custom-box">
                          <tez-link
                            to="/services/embedded-product-development"
                            @click="hideMenu"
                          >
                            <span class="nav_text">Embeded Product</span>
                          </tez-link>

                          <ul
                            class="
                              my-2
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2">
                              <tez-link
                                to="/services/embedded-software-development"
                                @click="hideMenu"
                                >Embedded Software</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/embedded-hardware-development"
                                @click="hideMenu"
                                >Embedded Hardware</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/device-drivers-development"
                                @click="hideMenu"
                                >Device Drivers Development</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/services/internet-of-things-iot"
                                @click="hideMenu"
                                >Internet of Things (IoT)</tez-link
                              >
                            </li>
                          </ul>
                          <tez-link
                            to="/services/hire-dedicated-developers"
                            @click="hideMenu"
                            class
                          >
                            <span class="nav_text"
                              >Hire Dedicated Developers</span
                            >
                          </tez-link>
                        </div>
                        <div class="menu-contentBox custom-box">
                          <tez-link
                            to="/services/mobile-app-development"
                            class="py-1"
                            @click="hideMenu"
                          >
                            <span class="nav_text">Mobile Apps</span>
                          </tez-link>
                          <tez-link
                            to="/services/ui-ux-design"
                            class="py-1"
                            @click="hideMenu"
                          >
                            <span class="nav_text">UX/UI Design</span>
                          </tez-link>
                          <tez-link
                            to="/services/software-testing"
                            class="py-1"
                            @click="hideMenu"
                          >
                            <span class="nav_text">QA and Testing</span>
                          </tez-link>
                          <tez-link
                            to="/services/devops"
                            class="py-1"
                            @click="hideMenu"
                          >
                            <span class="nav_text">DevOps</span>
                          </tez-link>
                          <div class="px-3 py-4">
                            <div class="text-lg">
                              Delivering award-winning software development
                              solutions since 2000
                            </div>
                            <tez-link
                              to="/contact-us"
                              class="btn btn_md bg-primary mt-5 inline-block"
                              >Let’s Talk</tez-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Services Menu End -->
              <!-- Expertise Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isExpertise = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isExpertise = false;
                  bgHeaderWhite = false;
                "
                :class="isExpertise ? '' : ''"
              >
                <div
                  @click="showSubmenu('isExpertise')"
                  class="
                    cursor-pointer
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    submenuName
                  "
                >
                  <span>Expertise</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>
                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isExpertise' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0 md:py-8">
                      <div class="flex flex-wrap">
                        <div class="menu-contentBox custom-box">
                          <tez-link to="/industries" @click="hideMenu">
                            <span class="nav_text">Industries</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              border-l-2 border-themedark-65
                              px-5
                            "
                          >
                            <li class="mb-2">
                              <tez-link
                                to="/industries/healthcare"
                                @click="hideMenu"
                                >Healthcare</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/industries/fintech"
                                @click="hideMenu"
                                >Fintech</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/industries/retail"
                                @click="hideMenu"
                                >Retail and Ecommerce</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/industries/travel-hospitality"
                                @click="hideMenu"
                                >Travel and Hospitality</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/industries/manufacturing"
                                @click="hideMenu"
                                >Manufacturing</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="menu-contentBox custom-box">
                          <tez-link to="/solutions" class @click="hideMenu">
                            <span class="nav_text">Solutions</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/print-management-software"
                                @click="hideMenu"
                                >Print Order Management</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/crm-consulting"
                                @click="hideMenu"
                                >CRM</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/field-service-management-software"
                                @click="hideMenu"
                                >Field Services Management</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/hr-management-software"
                                @click="hideMenu"
                                >HR and Recruitment</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/insurance-software"
                                @click="hideMenu"
                                >Insurance</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/solutions/web-to-print"
                                @click="hideMenu"
                                >Web-to-Print Solutions</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="menu-contentBox custom-box">
                          <div>
                            <span class="nav_text">Verticals</span>
                          </div>

                          <ul class="my-2 ml-5 px-5">
                            <li
                              class="
                                mb-2
                                border
                                shadow-sm
                                rounded-xl
                                max-w-header
                              "
                            >
                              <div class="py-4 px-5">
                                <a
                                  href="https://www.onprintshop.com/"
                                  target="_blank"
                                >
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/onprint_Shop_337b6f381f.png'
                                    "
                                    alt="OnPrintshop"
                                    width="154"
                                    height="38"
                                    class="light-image"
                                  />
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/OPS_Logo_cf86968d03.png'
                                    "
                                    alt="OnPrintshop"
                                    width="154"
                                    height="38"
                                    class="dark-image"
                                  />
                                </a>
                              </div>
                            </li>
                            <li
                              class="
                                mb-2
                                border
                                shadow-sm
                                rounded-xl
                                max-w-header
                              "
                            >
                              <div class="py-4 px-5">
                                <a href="https://rxweb.io/" target="_blank">
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/rxweb_logo_2c21d47482.png'
                                    "
                                    alt="RxWeb"
                                    width="156"
                                    height="32"
                                    class="light-image"
                                  />
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/RX_Web_58878161d7.png'
                                    "
                                    alt="RxWeb"
                                    width="156"
                                    height="32"
                                    class="dark-image"
                                  />
                                </a>
                              </div>
                            </li>
                            <li
                              class="
                                mb-2
                                border
                                shadow-sm
                                rounded-xl
                                max-w-header
                              "
                            >
                              <div class="py-4 px-5">
                                <a href="https://tezjs.io/" target="_blank">
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/tezjs_587e96da4b.png'
                                    "
                                    alt="TezJS"
                                    width="156"
                                    height="32"
                                    class="light-image"
                                  />
                                  <img
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/tez_vertical_118w_x_32h_dark_11e8ae0862.png'
                                    "
                                    alt="TezJS"
                                    width="156"
                                    height="32"
                                    class="dark-image"
                                  />
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="menu-contentBoxExpertise custom-box">
                          <ul class="flex flex-wrap">
                            <li class="w-full pt-4">
                              <div
                                class="
                                  expertise-menu-box
                                  md:max-w-none
                                  max-w-header
                                "
                              >
                                <tez-link
                                  to="/microsoft-app-development"
                                  title
                                  @click="hideMenu"
                                >
                                  <img
                                    class="light-image menu-box-img"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/customized_solutions_ce53c01522.png'
                                    "
                                    width="36"
                                    height="38"
                                    alt="Microsoft Technologies"
                                  />
                                  <img
                                    class="menu-box-img dark-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/Microsoft_Logo_70f36cbc76.png'
                                    "
                                    width="36"
                                    height="38"
                                    alt="Microsoft Technologies"
                                  />
                                  <p class="font-semibold">
                                    Microsoft Technologies
                                  </p>
                                  <span>
                                    Design, build and integrate customized
                                    solutions with extensive Microsoft
                                    technologies and platforms
                                  </span>
                                </tez-link>
                              </div>
                            </li>
                            <li class="w-full pt-4">
                              <div class="expertise-menu-box max-w-header">
                                <div title class>
                                  <img
                                    class="menu-box-img light-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/angular_Js_development_12ddd4cf6e.png'
                                    "
                                    width="36"
                                    height="38"
                                    alt="AngularJS Development"
                                  />
                                  <img
                                    class="menu-box-img dark-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/Angular_white_6283089d05.webp'
                                    "
                                    width="36"
                                    height="38"
                                    alt="AngularJS Development"
                                  />
                                  <p class="font-semibold">
                                    AngularJS Development
                                  </p>
                                  <span>
                                    Our Skilled developers delivering highly
                                    scalable customized applications using
                                    AngularJS
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li class="w-full pt-4">
                              <div class="expertise-menu-box max-w-header">
                                <div title class>
                                  <img
                                    class="menu-box-img light-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/aws_development_2eac735c23.png'
                                    "
                                    width="40"
                                    height="38"
                                    alt="AWS Development"
                                  />
                                  <img
                                    class="menu-box-img dark-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/aws_te_2f9644aeff.png'
                                    "
                                    width="40"
                                    height="38"
                                    alt="AWS Development"
                                  />
                                  <p class="font-semibold">AWS Development</p>
                                  <span>
                                    DevOps consultation and AWS cloud
                                    applications to help you evolve continuously
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li class="w-full pt-4">
                              <div class="expertise-menu-box max-w-header">
                                <div title class>
                                  <img
                                    class="menu-box-img light-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/nodejs_development_00de65dbc0.png'
                                    "
                                    width="40"
                                    height="38"
                                    alt="Node JS Development"
                                  />
                                  <img
                                    class="menu-box-img dark-image"
                                    v-rxlazy="
                                      'https://d2ms8rpfqc4h24.cloudfront.net/Node_JS_Dark_Mode_9bab9e20de.webp'
                                    "
                                    width="40"
                                    height="38"
                                    alt="Node JS Development"
                                  />
                                  <p class="font-semibold">
                                    NodeJS Development
                                  </p>
                                  <span>
                                    Building innovative, secure, and scalable
                                    applications leveraging best of NodeJs
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Expertise Menu End -->
              <!-- Technologies Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isTechnologies = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isTechnologies = false;
                  bgHeaderWhite = false;
                "
                :class="isTechnologies ? '' : ''"
              >
                <div
                  @click="showSubmenu('isTechnologies')"
                  class="
                    cursor-pointer
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    submenuName
                  "
                >
                  <span>Technologies</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>
                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isTechnologies' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0 sxl:py-4">
                      <div class="flex flex-wrap">
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-4
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <tez-link
                            to="/front-end-development"
                            @click="hideMenu"
                          >
                            <span class="nav_text">Frontend</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              border-l-2 border-themedark-65
                              px-5
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/angularjs-development"
                                @click="hideMenu"
                                >AngularJS</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/reactjs-development"
                                @click="hideMenu"
                                >ReactJS</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/vuejs-development"
                                @click="hideMenu"
                                >Vue.js</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/javascript-development"
                                @click="hideMenu"
                                >JavaScript</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/css3-development" @click="hideMenu"
                                >CSS3</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/hire-tailwind-css-developer"
                                @click="hideMenu"
                                >Tailwind CSS</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/html5-development"
                                @click="hideMenu"
                                >HTML5</tez-link
                              >
                            </li>
                          </ul>
                          <span class="nav_text">DevOps</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/azure-devops" @click="hideMenu"
                                >Azure DevOps</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/services/devsecops"
                                @click="hideMenu"
                                >DevSecOps</tez-link
                              >
                            </li>
                          </ul>
                          <tez-link to="/headless-cms-development">
                            <span class="nav_text">Headless CMS</span>
                          </tez-link>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/strapi-development"
                                @click="hideMenu"
                                >Strapi</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <tez-link to="/backend-development" @click="hideMenu">
                            <span class="nav_text">Backend</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/net-development" @click="hideMenu"
                                >.NET</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/nodejs-development"
                                @click="hideMenu"
                                >Node.js</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/c-sharp-development"
                                @click="hideMenu"
                                >C#</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/php-development" @click="hideMenu"
                                >PHP</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/c-plus-plus-development"
                                @click="hideMenu"
                                >C++</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/dotnet-core-development"
                                @click="hideMenu"
                                >.NET Core</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <tez-link to="/frameworks" @click="hideMenu">
                            <span class="nav_text">Frameworks</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/laravel-development"
                                @click="hideMenu"
                                >Laravel</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/codeigniter-development"
                                @click="hideMenu"
                                >CodeIgniter</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/mean-stack-development"
                                @click="hideMenu"
                                >MEAN</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/cakephp-development"
                                @click="hideMenu"
                                >CakePHP</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/ruby-on-rails-development"
                                @click="hideMenu"
                                >Ruby on Rails</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <span class="nav_text">Mobile</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/services/ios-app-development"
                                @click="hideMenu"
                                >iOS</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/services/android-apps-development"
                                @click="hideMenu"
                                >Android</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/swift-app-development"
                                @click="hideMenu"
                                >Swift</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/services/flutter-app-development"
                                @click="hideMenu"
                                >Flutter</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/ionic-app-development"
                                @click="hideMenu"
                                >Ionic</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/react-native-app-development"
                                @click="hideMenu"
                                >React Native</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/xamarin-app-development"
                                @click="hideMenu"
                                >Xamarin</tez-link
                              >
                            </li>
                          </ul>

                          <span class="nav_text">Cloud</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/aws-development" @click="hideMenu"
                                >AWS</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/google-app-engine-development"
                                @click="hideMenu"
                                >Google Cloud</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/azure-development"
                                @click="hideMenu"
                                >Azure</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <tez-link to="/database-management" @click="hideMenu">
                            <span class="nav_text">Database</span>
                          </tez-link>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/sql-server-database-development"
                                @click="hideMenu"
                                >SQL Server</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/mysql-development"
                                @click="hideMenu"
                                >MySQL</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/postgresql-database-management"
                                @click="hideMenu"
                                >Postgre SQL</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/mongodb-development"
                                @click="hideMenu"
                                >MongoDB</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/dynamodb-development"
                                @click="hideMenu"
                                >DynamoDB</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/sqlite-database-management"
                                @click="hideMenu"
                                >SQLite</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/firebase-development"
                                @click="hideMenu"
                                >Firebase</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                          "
                        >
                          <span class="nav_text">Platforms</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/zoho-crm-consulting"
                                @click="hideMenu"
                                >Zoho</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/salesforce" @click="hideMenu"
                                >Salesforce</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link to="/servicenow" @click="hideMenu"
                                >ServiceNow</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/microsoft-dynamics-365-development"
                                @click="hideMenu"
                                >MS Dynamics CRM</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/power-bi-consulting"
                                @click="hideMenu"
                                >Power BI</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            smd:w-1/5
                            w-full
                            custom-box
                            mb-2
                          "
                        >
                          <span class="nav_text">Ecommerce</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/woocommerce-development"
                                @click="hideMenu"
                                >WooCommerce</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/magento-development"
                                @click="hideMenu"
                                >Magento</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/shopify-development"
                                @click="hideMenu"
                                >Shopify</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/nopcommerce-development"
                                @click="hideMenu"
                                >NopCommerce</tez-link
                              >
                            </li>
                          </ul>

                          <span class="nav_text">CMS</span>

                          <ul
                            class="
                              my-2
                              md:my-5
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/wordpress-development"
                                @click="hideMenu"
                                >WordPress</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/joomla-development"
                                @click="hideMenu"
                                >Joomla</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/kentico-developer"
                                @click="hideMenu"
                                >Kentico</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/dotnetnuke-development"
                                @click="hideMenu"
                                >DotNetNuke</tez-link
                              >
                            </li>
                            <li class="mb-2 md:mb-4">
                              <tez-link
                                to="/sitefinity-developers"
                                @click="hideMenu"
                                >Sitefinity</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Technologies Menu End -->
              <!-- Approach Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isApproach = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isApproach = false;
                  bgHeaderWhite = false;
                "
                :class="isApproach ? '' : ''"
              >
                <div
                  @click="showSubmenu('isApproach')"
                  class="
                    cursor-pointer
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    submenuName
                  "
                >
                  <span>Approach</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>

                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isApproach' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0">
                      <div class="flex flex-wrap">
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-4
                            sm:p-4
                            w-full
                            approach-menu
                            custom-box
                          "
                        >
                          <div class="approaches-max-w px-4">
                            <span class="text-only">Service Excellence</span>

                            <p class="paragraph">
                              A market leader in software development, we
                              automate workflows, empower growth, drive
                              innovation, ensure quality, provide robust support
                              in maximizing revenue.
                            </p>
                            <p>
                              <span class="text-only"
                                >Looking for something specific?</span
                              >
                            </p>
                            <div>
                              <tez-link
                                to="/contact-us"
                                class="
                                  btn btn_md
                                  bg-primary
                                  lg:text-xl
                                  mt-3
                                  inline-block
                                "
                                >Let’s Talk</tez-link
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            w-full
                            custom-box
                          "
                        >
                          <tez-link
                            to="/value-proposition"
                            class="approaches"
                            @click="hideMenu"
                          >
                            <span
                              class="
                                text-themedark-10
                                dark:text-themelight-0
                                block
                                px-5
                                hover:text-primary
                                text-base
                                leading-7
                              "
                              >Value Proposition</span
                            >
                          </tez-link>
                          <tez-link
                            to="/software-development-methodologies"
                            class="approaches"
                            @click="hideMenu"
                          >
                            <span
                              class="
                                text-themedark-10
                                dark:text-themelight-0
                                block
                                px-5
                                hover:text-primary
                                text-base
                                leading-7
                              "
                              >Development Methodology</span
                            >
                          </tez-link>
                          <tez-link
                            to="/project-management-methodologies"
                            class="approaches"
                            @click="hideMenu"
                          >
                            <span
                              class="
                                text-themedark-10
                                dark:text-themelight-0
                                block
                                px-5
                                hover:text-primary
                                text-base
                                leading-7
                              "
                              >Project Management</span
                            >
                          </tez-link>
                          <tez-link
                            to="/it-outsourcing-our-approach"
                            class="approaches"
                            @click="hideMenu"
                          >
                            <span
                              class="
                                text-themedark-10
                                dark:text-themelight-0
                                block
                                px-5
                                hover:text-primary
                                text-base
                                leading-7
                              "
                              >Outsourcing Approach</span
                            >
                          </tez-link>
                          <tez-link
                            to="/software-outsourcing-business-models"
                            class="approaches"
                            @click="hideMenu"
                          >
                            <span
                              class="
                                text-themedark-10
                                dark:text-themelight-0
                                block
                                px-5
                                hover:text-primary
                                text-base
                                leading-7
                              "
                              >Engagement Models</span
                            >
                          </tez-link>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-4
                            py-6
                            sm:p-4
                            w-full
                            custom-box
                            mb-2
                          "
                        >
                          <tez-link
                            to="/company-news/radixweb-grabs-prestigious-spot-in-the-2020-global-outsourcing-100-list-by-iaop"
                            class="featured-image-box"
                            @click="hideMenu"
                          >
                            <img
                              v-rxlazy="
                                'https://d2ms8rpfqc4h24.cloudfront.net/the_global_outsourcing_fd36f154c0.jpg'
                              "
                              alt="The Global Outsourcing"
                              width="395"
                              height="230"
                              class="mx-auto"
                            />
                            <span class="pt-3"
                              >Radixweb Featured in IAOP’s 2020 Global
                              Outsourcing 100’ List</span
                            >
                          </tez-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Approach Menu End -->
              <!-- Work Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isWork = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isWork = false;
                  bgHeaderWhite = false;
                "
                :class="isWork ? '' : ''"
              >
                <div
                  @click="showSubmenu('isWork')"
                  class="
                    cursor-pointer
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    submenuName
                  "
                >
                  <span>Work</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>

                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isWork' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0 md:py-8">
                      <div class="flex flex-wrap">
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-4
                            sm:p-4
                            w-full
                            md:text-left
                            text-center
                            custom-box
                          "
                        >
                          <div class="work-center px-4">
                            <tez-link
                              to="/testimonials"
                              class
                              title="Testimonials"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Testimonials</span>
                              <img
                                class="nav_text icon_img"
                                v-rxlazy="
                                  'https://d2ms8rpfqc4h24.cloudfront.net/quote_icon_e3b10316b8.png'
                                "
                                alt="Quote"
                                width="39"
                                height="28"
                              />
                              <p class="paragraph">
                                The Radixweb team work cohesively with our local
                                technology team as a single team driving our
                                overall product strategy. We have found the
                                staff very friendly, driven to meet our business
                                objectives.
                              </p>
                              <div class="client-wapper">
                                <img
                                  v-rxlazy="
                                    'https://d2ms8rpfqc4h24.cloudfront.net/jason_quirk_client_d7d6a18c87.jpg'
                                  "
                                  alt="Jason Quirk - CTO"
                                  width="76"
                                  height="76"
                                  class="rounded-full"
                                />
                                <div class="client-details">
                                  <div class="paragraph">Jason Quirk - CTO</div>
                                  <div class="paragraph">
                                    FastTrack360, Australia
                                  </div>
                                </div>
                              </div>
                            </tez-link>
                          </div>
                        </div>
                        <div class="work-wrapper custom-box">
                          <div class="work-center px-4">
                            <tez-link
                              to="/case-studies"
                              title="Case Studies"
                              @click="hideMenu"
                            >
                              <span class="nav_text-work pb-3"
                                >Case Studies</span
                              >
                            </tez-link>
                            <tez-link
                              to="/case-studies/cloud-based-recruitment-software"
                              class="featured-image-box"
                              title="Cloud Base Recruitment Software"
                              @click="hideMenu"
                            >
                              <img
                                v-rxlazy="
                                  'https://d2ms8rpfqc4h24.cloudfront.net/cloud_based_recruitment_software_07426a5ca2.jpg'
                                "
                                alt="Cloud based Recruitment Software"
                                width="320"
                                height="190"
                                class="mx-auto md:mx-0 rounded-md"
                              />
                              <span class="text-center"
                                >Cloud based Recruitment Software</span
                              >
                            </tez-link>
                          </div>
                        </div>
                        <div class="work-wrapper custom-box mb-2">
                          <div class="work-center px-4">
                            <tez-link
                              to="/success-stories"
                              title="Success Stories"
                              @click="hideMenu"
                            >
                              <span class="nav_text-work">Success Stories</span>
                            </tez-link>
                            <tez-link
                              to="/success-stories/improved-software-application-performance"
                              class="featured-image-box"
                              title="Futuristic Software Designs For Competitive Edge"
                              @click="hideMenu"
                            >
                              <img
                                v-rxlazy="
                                  'https://d2ms8rpfqc4h24.cloudfront.net/improved_software_application_91a61be290.png'
                                "
                                alt="Improved Software Application"
                                width="320"
                                height="190"
                                class="mx-auto md:mx-0"
                              />
                              <span class="text-center"
                                >Futuristic Software Designs for Competitive
                                Edge</span
                              >
                            </tez-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Work Menu End -->
              <!-- About Menu Start -->
              <div
                class="mainBlock"
                @mouseover="
                  isAbout = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isAbout = false;
                  bgHeaderWhite = false;
                "
                :class="isAbout ? '' : ''"
              >
                <div
                  @click="showSubmenu('isAbout')"
                  class="
                    nav-link-submenu
                    flex
                    justify-between
                    w-full
                    focus:outline-none
                    cursor-pointer
                    submenuName
                  "
                >
                  <span>About</span>
                  <img
                    class="light-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                  <img
                    class="dark-image"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                    "
                    width="17"
                    height="17"
                    alt="Down arrow"
                  />
                </div>

                <div
                  class="
                    top-100
                    left-0
                    right-0
                    z-10
                    bg-white
                    dark:bg-themedark-0
                    boxShadow
                  "
                  v-show="menuName === 'isAbout' && toggleSubMenu"
                >
                  <div class="container mx-auto py-2">
                    <div class="overflow-hidden py-0 md:py-8">
                      <div class="flex flex-wrap">
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-4
                            sm:p-4
                            w-full
                            custom-box
                          "
                        >
                          <tez-link
                            to="/about-us"
                            title="About Us"
                            @click="hideMenu"
                          >
                            <span class="nav_text">About Us</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              border-l-2 border-themedark-65
                              px-5
                            "
                          >
                            <li class="mb-2">
                              <tez-link to="/our-awards" @click="hideMenu"
                                >Awards</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/leadership" @click="hideMenu"
                                >Leadership Team</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/partners" @click="hideMenu"
                                >Partnership</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/our-infrastructure"
                                @click="hideMenu"
                                >Our Infrastructure</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/our-culture" @click="hideMenu"
                                >Our Culture</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/great-place-to-work"
                                @click="hideMenu"
                                >Great Place to Work <sup>®</sup></tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="relative py-4 mt-4 w-full custom-box">
                          <tez-link to="/careers" @click="hideMenu">
                            <span class="nav_text">Careers</span>
                          </tez-link>
                          <ul
                            class="
                              my-2
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2">
                              <tez-link to="/current-openings" @click="hideMenu"
                                >Open Positions</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/insights/life-at-radix"
                                @click="hideMenu"
                                >Life at Radixweb</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link
                                to="/blog/8-reasons-to-join-radixweb"
                                @click="hideMenu"
                                >Why join us</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="relative py-4 mt-4 w-full custom-box">
                          <tez-link to="/insights" @click="hideMenu">
                            <span class="nav_text">Insights</span>
                          </tez-link>

                          <ul
                            class="
                              my-2
                              ml-5
                              px-5
                              border-l-2 border-themedark-65
                            "
                          >
                            <li class="mb-2">
                              <tez-link to="/blog" @click="hideMenu"
                                >Blog</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/company-news" @click="hideMenu"
                                >News</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/videos" @click="hideMenu"
                                >Videos</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/whitepapers" @click="hideMenu"
                                >Whitepapers</tez-link
                              >
                            </li>
                            <li class="mb-2">
                              <tez-link to="/guides" @click="hideMenu"
                                >Guides</tez-link
                              >
                            </li>
                          </ul>
                        </div>
                        <div
                          class="
                            relative
                            mt-4
                            px-0
                            py-6
                            sm:p-4
                            w-full
                            text-center
                            custom-box
                            mb-2
                          "
                        >
                          <tez-link
                            to="/radixweb-anniversary"
                            class="featured-image-box"
                            @click="hideMenu"
                          >
                            <img
                              v-rxlazy="
                                'https://d2ms8rpfqc4h24.cloudfront.net/Inovation_you_deserve_small_banner_90b280b8a4.jpg'
                              "
                              alt="Radixweb Commemorates 22 Years of #InnovationYouDeserve"
                              width="320"
                              height="190"
                              class="mx-auto smd:mx-0 px-4"
                            />
                            <p class="px-4">
                              Radixweb Commemorates 22 Years of
                              #InnovationYouDeserve
                            </p>
                          </tez-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- About Menu End-->
            </nav>
          </transition>
        </div>
      </div>
    </div>
    <!-- <div
      class="bg-primary px-4 py-1 text-lg text-center"
      :class="(!this.showHeader) ? 'hidden' : ''"
    >
      <a
        href="/new-office-launch-ekyarth"
        title="Radixweb Launched An Ubercool New Office - Take a Tour"
        class="no-underline text-themelight-0 hover:text-themelight-0 flex justify-center items-center"
      >
        Radixweb is now a Great Place To Work
        <svg
          class="ml-5"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20px"
          height="16px"
          viewBox="0 0 287.758 151.516"
          enable-background="new 0 0 287.758 151.516"
          xml:space="preserve"
        >
          <g>
            <g>
              <polygon
                fill="#ffffff"
                points="191.496,133.648 239.762,85.382 11.121,85.382 11.121,66.132 239.762,66.132 191.497,17.866 
            205.121,4.242 276.637,75.757 205.121,147.273"
              />
            </g>
          </g>
        </svg> 
      </a>
    </div> -->
    <!-- <div class="gptw">
      <a href="/radixweb-anniversary" title="RXConfab 2022">
        <img class="customBorder" v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Badge_7532b619fd.jpg'" width="101" height="100" alt="RXConfab 2022">
      </a>
    </div> -->
  </header>
</template>

<script type="text/javascript">
// var openmodel=false;
// window.addEventListener('scroll',function(){
//     let header = document.querySelector('header');

//     header.classList.toggle('scrolling-active',window.scrollY>0);
// })
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin],
  // name: 'headercustom',
  props: {
    data: Object,
  },
  computed: {
    getShowHeader() {
      return !this.showHeader ? "sticky-scrolled" : "";
    },
    getIsServices() {
      return this.bgHeaderWhite ? "bg-white" : "";
    },
  },
  data() {
    return {
      closeIcon: "",
      openIcon: "",
      imageLink: "",
      bgOnHover: false,
      bgHeaderWhite: false,
      isServices: false,
      isExpertise: false,
      isTechnologies: false,
      isApproach: false,
      isWork: false,
      isAbout: false,
      istoggle: false,
      isTogglevalue: true,
      windowWidth: null,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
      toggleSubMenu: false,
      menuName: "",
    };
  },
  methods: {
    changeIcon() {
      if (!this.IsDark) {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/cross_1_b589b75fc1.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_38dbcadbdc.svg";
      } else {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg";
      }
    },
    onScroll() {
      if (window.pageYOffset > 0) {
        if (this.showHeader) this.showHeader = false;
        return;
      } else {
        if (!this.showHeader) this.showHeader = true;
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.istoggle = true;
      this.changeIcon();
      this.expertiseMenu = true;
      this.businessMenu = false;
      this.toggleSubMenu = true;
    },
    toggledark() {
      if (this.isTogglevalue == true) {
        document.querySelector("html").classList.add("dark", "bg-black-0");
        this.isTogglevalue = false;
      } else {
        document.querySelector("html").classList.remove("dark", "bg-black-0");
        this.isTogglevalue = true;
      }
    },
    showSubmenu(menu) {
      /*    if (isMobile()) {
        } */
      if (menu != this.menuName) {
        this.menuName = menu;
        this.toggleSubMenu = true;
      } else {
        this.toggleSubMenu = !this.toggleSubMenu;
      }
    },
    showMenu() {
      this.istoggle = !this.istoggle;
      this.changeIcon();
      this.isServices = false;
      this.isExpertise = false;
      this.isTechnologies = false;
      this.isApproach = false;
      this.isWork = false;
      this.isAbout = false;
      this.toggleSubMenu = true;
    },
    hideMenu() {
      this.istoggle = !this.istoggle;
      this.changeIcon();
      // this.isServices = false;
      // this.isExpertise = false;
      // this.isTechnologies = false;
      // this.isApproach = false;
      // this.isWork = false;
      // this.isAbout = false;
      // this.toggleSubMenu = false;
    },
    darkModeClick() {
      this.IsDark = !this.IsDark;
      if (!this.IsDark) {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/Light_Mode_cdf2246d87.svg";
      } else {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/sun_white_97528289bf.svg";
      }
      if (typeof window != "undefined") {
        localStorage.setItem("Dark", this.IsDark);
      }
      if (!this.IsDark) {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/cross_1_b589b75fc1.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_38dbcadbdc.svg";
      } else {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg";
      }
    },
  },
  mounted() {
    if (typeof window != "undefined") {
      var x = localStorage.getItem("Dark");
      if (x == "true") {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/sun_white_97528289bf.svg";
      } else {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/Light_Mode_cdf2246d87.svg";
      }
    }
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    this.changeIcon();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
@layer utilities {
  body {
    header.header-mobileTopSpace + * {
      margin-top: 4rem;
      @screen smd {
        margin-top: 8rem;
      }
    }
  }
  header.header-mobile {
    .gptw {
      @apply fixed right-0 z-10 block;
      bottom: 12%;
      height: 6.25rem;
      width: 6.3125rem;
      img.customBorder {
        border-right: transparent !important;
        border: 2px solid #4ef1e0;
      }
    }
    @apply fixed right-0 left-0 top-0 w-full z-40 dark:bg-themedark-10 dark:text-white bg-white;
    box-shadow: 0 0 0.625rem #0000006e;
    .container {
      @apply max-w-full;
    }
    &.header-mobile {
      img.logo {
        @apply transition duration-500 ease-in-out my-3;
        max-width: 2.5rem;
      }
    }
    .bars {
      margin-right: 0.9375rem;
      max-width: 1.5rem;
    }
    .col {
      nav {
        @apply -mx-4;
      }
    }
    .navMobile {
      @apply overflow-auto;
      height: calc(100vh - 3.75rem);
    }
    &.header.header-mobile.sticky-scrolled {
      .gptw {
        @apply hidden;
      }
      box-shadow: 0 0 0.625rem #0000006e;
      @apply dark:bg-themedark-10;
      .submenuName {
        padding: 0.625rem 1.25rem;
      }
      .cta-space {
        a {
          margin: 2rem 0rem;
        }
        padding-left: 0.8125rem;
      }
      @apply bg-white;
      a {
        span {
          @apply text-themedark-0 dark:text-themelight-0;
        }
      }
      .logo {
        @apply mt-3;
        max-width: 2.5rem;
      }
    }
    @screen md {
      .colAuto {
        @apply max-w-full;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
      }
      .col {
        @apply max-w-full;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
      }
    }

    .boxShadow {
      @apply shadow-none;
    }
    .submenuName {
      padding: 0.625rem 1.25rem;
      @apply text-lg;
    }
    .mainBlock {
      @apply font-normal;
    }
    .cta-space {
      a {
        margin: 2rem 0rem;
      }
      padding-left: 0.8125rem;
    }

    .headerMobileMain {
      a {
        @apply no-underline;
      }
    }

    .menu-contentBoxtop {
      @apply relative mt-2 px-0 py-4 sm:p-4 w-full;
    }
    .menu-contentBox {
      @apply relative mt-2 mb-2  px-0 py-6 sm:p-4 w-full;
    }
    .menu-contentBoxExpertise {
      @apply relative mt-2 mb-2  px-0 py-6 sm:p-4 w-full md:border-t-2 md:border-themelight-50 border-0;
    }
    .nav-list {
      @apply flex items-center py-2 border-b px-5;
    }
    .nav-link {
      @apply text-themedark-10;
    }
    .nav-link-submenu {
      @apply text-themedark-10 dark:text-themelight-0 inline-flex items-center;
    }
    .nav_text {
      @apply text-themedark-10 dark:text-themelight-0  block font-semibold px-5 text-xl hover:text-primary;
    }
    .text-only {
      @apply text-themedark-10 dark:text-themedark-75  block font-semibold;
    }
    .paragraph {
      @apply p-0 text-themedark-10 text-base px-5;
      line-height: 1.6875rem;
      margin-bottom: 1.375rem;
      margin-top: 0.875rem;
    }
    .approaches {
      padding: 0.3125rem 0rem;
      .nav_text {
        padding: 0.3125rem 1.25rem;
        @apply font-normal;
      }
    }
    .approaches-max-w {
      max-width: 22.5rem;
    }
    .work-center {
      @apply justify-center mx-auto items-center text-center;
      max-width: 22.5rem;
      .icon_img {
        @apply mx-auto;
      }
    }
    .max-w-header {
      @apply px-4;
      max-width: 15.625rem;
      @screen md {
        max-width: unset;
      }
    }
    .expertise-menu-box {
      .menu-box-img {
        @apply flex items-end;
      }
    }

    .client-wapper {
      @apply flex flex-wrap items-center justify-center;
      .paragraph {
        @apply text-lg leading-6 font-semibold;
        margin: 0.375rem 0;
      }
      .client-details {
        @apply w-full;
      }
    }
    .approach-menu {
      .paragraph {
        @apply p-0 text-themedark-10 dark:text-themedark-75 text-base;
        line-height: 1.6875rem;
        margin-bottom: 1.375rem;
        margin-top: 0.875rem;
      }
    }
    .work-wrapper {
      @apply relative mt-4 px-0 py-6 sm:p-4 w-full;
      .nav_text-work {
        @apply text-xl font-semibold pb-3;
        &:hover {
          @apply text-primary;
        }
      }
    }
    a.featured-boxAboutus span {
      @apply text-base leading-7 text-secondary mr-auto mt-4 ml-2;
    }

    a.featured-image-box span {
      @apply text-base leading-7 text-secondary mr-auto mt-4;
    }
    .custom-box {
      @apply bg-themelight-10 dark:bg-themedark-10;
      box-shadow: 0rem 0.125rem 0.125rem #dcdcdc;
    }
  }
  @screen md {
    .work-center {
      @apply text-left;
      max-width: 22.5rem;
      .icon_img {
        @apply mx-0 my-4;
      }
    }
    .client-wapper {
      @apply flex items-center;
      .paragraph {
        @apply text-lg leading-6 font-semibold;
        margin: 0.375rem 0;
      }
      .client-details {
        width: inherit;
      }
    }
    .nav-list {
      @apply border-b-4 border-primary border-opacity-0 px-2;
    }
  }
  header.header-mobile {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    header.header-mobile {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>