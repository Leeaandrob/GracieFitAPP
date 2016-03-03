(function () {
	'use strict';
	angular
	.module('app.home')
	.controller('HomeCtrl', homeCtrl);

	function homeCtrl ($ionicPlatform, $ionicSideMenuDelegate,
					   $ionicSlideBoxDelegate) {
		var vm = this;

        $ionicPlatform.ready(lockDragContent);

		vm.nextState = goToNextState;
		vm.getPremium = getPremium;

		function lockDragContent () {
            $ionicSideMenuDelegate.canDragContent(false);
        }

		function goToNextState () {
			$ionicSlideBoxDelegate.next();
		}

		function getPremium () {
			console.log('foo');
		}
	}

}());
