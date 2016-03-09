(function () {
	angular
	.module('app.graciediet')
	.controller('GracieDietFoodsCtrl', graciedietFoodsCtrl);

	function graciedietFoodsCtrl ($stateParams, GracieDietService, Remote) {
		var vm = this;
		vm.srcimage = Remote.getBaseMediaURL();

		activate();

		function activate () {
			getFoods();
		}

		function getFoods() {
			var name = $stateParams.name;

			GracieDietService.getFoods(name).then(function (response) {
				vm.data = response.data;
			});
		}
	}
}());
