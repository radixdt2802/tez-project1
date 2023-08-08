<template>
  <div class="rxsection-y-space three-icon-list">
    <div class="container">
      <div class="heading-style text-center">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="row t-space-40">
        <div
          class="bgCard-row"
          v-bind:class="{ 'cursor-pointer': item.CTA }"
          @click="anchor(item.CTA)"
          v-for="item in data.TitleContentMediaList"
        >
          <div class="Bg-card" :title="item.Title">
            <img
              class="light-image"
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              class="dark-image"
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
           <h3 class="para_lg">{{ item.Title }}</h3>
            <!-- <div v-html="sTitles[i]"></div> -->
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
  methods: {
    anchor(value) {
      if (value) {
        return this.$tezRouter.push(value);
      } else {
        return null;
      }
    },
  },
     data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .three-icon-list {
    .bgCard-row {
      @apply smd:w-4/12 md:w-6/12 w-full px-4;
      &:nth-child(n + 4),
      &:nth-child(2),
      &:nth-child(3) {
        @apply mt-10;
      }
      @screen md {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }
      .Bg-card {
        @apply h-full text-center py-10 px-8 border-solid;
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5;
        img {
          padding-bottom: 1.375rem;
          @apply mx-auto;
        }
        h3 {
          @apply xl:pb-3 p-0;
          @screen smd {
            font-size: 1.375rem;
            @apply leading-8;
          }
          @screen xl {
            @apply text-2xl leading-9;
          }
          @screen xxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
        }
      }
    }
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
  }
  .dark {
    .three-icon-list {
      .Bg-card {
        border-color: #4c4c4c #4c4c4c #31bbae;
      }
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>