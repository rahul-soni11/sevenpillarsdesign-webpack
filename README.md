# 📦 Webpack Boilerplate for Shopnex

Minimal Webpack 4 boilerplate with Babel, Sass, ESLint, Hot Module Replacement, and development/production optimization.

## Installation

```
git clone https://github.com/rahul-soni11/webpack-boilerplate-django.git
npm i
```

## Usage

### Development server

```bash
npm start
```

### Production build

```bash
npm run build
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript.
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class.
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Lint Babel code.
  - [`eslint`](https://github.com/eslint/eslint) - ESLint.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and Webpack.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS.
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass.
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS.
  - [`cssnano`](https://github.com/cssnano/cssnano) - Optimize and compress PostCSS.
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolves CSS imports into JS.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM.
- [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Use ESLint with Webpack.
- [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files to build folder.
- [`url-loader`](https://webpack.js.org/loaders/url-loader/) - Encode and inline files. Falls back to file-loader.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets.
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minify JavaScript.

## File Structure

File structure reference for Django Shopnex ecommerce project.

html/
├── accounts
│   └── auth
│       ├── _form_errors.html
│       ├── account_activation_blank.html
│       ├── login.html
│       ├── register.html
│       └── send_confirm_email.html
├── base.html
├── blank-page.html
├── cart.html
├── flatpages
│   └── default.html
├── footer.html
├── navbar
│   ├── _auth_cart.html
│   └── navbar.html
├── products
│   ├── _items.html
│   ├── detail-parts
│   │   ├── _description.html
│   │   └── _images.html
│   ├── detail.html
│   ├── list.html
│   └── pagination.html
├── registration
│   ├── logged_out.html
│   ├── password_change_done.html
│   ├── password_change_form.html
│   ├── password_reset_complete.html
│   ├── password_reset_confirm.html
│   ├── password_reset_done.html
│   └── password_reset_form.html
└── shop
    ├── components
    │   ├── _carousel.html
    │   ├── _highlights.html
    │   ├── _instagramSection.html
    │   ├── _swiper.html
    │   └── _videoSection.html
    └── home.html

## Important Shopnex Template Tags



## Author

- [Rahul Soni](https://github.com/rahul-soni11/)
