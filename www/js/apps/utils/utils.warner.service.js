(function () {
    'use strict';

    angular
        .module('app.utils')
        .factory('warner', warner);

    /* @ngInject */
    function warner ($ionicLoading, $ionicPopup) {
        var service = {
                warn: warn,
				success: success,
            };

        return service;

        function warn (message) {
            $ionicLoading.hide();
            $ionicPopup.alert({
                template: message,
                title: '<i class="ion-alert-circled fa-2x alert"></i>'
            });
        }

		function success (message) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				template: message,
				title: '<i class="ion-thumbsup alert"></i>'
			});
		}
    }
}());
