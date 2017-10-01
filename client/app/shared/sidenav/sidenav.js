'use strict';

import angular from 'angular';
import { sidenavComponent } from './sidenav.component';

export const sidenav = angular.module('appApp.shared.sidenav', [])
  .component('mySidenav', sidenavComponent)
  .name;
