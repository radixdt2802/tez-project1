<template >
  <div
    class="tethersection rxsection-y-space bg-cover bg-no-repeat bg-fixed beforeDark relative"
    v-bind:style="[
      data.BGImage ? { backgroundImage: 'url(' + data.BGImage.url + ')' } : '',
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container relative">
      <div class="tether-head">
        <img
          v-rxlazy="data.Icon"
          class="hidden md:inline-block align-top"
          :width="data.Icon.width"
          :height="data.Icon.height"
          :alt="data.Icon.alternativeText"
        />
        <!-- <h2 class="text-white inline-block">{{ data.Title }}</h2>-->
        <div class="inline-block" v-html="title"></div>
      </div>
      <div
        class="tether-para para_md"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="tether-icon mt-8">
        <div class="tether-icon-list row">
          <div
            class="service-wrap"
            v-for="item in data.ImageCollection"
            :key="item.id"
          >
            <div class="service-image">
              <tez-link :to="item.caption" :title="item.alternativeText">
                <img
                  v-rxlazy="item"
                  :width="item.width"
                  :height="item.height"
                  :alt="item.alternativeText"
                />
              </tez-link>
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
      titleStyle : "h2 text-white",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .tethersection {
    .tether-para {
      p {
        @apply text-themelight-0;
      }
    }
    .tether-head {
      @screen md {
        img {
          width: 2.375rem;
          height: 2.375rem;
          margin-right: 0.62rem;
        }
      }
      @screen smd {
        img {
          width: 3.25rem;
          height: 3.25rem;
          margin-right: 1.25rem;
        }
      }
      @screen xxxl {
        img {
          width: 3.625rem;
          height: 3.625rem;
          margin-right: 2rem;
        }
      }
    }
    @screen lg {
      .service-wrap:hover .service-image {
        &:hover {
          box-shadow: 0 0 6.25rem 0.187rem rgba(180, 180, 180, 0.5),
            0 0 0.5rem rgb(0, 0, 0);
          border-radius: 0.5rem;
        }
        transition: all ease-in-out 0.4s;
      }
    }
    .tether-icon {
      @apply justify-center;
      .tether-icon-list {
        @apply sm:items-center;
        @screen sm {
          @apply items-end;
        }
        .service-wrap {
          @apply w-2/4 smd:w-1/4;

          .service-image {
            padding: 0.938rem;
            height: 7.875rem;
            @apply flex items-center justify-center;
            @screen xsm {
              padding: 0 0.625rem;
            }
            @screen smd {
              padding: 0 0.938rem;
            }
            @screen sxl {
              padding: 0 1.563rem;
            }
            img {
              height: auto;
              @apply w-auto mx-auto;
              @screen xsm {
                @apply h-auto;
              }
            }
          }
        }
      }
    }
  }
}
</style>