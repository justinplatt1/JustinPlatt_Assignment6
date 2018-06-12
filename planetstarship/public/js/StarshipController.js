app.controller('appController', ["$scope", "$log", "appService",
    function($scope, $log, appService) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";
        $scope.reps= appService.getStarship();

        $scope.loadPlanets = function () {
            var promiseGet = appService.getStarship();
            promiseGet.then(function (result) {
                if (result && result.data) {
                    $scope.starship = result.data;
                }
            }, function (reason) {
                $log.error("failure loading database information", reason);
            });
        };

        $scope.loadStarships();

}]);