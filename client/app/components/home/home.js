/**
 * Created by alexa on 26/10/2016.
 */
import angular from 'angular';

import { homeComponent } from './home.component';
import routing from './home.routes';

export const home = angular.module('app.components.home', [])
  .config(routing)
  .component('home', homeComponent)
  .name;
