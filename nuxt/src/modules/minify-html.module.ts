var minify = require('html-minifier').minify;
const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html:any) {
        console.log('minify html')
        return minify(html);
      }
    }
  }
  