<template>
  <section class="bg-primary rxsection-y-space" :class="this.theme">
    <div class="container">
      <div>
        <h1 class="text-textColor-primary">Hello {{this.theme}} mode</h1>
        <button @click.prevent="themeMode()" class="text-textColor-primary focus:outline-none">
          <span v-if="this.theme == 'theme-light'">Light</span>
          <span v-else>Dark</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
export default {
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  data() {
    return {
      theme: "theme-light",
    };
  },
  methods: {
    themeMode() {
      this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>