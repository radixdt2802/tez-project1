<template>
  <div
    class="featuredJobs rxsection-y-space"
    :class="[data.VueReferenceCode == 'TC_FeaturedJobs_Whitebg'
        ? 'bg-themelight-0'
        : 'bg-themelight-10 dark:bg-themedark-70',]"
    :id="data.NavURL"
  >
    <div class="container">
      <div class="row">
        <div class="smd:w-1/2 w-full px-4 borderAfter relative">
          <h2>{{ data.Title }}</h2>
          <p v-html="data.ShortText"></p>
        </div>
        <div class="smd:w-1/2 w-full px-4 pl-8">
          <h3>{{ data.SubTitle }}</h3>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list list_md customAnchor"
          ></div>
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
  methods: {
    scroll(data) {
      document.getElementById(data).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" >
@layer utilities {
  .featuredJobs {
    .borderAfter {
      &:after {
        content: "";
        @apply absolute h-full bg-primary right-0 top-0;
        width: 0.125rem;
      }
    }
    .customAnchor {
      ul {
        li {
          a {
            @apply no-underline;
            &:hover {
              @apply text-primary;
            }
          }
        }
      }
    }
  }
}
</style>