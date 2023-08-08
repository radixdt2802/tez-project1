
function imageAttribute(md:any, config:any) {
    var defaultRender = md.renderer.rules.image;
    md.renderer.rules.image = function (tokens:any, idx:any, options:any, env:any, self:any) {
        try {
            var token = tokens[idx];
            token.attrs.push(["loading", "lazy"]);
            var titleText = '';
            var atributeNode = [];
            var newNodes = [];
            var jObject:any = {};
            token.attrs.forEach((t:any) => {
                if (t[0] === "src")
                    t[1] = t[1].indexOf("https") !== -1 ? t[1] : "https://rx-blogimages.s3.ap-south-1.amazonaws.com/" + t[1];
                if (t[0] === "title") {
                    
                    titleText = t[1];
                    var splitText = titleText.split(/{{(.*?)}}/);
                    splitText.forEach(t => {
                        if (t) {
                            if (t.indexOf("=") !== -1) {
                                t = t.replace(" = ", "=").trim();
                                var splitSpace = t.split(" ");

                                splitSpace.forEach(x => {
                                    var splitEqual = x.split('=');
                                    jObject[splitEqual[0]] = splitEqual[1];
                                })
                            }
                        }
                    })
                    token.content = splitText[splitText.length - 1].trim();
                    titleText = token.content;
                    t[1] = titleText;
                    if (token.children && token.children.length > 0)
                        token.children[0].content = titleText
                    if (atributeNode.length > 0 && titleText)
                        atributeNode[1] = titleText;
                }
                if (t[0] === "alt")
                    atributeNode = t;

            });
            Object.keys(jObject).forEach(t => {
                token.attrs.push([t, jObject[t]]);
            })

        } catch (e) {
            var t = e;
        }

        // pass token to default renderer.
        var result = defaultRender(tokens, idx, options, env, self);
        return result;
    };
}

imageAttribute.defaultRender = function (tokens:any, idx:any, options:any, env:any, self:any) {
    return self.renderToken(tokens, idx, options);
}


export default imageAttribute;


