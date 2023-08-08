  <template>
  <div
    class="four-card bg-themelight-0 dark:bg-themedark-0"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
        data.VueReferenceCode == 'Card_Yspace'
        ? 'rxsection-y-space'
        : '',
        data.VueReferenceCode == 'Card_Bspace'
        ? 'rxsection-b-space'
        : '',
         data.VueReferenceCode == 'Card_Bspace' ? 'bg-opacitybg-25' :'bg-opacitybg-25 dark:bg-themedark-10 rxsection-y-space',
    ]"
  >
    <div class="container relative">
  <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md"
      ></div>
      <div
        class="row"
      >
        <div class="card-row mt-8" v-for="(item,i) in data.TitleContentList">
          <div
            class="card-bg bg-primary contentWhite dark:bg-themedark-70"
          >
            <!--<h3 class="para_lg">{{ item.Title }}</h3> !-->
            <div v-html="sTitles[i]"></div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins:[titleMixin],
  props: {
    data: Object,
  },
  data(){
      return {
        titleStyle : "h2",
        sTitleStyle:"h3_sm",
      }
    }
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
   
    .four-card{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  
  .four-card {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
    @apply text-center;
    .card-bg {
      @apply px-5 py-10  h-full;

      @screen lg {
        @apply py-12 px-4;
        
      }
      @media screen and (max-width: 1365px) and (min-width: 1024px) {
        @apply px-5;
      }
    }
    .card-row {
      @apply w-full  sxl:w-1/4 sm:w-1/2;
      padding: 0 0.938rem;
      .h3_sm{
        p{
          padding:0;
        }
      }
      p {
        @apply text-themelight-0;
      }
     
    }  
  }
}
</style>