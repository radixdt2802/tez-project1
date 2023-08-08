<template>
    <div
      id="scroll"
      class="
        
        greatplace-video
        rxsection-y-space
        bg-contain bg-no-repeat bg-primary contentWhite beforeBlackDark relative
      "
      v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : { background: '#32beb1'}]"
    >
      <div class="container relative">
        <h2 class="text-center">{{ data.Title }}</h2>
        <div v-if="data.LongText" v-rxhtml="data.LongText" class="text-center para_md"></div>
        <div class="video-section t-space-40">
        <div class="embed-responsive embed-responsive-16by9 youtube-video">
              <iframe
                width="1280"
                height="720"
                :src="data.CTA"
                frameborder="0"
                rel="nofollow"
                class="embed-responsive-item"
              ></iframe>
            </div>
        </div>
      </div>
        <!-- <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="1280"
            height="720"
            :src="data.CTA"
            frameborder="0"
            class="embed-responsive-item"
          ></iframe>
        </div> -->
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
    .dark{
      .greatplace-video {
        .video-section{
        .youtube-video{
          box-shadow: 0.125rem 0 0.9375rem 0.0625rem rgb(255 255 255 / 45%);
        }
      }
      }
    }
    .greatplace-video {
      background-position: bottom center;
      .video-section{
        max-width: 81.0625rem;
        
        @screen smd{
        padding: 2.5rem 3.75rem 0 3.75rem;
        }
        margin: 0 auto;
        .youtube-video{
          /* height:40.9375rem;
          width: 72.8125rem; */
          background-position: bottom center;
          @apply bg-no-repeat bg-cover block mx-auto border-4 border-solid border-customcolor-98 dark:border-themelight-10 bg-customcolor-98 dark:bg-themelight-0 relative;
          box-shadow: 0.125rem 0 0.9375rem 0.0625rem rgb(3 255 240 / 45%);
        
          &:hover{
          opacity: 0.9;
          }
        
        }
      }
    }
  }
  </style>