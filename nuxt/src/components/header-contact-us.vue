<template>
  <header
    :class="[getShowHeader, getIsServices]"
    class="
      header-contactus
      fixed
      right-0
      left-0
      top-0
      w-full
      z-40
      dark:bg-themedark-0
      lg:dark:bg-transparent
      dark:text-white
      bg-transparent
      transition
      duration-100
      ease-in-out
      mb-24
    "
  >
    <div class="relative headerMain">
      <div class="container lg:pr-4 px-4">
        <div class="items-center smd:py-2 py-3 justify-between row">
          <div class="w-2/6 sm:w-1/4 pr-4">
            <tez-link to="/">
              <img
                    class="logo light-image"
                    title="Radixweb"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Logo_80x81_ec6628aba0.png'
                    "
                    alt="Logo of Radixweb – An IT Software and App Development Company"
                    width="80"
                    height="81"
                  />
                  <img
                    class="logo dark-image"
                    title="Radixweb"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/Radix_white_logo_a33259efac.png'
                    "
                    alt="Logo of Radixweb – An IT Software and App Development Company"
                    width="80"
                    height="81"
                  />
            </tez-link>
          </div>
          <div
            class="header-left-content flex justify-end items-center w-4/6 pl-4"
          >
            <div class="text-right">
              <div @click="back"  class="gobackBtn lg:text-2xl md:text-xl sm:text-lg no-underline font-semibold text-themedark-0 transition-all duration-300 ease-in-out hover:text-primary cursor-pointer">Go Back</div>
              <!-- <tez-link to="/" class="gobackBtn">Go Back</tez-link> -->
            </div>
            <button
              @click="darkModeClick"
              :class="{ 'hide-btn': istoggle == true }"
              class="
                border-2 border-transparent
                outline-none
                ml-3
                lg:ml-6
                focus:outline-none
              "
              aria-label="Thememode"
              style="width: 25px; height: 25px;"
            >
              <img width="25" height="25" class="w-6 h-6" v-rxlazy="imageLink" alt="dark-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
  computed: {
    getShowHeader() {
      return !this.showHeader ? "sticky-scrolled" : "";
    },
    getIsServices() {
      return this.bgHeaderWhite ? "bg-white headerHover" : "";
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
back(){
      history.back()
    },    onScroll() {
      if (window.pageYOffset > 0) {
        if (this.showHeader) this.showHeader = false;
        return;
      } else {
        if (!this.showHeader) this.showHeader = true;
      }
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
      this.toggleSubMenu = !this.toggleSubMenu;
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
@layer utilities {
  .dark {
    .light-image {
      @apply hidden;
    }
    .dark-image {
      @apply block;
    }
  }
  .header-contactus {
    &.sticky-scrolled{
    @apply bg-white dark:bg-themedark-10;  
    }
    @apply bg-white dark:bg-themedark-10 text-themedark-0 dark:text-themelight-0;
    box-shadow: 0 0 0.625rem #0000006e;

    .headerMain {
       .logo {
        //  margin: 0.75rem 0rem;
        max-width: 2.5rem;
        @screen lg {
          max-width: unset;
        }
        // @screen sxl {
        //   max-width: 5rem;
        // }
        // @screen xxl {
        //   max-width: 5.625rem;
        // }
      } 
    }
    
  }
  .gobackBtn {
    @apply lg:text-2xl md:text-xl sm:text-lg no-underline font-semibold text-themedark-0 transition-all duration-300 ease-in-out hover:text-primary;
  }
  .light-image {
    @apply block;
  }
  .dark-image {
    @apply hidden;
  }
}
</style>
