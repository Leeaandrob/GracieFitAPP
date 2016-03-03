(function () {
	angular
	.module('app.workout')
	.controller('WorkoutsCtrl', workoutsCtrl);

	function workoutsCtrl (WorkoutService) {
		var vm = this;

		activate();

		function activate () {
			getWorkouts();
		}

		function getWorkouts () {
			WorkoutService.workouts().then(function (response) {
				vm.workouts = response.data;
				return response.data;
			});
		}
	}
}());
