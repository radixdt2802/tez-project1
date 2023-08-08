<template>
  <div class="technology-icons rxsection-b-space">
    <div class="container m-auto">
      <sectionHeading :data="data" />

      <div
        class="justify-center flex flex-wrap w-3/4 md:w-full xl:w-3/4 mx-auto"
        v-if="data.TitleContentMediaList"
        v-for="(item, index) in data.TitleContentMediaList"
        :key="index"
      >
        <div
          class="technologyBlock-item light-mode-image w-1/2 sm:w-1/3 md:w-1/5"
          v-for="key in item.ImageCollection"
          :key="key.id"
        >
          <tez-link v-if="key.caption" :to="key.caption" :title="key.name">
            <img
              v-rxlazy="key"
              :alt="key.alternativeText"
              :title="key.alternativeText"
              :width="key.width"
              :height="key.height"
            />

            <div class="technologyBlock-name">{{ key.name }}</div>
          </tez-link>
          <div v-else>
            <img
              v-rxlazy="key"
              :alt="key.alternativeText"
              :width="key.width"
              :height="key.height"
            />
            <div class="technologyBlock-name">{{ key.name }}</div>
          </div>
        </div>

        <div
          class="technologyBlock-item dark-mode-image w-1/2 sm:w-1/3 md:w-1/5"
          v-for="key in item.MultipleMedia"
          :key="key.id"
        >
          <tez-link :title="key.alternativeText" v-if="key.caption" :to="key.caption">
            <img
              v-rxlazy="key"
              :alt="key.alternativeText"
              :width="key.width"
              :height="key.height"
            />

            <div class="technologyBlock-name">
              {{ key.alternativeText }}
            </div>
          </tez-link>
          <div v-else>
            <img
              v-rxlazy="key"
              :alt="key.alternativeText"
              :width="key.width"
              :height="key.height"
            />
            <div class="technologyBlock-name">
              {{ key.alternativeText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
};
</script>

 <style lang="scss">
@layer components {
  .dark {
    .technology-icons {
      .light-mode-image {
        display: none;
      }
      .dark-mode-image {
        display: block;
      }
    }
  }
  .technology-icons {
    .light-mode-image {
      display: block;
    }
    .dark-mode-image {
      display: none;
    }

    @apply font-medium;
    a {
      @apply no-underline;
    }

    .technologyBlock-item {
      transition: 0.3s all ease-in-out;
      &:hover {
        box-shadow: 0rem 0rem 0.1875rem 0rem #dadada8c, 0rem 0rem 0.9375rem 0rem #dadada8c;
      }

      @apply p-1 text-center my-2 transition duration-500;
      img {
        @apply mx-auto;
        max-width: 3.4375rem;
        @screen sm {
          max-width: 5rem;
        }
        @screen lg {
          max-width: 4.688rem;
        }
      }
      .technologyBlock-name {
        @apply py-2 font-light;
      }
    }
  }
}
</style>