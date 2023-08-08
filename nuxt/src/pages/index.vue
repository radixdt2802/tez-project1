<template>
  <main>

        <tez-component :components="itemResult" :url="url" loadAll="false"></tez-component>

    
  </main>
</template>

<script  >
import  urlReplacer from "../utils/url-replacer";
import  {webVitalGaReporter} from "../utils/web-vitals/web-vital-ga-report";
const scrollLoader = () => import("../components/scroll-loader.vue");
import * as RxComponentBind from '../components/rx-component-bind.vue'
import * as TezComponent from '../components/tez-component.vue'
import isBot from '../utils/is-bot'
import { defaultContainer } from '../domain/tez-data-resolver';
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
export default {
  //head: TagsModule,
    beforeRouteUpdate(to, from, next){
      webVitalGaReporter()
    var url = urlReplacer(to.path);
     var splitUrl = url.split("/");
    var lastUrlNode = "/" + splitUrl[splitUrl.length - 1];
    this.preLoad(url)    
    fetch(`\\payload${url}${lastUrlNode}.json`).then(async pageComponents=>{
      fetch(`\\payload${url}\\tags.json`).then(async result=>{
        defaultContainer.setMetaInfo(await result.json());
        this.components = await pageComponents.json();
        this.url = url;
        this.itemResult = this.components;
        next();    
      })
    })
    },
  data() {
    return {
      started: false,
      fullRender: false,
      itemResult: [],
      disable: false,
      isBotRequest: false,
      markedComponent: {},
      countIndex: 0,
      lazyComponents:[],
      url:'',
      styleObject: { style: { "min-height": "900px" }, hide: false },
    };
  },
  components: {
    RxComponentBind: RxComponentBind.default,
    scrollLoader,
    TezComponent:TezComponent.default
  },
  
  async mounted() {
    var url = urlReplacer(window.location.pathname);
    this.fetch(url)
  },
  methods:{
    setMetaInfo(){
      webWorker.postMessage({uri:this.url,host:window.location.host,action:'set-meta-info'})
    },
    fetch:async function(url){
     var splitUrl = url.split("/");
    var lastUrlNode = "/" + splitUrl[splitUrl.length - 1];
    fetch(`\\payload${url}${lastUrlNode}.json`).then(async result=>{
      this.components = await result.json();
      this.url = url;
      this.itemResult = this.components;
      // requestIdleCallback(this.handleScroll, { timeout: 2e3 })
      // if(isBot())
      //   this.handleScroll();
      // else
      //   window.addEventListener("scroll", this.handleScroll,{passive:true});
    }).catch((error) => {
        this.fetch('/404');
    })
    },
    handleScroll:function(e){
      if(this.lazyComponents.length === 0)
      {
        window.removeEventListener("scroll", this.handleScroll,{passive:true});
        this.preLoad();
        this.components.forEach(t=>this.itemResult.push(t))
        //this.lazyComponents = this.components;
      }
    },
    preLoad: function(url){
              var uri = `\\payload${url}\\tags.json`;
              var linkElement = document.createElement("link");
              linkElement.setAttribute('data-head','tezjs');
              linkElement.rel = "preload";
              linkElement.as = "fetch";
              linkElement.crossOrigin=true;
              linkElement.href=uri;
              document.head.appendChild(linkElement)
    }
  }
};
</script>
