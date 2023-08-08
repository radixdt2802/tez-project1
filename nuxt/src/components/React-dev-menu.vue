<template>
  <div class="container informativePageMenu">
    <div
      class="mt-4 bottom-50 bg-themelight-10 dark:bg-themedark-10 hidden"
      :class="{ 'fixed w-1/4 top-24 overflow-y-auto importantVisible': scrollPosition > 756 && scrollPercentage < 80 , 'importantHidden' : scrollPercentage > 80 }"
    >
      <div class="">
        <div class="px-4 py-4 h3_sm">On This Page</div>
        <div
          v-for="(item, index) in data.TitleContentMediaList"
          :key="item.Title"
          @click="contentvisiblity(index)"
          class="transition-all border-l-4 border-opacity-0 cursor-pointer hoverprimary hover:border-opacity-100 border-primary"
        >
          <div v-if="item.CTA" v-html="$md.render(item.CTA ? item.CTA : '')" class="linkTitle"></div>
          
          <div class="mt-2" v-bind:id="index">
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="mb-3 ml-3 cursor-pointer internalLink"
          ></div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      show: true,
      currentTab: null,
      scrollPosition: "",
      scrollPercentage: "",
    };
  },

  methods: {
    contentvisiblity(id) {
      if (this.currentTab == id) {
        this.currentTab = null;
      } else {
        this.currentTab = id;
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.scrollPercentage = parseInt(
        (window.scrollY /
          (window.document.body.scrollHeight - window.innerHeight)) *
          100,
        10
      );
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
@layer utilities {
  .informativePageMenu{
    .importantVisible{
      @media (min-width: 1025px){
        display: block !important;
        max-width: 29.75rem;
        z-index: 1;

      }
    }
    .importantHidden{
      display : hidden !important;
    }
    .linkTitle{
      p{
        @apply px-2 p-0;
        a{
          @apply px-2 no-underline block;
        }
      }
    }
    .internalLink{
      ul {
        li {
          @apply py-2 list-inside list-decimal;
        }
        a {
          @apply no-underline;
        }
      }
    }
  }
  .react-dev-menu {
    max-width: 400px;
    ul {
      li {
        @apply hover:text-primary;
      }
    }
    .hoverprimary:hover {
      @apply text-primary;
    }
  }
}
</style>
