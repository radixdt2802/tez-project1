<template>
  <Transition :class="exitPopup" name="bounce">
    <div
      class="
        popup-wrapper
        fixed
        w-full
        h-full
        top-0
        left-0
        z-50
        hidden
        items-center
        justify-center
        bg-white
        dark:bg-themedark-0
        opacity-0
        py-5
        ease-in-out
        duration-500
        mx-auto
        text-center
        overflow-y-auto
      "
    >
      <div
        class="
          max-w-3xl
          bg-white
          dark:bg-themedark-0
          p-0
          overflow-auto
          text-center
          relative
          sm:w-5/6
          sxl:w-1/2
          pb-8
          viewportHeight
        "
      >
        <button @click="popupExit()" id="close">&times;</button>
        <div class="flex items-center flex-wrap sxl:flex-nowrap">
          <div class="w-full p-4 sm:px-6 sm:py-8 sxl:p-3">
            <h2 class="font-bolder mb-4 sxl:mb-8">
              {{ data.Title }}
              <span class="text-primary">{{ data.SubTitle }}</span>
            </h2>
            <div
              class="para_sm text-themedark-65 w-full sxl:w-10/12 mx-auto"
              v-if="data.ShortText"
              v-rxhtml="data.ShortText"
            ></div>
            <div
              class="para_md w-full sxl:w-8/12 mx-auto my-4 sxl:my-8"
              v-if="data.LongText"
              v-rxhtml="data.LongText"
            ></div>
            <div
              v-html="$md.render(data.CTA ? data.CTA : '')"
              class="btn btn_md mt-6 md:mt-8 font-normal"
            ></div>
            <div class="flex flex-wrap text-left mt-16">
              <div
                class="w-full lg:w-1/3 px-4 customBorder"
                v-for="item in data.TitleContentMediaList"
                :key="item.id"
              >
                <img
                  v-rxlazy="item.Icon.url"
                  width="79"
                  height="15"
                  alt="Ratings"
                />
                <div
                  v-if="item.LongText"
                  class="customFontSize"
                  v-rxhtml="item.LongText"
                ></div>
                <p class="pb-0">
                  <strong>{{ item.Title }}</strong>
                </p>
                <p class="text-base pt-0 text-themedark-65">
                  {{ item.SubTitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
    
    <script>
import staticImg from "../mixins/staticimg.mixin";
export default {
  mixins: [staticImg],
  props: {
    data: Object,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    //exit intent popup
    // if (this.count === 0){
    //   const show = () => {
    //     const element = document.querySelector(".popup-wrapper");
    //     console.log("started");
    //     document.querySelector("body").style.overflow = "hidden";
    //     element.style.display = "flex";
    //     element.style.opacity = "1";
    //     element.style.animation = "bounce-in 0.5s";
    //   };
    //     document.addEventListener("mouseout", (event) => {
    //       if (!event.toElement && !event.relatedTarget) {
    //         setTimeout(() => {
    //           show();
    //         }, 500);
    //       }
    //     });
    //     console.log("count new", this.count);
    //     this.count ++;
    //     console.log("count new", this.count);
    // }
    //exit intent popup
  },
  methods: {
    popupExit() {
        document.querySelector(".popup-wrapper").style.animation =
          "bounce-in 0.5s reverse";
        document.querySelector(".popup-wrapper").style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.body.classList.remove("bg-custom");
        // console.log("completed");
      this.count = +this.count + 1;
      // console.log("outside of close", this.count);
    },
  },
  computed: {
    exitPopup() {
      // console.log("exit popup", this.count);
      //exit intent popup
      const show = () => {
        const element = document.querySelector(".popup-wrapper");
        console.log("started");
        document.querySelector("body").style.overflow = "hidden";
        element.style.display = "flex";
        element.style.opacity = "1";
        element.style.animation = "bounce-in 0.5s";
      };
      document.addEventListener("mouseout", (event) => {
        if (!event.toElement && !event.relatedTarget) {
          if (this.count < 2) {
            show();
          }
        }
      });
      // console.log("count", this.count);
      // console.log("count new", this.count);
    },

    //exit intent popup
  },
  // },
};
</script>
    <style lang="scss">
@layer utilities {
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  .popup-wrapper button {
    display: block;
    margin: 0 0 20px auto;
    background-color: transparent;
    font-size: 30px;
    color: #333333;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 0;
    top: 0;
  }
  .popup-img {
    border-top-left-radius: 8px;
  }
  .customBorder:not(:last-child) {
    border-right: unset;
    @apply mb-5;
    @screen lg {
      border-right: 1px solid #e8e8e8;
      margin-bottom: unset;
    }
  }
  .customFontSize {
    p {
      @apply text-base;
    }
  }
  .viewportHeight {
    height: 95vh;
    @screen lg {
      height: unset;
    }
  }
}
</style>
    