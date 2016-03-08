(function () {
	angular
	.module('app.workout')
	.controller('ExerciseCtrl', exerciseCtrl);

	function exerciseCtrl ($stateParams, $timeout, $scope, WorkoutService, Remote) {
		var vm = this;

		vm.srcImg = Remote.getBaseMediaURL();
		vm.exerciseTitle = $stateParams.name;
		vm.workoutName = $stateParams.workoutName;
		vm.workoutId = $stateParams.workoutId;
		$scope.timer = $stateParams.count;

		var mytimeout = null;

		activate();

		function activate () {
			getExercise();
		}

		function getExercise () {
			var id = $stateParams.exerciseId;
			WorkoutService.exercise(id).then(function (response) {
				vm.data = response.data;
			});
		}

		$scope.onTimeout = function() {
			if($scope.timer ===  0) {
				$scope.$broadcast('timer-stopped', 0);
				$timeout.cancel(mytimeout);
				return;
			}
			$scope.timer--;
			mytimeout = $timeout($scope.onTimeout, 1000);
		};

		$scope.startTimer = function() {
			mytimeout = $timeout($scope.onTimeout, 1000);
			$scope.started = true;
		};

		$scope.stopTimer = function() {
			$scope.$broadcast('timer-stopped', $scope.timer);
			$scope.timer = $stateParams.count;
			$scope.started = false;
			$scope.paused = false;
			$timeout.cancel(mytimeout);
		};

		$scope.pauseTimer = function() {
			$scope.$broadcast('timer-stopped', $scope.timer);
			$scope.started = false;
			$scope.paused = true;
			$timeout.cancel(mytimeout);
		};

		$scope.humanizeDurationTimer = function(input, units) {
			if (input === 0) {
				return 0;
			} else {
				var duration = moment().startOf('day').add(input, units);
				var format = "";
				if (duration.hour() > 0) {
					format += "H[h] ";
				}
				if (duration.minute() > 0) {
					format += "m[m] ";
				}
				if (duration.second() > 0) {
					format += "s[s] ";
				}
				return duration.format(format);
			}
		};

		$scope.$on('timer-stopped', function(event, remaining) {
			if(remaining === 0) {
				$scope.done = true;
			}
		});
	}
}());
