<template>
  <div>
    <router-view  ></router-view>
  </div>
</template>
<script >
import {isMobile} from "../utils/is-mobile";
import  urlReplacer from "../utils/url-replacer";
const requestIdleCallback = window.requestIdleCallback ||
  function (cb) {
    const start = Date.now()
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      })
    }, 1)
  }

const cancelIdleCallback = window.cancelIdleCallback || function (id) {
  clearTimeout(id)
}
export default{
  data(){
    return {
      gtmCodes: [
        { host: "radixweb.com", code: "GTM-TV9MZ5M" },
        { host: "radixweb-dev.web.app", code: "GTM-NCCTFLQ" },
        { host: "radixweb-stage.web.app", code: "GTM-WFDZFDK" },
        { host: "radixweb-prelive.web.app", code: "GTM-PCDWR6G" },
        { host: "web-vital-test.web.app", code: "GTM-NXV9DCF" },
      ],
      scripts:[
        "https://platform.twitter.com/widgets.js",

      ],
      started: false,
      arrowImage:"https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg",
    }
  },
  beforeMount() {
    if (isMobile())
      document.addEventListener("touchstart", this.addCss, { passive: true });
    else 
    document.addEventListener("mouseover", this.addCss, { passive: true });
    document.addEventListener('contextmenu', event => event.preventDefault());
   // requestIdleCallback(this.addCss,{ timeout: 2e3 })
  },
  methods: {
    addCss() {
      if (!this.started) {
        this.started = true;
        var passiveObject = {
            passive: true,
          };
        if (isMobile())
          document.removeEventListener("touchstart", this.addCss, passiveObject);
        else
          document.removeEventListener("mouseover", this.addCss, passiveObject);
          // document.addEventListener('contextmenu', event => event.preventDefault());
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.id = "fgg";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
        link.media = "all";
        head.appendChild(link);
        var hostName = window.location.host;
        var gtmCode = this.gtmCodes.filter((t) => t.host == hostName)[0];
        if (gtmCode)
          this.tagManager(
            window,
            document,
            "script",
            "dataLayer",
            gtmCode.code
          );
        webWorker.postMessage({uri:urlReplacer(window.location.pathname),action:'pre-fetch'})
      }
    },
    createScriptElement(url){
      var head = document.getElementsByTagName("head")[0];
      var scriptElement = document.createElement("script");
      scriptElement.src=  url;
      head.appendChild(scriptElement)
    },
    tagManager(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    },
  },
  
}
</script>
 <style lang="scss">

</style>
