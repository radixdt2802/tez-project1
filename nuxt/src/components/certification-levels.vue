<template >
  <div class="py-20 image">
    <div class="container">
      <div class="pb-12">
          <h2 class="text-white title text-center" v-html="$md.render(data.Title)"></h2>
          <div class="longtext text-white text-center pt-4 pb-16"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
        </div>
        <div>
      <div class="flex flex-col lg:flex-row justify-between w-full gap-12">
        <div class="card w-1/2 rounded-3xl" v-for="(item) in data.TitleContentMediaList">
        <div class="greencard" v-if="item.VueReferenceCode == 'Green_Gradient'" >
          <div class="greencard p-8 items-start gap-16" :class="{'mt-0' : item.VueReferenceCode == 'Green_Gradient'}">
            <div>
                <img class="pb-8 "
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <div>
                <h3 class=" text-white text4Xl" v-html="$md.render(item.Title)"></h3>
                <div>
                <div class="flex gap-4" >
                <div class="flex items-center gap-3 py-3">
                <div>   
                <img
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                />
                </div>
                <div>
                <p class="text-gray-500 text-sm" v-if="item.GuideURL" v-rxhtml="item.GuideURL"></p>
                </div>
                </div>
                <div class="flex items-center gap-3 py-3">
                <div>   
                <img
                v-if="item.HoverImage"
                v-rxlazy="item.HoverImage"
                :width="item.HoverImage.width"
                :height="item.HoverImage.height"
                />
                </div>
                <div>
                <p class="text-gray-500 text-sm" v-if="item.NavURL" v-rxhtml="item.NavURL"></p>
                </div>
                </div>
                </div>
                <div class="text-gray-300 longtext"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
              <div class="green-btn">
              <div v-html="$md.render(item.CTA ? item.CTA : '')" v-if="item.CTA" ></div>
              </div>
            </div>
        </div>
        </div>
        </div>
        <div v-else class="multi_component relative">
          <div class="pinkcard items-start gap-16 p-8" :class="{'mt-0' : item.VueReferenceCode == 'Pink_Gradient'}">
            <div>
                <img class="pb-8 "
                v-if="item.Icon"
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
              />
            </div>
            <div>
                <h3 class=" text-white text4Xl" v-html="$md.render(item.Title)"></h3>
                <div>
                <div class="flex gap-4" >
                <div class="flex items-center gap-3 py-3">
                <div>   
                <img
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                />
                </div>
                <div>
                <p class="text-gray-500 text-sm" v-if="item.GuideURL" v-rxhtml="item.GuideURL"></p>
                </div>
                </div>
                <div class="flex items-center gap-3 py-3">
                <div>   
                <img
                v-if="item.HoverImage"
                v-rxlazy="item.HoverImage"
                :width="item.HoverImage.width"
                :height="item.HoverImage.height"
                />
                </div>
                <div>
                <p class="text-gray-500 text-sm" v-if="item.NavURL" v-rxhtml="item.NavURL"></p>
                </div>
                </div>
                </div>
                <div class="text-gray-300 longtext"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
              <div class="pink-btn">
              <div v-html="$md.render(item.CTA ? item.CTA : '')" v-if="item.CTA" ></div>
              </div>
            </div>
        </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div> 
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
      sTitleStyle: "h3_sm dark:contentWhite pb-2"
    }
  }
};
</script>
  <style lang="scss">
  @layer utilities {
    .card{
      .greencard{
        border: 2px solid transparent;
      h3{
      &.text4Xl{
        p{
          @apply text-white text-left;
          em{
            font-style: normal;
            background-image: linear-gradient(to right, #42b883 50%, #0ebbd2 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
        }
      }
    }
    .greencard:hover{
        border-radius: 24px;
        background: linear-gradient(#252529, #252529) padding-box,
                    linear-gradient(45deg, #42b883, #0ebbd2) border-box;
        border: 2px solid transparent;
    }
    .green-btn{
        margin-top: 15px;
        width: fit-content;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 8px;
        background: linear-gradient(#252529, #252529) padding-box,
                    linear-gradient(45deg, #42b883, #0ebbd2) border-box;
        border: 2px solid transparent;
        p{
          @apply p-0;
        a {
          @apply no-underline text-sm font-semibold text-white p-0;
        }
      }
    }
    .green-btn:hover {
        width: fit-content;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-width: 2px;
        border-radius: 8px;
        border-color: transparent;
        cursor: pointer;
        background: linear-gradient(45deg, #42b883, #0ebbd2) border-box;
        p{
          @apply p-0;
        a {
          @apply no-underline text-sm font-semibold text-white p-0;
        }
      }
      }
    }
    .pinkcard{
      border: 2px solid transparent;
      h3{
      &.text4Xl{
        p{
          @apply text-white text-left;
          em{
            font-style: normal;
            background-image: linear-gradient(to right, #f864bd 50%, #4785fe 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
        }
      }
    }
    .pink-btn{
        margin-top: 15px;
        width: fit-content;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 8px;
        background: linear-gradient(#252529, #252529) padding-box,
                    linear-gradient(45deg, #f864bd, #4785fe) border-box;
        border: 2px solid transparent;
        p{
          @apply p-0;
        a {
          @apply no-underline text-sm font-semibold text-white p-0;
        }
      }
    }
    .pink-btn:hover {
        width: fit-content;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-width: 2px;
        border-radius: 8px;
        border-color: transparent;
        cursor: pointer;
        background: linear-gradient(45deg, #f864bd, #4785fe) border-box;
        p{
          @apply p-0;
        a {
          @apply no-underline text-sm font-semibold text-white p-0;
        }
      }
      }
    }
    .pinkcard:hover{
        border-radius: 24px;
        background: linear-gradient(#252529, #252529) padding-box,
                    linear-gradient(45deg, #f864bd, #4785fe) border-box;
        border: 2px solid transparent;
    }
    .button-vue{
      width: fit-content;
    }
    .button-vue p a{
      text-decoration: none;
    }
    .button-vue:hover{
      background: linear-gradient(45deg,#f864bd,#4785fe) border-box;
      border-color: transparent;
      border-radius: 0.5rem;
      inset: 0;
    }
    }
    .image {
      background-color: rgb(26 26 26/1);
  }
    .longtext{
      p{
        @apply text-gray-500;
      }
    }
  }
  </style>