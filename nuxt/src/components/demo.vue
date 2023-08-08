<template>
<div>
  {{data.dynamicResult}}  
</div>  
</template>

<script>
const DynamicComponent = () => import("./dynamic-component.vue");
export default {
  
  props: {
    data: Object
  },
    components: {
    DynamicComponent,
  },
}
</script>

 <style lang="scss">

</style>