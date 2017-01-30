(function ()
{
    'use strict';

    function productListController($ionicHistory)
    {
        // Alias for 'this'
        var _self = this;

        _self.collapsedGroups = [];

        /**
         * @description Hook that runs when the controller is ready to use
         * @author Nicole Park
         */
        _self.$onInit = function ()
        {
            _self.productCategory;

            _self.subgroups = _self.getSubgroups();

            _self.searchBy = '';
        };

        _self.getSubgroups = function()
        {
            return ["Chiffon", "Fresh Cream", "Ganache", "Mousse"];
        };

        _self.toggleGroup = function(group) {
            var index = _self.collapsedGroups.indexOf(group);
            if (index === -1) {
                _self.collapsedGroups.push(group);
            } else if(index >= 0) {
                _self.collapsedGroups.splice(index, 1);
            }
        };

        _self.isGroupCollapsed = function(group)
        {
            var index = _self.collapsedGroups.indexOf(group);
            if (index === -1) {
                return false;
            } else if(index >= 0) {
                return true;
            }
        };


    };


    angular.module('shelf').component('productList',
        {
            templateUrl: "app/components/productList/product-list.html",
            controller: productListController,
            bindings: {
                productCategory:'=',
                list: '='
            }
        });
})();
