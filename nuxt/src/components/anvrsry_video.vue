<template>
  <div
    id="scroll"
    class="
      anniversry-data
      anyersry-video
      rxsection-y-space
      bg-cover bg-no-repeat bg-center
    "
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : { background: '#32beb1'}]"
  >
    <div class="container-fluid">
      <h2 class="text-center mb-5" 
        :class="[data.VueReferenceCode == 'TCM_video_BGTeal' ? 'text-themelight-0':'',
                data.VueReferenceCode == 'TCM_video_BGTeal_Titleblack' ? 'text-themedark-0':'',]">
        {{ data.Title }}
      </h2>
      <div class="videostyle mx-auto">
      <div class="embed-responsive embed-responsive-16by9 border-customcolor-86  border-solid mx-auto">
        <iframe
          width="1280"
          height="720"
          :src="data.CTA"
          frameborder="0"
          class="embed-responsive-item"
          :title="data.Title"
          rel="nofollow"
        ></iframe>
      </div>
    </div>
    </div>
  </div>
</template>   
  <script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
  <style lang="scss">
@layer utilities {
  .anyersry-video {
    .videostyle{
      
      max-width: 48rem;
      padding: 0 1rem;
      @screen sxl{
        max-width: 56.25rem;
       
      }
      @screen xxl{
        max-width: 81.0625rem; 
        padding: 0 3.75rem;
      }
      .embed-responsive{
        @screen xxl{
          width: 65rem;
        }
        border-width: 0.375rem;
      }
    }
  }
}
</style>