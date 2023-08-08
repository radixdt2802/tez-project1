var appConfig = require('../config/app-config');
var mobileCheck = require("../utils/mobile-check");
var isBot = require("../utils/is-bot");
module.exports = {  
  bind: function (el, binding) {    
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
          else if(value.includes("<iframe>")){
            value = `<div class="iframewrapper">${value}</div>`;
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
              var value = binding.value[i];
              var content = {};
              if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>") {
                content = getListHtml(binding.value, i ,(value === "<table>" || value === "<details>"));
                value = content.html;
              }
              if (value !== "")
              {
                if(value.includes("<table>")) {
                  value = `<div class="tablewrapper">${value}</div>`;
                  el.insertAdjacentHTML('beforeend', value);
                }
                else if(value.includes("<iframe>")){
                  value = `<div class="iframewrapper">${value}</div>`;
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
                        var value = binding.value[i];
                        var content = {};
                        if (value === "<ol>" || value === "<ul>" || value === "<blockquote>"|| value === "<table>" || value === "<details>") {
                          content = getListHtml(binding.value, i,(value === "<table>" || value === "<details>"));
                          value = content.html;
                        }
                        if (value !== "")
                        {
                          if(value.includes("<table>")) {
                            value = `<div class="tablewrapper">${value}</div>`;
                            el.insertAdjacentHTML('beforeend', value);
                          }
                          else if(value.includes("<iframe>")){
                            value = `<div class="iframewrapper">${value}</div>`;
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
    }
  }
};

function getListHtml(values, currentIndex,isSkipListClose) {
  var html = '';
  for (var i = currentIndex; i < values.length; i++) {
    html += values[i];
    currentIndex = i;
    if ((!isSkipListClose && values[i] === "</ol>" || values[i] === "</ul>" || values[i] === "</blockquote>") || (isSkipListClose && (values[i] === "</table>" || values[i] === "</details>")))
      break;
  }
  return { html: html, currentIndex: currentIndex}
}
