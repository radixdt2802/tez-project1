

import anchorLink from '../mark-down-plugins/anchor-tag';
import htmlParser from './html/html-parser';
var MarkdownIt = require('markdown-it')({
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: [
        '~/utils/mark-down-plugins/anchor-tag',
        '~/utils/mark-down-plugins/img-tag'
    ]
  });
MarkdownIt.use(anchorLink, {
    pattern: /^https:/ || /^www./ || /^http:/,
    attrs: {
      target: '_blank',
      rel: 'noopener nofollow'
    }
  })
import urlReplacer from './url-replacer.sanitizer';
var defaultRender = MarkdownIt.renderer.rules.image;
MarkdownIt.renderer.rules.image = function (tokens:any, idx:any, options:any, env:any, self:any) {
    try {
        var token = tokens[idx];
        token.attrs.push(["loading", "lazy"]);
        var titleText = '';
        var atributeNode = [];
        var newNodes = [];
        var jObject:any = {};

        token.attrs.forEach((t:any) => {
          if (t[0] === "src") {
            if (t[1].indexOf("https") !== -1) {
              t[1] = urlReplacer(t[1]);
            } else {
              t[1] = process.env.IMAGE_CDN_URL + t[1];
            }
          }
          
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
                splitText = token.content.split("||");

                t[1] = splitText[0];
                if (token.children && token.children.length > 0) {

                    token.children[0].content = splitText[1];
                }

                if (atributeNode.length > 0) {
                    atributeNode[1] = splitText[1];
                }

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

export default function (jObject:any) {
    return cleanObject(jObject, true);
}

function cleanObject(jsonObject:any, isRoot:boolean) {
    var jObject:any = {};
    Object.keys(jsonObject).forEach(t => {
        if (jsonObject[t] && isObject(jsonObject[t])) {
            if (!excludedColumns(t, isRoot))
                jObject[t] = cleanObject(jsonObject[t], false);
        } else if (jsonObject[t] && isArray(jsonObject[t])) {
            if (!excludedColumns(t, isRoot)) {
                jObject[t] = [];
                for (var i = 0; i < jsonObject[t].length; i++) {
                    jObject[t].push(cleanObject(jsonObject[t][i], false));
                }
            }
        } else if (jsonObject[t] !== null && jsonObject[t] !== "" && !excludedColumns(t, isRoot)) {
            var content = jsonObject[t];
            if (t === "LongText" && content) {
                var pattern = /!\[(.*?)\]\((.*?)\)/mg;
                var matcher;
                var masterContent = content
                while ((matcher = pattern.exec(content)) !== null) {
                    if (matcher.length > 2) {
                        var urlText = matcher[2];
                        var altText = matcher[1];
                        var newUrlText = urlText.slice(0, urlText.length - 1) + "||" + altText + '"';
                        masterContent = masterContent.replace(urlText, newUrlText);
                    }
                }
                content = MarkdownIt.render(masterContent);
                content = content ? htmlParser(content.split("\n").map((x:any)=>x.trim())) : content;
            }
          jObject[t] = urlReplacer(content);
        }


    })
    return jObject;
}

function isObject(value:string) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value:string) {
    return Array.isArray(value);
}

function excludedColumns(columnName:string, isRoot:boolean) {
    var columns = ["published_at", "created_at", "updated_at", "ParentPage", "ChangeFrequency", "Priority", "__component", "provider"];
    columns = isRoot ? columns : columns.concat(["MetaTags", "SEO"]);
    return columns.filter(t => t === columnName)[0]
}



