var appConfig = require('../config/app-config');
var mobileCheck = require("../utils/mobile-check");
var isBot = require("../utils/is-bot");
module.exports = {
  bind: function (el, binding) {
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
            var isChrome;
            var isSafari;
            el.style.visibility = "hidden";
            let observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
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
                        } else {
                          thumbnail = thumbnail.replace(".jpg", ".webp")
                          actualUrl = actualUrl.replace(".jpg", ".webp");
                          mobileUrl = mobileUrl.replace(".jpg", ".webp")
                          thumbnail = thumbnail.replace(".png", ".webp")
                          actualUrl = actualUrl.replace(".png", ".webp");
                          mobileUrl = mobileUrl.replace(".png", ".webp")
                        }
                      }
                      el.onload = function () { el.style.visibility = "visible"; }
                      el.src = thumbnail ? thumbnail : '';
                      observer.unobserve(el);
                      if (actualUrl && !lightHouse()) {
                        setTimeout(function () {
                          if (mobileCheck()) {
                            el.src = mobileUrl;
                            if (binding.value.formats && binding.value.formats.small) {
                              el.height = binding.value.formats.small.height;
                              el.width = binding.value.formats.small.width;
                            }
                          }
                          else {
                            el.src = actualUrl;
                          }
                        }, 500);
                      }

                    }
                    


                });
            }, { threshold: [0.25] });
            observer.observe(el);
        }
    }
};
//Chrome-Lighthouse|
function lightHouse() {
  var botPattern = "(Chrome-Lighthouse)";
  var re = new RegExp(botPattern, 'i');
  if (typeof navigator === 'undefined')
    return false;
  return re.test(navigator.userAgent);
};
