(function() {
  "use strict";
  angular.module("nestedForm")
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('schoolregistration', {
          url: '/schoolregistration',
          templateUrl: 'templates/registrationform.tpl.html'
        })
        .state('registeredschools', {
          url: '/registeredschools',
          templateUrl: 'templates/registeredschools.tpl.html'
        })

      $urlRouterProvider.otherwise('/schoolregistration');
    });
})();

