'use strict';

import angular from 'angular';

/* @ngInject */
function ResponseObserver($q, $injector) {

  return {
    'responseError': function (errorResponse) {
      let state = $injector.get('$state');
      let apiFactory = $injector.get('apiFactory');
      switch (errorResponse.status) {
        case 401:
          apiFactory.cookieRemoveAuth();
          state.go('login');
          break;
      }
      return $q.reject(errorResponse);
    }
  };
}

export default angular.module('app.responseObserver', [])
  .factory('responseObserver', ResponseObserver)
  .name;
