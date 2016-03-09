(function () {
	angular
	.module('app.graciediet')
	.factory('GracieDietService', graciedietService);

	function graciedietService ($http, Remote) {
		return {
			getSubGroups: getSubGroups,
			getFoods: getFoods
		};

		function getSubGroups () {
			return $http.get(Remote.getAPIUrl('subs'));
		}

		function getFoods (name) {
			return $http.post(Remote.getAPIUrl('foods'), {name:name});
		}

	}
}());
