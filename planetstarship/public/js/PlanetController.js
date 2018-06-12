app.controller('appController', ["$scope", "$log", "appService",
    function($scope, $log, appService) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
        $scope.reps= appService.getPlanet();

        $scope.loadPlanets = function () {
            var promiseGet = appService.getPlanet();
            promiseGet.then(function (result) {
                if (result && result.data) {
                    $scope.planet = result.data;
                }
            }, function (reason) {
                $log.error("failure loading database information", reason);
            });
        };

        $scope.loadPlanets();

}]);