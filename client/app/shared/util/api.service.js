/**
 * Created by humatios on 21/09/16.
 */
'use strict';

import angular from 'angular';

class ApiService {

  /* @ngInject */
  constructor($http, appConstant, appApiFactory) {

    this.$http = $http;
    this.appConstant = appConstant;
    this.appApiFactory = appApiFactory;

  }

  getDataHome(pagesNumber) {
    let req = {
      data: {pagina: pagesNumber, rows: this.appConstant.PAGES_TO_GET},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/videoshome',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };

    return this.$http(req);
  }

  sendDataUser(userData) {
    let req = {
      data: {usuario: userData},
      method: 'post',
      url: this.appConstant.API_HOST + '/crear/login',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };
    return this.$http(req);
  }

  checkUserShouldUpload(userID) {
    let req = {
      data: {usuario: userID},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/verificarActualizacionUsuario',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };
    return this.$http(req);
  }

  sendDataPagesWithVideos(id, pagesWithVideos) {
    let req = {
      data: {idusuario: id, lista: JSON.stringify(pagesWithVideos)},
      method: 'post',
      url: this.appConstant.API_HOST + '/crear/pagesandvideos',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };
    return this.$http(req);
  }

  searchVideos(param) {
    let pagesNumber = 1;
    let rowNumber = this.appConstant.PAGES_TO_GET;

    let req = {
      method: 'get',
      url: this.appConstant.API_HOST + '/consulta/buscar/'
      + pagesNumber + '/' + rowNumber + '/' + param,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };
    return this.$http(req);
  }

  getVideo(videoID) {
    let ID = videoID;

    let req = {
      data: {idvideo: ID},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/video',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };

    return this.$http(req);
  }

  getRelatedVideos(pageID) {

    let req = {
      data: {pagina: 1, rows:6, idpage:pageID},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/videosrelacionados',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };

    return this.$http(req);
  }

  sendReaction(userID, videoID, reactionCode) {

    let req = {
      data: {idfacebookusuario: userID, idfacebookvideo:videoID, codigovalorparamreaccion:reactionCode},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/reaccion',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };

    return this.$http(req);
  }

  removeReaction(userID, videoID, reactionCode) {

    let req = {
      data: {idfacebookusuario: userID, idfacebookvideo:videoID, codigovalorparamreaccion:reactionCode},
      method: 'post',
      url: this.appConstant.API_HOST + '/consulta/reaccion',
      responseType: 'json',
      transformRequest: this.appApiFactory.transformRequest,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    };

    return this.$http(req);
  }

}

export default angular.module('app.apiService', [])
  .service('appApiService', ApiService)
  .name;
