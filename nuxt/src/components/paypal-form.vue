<template>
  <div class="payment-form">
    <div class="container">
     
      <div class="row justify-center">
          <div class="px-4 w-full">
          <div class="embed-responsive embed-responsive-16by9 custom-height">
            <iframe
              width="100%"
              height="785"
              rel="nofollow"
              :src="data.CTA"
              frameborder="0"
              class="embed-responsive-item"
              scrolling="no"
            ></iframe>
          </div>
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
};
</script>
<style lang="scss">
@layer utilities{
    .payment-form{
        .custom-height{
            height:49.0625rem;
        }
    }
}
</style>