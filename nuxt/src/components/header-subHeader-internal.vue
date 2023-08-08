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
                      title="MVP Development"
                    >
                    <tez-link to="/services/mvp-development" title="MVP Development">
                      <span class="submenuName">MVP Development</span>
                    </tez-link>
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
                      title="API Development"
                    >
                    <!-- <tez-link to="/" title="API Development"> -->
                      <span class="submenuName">API Development</span>
                    <!-- </tez-link> -->
                    </div>
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
                      title="White Label Development"
                    >
                    <tez-link to="/services/agile-software-development" title="White Label Development">
                      <span class="submenuName">White Label Development</span>
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
                    <tez-link to="/services/mvp-development" title="MVP Development" class="no-underline">
                      <span class="mr-1 whitespace-nowrap"
                        >MVP Development</span
                      >
                    </tez-link>
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
                    <!-- <tez-link to="/" title="API Development" class="no-underline"> -->
                      <span class="mr-1 whitespace-nowrap"
                        >API Development</span
                      >
                    <!-- </tez-link> -->
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
                    <!-- <tez-link to="/" title="White Label Development" class="no-underline"> -->
                      <span class="mr-1 whitespace-nowrap"
                        >White Label Development</span
                      >
                    <!-- </tez-link> -->
                    </button>
                  </div>
                </nav>
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
