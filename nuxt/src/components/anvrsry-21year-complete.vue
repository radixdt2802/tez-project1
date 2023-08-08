<template>
  <div
    class="
      rxsection-y-space
      anvrsry-year-completion
      anniversry-data
      relative
      bg-cover bg-no-repeat
      overflow-hidden
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="cracker-image"></div>
    <div class="content-area relative text-center mx-auto w-full">
      <h2 class="text-center text-themelight-0 font-normal">
        {{ data.Title }}
      </h2>
      <div class="year-image">
        <img
          class="mx-auto"
          v-rxlazy="data.Icon"
          :width="data.Icon.width"
          :height="data.Icon.height"
        />
      </div>
    </div>
    <div class="line-circle relative pt-20 sm:pt-36 pb-12 text-center">
      <div class="container">
        <div
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
          class="anyvrsry-btn text-center mt-10 relative"
        ></div>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
export default {
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .anvrsry-year-completion {

    &::after {
      background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/completed_years_particles_d0bf87a2f8.png");
      @apply absolute bg-no-repeat mx-auto h-full w-full bg-contain top-0;
      content: "";
      pointer-events: none;
      animation: animatewave 10s infinite;
    }

    // @keyframe animatewave {
    //   0% {
    //     background: red;
    //     left: 0rem;
    //     top: 0rem;
    //   }
    //   50% {
    //     background: green;
    //     left: 0rem;
    //     top: 12.5rem;
    //   }
    //   100% {
    //     background: red;
    //     left: 0rem;
    //     top: 0rem;
    //   }
    // }

    &::before {
      @apply absolute bg-no-repeat mx-auto left-0 right-0;
      background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/completed_years_circle_4766a187fe.png");
      content: "";
      background-size: 100% 100%;
      top: -30%;
      height: 37.5rem;
      width: 37.5rem;
      
      pointer-events: none;
      animation: animateCircle linear infinite 18s;
      @screen sm{
        height: 53.125rem;
      width: 53.125rem;
      }
      @screen md{
        height: 47.5rem;
      width: 47.5rem;
      }
      @screen sxl{
        height: 57.1875rem;
        width: 57.1875rem;
      }
      @screen xxl{
        height: 69.6875rem;
        width: 69.6875rem;
      }

    }
    @keyframes animateCircle {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
    .cracker-image {
      @apply absolute bg-no-repeat mx-auto h-full w-full bg-cover top-0;
      background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/completed_years_crackers_d296085901.png");
      pointer-events: none;
      animation: animateCrackers linear infinite 12s;
    }
    .content-area {
      min-width: inherit;
      padding-top: 0.625rem;
      max-width: 15rem;
      @screen xsm{
        max-width: 15.9375rem;
      }
      @screen sm{
        max-width: 20.3125rem;
      }
      @screen md{
        max-width: 31.125rem;
      }
      @screen smd{
        max-width: 38.625rem; 
        padding: 0 0.9375rem; 
      }
      @screen sxl{
        max-width: 45rem;
      }
     

      .year-image{
        
        img{
          max-width: 22.5rem;
          width: 100%;
          @screen sxl{
          max-width: 26.25rem;
          }
          @screen xxl{
            max-width: 100%;
          }
        }
      }
    }
    .line-circle {
      .anyvrsry-btn {
        @apply inline-block mt-12 max-w-full text-customcolor-96;
        width: auto;
        padding: 0.5rem 2.625rem;
        border-radius: 2.625rem;
        transition: all 0.3s ease;
        background: #23e6da;
        &:hover {
          @apply bg-themelight-0;
         cursor: url("https://d2ms8rpfqc4h24.cloudfront.net/cursorhand_3851d81fa1.png"),
            auto;
        }
        p{
          padding: 0;
        }
        a {
          @apply no-underline uppercase font-semibold;
         cursor: url("https://d2ms8rpfqc4h24.cloudfront.net/cursorhand_3851d81fa1.png"),
            auto;
        }
      }
    }
  }
}
</style>