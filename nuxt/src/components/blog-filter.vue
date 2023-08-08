<template>
  <div>
    <div class="filterToggle">
      <div
        class="filterMenu"
        :class="{block: istoggle == false, 'menuOpen rounded-xl': istoggle == false, hidden: istoggle == true}"
      >
          <div class="fixed filterNav bg-themelight-0 dark:bg-themedark-10 rounded-t-lg w-10/12">
            <h4 @click="filterMenu('category')" class="flex items-center justify-between p-4">
              <span class="h4">SEARCH BY CATEGORIES</span> 
            </h4>
          </div>
          <div
            class="filterContentMain px-4"
          >
            <ul class="filtercontentinner mt-6">
              <li
                v-for="item in data.categories.data.dynamicResult"
                v-bind:key="item.Title"
                class="text-left"
              >
                <a
                  @click.native="showFilterMenu(istoggle = false)"
                  :href="item.NavURL"
                  class=" px-4 py-2 block"
                >{{item.Title}}</a>
              </li>
              <li class="text-left">
                <a
                  href="/blog"
                  @click.native="showFilterMenu(istoggle = false)"
                  class="px-4 py-2 block text-primary"
                >View All</a>
              </li>
            </ul>
          </div>
      </div>
      <button @click="showFilterMenu(),bodyScrollLock()" class="filter">
        <span class="text-sm flex justify-around" v-show="istoggle == true"> <img class="inline-block" alt="Search Icon" v-rxlazy="searchIcon" height="15" width="15"> SEARCH BY CATEGORIES</span>
        <span class="text-sm flex justify-around" v-show="istoggle == false">CLOSE</span>
      </button>
    </div>
  </div>
</template>
<script>
import staticImg from '../mixins/staticimg.mixin';
const blogCategory = () => import("./blog-categories.vue");
// const blogTags = () => import("./blog-tags");
export default {
  mixins: [staticImg],
  props: {
    data: Object,
  },
  name: "blog-sidebar",
  components: {
    blogCategory,
    // blogTags,
  },
  data() {
    return {
      istoggle: true,
      categoryMenu: true,
      tagsMenu: true,
    };
  },
  methods: {
    bodyScrollLock(){
      // console.log("hello"+this.istoggle)
      // alert(this.istoggle)
      if (this.istoggle === false){
        var  body = document.body;
        body.classList.add("overflow-hidden");
      }
      if (this.istoggle !== false){
        var  body = document.body;
        body.classList.replace("overflow-hidden","custom-class")
      }
    },
    showFilterMenu() {
      this.istoggle = !this.istoggle;
      this.categoryMenu = true;
      this.tagsMenu = false;
    },
    filterMenu(menuType) {
      if (menuType == "category") {
        this.categoryMenu = !this.categoryMenu;
        this.tagsMenu = false;
      } else if (menuType == "tags") {
        this.tagsMenu = !this.tagsMenu;
        this.categoryMenu = false;
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .blog-filter {
    @apply p-8 shadow-2xl w-3/12 text-themedark-40;
  }
  .blog_search_input {
    @apply border-b w-full p-3 text-base dark:text-themelight-10 dark:bg-themedark-10;
  }
  .blog_search_input:focus {
    @apply outline-none;
  }
  .filter-header {
    @apply py-6;
  }
  .filter-header h4 {
    @apply relative p-0;
  }
  .filter-header h4 span {
    @apply bg-themelight-0 inline-block pr-3 font-semibold dark:bg-themedark-10 relative z-10;
  }
  .filter-header h4::after {
    @apply left-0 right-0 w-full bottom-0 absolute z-0 border-b border-themedark-40 dark:border-themelight-0;
    content: "";
  }
  .blog-sidebar-links {
    li {
      a {
        &:hover {
          @apply text-primary;
        }
      }
    }
  }
  .collapse-submenu {
    @apply block;
  }
  .popular_tags {
    &:hover {
      @apply bg-primary cursor-pointer;
    }
  }
  .blog-sidebar {
    a {
      @apply text-themedark-10 leading-9 items-center relative;
      .icon {
        @apply mr-6 mb-6 inline-block;
      }
      .hover-img {
        @apply invisible absolute top-0 left-0 z-40;
      }
      &:hover {
        @apply text-primary;
        .hover-img {
          @apply visible;
        }
        .normal-img {
          @apply invisible;
        }
      }
    }
  }
  .follow-us-wrapper ul {
    @apply flex flex-wrap pr-4;
    img {
      max-width: 1.875rem;
    }
  }
  .follow-us-wrapper li {
    @apply pr-4;
  }
  .popular_tag_list {
    @apply bg-opacitybg-15 m-2 p-2 lg:text-base text-sm dark:bg-themedark-40 leading-normal;
  }
  .featured-post.slick-slider {
    @apply flex flex-wrap justify-end;
  }
  .blog-sidebar {
    .slock-slide img {
      width: 100%;
    }
  }
  .filterNav {
    @apply pt-2 px-4;
    
    > h4 {
      @apply font-normal;
      span.h4 {
        @apply text-primary;
      }
    }
  }
  .filterMenu {
    @apply fixed bottom-5 left-10 sm:left-20 bg-themelight-0 dark:bg-themedark-10 text-center lg:hidden w-10/12 z-30 h-3/5 pb-4 overflow-scroll;
    box-shadow: 1px 1px 7px 7px rgb(0 0 0 / 26%);
    &.menuOpen {
      @apply z-50;
      + .filter {
        @apply z-50;
      }
    }
    //  &::after{
    //     @apply fixed w-10/12 left-1 right-0 bottom-5 h-1/4 rounded-lg mx-auto;
    //     content:'';
        
    //     background: linear-gradient(
    //       to bottom,
    //       rgba(255, 255, 255, 0) 0%,
    //       rgba(255, 255, 255, 0.98) 98%,
    //       rgba(255, 255, 255, 1) 100%
    //     );
    //     filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
    //   }
  }
  .filter {
    @apply w-full p-2 bg-primary fixed z-30 bottom-1 left-0 right-0 mx-auto lg:hidden rounded-2xl;
    max-width:13.125rem;
  }
  .filterContent {
    height: 100%;
   
    // a:hover {
    //   @apply bg-themedark-40;
    // }
  }
  .filterContentMain {
    @apply w-full text-left overflow-auto mt-8;
    // a:hover {
    //   @apply bg-themedark-40;
    // }
    ul.filtercontentinner{
      columns: 1;
    }
    @screen sm{
      ul.filtercontentinner{
        columns: 2;
      }
    }
     
  }
}
</style>