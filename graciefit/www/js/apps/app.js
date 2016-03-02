(function () {
	'use strict';
	angular
	.module('app', ['ionic', 'app.views', 'app.directives', 'app.account'])
	.run(runBlock)
	.config(configureRoutes);

	function runBlock ($ionicPlatform, $state) {
		$ionicPlatform.ready(setUpIonicKeyboardPlugin);
		$ionicPlatform.ready(setUpStatusBarPlugin);

        function setUpIonicKeyboardPlugin () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(false);
            }
        }

        function setUpStatusBarPlugin () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        }
	}

	function configureRoutes ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('signin', {
			url: '/signin',
			cache: false,
			abstract: true,
			templateUrl: 'js/apps/views/account/signin.html',
			controller: 'SigninController as vm',
			onEnter: onEnterView

		}).state('signin.walkthrough', {
			url: '/walkthrough',
			cache: false,
			templateUrl: 'js/apps/views/account/signin-walkthrough.html',
		}).state('signin.login', {
			url: '/login',
			cache: false,
			templateUrl: 'js/apps/views/account/login.html',
			controller: 'LoginCtrl as vm'
		});

		function onEnterView () {
			if (screen.lockOrientation) {
				screen.lockOrientation('portrait');
			}
		}
		$urlRouterProvider.otherwise('/signin/walkthrough');
	}
}());
