<template>
  <div class="rxsection-y-space three-black-col">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div
        class="text-center mx-auto para_md "
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div v-if="data.LongText"></div>
      <div class="row head-space hidden md:flex md:flex-wrap md:mt-7">
        <div class="bgCard-row md:w-1/3 md:px-4 flex contentWhite" v-for="item in data.TitleContentList">
          <div class="bgCardspace">
            <button class="career_bttns smd:py-5 smd:px-11 sxl:px-24 md:p-5 bg-secondary border-b-0 md:border-b-4 md:border-b-solid md:border-primary" :title="item.Title">
              <div class="h3" v-rxhtml="item.LongText"></div>
            </button>
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
};
</script>
<style lang="scss">
@layer utilities {
  .three-black-col {
    .head-space {
      .bgCard-row {
        .bgCardspace {
            .career_bttns {
              @screen md {
                min-height: 13.75rem;
              }
              @screen smd {
                min-height: 17.5rem;
              }
              @screen sxl {
                min-height: 20rem;
              }
            }
          }
        }
        button{
          a{
            @apply no-underline;
          }
        }
      }
    }
  }
</style>
