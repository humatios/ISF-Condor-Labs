import angular from 'angular';

import { home } from './home/home';
import { error } from './error/error.module';

const components = angular.module('app.components', [
  home,
  error
]);

export { components };
