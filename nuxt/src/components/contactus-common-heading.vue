<template>
    <div id="scroll" class="contactus-common-heads mt-16">
      <div class="container">
        <div
          class="mx-auto text-center rxsection-y-space w-full"
        >
          <h1 class="h2 dark:text-themelight-0">{{ data.Title }}</h1>
          <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="listanchor para_md"
          ></div>
          <div
            v-if="data.CTA"
            v-html="$md.render(data.CTA)"
            class="btn btn_md"
          ></div>
        </div>
      </div>
    </div>
  </template>
  <script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  export default {
    
    props: {
      data: Object,
    },
  };
  </script>