<template>
    <div class="author-area" >
        <div class="author-overlay">
            <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/author_bg_pattern_afb636783a.png'" width="1920" height="185" alt="bacimage">
        </div>
        <!-- <div class="author-overlay" v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',]"></div> -->
        <div class="container">
            <div class="flex flex-wrap">
                <div class="profile-image">
                    <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Abhishek_af0615b27e.png'" width="150" height="150" alt="profile pic" class="rounded-full">
                    <!-- <img
                        class="rounded-full"
                        loading="lazy"
                        v-rxlazy="data.Image"
                        :width="data.Image.width"
                        :height="data.Image.height"
                    /> -->
                </div>
                <div class="content-area">
                    <h2 class="text-themelight-0">Abhishek Biswas</h2>
                    <h3 class=" text-themelight-0">Content Writer</h3>
                    <p class=" text-themedark-0">Abhishek is a listener who speaks less and writes more. You will find him researching stuff related to technology and custom software development. If given a choice, he will choose Pizza over anything. He’s connected with Radixweb and loves curating content and marketing campaigns. He has stage fear thus prefers “Stealth-mode” conversation.</p>
                </div>
            </div>
        </div>
    </div>
  </template>
  <script type="text/javascript">
  import mountedMixin from "../mixins/mounted.mixin";
  export default {
    
    props: {
      data: Object,
    },
  };
  </script>
  <style lang="scss">
  @layer utilities {
    .author-area {
        .author-overlay{
           
        }
    }
  }
  </style>