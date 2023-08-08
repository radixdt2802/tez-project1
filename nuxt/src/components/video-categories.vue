<template></template>
<script>
const DynamicComponent = () => import("./dynamic-component.vue");
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object
  }
};
</script>