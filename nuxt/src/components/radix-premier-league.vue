<template>
  <div
    class="bg-cover overflow-hidden rxsection-b-space"
    v-bind:style="[
      data.Image
        ? {
            backgroundImage: 'url(' + data.Image.url + ')',
          }
        : '',
    ]"
  >
  <kinesis-container>
      <div class="RPL_banner contentWhite flex flex-wrap">
        <div class="lg:px-16 lg:pt-16 px-2 pt-8 title w-full lg:w-6/12">
          <h1 class=" lg:pt-10 pb-0 radix lg:text-6xl text-4xl">Radix <span class="uppercase block h1 pb-0">PREMIER LEAGUE</span> 2022</h1>
          <div class="">
            <h2 class=" saturday pb-0">Saturdays are for</h2>
            <h2 class="h3_sm">
              FUN, SPORTS AND GAMES <br />
              SO PUT ON YOUR CAPS AND TIE YOUR SHOES.
            </h2>
            <p class="text-2xl pt-0">
              The excitement is just round the corner.
            </p>
            <p class="text-2xl pt-0">
              Register yourself for
              <span class="yellowText"> Sporty Saturdays</span> and
              <span class="yellowText">
                Submit your nominations for participation.
              </span>
            </p>
          </div>

          <div class="bg-white w-24 h-1 my-10"></div>

          <div>
            <p class="text-2xl pt-0">
              Last day of Registration :-
              <span class="yellowText"> 9<sup>th</sup> November, 2022 </span>
            </p>
            <p class="text-2xl pt-0">
              Feel free to reach us on
              <a href="mailto:sujit.bhadoriya@radixweb.com" class="no-underline yellowText break-words"> sujit.bhadoriya@radixweb.com </a>
            </p>
          </div>
        </div>
        <kinesis-element class=" w-full lg:w-6/12">
        <img
            class="mx-auto pt-5 lg:pt-20"
            v-if="data.HoverImage"
            v-rxlazy="data.HoverImage.url"
            width="750"
            height="642"
            :alt="data.HoverImage.alternativeText"
          />
          </kinesis-element>
      </div>
    </kinesis-container>
    </div>
  
</template>

<script>
import { KinesisContainer, KinesisElement  } from 'vue-kinesis'
export default {
  components:{
    KinesisContainer :KinesisContainer,
     KinesisElement:KinesisElement
  },
  props: {
    data: Object,
  },
  
};
</script>

<style lang="scss">
.RPL_banner {
  .title {
    display: inline-block;
  }
  .radix {
    color: #ffb600;
  }
  .PL {
    font-size: 4.375rem;
    font-weight: 43.75rem;
  }
  .year {
    font-weight: 700;
    font-family: sans-serif;
  }
  .saturday {
    color: #ffb600;
    font-family: sans-serif;
  }
  .yellowText {
    color: #ffb600;
    font-weight: 700;
  }
}
</style>
