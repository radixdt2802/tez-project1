<template>
  <div class="podcast-detail">
    <div class="podcast-inner">
      <div class="container">
        <div class="row">
          <div class="podcast-content w-full px-4 smd:pr-16 mx-auto">
            <div class="post-category-container w-full mb-2"></div>
            <h1>{{ data.Title }}</h1>
            <div
              class="
                flex
                justify-between
                items-center
                pt-2
                pb-2
                mb-2
                blog-auth-detail
                md:mb-6
                relative
              "
            >
              <div class="media-body">
                <div
                  class="
                    pt-0
                    mb-0
                    featured-post-author-desc
                    flex flex-wrap
                    items-center
                  "
                >
                  <div>
                    <p class="text-sm post-category pb-0">
                      {{
                        new Date(data.PublishedDate).toLocaleString("default", {
                          month: "short",
                        })
                      }}
                      {{ new Date(data.PublishedDate).getDate() }},
                      {{ new Date(data.PublishedDate).getFullYear() }}
                    </p>
                    <!-- <p class="text-sm post-category pb-0">
                      By, {{ data.PodcastAuthor.Name }}
                    </p> -->
                  </div>
                </div>
              </div>
              <div class="radix-socialmedia flex flex-wrap h-6">
                <img
                  v-rxlazy="
                    'https://d2ms8rpfqc4h24.cloudfront.net/Social_Share_e47e21d3dd.svg'
                  "
                  alt="Share"
                  width="26"
                  height="26"
                  @click="shareSocialClick"
                  :class="{ 'share-icon-t ': istoggle == true }"
                  class="
                    cursor-pointer
                    smd:pointer-events-none
                    pointer-events-auto
                  "
                  aria-label="Shareicon"
                />

                <ul class="hidden smd:flex">
                  <li>
                    <a
                      v-bind:href="
                        'https://www.facebook.com/sharer.php?u=https://radixweb.com' +
                        data.NavURL
                      "
                      target="_blank"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                      rel="external nofollow"
                    >
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/Social_Facebook_cd717a4519.svg'
                        "
                        alt="Facebook"
                        width="26"
                        height="26"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      v-bind:href="
                        'https://twitter.com/share?url=https://radixweb.com' +
                        data.NavURL +
                        '&text=' +
                        data.Title +
                        '&via=radixweb'
                      "
                      target="_blank"
                      title="Share on Twitter"
                      aria-label="Share on Twitter"
                      rel="external nofollow"
                    >
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/Social_Twitter_cd5daa6d78.svg'
                        "
                        alt="Twitter"
                        width="26"
                        height="26"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      v-bind:href="
                        'https://www.linkedin.com/shareArticle?mini=true&url=https://radixweb.com' +
                        data.NavURL
                      "
                      target="_blank"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                      rel="external nofollow"
                    >
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/Social_Linked_In_520e158eb3.svg'
                        "
                        alt="LinkedIn"
                        width="26"
                        height="26"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      v-bind:href="
                        'https://www.pinterest.com/pin/create/button/?url=https://radixweb.com' +
                        '&media=' +
                        data.Image.url +
                        '&description=' +
                        data.Title
                      "
                      target="_blank"
                      title="Share on Pinterest"
                      aria-label="Share on Pinterest"
                      rel="external nofollow"
                    >
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/Social_Pinterest_9295d1f4d7.svg'
                        "
                        alt="Pintrest"
                        width="26"
                        height="26"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="podcast-inner-main mt-5">
              <div class="mb-6">
                <img
                  class="w-full"
                  v-if="data.Image"
                  v-rxlazy="data.Image"
                  :width="data.Image.width"
                  :height="data.Image.height"
                  :alt="data.Image.alternativeText"
                />
              </div>
              <!-- music player -->

              <div
                class="bg-themelight-0 dark:bg-themedark-10 p-6 shadow-lg mb-6"
              >
                <div class="customAudio">
                  <div class="audio-player">
                    <audio :src="data.Attachment.url"></audio>
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
                      <select id="playbackSpeed">
                        <option value=".5">0.5x</option>
                        <option selected value="1">1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- music player end -->
              <div v-rxhtml="data.LongText"></div>
              <div class="my-4">
              <a
                        target="_blank"
                        href="https://open.spotify.com/show/0BITGcty30omXZE0TA99Px"
                        title="Listen on Spotify"
                        ><img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/listen_spotify_button_ed90727130.png'" width="222" height="44" alt="Listen on Spotify"></a
                      >
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // blogSidebar: blogSidebar,
    };
  },
  props: {
    data: Object,
  },
  computed: {
    hostname() {
      if (typeof window === "undefined") return process.env.SITE_URL;
      else return "https://" + window.location.hostname;
    },
  },
  mounted() {
    //???New Code???///
    const playerButton = document.querySelector(".player-button"),
      audio = document.querySelector("audio"),
      timeline = document.querySelector(".timeline"),
      soundButton = document.querySelector(".sound-button"),
      playIcon = `
      <div class=" bg-primary rounded-full px-2 py-2 flex items-center sm:pr-6 justify-center"> <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/Group_1_11afa282f6.png'" width="43" height="42" alt="Play"/> <span class=" sm:inline-block hidden text-white uppercase font-bold items-center sm:ml-4 ml-0">Play</span></div>`,
      pauseIcon = `
          <div class=" bg-primary rounded-full px-2 py-2 flex items-center sm:pr-6 justify-center"> <img v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/pause_453a27ba14.png'" width="43" height="42" alt="Play" /> <span class="sm:inline-block hidden text-white uppercase font-bold items-center sm:ml-4 ml-0">Play</span></div>`,
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
    //playback speed
    var playbackSpeed = document.getElementById("playbackSpeed");
    playbackSpeed.addEventListener("change", changeSpeed);

    function changeSpeed(event) {
      audio.playbackRate = event.target.value;
    }
    //???New Code???///
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
    shareSocialClicks() {
      var div = document.querySelector("#footer-social-menu");
      if (window.innerHeight - div.getBoundingClientRect().bottom < 100) {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible-upward");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible-upward");
        }
      } else {
        this.IsDark = !this.IsDark;
        if (!this.IsDark) {
          document
            .querySelector(".radix-social-share ul")
            .classList.remove("icon-visible");
        } else {
          document
            .querySelector(".radix-social-share ul")
            .classList.add("icon-visible");
        }
      }
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .podcast-inner {
      .podcast-content {
        .podcast-inner-main {
          .timeline {
            background-color: #d7d7d7;
          }
          img.light-mode {
            @apply hidden;
          }
          img.dark-mode {
            @apply block;
          }
          select {
            background-color: #2b2b2b;
          }
        }
      }
    }
  }
  .podcast-inner {
    @media only screen and (min-width: 1230px) {
      .container {
        max-width: 49.375rem;
        width: 100%;
      }
    }

    .podcast-content {
      .post-category-container {
        a {
          @apply text-primary font-semibold no-underline;
          &:hover,
          &:active {
            @apply text-themedark-0;
            transition: 0.3s ease all;
          }
        }
      }
      h1 {
        @apply font-poppins font-bold p-0 mb-1;
        font-size: 1.625rem;
        line-height: 2.375rem;
        @screen xxsm {
          font-size: 1.75rem;
          line-height: 2.5rem;
        }

        @screen xsm {
          font-size: 1.875rem;
          line-height: 2.625rem;
        }

        @screen md {
          font-size: 2rem;
          line-height: 2.75rem;
        }

        @screen smd {
          font-size: 2.125rem;
          line-height: 3rem;
        }

        @screen sxl {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
      }
      .radix-socialmedia,
      .radix-social-share {
        @apply relative;
        ul {
          // @apply flex items-center;
          @apply items-center h-0;
          transition: 0.5s all;

          @screen smd {
            @apply h-auto;
          }
          li {
            @apply ml-4;
          }
          &.icon-visible {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            top: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
          &.icon-visible-upward {
            @apply flex absolute right-0 flex-col justify-center items-center z-10 p-2 bg-white w-12 h-auto;
            bottom: calc(100% + 15px);
            box-shadow: 0 0 4px #ccc;
            transition: 0.5s all;
            li {
              @apply ml-0 my-1;
            }
          }
        }
      }
      .podcast-inner-main {
        p {
          @apply m-0 p-0 pb-5 font-poppins font-normal;
          strong {
            @apply font-semibold;
            line-height: 1.3125rem;
          }
        }
        p,
        li {
          font-size: 1.0625rem;
          line-height: 1.75rem;
          letter-spacing: 0.0437rem;
          word-break: break-word;
          @screen xxl {
            font-size: 1.3125rem;
            line-height: 2.375rem;
          }
        }
        h2 {
          @apply text-themedark-0 dark:text-themedark-75 text-2xl leading-9 mt-3 mb-5 p-0 font-medium;
          @screen xsm {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen smd {
            font-size: 1.75rem;
            @apply leading-10;
          }
          @screen sxl {
            @apply text-3xl;
            line-height: 2.875rem;
          }
        }
        ul,
        ol {
          @apply pl-6 pb-4 m-0;
          li {
            @apply relative ml-5 mb-0 pt-1 pb-2;
            &::before {
              @apply bg-primary pr-0 absolute top-0 ml-0 rounded-full;
              content: "";
              top: 1.125rem;
              width: 0.5rem;
              height: 0.5rem;
              left: -1.25rem;
            }
          }
        }
        a {
          @apply font-medium font-poppins text-customcolor-75;
        }
        .album-info {
          flex: 1;
        }
        .controls {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin-top: 10px;
        }
        img.light-mode {
          @apply block;
        }
        img.dark-mode {
          @apply hidden;
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
        //audio palyer media end
      }
    }
  }
}
</style>