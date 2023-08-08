import { DirectiveBinding } from "@vue/runtime-dom";
import { Directive, VNode } from "vue";
import { imageLoader } from "@tezjs/vue"
import { getListHtml } from "../functions/get-list-html.function";
import { lightHouse } from "../functions/lighthouse.function";
import isBot from "../utils/is-bot";
function updateImage(el:any,binding:any){
        var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') == -1 &&
      navigator.userAgent.indexOf('FxiOS') == -1;

      var thumbnail = '';
      var actualUrl = '';
      var mobileUrl = '';
      if (typeof binding.value === "string")
      thumbnail = binding.value;
      else {
      thumbnail = binding.value && binding.value.formats && binding.value.formats.thumbnail ? binding.value.formats.thumbnail.url : binding.value.url;
      actualUrl = binding.value ? binding.value.url : '';
      mobileUrl = binding.value && binding.value.formats && binding.value.formats.small ? binding.value.formats.small.url : binding.value.url;
      if (isSafari) {
      thumbnail = thumbnail.replace(".webp", ".jpeg")
      actualUrl = actualUrl.replace(".webp", ".jpeg");
      mobileUrl = mobileUrl.replace(".webp", ".jpeg")
      }
      }
      if (thumbnail || actualUrl && !lightHouse()) {
        if(window.location.hostname.indexOf("localhost") !== -1){
          el.src = thumbnail || actualUrl;
        }else{
          if ((actualUrl || thumbnail).indexOf("https://d2ms8rpfqc4h24.cloudfront.net/") !== -1){
            imageLoader.resolve(actualUrl || thumbnail).then((image:any)=>{
            el.src = image;
          });
  
          }else
           el.src = thumbnail || actualUrl;
        }
        
      }
}
export const RX_LAZY_DIRECTIVE: Directive<any, any> =  {
    beforeMount: function (el:any, binding:DirectiveBinding<any>, vnode:VNode<any, any, { [key: string]: any; }>, prevVnode:any) {
      el.src = "/images/loader.gif";
      if (isBot()) {
        var actualUrl = ''
        if (typeof binding.value === "string")
            actualUrl = binding.value;
        else {
            actualUrl = binding.value ? binding.value.url : '';
        }
      if (actualUrl)
        el.src = actualUrl
    } else {
      //el.style.visibility = "hidden";
      let observer = new IntersectionObserver(function (entries) {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  updateImage(el,binding)
                observer.unobserve(el);
              }
              


          });
      }, { threshold: [0.25] });
      observer.observe(el);
      el.observer = observer;
    }
      
          
      },
    updated(el,binding){
      if(el.observer){
        el.observer.unobserve(el);
        delete el.observer;
      }
      updateImage(el,binding)
    }
  }