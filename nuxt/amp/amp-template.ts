export function ampTemplate(item:any){
    console.log("amp called")
    return `
        <amp-story
        standalone
        title="photohifi"
        publisher="photohifi"
        publisher-logo-src="https://via.placeholder.com/150"
        poster-portrait-src="https://via.placeholder.com/150"
        >
        ${dynamicResult(item.dynamicResult)}
        </amp-story>
    `;
}

export function dynamicResult(items:any){
    return items.map(item=>{

        return `
        <amp-story-page id="cover" auto-advance-after="5s">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="${item.BGImage.url}"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds" class="bottom">
          <div grid-area="upper-third" class="Coverheader-logo">
            <amp-img
              src="https://via.placeholder.com/150"
              width="454"
              height="460"
              layout="responsive"
            ></amp-img>
          </div>
          <div grid-area="lower-third">
            <h1 animate-in="fade-in">${item.Title }</h1>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
      ${getStory(item.StoriesList)}
      <!-- Bookend -->
      <amp-story-bookend
        src="bookend.json"
        layout="nodisplay"
      ></amp-story-bookend>

        `
    }).join("")
}

function getStory(stories:any){
   return stories.map(key=>{
    let htmlString = '';
    if(key.VueReferenceCode !== `LastSlide`){
        htmlString = `<amp-story-page
        id="${key.Displayorder}"
        layout="container"
        class="container"
        class="${key.Displayorder}"
        auto-advance-after="5s"
      >
        <div class="header-logo">
          <amp-img
            src="https://via.placeholder.com/150"
            width="454"
            height="460"
            layout="responsive"
          ></amp-img>
        </div>
        <amp-story-grid-layer template="vertical">
          <h1 animate-in="scale-fade-up">${ key.Title }</h1>
          <p>${ key.SubTitle }</p>
          <div class="enosa">
            <amp-img
              animate-in="fade-in"
              animate-in-delay="0.3s"
              animate-in-duration="0.5s"
              src="${key.Icon && key.Icon.url}"
              width="720"
              height="1040"
              layout="responsive"
            >
            </amp-img>
          </div>
          <div animate-in="scale-fade-up">${key.LongText}</div>
          <p class="footer-link">
            <a href="/"> www.photohifi.com</a>
          </p>
        </amp-story-grid-layer>
      </amp-story-page>`

    }else if(key.VueReferenceCode === 'LastSlide'){
        htmlString = `<amp-story-page
        id="page6"
        layout="container"
        class="container"
      >
        <amp-story-grid-layer template="fill">
          <amp-img
            src="${key.Image && key.Image.url}"
            width="720"
            height="1280"
            layout="responsive"
          >
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="text-center">
          <div>
            <amp-img
              src="https://via.placeholder.com/150"
              width="80"
              height="82"
              layout="fixed"
            ></amp-img>
          </div>
          <div class="content">
            <h3 class="h3_sm" animate-in="fade-in">${ key.Title }</h3>
          </div>
          <div class="content" animate-in="fade-in" layout="container">
            <p animate-in="fade-in" class="mt-4">
              ${ key.SubTitle }
            </p>
          </div>
          <div class="content">
            <a href="/contact-us" class="webStory-btn">Get in Touch</a>
          </div>
          <div class="content">
            <a href="/"> www.photohifi.com</a>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>`
    }
    return htmlString;
   }).join("") ;
}