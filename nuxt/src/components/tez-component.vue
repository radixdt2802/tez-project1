<template>
<div>
    <section v-for="comp in viewPortComponents" :class="
            comp.length>1 &&
            comp[0].clientComponentName &&
            comp[0].clientComponentName == 'header-inverse'
              ? 'header_inverse' : comp.sectionClass
          " :data-tezjs-componentname="comp.length === 2 ? comp[1]: comp[0]"  :key="comp.length === 2 ? comp[1]: comp[0]">
      <RxBindComponent :loadAll="isLoadAll" :componentConfig="comp" :url="url" @tezTicked="tick" :sectionWidth="width" ></RxBindComponent>
    </section>
</div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import isBot from '../utils/is-bot';
export default{
    data(){
        return {
        viewPortComponents:[],
        defaultHeight:0,
        width:0,
        isLoadAll:false
        }
    },
    components:{
        RxBindComponent:defineAsyncComponent(()=>import('./rx-component-bind.vue'))
        },
    props:["components","url","loadAll"],
    watch:{
        components:function(value){
             if(this.viewPortComponents.length === 0 && !isBot()) {
                 this.defaultHeight = this.components.length * 100;
                 this.viewPortComponents.push(value[0]); 
                 this.setWidth(); 
             }
             else{
                 var lastIndex= 0;
                value.forEach((item,index)=>{
                    if(this.viewPortComponents[index])
                    this.viewPortComponents[index] = item;
                    else
                    this.viewPortComponents.push(item);
                    lastIndex = index;
                })
                if(this.viewPortComponents.length > lastIndex)
                    this.viewPortComponents.splice(lastIndex+1,this.viewPortComponents.length)
                if(isBot())
                    this.isLoadAll = true;
             }
             
             this.viewPortComponents.forEach((t,i)=>{
                 this.viewPortComponents[i] = value[i];
             })
        }
        },
    
    created(){
        
        if(this.components && this.components.length > 0){
            this.defaultHeight = this.components.length * 100;
                        
            this.viewPortComponents.push(this.components[0]);
            }
        if(isBot()){
            this.isLoadAll = true;
        }
        },

    
        methods:{
            setWidth(){
                this.width = (this.components.length - this.viewPortComponents.length)*250;
            },
            tick(){
                
                if(this.components.length > this.viewPortComponents.length){
                    var item = this.components[this.viewPortComponents.length];
                    if((window.pageYOffset || document.documentElement.scrollTop) > 0){
                        for(var i=this.viewPortComponents.length;i<this.components.length;i++){
                            item = this.components[i];
                            this.viewPortComponents.push(item)
                        }
                        this.isLoadAll =true;
                    }else{
                        this.viewPortComponents.push(item)
                    }
                    this.setWidth()    
                }
                 }
        }
}
</script>