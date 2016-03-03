(function () {
	'use strict';

	angular
	.module('app.auth')
	.factory('AuthUser', authUser);

	function authUser ($http, Remote) {
		return {
			login: doLogin,
			register: register,
		};

		function doLogin (user) {
			return $http.post(Remote.getAPIUrl('auth'), user);
		}

		function register (user) {
			return $http.post(Remote.getAPIUrl('register'), user);
		}
	}
}());
