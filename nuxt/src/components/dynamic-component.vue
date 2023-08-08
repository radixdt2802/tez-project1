<template>
  <div>
    <keep-alive>
      <component v-if="hide" v-bind:is="baseComponent" v-bind:data="baseData" />
    </keep-alive>
  </div>
</template>
<script type="text/javascript">
export default {
  name: `DynamicComponent`,
  data() {
    return {
      baseComponent: undefined,
      baseData: undefined,
      hide: false,
    };
  },
  props: {
    data: undefined,
    component: undefined,
  },
  computed: {
    observer() {
      return new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          this.baseComponent = this.component;
          this.baseData = this.data;
          this.hide = isIntersecting;
        }
      }, this.options);
    },
  },
  mounted() {
    this.observer.observe(this.$el);
  },
  activated() {
    this.observer.observe(this.$el);
  },
  deactivated() {
    this.observer.unobserve(this.$el);
  },
  beforeDestroy() {
    this.observer.unobserve(this.$el);
  },
};
</script>
