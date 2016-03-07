(function () {
	angular
	.module('app.home')
	.controller('HomeCtrl', homeCtrl);

	function homeCtrl ($ionicPlatform, $ionicSideMenuDelegate,
					   $ionicSlideBoxDelegate,
					   Remote,
					   HomeService) {
		var vm = this;

        $ionicPlatform.ready(lockDragContent);

		vm.nextState = goToNextState;
		vm.srcImage = Remote.getBaseMediaURL();

		activate();

		function activate () {
			getContent();
		}

		function getContent () {
			HomeService.getContent().then(function (response) {
				vm.content = response.data;
				return response.data;
			});
		}

		function lockDragContent () {
            $ionicSideMenuDelegate.canDragContent(false);
        }

		function goToNextState () {
			$ionicSlideBoxDelegate.next();
		}
	}

}());
