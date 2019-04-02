var myApp = angular.module("myApp", []);
myApp.controller("mainController", function ($scope, $http) {
    $scope.PersonVM = {};
    function GetAll() {
        $http({
            method: "GET",
            url: "http://localhost:55282/WcfDataService1.svc/People",
            dataType: "json",
        }).then(

            function (response) {
               // $scope.PersonVM = response.data;
                $.each(response.data, function (key, value) {
                    $scope.PersonVM = value;                    
                })   
                console.log($scope.PersonVM);
            },
            function () {
                alert("Failed.");
                console.log(response.data);
            });
    }
    GetAll();
    console.log($scope.PersonVM);
});
