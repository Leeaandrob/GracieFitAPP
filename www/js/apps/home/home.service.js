(function () {
	'use strict';
	angular
	.module('app.home')
	.factory('HomeService', homeService);

	function homeService ($http, Remote) {
		return {getContent: getContent};

		function getContent () {
			return $http.get(Remote.getAPIUrl('home'))
		}
	}
}());
