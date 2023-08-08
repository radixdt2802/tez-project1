const axios = require("axios");
module.exports = {
  bind: function (el, binding, context) {
    console.log(context.context.fullRender)
    if (context.context.isBotRequest) {
      binding.value.hide = true
      setTimeout(() => { binding.value.style = {} }, 1000);
    } else {
      binding.value.hide = false;

        let observer = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
              observer.unobserve(el);
              binding.value.hide = entry.isIntersecting;
              setTimeout(() => { binding.value.style = {} }, 1000);
            }
          }
        }, {});
        observer.observe(el);


    }
    
    }
}
