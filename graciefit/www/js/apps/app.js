(function () {
	'use strict';
	angular
	.module('app', ['ionic',  'app.account'])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}
		});

	}).config(configureRoutes);

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
