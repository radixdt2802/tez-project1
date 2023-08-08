<template>
  <div
    class="rxsection-y-space two-col-iconlist"
    :class="[
      data.VueReferenceCode == 'Title_Blog_IconList_Bgwhite'
        ? 'bg-themelight-0 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'Title_Blog_IconList'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
    ]"
  > 
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="text-center mx-auto para_md smd:w-11/12 w-full"
      ></div>
      <div class="row t-space-60">
        <div
          class="bgCard-row"
          v-for="item in data.TitleContentMediaList"
          @click="anchor(item.CTA)"
          :title="item.Title"
        >
          <div
            class="bgCardspace cursor-pointer border-solid"
            :class="[
              data.VueReferenceCode == 'Title_Blog_IconList_Bgwhite'
                ? 'bg-themelight-0 dark:bg-themedark-0 '
                : '',
              data.VueReferenceCode == 'Title_Blog_IconList'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
            ]"
          >
            <div class="bgCard-check mb-0">
              <h3 class="para_lg">{{ item.Title }}</h3>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
              <div class="multiicon flex flex-wrap mt-5">
                <div
                  class="text-center iconcollection mb-2 light-image"
                  v-for="key in item.ImageCollection"
                >
                  <div class="iconlist w-auto mx-auto">
                    <img
                      v-rxlazy="key"
                      :width="key.width"
                      :height="key.height"
                      :alt="key.alternativeText"
                    />
                  </div>
                  <span class="text-xs mt-auto w-full">{{ key.caption }}</span>
                </div>
                <div
                  class="text-center iconcollection mb-2 dark-image"
                  v-for="key in item.MultipleMedia"
                >
                  <div class="iconlist w-auto mx-auto">
                    <img
                      v-rxlazy="key"
                      :width="key.width"
                      :height="key.height"
                      :alt="key.alternativeText"
                    />
                  </div>
                  <span class="text-xs mt-auto w-full">{{ key.caption }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          class="bgCard-row"
          v-for="item in data.TitleContentMediaList"
          
        >
          <div
            class="bgCardspace cursor-pointer border-solid"
            :class="[
              data.VueReferenceCode == 'Title_Blog_IconList_Bgwhite'
                ? 'bg-themelight-0 dark:bg-themedark-0 '
                : '',
              data.VueReferenceCode == 'Title_Blog_IconList'
                ? 'bg-themelight-10 dark:bg-themedark-70'
                : '',
            ]"
          >
            <div class="bgCard-check mb-0">
              <h3 class="para_lg">{{ item.Title }}</h3>
            </div>
            <div class="bgcontent">
              <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
              <div class="multiicon flex flex-wrap mt-5">
                <div
                  class="text-center iconcollection mb-2 light-image"
                  v-for="key in item.ImageCollection"
                >
                  <div class="iconlist w-auto mx-auto">
                    <img
                      v-rxlazy="key"
                      :width="key.width"
                      :height="key.height"
                      :alt="key.alternativeText"
                    />
                  </div>
                  <span class="text-xs mt-auto w-full">{{ key.caption }}</span>
                </div>
                <div
                  class="text-center iconcollection mb-2 dark-image"
                  v-for="key in item.MultipleMedia"
                >
                  <div class="iconlist w-auto mx-auto">
                    <img
                      v-rxlazy="key"
                      :width="key.width"
                      :height="key.height"
                      :alt="key.alternativeText"
                    />
                  </div>
                  <span class="text-xs mt-auto w-full">{{ key.caption }}</span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
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
      titleStyle:"h2 text-center",
		  sTitleStyle: "h3_sm pb-2",
		}
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
  .dark {
    .two-col-iconlist {
      .bgCard-row {
        .bgCardspace {
          border-color: #4c4c4c #4c4c4c #31bbae;
        }
      }
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .rxsection-y-space {
    @screen xsm {
      padding: 3.75rem 0;
    }
    @screen md {
      padding: 5.25rem 0;
    }
  }
  .two-col-iconlist {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    .para_md {
      .t-space-60 {
        @screen lg {
          padding-top: 2.5rem;
        }
      }
    }
    .bgCard-check {
      @apply relative flex items-center lg:items-start;
      padding: 0.313rem 0;

      h3:not(.noleftspace) {
        @apply p-0;
        @screen smd {
          font-size: 1.375rem;
          line-height: 2rem;
        }
        @screen xl {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen xxxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }
      p {
        @screen xsm {
          font-size: 1.063rem;
          @apply leading-7;
        }
        @screen sm {
          @apply text-lg;
          line-height: 1.875rem;
        }
      }
    }
    .bgCard-row {
      .bgCardspace {
        @apply p-5  h-full;
        border-width: 0.063rem 0.063rem 0.25rem;
        border-color: #f5f5f5 #f5f5f5 #31bbae;
        @screen smd {
          padding: 2.1875rem 1.875rem;
        }
        @screen sxl {
          padding: 2.5rem 2.1875rem;
        }
        @screen xl {
          padding: 3.125rem 2.8125rem;
        }
        .bgcontent {
          .multiicon {
            .iconlist {
              padding: 0.4375rem;
              width: 3.375rem;
              height: 3.375rem;
              @apply bg-themelight-0 dark:bg-themedark-0 dark:border-themedark-0 border border-solid flex items-center;
              border-color: #e8e8e8;
            }
            > div:not(:last-child) {
              margin-right: 1.25rem;
            }
          }
          .iconcollection {
            &:hover {
              transform: translateY(-5px);
              transition: 0.5s all ease;
            }
          }
        }
      }
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
          @apply mt-8;
        }
      }
    }
    @screen smd {
      .bgCard-row {
        @apply w-1/2 h-auto;

        &:nth-child(1),
        &:nth-child(2) {
          @apply mt-0;
        }
      }
    }
  }
}
</style>