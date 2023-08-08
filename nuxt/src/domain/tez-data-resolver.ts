declare const webWorker:any;
var imageIndexCount:number = 1;
export const defaultContainer:
    {
        getComponents(path:string):Promise<{components:number[],masterLayouts:{[key:string]:any}}>,
        getComponentData(componentIndex:number,uri:string):Promise<any>,
        loadImage(uri:string):Promise<any>,
        subscribe():void,
        setMetaInfo(metaInfo:any):void
        components:any
    } = new (class {
        components = {}
        loadImage(uri:string):Promise<any>{
            return new Promise<{components:number[],masterLayouts:{[key:string]:any}}>((of,reject)=>{
                imageIndexCount++
                var id = imageIndexCount;
               webWorker.state[id] = {resolve:of};
               webWorker.postMessage({uri:uri,id:id,action:'load-image'})
            });
        }
        getComponents(path:string):Promise<{components:number[],masterLayouts:{[key:string]:any}}>{
            return new Promise<{components:number[],masterLayouts:{[key:string]:any}}>((of,reject)=>{
                if(!webWorker.state[path] || !webWorker.state[path].components){
                    webWorker.state[path] ={resolve:of};
                    webWorker.postMessage({ payloadUri: path,action:'start' });
                }
                else {
                     return of({components:webWorker.state[path].components,masterLayouts:webWorker.state[path].components})
                }
            });
        }

        getComponentData(componentIndex:number,uri:string):Promise<any> {
            return fetch(`\\payload${uri}\\${componentIndex}.json`).then(async response=>await response.json())
        }
        setMetaInfo(metaInfos:any){
                var tags:any = {};
                tags.title = metaInfos.title;
                tags.link = metaInfos.Link;
                tags.pageSchema = metaInfos.PageSchema;
                tags.metas = [];
                metaInfos.MetaPropertyTags.forEach((meta:any)=>tags.metas.push(meta));
                metaInfos.MetaNameTags.forEach((meta:any)=>tags.metas.push(meta));
                this.updatePageMetas(tags)
        }
        updatePageMetas(metaInfo:any){
            var metas = document.querySelectorAll("meta[data-head='tezjs']");
            metas.forEach(x=>x.remove())
              var title = document.getElementsByTagName("title")[0];
              var canonical:any = document.querySelector('link[rel="canonical"');
              if(title) title.innerText = metaInfo.title; 
              else{
                title = document.createElement("title");
                title.innerText = metaInfo.title;
                document.head.insertBefore(title,document.head.firstChild);
              }
              if(canonical) {
                canonical.rel=metaInfo.link.rel;
                canonical.setAttribute("data","head:'tezjs'");
                canonical.href = metaInfo.link.href;
              } 
              else{
                canonical = document.createElement("link");
                canonical.rel=metaInfo.link.rel;
                canonical.href = metaInfo.link.href;
                document.head.insertBefore(canonical,document.head.firstChild);
              }
  
              metaInfo.metas.forEach((meta:any)=>{
                var metaElement:any = document.createElement("meta")
                metaElement.setAttribute("data-head","tezjs");
                if(metaElement.type === "charset")
                  metaElement.setAttribute(meta.type,meta.content)
                else{
                  metaElement.type = meta.type;
                  if(meta.type === "property")
                  metaElement.title = meta.title;
                  else if(meta.type === "name")
                  metaElement.name = meta.title;
                  metaElement.content = meta.content;
                }
                document.head.insertBefore(metaElement,canonical);
              })
              if(metaInfo.pageSchema){
                var scriptElement = document.createElement("script");
                scriptElement.type = "application/ld+json";
                scriptElement.textContent = metaInfo.pageSchema;
                document.head.insertBefore(scriptElement,canonical);
              }
        }

        subscribe(){
            webWorker.onmessage =(e:any)=>{
                var message = e.data;
                var path = message.path;
                switch(e.data.action){
                  case 'pre-fetch':
                    message.data.names.forEach((path:any)=>{
                      if(path){
                      var linkElement:any = document.createElement("link");
                      linkElement.setAttribute('data-head','tezjs-preload');
                      linkElement.rel = "prefetch";
                      linkElement.as = path.indexOf(".js") !== -1 ? "script":"style";
                      if(linkElement.as !== "style")
                        linkElement.crossOrigin=true;
                      linkElement.href=path;
                      document.head.appendChild(linkElement)
                      }
                    })
                    message.data.data.forEach((path:any)=>{
                      if(path && typeof path !== "string"){
                      var linkElement:any = document.createElement("link");
                      linkElement.setAttribute('data-head','tezjs-preload');
                      linkElement.rel = "prefetch";
                      linkElement.as = "fetch";
                      linkElement.crossOrigin=true;
                      linkElement.href=`/payload/${message.uri}/${path}.json`;
                      document.head.appendChild(linkElement)
                      }
                    })
                    break;
                  case 'load-image':
                    webWorker.state[message.id].resolve(message.data);
                    break;
                  case 'set-meta-info':
                    this.setMetaInfo(message.data)
                    break;
                }
              }
        }
    })();