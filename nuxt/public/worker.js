var IMAGE_STATE = {};
onmessage = async function(e) {    
    var message = e.data;
    if(message.action){
        switch(message.action){
            case 'load-payload':
                loadPayload(message)
                break;
            case 'pre-load':
                preLoad(message);
                break;
                case 'pre-fetch':
                    toJson(`\\payload\\${message.uri}\\pre-load.json`).then(t=>postMessage({uri:message.uri, data:t,action:message.action}));
                    break;
            case 'component-data':
                getComponentData(message);
                break;
            case 'load-image':
                toDataURL(message.uri).then(t=>postMessage({path:message.uri,id:message.id, data:t,action:message.action}));
                break;
            case 'load-script':
                toDataURL(message.uri).then(t=>postMessage({path:message.uri, data:t,action:message.action}));
                break;
            case 'load-css':
                toDataURL(message.uri).then(t=>postMessage({path:message.uri, data:t,action:message.action}));
                break;
            case 'set-meta-info':
                getMetaInfo(message)
                break;
            case 'pre-load-data':
                var data = {};
                    
                for(var i=0;i<message.components.length;i++) {
                    var id = message.components[i][0];
                    if(typeof id !== "string"){
                        var uri = `\\payload${message.path}\\${id}.json`;
                        var result = await toJson(uri);
                        data[id] = result;
                    }
                }
                postMessage({path:message.uri, data:data,action:message.action})
                break;
        }
    }
}

async function getMetaInfo(message){
    var metaInfos = await toJson(`\\payload${message.uri}\\tags.json`);
    var tags = {};
    tags.title = metaInfos.title;
    tags.link = metaInfos.Link;
    tags.pageSchema = metaInfos.PageSchema;
    tags.metas = [];
    metaInfos.MetaPropertyTags.forEach(meta=>tags.metas.push(meta));
    metaInfos.MetaNameTags.forEach(meta=>tags.metas.push(meta));
    postMessage({path:message.uri, data:tags,action:'set-meta-info'})
}
async function preLoad(message){
    
    var uri = message.uri;
    if(uri && message.host.indexOf(":") === -1){
        var components = await toJson(`\\payload${uri}\\pre-load.json`);
        postMessage({path:message.uri, data:components,action:message.action})
    console.log("meta info  called")
    }
    if(message.isSetMetaInfo)
        getMetaInfo(message);
}
const toText = url => fetch(url).then(async t=> await t.text())

const toDataURL = url =>{
    if(IMAGE_STATE[url]){
        return new Promise((resolve,reject)=>{
            resolve(IMAGE_STATE[url])
        })
    }else{
      return  fetch(url)
        .then(response => {
      return response.blob();
        })
        .then(blob => new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => {
              IMAGE_STATE[url] = reader.result;
            resolve(reader.result)
          }
          reader.onerror = reject
          reader.readAsDataURL(blob)
        }))
    }
    
  

} 

  function convert(uri) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function(){
            var canvas = document.createElement("canvas");
            canvas.width = newImg.width;
            canvas.height = newImg.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(newImg, 0, 0);
            var base64=canvas.toDataURL("image/png");
            resolve(base64)
        }
        img.setAttribute('crossorigin', 'anonymous');
        img.src = uri;
    
    })
    
}
function getBase64Image(img,callback) {
    convert(img, function(newImg){
        var canvas = document.createElement("canvas");
        canvas.width = newImg.width;
        canvas.height = newImg.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(newImg, 0, 0);
        var base64=canvas.toDataURL("image/png");
        callback(base64)
    })
}


async function loadPayload(message){
    var splitUrl = message.uri.split("/");
    var lastUrlNode = "/" + splitUrl[splitUrl.length - 1];
    toJson(`\\payload${message.uri}\\${lastUrlNode}.json`);
}

async function getComponentData(message){
    var response = await fetch(`\\payload${message.payloadUri}\\${message.componentIndex}.json`);
    postMessage({path:message.payloadUri, componentIndex:message.componentIndex,data:await response.json(),state:'completed',action:message.action});
}

async function toJson(uri) {
    var response = await fetch(uri.replace(/\\/g,"/").replace(new RegExp("//"),"/"))
    return await response.json();
}
