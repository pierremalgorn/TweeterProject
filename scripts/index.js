var AngJS = angular.module('AngJS', []);

AngJS.controller('MainCtrl', function($scope, $http){
    $scope.search = "Bidule";
    $scope.users = [];
    
    $scope.selectUser = function(toto) {
        $scope.currentUser = toto;
    }
    
    $scope.ordering = {
        'field' : 'name',
        'reverse' : false
    }
    
    $scope.selectOrderingField = function(column) {
        if($scope.ordering.field === column) {
            $scope.ordering.reverse = !$scope.ordering.reverse;
        } else {
            $scope.ordering.field = column;
            $scope.ordering.reverse = false;
        }
        $scope.ordering.field = column;
    }
    
    $http.get('data/data.json')
            .success(function(data, status){
                $scope.users = data;
                $scope.status = status;
                console.info(status);
                console.log($scope.users);
            })
            .error(function(data, status){
                $scope.status = status;
                console.error(status);
            });
    
});