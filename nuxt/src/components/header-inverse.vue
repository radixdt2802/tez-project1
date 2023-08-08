<template>
  <header :class="[getShowHeader, getIsServices]" class="header headroom  header_inverse">
    <div class="relative headerMain">
      <div class="container m-auto md:px-4">
        <div class="items-center row justify-evenly navContainer">
          <div class="w-1/2 pr-4 colAuto">
            <div class="absolute top-0 right-0 inline-block pr-6 md:hidden">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  bg-white
                  rounded-md
                  text-secondary
                  hover:text-primary
                  dark:hover:text-primary
                "
                @click="showMenu()"
              >
                open
              </button>
            </div>
            <div class="mainLogo flex justify-start mr-0">
              <tez-link to="/" class="outline-none">
                <img
                  class="logo light-image"
                  title="Radixweb"
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Logo_80x81_ec6628aba0.png'"
                  alt="Logo of Radixweb – An IT Software and App Development Company"
                  width="80"
                  height="81"
                />
                <img
                  class="logo dark-image"
                  title="Radixweb"
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Radix_white_logo_a33259efac.png'"
                  alt="Logo of Radixweb – An IT Software and App Development Company"
                  width="80"
                  height="81"
                />
              </tez-link>
            </div>
          </div>
          <div class="w-1/2 pl-4 col">
            <nav class="justify-end md:flex navMain items-center" v-show="istoggle">
              <!-- Services Menu Start -->
              <div
                class="border-t md:border-t-0"
                @mouseover="
                  isServices = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isServices = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  class="
                    mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                    hover:text-primary
                    dark:hover:text-primary
                  "
                  :class="
                    isServices
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  title="Services"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="isServices ? 'text-primary' : 'text-themedark-0'"
                    >Services</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isServices"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap md:flex-row">
                          <div class="menu-contentBoxtop custom-box">
                            <tez-link
                              to="/services/software-development"
                              title="Software Development"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Software Development</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/services/strategy-consulting"
                                  class="hover:text-primary"
                                  title="Strategy Consulting"
                                  @click="hideMenu"
                                  >Strategy Consulting</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/custom-software-development"
                                  class="hover:text-primary"
                                  title="Custom Software"
                                  @click="hideMenu"
                                  >Custom Software</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/software-product-development"
                                  class="hover:text-primary"
                                  title="Software Product"
                                  @click="hideMenu"
                                  >Software Product</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/enterprise-mobility"
                                  class="hover:text-primary"
                                  title="Enterprise Mobility"
                                  @click="hideMenu"
                                  >Enterprise Mobility</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/software-development-outsourcing"
                                  class="hover:text-primary"
                                  title="Software Outsourcing"
                                  @click="hideMenu"
                                  >Software Outsourcing</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/digital-transformation"
                                  class="hover:text-primary"
                                  title="Digital Transformation"
                                  @click="hideMenu"
                                  >Digital Transformation</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/software-project-rescue"
                                  class="hover:text-primary"
                                  title="Project Rescue"
                                  @click="hideMenu"
                                  >Project Rescue</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/software-maintenance"
                                  class="hover:text-primary"
                                  title="Maintenance and support"
                                  @click="hideMenu"
                                  >Maintenance and support</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="menu-contentBox custom-box">
                            <tez-link
                              to="/services/web-application-development"
                              title="Application Development"
                              @click="hideMenu"
                            >
                              <span class="nav_text"
                                >Application Development</span
                              >
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/services/custom-application-development"
                                  class="hover:text-primary"
                                  title="Custom Application"
                                  @click="hideMenu"
                                  >Custom Application</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/application-modernization"
                                  class="hover:text-primary"
                                  title="Application Modernization"
                                  @click="hideMenu"
                                  >Application Modernization</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  title="Application Management"
                                  to="/services/application-management"
                                  class="hover:text-primary"
                                  @click="hideMenu"
                                  >Application Management</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/application-maintenance"
                                  class="hover:text-primary"
                                  title="Application Maintenance"
                                  @click="hideMenu"
                                  >Application Maintenance</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/cloud-application-development"
                                  class="hover:text-primary"
                                  title="Cloud Application"
                                  @click="hideMenu"
                                  >Cloud Application</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/application-integration"
                                  class="hover:text-primary"
                                  title="Application Integration"
                                  @click="hideMenu"
                                  >Application Integration</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/ecommerce-website-development"
                                  class="hover:text-primary"
                                  title="Ecommerce"
                                  @click="hideMenu"
                                  >Ecommerce</tez-link
                                >
                              </li>
                              <li class="-mb-40">
                                <tez-link
                                  to="/services/cms-website-development"
                                  class="hover:text-primary"
                                  title="CMS"
                                  @click="hideMenu"
                                  >CMS</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="menu-contentBox custom-box">
                            <tez-link
                              to="/services/embedded-product-development"
                              title="Embeded Product"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Embeded Product</span>
                            </tez-link>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/services/embedded-software-development"
                                  class="hover:text-primary"
                                  title="Embedded Software"
                                  @click="hideMenu"
                                  >Embedded Software</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/embedded-hardware-development"
                                  class="hover:text-primary"
                                  title="Embedded Hardware"
                                  @click="hideMenu"
                                  >Embedded Hardware</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/device-drivers-development"
                                  class="hover:text-primary"
                                  title="Device Drivers Development"
                                  @click="hideMenu"
                                  >Device Drivers Development</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/internet-of-things-iot"
                                  class="hover:text-primary"
                                  title="Internet of Things (IoT)"
                                  @click="hideMenu"
                                  >Internet of Things (IoT)</tez-link
                                >
                              </li>
                            </ul>
                            <tez-link
                              to="/services/hire-dedicated-developers"
                              title="Hire Dedicated Developers"
                              @click="hideMenu"
                            >
                              <span class="nav_text"
                                >Hire Dedicated Developers</span
                              >
                            </tez-link>
                          </div>
                          <div class="menu-contentBox custom-box">
                            <tez-link
                              to="/services/mobile-app-development"
                              class="placeholder-opacitybg-25"
                              title="Mobile Apps"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Mobile Apps</span>
                            </tez-link>
                            <tez-link
                              to="/services/ui-ux-design"
                              title="UX/UI Design"
                              class="py-3"
                              @click="hideMenu"
                            >
                              <span class="nav_text">UX/UI Design</span>
                            </tez-link>
                            <tez-link
                              to="/services/software-testing"
                              class="py-3"
                              title="QA and Testing"
                              @click="hideMenu"
                            >
                              <span class="nav_text">QA and Testing</span>
                            </tez-link>
                            <tez-link
                              to="/services/devops"
                              title="DevOps"
                              class="py-3"
                              @click="hideMenu"
                            >
                              <span class="nav_text">DevOps</span>
                            </tez-link>
                            <div class="py-4">
                              <div class="text-lg">
                                Delivering award-winning software development
                                solutions since 2000
                              </div>
                              <tez-link
                                to="/contact-us"
                                class="
                                  inline-block
                                  mt-6
                                  btn btn_md
                                  bg-primary
                                  lg:text-xl
                                "
                                title="Let’s Talk"
                                >Let’s Talk</tez-link
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <!-- Services Menu End -->
              <!-- Expertise Menu Start -->
              <div
                class="border-t md:border-t-0 fixedNav"
                @mouseover="
                  isExpertise = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isExpertise = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  :class="
                    isExpertise
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  class="
                  mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                  "
                  title="Expertise"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="isExpertise ? 'text-primary' : 'text-themedark-0'"
                    >Expertise</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isExpertise"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap">
                          <div class="menu-contentBox custom-box">
                            <tez-link
                              to="/industries"
                              title="Industries"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Industries</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/industries/healthcare"
                                  class="hover:text-primary"
                                  title="Healthcare"
                                  @click="hideMenu"
                                  >Healthcare</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/industries/fintech"
                                  class="hover:text-primary"
                                  title="Fintech"
                                  @click="hideMenu"
                                  >Fintech</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/industries/retail"
                                  class="hover:text-primary"
                                  title="Retail and Ecommerce"
                                  @click="hideMenu"
                                  >Retail and Ecommerce</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/industries/travel-hospitality"
                                  class="hover:text-primary"
                                  title="Travel and Hospitality"
                                  @click="hideMenu"
                                  >Travel and Hospitality</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/industries/manufacturing"
                                  class="hover:text-primary"
                                  title="Manufacturing"
                                  @click="hideMenu"
                                  >Manufacturing</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div class="menu-contentBox custom-box">
                            <tez-link
                              to="/solutions"
                              title="Solutions"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Solutions</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/print-management-software"
                                  class="hover:text-primary"
                                  title="Print Order Management"
                                  @click="hideMenu"
                                  >Print Order Management</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/crm-consulting"
                                  class="hover:text-primary"
                                  title="CRM"
                                  @click="hideMenu"
                                  >CRM</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/field-service-management-software"
                                  class="hover:text-primary"
                                  title="Field Services Management"
                                  @click="hideMenu"
                                  >Field Services Management</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/hr-management-software"
                                  class="hover:text-primary"
                                  title="HR and Recruitment"
                                  @click="hideMenu"
                                  >HR and Recruitment</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/insurance-software"
                                  class="hover:text-primary"
                                  title="Insurance"
                                  @click="hideMenu"
                                  >Insurance</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/solutions/web-to-print"
                                  class="hover:text-primary"
                                  title="Web-to-Print Solutions"
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

                            <ul class="my-2 lg:my-5">
                              <li
                                class="
                                  inline-block
                                  w-auto
                                  mb-2
                                  border
                                  dark:border-themedark-65
                                  border-lightgray
                                  shadow-sm
                                  md:mb-4
                                  rounded-xl
                                "
                              >
                                <div class="px-5 py-4">
                                  <a
                                    href="https://www.onprintshop.com/"
                                    target="_blank"
                                    title="OnPrintshop"
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
                                  inline-block
                                  w-auto
                                  mb-2
                                  md:mb-4
                                  border
                                  dark:border-themedark-65
                                  border-lightgray
                                  shadow-sm
                                  rounded-xl
                                "
                              >
                                <div class="px-5 py-4">
                                  <a
                                    href="https://rxweb.io/"
                                    target="_blank"
                                    title="RxWeb"
                                  >
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
                                  inline-block
                                  w-auto
                                  mb-2
                                  border
                                  shadow-sm
                                  rounded-xl
                                "
                              >
                                <div class="px-5 py-4">
                                  <a
                                    href="https://tezjs.io/"
                                    target="_blank"
                                    title="TezJS"
                                  >
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
                          <div
                            class="
                              menu-contentBoxExpertise
                              relative
                              mt-4
                              px-0
                              py-6
                              sm:p-4
                              w-full
                              md:border-t-2
                              dark:border-themedark-65
                              border-lightgray
                              custom-box
                            "
                          >
                            <ul class="flex flex-wrap">
                              <li class="w-full pt-4 lg:w-1/4 md:w-1/2">
                                <div
                                  class="
                                    expertise-menu-box
                                    md:max-w-none
                                    max-w-header
                                  "
                                >
                                  <tez-link
                                    to="/microsoft-app-development"
                                    title="Microsoft Technologies"
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
                              <li class="w-full pt-4 lg:w-1/4 md:w-1/2">
                                <div class="expertise-menu-box max-w-header">
                                  <div title="AngularJS Development">
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
                              <li class="w-full pt-4 lg:w-1/4 md:w-1/2">
                                <div class="expertise-menu-box max-w-header">
                                  <div title="AWS Development">
                                    <img
                                      class="menu-box-img light-image"
                                      v-rxlazy="
                                        'https://d2ms8rpfqc4h24.cloudfront.net/aws_development_2eac735c23.png'
                                      "
                                      width="40"
                                      height="38px"
                                      alt="AWS Development"
                                    />
                                    <img
                                      class="menu-box-img dark-image"
                                      v-rxlazy="
                                        'https://d2ms8rpfqc4h24.cloudfront.net/aws_te_2f9644aeff.png'
                                      "
                                      width="40"
                                      height="38px"
                                      alt="AWS Development"
                                    />
                                    <p class="font-semibold">AWS Development</p>
                                    <span>
                                      DevOps consultation and AWS cloud
                                      applications to help you evolve
                                      continuously
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li class="w-full pt-4 lg:w-1/4 md:w-1/2">
                                <div class="expertise-menu-box max-w-header">
                                  <div title="Node JS Development">
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
                </Transition>
              </div>
              <!-- Expertise Menu End -->
              <!-- Technologies Menu Start -->
              <div
                class="border-t md:border-t-0 fixedNav"
                @mouseover="
                  isTechnologies = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isTechnologies = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  class="
                    mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                  "
                  :class="
                    isTechnologies
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  title="Technologies"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="
                      isTechnologies ? 'text-primary' : 'text-themedark-0'
                    "
                    >Technologies</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isTechnologies"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap">
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              mt-4
                              sm:p-4
                              smd:w-1/5
                              custom-box
                            "
                          >
                            <tez-link
                              to="/front-end-development"
                              title="Frontend"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Frontend</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/angularjs-development"
                                  class="hover:text-primary"
                                  title="AngularJS"
                                  @click="hideMenu"
                                  >AngularJS</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/reactjs-development"
                                  class="hover:text-primary"
                                  title="ReactJS"
                                  @click="hideMenu"
                                  >ReactJS</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/vuejs-development"
                                  class="hover:text-primary"
                                  title="Vue.js"
                                  @click="hideMenu"
                                  >Vue.js</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/javascript-development"
                                  class="hover:text-primary"
                                  title="JavaScript"
                                  @click="hideMenu"
                                  >JavaScript</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/css3-development"
                                  class="hover:text-primary"
                                  title="CSS3"
                                  @click="hideMenu"
                                  >CSS3</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/hire-tailwind-css-developer"
                                  class="hover:text-primary"
                                  title="Tailwind CSS"
                                  @click="hideMenu"
                                  >Tailwind CSS</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/html5-development"
                                  class="hover:text-primary"
                                  title="HTML5"
                                  @click="hideMenu"
                                  >HTML5</tez-link
                                >
                              </li>
                            </ul>
                            <span title="DevOps" class="nav_text"
                              >DevOps</span
                            >

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/azure-devops"
                                  class="hover:text-primary"
                                  title="Azure DevOps"
                                  @click="hideMenu"
                                  >Azure DevOps</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <router-link
                                  to="/services/devsecops"
                                  class="hover:text-primary"
                                  title="DevSecOps"
                                  @click="hideMenu"
                                  >DevSecOps</router-link
                                >
                              </li>
                            </ul>
                            <tez-link
                              to="/headless-cms-development"
                              class="hover:text-primary cursor-pointer"
                                  title="Headless CMS"
                                  @click="hideMenu"
                            >
                            <span title="Headless CMS" class="nav_text"
                              >Headless CMS</span
                            >

                            </tez-link>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/strapi-development"
                                  class="hover:text-primary"
                                  title="Strapi"
                                  @click="hideMenu"
                                  >Strapi</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/5
                              custom-box
                            "
                          >
                            <tez-link
                              to="/backend-development"
                              title="Backend"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Backend</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/net-development"
                                  class="hover:text-primary"
                                  title=".NET"
                                  @click="hideMenu"
                                  >.NET</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/nodejs-development"
                                  class="hover:text-primary"
                                  title="Node.js"
                                  @click="hideMenu"
                                  >Node.js</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/c-sharp-development"
                                  class="hover:text-primary"
                                  title="C#"
                                  @click="hideMenu"
                                  >C#</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/php-development"
                                  class="hover:text-primary"
                                  title="PHP"
                                  @click="hideMenu"
                                  >PHP</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/c-plus-plus-development"
                                  class="hover:text-primary"
                                  title="C++"
                                  @click="hideMenu"
                                  >C++</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/dotnet-core-development"
                                  class="hover:text-primary"
                                  title=".NET Core"
                                  @click="hideMenu"
                                  >.NET Core</tez-link
                                >
                              </li>
                            </ul>
                            <tez-link
                              to="/frameworks"
                              title="Frameworks"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Frameworks</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/laravel-development"
                                  class="hover:text-primary"
                                  title="Laravel"
                                  @click="hideMenu"
                                  >Laravel</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/codeigniter-development"
                                  class="hover:text-primary"
                                  title="CodeIgniter"
                                  @click="hideMenu"
                                  >CodeIgniter</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/mean-stack-development"
                                  class="hover:text-primary"
                                  title="MEAN"
                                  @click="hideMenu"
                                  >MEAN</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/cakephp-development"
                                  class="hover:text-primary"
                                  title="CakePHP"
                                  @click="hideMenu"
                                  >CakePHP</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/ruby-on-rails-development"
                                  class="hover:text-primary"
                                  title="Ruby on Rails"
                                  @click="hideMenu"
                                  >Ruby on Rails</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/5
                              custom-box
                            "
                          >
                            <span class="nav_text" title="Mobile">Mobile</span>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/services/ios-app-development"
                                  class="hover:text-primary"
                                  title="iOS"
                                  @click="hideMenu"
                                  >iOS</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/android-apps-development"
                                  class="hover:text-primary"
                                  title="Android"
                                  @click="hideMenu"
                                  >Android</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/swift-app-development"
                                  class="hover:text-primary"
                                  title="Swift"
                                  @click="hideMenu"
                                  >Swift</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/services/flutter-app-development"
                                  class="hover:text-primary"
                                  title="Flutter"
                                  @click="hideMenu"
                                  >Flutter</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/ionic-app-development"
                                  class="hover:text-primary"
                                  title="Ionic"
                                  @click="hideMenu"
                                  >Ionic</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/react-native-app-development"
                                  class="hover:text-primary"
                                  title="React Native"
                                  @click="hideMenu"
                                  >React Native</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/xamarin-app-development"
                                  class="hover:text-primary"
                                  title="Xamarin"
                                  @click="hideMenu"
                                  >Xamarin</tez-link
                                >
                              </li>
                            </ul>

                            <span class="nav_text" title="Cloud">Cloud</span>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/aws-development"
                                  class="hover:text-primary"
                                  title="AWS"
                                  @click="hideMenu"
                                  >AWS</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/google-app-engine-development"
                                  class="hover:text-primary"
                                  title="Google Cloud"
                                  @click="hideMenu"
                                  >Google Cloud</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/azure-development"
                                  class="hover:text-primary"
                                  title="Azure"
                                  @click="hideMenu"
                                  >Azure</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/5
                              custom-box
                            "
                          >
                            <tez-link
                              to="/database-management"
                              title="Database"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Database</span>
                            </tez-link>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/sql-server-database-development"
                                  class="hover:text-primary"
                                  title="SQL Server"
                                  @click="hideMenu"
                                  >SQL Server</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/mysql-development"
                                  class="hover:text-primary"
                                  title="MySQL"
                                  @click="hideMenu"
                                  >MySQL</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/postgresql-database-management"
                                  class="hover:text-primary"
                                  title="Postgre SQL"
                                  @click="hideMenu"
                                  >Postgre SQL</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/mongodb-development"
                                  class="hover:text-primary"
                                  title="MongoDB"
                                  @click="hideMenu"
                                  >MongoDB</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/dynamodb-development"
                                  class="hover:text-primary"
                                  title="DynamoDB"
                                  @click="hideMenu"
                                  >DynamoDB</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/sqlite-database-management"
                                  class="hover:text-primary"
                                  title="SQLite"
                                  @click="hideMenu"
                                  >SQLite</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/firebase-development"
                                  class="hover:text-primary"
                                  title="Firebase"
                                  @click="hideMenu"
                                  >Firebase</tez-link
                                >
                              </li>
                            </ul>

                            <span class="nav_text" title="Platforms"
                              >Platforms</span
                            >

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                            <li class="mb-4">
                                <tez-link
                                  to="/zoho-crm-consulting"
                                  class="hover:text-primary"
                                  title="Zoho"
                                  @click="hideMenu"
                                  >Zoho</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/salesforce"
                                  class="hover:text-primary"
                                  title="Salesforce"
                                  @click="hideMenu"
                                  >Salesforce</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/servicenow"
                                  class="hover:text-primary"
                                  title="ServiceNow"
                                  @click="hideMenu"
                                  >ServiceNow</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/microsoft-dynamics-365-development"
                                  class="hover:text-primary"
                                  title="MS Dynamics CRM"
                                  @click="hideMenu"
                                  >MS Dynamics CRM</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/power-bi-consulting"
                                  class="hover:text-primary"
                                  title="Power BI"
                                  @click="hideMenu"
                                  >Power BI</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/5
                              custom-box
                            "
                          >
                            <span class="nav_text" title="Ecommerce"
                              >Ecommerce</span
                            >

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/woocommerce-development"
                                  class="hover:text-primary"
                                  title="WooCommerce"
                                  @click="hideMenu"
                                  >WooCommerce</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/magento-development"
                                  class="hover:text-primary"
                                  title="Magento"
                                  @click="hideMenu"
                                  >Magento</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/shopify-development"
                                  class="hover:text-primary"
                                  title="Shopify"
                                  @click="hideMenu"
                                  >Shopify</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/nopcommerce-development"
                                  class="hover:text-primary"
                                  title="NopCommerce"
                                  @click="hideMenu"
                                  >NopCommerce</tez-link
                                >
                              </li>
                            </ul>

                            <span class="nav_text" title="CMS">CMS</span>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/wordpress-development"
                                  class="hover:text-primary"
                                  title="WordPress"
                                  @click="hideMenu"
                                  >WordPress</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/joomla-development"
                                  class="hover:text-primary"
                                  title="Joomla"
                                  @click="hideMenu"
                                  >Joomla</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/kentico-developer"
                                  class="hover:text-primary"
                                  title="Kentico"
                                  @click="hideMenu"
                                  >Kentico</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/dotnetnuke-development"
                                  class="hover:text-primary"
                                  title="DotNetNuke"
                                  @click="hideMenu"
                                  >DotNetNuke</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/sitefinity-developers"
                                  class="hover:text-primary"
                                  title="Sitefinity"
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
                </Transition>
              </div>
              <!-- Technologies Menu End -->
              <!-- Approach Menu Start -->
              <div
                class="border-t md:border-t-0 fixedNav"
                @mouseover="
                  isApproach = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isApproach = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  class="
                    mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                  "
                  :class="
                    isApproach
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  title="Approach"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="isApproach ? 'text-primary' : 'text-themedark-0'"
                    >Approach</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isApproach"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap">
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              mt-4
                              sm:p-4
                              smd:w-1/3
                              md:w-1/2
                              approach-menu
                              custom-box
                            "
                          >
                            <div class="px-4 approaches-max-w">
                              <span class="text-only">Service Excellence</span>
                              <p class="paragraph">
                                A market leader in software development, we
                                automate workflows, empower growth, drive
                                innovation, ensure quality, provide robust
                                support in maximizing revenue.
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
                                    inline-block
                                    mt-3
                                    btn btn_md
                                    bg-primary
                                    lg:text-xl
                                  "
                                  title="Let’s Talk"
                                  >Let’s Talk</tez-link
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/3
                              md:w-1/2
                              custom-box
                            "
                          >
                            <tez-link
                              to="/value-proposition"
                              title="Value Proposition"
                              class="approaches"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Value Proposition</span>
                            </tez-link>
                            <tez-link
                              to="/software-development-methodologies"
                              class="approaches"
                              title="Development Methodology"
                              @click="hideMenu"
                            >
                              <span class="nav_text"
                                >Development Methodology</span
                              >
                            </tez-link>
                            <tez-link
                              to="/project-management-methodologies"
                              class="approaches"
                              title="Project Management"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Project Management</span>
                            </tez-link>
                            <tez-link
                              to="/it-outsourcing-our-approach"
                              class="approaches"
                              title="Outsourcing Approach"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Outsourcing Approach</span>
                            </tez-link>
                            <tez-link
                              to="/software-outsourcing-business-models"
                              class="approaches"
                              title="Engagement Models"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Engagement Models</span>
                            </tez-link>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-4
                              py-6
                              mt-4
                              sm:p-4
                              smd:w-1/3
                              md:w-1/2
                              custom-box
                            "
                          >
                            <tez-link
                              to="/company-news/radixweb-grabs-prestigious-spot-in-the-2020-global-outsourcing-100-list-by-iaop"
                              class="featured-image-box"
                              title="IOAP The Global Outsourcing 100"
                              @click="hideMenu"
                            >
                              <img
                                v-rxlazy="
                                  'https://d2ms8rpfqc4h24.cloudfront.net/the_global_outsourcing_fd36f154c0.jpg'
                                "
                                alt="The Global Outsourcing"
                                width="395"
                                height="230"
                                class="mx-auto md:mx-0 mb-4"
                              />
                              <span class="pt-3">
                                Radixweb Featured in IAOP’s 2020 <br />
                                Global Outsourcing 100’ List
                              </span>
                            </tez-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <!-- Approach Menu End -->
              <!-- Work Menu Start -->
              <div
                class="border-t md:border-t-0 fixedNav"
                @mouseover="
                  isWork = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isWork = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  class="
                    mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                  "
                  :class="
                    isWork
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  title="Work"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="isWork ? 'text-primary' : 'text-themedark-0'"
                    >Work</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isWork"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap">
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              mt-4
                              text-center
                              sm:p-4
                              smd:w-1/3
                              md:w-1/2 md:text-left
                              custom-box
                            "
                          >
                            <div class="work-center">
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
                                  The Radixweb team work cohesively with our
                                  local technology team as a single team driving
                                  our overall product strategy. We have found
                                  the staff very friendly, driven to meet our
                                  business objectives.
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
                                    <div class="paragraph">
                                      Jason Quirk - CTO
                                    </div>
                                    <div class="paragraph">
                                      FastTrack360, Australia
                                    </div>
                                  </div>
                                </div>
                              </tez-link>
                            </div>
                          </div>
                          <div class="work-wrapper custom-box">
                            <div class="work-center">
                              <tez-link
                                to="/case-studies"
                                title="Case Studies"
                                @click="hideMenu"
                              >
                                <span class="pb-3 nav_text-work"
                                  >Case Studies</span
                                >
                              </tez-link>
                              <tez-link
                                to="/case-studies/cloud-based-recruitment-software"
                                class="featured-image-box"
                                title="Cloud based Recruitment Software"
                                @click="hideMenu"
                              >
                                <img
                                  v-rxlazy="
                                    'https://d2ms8rpfqc4h24.cloudfront.net/cloud_based_recruitment_software_07426a5ca2.jpg'
                                  "
                                  alt="Cloud based Recruitment Software"
                                  width="320"
                                  height="190"
                                  class="mx-auto md:mx-0 mb-4"
                                />
                                <span class="text-center"
                                  >Cloud based Recruitment Software</span
                                >
                              </tez-link>
                            </div>
                          </div>
                          <div class="work-wrapper custom-box">
                            <div class="work-center">
                              <tez-link
                                to="/success-stories"
                                title="Success Stories"
                                @click="hideMenu"
                              >
                                <span class="nav_text-work"
                                  >Success Stories</span
                                >
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
                                  class="mx-auto md:mx-0 mb-4"
                                />
                                <span
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
                </Transition>
              </div>
              <!-- Work Menu End -->
              <!-- About Menu Start -->
              <div
                class="border-t md:border-t-0 fixedNav"
                @mouseover="
                  isAbout = true;
                  bgHeaderWhite = true;
                "
                @mouseleave="
                  isAbout = false;
                  bgHeaderWhite = false;
                "
              >
                <div
                  class="
                    mainBlock
                    flex
                    justify-between
                    w-full
                    cursor-pointer
                    nav-link-submenu
                    focus:outline-none
                    border-b
                    md:border-b-4 md:border-primary
                  "
                  :class="
                    isAbout
                      ? 'text-primary border-opacity-0 md:border-opacity-100'
                      : 'text-themedark-0 md:border-opacity-0'
                  "
                  title="About"
                >
                  <span
                    class="submenuName dark:text-white"
                    :class="isAbout ? 'text-primary' : 'text-themedark-0'"
                    >About</span
                  >
                </div>
                <Transition>
                  <div
                    class="
                      left-0
                      right-0
                      z-10
                      bg-white
                      md:absolute
                      top-100
                      dark:bg-gray
                      boxShadow
                      dark:bg-themedark-40
                    "
                    v-show="isAbout"
                  >
                    <div class="container">
                      <div class="py-0 overflow-hidden sxl:py-4">
                        <div class="flex flex-wrap">
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              mt-4
                              sm:p-4
                              smd:w-1/4
                              md:w-1/2
                              custom-box
                            "
                          >
                            <tez-link
                              to="/about-us"
                              class
                              title="About Us"
                              @click="hideMenu"
                            >
                              <span class="nav_text">About Us</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/our-awards"
                                  class="hover:text-primary"
                                  title="Awards"
                                  @click="hideMenu"
                                  >Awards</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/leadership"
                                  class="hover:text-primary"
                                  title="Leadership Team"
                                  @click="hideMenu"
                                  >Leadership Team</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/partners"
                                  class="hover:text-primary"
                                  title="Partnership"
                                  @click="hideMenu"
                                  >Partnership</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/our-infrastructure"
                                  class="hover:text-primary"
                                  title="Our Infrastructure"
                                  @click="hideMenu"
                                  >Our Infrastructure</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/our-culture"
                                  class="hover:text-primary"
                                  title="Our Culture"
                                  @click="hideMenu"
                                  >Our Culture</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/great-place-to-work"
                                  class="hover:text-primary"
                                  title="Our Culture"
                                  @click="hideMenu"
                                  >Great Place to Work
                              <sup>®</sup></tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              mt-4
                              sm:p-4
                              smd:w-1/4
                              md:w-1/2
                              custom-box
                            "
                          >
                            <tez-link
                              to="/careers"
                              title="Careers"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Careers</span>
                            </tez-link>
                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/current-openings"
                                  class="hover:text-primary"
                                  title="Open Positions"
                                  @click="hideMenu"
                                  >Open Positions</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/insights/life-at-radix"
                                  class="hover:text-primary"
                                  title="Life at Radixweb"
                                  @click="hideMenu"
                                  >Life at Radixweb</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/blog/8-reasons-to-join-radixweb"
                                  class="hover:text-primary"
                                  title="Why join us"
                                  @click="hideMenu"
                                  >Why join us</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-4
                              sm:p-4
                              mt-4
                              smd:w-1/4
                              md:w-1/2
                              custom-box
                            "
                          >
                            <tez-link
                              to="/insights"
                              title="Insights"
                              @click="hideMenu"
                            >
                              <span class="nav_text">Insights</span>
                            </tez-link>

                            <ul
                              class="
                                px-5
                                my-2
                                border-l-2
                                md:my-5
                                dark:border-themedark-65
                                border-lightgray
                              "
                            >
                              <li class="mb-4">
                                <tez-link
                                  to="/blog"
                                  title="Blog"
                                  class="hover:text-primary"
                                  @click="hideMenu"
                                  >Blog</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/company-news"
                                  class="hover:text-primary"
                                  title="News"
                                  @click="hideMenu"
                                  >News</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/videos"
                                  class="hover:text-primary"
                                  title="Videos"
                                  @click="hideMenu"
                                  >Videos</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/whitepapers"
                                  class="hover:text-primary"
                                  title="Whitepapers"
                                  @click="hideMenu"
                                  >Whitepapers</tez-link
                                >
                              </li>
                              <li class="mb-4">
                                <tez-link
                                  to="/guides"
                                  class="hover:text-primary"
                                  title="Guides"
                                  @click="hideMenu"
                                  >Guides</tez-link
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="
                              relative
                              w-full
                              px-0
                              py-6
                              mt-4
                              sm:p-4
                              md:w-1/4
                              custom-box
                            "
                          >
                            <tez-link
                              to="/radixweb-anniversary"
                              class="featured-image-box"
                              title="Radixweb Commemorates 22 Years of #InnovationYouDeserve"
                              @click="hideMenu"
                            >
                              <img
                                v-rxlazy="
                                  'https://d2ms8rpfqc4h24.cloudfront.net/Inovation_you_deserve_small_banner_90b280b8a4.jpg'
                                "
                                alt="Radixweb Bags Great Place to Work Certification"
                                width="320"
                                height="190"
                                class="mx-auto md:mx-0 mb-4"
                              />
                              <span>
                                Radixweb Commemorates 22 Years of #InnovationYouDeserve
                              </span>
                            </tez-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <!-- About Menu End-->
              <div class="justify-end hidden md:block lg:w-100 cta-space">
                <tez-link
                  to="/contact-us"
                  class="btn btn_header"
                  title="Let's Talk"
                  >Let’s Talk</tez-link
                >
              </div>
              <div
                @click="darkModeClick"
                :class="{ 'hide-btn': istoggle == true }"
                class="
                  relative
                  hidden
                  ml-1
                  border-2 border-transparent
                  outline-none
                  md:block
                  sm:ml-3
                  smd:ml-6
                  md:ml-1
                  focus:outline-none
                "
                style="width: 25px; height: 25px;"
                aria-label="Thememode"
              >
                <img
                  width="25"
                  height="25"
                  v-rxlazy="imageLink"
                  alt="Theme"
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="gptw">
      <router-link to="/radixweb-anniversary" title="RXConfab 2022">
        <img class="customBorder" v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Badge_7532b619fd.jpg'" width="101" height="100" alt="RXConfab 2022">
      </router-link>
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
import {request} from '../utils/api-request'
export default {
  // name: 'headercustom',
  props: {
    data: Object,
  },
  computed: {
    getShowHeader() {
      return !this.showHeader ? "sticky-scrolled" : "";
    },
    getIsServices() {
      return this.bgHeaderWhite
        ? "bg-white dark:bg-themedark-10 headerHover"
        : "";
    },
  },
  data() {
    return {
      imageLink:"",
      bgOnHover: false,
      bgHeaderWhite: false,
      isServices: false,
      isExpertise: false,
      isTechnologies: false,
      isApproach: false,
      isWork: false,
      isAbout: false,
      istoggle: true,
      isTogglevalue: true,
      windowWidth: null,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  methods: {
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
      this.istoggle = false;
      this.expertiseMenu = true;
      this.businessMenu = false;
      this.toggleSubMenu = false;
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
    showSubmenu() {
      /*    if (isMobile()) {
        } */
      this.toggleSubMenu = !this.toggleSubMenu;
    },
    showMenu() {
      this.istoggle = !this.istoggle;
      this.isServices = false;
      this.isExpertise = false;
      this.isTechnologies = false;
      this.isApproach = false;
      this.isWork = false;
      this.isAbout = false;
      this.toggleSubMenu = false;
    },
    hideMenu() {
      this.isServices = false;
      this.isExpertise = false;
      this.isTechnologies = false;
      this.isApproach = false;
      this.isWork = false;
      this.isAbout = false;
      this.toggleSubMenu = false;
    },
    darkModeClick() {
      this.IsDark = !this.IsDark;
      if (!this.IsDark) {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/Light_Mode_cdf2246d87.svg";
      } else {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink = "https://d2ms8rpfqc4h24.cloudfront.net/sun_white_97528289bf.svg";
      }
      if (typeof window != "undefined") {
        localStorage.setItem("Dark", this.IsDark);
      }
    },
  },
  mounted() {
    
    if (typeof window != "undefined") {
      var x = localStorage.getItem("Dark");
      if (x == "true") {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink = "https://d2ms8rpfqc4h24.cloudfront.net/sun_white_97528289bf.svg";
      } else {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink = "https://d2ms8rpfqc4h24.cloudfront.net/Light_Mode_cdf2246d87.svg";
      }
    }
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
@layer base {
  body {
    .header_inverse + * {
     margin-top: 4rem;
    @screen smd{
      margin-top: 8rem;
    }
    }
  }
}
@layer utilities {
  .dark {
    header.header_inverse {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }

  header.header_inverse {
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -ms-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    .v-enter-active {
      transition: opacity 0.5s ease;
    }
    .v-leave-active {
      transition: opacity 0.1s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .gptw {
      @apply fixed right-0 top-auto z-10 block;
      bottom: 12%;
      img.customBorder {
        border-right: transparent !important;
        border: 2px solid #4ef1e0;
      }
    }
   
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    @apply fixed right-0 left-0 top-0 w-full z-40 bg-themelight-0 dark:bg-themedark-0 lg:dark:bg-transparent dark:text-white bg-transparent;
    ul {
      li {
        @apply text-base;
      }
    }

    // .container {
    //   @apply max-w-full;
    //   @screen lg {
    //     width: 100%;
    //   }
    //   @screen sxl {
    //     width: 100%;
    //     max-width: 76.875rem;
    //   }
    //   @screen xxl {
    //     width: 100%;
    //     max-width: 89.375rem;
    //   }
    // }
      .logo {
        font-size: 0;
        // max-width: 3.9375rem;
        // @screen smd {
        //   max-width: 4.375rem;
        // }
        // @screen sxl {
        //   max-width: 5rem;
        // }
        // @screen xxl {
        //   max-width: 5.625rem;
        // }
      }
    

    &.header_inverse.sticky-scrolled {
      .gptw{
        @apply hidden;  
      }
      @apply bg-white dark:bg-themedark-10 text-themedark-0 dark:text-themelight-0;
      box-shadow: 0 0 0.625rem #0000006e;
      .navContainer {
        @apply pt-0;
      }
      .boxShadow {
        @apply overflow-auto;
        // max-height: calc(100vh - 5.1875rem);
      }
      .submenuName {
        @apply dark:text-themelight-0 text-themedark-0;
        // padding: 0.625rem 0rem;
        // @screen md {
        //   padding: 1.875rem 0rem;
        // }
        padding: 2.375rem 0rem 2.125rem 0rem;
      }
      .mainBlock {
        // @apply font-normal;
        padding: 0rem 1.25rem;
        @screen md {
          padding: 0rem 0.5rem;
        }
        @screen smd {
          padding: 0rem 0.8125rem;
        }
        @screen sxl {
          padding: 0rem 1rem;
        }
        @screen xxl {
          padding: 0rem 1.5625rem;
        }
      }
     .cta-space {
        a {
          margin: 1.25rem 0rem;
          @screen sxl {
            margin: 1.3125rem 0rem;
          }
        }
        padding-left: 0.5rem;
        @screen smd {
          padding-left: 0.8125rem;
        }
        @screen sxl {
          padding-left: 1.5625rem;
        }
      }
      a {
        span {
          @apply text-themedark-0 dark:text-themelight-0;
        }
      }
      .logo {
        -webkit-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        // max-width: 3.3125rem;
        // @screen sxl {
        //   max-width: 5rem;
        // }
      }
      .nav_text {
        @apply text-themedark-10 dark:text-themelight-0 block font-semibold text-xl;
        &:hover {
          @apply text-primary;
        }
      }
      .navMain > div.fixedNav > a {
        @apply h-full;
      }
    }
    @screen md {
      .colAuto {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
      }
      .col {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      }
    }
  }
  .boxShadow {
    @apply shadow-none overflow-auto;
    // max-height: calc(100vh - 6.1875rem);
    @screen md {
      box-shadow: 0 0.8125rem 1.0625rem 0 #00000033;
    }
  }
  .headerHover {
    @apply shadow-none;
    @screen md {
      box-shadow: 0 0 0.625rem #0000006e;
    }
    a {
      &:hover {
        span {
          @apply text-primary;
        }
      }
      span {
        @apply text-themedark-0 dark:text-themelight-0;
      }
    }
  }
  .submenuName {
    // padding: 0.625rem 0rem;
    // @screen md {
    //   padding: 2.875rem 0rem;
    // }
    padding: 2.375rem 0rem 2.125rem 0rem;
  }
  .mainBlock {
    @apply font-normal;
    padding: 0rem 1.25rem;
    @screen md {
      padding: 0rem 0.5rem;
    }
    @screen smd {
      padding: 0rem 0.8125rem;
    }
    @screen sxl {
      padding: 0rem 1rem;
    }
    @screen xxl {
      padding: 0rem 1.5625rem;
    }
  }
  .cta-space {
    a {
      margin: 1.25rem 0rem;
      @screen sxl {
        margin: 1.3125rem 0rem;
      }
    }
    padding-left: 0.5rem;
    @screen smd {
      padding-left: 0.8125rem;
    }
    @screen sxl {
      padding-left: 1.5625rem;
    }
  }

  .headerMain {
    a {
      @apply no-underline;
    }
  }

  .menu-contentBoxtop {
    @apply relative mt-4 px-0 py-4 smd:p-4 w-full smd:w-1/4 sm:w-1/2;
  }
  .menu-contentBox {
    @apply relative mt-4  px-0 py-6 smd:p-4 w-full smd:w-1/4 sm:w-1/2;
  }
  // .menu-contentBoxExpertise {
  //   @apply ;
  // }
  .nav-list {
    @apply flex items-center py-2 border-b px-5;
  }
  .nav-list:hover {
    @apply border-opacity-100 cursor-pointer;
  }
  .nav-link {
    @apply text-themedark-10;
  }
  .nav-link:hover,
  .nav-list:hover .nav-link {
    @apply text-primary;
  }
  .nav-link-submenu {
    @apply text-themedark-10 inline-flex items-center text-base leading-5 font-medium;
    &:hover {
      @apply text-primary;
    }
  }
  .nav_text {
    @apply text-themedark-10 dark:text-themelight-0 block font-semibold text-xl;
    &:hover {
      @apply text-primary;
    }
  }
  .text-only {
    @apply text-themedark-10  block font-semibold;
  }
  .paragraph {
    @apply p-0 text-themedark-10 dark:text-themelight-0 text-base;
    line-height: 1.6875rem;
    margin-bottom: 1.375rem;
    margin-top: 0.875rem;
  }
  .approaches {
    padding: 0.3125rem 0rem;
    .nav_text {
      padding: 0.3125rem 0rem;
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
  }
  // .expertise-menu-box {
  //   .menu-box-img {
  //     @apply flex items-end;
  //   }
  // }

  .client-wapper {
    @apply flex flex-wrap items-center;
    img {
      border-radius: 50%;
    }
    .paragraph {
      @apply text-lg leading-6 font-semibold;
      margin: 0.375rem 0;
    }
    .client-details {
      @apply w-full px-4;
    }
  }
  .approach-menu {
    
    .paragraph {
      @apply p-0 text-themedark-10 dark:text-themelight-0 text-base;
      line-height: 1.6875rem;
      margin-bottom: 1.375rem;
      margin-top: 0.875rem;
    }
  }
  .work-wrapper {
    @apply relative mt-4 px-0 py-6 sm:p-4 md:w-1/3 w-full;
    .nav_text-work {
      @apply text-xl font-semibold pb-3 inline-block dark:text-themelight-0;
      &:hover {
        @apply text-primary;
      }
    }
  }
  a.featured-boxAboutus span {
    @apply text-base leading-7 text-secondary mr-auto mt-4 dark:text-white;
  }

  a.featured-image-box span {
    @apply text-base leading-7 text-secondary mr-auto mt-4 dark:text-white;
  }
  .custom-box {
    box-shadow: 0rem 0.125rem 0.125rem #dcdcdc;
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
      img {
        border-radius: 50%;
      }
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
    .custom-box {
      @apply shadow-none;
    }
  }
  @screen smd {
    .nav-link-submenu {
      @apply text-lg leading-5;
    }
  }
  @screen lg {
    .button-md {
      @apply px-8 py-2 border-2 text-xl;
    }
    .button-xl {
      @apply px-10 py-3 text-2xl;
    }

    .nav-link {
      @apply text-lg leading-5 text-themedark-10;
    }
    .nav-list {
      @apply border-b-4 border-primary border-opacity-0 px-5;
    }
    .nav_text {
      @apply text-xl;
      &:hover {
        @apply text-primary;
      }
    }
    .approaches-max-w {
      max-width: 100%;
    }
    .max-w-header {
      @apply px-4;
      max-width: 100%;
    }
    .work-center {
      @apply text-left;
      max-width: 22.5rem;
      .icon_img {
        @apply mx-0 my-4;
      }
    }
  }
  @screen sxl {
    .nav-link-submenu {
      @apply text-xl leading-5;
    }
    .nav-link {
      @apply text-xl leading-5 text-themedark-10;
    }
  }
  @screen xxl {
    .nav-link-submenu {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
}
</style>