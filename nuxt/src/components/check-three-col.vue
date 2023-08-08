<template>
  <div
    class="rxsection-b-space rxsection-y-space t-three-check"
    :class="[
      data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal'
        ? 'bg-themelight-20 dark:bg-themedark-0'
        : '',
    ]"
  >
    <div class="container">
      <!-- <div v-if="data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal'" class="text-left" v-html="title"></div> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center lg:w-11/12 para_md mx-auto"
        :class="[
          data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal'
            ? ' text-left'
            : 'text-center mx-auto',
        ]"
      ></div>
      <div class="row t-space-60">
        
        <div
          class="bgCard-row"
          v-for="(item,i) in data.TitleContentMediaList"
          :key="item"
        >
          <div
            :class="{
              'bgCard-dot': data.VueReferenceCode == 'TCWithTCML_3Content',
              'bgCard-check':
                data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal',
              'bgCard-check':
                data.VueReferenceCode == 'TCWithTCML_3Content_Check',
            }"
          >
            <div class="para_lg">
              <!-- <img
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                class="iconLeft"
              />  -->
              <div class="flex items-center">
                  <!-- mr-4 -->
                <div
                  class="" 
                  v-if="data.VueReferenceCode != 'TCWithTCML_3Content'"
                >
                  <img
                    v-if="item.Icon"
                    :width="item.Icon.width"
                    :height="item.Icon.height"
                    v-rxlazy="item.Icon"
                    :class="[
                      data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal'
                        ? 'lightIcon mr-4'
                        : 'iconLeft mr-4',
                    ]"
                  />
                  <img
                    v-if="
                      item.HoverIcon &&
                      data.VueReferenceCode == 'TCWithTCML_3Content_bgTeal'
                    "
                    class="darkIcon mr-4"
                    :width="item.HoverIcon.width"
                    :height="item.HoverIcon.height"
                    v-rxlazy="item.HoverIcon"
                  />
                </div>
                <!-- {{sTitles}} -->
                <div v-html="sTitles[i]"></div>
              </div>
            </div>
            <!-- <div class="flex items-start">
              <img
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                class="iconLeft mr-4"
              />
              <h3 class="para_lg ctaLink" v-html="$md.render(item.CTA)"></h3> 
            </div> -->
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-center",
      sTitleStyle : "h3_sm",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .t-three-check {
      .darkIcon {
        @apply block;
      }
      .lightIcon {
        @apply hidden;
      }
    }
  }
  .t-three-check {
    .darkIcon {
      @apply hidden;
    }
    .lightIcon {
      @apply block;
    }
    .bgCard-check {
      @apply relative;
      padding-left: 2.375rem;
      div.customClass {
        @apply xl:pb-3 p-0;
      }
      .iconLeft {
        @apply absolute left-0 h-6;
        width: 1.4375rem;
        top: 0.188rem;
        @screen lg {
          top: 0.438rem;
        }
      }
    }
    .bgCard-dot {
      @apply h-full;
      padding-left: 3.125rem;
      div.customClass {
        @apply relative;
        &:before {
          content: "";
          @apply bg-primary rounded-md absolute;
          width: 0.625rem;
          height: 0.625rem;
          box-shadow: 0 0 0 0.313rem #31bbae4d;
          top: 0.625rem;
          @screen lg {
            top: 0.8125rem;
          }
          left: -2.25rem;
        }
      }
    }
    .bgCard-row {
      @apply px-4 w-full;

      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-8;
      }
      @screen sm {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-10;
        }
      }
      h3{
        p{
          @apply py-0;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        @apply w-1/3;
        &:nth-child(3),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>
