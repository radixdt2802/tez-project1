import markdown from "./markdown";
import { RX_HTML_DIRECTIVE } from "../directives/rx-html.directive";
import { RX_LAZY_DIRECTIVE } from "../directives/rx-lazy.directive";
import mountedMixin from "../mixins/mounted.mixin";
import { defaultContainer } from "../domain/tez-data-resolver";
// defaultContainer.subscribe();

// Object.defineProperty(Image.prototype, "src", {
//   set(newValue) {
//     if (newValue.indexOf("https://d2ms8rpfqc4h24.cloudfront.net/") !== -1)
//       defaultContainer.loadImage(newValue).then((t) => {
//         this.setAttribute("src", t);
//       });
//     else this.setAttribute("src", newValue);
//   },
//   enumerable: true,
//   configurable: true,
// });
export default function(app:any){
    app.use(markdown, {});
    app
      .directive("rxhtml", RX_HTML_DIRECTIVE)
      .directive("rxlazy", RX_LAZY_DIRECTIVE)
      .mixin(mountedMixin)    
}