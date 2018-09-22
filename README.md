# Cornell DTI Website

_Last updated **9/22/2018**_.
​
#### Contents
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Dependencies & Libraries](#dependencies--libraries)
  - [External Documentation](#external-documentation)
  - [Screenshots](#screenshots)
  - [Contributors](#contributors)
​
## About
A web app for informing the general public about the Cornell Design & Tech Initiative project team, our goals, our projects, our initiatives, and how you can support us. **[https://www.cornelldti.org](https://www.cornelldti.org)**.
​
## Getting Started
You will need **a text editor (VS Code, Atom, Brackets, Webstorm)** to run the latest version of this app, which uses the following **packages**:
​
 * Node.js version 9.11.1
   * NPM version 5.6.0
   * Yarn version 1.9.2

### Directory Structure
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

### Build Setup
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

### Deploy Setup

We deploy to Heroku. You will need [`heroku-cli`].

```bash
# deploy
git push heroku master
```
​
## Dependencies & Libraries
 * [Vue](https://vuejs.org) 2.5.2 - A JavaScript front-end framework for building component-driven web applications. Vue offers a flexible, strong developer framework that is more well structured and powerful than Angular, and has a better learning curve than React. 

 * [Express](https://expressjs.com) 4.16.3 - A back-end library that implements a web server for our back-end. We use it to route initial requests to our front-end (Vue).

 * [Bootstrap](https://bootstrap-vue.js.org) 2.0 - An implementation of Bootstrap that provides developers with a comprehensive set of components and integrations with Vue.

 * [Webpack](https://webpack.js.org) 3.6.0 -  A module bundler that manages dependency usage, compression of CSS & JavaScript code, compilation of Vue to JavaScript, and management of assets.

 * [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - A command-line tool for deploying applications to Heroku.
​
## Screenshots
​
![Screenshot 1](.github/screenshots/screenshot1.png)
![Screenshot 2](.github/screenshots/screenshot2.png)
![Screenshot 3](.github/screenshots/screenshot3.png)
​
## Contributors
​
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