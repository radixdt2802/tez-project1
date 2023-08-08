<template>
  <div class="mainSubHeader">
    <HeaderResponsiveNormal />
    <!-- DesktopSubHeader Start -->
    <div class="relative subHeader bg-themelight-80 dark:bg-themedark-80 lg:block hidden desktopSub">
      <div class="container m-auto lg:px-4">
        <div class="items-center row justify-end navContainer mr-12">
          <div
            class="xs:pl-4 xs:pr-0 pr-4 col flex justify-center items-center"
          >
            <transition
              enter-active-class="transition ease-out duration-900"
              enter-class="opacity-75 translate-y-100"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-100"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-100"
            >
              <div
                v-if="istoggle"
                class="
                  col
                  lg:static
                  absolute
                  lg:w-auto
                  w-full
                  inset-x-0
                  toggleMenu
                  lg:bg-transparent
                  bg-gray-300
                  dark:bg-themedark-10
                  lg:dark:bg-transparent
                "
              >
                <nav
                  class="
                    lg:justify-center lg:flex
                    navMain
                    overflow-auto
                    lg:items-center
                  "
                  v-show="istoggle"
                >
                  <!-- Software Development Menu Start -->
                  <div
                    class="group relative"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="Software Team"
                      @click="showSubmenu('isServices')"
                    >
                    <!-- <tez-link to="" title="Software Team"> -->
                      <span class="submenuName">Software Team</span>
                    <!-- </tez-link> -->
                    </div>
                  </div>
                  <!-- Software Development Menu End -->
                  <!-- Application Development Menu Start -->
                  <div
                    class="group relative"
                    @mouseover="bgHeaderWhite = true"
                    @mouseleave="bgHeaderWhite = false"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="Consulting"
                      @click="showSubmenu('isServices')"
                    >
                    <tez-link to="/services/software-consulting">
                      <span class="submenuName">Consulting</span>
                    </tez-link>
                      <div class="lg:hidden block">
                        <img
                          class="light-image"
                          :class="[
                            isServices == true
                              ? 'delay-100 ease-in rotate'
                              : '',
                          ]"
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                          "
                          width="17"
                          height="17"
                          alt="Down arrow"
                        />
                        <img
                          class="dark-image"
                          :class="[
                            isServices == true
                              ? 'delay-100 ease-in rotate'
                              : '',
                          ]"
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                          "
                          width="17"
                          height="17"
                          alt="Down arrow"
                        />
                      </div>
                    </div>
                    <Transition>
                      <div
                        v-show="isServices"
                        class="
                          lg:left-0 lg:right-0
                          z-10
                          bg-white
                          lg:absolute
                          top-100
                          dark:bg-gray
                          boxShadow
                          lg:hidden
                          dark:bg-themedark-40
                          overflow-visible
                          group-hover:flex
                          subHeader-contentBox
                        "
                      >
                        <div
                          class="
                            md:dark:bg-themedark-40
                            dark:bg-themedark-0
                          "
                        >
                          <div class="py-0 overflow-hidden">
                            <div class="flex flex-wrap lg:flex-row">
                              <div class="menu-contentBoxtop custom-box">
                                <ul class="">
                                  <li class="lg:mb-4 mb-2">
                                    <tez-link
                                      to="/services/mvp-development"
                                      class="hover:text-primary"
                                      title="MVP Development"
                                      @click="hideMenu"
                                      >MVP Development</tez-link
                                    >
                                  </li>
                                  <li class="lg:mb-4 mb-2">
                                    <span
                                      
                                      class="hover:text-primary"
                                      title="API Development"
                                      @click="hideMenu"
                                      >API Development</span
                                    >
                                  </li>
                                  <li>
                                    <span
                                      
                                      class="hover:text-primary"
                                      title="White Label Development"
                                      @click="hideMenu"
                                      >White Label Development</span
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
                  <!-- Application Development Menu End -->
                  <!-- Mobile Apps Menu Start -->
                  <div
                    class="group relative"
                    @mouseover="bgHeaderWhite = true"
                    @mouseleave="bgHeaderWhite = false"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="Agile Development"
                      @click="showSubmenu('isServices')"
                    >
                    <tez-link to="/services/agile-software-development" title="Agile Development">
                      <span class="submenuName">Agile Development</span>
                    </tez-link>
                      
                    </div>
                  </div>
                  <!-- Mobile Apps Menu End -->
                  <!-- Cost Menu Start -->
                  <!-- <div
                    class="group relative"
                    @mouseover="bgHeaderWhite = true"
                    @mouseleave="bgHeaderWhite = false"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="Services"
                      @click="showSubmenu('isServices')"
                    >
                      <span class="submenuName">Cost</span>
                    </div>
                   
                  </div> -->
                  <!-- Cost Menu End -->
                  <!-- Architecture Menu Start -->
                  <div
                    class="group relative"
                    @mouseover="bgHeaderWhite = true"
                    @mouseleave="bgHeaderWhite = false"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="Software Architecture"
                      @click="showSubmenu('isServices')"
                    >
                    <tez-link to="/services/software-architecture" title="Software Architecture">
                      <span class="submenuName">Software Architecture</span>
                    
                    </tez-link>
                      <div class="lg:hidden block">
                        <img
                          class="light-image"
                          :class="[
                            isServices == true
                              ? 'delay-100 ease-in rotate'
                              : '',
                          ]"
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_a2eca45213.svg'
                          "
                          width="17"
                          height="17"
                          alt="Down arrow"
                        />
                        <img
                          class="dark-image"
                          :class="[
                            isServices == true
                              ? 'delay-100 ease-in rotate'
                              : '',
                          ]"
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/down_secondary_black_39055029eb.svg'
                          "
                          width="17"
                          height="17"
                          alt="Down arrow"
                        />
                      </div>
                    </div>
                    <Transition>
                      <div
                        v-show="isServices"
                        class="
                          lg:left-0 lg:right-0
                          z-10
                          bg-white
                          lg:absolute
                          top-100
                          dark:bg-gray
                          boxShadow
                          lg:hidden
                          dark:bg-themedark-40
                          overflow-visible
                          group-hover:flex
                          subHeader-contentBox
                        "
                      >
                        <div
                          class="
                            container
                            md:dark:bg-themedark-40
                            dark:bg-themedark-0
                          "
                        >
                          <div class="py-0 overflow-hidden">
                            <div class="flex flex-wrap lg:flex-row">
                              <div class="menu-contentBoxtop custom-box">
                                <ul class="">
                                  <li>
                                    <span
                                      class="hover:text-primary"
                                      title="SOA"
                                      @click="hideMenu"
                                      >SOA</span
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
                  <!-- Architecture Menu End -->
                  <!-- SaaS Menu Start -->
                    <!-- @mouseover="bgHeaderWhite = true"
                    @mouseleave="bgHeaderWhite = false" -->
                  <div
                    class="group relative"
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
                        group-hover:text-primary
                        text-themedark-0
                        dark:text-white
                        group-hover:border-opacity-100
                        customHover
                      "
                      title="SaaS"
                      @click="showSubmenu('isServices')"
                    >
                    <tez-link to="/services/saas-development" title="SaaS">
                      <span class="submenuName">SaaS</span>
                    </tez-link>
                      
                    </div>
                    
                  </div>
                  <!-- SaaS Menu End -->
                </nav>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- DesktopSubHeader End -->
    <!-- MobilesubheaderSubPoints -->
    <div class="relative mobileMainService lg:hidden block">
      <div class="container">
      <ul class="mainmenu">
        <li>
          <input type="checkbox" id="Software Development" /><label
            class="dropdownCSS flex items-center justify-between dark:text-themelight-0"
            for="Software Development"
            >Software Development <span class=""></span
          ></label>
          <ul
            class="
              submenu
              overflow-hidden
              max-h-0
              transition-all
              duration-500
              ease-out
              dark:text-white
            "
          >
            <li><tez-link to="/services/application-development" title="Application Development">Application Development</tez-link></li>
            <li><tez-link to="/services/mobile-app-development" title="Mobile Development">Mobile Development</tez-link></li>
            <li><tez-link to="/services/hire-dedicated-developers" title="Hire Dedicated Developers">Hire Dedicated Developers</tez-link></li>
            <li><tez-link to="/full-stack-development" title="Full Stack Development">Full Stack Development</tez-link></li>
            <!-- <li><tez-link to="/services" title="More">More</tez-link></li> -->
          </ul>
        </li>
      </ul>
      </div>
    </div>
    <div
      class="
        relative
        bg-themelight-0
        dark:bg-themedark-80
        mobileSubDrawer
        lg:hidden
        block
      "
    >
      <div class="container m-auto lg:px-4">
        <div class="items-center row justify-evenly navContainer relative">
          <div
            class="
              xs:pl-4 xs:pr-0
              pr-4
              col
              flex
              justify-center
              items-center
              overflow-x-scroll
            "
          >
            <transition
              enter-active-class="transition ease-out duration-900"
              enter-class="opacity-75 translate-y-100"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-100"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-100"
            >
              <div
                class="
                  col
                  lg:static lg:w-auto
                  w-full
                  inset-x-0
                  toggleMenu
                  lg:bg-transparent
                  bg-themelight-0
                  dark:bg-themedark-80
                  lg:dark:bg-transparent
                "
              >
                <nav class="lg:justify-center flex navMain lg:items-center">
                  <div class="dropdownHeading inline-block">
                    <button
                      class="
                        whitespace-nowrap
                        p-4
                        rounded
                        inline-flex
                        items-center
                        flex-auto
                      "
                    >
                    <!-- <tez-link to="" title="Software Team" class="no-underline"> -->
                      <span class="mr-1 whitespace-nowrap"
                        >Software Team</span
                      >
                    <!-- </tez-link> -->
                    </button>
                  </div>
                  <div class="dropdownHeading inline-block">
                    <button
                      class="
                        whitespace-nowrap
                        p-4
                        inline-flex
                        items-center
                        flex-auto
                      "
                      :class="[
                        isProductEng == true
                                ? 'border-b-2 border-solid border-primary active'
                                : '',
                            ]"
                      
                    >
                    <tez-link to="/services/software-consulting" title="Consulting" class="no-underline">
                      <span :class="[
                          isProductEng == true
                                ? 'text-primary active'
                                : '',
                            ]" class="whitespace-nowrap mr-1"
                        >Consulting</span
                      >
                    </tez-link>
                      <svg
                        @click="showSubmenu('isProductEng'),subHeaderConsulting()"
                        :class="[
                          isProductEng == true
                                ? 'text-primary active'
                                : '',
                            ]"
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="dropdownHeading inline-block">
                    <button
                      class="
                        whitespace-nowrap
                        p-4
                        rounded
                        inline-flex
                        items-center
                        flex-auto
                      "
                    
                    >
                    <tez-link to="/services/agile-software-development" title="Agile Development" class="no-underline">
                      <span class="mr-1 whitespace-nowrap"
                        >Agile Development</span
                      >
                    </tez-link>
                    </button>
                  </div>
                  <div class="dropdownHeading inline-block">
                    <button
                      class="
                        whitespace-nowrap
                        p-4
                        inline-flex
                        items-center
                        flex-auto
                      "
                      :class="[
                        isSoftwareArch == true
                                ? 'border-b-2 border-solid border-primary active'
                                : '',
                            ]"
                    >
                    <tez-link to="/services/software-architecture" title="Software Architecture" class="no-underline">
                      <span :class="[
                        isSoftwareArch == true
                                ? 'text-primary dark:text-primary active'
                                : '',
                            ]" class="mr-1 whitespace-nowrap"
                        >Software Architecture</span
                      >
                    </tez-link>
                    <svg
                        @click="showSubmenu('isSoftwareArch'),subHeaderSoftwareArch()"
                        :class="[
                        isSoftwareArch == true
                                ? 'text-primary dark:text-primary active'
                                : '',
                            ]"
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="dropdownHeading inline-block">
                    <button
                      class="
                        whitespace-nowrap
                        p-4
                        rounded
                        inline-flex
                        items-center
                        flex-auto
                      "
                    
                    >
                    <tez-link to="/services/saas-development" title="SaaS" class="no-underline">
                      <span class="mr-1 whitespace-nowrap"
                        >SaaS</span
                      >
                    </tez-link>
                    </button>
                  </div>
                </nav>
                <div
                  class="dropdown inline-block absolute md:w-1/2 w-full"
                  v-show="isProductEng"
                >
                  <ul class="dropdown-menu text-[#2b2b2b] bg-white dark:bg-themedark-85">
                    <li class="">
                      <tez-link
                        class="
                          py-2
                          px-4
                          block
                          whitespace-nowrap
                          hover:text-primary
                          no-underline
                        "
                        to="/services/mvp-development"
                        title="MVP Development"
                        >MVP Development</tez-link>
                    </li>
                    <li class="">
                      <span
                        class="
                          py-2
                          px-4
                          block
                          whitespace-nowrap
                          hover:text-primary
                          no-underline
                        "
                        title="API Development"
                        >API Development</span>
                    </li>
                    <li class="">
                      <span
                        class="
                          py-2
                          px-4
                          block
                          whitespace-nowrap
                          hover:text-primary
                          no-underline
                        "
                        title="White Label"
                        >White Label</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="dropdown inline-block absolute md:w-1/2 w-full customLeft"
                  v-show="isSoftwareArch"
                >
                  <ul class="dropdown-menu text-[#2b2b2b] bg-white dark:bg-themedark-85">
                    <li class="">
                      <span
                        class="
                          py-2
                          px-4
                          block
                          whitespace-nowrap
                          hover:text-primary
                          no-underline
                        "
                        
                        title="SOA Architecture"
                        >SOA Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- MobilesubheaderSubPoints -->
  </div>
</template>

<script type="text/javascript">
import HeaderResponsiveNormal from './header-responsive-normal.vue'
export default {
  props: {
    data: Object,
  },
  components:{
    HeaderResponsiveNormal:HeaderResponsiveNormal,
  },
  data() {
    return {
      imageLink: "",
      isServices: true,
      isExpertise: true,
      isEnterprise: true,
      isTechnologies: true,
      isApproach: true,
      isWork: true,
      isAbout: true,
      // submenu
      isSoftwareEng: false,
      isProductEng: false,
      isSoftwareArch: false,
      istoggle: true,
      isTogglevalue: true,
      windowWidth: null,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
      bgHeaderWhite: false,
      window: {
        width: 0,
      },
      closeIcon: "",
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    isMobile() {
      this.window.width = window.innerWidth;
      return this.window.width < 1024;
    },
    getShowHeader() {
      return !this.showHeader ? "sticky-scrolled" : "";
    },
    checkComponent() {
      // PREVENT CLIPBOARD COPYING
      setTimeout(() => {
        const el = document.getElementById("blog-details");
        // console.log(el, "elemetComputed>>>>>>>");
        const disallowCopy = (evt) => {
          // console.log(evt, "computed function logs");
          evt.clipboardData.setData(
            "text/plain",
            "OOPS! You can't copy the text"
          );
          evt.preventDefault();
        };
        if (el !== null) {
         
        } else if (el === null || !el) {
          document.addEventListener("copy", disallowCopy);
        } else {
        }
      }, 5000);
    },
    getIsServices() {
      return this.bgHeaderWhite ? "headerHover" : "";
    },
  },
  methods: {
    changeIcon() {
      const getIsDark = localStorage.getItem("Dark");
      if (getIsDark === "false" || !getIsDark) {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/cross_1_b589b75fc1.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_38dbcadbdc.svg";
      } else {
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg";
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      if (this.window.width < 1025) {
        this.istoggle = false;
        this.toggleSubMenu = false;
        this.isServices = false;
        this.isExpertise = false;
        this.isEnterprise = false;
        this.isTechnologies = false;
        this.isApproach = false;
        this.isWork = false;
        this.isAbout = false;
        this.isProduct = false;
        this.isSoftwareEng = false;
        this.isProducEng = false;
        this.isSoftwareArch = false;

        this.changeIcon();
      } else {
        this.istoggle = true;
        this.toggleSubMenu = true;
        this.isServices = true;
        this.isExpertise = true;
        this.isEnterprise = true;
        this.isTechnologies = true;
        this.isApproach = true;
        this.isWork = true;
        this.isAbout = true;
        this.isProduct = true;
        this.isSoftwareEng = true;
        this.isProducEng = true;
        this.isSoftwareArch = true;
        this.changeIcon();
      }
    },
    toggleMenu() {
      this.istoggle = !this.istoggle;
    },
    bodyScrollLock() {
      if (this.istoggle == true) {
        document.body.classList.add("overflow");
      }
      if (this.istoggle == false) {
        document.body.classList.remove("overflow");
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
      this.istoggle = false;
      this.expertiseMenu = true;
      this.businessMenu = false;
      this.toggleSubMenu = false;
      this.changeIcon();
    },
    toggledark() {
      if (this.isTogglevalue == true) {
        document.querySelector("html").classList.add("dark", "bg-black-0");
        this.isTogglevalue = false;
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg";
      } else {
        document.querySelector("html").classList.remove("dark", "bg-black-0");
        this.isTogglevalue = true;
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/cross_1_b589b75fc1.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_38dbcadbdc.svg";
      }
    },
    showMenu() {
      this.istoggle = !this.istoggle;
      this.isServices = false;
      this.isExpertise = false;
      this.isEnterprise = false;
      this.isTechnologies = false;
      this.isApproach = false;
      this.isWork = false;
      this.isAbout = false;
      this.toggleSubMenu = false;
      this.changeIcon();
    },
    showSubmenu(menu) {
      if (this.window.width < 1025) {
        switch (menu) {
          case "isServices":
            this.isServices = !this.isServices;
            return;
          case "isExpertise":
            this.isExpertise = !this.isExpertise;
            break;
          case "isEnterprise":
            this.isEnterprise = !this.isEnterprise;
            break;
          case "isTechnologies":
            this.isTechnologies = !this.isTechnologies;
            break;
          case "isApproach":
            this.isApproach = !this.isApproach;
            break;
          case "isWork":
            this.isWork = !this.isWork;
            break;
          case "isAbout":
            this.isAbout = !this.isAbout;
            break;
          case "isSoftwareEng":
            this.issoftwareEng = !this.issoftwareEng;
            break;
          case "isProductEng":
            this.isProductEng = !this.isProductEng;
            return;
          case "isSoftwareArch":
            this.isSoftwareArch = !this.isSoftwareArch;
            return;
          default:
            break;
        }
      }
    },
    subHeaderSoftwareArch(){
      if (this.isProductEng == true){
        this.isProductEng = false;
      }
    },
    subHeaderConsulting(){
      if (this.isSoftwareArch == true){
        this.isSoftwareArch = false;
      }
    },
    hideMenu() {
      if (this.window.width < 1025) {
        this.istoggle = false;
        document.body.classList.remove("overflow");
      } else {
        this.isServices = false;
        this.isExpertise = false;
        this.isEnterprise = false;
        this.isTechnologies = false;
        this.isApproach = false;
        this.isWork = false;
        this.isAbout = false;
        this.isSoftwareEng = false;
        this.isProducEng = false;
        this.isSoftwareArch = false;
        setTimeout(() => {
          this.isServices = true;
          this.isExpertise = true;
          this.isEnterprise = true;
          this.isTechnologies = true;
          this.isApproach = true;
          this.isWork = true;
          this.isAbout = true;
          this.isSoftwareEng = true;
          this.isProducEng = true;
          this.isSoftwareArch = true;
        }, 1000);
      }
    },
    darkModeClick() {
      this.IsDark = !this.IsDark;
      if (!this.IsDark) {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/moon_739f6303f7.svg";
      } else {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/sun_7071e3afc5.svg";
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
      if (x === "true") {
        document.querySelector("html").classList.add("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/sun_7071e3afc5.svg";
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg";
      } else {
        document.querySelector("html").classList.remove("dark", "bg-black");
        this.imageLink =
          "https://d2ms8rpfqc4h24.cloudfront.net/moon_739f6303f7.svg";
        this.closeIcon = this.istoggle
          ? "https://d2ms8rpfqc4h24.cloudfront.net/cross_1_b589b75fc1.svg"
          : "https://d2ms8rpfqc4h24.cloudfront.net/menu_38dbcadbdc.svg";
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

</style>
