(function () {
	angular
	.module('app.graciediet')
	.controller('GracieDietCtrl', gracieFitDietCtrl);

	function gracieFitDietCtrl (GracieDietService, Remote) {
		var vm = this;
		vm.srcImage = Remote.getBaseMediaURL();

		activate();

		function activate () {
			getSubs();
		}

		function getSubs () {
			GracieDietService.getSubGroups().then(function (response) {
				vm.subs = response.data;
			});
		}

		function sortSubs () {
			window.CONTACTS
			.sort(function(a, b) {
				return a.last_name > b.last_name ? 1 : -1;
			})
			.forEach(function(person) {
				var personCharCode = person.last_name.toUpperCase().charCodeAt(0);
				if (personCharCode < 65) {
					personCharCode = 35;
				}
				var difference = personCharCode - currentCharCode;
				for (var i = 1; i <= difference; i++) {
					addLetter(currentCharCode + i);
				}
				currentCharCode = personCharCode;
				contacts.push(person);
			});
		}
	}

}());
