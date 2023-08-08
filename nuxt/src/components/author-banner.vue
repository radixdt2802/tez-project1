<template>
   <div class="author-area ">
        <div class="author-overlay bg-secondary bg-cover beforeDark relative">
          
            <img :src="banner" width="1920" height="185" alt="backimage" class="h-full object-cover">
         
        </div>  
       
        <div class="container relative">
          <div class="flex-col smd:flex smd:flex-row cont-block items-start">
            
              <img :src="[data['dynamicResult'][0].Image.url]" width="150" height="150" alt="profile pic" class="rounded-full box-content mx-auto">  
           
            <div class="content-area smd:ml-4 text-center smd:text-left">
              <h1 class="smd:text-themelight-0 text-themedark-0 dark:text-themelight-0 h3 p-0">{{data['dynamicResult'][0].Name}}</h1>
              <div class=" smd:text-themelight-0 text-themedark-0 dark:text-themelight-0 p-0">{{data['dynamicResult'][0].Designation}}</div>
              <div class="author-content mt-8">
                <p class=" text-themedark-0">{{data['dynamicResult'][0].ShortText}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import staticImg from '../mixins/staticimg.mixin';

export default {
  mixins: [staticImg],
  
  props: {
    data: Object,
  },
  methods: {
    scroll(data) {
      document.getElementById(data).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss">
  @layer utilities {
    .author-area {
      .cont-block{
        margin-top: -5.625rem;
        
          img{
            border: 0.375rem solid #ffffff;
            @screen md{
            border: 0.75rem solid #ffffff;
            }
          
          }
        
      }
      .author-overlay{
        height:11.5625rem;
      }
      .container{
        @screen sxl{
          width: 76.875rem;
          max-width: 100%;
          @apply px-8 ;
        }
        @screen xl{
          @apply px-0;
        }
      }
    }
  }
  </style>