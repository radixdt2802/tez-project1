<template>
    <header :class="[getShowHeader, showMenuBg]" class="bg-rxa-secondary rxa_header header py-2 px-2 pr-4 md:px-0" id="header">
        <div class="container m-auto md:px-4">
            <div class="items-center row justify-evenly navContainer">
                <div class="w-1/2 pr-4 colAuto flex items-center">
                    <div class="inline-block smd:pr-4 sxl:hidden cursor-pointer" @click="showMenu()">
                         <img
                            :srcset="[
                                istoggle
                                ? 'https://d2ms8rpfqc4h24.cloudfront.net/white_close_989c796dbd.svg'
                                : 'https://d2ms8rpfqc4h24.cloudfront.net/menu_hamburger_white_37d7918d07.svg',
                            ]"
                            class="dark-image bars"
                            width="40"
                            height="40"
                            alt="Menubar"
                            />
                    </div>
                    <div class="flex justify-start mr-0 ">
                       <tez-link to="/" title="Radixweb" class="outline-none">
                            <img
                            class="logo"
                            title="Radixweb"
                            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Radix_white_logo_a33259efac.png'"
                            alt="Logo of Radixweb – An IT Software and App Development Company"
                            width="80"
                            height="81"
                            />
                        </tez-link>
                    </div>
                </div>
                <div class="w-1/2 pl-4 col flex justify-end items-center" >
                    <nav class="justify-end sxl:flex navMain items-center" v-show="istoggle">
                        <div class=" fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="About">
                                <a href="#scroll" title="About">
                                  <span @click="hideMenu()" class="submenuName text-white hover:text-rxa-primary">About</span></a>
                            </div>
                        </div>
                         <div class="fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="Team">
                                 <a
                              title="Team"
                              href="#Team"
                              @click="hideMenu()"
                            >
                                <span class="submenuName text-white hover:text-rxa-primary">Team</span>
                                 </a>
                            </div>
                        </div>
                         <div class=" fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="Vision">
                                <a href="#Vision" title="Vision" @click="hideMenu()">
                                <span class="submenuName text-white hover:text-rxa-primary">Vision</span>
                                </a>
                            </div>
                        </div>
                         <div class="fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="Numbers">
                                <a href="#Numbers" title="Numbers" @click="hideMenu()">
                                <span class="submenuName text-white hover:text-rxa-primary">Numbers</span>
                                </a>
                            </div>
                        </div>
                        <div class=" fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="Clients">
                                <a href="#Clients" title="Clients" @click="hideMenu()">
                                <span class="submenuName text-white hover:text-rxa-primary">Clients</span>
                                </a>
                            </div>
                        </div>
                        <div class="text-center fixedNav">
                            <div class="mainBlock flex justify-between w-full cursor-pointer nav-link-submenu
                                focus:outline-none hover:text-rxa-primary" title="Contact">
                                <a href="#Contact" title="Contact" @click="hideMenu()">
                                <span class="submenuName text-white hover:text-rxa-primary">Contact</span>
                                </a>
                            </div>
                        </div>
                        
                    </nav>
                    <!-- <div class="flex justify-end mr-0 ml-12">
                        <span class="outline-none w-20">
                                <img
                                class="confab-logo"
                                title="RxConfab 2022"
                                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/confab_2022_logo_5b2c888465.png'"
                                alt="Rx Confab"
                                width="80"
                                height="81"
                                />
                        </span>
                    </div> -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
      // name: 'headercustom',
  props: {
    data: Object,
  },
  computed: {
    getShowHeader() {
      return !this.showHeader ? "" : "rxaheader-sticky";
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
      istoggle: false,
      isTogglevalue: true,
      windowWidth: null,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  methods: {
    myEventHandler(e) {
        if(window.innerWidth < 1200) {
            this.istoggle = false;
        } else {
            this.istoggle = true;
        }
    },
    // onScroll() {
    //   if (window.pageYOffset > 0) {
    //     if (this.showHeader) this.showHeader = true;
    //     return;
    //   } else {
    //     if (!this.showHeader) this.showHeader = true;
    //   }
    // },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.istoggle = false;
      this.expertiseMenu = true;
      this.businessMenu = false;
      this.toggleSubMenu = false;
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
      if(window.innerWidth < 1200) {
      this.istoggle = !this.istoggle;
      }
      // this.isServices = false;
      // this.isExpertise = false;
      // this.isTechnologies = false;
      // this.isApproach = false;
      // this.isWork = false;
      // this.isAbout = false;
      // this.toggleSubMenu = false;
    },
  },
  mounted() {
    if(window.innerWidth < 1200) {  
        this.istoggle = false;
    } else {
        this.istoggle = true;
    }


    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
      created() {
    window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    },
}
</script>

<style lang="scss">
@layer utilities {
    header.rxa_header {
        .bars {
      margin-right: 0.9375rem;
      max-width: 1.5rem;
    }
     a {
         @apply no-underline mx-auto flex;
    }
    
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
      .menu-box-img {
        &.light-image{
          @apply hidden
        }
        &.dark-image{
          @apply flex items-end;
        }
      }
    }
  header {
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
    -webkit-transition: all .3s ease-in;
    -ms-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    .v-enter-active{
      transition: opacity 0.5s ease;
    }
    .v-leave-active {
      transition: opacity 0.1s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    .gptw{
    @apply fixed right-0 top-auto z-10 block;
    bottom: 12%;
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    @apply fixed right-0 left-0 top-0 w-full z-40 dark:bg-transparent dark:text-white bg-transparent;
    ul {
      li {
        @apply text-base;
      }
    }
  
    &.header {
      img.logo {
        // @apply transition duration-500 ease-in-out;
        font-size: 0;
       
      }
      background: url('https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/header_bg_c163587727.png')
    }
   
    &.header.rxaheader-sticky {
      .gptw{
        @apply hidden;  
      }
    //   @apply bg-white dark:bg-themedark-10 text-themedark-0 dark:text-themelight-0;
      .navContainer {
        @apply pt-0;
      }
      // .boxShadow {
      //   @apply overflow-auto;
      //   // max-height: calc(100vh - 6.1875rem);
      // }
      span.submenuName {
       
        padding: 1.375rem 0rem 1.125rem 0rem;
       
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
    //   a {
    //     span {
    //       @apply text-themedark-0 dark:text-themelight-0;
    //     }
    //   }
   
      .logo {
        -webkit-transition: all .3s ease-in;
        -o-transition: all .3s ease-in;
        transition: all .3s ease-in;
     
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

    div {
      span {
        @apply text-themedark-0 dark:text-themelight-0;
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
  .boxShadowNone {
    @apply shadow-none;
   
      box-shadow: 0 0.25rem 0.25rem 0 #00000033;
   
  }
  .boxShadow {
    box-shadow: 0 0.25rem 0.25rem 0 #00000033;
   
  }

  .submenuName {
    // padding: 0.625rem 0rem;
    // @screen md {
    //   padding: 2.25rem 0rem;
    // }
    padding: 1.375rem 0rem 1.125rem 0rem;
    margin: 0 auto;
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
  .nav-link-submenu {
    @apply text-themedark-10 inline-flex items-center text-base leading-5 font-medium;
    font-size: 2rem;
  }
  @screen smd {
    .nav-link-submenu {
      @apply text-lg leading-5;
    }
  }
  @screen sxl {
    .nav-link-submenu {
      @apply text-xl leading-5;
    }
  }
  @screen xxl {
    .nav-link-submenu {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
  @media (max-width: 1199px) {
      .navMain {
            height: 100vh;
            z-index: 111;

            @apply absolute top-100 left-0 w-full overflow-auto bg-rxa-secondary;
      }
       .header {
      img.logo {
        @apply transition duration-500 ease-in-out my-3;
        max-width: 2.5rem;
      }
      // img.confab-logo {
      //   max-width: 2.5rem;
      // }
    }
  }
}
</style>