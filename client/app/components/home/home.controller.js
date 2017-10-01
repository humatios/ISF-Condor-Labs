'use strict';

class homeController {

  /* @ngInject */
  constructor(apiFactory, apiService) {

    this.apiService = apiService;
    this.apiFactory = apiFactory;
    apiFactory.metaData();
    this.home = 'home'; //Required.

    this.limitOptions = [20, 10, 5];
    this.order = "dt_Start_Log";
    this.limit = 20;
    this.page = 1;
    this.records = [];

    this.states = ("FL OH GA LA").split(' ').map(function(state) {
      return {abbrev: state};
    });
    this.today = new Date();
    this.labels = ['1', '2', '3', '4', '5', '6'];
    this.exampleData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    this.getLogsRecord();

  }

  getLogsRecord(startDate, endDate, state){
    let self = this;
    self.searching = true;
    startDate = this.transforOrSetToday(startDate);
    endDate = this.transforOrSetToday(endDate);
    state = state || "";
    this.apiService.getLogsRecordData(startDate, endDate, state)
      .then((response) => {
        self.records = response.data;
        self.totalRecords = self.records.length;
        self.searching = false;
      });
  }

  transforOrSetToday(date){
    if (date){
      return this.apiFactory.dateLocalToUTC(date);
    } else {
      let today = moment().format();
      return this.apiFactory.dateLocalToUTC(today);
    }
  }

}
export {homeController};
