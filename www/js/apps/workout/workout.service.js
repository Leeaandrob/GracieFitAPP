(function () {
	angular
	.module('app.workout')
	.factory('WorkoutService', workoutService);

	function workoutService ($http, Remote, $window) {
		return {
			workouts: getWorkouts,
			daily: getDaily,
			exercise: getExercise
		};

		function getWorkouts () {
			return $http.get(Remote.getAPIUrl('workouts'));

		}

		function getDaily (name, id) {
			return $http.post(Remote.getAPIUrl('workout_recipe'), {
				name: name, id:id
			});
		}

		function getExercise (id) {
			return $http.post(Remote.getAPIUrl('exercise'), {id:id});
		}
	}
}());
