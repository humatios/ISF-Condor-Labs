'use strict';
/*eslint-env node*/
var testsContext;

require('babel-polyfill');
require('angular');
require('angular-mocks');
require('./client/app/shared/ui-router/ui-router.mock');


testsContext = require.context('./client', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
