(function () {
	'use strict';
	angular
	.module('app', ['ionic',  'app.account'])
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
			$state.go('signin');
		}
	}

	function configureRoutes ($stateProvider) {
		$stateProvider
		.state('signin', {
			url: '/signin',
			cache: false,
			templateUrl: 'js/apps/account/signin.html',
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
