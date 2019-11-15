import './netlifyConfig';
import './vue';

import { VueInReact } from 'vuera';
import CMS from 'netlify-cms'; // -app/dist/esm
import Profile from './previews/Profile';
import ApplyPage from './previews/Apply';

CMS.registerPreviewTemplate('member', VueInReact(Profile));
CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Core site styles

CMS.registerPreviewStyle('/public/cms/css/main.css');

// Page-specific CSS

CMS.registerPreviewStyle('/public/cms/css/cms.css');


CMS.init();
