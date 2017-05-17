var app = angular.module("git", []);


var ctrl = function ($scope, $http) {
	
    $scope.userid = "dkvishal";
    
    $scope.error = false;
    
    var onSuccess = function (response) {
        $scope.login = response.data.login;
        $scope.imageurl = response.data.avatar_url;
        $scope.created = response.data.created_at;
        $scope.location = response.data.location;
        $scope.error = false;
    };
    
    var onError = function (error) {
        $scope.error = true;
        if (error.status == 404)
            $scope.result = "Sorry! User not found!";
        else
            $scope.result = "Sorry! Error : " + error.statusText;
        
    };
    
    $scope.getDetails = function () {
        $http.get("https://api.github.com/users/" + $scope.userid)
             .then(onSuccess, onError);
    }
};

/*
var ctrl1 = function ($scope, $http) {
	
    var onSuccess = function (response) {
        $scope.users = response.data;
    };
    
    var onError = function (error) {
    	alert("Sorry! Could not get details from GitHub!");
    };
    
        $http.get("https://api.github.com/users").then(onSuccess, onError);
};
*/

app.controller("ctrl", ["$scope", "$http",ctrl]);