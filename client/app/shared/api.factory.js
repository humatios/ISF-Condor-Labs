/**
 * Created by humatios on 21/09/16.
 */
'use strict';

import angular from 'angular';

/* @ngInject */
function ApiFactory($rootScope, $location, appConstant) {

  /**
   * Metadata to rootScope.
   * Default: Imagen Logo, Title app and Slogan app.
   * @param Object with optional keys: {IMAGEN_META, TITLE_META o DESCRIPTION}
   */
  function metaData(obj) {
    if (obj === undefined) obj = {};

    let URL_META = $location.absUrl().split('?')[0];
    let IMAGEN_META = obj.IMAGEN_META || appConstant.BASE_URL + appConstant.IMAGE_LOGO;
    let TITLE_META = obj.TITLE_META || "TITLE";
    let DESCRIPTION = obj.DESCRIPTION || "SLOGAN";

    $rootScope.URL_META = URL_META;
    $rootScope.IMAGEN_META = IMAGEN_META;
    $rootScope.TITLE_META = TITLE_META;
    $rootScope.DESCRIPTION = DESCRIPTION;
  }

  function transformRequest(obj) {
    /**
     * This method transforms the passed parameters to an API query
     * so that it is passed as the classic foo=?foo
     * @param obj
     * @returns {string}
     */
    var str = [];
    for (var p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  }

  /**
   * Converts the date given by the API to local time
   * @param dateUTC
   * @returns Local format (ex:) Thursday, September 4 1986 8:30 PM
   */
  function dateUTCtoLocal(dateUTC) {
    let d = moment.utc(dateUTC).local();
    d = d.format("LLLL");
    return d;
  }

  /**
   * Converts the local date to the time requested by the API
   * @param dateLocal
   * @returns UTC format YYYY-MM-DD HH:mm:ss
   */
  function dateLocalToUTC(dateLocal) {
    let d = moment(dateLocal).utc().format("MM/DD/YYYY");
    return d;
  }

  return {
    metaData: metaData,
    dateUTCtoLocal: dateUTCtoLocal,
    dateLocalToUTC: dateLocalToUTC,
    transformRequest: transformRequest
  };
}


export default angular.module('app.apiFactory', [])
  .factory('apiFactory', ApiFactory)
  .name;
