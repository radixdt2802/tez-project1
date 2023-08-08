<template>
  <div class="rxsection-y-space topics">
    <div class="container">
      <div class="h3 text-center explore-title mb-4">{{data.Title}}</div>
      <div class="text-center explore-subtitle mb-6 overflow-hidden" v-if="data.LongText" v-rxhtml="data.LongText"></div>
      <div class="row topic-list">
        <div class="px-4 explore-topis-list" v-for="item in data.TitleContentList" :key="item.id">
          <div
            class="d-flex align-items-center justify-content-between explor-link cursor-pointer"
            @click="anchor(item.CTA)" :title="item.Title"
          >
            {{item.Title}}
            <div class="icon-style">  
              <!-- <img
                class="normal-image"
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/teild_right_arrrow_svg_9ca65cb2f5.svg'"
                width="11"
                height="18"
                alt="Arrow Right"
              /> 
              <img
                class="hover-image"
                v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/white_right_arrow_52ad61abe4.svg'"
                width="11"
                height="18"
                alt="Arrow Right"
              /> -->
            </div>
          </div>
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
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  }
};
</script>
<style lang="scss">
@layer utilities {
  .topics {
    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
      @screen xsm {
        font-size: 1rem;
      }
      @screen smd {
        font-size: 1.25rem;
      }
      overflow: visible;
    }
    h2 {
      @apply pb-0;
      font-size: 1.25rem;
      line-height: 1.5rem;
      @screen xsm {
        font-size: 1.625rem;
      }
      @screen smd {
        font-size: 1.875rem;
      }
    }
    .topic-list {
      margin-top: 0.938rem;
      .explore-topis-list {
        @apply w-full;
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 0.938rem;
        }

        @screen md {
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4),
          &:nth-child(3) {
            margin-top: 2.188rem;
          }
        }
        @screen smd {
          &:nth-child(3),
          &:nth-child(2) {
            @apply mt-0;
          }
          &:nth-child(n + 4) {
            margin-top: 2.188rem;
          }
        }

        @screen md {
          @apply w-1/2;
        }

        @screen smd {
          @apply w-1/3;
        }

        .explor-link {
          @apply no-underline w-full font-poppins font-semibold flex text-black justify-between items-center bg-themelight-10 dark:bg-themedark-40 dark:text-themedark-75;
          font-size: 0.875rem;
          padding: 0.938rem;
          @screen sxl {
            font-size: 1rem;

            padding: 1.188rem 1.875rem;
          }
          @screen xl {
            font-size: 1.125rem;
          }
          .icon-style {
            @apply inline-block;
            .normal-image{
              @apply block;
              &:hover{
                @apply hidden;
              }
            }
            .hover-image{
              @apply hidden;
              &:hover{
                @apply block;
              }
            }
          }
          &:hover {
            @apply bg-primary text-white;
            transition: 0.3s ease all;
          }
        }
      }
    }
  }
}
</style>