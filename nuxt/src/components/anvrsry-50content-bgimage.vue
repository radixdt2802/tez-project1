<template>
  <div
    id="scroll"
    class="
      rxsection-y-space
      anniversry-data
      anyersry-50con-bgimage
      relative
      bg-no-repeat bg-cover
      contentWhite
      text-left
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container-fluid px-4 md:px-8">
      <div
        class="
          content-area
          w-full
          md:w-9/12
          smd:w-3/5
          xxl:w-5/12
          xxxl:w-6/12 xxxl:pl-28 xxxl:pr-4
          relative
        "
      >
        <h2 class="text-customcolor-96">{{ data.Title }}</h2>
        <p
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor text-left anniversry-content"
        ></p>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script> 
<style lang="scss">
@layer utilities {
  .anyersry-50con-bgimage {
    background-position: center right 31%;
    @screen md {
      background-position: center right 42%;
    }
    @screen sxl {
      background-position: center right -12.5rem;
    }
    @screen xl {
      background-position: center center;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(20, 11, 54, 0.5);

      @screen smd {
        background-color: transparent;
      }
    }
    .anniversry-content {
      /* max-width: 56.625rem;
             margin: 0rem; */
    }
    .listanchor {
      width: 100%;
    }
  }
}
</style>
