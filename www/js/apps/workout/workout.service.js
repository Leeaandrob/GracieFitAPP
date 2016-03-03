(function () {
	angular
	.module('app.workout')
	.factory('WorkoutService', workoutService);

	function workoutService ($http, Remote) {
		return {
			workouts: getWorkouts,
			daily: getDaily,
		};

		function getWorkouts () {
			return $http.get(Remote.getAPIUrl('workouts'));

		}

		function getDaily (name, id) {
			return $http.post(Remote.getAPIUrl('workout_recipe'), {
				name: name, id:id
			});
		}
	}
}());
