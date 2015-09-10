'use strict';

module.exports = function(www) {

  www.directive('feedbackDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/feedback.html',
      scope: {
        save: '&',
        buttonText: '=',
        labelText: '@',
        note: '='
      },
      transclude: true
    };
  });
};
