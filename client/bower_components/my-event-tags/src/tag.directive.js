(function() {
  'use strict';

  angular.module('app.component.events.directive', ['app.component.events'])
    .directive('eventTags', tagDirective);

  tagDirective.$inject = ['app.component.events.sheard.service'];

  /**
   * @classdesc タグ検索Directive
   *
   * @namespace tagDirective
   * @class tagDirective
   * @constructor
   */
  function tagDirective(sheardService) {

    function tagLink(scope) {
      scope.setTag = tag=>sheardService.tag.set(tag);
      scope.clearTag = tag=>sheardService.tag.clear();
      scope.getTags = ()=> sheardService.event.getTags();
      scope.getTag = ()=> sheardService.event.get();
      scope.isUseTag = tag=> tag === sheardService.tag.get();
    }

    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'tag.directive.html',
      scope: {},
      link: tagLink,
    };
  }

})();
