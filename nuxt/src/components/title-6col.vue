<template>
  <div class="rxsection-y-space title-6col text-center">
    <div class="container">
      <div class="text-center h2">{{ data.Title }}</div>
      <div class="row t-space-60">
        <div
          class="md:w-2/12 sm:w-4/12 w-1/2 px-4 cursor-pointer"
          v-for="item in data.TitleContentMediaList"
          @click="anchor(item.CTA)"
          :title="item.Title"
        >
          <img
            class="mx-auto light-image"
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
          />
          <img
            class="mx-auto dark-image"
            v-rxlazy="item.HoverImage"
            :width="item.HoverImage.width"
            :height="item.HoverImage.height"
          />
          <p>{{ item.Title }}</p>
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
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .title-6col {
    .row {
      > div {
        &:nth-child(n + 4),
        &:nth-child(3) {
          margin-top: 1.875rem;
        }
        @screen sm {
          &:nth-child(3) {
            margin-top: 0;
          }
        }
        @screen md {
          &:nth-child(n + 4) {
            margin-top: 0;
          }
        }
      }
      img {
        max-width: 4.375rem;
        @screen smd {
          max-width: 5.625rem;
        }
        @screen sxl {
          max-width: 100%;
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
    .title-6col {
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