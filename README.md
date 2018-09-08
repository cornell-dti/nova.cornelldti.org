# dti-nova

> The new DTI website.

## Project Structure

The entire site is built with Vue.js utilizing single page components comprising of JavaScript, SCSS, and Vue HTML templates.

- static
  - branding: _all global branding assets go here_
  - members: _member specific assets (profile images, etc) live here_
  - pages: _assets for particular pages live here_
- src: _all dynamic files live here_
  - assets:  _primarily hosts SVGs which will be inlined in our build system and image files that will be compressed_
  - components:  _all Vue components which will be used across multiple page components_
  - data: _contains all string-based data which will be used for the website_
    - [strings](): _a git [submodule]() which hosts strings to populate the website with_
  - eventbus: _an instance of [Vue] which is utilized as a global eventbus. You can see an example of this utilization here._
  - pages: _Vue components that comprise entire pages on the site._
    - projects: _Page components for specific projects_
  - router: _Initializes the Vue.js routing system._
  - scss: _All global CSS_
    - bootstrap-custom _All overrides of bootstrap defaults live here_
  - App.vue: _The Vue components that other components will be injected into_
  - index.scss: _Imports all SCSS into the app_
  - main.js: _The application entry point, initializes Vue.js_
  - path.js: _A simple library for handling SVG path drawing_

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

We deploy to Heroku. You will need [`heroku-cli`](https://devcenter.heroku.com/articles/heroku-cli).

```bash
# deploy
git push heroku master
```