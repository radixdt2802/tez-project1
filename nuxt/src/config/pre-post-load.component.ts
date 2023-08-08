export const prePostComponents = 
 [
  {
    match: (url:any) => url === '/contact-us',
    pre: [{ name: 'header-landing' }],
    post: [{ name: 'footer-landing' }]
  },
  {
    match: (url:any) => url.indexOf('/') !== -1 && url.indexOf('services/') === -1,
    pre: [{ name: 'header-inverse', data: { mobileComponentName: 'header-mobile' } }],
    post: [{ name: 'footer' }]
  },
  {
    match: (url:any) => url.indexOf('services/') !== -1 && url !== '/' && url !== '/contact-us',
    pre: [{ name: 'header', data: { mobileComponentName: 'header-mobile' } }],
    post: [{ name: 'footer' }],
  },
]
