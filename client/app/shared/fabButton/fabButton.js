'use strict';

import angular from 'angular';
import { fabButtonComponent } from './fabButton.component';

export const fabButton = angular.module('appApp.shared.fabButton', [])
  .component('fabButton', fabButtonComponent)
  .name;
