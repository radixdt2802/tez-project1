<template>
  <div class="banner pt-28 pb-20 overflow-x-hidden">
    <div class="container w-full flex flex-col lg:flex-row items-center"
      v-for="item in data.SimpleContentBanner">
      <div class="banner-text lg:w-3/5">
        <div class="pt-20">
          <h1 class="heading text-center lg:text-left text-5xl lg:text-7xl font-bold">{{ item.Title }}</h1>
          <h1 class="text-5xl text-center lg:text-7xl lg:text-left font-bold text-white">{{ item.SubTitle }}</h1>
        </div>
        <div class="mt-2 text-white text-3xl longtext lg:w-9/12 hidden lg:block" v-rxhtml="item.LongText"></div>
        <div class="mt-2 text-white text-3xl longgtext w-full lg:hidden" v-rxhtml="item.LongText"></div>
        <div>
          <img class="mx-auto lg:hidden px-4 lg:px-0 pb-12 lg:pb-0" loading="lazy" v-rxlazy="item.Image" :alt="item.Image.alternativeText"
            :width="item.Image.width" :height="item.Image.height" />
        </div>
        <div class="button rounded-xl p-4 lg:p-8 bg-gray-300 text-center lg:max-w-xl bg-[#252529cc] items-center mb-4 mx-4">
          <div class="butn">
          <div><img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_12_96f2ce98a8.png" alt=""></div>
          <div v-html="$md.render(item.CTA ? item.CTA : '')" v-if="item.CTA" ></div>
          </div>
        </div>
        <div>
          <p class="text-gray-500 pb-5 text-center lg:text-left text-sm lg:text-base">Or create an account with your email</p>
          <div class="flex flex-col lg:flex-row gap-6">
            <input name="email" required value type="email" placeholder="Enter your email"
              class="py-2 px-3 lg:pr-40 border border-gray-500 border-solid rounded-lg mb-4 lg:mb-7 input bg-transparent" />
            <div class="fil-btn py-2 px-3 rounded-lg lg:w-44 mb-7 bg-green-500">
              <a class="no-underline" href>
                <p class="text-paragraph text-primary-800 text-center font-semibold text-black">Sign Up</p>
              </a>
            </div>
          </div>
          <p class="text-gray-500 text-center lg:text-left px-4 text-sm lg:text-base">
            Powered by
            <a href="https://vueschool.io" target="_blank" class="underline text-gray-500 hover:text-green-500">Vue School</a> in partnership
            with the
            <a href="https://vuejs.org" target="_blank" class="underline text-gray-500 hover:text-green-500">Vue.js</a> organisation
          </p>
        </div>
      </div>
      <div class="banner-image lg:w-2/5 items-start relative">
        <div class="right-image">
        <img class="basic mx-auto hidden lg:block hover:rotate-45 skew-y-6 relative" loading="lazy" v-rxlazy="item.Image"
        :alt="item.Image.alternativeText" :width="item.Image.width" :height="item.Image.height" />
        <img class="badge hidden lg:block hover:rotate-45 skew-y-6 absolute" loading="lazy" v-rxlazy="item.HoverIcon"
        :alt="item.HoverIcon.alternativeText" :width="item.HoverIcon.width" :height="item.HoverIcon.height" />
        <img class="hero3d hidden lg:block hover:rotate-45 skew-y-6 absolute left-[245px] top-[45px]" loading="lazy" v-rxlazy="item.Icon"
        :alt="item.Icon.alternativeText" :width="item.Icon.width" :height="item.Icon.height" />
        </div>
        <div class="right absolute hidden lg:absolute"> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object
    }
  };
</script>

<style lang="scss">
  @layer utilities {
    .banner {
      background-color: rgb(26 26 26/1);
      opacity: 1;

      .button{
        background-color: #252529cc;
      }
      .butn {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 auto;
        width: fit-content;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 12px;
        padding-right: 12px;
        border: 1px solid;
        border-radius: 8px;
        background: linear-gradient(#252529, #252529) padding-box,
                    linear-gradient(45deg, #42b883, #0ebbd2) border-box;
        border: 1px solid transparent;
        a {
          @apply no-underline text-sm font-semibold text-white;
        }
      }

      .butn:hover {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 auto;
        width: fit-content;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 12px;
        padding-right: 12px;
        border-width: 1px;
        border-radius: 8px;
        border-color: transparent;
        cursor: pointer;
        background: linear-gradient(45deg, #42b883, #0ebbd2) border-box;
        a {
          @apply no-underline text-sm font-semibold;
        }
      }
      .banner-text {
        @apply px-4;
      }
      .fil-btn:hover{
        background: linear-gradient(45deg, #42b883, #0ebbd2) border-box;
      }
      .longtext {
        p {
          @apply text-3xl font-semibold text-white pb-10;
        }
      }
      .longgtext {
        p {
          @apply text-sm text-center font-semibold text-white pb-10 px-4;
        }
      }
      .right{
        background-image: linear-gradient(to left, #42b883 100%, #0ebbd2 20%);
        width: 325px;
        height: 325px;
        filter: blur(500px);
        -webkit-filter: blur(500px);
        top: 10px;
      }
      .heading {
        background-image: linear-gradient(to right, #42b883 50%, #0ebbd2 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }

      .banner-image {
        @apply mr-16;
      }
      
      .hero3d{
        top: -15%;
        left: 45%;
      }
      .badge{
        top: -12%;
        right: 70%;
      }
      .right-image:hover{
        .basic{
          rotate: -3deg;
          transition-duration: 0.5s;
        }
        .hero3d{
          rotate: 3deg;
          transition-duration: 0.5s;
        }
        .badge{
          rotate: -3deg;
          transition-duration: 0.5s;
        }
      }
    }
  }
</style>