'use strict';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.when('', '/');

  $urlRouterProvider.otherwise(($injector, $location) => {
    var state = $injector.get('$state');
    state.go('error');
    return $location.path();
  });

  $locationProvider.html5Mode(true);
}

export function translateConfig($translateProvider, $translatePartialLoaderProvider) {
  'ngInject';

  $translatePartialLoaderProvider.addPart('home');
  $translateProvider
    .useCookieStorage()
    .useLoader('$translatePartialLoader', {
      urlTemplate: '../i18n/{part}/{lang}.json'
    })
    .useLoaderCache(true)
    .fallbackLanguage('en')
    .preferredLanguage('en')
    .useSanitizeValueStrategy('escape');

}

export function themingConfig($mdThemingProvider) {
  'ngInject';

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('light-blue');

  $mdThemingProvider.enableBrowserColor();
}

export function translateRefreshConfig($rootScope, $translate) {
  'ngInject';

  $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
    $translate.refresh();
  });
}

export function stateChangeConfig($rootScope, authService) {
  'ngInject';

  /**
   * Verify each time you move from one state (module) to another
   * 'toState.name' is the name of the module to which it is addressed
   */
  $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams, options) {
      authService.changeItemsAsLoggedIn();
      authService.checkPermissionsToModule(toState.name);
    });
}

export function httpInterceptorConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push('responseObserver');
}
