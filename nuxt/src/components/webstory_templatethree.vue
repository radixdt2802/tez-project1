<template>
  <main class="webStoryTemplate contentWhite">
     <!-- Cover page -->
    <amp-story standalone class="storysection"
        title="Salesforce"
        publisher="Radixweb"
        publisher-logo-src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png"
        poster-portrait-src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png">

      <amp-story-page id="cover">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/cover_bg2_6234aa3117.jpg"
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="cover-layout">
          <div class="logo-cover">
            <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png" width="108" height="111" layout="responsive"></amp-img>
          </div>
          <div class="story-cover">
            <h1>Salesforce <span>Testing Guide</span></h1>
            <div class="blue-square pa"></div>
            <div class="blue-line pa"></div>
            <div class="cover-img">
              <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/salesforce_img_423d98f7ef.png" alt="Salesforce Testing Guide" width="293" height="286"></amp-img>
            </div>
            <p class="pa footer-link"><a href="#">www.radixweb.com</a></p>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
      <amp-story-page id="page1">
        <amp-story-grid-layer template="fill">
          <amp-img src=""
              width="720" height="1280"
              layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="cover-layout">
          <div class="logo-cover">
            <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png" width="864" height="909" layout="responsive"></amp-img>
          </div>
          <div class="story-cover"> 
            <h1 class="pa">What is Salesforce</h1>
            <p class="pa">Salesforce was the first cloud-based CRM system in the whole world. Marc Benioff and Parker Harris launched SFDC (Sales Force Dot Com) in March 1999.</p>
            <div class="blue-square pa"></div>
            <div class="cover-img pa">
              <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/what_salesforce_a3ceccb92e.jpg" alt="Salesforce Testing Guide" width="293" height="286"></amp-img>
            </div>
            <div class="blue-line pa"></div>
            <p class="pa footer-link"><a href="#">www.radixweb.com</a></p> 
          </div>
        </amp-story-grid-layer>
      </amp-story-page>

    <!-- Page 2 (Docker): 2 layers (vertical) -->
    <amp-story-page id="page2">
      <amp-story-grid-layer template="fill">
        <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/cover_bg2_6234aa3117.jpg"
            width="720" height="1280"
            layout="responsive">
        </amp-img>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" class="cover-layout">
        <div class="logo-cover">
          <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png" width="864" height="909" layout="responsive"></amp-img>
        </div>
        <div class="story-cover"> 
          <div class="blue-square pa"></div>
          <div class="cover-img pa">
            <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/testing_process_0c02af570c.png" alt="Salesforce Testing Guide" width="293" height="286"></amp-img>
          </div>
          <h1 class="pa">What is Salesforce<br> Testing Process? </h1>
          <p class="pa">Salesforce was the first cloud-based CRM system in the whole world. Marc Benioff and Parker Harris launched SFDC (Sales Force Dot Com) in March 1999. </p>
          <div class="blue-line pa"></div>
          <div class="blue-line1 pa"></div>
          <p class="pa footer-link"><a href="#">www.radixweb.com</a></p> 
        </div>
      </amp-story-grid-layer>
    </amp-story-page>


      <!-- Page 5 (GetInTouch): 2 layers + animations -->
      <amp-story-page id="page5">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/cover_bg2_6234aa3117.jpg"
            width="720" height="1280"
            layout="responsive">
        </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="last-layout">
            <div class="logo-cover">
              <amp-img src="https://d2ms8rpfqc4h24.cloudfront.net/radixweb_white_logo_80x82_6724934469.png" width="108" height="111" layout="responsive"></amp-img>
            </div>
            <h2 class="banner-text">Make Your Enterprise a Stakeholder of Transformation with <span>Salesforce Services</span></h2>
            <div class="contact-us">
              <a href="/contact-us" class="webStory-btn" tabindex="0">Get in Touch</a>
            </div>
            <p class="footer-link"><a href="#">www.radixweb.com</a></p>
            <div class="blue-line pa"></div>
            <div class="blue-line1 pa"></div>
            <div class="blue-line2 pa"></div>
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
    // var ampvideo = document.createElement("script");
    // ampvideo.setAttribute(
    //   "src",
    //   "https://cdn.ampproject.org/v0/amp-story-1.0.js"
    // );
    // ampvideo.setAttribute("custom-element", "amp-story");
    // document.head.appendChild(ampvideo);
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
        font-family: Poppins,sans-serif;
        color: #fff;
      }
      /* amp-story-page {
        background-color: #000;
      } */
      h1 {
        font-weight: bold;
        font-size: 2.875em;
        font-weight: normal;
        line-height: 1.174;
      }
      p {
        font-weight: normal;
        font-size: 1.3em;
        line-height: 1.5em;
        color: #fff;
      }
      h2
      {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      q {
        font-weight: 300;
        font-size: 1.1em;
      }
      amp-story-grid-layer.bottom {
        align-content:end;
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
        /* background-color: #000; */
        /* line-height: 2em; */
      }
      .storysection h1{
        font-size: 2.375rem;
        line-height: 3.125rem;
        font-weight: 600;
      }
      .logo-cover{
        width: 3em;
        height: 4em;
        right: 8%;
        top: 6%;
        position: absolute;
        z-index: 1;
      }
      .cover-layout .story-cover, .cover-layout .logo-cover, .last-layout  {
        background-color: #1f2325;
      } 
      /* #cover
      {
        background-color: #000000;
      } */
      .pa {
        position: absolute;
        word-break: break-word;
      }
      .story-cover
      {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      #cover .story-cover h1 {
        color: #00b6ff;
        font-size: 3.1em;
        font-weight: 600;
        left: 12%;
        letter-spacing: .02em;
        line-height: 1.2em;
        top: 57.83%;
        width: 83.06%;
        position: absolute;
      }
      .story-cover span
      {
        color: #ffffff;
      }
      .story-cover p.footer-link {
        color: #fff;
        font-size: 0.8em;
        font-weight: 400;
        line-height: 1.4em;
        bottom: 3%;
        width: 67.01%;
        right: 6.5%;
        text-align: end;
        letter-spacing: 1px;
      }
      .footer-link a{
        color: #ffffff;
        text-decoration: none;
      }
      #cover .cover-img {
        height: 18em;
        left: 0;
        top: 1%;
        width: 18em;
        position: absolute;
      }
      .cover-img img{
        left: 0;
        top: 0;
        /* transform: translateX(-42%) translateY(-36%); */
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #cover .blue-square {
        background-color: #00b6ff;
        height: 23.17%;
        left: 40%;
        padding: 2px;
        top: 25%;
        width: 38.61%;
      }
      #cover .blue-line {
        background-color: #00b6ff;
        height: 24%;
        left: -13%;
        padding: 2px;
        bottom: 16%;
        width: 15%;
      }

      #page1 .story-cover h1 {
        color: #00b6ff;
        font-size: 1.5em;
        font-weight: 600;
        left: 8.33%;
        letter-spacing: 0;
        line-height: 1.4em;
        top: 9.17%;
        }
        #page1 .story-cover p {
          font-size: 0.9em;
          left: 8.33%;
          line-height: 1.4em;
          top: 15.17%;
          width: 85%;
        }
        #page1 .cover-img{
          height: 21em;
          left: 7%;
          right: 7%;
          bottom: 10%;
          width: 20.5em;
        }
        #page1 .story-cover p.footer-link
        {
          top: auto;
          font-size: 0.8em;
        }
        #page1 .story-cover .blue-square
        {
          height: 22.83%;
          left: 13.06%;
          top: 35%;
          width: 73.61%;
          background-color: #00b6ff;
        }
        /* #page1 .story-cover .blue-line
        {
          height: 22.83%;
          left: 13.06%;
          top: 35%;
          width: 73.61%;
          background-color: #00b6ff;
        } */
        #page1 .story-cover .blue-line {
          height: 4.5%;
          left: 28.89%;
          bottom: -3.2%;
          width: 41.67%;
          background-color: #00b6ff;
        }
        #page2 .cover-img {
          height: 21em;
          left: 0;
          top: 5%;
          width: 16em;
        }
        #page2 .blue-square {
          height: 20em;
          left: 0;
          top: 9%;
          width: 16.6em;
          background-color: #00b6ff;
        }
        #page2 .story-cover h1 {
          color: #00b6ff;
          font-size: 1.5em;
          font-weight: 600;
          left: 8.33%;
          letter-spacing: 0;
          line-height: 1.4em;
          bottom: 26%;
        }
        #page2 .story-cover p {
          font-size: 0.9em;
          left: 8.33%;
          line-height: 1.5em;
          bottom: 9%;
          width: 85%;
          top: auto;
        }
        #page2 .story-cover p.footer-link
        {
          bottom: 3%;
          font-size: 0.8em;
          left: auto;
        }
        #page2 .blue-line {
          height: 12.5%;
          top: 38%;
          width: 10%;
          background-color: #00b6ff;
          right: -8%;
        }
        #page2 .blue-line1.pa {
          height: 7%;
          bottom: -6%;
          width: 25%;
          background-color: #00b6ff;
          left: 15%;
        }
        .last-layout .logo-cover {
          height: 5em;
          left: 0;
          width: 5em;
          background-color: transparent;
          right: 0;
          margin: 0 auto;
          top: 10%;
          position: relative;
        }
        .last-layout h2.banner-text {
          color: #fff;
          font-size: 1.8em;
          font-weight: 500;
          letter-spacing: .04em;
          line-height: 1.4em;
          text-align: center;
          top: 30.33%;
          width: 75%;
          margin: 40px auto;
        }
        .last-layout h2 span {
            color: #00b6ff;
            font-weight: 700;
        }
        .contact-us
        {
          text-align: center;
          margin: 20px 0;
        }
        .contact-us a {
          background: #00b6ff;
          border-radius: 12px;
          color: #fff;
          font-size: 1em;
          font-weight: 600;
          letter-spacing: .07em;
          line-height: 1.4em;
          padding: 14px 30px;
          text-decoration: none;
          text-align: center;
          text-transform: uppercase;
        }
        .last-layout .footer-link
        {
          font-size: 0.9em;
          text-align: center;
          letter-spacing: 1px;
        }
        .last-layout .blue-line.pa {
          position: absolute;
          height: 25%;
          left: -11.7%;
          top: 6.83%;
          width: 13.89%;
          background-color: #00b6ff;
        }
        .last-layout .blue-line1.pa {
          position: absolute;
          height: 13%;
          right: -3%;
          top: 25%;
          width: 5%;
          background-color: #00b6ff;
        }
        .last-layout .blue-line2.pa {
          position: absolute;
          height: 5%;
          bottom: -3.5%;
          width: 40%;
          background-color: #00b6ff;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      
        
        
      @media (min-width: 768px)
      {
       p{
        font-size: 1.125rem;
        line-height: 1.75rem;
        line-height: 1.875rem;
        padding: 0.625rem 0rem;
       }
       h2
        {
          font-size: 1.375rem;
          line-height: 2rem;
        }
      }
</style>