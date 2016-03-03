(function () {
	angular
	.module('app.workout')
	.controller('WorkoutCtrl', workoutCtrl);

	function workoutCtrl ($stateParams, WorkoutService, Remote) {
		var vm = this;

		vm.srcImage = Remote.getBaseMediaURL();

		activate();

		function activate () {
			getDaily();
		}

		function getDaily () {
			var name = $stateParams.name, id = $stateParams.id;
			WorkoutService.daily(name, id).then(function (response) {
				vm.data = response.data;
			});
		}
	}
}());
