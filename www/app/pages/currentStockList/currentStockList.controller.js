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
		$scope.$on('$ionicView.beforeEnter', function () {
            _self.groupFilter = '';
			/*_self.email = null;
			 _self.password = null;
			 _self.emailValidationFailed = false;
			 _self.passwordValidationFailed = false;*/

            _self.cakeProducts =
                [
                    {
                        name: 'bby no.1',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Fresh cream'
                    },
                    {
                        name: 'bby no.3',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Fresh cream'
                    },
                    {
                        name: 'choc chif no.2',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Chiffon'
                    },
                    {
                        name: 'gt chif no.3',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Chiffon'
                    },
                    {
                        name: 'fc no.1',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Fresh cream'
                    },
                    {
                        name: 'fc no.3',
                        numbOfStock: 0,
                        group: 'Cake',
                        subgroup: 'Fresh cream'
                    }
                ];

            _self.logProducts = [
				{
					name: 'Chocolate',
					numbOfStock: 0,
					group: 'Log'
				},
                {
                    name: 'Kumara',
                    numbOfStock: 0,
                    group: 'Log'
                }
			];

            _self.sliceProducts = [
				{
					name: 'Kumara',
					numbOfStock: 0,
					group: '6.5'
				},
                {
                    name: 'Kumara',
                    numbOfStock: 0,
                    group: '5.2'
                },
                {
                    name: 'Chocolate',
                    numbOfStock: 0,
                    group: '6.5'
                }
			];


            _self.allProducts = _self.cakeProducts.concat(_self.logProducts, _self.sliceProducts);

            console.log(_self.allProducts);

            _self.currentProductList = _self.allProducts;
		});


        _self.pageRefreshClicked = function ()
        {
            for (var i = 0; i < _self.products.length; i++)
            {
                _self.products[i].numbOfStock = 0;
            }
        };

        _self.groupButtonClicked = function (groupFilter)
        {
            if(groupFilter == 'Cake')
			{
				_self.currentProductList = _self.cakeProducts;
			}else if(groupFilter == 'Log')
			{
                _self.currentProductList = _self.logProducts;
            } else if(groupFilter == 'Slice')
            {
                _self.currentProductList = _self.sliceProducts;
            }else
            {
                _self.currentProductList = _self.allProducts;
            }
        };

	}]);

}());