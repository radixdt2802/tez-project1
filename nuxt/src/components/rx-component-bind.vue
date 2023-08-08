<template>
  <div :style="style">
    <keep-alive>
      <component :is="component" :data="data" @ticked="tezTicked" ></component>
    </keep-alive>
  </div>
  </template>
<script type="text/javascript">
import nuxtLink from "../utils/nuxt-link";
import {isMobile} from "../utils/is-mobile";
import { defineAsyncComponent, shallowRef } from '@vue/runtime-core';
import { defaultContainer } from '../domain/tez-data-resolver';
export default {
  data() {
    return {
      component: shallowRef(),
      data: undefined,
      style: undefined,
      componentId:undefined,
      isAsyncData:false
    };
  },
  props: {
    randomNumber:undefined,
    componentConfig: undefined,
    url: undefined,
    loadAll:undefined,
    sectionWidth:undefined
  },
  watch:{
    url:function(value){
    this.refreshData()
    },
        loadAll:function(value){
           if(value)
             this.bindData()
        }
  },
  methods: {
      tezTicked() {
        this.$emit("tezTicked");
      },
    refreshData(){
      if(this.data && Object.keys(this.data).filter(t=>t !== "clientComponentName" && t !== "mobileComponentName").length > 0)
         defaultContainer.getComponentData(this.componentId,this.url).then(t=>{
            this.data = t
         });
    },
    async bindData() {
      if(Object.keys(defaultContainer.components).length === 0)
        defaultContainer.components = import.meta.glob('./*.vue');
      this.componentId = this.componentConfig.length > 1 ?this.componentConfig[1]:  this.componentConfig[0];
      var data =this.componentConfig.length > 1 ? this.componentConfig[0] : undefined;
     
      if (!data && /^[0-9]{0,2}-[0-9A-Za-z]/.test(this.componentId)) {
               defaultContainer.getComponentData(this.componentId,this.url).then(t=>{
        data = t
        var componentName =
        data && data.clientComponentName
          ? data.clientComponentName
          : this.componentId;
      if (isMobile() && data.mobileComponentName)
        componentName = data.mobileComponentName;
        var key = `./${componentName}.vue`;
        if(defaultContainer.components[key]){
          
            defaultContainer.components[key]().then(t=>{
                this.component = defineAsyncComponent(() =>
              new Promise((resolve, reject) => {
                this.data = data;
                
                resolve(t.default)
              }))
              })
        }
      this.style = {};
        })
      }{
         var componentName =
        data && data.clientComponentName
          ? data.clientComponentName
          : this.componentId;
      if (isMobile() && data && data.mobileComponentName)
        componentName = data.mobileComponentName;
        var key = `./${componentName}.vue`;
        if(defaultContainer.components[key]){
            defaultContainer.components[key]().then(t=>{
              
                this.component = defineAsyncComponent(() =>
              new Promise((resolve, reject) => {
                this.data = data;
                resolve(t.default)
              }))
              })
        }
      this.style = {};
      }
      
    },
    observer() {
      var elementObserver = new IntersectionObserver(
        async ([{ isIntersecting }]) => {
          if (isIntersecting && this.loadAll === false) {
            await this.bindData();
            elementObserver.unobserve(this.$el);
          }else
          this.style = { "min-height": `${this.sectionWidth}px` }
        },
        this.options
      );
      elementObserver.observe(this.$el);
    },
  },
  mounted() {
   this.loadAll === false ? this.observer() : this.bindData();
   },
};
</script>