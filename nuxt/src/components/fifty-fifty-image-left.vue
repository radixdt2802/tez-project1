<template>
  <div
    class="fifty-fifty-left rxsection-y-space bg-image-left"
    :class="{
      'bg-secondary dark:bg-themedark-70 contentWhite':
        data.VueReferenceCode == 'TCMWithTCL_imageleft',
      'bg-themelight-20 dark:bg-themedark-70':
        data.VueReferenceCode == 'TCMWithTCL_imageleft_BgTeal',
    }"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="rightcontent">
          <!--<h2>{{ data.Title }}</h2>-->
          <div v-html="title"></div>
          <div class="conetentgroup">
            <div class="infoblog" v-for="(item,i) in data.TitleContentList" :key="item.id">
              <!--<h3>{{ sTitles.Title }}</h3>-->
              <div v-html="sTitles[i]"></div>
              <div class="smd:text-themedark-10 text-themelight-0" v-if="item.LongText" v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 smd:text-themedark-0 text-themelight-0",
      sTitleStyle: "h3"
      
    }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .bg-image-left {
    @apply bg-no-repeat  bg-fixed bg-cover bg-center relative;
    &:before {
      content: "";
      height: 100%;
      position: absolute;
      transform: none;
      z-index: 0;
      width: 100%;
      @apply bg-opacitybg-60 top-0 left-0;
    }
    @screen smd {
      background-size: 50%;
      @apply bg-left;
      &:before {
        @apply hidden;
      }
    }
  }
  .fifty-fifty-left {
    .rightcontent {
      z-index: 1;
      padding: 0 0.938rem;
      @screen smd {
        max-width: 50%;
        flex: 0 0 50%;
        margin-left: 50%;
        padding: 0 0.938rem 0 3.688rem;
      }
      .conetentgroup {
        .infoblog {
          &:last-child {
            @apply mb-0;
          }
          @apply mb-10;
          p{
            @apply  text-themelight-0;

          }
          h3,.h3 {
            @apply  text-themelight-0;
            font-size: 1.25rem;
            line-height: 1.875rem;
            padding-bottom: 0.625rem;
            @screen xl {
              font-size: 1.5rem;
              line-height: 2.25rem;
            }
            @screen xxl {
              font-size: 1.625rem;
              line-height: 2.375rem;
            }
          }
          p {
            @apply pb-0;
            @screen md {
              line-height: 1.75rem;
            }
            @screen lg {
              @apply pb-0;
            }
          }
        }
      }
    }
  }
}
</style>
