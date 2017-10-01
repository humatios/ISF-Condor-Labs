/**
 * Created by humatios on 15/09/16.
 */

'use strict';

class SidenavController {

  /* @ngInject */
  constructor($state, $scope, $mdSidenav, $window) {

    this.$mdSidenav = $mdSidenav;
    this.$state = $state;
    this.$scope = $scope;

    this.navElements = [
      {name: 'CREATE_PICTURE', icon: 'create', link: 'create'}
    ];

    this.ourSites = [
      {name: 'Filosofon', siteURL: 'http://www.filosofon.com'},
      {name: 'Tremdy', siteURL: 'http://www.tremdy.com'}
    ];

    if ($window.twttr !== undefined){
      $window.twttr.widgets.load();
    }

  }

  searchVideos(param){
    this.$state.go('search', {param: param});
    this.$scope.param = '';
    this.$mdSidenav('left').close();
  }

}

export {SidenavController};
