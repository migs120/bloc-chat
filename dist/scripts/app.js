




 (function() {
     function config($stateProvider, $locationProvider) {
                                                           $locationProvider
                                                           .html5Mode({
                                                                         enabled: true,
                                                                         requireBase: false
                                                                     });   

                                                             $stateProvider
                                                             .state('landing', {
                                                                                 url: '/',
                                                                                 controller: 'LandingCtrl as landing',
                                                                                 templateUrl: '/templates/landing.html'
                                                                                })
                                                              .state('modal', {
                                                                                 url: '/modal',
                                                                                 controller: 'ModalInstanceCtrl as modal ',
                                                                                 templateUrl: '/templates/modal.html'
                                                                                })

                                                     }
 

     angular
         .module('blocChat', ['ui.router',"firebase"
                             // ,'ngAnimate'
                              ,'ngCookies'
                              , 'ui.bootstrap'
                             ])
         .config(config);
 })();