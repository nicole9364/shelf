(function ()
{
	'use strict';

	/**
	 * Sample router
	 */
	angular.module('shelf').config(
		function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider)
		{

			$urlRouterProvider.otherwise('/currentStockList');

			$stateProvider.state('currentStockList', {
				url: '/currentStockList',
				templateUrl: './app/pages/currentStockList/current-stock-list.html',
				controller: 'currentStockListController as currentStockListCtrl'
			});


		});

})();