<template>
  <div
    :class="{
      'leader-ship-right-img':
        data.VueReferenceCode == 'LeadershipTeam_ImgRight',
      'leader-ship-left-img': data.VueReferenceCode == 'LeadershipTeam_ImgLeft',
    }"
  >
    <div class="container">
      <div class="row justify-center items-center lead-row">
        <div class="rxweb_lead-img">
          <img
            v-rxlazy="data.Image.url"
            :alt="data.Image.alternativeText"
            :width="data.width"
            :height="data.height"
          />
        </div>
        <div class="rxweb_lead-content">
          <img v-rxlazy="data.Icon" :width="data.width" :height="data.height" />
          <p class="divara_md para-quote">{{ data.ShortText }}</p>
          <h3 class="para_lg">{{ data.Title }}</h3>
          <p class="lead-type">{{ data.SubTitle }}</p>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div class="lead-social">
              <a :href="data.GuideURL" target="_blank" rel="nofollow noopener external">
                <img
                  v-rxlazy="data.HoverIcon"
                  :width="data.HoverIcon.width"
                  :height="data.HoverIcon.height"
                />
              </a>
              <a :href="data.NavURL" target="_blank" rel="nofollow noopener external">
                <img
                  v-rxlazy="data.HoverImage"
                  :width="data.HoverImage.width"
                  :height="data.HoverImage.height"
                />
              </a>
            
          </div>
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
  .leader-ship-left-img {
    @apply relative;
    padding-top: 3.75rem;
    .lead-row {
      margin-bottom: 1.875rem;
      .rxweb_lead-img {
        @apply w-full smd:w-6/12;
        padding: 0 0.938rem;
        img {
          max-width: 18.75rem;
          @apply mx-auto smd:mx-0;
          @screen md {
            max-width: 26.25rem;
          }
          @screen xl {
            @apply max-w-full;
          }
        }
      }
      .rxweb_lead-content {
        @apply w-full smd:w-6/12;
        padding: 0 0.938rem;
      }
      .para-quote {
        padding-bottom: 3.125rem;
      }
      .lead-social {
        img{
          @apply inline-block mx-4;
        }
        margin-bottom: 0.938rem;
        @apply flex flex-wrap mt-10;
      }
    }
  }
  .leader-ship-right-img {
    @apply relative;
    padding-top: 3.75rem;
    .lead-row {
      margin-bottom: 1.875rem;
      .rxweb_lead-img {
        @apply w-full smd:w-6/12 smd:order-1;
        padding: 0 0.938rem;
        img {
          max-width: 18.75rem;
          @apply mx-auto smd:mr-0;
          @screen md {
            max-width: 26.25rem;
          }
          @screen xl {
            @apply max-w-full;
          }
        }
      }
      .rxweb_lead-content {
        @apply w-full smd:w-6/12 smd:order-none;
        padding: 0 0.938rem;
      }
      .para-quote {
        padding-bottom: 3.125rem;
      }
      .lead-social {
        img{
          @apply inline-block mx-4;
        }
        margin-bottom: 0.938rem;
        @apply flex flex-wrap mt-10;
      }
    }
    .area-focuse-main {
      @apply font-semibold mt-6;
      p {
        padding-bottom: 1.125rem;
      }
      .area-chip {
        @apply border border-solid border-primary rounded inline-block;
        padding: 0.313rem 0.938rem;
        margin-right: 0.313rem;
        margin-bottom: 0.625rem;
      }
    }
  }
}
</style>