/**
 * Created by humatios on 15/09/16.
 */

'use strict';

class NavbarController {

  /* @ngInject */
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }
  
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  }

}

export {NavbarController};
