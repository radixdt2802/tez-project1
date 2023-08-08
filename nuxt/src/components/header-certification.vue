<template>
  <div class="main-header">
    <div class="tophead">
    <div class="flex justify-evenly container items-center">
      <div class="flex items-center gap-2">
        <div>
        <img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/flame_ffb5b478ab.svg" alt="">
        </div>
        <div>
          <p class="text-lg font-medium text-white"><em>Launch Offer</em></p>
        </div>
      </div>
      <div>
        <p class="font-semibold text-lg text-white">Buy now and be one of the <em> 1st certified Vue developers!</em></p>
      </div>
      <div>
        <p class="text-xs font-semibold text-white">TIME LIMITED OFFER</p>
      </div>
    </div>
    </div>
  <div class="navbar">
    <header>
      <nav
        class="px-4 lg:px-6 py-2 text-white bg-[#1a1a1a80] backdrop-blur-2xl"
      >
        <div
          class="flex flex-wrap justify-between lg:justify-evenly xl:justify-between items-center mx-auto max-w-screen-xl"
        >
          <a href="#" class="flex items-center">
            <img
              src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_14_0f1b009f55.png"
              class="mr-3 h-6 sm:w-12 sm:h-12"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex items-center">
            <a
              href="#"
              class="text-base text-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden xl:block no-underline hover:text-green-500"
            >Steps to Certification</a>
            <a
              href="#"
              class="text-base text-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden xl:block no-underline hover:text-green-500"
            >Certificates</a>
            <a
              href="#"
              class="text-base text-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden xl:block no-underline hover:text-green-500"
            >Pricing</a> 
            <a
              href="#"
              class="text-base text-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden xl:block no-underline hover:text-green-500"
            >Log In</a>
            <a
              href="#"
              class="text-base font-semibold text-black rounded-lg px-4 lg:px-7 py-2 lg:py-3 mr-2 hidden sm:block no-underline bg-green-500 filled-btn"
            >Pre-Order</a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  </div>
</div>
</template>
  
  <script>
export default {
  props: {
    data: Object
  },
  //...
  mounted() {
    const flowbiteCDN = document.createElement("script");
    flowbiteCDN.setAttribute(
      "src",
      "https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"
    );
    document.head.appendChild(flowbiteCDN);

    const dropDown = document.createElement("script");
    dropDown.setAttribute(
      "src",
      "https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"
    );
    document.head.appendChild(dropDown);
  }
  //...
};
</script>
  
<style>
@layer utilities {
  .navbar{
    background-color: transparent;
    backdrop-filter: blur(50px);
    color: white;
  }
  .tophead{
    --tw-gradient-from: #42203f;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(19, 10, 17, 8));
      background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }
  em{
    font-style: normal;
    background-image: linear-gradient(to right, #f863bd 20%, #4785fe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  .filled-btn{
      width: fit-content;
      margin-bottom: 0;
      background: #42b883;
      a{
        text-decoration: none;
        p{
          p{
            @apply p-0 text-base;
          }
        }
      }
    }
    .filled-btn:hover{
        background: linear-gradient(45deg, #42b883, #0ebbd2) border-box;
      }
      .main-header{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
      }
}
</style>