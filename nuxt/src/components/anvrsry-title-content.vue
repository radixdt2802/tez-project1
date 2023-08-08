<template>
    <div id="scroll" class="rxsection-y-space anniversry-data anyersry-con-bgimage bg-contain " 
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',]">
      <div class="container">
   
        <div class="mx-auto content-outline">
          <h1 class="h2">{{ data.Title }}</h1>
          <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor text-center"></div>
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
          .anyersry-con-bgimage{
              /* apply xl:bg-no-repeat xl:bg-cover xl:bg-none xl:bg-center xl:relative; */
              .content-outline{
                max-width: 78.75rem;
                h1{
                  @apply mx-auto text-center text-customcolor-96;
                  max-width:61.25rem;
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
              .listanchor{
                width: 100%;
              }
          }
      }
  </style>
