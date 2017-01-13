(function ()
{
	'use strict';

	/**
	 * @description The loginController is the controller of the user login page
	 * @author Nicole Park
	 * @param {service} $log - Logs messages to the console
	 * @param {scope} $scope - The scope of the controller
	 */
	angular.module('shelf').controller('currentStockListController', ['$log', '$scope', '$state', function ($log, $scope, $state)
	{
		/**
		 * @description Alias of this
		 */

		var _self = this;

		/**
		 * @description Hook event that is triggered before the view is entered
		 * @author Nicole Park
		 */
		$scope.$on('$ionicView.beforeEnter', function ()
		{
			/*_self.email = null;
			 _self.password = null;
			 _self.emailValidationFailed = false;
			 _self.passwordValidationFailed = false;*/

			_self.products =
				[
					{
						name: 'bby no.1',
						numbOfStock: 0,
						group: 'fresh cream'
					},
					{
						name: 'bby no.3',
						numbOfStock: 0,
						group: 'fresh cream'
					}
				];


			_self.pageRefreshClicked = function ()
			{
				for (var i = 0; i < _self.products.length; i++)
				{
					_self.products[i].numbOfStock = 0;
				}
			};
		});


	}]);

}());