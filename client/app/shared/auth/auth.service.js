'use strict';

import angular from 'angular';

const NOT_AUTH = "NOT_AUTHORIZED";
const AUTH = "AUTHORIZED";

class AuthService {

  /* @ngInject */
  constructor($rootScope, apiFactory, apiService) {
    this.$rootScope = $rootScope;
    this.apiService = apiService;
    this.apiFactory = apiFactory;

    this.NOT_AUTH = NOT_AUTH;
    this.AUTH = AUTH;

    this.HOME_STATE = 'home';
    this.LOGIN_STATE = 'login';
    this.SAVE_STATE = '';

  }

  changeItemsAsLoggedIn() {
    let authAs = this.AUTH; //this.isLoggedInAs();

    if (authAs !== this.NOT_AUTH) {
      this.$rootScope.isAuth = true;
      //this.$rootScope.userName = this.getUserName();
    }

    switch (authAs) {
      case this.NOT_AUTH:

        this.LOGIN_STATE = 'login';

        this.$rootScope.isAuth = false;
        this.$rootScope.userName = '';

        break;

      case this.AUTH:

        this.LOGIN_STATE = 'home';

        break;
    }
  }

  checkPermissionsToModule(moduleName){
    /*this.apiService.getUserPermissions(moduleName)
      .then((response)=> {
        //TODO, 403
      });*/
  }

}


export default angular.module('app.authService', [])
  .service('authService', AuthService)
  .name;
