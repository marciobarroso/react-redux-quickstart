react-redux-quickstart
===================

This is a **minimal** React application to give me a starting point for future projects, and illustrate some basic tooling. I am purposefully neglecting many libraries and techniques that you would find in a full-featured React application, such as state management, code-splitting, or server-side rendering. While this things are important, they are not required to get up and running responsibly.

If you are looking for a full-featured starter kit or boilerplate, I recommend the Facebook sponsored  [create-react-app](https://github.com/facebookincubator/create-react-app).


## A quick word of caution

Keep in mind that the front end space changes extremeley rapidly. This repo may be out of date, especially the dependency versions specified in the "package.json" file.


## Getting up and running

Install dependencies: `yarn`

Start the development server: `yarn dev-server`

`open http://localhost:8080`


## What's included here:

[Running tasks](#running-tasks)
[Component organization](#component-organization)
[Managing packages](#managing-packages)
[Building and bundling](#building-and-bundling)
[Styling](#styling)
[Linting](#linting)
[Testing](#testing)
[Library recommendations](#library-recommendations)


## Running tasks

Use "package.json" scripts instead of a task runner such as grunt or gulp.

Available scripts:

* `yarn build`: Builds the application bundle.
* `yarn dev-server`: Runs the webpack dev server. Automatically rebuilds the bundle and refreshes the browser when it detects changes to any modules in the bundle.
* `yarn test`: Runs tests
* `yarn test:watch`: Runs tests when a change is made to a test or a file under test.


## Component Organization

Organize components and related files by their feature. When a module has more than 1 file associated with it, such as a JavaScript file and a CSS file, create a folder for them. Control boundaries between disparate groups of components using an "index.js" file to export only the public components.

Avoid deeply nested folder structures, as this tends to get hard to manage over time.

Consider naming components and related files uniquely, rather than relatively. This makes it easy to find files. Don't have files called "styles.css" or "actions.js".


## Managing packages

Use [yarn](https://code.facebook.com/posts/1840075619545360) instead of npm. There is a "yarn.lock" file checked in already.

The default package manager for JavaScript projects has traditionally been npm. While npm remains popular and functional, I recommend that you use yarn with this repo.

Yarn is a package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably. Yarn is almost a 1-to-1 replacement for all npm commands. For most commands, just replace the word `npm` with `yarn`. Yarn also continues to use the package.json file, so projects will not need to make any changes to the file structure.


## Building and bundling

Write JavaScipt in ECMAScript 6, and use [Babel](https://babeljs.io/) to transpile it before shipping it to the browser.

Babel is configured with a ".babelrc" file, and includes the following presets:

* [env](https://babeljs.io/docs/plugins/preset-env/): This is the default preset for Javascript. It is "a Babel preset that can automatically determine the Babel plugins and polyfills you need based on your supported environments." It can be configured to to compile for various configurations of browser versions and uses data from http://caniuse.com/.
* [react](https://babeljs.io/docs/plugins/preset-react/): Transforms JSX into React.createElement.

Use [webpack](https://webpack.js.org/) as a module bundler. webpack is configured with a "webpack.config.js" file.


## Styling

Write CSS using CSS-in-JS. Avoid using a preprocessor such as Sass or LESS, as those tools encourage global styling and increase the tooling needed to build the styles and the bundle. Don't rely on a naming convention such as BEM for easing the pain of global CSS.

As a base, this repo is configured with webpack's [css-loader](https://github.com/webpack-contrib/css-loader) with [CSS Modules](https://github.com/css-modules/css-modules) enabled. This makes all class names local to their component by default.

### Global CSS

There is a single global style sheet ("global.css") to set up the few needed global and inherited styles, such as applying styles to the `html` and `body` tag and setting the base font. Keep the global CSS footprint to an absolute minimum.

This project does not currently include CSS "resetting." If you need this, consider using the [Eric Meyer reset](https://meyerweb.com/eric/tools/css/reset/). It is lightweight and battle-tested. Though it has been unchanged for many years, it remains very applicable. Because it's not a library, feel free to change it as you see fit.

### Expanding your styles

When you need more capabilities for CSS, consider using [PostCSS](https://github.com/postcss/postcss). It works in a similar manner to Babel, using [transformers](https://github.com/postcss/postcss/blob/master/docs/plugins.md) to process your CSS. PostCSS is still very new though, so be prepared for some growing pains.

There are [many CSS-in-JS techniques and libraries around](https://github.com/MicheleBertoli/css-in-js), so do your due diligence before choosing one. I don't have much experience here yet beyond PostCSS with CSS Modules.


## Linting

Both eslint and stylelint are done during the build process by using the [eslint-loader](https://github.com/MoOx/eslint-loader) and [StyleLintPlugin](https://github.com/JaKXz/stylelint-webpack-plugin), respectively.

You may find that you want additional rules, or you do not prefer the rules in place. Feel free to edit the linting settings as you see fit.

### JavaScript

[eslint](http://eslint.org/) is included for linting JavaScript. The ".eslintrc.json" file configures eslint for ES6 and JSX, and includes the following recommended rule settings:

* [eslint:recommended](http://eslint.org/docs/rules/)
* [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react)

### CSS

[stylelint](https://github.com/stylelint/stylelint) is included for linting CSS. The ".stylelintrc.json" file configures stylelint with the following recomended rule settings:

* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
* [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules): Allows stylelint to accept CSS Modules syntax.


## Testing

I prefer the mocha + enzyme stack for testing React components. This repo uses these tools:

* [mocha](https://mochajs.org/): node-based test framework. No browser required.
* [chai](http://chaijs.com/): Assertion library. Use the "expect" syntax.
* [enzyme](http://airbnb.io/enzyme/): Testing library for React components.
* [chai-enzyme](https://github.com/producthunt/chai-enzyme): Chai assertions for testing with Enzyme.

In addition, a couple of extra extensions are required. This are configured as command line parameters in the "package.json" script.

Tests are also written using ES6 and JSX syntax, so they must be transpiled by Babel using [babel-register](https://babeljs.io/docs/usage/babel-register/) before mocha can understand them.

The [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) is also required so that mocha understands the CSS module syntax.

As your application gets more complex, you may find that you have to configure mocha more and more. When this happens, consider using [mocha-webpack](http://zinserjan.github.io/mocha-webpack/) to seamlessly plug your webpack configuration into mocha.


## Library recommendations

I want to...

* User Interface
  * build a component-based user interface. [React](https://facebook.github.io/react/)
  * support URLs. [React Router](https://reacttraining.com/react-router/)
* State Management
  * manage application state. [Redux](Redux)
  * and connect the state to my user interface. [React Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
  * manage side effects...
    * that are simple, such as browser history changes. [Redux Thunk](Redux Thunk)
    * that are complex and long running, such as api calls. [redux-saga](https://redux-saga.github.io/redux-saga/)
  * have syntactic sugar for performing immutable state changes. [Immutability Helper](https://github.com/kolodny/immutability-helper)
  * guarantee immutable state. [Immutable.js](https://facebook.github.io/immutable-js/)
* Styling
  * write modular CSS. [CSS Modules](https://github.com/css-modules/css-modules)
  * lay out, align and distribute space among items in a container, even when their size is unknown or dynamic. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Testing
  * run unit tests. [Mocha](https://mochajs.org/)
  * write test assertions. [Chai](http://chaijs.com/)
  * unit test React components. [Enzyme](http://airbnb.io/enzyme/)
    * and write intuitive assertions with friendly error messages. [Chai-Enzyme](Chai-Enzyme)
  * create mocks and stubs. [Sinon](http://sinonjs.org/)
    * and write intuitive assertions with friendly error messages. [Sinon-Chai](Sinon-Chai)
    * and stub/mock api calls. [Fetch Mock](Fetch Mock)
    * that are external to my application. [mountebank](mountebank)
  * test promises. [Chai-as-Promised](Chai-as-Promised)
    * and stub them. [Sinon-as-promised](Sinon-as-promised)
  * determine my test coverage. [nyc](nyc)
  * make a lightweight JavaScript based headless browser and DOM available for my tests. [jsdom](jsdom)
* Build process
  * compile ES code into plain JavaScript. [Babel](https://babeljs.io/)
  * bundle my application, including non-JS files. [Webpack](https://webpack.js.org/)
  * serve my application with Node.js. [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  * manage dependencies deterministically. [yarn](https://yarnpkg.com/)
  * analyze code for potential errors...
    * with JavaScript. [ES Lint](http://eslint.org/)
    * with CSS. [Style Lint](https://github.com/stylelint/stylelint)
    * with browser compatibility. [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
    * with accessibility. [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  * inject constants or environment variables into my JavaScript build. [Webpack - DefinePlugin](https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin)
  * build for production. [Webpack - building for production guide](https://webpack.js.org/guides/production-build/)
* Debugging
  * see JavaScript source maps in the browser. [Webpack - devtool](https://webpack.js.org/configuration/devtool/)
  * inspect my React components in Google Chrome. [React Developer Tools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  * visualize my Redux state in the browser, including the history, undo and replay. [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)
* Misc
  * make web requests (api calls) in JavaScript. [Whatwg Fetch](https://www.npmjs.com/package/whatwg-fetch)
  * have a general purpose utility library. [Lodash](Lodash) (Get the [lodash-es](lodash-es) package for the native ES2015 modules)
  * parse, validate, manipulate, and display dates and times in JavaScript. [date-fns](https://date-fns.org/)
  * support older browsers that do not support newer ECMAScript features such as Promise. [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/)
