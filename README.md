# CE Broker Technical test

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.0.4.

Modified by HT

## Getting Started

Note: `_index.html` is the template for creating real `index.html`, don't delete it!

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the client and server unit tests with karma and mocha.

Use `gulp test:server` to only run server tests.

Use `gulp test:client` to only run client tests.

- Protractor tests

Use `gulp test:e2e` to have protractor go through tests located in the e2e folder.

- Code Coverage

Use `gulp test:coverage` to run mocha-istanbul and generate code coverage reports.

coverage/server will be populated with e2e and unit folders containing the lcov reports.

The coverage taget has 3 available options:

test:coverage:unit generate server unit test coverage
test:coverage:e2e generate server e2e test coverage
test:coverage:check combine the coverage reports and check against predefined thresholds
when no option is given test:coverage runs all options in the above order

- Debugging

Use `gulp serve:debug` for a more debugging-friendly environment.
