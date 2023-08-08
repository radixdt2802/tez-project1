<template>
  <main class="webStoryTemplate contentWhite">
     <!-- Cover page -->
     <amp-story standalone
        title="Radixweb"
        publisher="Radixweb"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="assets/cover.jpg">
      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Why_Trust_Radixweb_for_Saa_S_Business_Development_edd8aa45c2.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>5 Best DevOps Automation Tools</h1>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/blur_bg_5700dc59e9.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
          </amp-story-grid-layer>
        <amp-story-grid-layer class="text-center" template="vertical">
          <h1>Git</h1>
          <p>Version Control Software</p>
          <p animate-in="scale-fade-up">
            For managing projects and working in distributed teams, Git is a
            version control system
          </p>
          <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Octocat_2_d95d65a977.png"
          animate-in="fly-in-bottom"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page2">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/photo_1557682268_e3955ed5d83f_0a8c8d8b69.jpeg" 
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1  animate-in="scale-fade-up">Docker</h1>
            
                <amp-img
                
              animate-in="fade-in"
              src="https://apis.makestories.io/preview/-NCJyaFh5afqwfzDKhW9/getAsset?pageId=2&layerId=0&id=uplpvlcjgn&version=1664891034532"
              width="720"
              height="1280"
              layout="responsive"
              class="mb-4"
            >
            </amp-img>
            
            <p class="mt-4">Docker's ability to generate service-oriented container components
            has popularized microservices</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page3">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Why_Trust_Radixweb_for_Saa_S_Business_Development_edd8aa45c2.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Terraform</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="bottom">
          <q>Infrastructure-as-Code Platform. Configuration is made simple and repeatable by using declarative
            syntax for resources</q>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page4">
        <amp-story-grid-layer template="fill">
          <amp-video autoplay loop
                width="720" height="1280"
                poster="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Why_Trust_Radixweb_for_Saa_S_Business_Development_edd8aa45c2.jpg"
                layout="responsive">
              <source src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/hire_dedicated_developers_e18c47136c.mp4" type="video/mp4">
          </amp-video>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>About Radixweb</h1>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="bottom">
          <p>As a centre of technology revolution, Radixweb helps organisations achieve competitive agility by minimising complexities and generating new opportunities</p>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page5">
        <amp-story-grid-layer template="vertical" class="noedge">
          <div class="wrapper">
            <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Business_Awards_2022_Gold_5fc90d7e5e.jpg"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.4s">
            </amp-img>
            <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Forbes_045fccaac8.png"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="0.6s">
            </amp-img>
            <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/IAOP_acca2bc3e4.png"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay=".8s">
            </amp-img>
            <amp-img src="https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Top_1000_Companies_Clutch_Global_2021_e054d01de1.png"
                width="720" height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-delay="1s">
            </amp-img>
          </div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="center-text">
          <h2 class="banner-text" animate-in="whoosh-in-right">Awards and Recognition</h2>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Bookend -->
      <amp-story-bookend src="bookend.json" layout="nodisplay"></amp-story-bookend>
    </amp-story>
  </main>
</template>
    
    <script>
export default {
  //   head: {
  //     script: [
  //       {
  //         src: "https://cdn.ampproject.org/v0/amp-story-1.0.js",
  //       },
  //     ],
  //   },
  mounted() {
    var ampfont = document.createElement("link");
    ampfont.setAttribute(
      "src",
      "https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap"
    );
    ampfont.setAttribute(
      "rel",
      "stylesheet"
    );
    document.head.appendChild(ampfont);
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
amp-story {
    font-family: 'Poppins', sans-serif;
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
  background: linear-gradient(to bottom, #003f8c, #316ce6);
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
  /* opacity: 0.6; */
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
  left: 84.3%;
  top: 9.47%;
  width: 4.71em;
  position: absolute;
}
.header-logo amp-img {
  transform: translateX(-50%) translateY(-50%);
}
</style>