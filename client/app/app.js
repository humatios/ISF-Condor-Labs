'use strict';
import {appComponent} from './app.component';

import angular from 'angular';
import ngAria from 'angular-aria';
import ngCookies from 'angular-cookies';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import paTranslate from 'angular-translate';
import paTranslateCookies from 'angular-translate-storage-cookie';
import paTranslateLoaderPartial from 'angular-translate-loader-partial';
import uiRouter from 'angular-ui-router';

import {
  routeConfig, themingConfig, translateConfig, translateRefreshConfig,
  httpInterceptorConfig, stateChangeConfig
} from './app.config';

import {shared} from './shared/shared';
import {components} from './components/components';

angular.module('app', [
  require('angular-material-data-table'),
  require('angular-chart.js'),
  paTranslate,
  paTranslateCookies,
  paTranslateLoaderPartial,
  ngCookies,
  ngResource,
  ngSanitize,
  uiRouter,
  ngAnimate,
  ngAria,
  ngMessages,
  ngMaterial,
  shared.name,
  components.name
])
  .component('app', appComponent)
  .run(translateRefreshConfig)
  .run(stateChangeConfig)
  .config(httpInterceptorConfig)
  .config(routeConfig)
  .config(themingConfig)
  .config(translateConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['app'], {
      strictDi: true
    });
  });
