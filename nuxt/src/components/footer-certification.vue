<template>
  <div class="imagefooter pt-20">
            <div class="pb-16 container">
                <img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_14_0f1b009f55.png" alt="">
            </div>
    <div class="flex flex-col lg:flex-row container w-full gap-8 lg:gap-0">
        <div class="lg:w-1/2">
            <div class="pb-4">
                <h2 class="text-white">The official certification of competence for the Vue.js Framework.</h2>
            </div>
            <div>
                <p class="text-gray-500">Reach out on Social Media</p>
                <div class="flex gap-4 pt-3">
                    <img class="hover:bg-green-400 p-3 bg-gray-600 rounded-full" src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_15_6af542ea51.png" alt="">
                    <img class="hover:bg-green-400 p-3 bg-gray-600 rounded-full" src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_16_deb2469e0d.png" alt="">
                    <img class="hover:bg-green-400 p-3 bg-gray-600 rounded-full" src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_17_76fad9bbda.png" alt="">
                    <img class="hover:bg-green-400 p-3 bg-gray-600 rounded-full" src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/untitled_18_fd5736deca.png" alt="">
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 lg:pl-12">
            <div class="flex gap-4 lg:gap-32">
                <div>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Steps to Certification</p></a>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Certificates</p></a>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Pricing</p></a>
                </div>
                <div>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Contact Us</p></a>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Terms & Conditions</p></a>
                    <a href="#" class="no-underline"><p class="text-gray-500 hover:text-green-500 no-underline">Privacy Policy</p></a>
                </div>
            </div>
        </div>
    </div>
    <div class="py-5 footer mt-16">
        <div class="flex flex-col lg:flex-row justify-between container">
            <div class="text-center lg:text-left">
            <p>Vue.js Certification <sup>TM</sup>  © Powered by <a class="font-semibold text-white no-underline" href="#">Vue School</a> in collaboration with <a class="font-semibold text-white no-underline" href="#">Vuejs.org</a></p>
            </div>
            <div>
                <p>BitterBrains Inc</p>
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
}
</script>

<style lang="scss">
@layer utilities {
  .card{
      background-color: rgb(37 37 41);
  }
  .imagefooter {
    background-color: black;
    h2{
            font-style: normal;
            background-image: linear-gradient(to right, #42b883 50%, #0ebbd2 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
    }
  }
    p{
      @apply text-gray-300 no-underline;
    }
    a{
        p{
            @apply no-underline;
        }
    }
    .footer{
        background: rgb(101,181,118);
background: linear-gradient(9deg, rgba(101,181,118,1) 0%, rgba(75,172,193,1) 55%);
    }
}
</style>