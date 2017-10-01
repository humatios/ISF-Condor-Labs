'use strict';

import angular from 'angular';

class ApiService {

  /* @ngInject */
  constructor($http, appConstant, apiFactory) {

    this.$http = $http;
    this.apiFactory = apiFactory;
    this.appConstant = appConstant;

  }

  getLogsRecordData(startdate, enddate, state) {
    let req = {
      url: this.appConstant.API_HOST + '/GetLogsRecordData?startdate='
       + startdate + '&enddate=' + enddate + '&state=' + state,
      method: 'GET',
      responseType: 'json'
    };

    return this.$http(req);
  }

}


export default angular.module('app.apiService', [])
  .service('apiService', ApiService)
  .name;
