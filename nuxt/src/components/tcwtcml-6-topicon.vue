<template>
  <div
    class="rxsection-y-space levelcomp"
    :class="{
      'bg-themelight-10 dark:bg-themedark-70':
      data.VueReferenceCode == 'TCWithTCML_6Box_IconTop_Light',
      'bg-secondary dark:bg-themedark-70 contentWhite':
        data.VueReferenceCode == 'TCWithTCML_6Box_IconTop_Dark',
    }"
  >
    <div class="container">
      <div class="w-full mx-auto text-center">
        <div v-html="title"></div>
        <p class="para_md pb-5 smd:pb-8 dark:text-themedark-75" v-if="data.SubTitle">
          {{ data.SubTitle }}
        </p>
        <p class="para_md dark:text-themedark-75" :class="{'font-bold': data.VueReferenceCode == 'TCWithTCML_6Box_IconTop_Light',}"
         v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md"
        ></div>
      </div>
      <div class="row card_structure">
        <div
          class="card_design mt-6 smd:mt-10 sxl:mt-12"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div
            class="back_circle"
            :class="{
              'bg-themelight-0 dark:bg-themedark-0':
              data.VueReferenceCode == 'TCWithTCML_6Box_IconTop_Light',
              'border-primary dark:border-themedark-65 border':
                data.VueReferenceCode == 'TCWithTCML_6Box_IconTop_Dark',
            }"
          >
            <img
              v-if="item.Icon"
              class="mx-auto light-icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <img
              v-if="item.HoverIcon"
              class="mx-auto dark-icon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
            />
          </div>
          <!-- <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3>
          <h3 class="h3_sm" v-if="item.CTA" v-html="$md.render(item.CTA)"></h3> -->
          <div v-html="sTitles[i]"></div>
          <div
            v-if="item.LongText"
            v-rxhtml="item.LongText"
            class="three-cont"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  components: {
  },
  props: {
    data: Object,
  },
  data(){
		return {
      titleStyle:"h2",
		  sTitleStyle: "h3_sm pb-2"
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .h3_sm {
    p {
      @apply py-0;
    }
  }
  .dark{
    .levelcomp{
      .dark-icon{
        @apply block;
      }
      .light-icon{
        @apply hidden;
      }
    }
  }
  .levelcomp {
    .dark-icon{
        @apply hidden;
      }
      .light-icon{
        @apply block;
      }
    .card_design:not(:last-child) {
      @apply mb-10;
    }
    .card_structure {
      padding-right: 0.93rem;
      padding-left: 0.93rem;
      @screen lg {
        padding-right: 0;
        padding-left: 0;
      }
    }

    @screen sm {
      .card_design {
        .three-cont {
          p {
            font-size: 1.06rem;
            line-height: 1.75rem;
          }
        }
      }
    }
    @screen smd {
      .card_design {
        @apply px-4;
      }
    }
    .card_design {
      @apply w-full md:w-1/2 smd:w-1/3 text-center;
      .back_circle {
        @apply w-20	h-20 rounded-full text-center mx-auto flex mb-6;
        img {
          width: 2.18rem;
        }
      }
      @screen lg {
        padding-right: 0.938rem;
        padding-left: 0.938rem;
      }

      @screen xl {
        .three-cont {
          padding: 0.93rem;
          p {
            @apply p-0;
          }
        }
      }
      @screen md {
        .back_circle {
          width: 5.37rem;
          height: 5.37rem;
          img {
            width: 2.5rem;
          }
        }
        .three-cont {
          p {
            font-size: 1.125rem;
            line-height: 2rem;
          }
        }
      }
      @screen smd {
        .back_circle {
          @apply w-24 h-24;
          img {
            width: 3.125rem;
          }
        }
        .card_design:not(:last-child) {
          @apply mb-0;
        }
        .card_design:not(:last-child) {
          @apply mb-0;
        }
      }
    }
  }
}
</style>