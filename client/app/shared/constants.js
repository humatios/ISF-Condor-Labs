'use strict';

import angular from 'angular';

export default angular.module('app.constants', [])
  .constant('appConstant', require('../../../server/config/environment/shared'))
  .name;
