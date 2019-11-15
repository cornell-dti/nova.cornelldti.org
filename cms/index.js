import './netlifyConfig';
import './vue';

import { VueInReact } from 'vuera';
import CMS from 'netlify-cms'; // -app/dist/esm
import Profile from './previews/Profile';
import Apply from '@/pages/Apply';
import Sponsor from '@/pages/Sponsor';

import wrap from './previews/preview';

const ApplyPage = wrap('apply', [
  'join-information',
  'main-menu',
  'hero',
  'info-session',
  'info-sessions',
  'application-info'
], Apply);

const SponsorPage = wrap('sponsor', [
  'hero',
  'pitch',
  'call-to-action',
  'current-sponsors',
  'tiers'
], Sponsor);

CMS.registerPreviewTemplate('member', VueInReact(Profile));
CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));
CMS.registerPreviewTemplate('page-sponsor', VueInReact(SponsorPage));

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Core site styles

CMS.registerPreviewStyle('/public/cms/css/main.css');

// Page-specific CSS

CMS.registerPreviewStyle('/public/cms/css/cms.css');


CMS.init();
