'use strict';
import angular from 'angular';

import { navbar } from './navbar/navbar';
import { sidenav } from './sidenav/sidenav';
import apiService from './api.service';
import apiFactory from './api.factory';
import authService from './auth/auth.service';
import interceptorFactory from './auth/interceptor.factory';
import fznDatePicker from './datepicker/datepicker';
import match from './validation-match/angular-validation-match';
import constants from './constants';
import util from './util/util.module';
import { fabButton } from './fabButton/fabButton';

export const shared = angular.module('app.shared', [
  apiService,
  apiFactory,
  authService,
  interceptorFactory,
  constants,
  util,
  navbar,
  sidenav,
  fabButton
])
  .directive('datePicker', fznDatePicker)
  .directive('match', match);
