<template>
    <div class="anvrsry-footer-design bg-themelight-10 dark:bg-themedark-10 py-3 flex flex-wrap items-center">
        <div class="footer-design w-full">
             
        <div class="container-fluid flex flex-wrap justify-between  items-center px-8 md:px-32">
            <div class="social-media-icon w-full mb-3 md:mb-0 md:w-1/2 ">
                    <ul class="social-media flex justify-center md:justify-start">
                        <li  class="px-1 bg-primary"> <a target="_blank" href="https://www.facebook.com/radixweb" rel="nofollow noopener" title="Facebook" >
                            <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/facebook_black_white_54617a2f97_7c792627a8_79cbf912fa.svg'" >
                            </a></li>
                        <li  class="px-1 bg-primary"> <a target="_blank" href="https://twitter.com/radixweb" rel="nofollow noopener" title="Twitter" >
                            <img class="square" v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/twitter_black_white_85dddb97dd_5275eab4f5.svg'">
                            </a></li>
                        <li  class="px-1 bg-primary"> <a target="_blank" href="https://www.instagram.com/radixweb" rel="nofollow noopener" title="Instagram" >
                            <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/instagram_black_white_d3e6fe871a_e90ddf6fc0.svg'">
                            </a></li>
                        <li  class="px-1 bg-primary"> <a target="_blank" href="https://www.linkedin.com/company/radixweb" rel="nofollow noopener" title="Linkedin" >
                            <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/linkedin_black_white_434f03f742_d47be96907.svg'">
                            </a></li>
                        <li  class="px-1 bg-primary"> <a target="_blank" href="https://www.youtube.com/channel/UC0iY-yQ7tGEFK0GXGPIu9Dg" title="YouTube" rel="nofollow noopener">
                            <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/youtube_black_white_21726acea1_0be2b05223.svg'">
                            </a></li>
                    </ul>   
            </div>
            <div class="menu-list w-full md:w-1/2">
                <ul class="social-media text-themedark-0 flex justify-center md:justify-end">
                    <li > <tez-link class="text-secondary border-r border-themedark-0 dark:border-themelight-0 border-solid no-underline px-2 menu-link" to="/" title="Facebook" >Home</tez-link></li>
                    <li > <tez-link class="text-secondary border-r border-themedark-0 dark:border-themelight-0 border-solid no-underline px-2 menu-link" to="/insights" title="Twitter" >Insights</tez-link></li>
                    <li> <tez-link class="text-secondary border-r border-themedark-0 dark:border-themelight-0 border-solid no-underline px-2 menu-link" to="/contact-us" title="Instagram" >Contact Us</tez-link></li>  
                </ul>
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
    @layer utilities{
        .anvrsry-footer-design{
            .footer-design{
                .menu-list{
                    li{
                        &:last-child{
                            a{
                            @apply border-0;
                            }
                        }
                    }
                    a.menu-link{
                        &:hover{
                            @apply underline;
                            transition: 0.3s all ease;
                        }  
                        
                    }    
                }
                .social-media-icon{
                    li {
                        @apply mr-2 p-2
                    }
                    img {
                        @apply w-4 h-4 
                    }
                   
                }
            }
        }
       }
  </style>