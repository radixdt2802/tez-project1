<template>
  <main>
    <!--     <h1 v-html="page.title.rendered" class="wp__title"></h1> -->
    <div v-html="page.content.rendered" class="wp__content">This page should be removed.</div>
  </main>
</template>

<script type="text/javascript">
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>
