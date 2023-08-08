<template>
    <div class="rxsection-y-space icon-tcm-list">
      <div class="container">
        <h2 class="text-center">{{ data.Title }}</h2>
        <div class="row t-space-60">
            <div class="content w-full  bgCard-row  smd:w-1/2" v-for="item in data.TitleContentMediaList">
                <div class="bgCardspace cursor-pointer">
                    <div class="icon-title flex flex-wrap items-center">
                        <div class="ivon-area mr-6">
                            <img v-rxlazy="item.Icon" :width="item.Icon.width" :height="item.Icon.height" />
                        </div>
                        <div class="bgCard-check mb-0">
                            <h3 class="para_lg">{{ item.Title }}</h3>
                        </div>
                    </div>
                    <div class="bgcontent">
                        <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
                        <div class="multiicon flex flex-wrap mt-5">
                            <div class="text-center iconcollection mb-2" v-for="key in item.ImageCollection">
                                <div class="iconlist w-auto mx-auto">
                                    <img v-rxlazy="key" :width="key.width" :height="key.height" :alt="key.alternativeText" />
                                </div>
                                <span class="text-xs mt-auto w-full">{{ key.caption }}</span>
                            </div>
                        </div>
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
    },
  };
  </script>
    <style lang="scss">
  @layer utilities {
    
    .icon-tcm-list {
     
      .bgCard-check {
        @apply relative flex items-center lg:items-start;
        padding: 0.313rem 0;
        margin-bottom: 0.625rem;
  
        h3:not(.noleftspace) {
          @apply p-0;
         
        }
       
      }
      .bgCard-row {
        .bgCardspace {
          @apply p-5 bg-themelight-0 dark:bg-themedark-10 border-solid border-b-4 border-t border-r border-l h-full;
          border-bottom-color : #31bbae;

          @screen smd {
            padding: 2.1875rem 1.875rem;
          }
          @screen sxl {
            padding: 2.5rem 2.1875rem;
          }
          @screen xl {
            padding: 3.125rem 5rem 3.125rem 2.8125rem ;
          }
          .bgcontent {
            .multiicon {
              .iconlist {
                padding: 0.4375rem;
                width: 3.375rem;
                height: 3.375rem;
                @apply bg-themelight-0 border border-solid flex items-center;
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
          @apply mt-10;
        }
        @screen sm {
          &:nth-child(n + 4),
          &:nth-child(2),
          &:nth-child(3) {
            @apply mt-10;
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