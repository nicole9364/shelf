(function ()
{
	'use strict';

	/**
	 * @description The loginController is the controller of the user login page
	 * @author Nicole Park
	 * @param {service} $log - Logs messages to the console
	 * @param {scope} $scope - The scope of the controller
	 */
	angular.module('shelf').controller('currentStockListController', ['$log', '$scope', '$state', 'allProductDataService', 'cakeProductDataService',
        function ($log, $scope, $state, allProductDataService, cakeProductDataService)
	{
		/**
		 * @description Alias of this
		 */

		var _self = this;

        _self.searchBy = "";

        _self.cakeProducts = [];

/*
        _self.chiffonCakeList = [];

        _self.freshcreamCakeList = [];

        _self.ganacheCakeList = [];

        _self.mousseCakeList = [];*/

        _self.logProducts = [];

        _self.sliceProducts = [];

        _self.groups = ["cake", "log", "slice"];

		/**
		 * @description Hook event that is triggered before the view is entered
		 * @author Nicole Park
		 */
		$scope.$on('$ionicView.beforeEnter', function () {
            _self.groupFilter = ''
			/*_self.email = null;
			 _self.password = null;
			 _self.emailValidationFailed = false;
			 _self.passwordValidationFailed = false;*/

            /*cakeProductDataService.getChiffonList().then(function(cakes)
			{
            	_self.chiffonCakeList = cakes;
			});

            cakeProductDataService.getFreshCreamCakeList().then(function(cakes)
			{
				_self.freshcreamCakeList = cakes;
			});

            cakeProductDataService.getGanacheCakeList().then(function(cakes)
			{
				_self.ganacheCakeList = cakes;
			});

            cakeProductDataService.getMousseCakeList().then(function(cakes)
			{
				_self.mousseCakeList = cakes;
			});*/


            allProductDataService.getAllProductData().then(function(cakes)
            {
                _self.cakeProducts = cakes;


                _self.allProducts =
					{
						cake: _self.cakeProducts,
						log: _self.logProducts,
						slice: _self.sliceProducts
					};
                console.log(_self.allProducts);

                _self.currentCategory = 'Cake';
                _self.currentProductList = _self.allProducts.cake;
            });


		});


        _self.pageRefreshClicked = function ()
        {
            for (var i = 0; i < _self.allProducts.length; i++)
            {
                _self.products[i].numbOfStock = 0;
            }

        };

        _self.groupButtonClicked = function (groupFilter)
        {
            if(groupFilter == 'Cake')
			{
				_self.currentCategory = 'Cake';
				_self.currentProductList = _self.cakeProducts;
			}else if(groupFilter == 'Log')
			{
                _self.currentCategory = 'Log';
                _self.currentProductList = _self.allProducts.log;
            } else if(groupFilter == 'Slice')
            {
                _self.currentCategory = 'Slice';
                _self.currentProductList = _self.allProducts.slice;
            }
        };

	}]);

}());