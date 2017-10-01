/**
 * Created by alexa on 20/09/2016.
 */
'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('error', {
    template: '<error></error>'
  });
}
