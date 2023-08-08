<template>
  <div
    class="rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'SMS_GreyBG_LeftImage_5050List'
        ? 'left-img-5050list'
        : 'right-img-5050list',
      data.VueReferenceCode == 'SMS_GreyBG_RightImage_White'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : 'bg-themelight-10 dark:bg-themedark-70',
    ]"
  >
    <div class="container">
      <div class="row justify-center">
        <div
          class="left-con w-full px-4"
          :class="[
            data.VueReferenceCode == 'SMS_GreyBG_RightImage_fiftyColList'
              ? 'smd:w-1/2'
              : 'smd:w-7/12',
          ]"
        >
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="list_sm square_list listTwoCol"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div
          class="img-right px-4 w-full"
          :class="[
            data.VueReferenceCode == 'SMS_GreyBG_RightImage_fiftyColList'
              ? 'smd:w-1/2'
              : 'smd:w-5/12',
          ]"
        >
          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            alt="Clutch-Top-Software-Developers"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2",
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .left-img-5050list {
    .left-con {
      @apply smd:w-7/12 w-full smd:order-1;
      padding: 0 0.938rem;
      .listTwoCol {
        ul {
          @apply flex  flex-wrap;
          li {
            @apply md:w-1/2 w-full mb-0;
            &:before {
              top: 0.875rem;
              @apply border-primary;
            }
          }
        }
      }
    }
    .img-right {
      @apply smd:order-none smd:w-5/12 w-full px-4;
      img {
        max-width: 25rem;
        margin-top: 1.875rem;
        @apply mx-auto smd:ml-0 smd:mt-0 smd:max-w-full w-full;
      }
    }
  }
  .right-img-5050list {
    .left-con {
      .listTwoCol {
        ul {
          @apply flex flex-wrap;
          li {
            @apply md:w-1/2 w-full mb-0;
            &:before {
              top: 0.875rem;
              @apply border-primary;
            }
          }
        }
      }
    }
    .img-right {
      img {
        // max-width: 25rem;
        margin-top: 1.875rem;
        @apply mx-auto smd:mr-0 smd:mt-0 smd:max-w-full;
      }
    }
  }
}
</style>