<template>
  <div>
    <div v-for="item in data.podcastData" :key="item.id">
      <div v-for="key in item.dynamicResult" :key="key.isHighlighted === true">
        <!-- {{key.Title}} -->
      </div>
    </div>

    <div
      class="
        podcast-banner
        bg-secondary
        contentWhite
        bg-cover
        beforeOverlayDark
        relative
        bg-no-repeat
        overflow-hidden
      "
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      v-bind:style="[
        item.BaseImage
          ? { backgroundImage: 'url(' + item.BaseImage + ')' }
          : '',
      ]"
      :class="[item.BaseImage ? '' : 'bg-secondary']"
    >
      <div class="container">
        <div class="flex flex-wrap items-center rxsection-y-space">
          <div class="head-content relative w-full sxl:w-1/2">
            <h1
              class="
                custom_h1
                leading-9
                smd:text-5xl
                xxsm:text-3xl xxsm:leading-10
                xsm:text-4xl
                pr-16
              "
            >
              {{ item.Title }}
            </h1>
            <p
              v-if="item.SubTitle"
              class="
                text-base
                py-3
                leading-relaxed
                md:text-lg md:leading-7
                sxl:leading-8
                xl:leading-9
              "
            >
              {{ item.SubTitle }}
            </p>
            <div class="my-4">
              <a
                        target="_blank"
                        :href="item.GuideURL"
                        :title="item.HoverImage.alternativeText"
                        ><img v-rxlazy="item.HoverImage" :width="item.HoverImage.width" :height="item.HoverImage.height" :alt="item.HoverImage.alternativeText"></a
                      >
            </div>
            <!-- <div
              class="para_lg contentWhite"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div> -->
          </div>
          <div class="head-content relative w-full sxl:w-1/2">
            <!-- music player -->
            <!-- {{data.podcastData}} -->
            <div class="wrapper">
              <div
                class="
                  player
                  md:p-6
                  p-4
                  xl:p-10
                  text-black
                  w-full
                  rounded-none
                  bg-themelight-0
                  dark:bg-themedark-40
                "
              >
                <div class="pb-6 flex justify-between">
                  <p
                    class="bg-primary text-center rounded w-44 uppercase text-sm"
                  >
                    Featured Podcast
                  </p>
                  <img
                  v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/share_aa1a6598d3.svg'"
                    width="18"
                    height="18"
                    alt="share"
                  />
                </div>
                <div
                  class="progress"
                  v-for="item in data.podcastData.data.dynamicResult"
                  :key="item.id"
                >
                  <div class="progress__top">
                    <div class="album-info flex  items-center">
                      <div
                        class="
                          artist-image
                          md:pr-4
                          sxl:pb-4
                          xxl:pb-0 xxl:pr-3
                          hidden
                          md:block
                        "
                      >
                        <img
                        v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/avtar_male_97236306ea.png'"
                          width="92"
                          alt="Artist-name"
                          class="rounded-full"
                        />
                      </div>
                      <div class="albumb-content">
                        <div class="podcastCategories font-semibold uppercase text-sm pb-2">
                          {{ item.Category.Title }}
                        </div>
                        <div class="podcastTitle">
                          <div class="text-black font-bold para_md">
                            {{ item.Title }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      flex flex-wrap
                      items-center
                      justify-between
                      md:pt-6
                      pt-4
                    "
                  >
                  <div class="audio-player lg:w-8/12 md:w-3/4 w-full">
                    <audio :src="item.Attachment.url"></audio>
                    <div class="controls justify-between">
                      <button class="player-button mr-4">
                        <div
                          class="
                            bg-primary
                            rounded-full
                            px-2
                            py-2
                            flex
                            items-center
                            sm:pr-6
                            justify-center
                          "
                        >
                          <img
                          v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Group_1_11afa282f6.png'"
                            width="43"
                            height="42"
                            alt="Play"
                          />
                          <span
                            class="
                              sm:inline-block
                              hidden
                              text-white
                              uppercase
                              font-bold
                              items-center
                              sm:ml-4
                              ml-0
                            "
                            >Play</span
                          >
                        </div>
                      </button>
                      <input
                        type="range"
                        class="timeline"
                        max="100"
                        value="0"
                      />
                      <button class="sound-button">
                        <img
                          class="mx-4 light-mode"
                          v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_icon_43e832522c.png'"
                          width="22"
                          height="20"
                          alt="Volume"
                        />
                        <img
                        v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_icon_white_4162567dc8.png'"
                          class="mx-4 dark-mode"
                          width="22"
                          height="20"
                          alt="Volume"
                        />
                      </button>
                    </div>
                  </div>

                    <div class="art-btn pt-4 lg:pt-0 lg:w-4/12 w-full">
                      <tez-link
                        :to="item.NavURL"
                        class="btn btn_md btn_header uppercase text-black"
                        title="Let's Talk"
                        >go to article</tez-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- music player end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defaultContainer } from "../domain/tez-data-resolver";
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      scrollImage:
        "https://d2ms8rpfqc4h24.cloudfront.net/scroll_down_banner_b6a59b7533.svg",
      isDarkMode: window.localStorage.getItem("Dark"),
    };
  },
  methods: {
    tzDataChanged() {
      this.data.SimpleContentBanner.forEach((item) => {
        console.log(item);
        var image = item.BGImage ? item.BGImage.url : item.Image.url;
        defaultContainer.loadImage(image).then((t) => (item.BaseImage = t));
      });
    },
  },
  mounted() {
    this.tzDataChanged();
    //???New Code???///
    const playerButton = document.querySelector(".player-button"),
      audio = document.querySelector("audio"),
      timeline = document.querySelector(".timeline"),
      soundButton = document.querySelector(".sound-button"),
      playIcon = `
      <div class=" bg-primary rounded-full px-2 py-2 flex items-center sm:pr-6 justify-center"> <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Group_1_11afa282f6.png'" width="43" height="42" alt="Play"/> <span class=" sm:inline-block hidden text-white uppercase font-bold items-center sm:ml-4 ml-0">Play</span></div>`,
      pauseIcon = `
          <div class=" bg-primary rounded-full px-2 py-2 flex items-center sm:pr-6 justify-center"> <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/pause_453a27ba14.png'" width="43" height="42" alt="Play" /> <span class="sm:inline-block hidden text-white uppercase font-bold items-center sm:ml-4 ml-0">Pause</span></div>`,
      soundIcon = `
      <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_icon_43e832522c.png'" class="mx-4 light-mode" width="22" height="20" alt="Volume">
      <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_icon_white_4162567dc8.png'" class="mx-4 dark-mode" width="22" height="20" alt="Volume">`,
      muteIcon = `
     <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_off_icon_e8cc8929c8.png'" class="mx-4 light-mode" width="22" height="20" alt="Mute">
     <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/sound_off_icon_white_c922f5b775.png'" class="mx-4 dark-mode" width="22" height="20" alt="Mute">`;

    function toggleAudio() {
      if (audio.paused) {
        audio.play();
        playerButton.innerHTML = pauseIcon;
      } else {
        audio.pause();
        playerButton.innerHTML = playIcon;
      }
    }

    playerButton.addEventListener("click", toggleAudio);

    function changeTimelinePosition() {
      const percentagePosition = (100 * audio.currentTime) / audio.duration;
      timeline.style.backgroundSize = `${percentagePosition}% 100%`;
      timeline.value = percentagePosition;
    }

    audio.ontimeupdate = changeTimelinePosition;

    function audioEnded() {
      playerButton.innerHTML = playIcon;
    }

    audio.onended = audioEnded;

    function changeSeek() {
      const time = (timeline.value * audio.duration) / 100;
      audio.currentTime = time;
    }

    timeline.addEventListener("change", changeSeek);

    function toggleSound() {
      audio.muted = !audio.muted;
      soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
    }

    soundButton.addEventListener("click", toggleSound);
    //???New Code???///
  
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .beforeOverlayDark {
      &::before {
        content: "";
        @apply absolute w-full h-full top-0 left-0;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    .contentWhite {
      .podcastCategories {
        color: #31bbae;
      }
      .podcastTitle > div {
        color: #ffffff;
      }
    }
  }
  .podcast-banner {
    background-position: 68% 0%;
    @screen md {
      @apply bg-center;
    }
    .head-content {
      .custom_h1 {
        font-size: 1.625rem;
        @screen sm {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
        @screen md {
          font-size: 2.625rem;
          line-height: 3.375rem;
        }
        @screen sxl {
          font-size: 3.125rem;
          line-height: 3.75rem;
        }
        @screen xl {
          font-size: 3.375rem;
          line-height: 4rem;
        }
      }
      p {
        @screen sxl {
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.625rem;
        }
      }
    }

    .arrow-down {
      /* @apply absolute inset-x-0 mx-auto hidden sxl:block cursor-pointer; */
      bottom: 1.875rem;
      width: 4.688rem;
      height: 3.8125rem;
      @screen lg {
        &:hover {
          img {
            transform: scale(0.8);
          }
        }
      }
    }
  //audio palyer media start
  .audio-player{
    img.light-mode {
          @apply block;
        }
        img.dark-mode {
          @apply hidden;
        }
  .controls {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin-top: 10px;
        }
    .player-button {
          background-color: transparent;
          border: 0;
          @screen sm {
            width: 142px;
          }
          width: auto;
          cursor: pointer;
          padding: 0;
        }

        .timeline {
          -webkit-appearance: none;
          width: 40%;
          height: 6px;
          background-color: #d7d7d7;
          background-size: 0% 100%;
          background-image: linear-gradient(#31bbae, #31bbae);
          background-repeat: no-repeat;
        }

        .timeline::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transition: all 0.1s;
          background-color: #31bbae;
        }

        .timeline::-moz-range-thumb {
          -webkit-appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transition: all 0.1s;
          background-color: #31bbae;
        }

        .timeline::-ms-thumb {
          -webkit-appearance: none;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transition: all 0.1s;
          background-color: #31bbae;
        }

        .timeline::-webkit-slider-thumb:hover {
          background-color: #31bbae;
        }

        .timeline:hover::-webkit-slider-thumb {
          opacity: 1;
        }

        .timeline::-moz-range-thumb:hover {
          background-color: #943f65;
        }

        .timeline:hover::-moz-range-thumb {
          opacity: 1;
        }

        .timeline::-ms-thumb:hover {
          background-color: #31bbae;
        }

        .timeline:hover::-ms-thumb {
          opacity: 1;
        }

        .timeline::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
        }

        .timeline::-moz-range-track {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
        }

        .timeline::-ms-track {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
        }

        .sound-button {
          background-color: transparent;
          border: 0;
          width: var(--sound-button-width);
          height: var(--sound-button-width);
          cursor: pointer;
          padding: 0;
        }
  }
  }

  .podcast-banner {
    .head-content {
      .player {
        div {
          p {
            font-size: 1rem;
            line-height: 1.625rem;
            padding: 0.125rem 0;
          }
        }
      }
    }
  }
  .contentWhite {
    .podcastCategories {
      color: #31bbae;
    }
  }

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
  .contentWhite {
    .podcastTitle > div {
      color: #000000;
    }
  }
  .art-btn {
    a.btn {
      @apply bg-transparent border-primary text-base leading-6 md:py-4 md:px-5 p-2;
    }
  }
  //audio palyer media end
}
</style>