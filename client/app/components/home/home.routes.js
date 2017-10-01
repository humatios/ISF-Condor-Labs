/**
 * Created by alexa on 26/10/2016.
 */
'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>',
    controller: function($state, authService) {
      $state.go(authService.HOME_STATE);
    }
  });
}
