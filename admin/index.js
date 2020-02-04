import './netlifyConfig';

import CMS from 'netlify-cms'; // -app/dist/esm
import CMSIdentity from 'netlify-identity-widget';

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Load our stylesheets (only works in production builds)

CMS.registerPreviewStyle('/admin/css/chunk-vendors.css');
CMS.registerPreviewStyle('/admin/css/cms.css');

window.netlifyIdentity = CMSIdentity;

CMSIdentity.on('init', () => {
  if (!CMSIdentity.currentUser) {
    CMSIdentity.open();
  }
});

CMSIdentity.on('error', err => {
  // eslint-disable-next-line no-console
  console.error(err);
});

CMSIdentity.init();
CMS.init();
