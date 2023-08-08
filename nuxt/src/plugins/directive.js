import Vue from 'vue'
import RxBindDirective from './rx-bind.directive';
import RxLazy from './rx-lazy.directive';
import RxHtml from './rx-html.directive';
//import ScrollLoader from '../components/ScrollLoader';

Vue.directive('rxbind', RxBindDirective);
Vue.directive('rxlazy', RxLazy);
Vue.directive('rxhtml', RxHtml);
//Vue.component(ScrollLoader);



