<template>
  <div
    class="rxsection-y-space map-iframe bg-opacitybg-25"
  >
    <div class="container">
      <h2 class="text-center b-space-40">{{data.Title}}</h2>

      <div class="row justify-center">
        <div
          class="w-full px-4 relative"
        >
          <div class="map-responsive relative h-0 overflow-hidden">
            <iframe
              :src="data.CTA"
              frameborder="0"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              class="mx-auto absolute top-0 left-0 w-full h-full"
              rel="nofollow"
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
    .map-iframe{
      .map-responsive{
        padding-bottom: 75%;
        @screen smd{
          padding-bottom: 40%;
        }
      }
    }
  }
</style>
