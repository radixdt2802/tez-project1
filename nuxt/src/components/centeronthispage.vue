<template>
  <section class="container rxsection-t-space">
    <div>   
      <details open>
        <summary>On This Page</summary>
        <ol>
          <li v-for="item in data.TitleContentMediaList">
            <div v-html="$md.render(item.CTA)"></div>
            </li>
        </ol>
      </details>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
@layer utilities {
  details,
  details[open] {
    @apply my-8 md:p-8 p-4 bg-themelight-10 dark:bg-themedark-10 cursor-pointer;
    summary {
      @apply py-2 px-4 md:p-4 text-left bg-primary mb-0 rounded-lg md:text-2xl xsm:text-xl text-lg text-themedark-0 dark:text-themedark-75;
    }
    h2,
    h3 {
      margin-left: 0.625rem;
    }
    ol {
      @apply pl-12 pt-4 list-decimal text-lg;
      li {
        a {
          @apply no-underline text-themedark-0 dark:text-themelight-0;
        }
      }
    }
    ul {
      @apply pl-12 pb-0 pt-4;
      li {
        a {
          @apply no-underline text-themedark-0 dark:text-themelight-0 font-normal;
        }
      }
    }
  }
}
</style>