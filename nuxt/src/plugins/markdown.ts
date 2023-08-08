import markdownIt from 'markdown-it'
export default {
    install: (app:any, options:any) => {
      app.config.globalProperties.$md = new markdownIt();
    }
  }