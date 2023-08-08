<template>
  <div class="project-success rxsection-t-space">
    <div class="container">
      <div class="h2">{{ data.Title }}</div>
      <div class="row rxsection-y-space relative">
        <div
          class="card_left cursor-pointer"
          @click="anchor(data.case_studies[0].NavURL)"
          :title="data.case_studies[0].Title"
        >
          <div>
            <div class="imageContainer">
              <div
                class="img-rel"
                v-bind:style="{
                  backgroundImage: 'url(' + data.case_studies[0].Image.url + ')',
                }"
              ></div>
              <div class="project-content">
                <h3 class="para_md sm:text-themelight-0">
                  {{ data.case_studies[0].Title }}
                </h3>
                <div v-if="data.case_studies[0].LongText" v-rxhtml="data.case_studies[0].LongText"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_right">
          <div class="row">
            <div
              class="card_wrap cursor-pointer"
              v-for="item in remainingItems"
            >
              <div @click="anchor(item.NavURL)" :title="item.Title">
                <div class="imageContainer">
                  <div
                    class="img-rel"
                    v-bind:style="{
                      backgroundImage: 'url(' + item.Image.url + ')',
                    }"
                  ></div>
                  <div class="project-content">
                    <h3 class="para_md sm:text-themelight-0">
                      {{ item.Title }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cta-btn btn btn_sm"
          v-html="$md.render(data.CTA ? data.CTA : '')"
          v-if="data.CTA"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data(){
    return {
    remainingItems:[]
  }
  }
  ,
  props: {
    data: Object,
  },
  computed:{
    
    remainingItem(){
      return this.data.case_studies.splice(1,data.case_studies.length) 
    }  
  },
  mounted(){
    this.remainingItems = [this.data.case_studies[1],this.data.case_studies[2]]
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .project-success {
    h2 {
      @apply text-center sm:text-left p-0;
    }
    .card_left {
      @apply smd:w-8/12 w-full px-4;
      > div {
        @apply inline-block relative h-full w-full no-underline;
        @screen smd {
          padding-bottom: 66%;
        }
        .imageContainer {
          @apply relative smd:absolute h-full w-full top-0 left-0;
        }
      }
    }

    .img-rel {
      padding-bottom: 66%;
      @apply relative w-full h-full bg-cover bg-no-repeat smd:pb-0 sm:block hidden;
      background-position: 50%;
      &:before {
        content: "";
        @apply absolute w-full h-full sm:block hidden opacity-50 left-0 top-0 bg-black transition-all duration-300 ease-in-out;
      }
      &:hover {
        &:before {
          @apply bg-opacitybg-50 opacity-75;
        }
      }
    }
    .card_right {
      @apply smd:w-4/12 w-full px-4 sm:mt-8 smd:mt-0;
      > div {
        > div {
          &:first-child {
            a {
              @apply border-t border-b border-solid border-opacitybg-25 dark:border-black;
            }
          }
        }
      }
      .project-content {
        max-height: 7.5rem;
        @screen sxl {
          max-height: 8.75rem;
        }
      }
      .card_wrap {
        @apply smd:w-full sm:w-1/2 w-full px-4;
        &:last-child {
          @apply smd:mt-6;
        }
        > div {
          @apply inline-block relative h-full w-full no-underline;
          @screen smd {
            padding-bottom: 66%;
          }
          .imageContainer {
            @apply relative smd:absolute h-full w-full top-0 left-0;
          }
        }
      }
    }
    .project-content {
      padding: 0.75rem 0.9375rem;
      @apply sm:absolute sm:text-themelight-0 relative sm:p-0 bg-themelight-10 dark:bg-themedark-80 sm:dark:bg-transparent sm:bg-transparent;
      p {
        @apply sm:text-themelight-0;
      }
      @screen sm {
        left: 0.9375rem;
        right: 0.9375rem;
        bottom: 0.9375rem;
      }
      @screen sxl {
        bottom: 1.875rem;
        left: 1.875rem;
        right: 1.875rem;
      }

      &:after {
        @apply absolute top-50 bg-no-repeat sm:hidden block;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg");
        right: 0.625rem;
        transform: translateY(-50%);
        content: "";
        width: 1.875rem;
        height: 0.75rem;
        background-size: 1.438rem;
      }
      h3 {
        width: 84%;
        @apply sm:w-full p-0;
      }
      p {
        @apply text-themelight-0 sm:block hidden;
      }
    }
    .cta-btn {
      @apply md:block hidden text-center mt-12 w-full;
    }
  }
}
</style>