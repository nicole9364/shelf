(function()
{
    'use strict';

    angular.module('shelf').service('allProductDataService', ['$log', 'cakeProductDataService',
    function ($log, cakeProductDataService) {

        var _self = this;

        _self.chiffonCakes = [];


        _self.getAllProductData = function()
        {

            return cakeProductDataService.getCakeProductList().then(function(cakes)
            {
                return cakes;
            });

        };



        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }



    }])
})();