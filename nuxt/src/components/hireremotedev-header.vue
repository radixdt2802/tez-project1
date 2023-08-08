  <template>
  <header
    :class="[getShowHeader, getIsServices]"
    class="
      hrd-header
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
      duration-300
      ease-in-out
    "
  >
    <div class="relative headerMain">
      <div class="items-center justify-between row">
        <div class="w-2/6 px-4 sm:w-1/4">
          <tez-link to="/">
            <img
              class="logo"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png'"
              alt="Hire Remote Developers - Radixweb"
              width="89"
              height="91"
            />
            <img
              class="stickylogo"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/logo_radix_9567b8c6f2.png'"
              alt="Hire Remote Developers - Radixweb"
              width="50"
              height="52"
            />
          </tez-link>
        </div>
        <div class="mr-10">
          <tez-link to="/" class="btn btn_sm">Hire Now</tez-link>
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
  },
  mounted() {
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
    .hrd-header + * {
       margin-top: 0;
    }
  }
}
@layer utilities {
  .hrd-header {
    padding: 3.125rem 3.125rem 0;
    &.sticky-scrolled {
      @apply bg-white dark:bg-themedark-10 text-themedark-0 dark:text-themelight-0 transition-all duration-300 ease-in-out;
      padding: 0.5rem 1.875rem;
      box-shadow: 0 0 0.3125rem #0000006e;
      .logo {
        @apply hidden;
      }
    }
    &:not(&.sticky-scrolled) {
      .stickylogo,
      .btn {
        @apply hidden;
      }
    }
  }
}
</style>
