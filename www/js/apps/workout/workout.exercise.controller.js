(function () {
	angular
	.module('app.workout')
	.controller('ExerciseCtrl', exerciseCtrl);

	function exerciseCtrl ($stateParams, $timeout, $scope, WorkoutService, Remote) {
		var vm = this;

		vm.srcImg = Remote.getBaseMediaURL();
		vm.exerciseTitle = $stateParams.name;
		$scope.counter = $stateParams.count;

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
			if($scope.counter ===  0) {
				$scope.$broadcast('timer-stopped', 0);
				$timeout.cancel(mytimeout);
				return;
			}
			$scope.counter--;
			mytimeout = $timeout($scope.onTimeout, 1000);
		};

		$scope.startTimer = function() {
			mytimeout = $timeout($scope.onTimeout, 1000);
		};

		$scope.stopTimer = function() {
			$scope.$broadcast('timer-stopped', $scope.counter);
			$scope.counter = 30;
			$timeout.cancel(mytimeout);
		};

		$scope.$on('timer-stopped', function(event, remaining) {
			if(remaining === 0) {
				console.log('your time ran out!');
			}
		});
	}
}());
