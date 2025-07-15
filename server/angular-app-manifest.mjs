
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://thecoderabhishek.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5466, hash: '890a21ae206b7215ab932ed0b6f49439ee56fb9d79f467fc2d65fe62500ef7eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1093, hash: '2d1bfd49db83bb66f5d0f5dccf4c40c2716ec0afcee0c328286325fcf6bfbfc0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23138, hash: '84b24d1c507ffdefe4ea0e1c4d7af4c1169a3ec71ae2925f1c90d00b5915fbdb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EIPOKUI4.css': {size: 311731, hash: 'hmGVwegap+s', text: () => import('./assets-chunks/styles-EIPOKUI4_css.mjs').then(m => m.default)}
  },
};
