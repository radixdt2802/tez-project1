<template>
  <main class="webStoryTemplate contentWhite">
    <amp-story
      standalone
      title="Radixweb"
      publisher="Radixweb"
      publisher-logo-src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png"
      poster-portrait-src="https://d2ms8rpfqc4h24.cloudfront.net/Why_Trust_Radixweb_for_Saa_S_Business_Development_edd8aa45c2.jpg"
    >
      <template v-for="item in data.dynamicResult">
        <amp-story-page id="cover" auto-advance-after="5s">
          <amp-story-grid-layer template="fill">
            <amp-img
              :src="item.BGImage.url"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds" class="bottom">
            <div grid-area="upper-third" class="Coverheader-logo">
              <amp-img
                src="https://d2ms8rpfqc4h24.cloudfront.net/white_radix_logo_with_spacing_883f33495d.png"
                width="454"
                height="460"
                layout="responsive"
              ></amp-img>
            </div>
            <!-- <div grid-area="upper-third" class="content text-right">
            <amp-img
              src="https://d2ms8rpfqc4h24.cloudfront.net/white_radix_logo_with_spacing_883f33495d.png"
              width="80"
              height="82"
              layout="fixed"
            ></amp-img>
          </div> -->
            <div grid-area="lower-third">
              <h1 animate-in="fade-in">{{ item.Title }}</h1>
            </div>
            <!-- <div
        v-if="item.CTA"
        v-html="$md.render(item.CTA)"
      ></div> -->
          </amp-story-grid-layer>
        </amp-story-page>
        <template v-for="key in item.StoriesList">
          <amp-story-page
            v-if="key.VueReferenceCode !== 'LastSlide'"
            :id="key.Displayorder"
            layout="container"
            class="container"
            :class="key.Displayorder"
            auto-advance-after="5s"
          >
            <div class="header-logo">
              <amp-img
                src="https://d2ms8rpfqc4h24.cloudfront.net/white_radix_logo_with_spacing_883f33495d.png"
                width="454"
                height="460"
                layout="responsive"
              ></amp-img>
            </div>
            <amp-story-grid-layer template="vertical">
              <h1 animate-in="scale-fade-up">{{ key.Title }}</h1>
              <p>{{ key.SubTitle }}</p>
              <div class="enosa">
                <amp-img
                  animate-in="fade-in"
                  animate-in-delay="0.3s"
                  animate-in-duration="0.5s"
                  :src="key.Icon && key.Icon.url"
                  width="720"
                  height="1040"
                  layout="responsive"
                >
                </amp-img>
              </div>
              <div animate-in="scale-fade-up" v-rxhtml="key.LongText"></div>
              <p class="footer-link">
                <a href="/"> www.radixweb.com</a>
              </p>
            </amp-story-grid-layer>
          </amp-story-page>
          <amp-story-page
            v-if="key.VueReferenceCode === 'LastSlide'"
            id="page6"
            layout="container"
            class="container"
          >
            <amp-story-grid-layer template="fill">
              <amp-img
                :src="key.Image && key.Image.url"
                width="720"
                height="1280"
                layout="responsive"
              >
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical" class="text-center">
              <div>
                <amp-img
                  src="https://d2ms8rpfqc4h24.cloudfront.net/white_radix_logo_with_spacing_883f33495d.png"
                  width="80"
                  height="82"
                  layout="fixed"
                ></amp-img>
              </div>
              <div class="content">
                <h3 class="h3_sm" animate-in="fade-in">{{ key.Title }}</h3>
              </div>
              <div class="content" animate-in="fade-in" layout="container">
                <p animate-in="fade-in" class="mt-4">
                  {{ key.SubTitle }}
                </p>
              </div>
              <div class="content">
                <a href="/contact-us" class="webStory-btn">Get in Touch</a>
              </div>
              <div class="content">
                <a href="/"> www.radixweb.com</a>
              </div>
            </amp-story-grid-layer>
          </amp-story-page>
        </template>
        <!-- Bookend -->
        <amp-story-bookend
          src="bookend.json"
          layout="nodisplay"
        ></amp-story-bookend>
      </template>
    </amp-story>
  </main>
</template>
  
  <script>
export default {
  props: {
    data: Object,
  },
  mounted() {
    var ampvideo = document.createElement("script");
    ampvideo.setAttribute(
      "src",
      "https://cdn.ampproject.org/v0/amp-story-1.0.js"
    );
    ampvideo.setAttribute("custom-element", "amp-story");
    document.head.appendChild(ampvideo);
    var ampstory = document.createElement("script");
    ampstory.setAttribute(
      "src",
      "https://cdn.ampproject.org/v0/amp-video-0.1.js"
    );
    ampstory.setAttribute("custom-element", "amp-story");
    document.head.appendChild(ampstory);
    var amp = document.createElement("script");
    amp.setAttribute("src", "https://cdn.ampproject.org/v0.js");
    amp.setAttribute("custom-element", "amp-story");
    document.head.appendChild(amp);
  },
};
</script>
  
  <style lang="css">
  @media only screen and (max-width: 575px){
    body .webStoryTemplate .container {
      max-width: 100%;  
    }
  }
amp-story {
  color: #fff;
}
amp-story-page {
  background-color: #000;
}
.content {
  margin: 1.125rem 0rem;
}
q {
  font-weight: 300;
  font-size: 1.1em;
}
amp-story-grid-layer.bottom {
  align-content: end;
}
amp-story-grid-layer.noedge {
  padding: 0px;
}
amp-story-grid-layer.center-text {
  align-content: center;
}
.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.banner-text {
  text-align: center;
  background-color: #000;
  line-height: 2em;
}
.page1 {
  background-color: #f44d27;
}
.page2 {
  background-color: #003f8c;
}
.page3 {
  background-color: #844fba;
}
.page4 {
  background-color: #316ce6;
}
.page5 {
  background-color: #d33833;
}
.enosa {
  height: 34.5%;
  left: 4.17%;
  top: 30.83%;
  width: 56.28%;
}
.page2-image {
  height: 32.17%;
  left: 7.5%;
  top: 31%;
  width: 53.02%;
}
.footer-link {
  text-align: right;
}
.header-logo {
  height: 4.78em;
  left: 89.3%;
  top: 9.47%;
  width: 2.71em;
  position: absolute;
}
.Coverheader-logo {
  height: 4.78em;
  left: 89%;
  top: -11%;
  width: 2.71em;
  position: absolute;
}
.header-logo amp-img {
  transform: translateX(-50%) translateY(-50%);
}
</style>