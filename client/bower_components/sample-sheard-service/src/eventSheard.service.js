(function() {
  'use strict';

  angular.module('app.component.events', [])
    .factory('app.component.events.sheard.service', eventSheardService);

  eventSheardService.$inject = [];

  function eventSheardService() {

    var chacheData = [];
    var tagString = void 0;

    var service = {
      event:{
        /** 本来ならvalidation */
        create: events=> chacheData = events,
        get: ()=> chacheData,
        getTags: ()=> {
          var preTags;
          return chacheData.map(event=> event.tag)
            .sort()
            .filter(tag=> {
              var isMatch = tag !== preTags;
              preTags = tag;
              return isMatch;
            });
        },

      },
      tag:{
        set: tag=> tagString = tag,
        get: ()=> tagString,
        filter: ()=> tagString ? {tag:`${tagString}`} : {},
        clear: ()=> tagString = void 0,
      },
    };
    return service;
  }

})();
