  import { createTezApp } from '@tezjs/vue';
  import useVue from '/@/plugins/index';import '/@/assets/scss/tailwind.scss';
 import addLib from '/@/add-lib'; addLib();
  createTezApp({
      loaderImagePath:"/images/loader.gif",isDevMode:true,useVue:useVue,maxPreComponentCount:3,
  });