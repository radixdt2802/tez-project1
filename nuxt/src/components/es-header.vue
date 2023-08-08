  <template>
  <header
    :class="[getShowHeader]"
    class="
      es-header
      fixed
      left-0
      top-0
      right-0
      w-full
      z-40
      dark:bg-themedark-0
      lg:dark:bg-transparent
      dark:text-white
      bg-transparent
      transition
      duration-300
      ease-in-out
      py-4
      px-1
    "
  >
    <div class="relative headerMain">
      <div class="w-1/6 px-2 sm:w-1/4">
        <tez-link to="/">
          <img
            class="logo"
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png'"
            alt="Radixweb - IT Outsourcing Company India and USA"
            width="63"
            height="64"
          />
        </tez-link>
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
@layer utilities {
  .es-header {
    &.sticky-scrolled {
      display: none;
    }
  }
}
</style>
