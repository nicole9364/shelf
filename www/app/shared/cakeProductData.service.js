(function()
{
    'use strict';

    angular.module('shelf').service('cakeProductDataService', ['$log', '$q',
        function ($log, $q) {

            var _self = this;


            _self.getCakeProductList = function()
            {
               /*let promises = {
                alpha: promiseAlpha(),
                beta: promiseBeta(),
                gamma: promiseGamma()
                }
                $q.all(promises).then((values) => {
                console.log(values.alpha); // value alpha
                console.log(values.beta); // value beta
                console.log(values.gamma); // value gamma

                complete();
                });*/

                var deferred = $q.defer();

               var promises =
                   {
                       chiffonCakes: _self.getChiffonList(),
                       freshCreamCakes: _self.getFreshCreamCakeList(),
                       ganacheCakes: _self.getGanacheCakeList(),
                       mousseCake: _self.getMousseCakeList()
                   };

                $q.all(promises).then((values) => {
                    _self.chiffonCakes = values.chiffonCakes;
                    _self.freshCreamCakes = values.freshCreamCakes;
                    _self.ganacheCakes = values.ganacheCakes;
                    _self.mousseCake = values.mousseCake;

                    _self.allCakeProducts = [];

                _self.allCakeProducts =
                    {
                        "Chiffon" : _self.chiffonCakes,
                        "Fresh Cream": _self.freshCreamCakes,
                        "Ganache": _self.ganacheCakes,
                        "Mousse": _self.mousseCake
                    };
                //_self.allCakeProducts = values.chiffonCakes.concat(values.freshCreamCakes, values.ganacheCakes, values.mousseCake);

                    angular.forEach(_self.allCakeProducts, function(subgroupedCakes)
                    {
                        angular.forEach(subgroupedCakes, function(cake)
                        {
                            cake.numbOfStock = 0;
                            cake.group = "Cake";
                        });


                    });


                deferred.resolve(_self.allCakeProducts);

                });

                return deferred.promise;

            };

            _self.getChiffonList = function()
            {
                console.log('getting chiffon list');

                var deferred = $q.defer();

                readTextFile("app/data/cakeProducts/chiffon.json", function(text){
                    var chiffonCakes = JSON.parse(text);

                    angular.forEach(chiffonCakes, function(cake)
                    {
                        cake.subgroup = "Chiffon";
                    });

                    deferred.resolve(chiffonCakes);

                });

                return deferred.promise;
            };

            _self.getFreshCreamCakeList = function()
            {
                console.log('getting fresh cream cake list');

                var deferred = $q.defer();

                readTextFile("app/data/cakeProducts/freshcream.json", function(text){
                    var freshCreamCakes = JSON.parse(text);

                    angular.forEach(freshCreamCakes, function(cake)
                    {
                        cake.subgroup = "Fresh Cream";
                    });

                    deferred.resolve(freshCreamCakes);

                });
                return deferred.promise;
            };

            _self.getGanacheCakeList = function()
            {
                console.log('getting ganache cake list');

                var deferred = $q.defer();

                readTextFile("app/data/cakeProducts/ganache.json", function(text){
                    var ganacheCakes = JSON.parse(text);

                    angular.forEach(ganacheCakes, function(cake)
                    {
                        cake.subgroup = "Ganache";
                    });

                    deferred.resolve(ganacheCakes);

                });
                return deferred.promise;
            };

            _self.getMousseCakeList = function()
            {
                console.log('getting mousse cake list');

                var deferred = $q.defer();

                readTextFile("app/data/cakeProducts/mousse.json", function(text){
                    var mousseCakes = JSON.parse(text);

                    angular.forEach(mousseCakes, function(cake)
                    {
                        cake.subgroup = "Mousse";
                    });

                    deferred.resolve(mousseCakes);

                });
                return deferred.promise;
            };


            function readTextFile(file, callback) {
                var rawFile = new XMLHttpRequest();
                rawFile.overrideMimeType("application/json");
                rawFile.open("GET", file, true);
                rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText);
                    }
                };
                rawFile.send(null);
            };



        }])
})();