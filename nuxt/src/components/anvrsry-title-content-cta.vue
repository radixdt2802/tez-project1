<template>
    <div id="scroll" class="rxsection-y-space anniversry-data anyersry-con-cta bg-contain " 
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',]">
      <div class="container">
   
        <div class="mx-auto content-outline text-center">
          <h2>{{ data.Title }}</h2>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor text-center"></div>
          <div v-if="data.CTA" v-html="$md.render(data.CTA)" class=" anyvrsry-btn text-center"></div>
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
          .anyersry-con-cta{
            @apply bg-none;
            
             
              .content-outline{
                max-width: 78.75rem;
                h2{
                  @apply mx-auto text-center text-customcolor-96;
                 
                }
                .anyvrsry-btn{
                    @apply inline-block max-w-full;
                    width: auto;
                    margin-top: 1.875rem;
                    padding: 0.625rem 1.875rem;  
                    border-radius: 2.625rem;
                    transition: all .3s ease;
                    background: #23e6da;
                    &:hover{
                        @apply bg-customcolor-96;
                        cursor: url("https://d2ms8rpfqc4h24.cloudfront.net/aboutus_man_hours_48105c227b.svg") 12 12 ,auto;
                    }
                    &:hover a{
                        @apply text-themelight-0;
                    }
                    p{
                      @apply p-0;
                      a{
                          @apply no-underline uppercase font-semibold text-customcolor-96;
                          cursor: url("https://d2ms8rpfqc4h24.cloudfront.net/aboutus_man_hours_48105c227b.svg"),auto; 
                         
                      }
                    }
                    @screen sm{
                      padding: 0.75rem 3.25rem;
                      margin-top: 2.25rem;
                    }
                    @screen smd{
                      padding: 1rem 3rem;
                      
                    }
                    @screen sxl{
                      paddong: 0.875rem 3rem;
                      margin-top: 2.875rem;
                      
                    }
                    @screen xxl{
                      padding: 1.0625rem 3.625rem;
                     
                    }
                }
                .listanchor{

                  width: 100%;
                }
              }
              &:after{
                opacity: .7;
                background-size: 100%;
                background-position: 100% 85%;
                left: auto;
                right: 0;
                height: 100%;
                width: 100%;
                bottom: 0;
                top: auto;
                background-image: url('https://d2ms8rpfqc4h24.cloudfront.net/realigning_bg_679f454d01.jpg');
                position: absolute;
                content: " ";
                z-index: -1;
              }
          }
      }
  </style>