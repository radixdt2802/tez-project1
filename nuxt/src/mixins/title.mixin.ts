import { getTitleCode } from '../utils/sanitizers/get-title-code.sanitizer';

export default {
    computed : {
      title() {
         let _this:any = this;
         switch(getTitleCode(_this.data.TitleReferenceCode)[0]){
            case 'TD': 
               return  `<div class="${_this.titleStyle}">${_this.data.Title} </div>`
            case 'T1' :
               return  `<h1 class="${_this.titleStyle}">${_this.data.Title} </h1>`
            case 'T2' :
               return  `<h2 class="${_this.titleStyle}">${_this.data.Title} </h2>`
            case 'T3' :
               return  `<h3 class="${_this.titleStyle}">${_this.data.Title} </h3>`
            case 'T4' :
               return  `<h4 class="${_this.titleStyle}">${_this.data.Title} </h4>`
            case 'D' :
               return  `<div class="${_this.titleStyle}">${_this.data.Title} </div>`
            default : 
               return `<div class="${_this.titleStyle}">${_this.data.Title}</div>`;
               // return item.CTA ? `<div class="${_this.titleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` : `<div class="${_this.titleStyle}">${_this.$md.render(`${_this.data.Title}`)} </div>`
         }
      },
      subTitle() {
         let _this:any = this;
         switch(getTitleCode(_this.data.TitleReferenceCode)[1]){
            case 'SD': 
               return  `<div class="${_this.subTitleStyle}">${_this.data.SubTitle}</div>`
            case 'S1' :
               return  `<h2 class="${_this.subTitleStyle}">${_this.data.SubTitle} </h2>`
            case 'S2' :
               return  `<h2 class="${_this.subTitleStyle}">${_this.data.SubTitle} </h2>`
            case 'S3' :
               return  `<h3 class="${_this.subTitleStyle}">${_this.data.SubTitle} </h3>`
            case 'S4' :
               return  `<h4 class="${_this.subTitleStyle}">${_this.data.SubTitle} </h4>`
            case 'D' :
               return  `<div class="${_this.subTitleStyle}">${_this.data.SubTitle} </div>`
            default : 
               return `<div class="${_this.subTitleStyle}">${_this.data.SubTitle}</div>`;
         }
      },
      sTitles() {
         let _this:any = this;
       return  _this.data[_this.getListName()].map((item:any) => {
            switch(item.VueReferenceCode.includes('#') ? getTitleCode((item.VueReferenceCode.split("#")[1]))[0] : ''){
               case 'TD': 
                  return item.CTA ? `<div class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` : `<div class="${_this.sTitleStyle}">${item.Title} </div>`
               case 'T1' :
                  return item.CTA ? `<h1 class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h1>` : `<h1 class="${_this.sTitleStyle}">${item.Title}</h1>`
               case 'T2' :
                  return item.CTA ? `<h2 class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h2>` :  `<h2 class="${_this.sTitleStyle}">${item.Title}</h2>`
               case 'T3' :
                  return item.CTA ? `<h3 class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h3>` : `<h3 class="${_this.sTitleStyle}">${item.Title}</h3>`
               case 'T4' :
                  return item.CTA ? `<h4 class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h4>` : `<h4 class="${_this.sTitleStyle}">${item.Title}</h4>`
               case 'D' :
                  return item.CTA ? `<div class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` : `<div class="${_this.sTitleStyle}">${item.Title}</div>`
               default : 
                  return item.CTA ? `<div class="${_this.sTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` : `<div class="${_this.sTitleStyle}">${item.Title}</div>`;
            }            
         })
         },
      sSubTitles() {
         let _this:any = this;
         return _this.data[_this.getListName()].map((item:any) => {
               switch(item.VueReferenceCode.includes('#') ? getTitleCode((item.VueReferenceCode.split("#")[1]))[1] : ''){
                  case 'SD': 
                     return item.CTA ? `<div class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` :  `<div class="${_this.sSubTitleStyle}">${item.SubTitle}</div>`
                  case 'S1' :
                     return item.CTA ? `<h1 class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</>` :  `<h1 class="${_this.sSubTitleStyle}">${item.SubTitle}</h1>`
                  case 'S2' :
                     return item.CTA ? `<h2 class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h2>` :  `<h2 class="${_this.sSubTitleStyle}">${item.SubTitle}</h2>`
                  case 'S3' :
                     return item.CTA ? `<h3 class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h3>` :  `<h3 class="${_this.sSubTitleStyle}">${item.SubTitle}</h3>`
                  case 'S4' :
                     return item.CTA ? `<h4 class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</h4>` :  `<h4 class="${_this.sSubTitleStyle}">${item.SubTitle}</h4>`
                  case 'D' :
                     return item.CTA ? `<div class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` :  `<div class="${_this.sSubTitleStyle}">${item.SubTitle}</div>`
                  default : 
                     return item.CTA ? `<div class="${_this.sSubTitleStyle}">${_this.$md.render(`${item.CTA}`)}</div>` : ` <div class="${_this.sSubTitleStyle}">${item.SubTitle}</div>`;
               }            
            })
            
         },
      },

 
    methods: {
       getListName() {
         let _this:any = this;
          for (var property in _this.data){
             if(Array.isArray(_this.data[property]) && typeof(_this.data[property][0]) != 'string'){
                return property
             }
             
          }
       }
    }
   }
