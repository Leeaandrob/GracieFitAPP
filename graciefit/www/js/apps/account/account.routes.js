(function () {
    'use strict';

    angular
    .module('app.account')
    .config(configureRoutes);

    /* @ngInject */
    function configureRoutes ($stateProvider) {
        $stateProvider
        .state('signin', {
            url: '/signin',
            cache: false,
            templateUrl: 'apps/account/signin.html',
            controller: 'SigninController as vm',
            onEnter: onEnterView
        });

        function onEnterView () {
            if (screen.lockOrientation) {
                screen.lockOrientation('portrait');
            }
        }
    }
}());
