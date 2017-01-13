/**
 *  @description  Converts date using moment
 *  @author Nicole Park
 */
(function ()
{
	'use strict';
	angular.module('shelf').service('dataService', ['$q', function ($q)
	{
		var context = this;


		context.getCakeProductList = function ()
		{
			return cakeProducts;
		};


		var cakeProducts =
			[
				{
					name: 'Choc Chif',
					numbOfStock: 0,
					type: 'chiffon'
				}
			];

	}
	])

})
();