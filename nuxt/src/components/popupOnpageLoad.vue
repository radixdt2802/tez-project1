<template>
<transition name="fade">
  <div class="popup-wrapper">
    <div class="popup sm:w-5/6 sxl:w-1/2 pb-8">
      <button id="close">&times;</button>
       <div class="flex items-center flex-wrap sxl:flex-nowrap">
        <div class="w-full sm:w-3/6">
            <img
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
              class="w-4/6 sm:w-full h-auto popup-img"
            />
        </div>
         <div class="w-full sm:w-3/6 text-left p-4 sm:px-6 sm:py-8 sxl:p-3">
              <h2 class="pb-0"  v-html="data.Title"></h2>
              <!-- <div class="para_lg" v-rxhtml="data.LongText"></div> -->
              <div v-html="$md.render(data.CTA ? data.CTA : '')" class="btn btn_md  mt-6 md:mt-8 "></div>
         </div>
       </div>
    </div>
  </div>
</transition>
</template>

<script>
import staticImg from "../mixins/staticimg.mixin";
export default {
  mixins: [staticImg],
    props: {
    data: Object,
  },
  mounted() {
      setTimeout(function open(event) {
        console.log("started");
        document.querySelector("body").style.overflow = "hidden";
        document.body.classList.add("bg-custom");
        document.querySelector(".popup-wrapper").style.display = "flex";
        document.querySelector(".popup-wrapper").style.opacity = "1";
      }, 5000);
    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector(".popup-wrapper").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
      document.body.classList.remove("bg-custom");
      console.log("completed");
    });
  },
};
</script>
<style lang="scss">
@layer utilities{
  .popup-wrapper {
    h2 {
      span {
        @apply text-primary;
      }
    }
    .btn a {
      position: relative;
      &::before {
          content: "";
          position: absolute;
          left: calc(100% + 10px);
          z-index: 11;
          background-image: url(https://d2ms8rpfqc4h24.cloudfront.net/left_arrow_68aedbf003.png);
          background-repeat: no-repeat;
          background-size: contain;
          width: 50px;
          height: 66px;
          background-position: bottom;
          bottom: 50%;
          transform: rotateZ(30deg);
      }
    }
  }
 
  .fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
  .popup-wrapper{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:50;
    display:none;
    align-items:center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    transition: ease-in-out 0.5s;
    opacity:0;
    padding: 20px 0px;
  }
.popup {
  background-color: #ffffff;
  max-width:900px;
  padding: 0px;
  border-radius: 8px;
  max-height: 95vh;
  overflow: auto;
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: relative;
   @media (max-width: 575px) {
     width: calc(100% - 30px);
    }
}
.popup button {
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
  right: 24px;
  top: 24px;
  @media (max-width: 991px) {
      right: 0px;
  top: 0px;
    }
}
.popup-img {
    border-top-left-radius: 8px;
}
/* .popup p {
  font-size: 14px;
  text-align: justify;
  margin: 20px 0;
  line-height: 25px;
} */
/* a {
  display: block;
  width: 150px;
  position: relative;
  margin: 10px auto;
  text-align: center;
  background-color: #0f72e5;
  color: #ffffff;
  text-decoration: none;
  padding: 5px 0;
} */
}
</style>
