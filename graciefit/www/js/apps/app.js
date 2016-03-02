(function () {
	'use strict';
	angular
	.module('app', ['ionic', 'app.views', 'app.account'])
	.run(runBlock)
	.config(configureRoutes);

	function runBlock ($ionicPlatform, $state) {
		$ionicPlatform.ready(setUpIonicKeyboardPlugin);
		$ionicPlatform.ready(setUpStatusBarPlugin);
		$ionicPlatform.ready(gotoSignin);

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

		function gotoSignin () {
			$state.go('signin.walkthrough');
		}
	}

	function configureRoutes ($stateProvider) {
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
	}
}());
