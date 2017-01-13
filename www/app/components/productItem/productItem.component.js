(function ()
{
	'use strict';

	function productItemController($ionicHistory)
	{
		// Alias for 'this'
		var _self = this;


		/**
		 * @description Hook that runs when the controller is ready to use
		 * @author Nicole Park
		 */
		_self.$onInit = function ()
		{

		};


		_self.minusBtnClicked = function ()
		{
			if (_self.product.numbOfStock > 0)
			{
				_self.product.numbOfStock--;
			}
		};

		_self.plusBtnClicked = function ()
		{
			_self.product.numbOfStock++;
		};


	};


	angular.module('shelf').component('productItem',
		{
			templateUrl: "app/components/productItem/product-item.html",
			controller: productItemController,
			bindings: {product: '='}
		});
})();
