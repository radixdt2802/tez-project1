import { DirectiveBinding } from "@vue/runtime-dom";
import { Directive, VNode } from "vue";
import { getListHtml } from "../functions/get-list-html.function";
import { lightHouse } from "../functions/lighthouse.function";
import isBot from "../utils/is-bot";
function updateContent(indexNumber:any,el:any,binding:any)
{
  for (var i = indexNumber; i < binding.value.length; i++) {
    var value:any = binding.value[i];
    var content:any = {};
    
    
    if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>" || value.includes("<code>") || value === "<details open>") {
      // console.log(value)
      content = getListHtml(binding.value, i,(value === "<table>" || value === "<details>" || value.includes("<code>") || value === "<details open>"));
      // console.log(content)
      value = content.html;
    }
    if (value !== "")
    {
      if(value.includes("<table>")) {
        value = `<div class="tablewrapper">${value}</div>`;
        el.insertAdjacentHTML('beforeend', value);
      }
      else if(value.includes("<iframe")){
        value = `<div class="responsive-iframe">${value}</div>`;
        el.insertAdjacentHTML('beforeend', value);
      }
      else {
        el.insertAdjacentHTML('beforeend', value);
      }
    }
    indexNumber = content.currentIndex || length;
    if (content.currentIndex)
      i = content.currentIndex;
  }
}
export const RX_HTML_DIRECTIVE : Directive<any, any> ={
    beforeMount: function (el:any, binding:DirectiveBinding<any>, vnode:VNode<any, any, { [key: string]: any; }>, prevVnode:any) {
      if (isBot()) {
        updateContent(0,el,binding)
      } else {
        var indexNumber = 0;
        if (binding.value.length < 3) {
          for (var i = 0; i < binding.value.length; i++) {
            var value = binding.value[i];
            if (value !== "")
            {
              if(value.includes("<table>")) {
                value = `<div class="tablewrapper">${value}</div>`;
                el.insertAdjacentHTML('beforeend', value);
              }
              else if(value.includes("<iframe")){
                value = `<div class="responsive-iframe">${value}</div>`;
                el.insertAdjacentHTML('beforeend', value);
              }
              else {
                el.insertAdjacentHTML('beforeend', value);
              }
            }
          }
          //var actualUrl = ''
          //if (typeof binding.value === "string")
          //    actualUrl = binding.value;
          //else {
          //    actualUrl = binding.value ? binding.value.url : '';
          //    if (actualUrl)
          //        el.src = actualUrl.replace(uri, 'https://images.rxweb.io/').replace('https://my-strapi-app-images-upload.s3.ap-south-1.amazonaws.com/', 'https://images.rxweb.io/');
          //}
        } else {
    
          let observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                observer.unobserve(el);
                var length = binding.value.length < 3 ? binding.value.length : 3;
                for (var i = 0; i < length; i++) {
                  var value:any = binding.value[i];
                  var content:any = {};
                  if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>" || value === "<details open>") {
                    // console.log(value)
                    content = getListHtml(binding.value, i ,(value === "<table>" || value === "<details>" || value === "<details open>"));
                    // console.log(content.html)
                    value = content.html;
                  }
                  if (value !== "")
                  {
                    if(value.includes("<table>")) {
                      value = `<div class="tablewrapper">${value}</div>`;
                      el.insertAdjacentHTML('beforeend', value);
                    }
                    else if(value.includes("<iframe")){
                      value = `<div class="responsive-iframe">${value}</div>`;
                      el.insertAdjacentHTML('beforeend', value);
                    }
                    else {
                      el.insertAdjacentHTML('beforeend', value);
                    }
                  }
                  indexNumber = content.currentIndex || length;
                  if (content.currentIndex)
                    break;
                }
                if (binding.value.length > 3) {
                  setTimeout(() => {
                    var divElement = document.createElement("div");
                    el.after(divElement);
                    observer = new IntersectionObserver(function (elementEntries) {
                      elementEntries.forEach(entryObject => {
                        if (entryObject.isIntersecting) {
                      
                          for (var i = indexNumber; i < binding.value.length; i++) {
                            var value:any = binding.value[i];
                            var content:any = {};
                            
                            
                            if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>" || value.includes("<code>") || value === "<details open>") {
                              // console.log(value)
                              content = getListHtml(binding.value, i,(value === "<table>" || value === "<details>" || value.includes("<code>") || value === "<details open>"));
                              // console.log(content)
                              value = content.html;
                            }
                            if (value !== "")
                            {
                              if(value.includes("<table>")) {
                                value = `<div class="tablewrapper">${value}</div>`;
                                el.insertAdjacentHTML('beforeend', value);
                              }
                              else if(value.includes("<iframe")){
                                value = `<div class="responsive-iframe">${value}</div>`;
                                el.insertAdjacentHTML('beforeend', value);
                              }
                              else {
                                el.insertAdjacentHTML('beforeend', value);
                              }
                            }
                            indexNumber = content.currentIndex || length;
                            if (content.currentIndex)
                              i = content.currentIndex;
                          }
                          observer.unobserve(divElement);
                        }
                      });
                    });
                    observer.observe(divElement);
                  }, 100)
    
                }
              }
            });
          }, {});
          observer.observe(el);
          el.observer = observer;
      }
      
    }
    },
    updated(el:any,binding:any){
      while (el.firstChild) {
        el.firstChild.remove()
    }
      if(el.observer){
        el.observer.unobserve(el);
        delete el.observer;
      }
      updateContent(0,el,binding);
    }
  }