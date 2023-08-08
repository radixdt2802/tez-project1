<template>
  <div
    class="key-business"
    :class="[
     data.VueReferenceCode == 'TCWithBlogFeatured1-3Nospace'
        ? ''
        : '',
      data.VueReferenceCode == 'TCWithBlogFeatured1-3Bspace'
        ? 'rxsection-y-space'
        : '',
      data.VueReferenceCode == 'TCWithBlogFeatured1-2'
        ? 'rxsection-t-space'
        : '',
      data.VueReferenceCode == 'TCWithBlogFeatured1-4'
        ? 'rxsection-t-space'
        : '',
      data.VueReferenceCode == 'TCWithBlogFeatured1-3'
        ? 'rxsection-t-space'
        : '',
    ]"
  >
    
    <!--<h2 class="w-9/12 mx-auto pb-0 text-center">{{ data.Title }}</h2>-->
    <div class="w-9/12 mx-auto pb-0" v-html="title"></div>
    <div class="container pt-7">
      <div class="row blog-list" v-if="data.Blogs">
        <div
          v-for="item in data.Blogs"
          :key="item.Title"
          @click="anchor(item.NavURL)"
          class="px-4 cursor-pointer"
         
          :class="[
            data.VueReferenceCode == 'TCWithBlogFeatured1-3Nospace'
              ? 'smd:w-1/3 w-full'
              : '',
            data.VueReferenceCode == 'TCWithBlogFeatured1-2'
              ? 'smd:w-1/2 w-full'
              : '',
            data.VueReferenceCode == 'TCWithBlogFeatured1-3Bspace'
              ? 'smd:w-1/3 w-full'
              : '',
            data.VueReferenceCode == 'TCWithBlogFeatured1-3'
              ? 'smd:w-1/3 w-full'
              : '',
            data.VueReferenceCode == 'TCWithBlogFeatured1-4'
              ? 'smd:w-1/4 w-full'
              : '',
          ]"
        >
          <div
            class="
              insight-content
              bg-themelight-10
              hover:shadow-md
              inline-block
              relative
              hover:text-primary
              transition-all
              duration-300
              ease-in-out
              dark:bg-themedark-10
              no-underline
              h-full
              smd:border-t-0
              border-t border-opacity-25 border-solid
              dark:border-black
              w-full
            "
          >
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="smd:block hidden w-full"
            />
            <div class="blog-title flex">
              <h3
                class="
                  relative
                  transition-all
                  duration-300
                  ease-in-out
                  smd:w-full
                  para_md
                  w-10/12
                  py-3 px-4
                  leading-6
                "
              >
                {{ item.Title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row blog-list" v-if="data.news_items">
        <div
          v-for="item in data.news_items"
          :key="item.Title"
          @click="anchor(item.NavURL)"
          class="px-4 cursor-pointer smd:w-1/3 w-full"
        >
          <div
            class="
              insight-content
              bg-themelight-10
              hover:shadow-md
              inline-block
              relative
              hover:text-primary
              transition-all
              duration-300
              ease-in-out
              dark:bg-themedark-10
              no-underline
              h-full
              smd:border-t-0
              border-t border-opacity-25 border-solid
              dark:border-black
              w-full
            "
          >
            <img
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              :alt="item.Image.alternativeText"
              class="smd:block hidden w-full"
            />
            <div class="blog-title flex">
              <h3
                class="
                  relative
                  transition-all
                  duration-300
                  ease-in-out
                  smd:w-full
                  para_md
                  w-10/12
                  py-3 px-4
                  leading-6
                "
              >
                {{ item.Title }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="ctaOverall text-center t-space-60" v-if="data.LongText">
        <div class="inline btn space-t" v-rxhtml="data.LongText"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],  
  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
  data(){
    return {
      titleStyle : "h2 text-center pb-0 md:pb-4",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .insight-content {
      &:hover {
        box-shadow: 0 0.25rem 0.5rem -0.0625rem rgb(0, 0, 0),
          0 0.125rem 0.375rem 0rem rgba(255, 255, 255, 0.58);
      }
    }
  }
  .key-business {
    .blog-list {
      
      .row {
        div {
          &:first-child {
            div {
              border-top: none;
            }
          }
        }
      }
      .insight-content {
        &:hover{
          h3{
            @apply text-primary;
          }
        }
        
        h3 { 
          @screen smd {
            padding: 1.375rem 1.563rem;
          }
        }
        &:after {
          @apply absolute top-50 bg-no-repeat smd:hidden block w-8 h-3;
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg");
          right: 0.625rem;
          transform: translateY(-50%);
          content: "";
          background-size: 1.438rem;
        }
      }
    }
  }
}
</style>