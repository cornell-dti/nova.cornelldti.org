# Cornell DTI Website

_Last updated **05/20/2020**_.

## Contents

- [Cornell DTI Website](#cornell-dti-website)
  - [Contents](#contents)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Directory Structure](#directory-structure)
    - [Contribution Guide](#contribution-guide)
      - [Update Personal Information](#update-personal-information)
      - [Update Member Headshots](#update-member-headshots)
      - [Update Project Assets](#update-project-assets)
      - [Update Page Assets](#update-page-assets)
    - [Build Setup](#build-setup)
    - [Deploy Setup](#deploy-setup)
  - [Dependencies & Libraries](#dependencies--libraries)
  - [Screenshots](#screenshots)
  - [Contributors](#contributors)

## About

A web app for informing the general public about the Cornell Design & Tech Initiative project team, our goals, our projects, our initiatives, and how you can support us. **[https://www.cornelldti.org](https://www.cornelldti.org)**.

## Getting Started

You will need **a text editor (VS Code, Atom, Brackets, Webstorm)** to run the latest version of this app, which uses the following **packages**:

- Node.js v12.x
- Yarn version >= 1.22.x

### Directory Structure

The entire site is built with Vue.js utilizing single page components comprising of JavaScript, SCSS, and Vue HTML templates.

The layout of the [`website`](./packages/website) folder is shown below:

- static: _all files which need to be served on / go here_
  - static: _all files which need to be served on /static/ go here_
    - branding: _all global branding assets go here_
    - members: _headshots for team members live here_
    - projects: _assets for projects live here_
    - pages: _assets for particular pages live here_ (videos are not stored in this folder. Instead, they are in a separate S3 bucket and served via cloudfront. Ask a team/developer lead for access in case you need it.)
- data: _contains all string-based data which will be used for the website_
- src: _all dynamic files live here_
  - index.html: the base template for the entire site.
  - assets:  _primarily hosts SVGs which will be inlined in our build system and image files that will be compressed_
  - components:  _all Vue components which will be used across multiple page components_
  - eventbus: _an instance of [Vue] which is utilized as a global eventbus._
  - pages: _Vue components which load JSON and site data to display via a **view**._
  - 
  - templates: _Vue components which can represent a member of a collection_
  - scss: _All global CSS_
    - bootstrap-custom _All overrides of bootstrap defaults live here_
  - util: _Various TypeScript utilities_
  - views: _Views display the data loaded by **pages**._
  - App.vue: _The Vue components that other components will be injected into_
  - index.scss: _Imports all SCSS into the app_
  - main.ts: _The application entry point, initializes Vue.js_
  - lib.ts: _The library entry point. The CMS uses this library to preview site edits._
  - shared.ts: _Vue initialized code shared between **main.ts** and **lib.ts**_

**Note:** all the assets in `packages/website/static/static` need to be properly optimized.
Not optimizing the assets will cause you to fail the CI checks that enforces the size of the assets
are below a certain threshold. To automatically optimize assets, read the instructions in the
[`image-cli`](./packages/image-cli/index.js) and run `yarn image-cli` followed by
arguments to be passed into `image-cli`.

### Contribution Guide

This section covers some simple scanarios for updating the website.

#### Update Personal Information

Edit the relevant json in `packages/website/data/members`. Run `yarn workspace website serve` to preview your change locally.

#### Update Member Headshots

Put the headshot in `packages/website/static/static/members`. The image must be in jpg and must has
the same aspect ratio with all the existing images. The images should be optimized before committing
to the repo.

To optimized new images, put them in a folder, and run

```bash
yarn image-cli transform [path-to-your-image-folder]
```

Optimized images will appear in `[path-to-your-image-folder]/build`. They should be all below 20KB.

#### Update Project Assets

Put the assets in `packages/website/static/static/projects`. The name of the assets must follow the
existing naming convention in the folder. The image must be in jpg or png and it must has the same
aspect ratio with all the existing images. The image should be optimized before committing to the
repo.

To optimized new images, put them in a folder, and run

```bash
yarn image-cli transform [path-to-your-image-folder] --no-resize
```

Optimized images will appear in `[path-to-your-image-folder]/build`. They should be all below 600KB.

#### Update Page Assets

Put the assets in `packages/website/static/static/pages`. The name of the assets must follow the
existing naming convention in the folder. The image must be in jpg or png and it must has the
similar size compared to corresponding existing images. The image should be optimized before
committing to the repo.

To optimized new images, put them in a folder, and run

```bash
yarn image-cli transform [path-to-your-image-folder] --no-resize
```

Optimized images will appear in `[path-to-your-image-folder]/build`. They should be all below 700KB.

### Build Setup

``` bash
# install dependencies
yarn
# build for production with minification
yarn workspace website build
```

### Deploy Setup

Our `master` branch automatically deploys to `gh-pages`, which is then tracked by our Netlify staging instance.

## Dependencies & Libraries

 * [Vue](https://vuejs.org) 2.6.x - A JavaScript front-end framework for building component-driven web applications. Vue offers a flexible, strong developer framework that is more well structured and powerful than Angular, and has a better learning curve than React.

* [Gridsome](https://gridsome.org/) 0.7.x - A pre-rendering and optimization suite for Vue.

 * [Bootstrap Vue](https://bootstrap-vue.js.org) 2.14.x - An implementation of Bootstrap v4 that provides developers with a comprehensive set of components and integrations with Vue.

 * [Webpack](https://webpack.js.org) 4.1.0+ -  A module bundler that manages dependency usage, compression of CSS & JavaScript code, compilation of Vue to JavaScript, and management of assets.

## Screenshots
​
![Screenshot 1](.github/screenshots/screenshot1.png)
![Screenshot 2](.github/screenshots/screenshot2.png)
![Screenshot 3](.github/screenshots/screenshot3.png)
​
## Contributors
​
**2020**
 * **Evan Welsh** - Team Lead
 * **Sam Zhou** - Developer Lead

**2019**
 * **Evan Welsh** - Product Manager
 * **Will Spencer** - Frontend Developer
 * **Andrew Yates** - Backend Developer
 * **Kathleen Xu** - Business Represenative + Developer/Designer
 * **Sanjana Seshadri** - Designer
 * **Ishika Jain** - Designer

**2018**
 * **Alice Pham** - Product Manager
 * **Evan Welsh** - Developer
 * **Kathleen Xu** - Business Analyst
 * **Matt Barker** - Designer
 * **Shea Belsky** - Developer
 * **Wenchang Yang** - Designer
 * **Yvonne Chan** - Developer

 **2017**
 * **Alice Pham** - Product Manager, Developer
 * **Alice Zhou** - Developer
 * **David Chu** - Developer
 * **Karun Singh** - Developer
 * **Matt Barker** - Designer, Developer
​

We are a team within **Cornell Design & Tech Initiative**. For more information, see our website [here](https://cornelldti.org/).
<img src="https://raw.githubusercontent.com/cornell-dti/design/master/Branding/Wordmark/Dark%20Text/Transparent/Wordmark-Dark%20Text-Transparent%403x.png">
​
