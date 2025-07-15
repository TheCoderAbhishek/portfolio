
export default {
  basePath: 'https://thecoderabhishek.github.io/portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
