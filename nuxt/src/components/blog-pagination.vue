<template>
  <div class="blog-pagination">
    <div class="pagination pagination-center blog-pagination">
      <ul class>
        <li class="pre"></li>
        <li class="buttons-block-center page-numbers">Showing Page 1 of 13</li>
        <li class="next">
          <!-- <a href="https://radixweb.com/company-news/page/2">Next</a> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
};
</script>
<style lang="scss">
@layer utilities {
  .blog-pagination {
    padding: 1.25rem 0.938rem;
    @screen md {
      @apply py-5;
    }
    @screen sxl {
      @apply py-10;
    }

    @apply border-t border-b border-solid border-themelight-10;
    ul {
      @apply mb-0 flex justify-between items-center w-full;
      li {
        @apply text-xs;
        @screen xsm {
          @apply text-sm;
        }
        @screen md {
          @apply text-base font-poppins font-semibold;
        }
        a {
          @apply no-underline text-sm;
          padding: 0.313rem 0.625rem;
          min-width: 4.688rem;
          @screen xsm {
            padding: 0.313rem 1.563rem;
            min-width: 6.563rem;
          }
          @screen md {
            @apply border-2 border-solid border-themelight-10 inline-block text-center;
            padding: 0.625rem 2.188rem;
            font-size: 0.938rem;
            border-radius: 3.125rem;
            min-width: 8.438rem;
          }
        }
      }
    }
  }
}
</style>