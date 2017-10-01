'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { errorComponent } from './error.component';
import routing from './error.routes';

export const error = angular.module('app.components.error', [uiRouter])
  .config(routing)
  .component('error', errorComponent)
  .name;
