'use strict';

class AppController {

  /* @ngInject */
  constructor($rootScope, appConstant) {
    $rootScope.FB_APP_ID = appConstant.FB_ID;
    $rootScope.TWITTER_USERNAME = appConstant.TWITTER_USERNAME;
  }

}

export {AppController};
