AngJS.controller('MainCtrl', function($scope, $http){
    $scope.search = "Bidule";
    $scope.tweets = [];
    
    $scope.selectUser = function(toto) {
        $scope.currentUser = toto;
    }
    
    $scope.ordering = {
        'field' : 'name',
        'reverse' : false
    }
    
//    $scope.selectOrderingField = function(column) {
  //      if($scope.ordering.field === column) {
    //        $scope.ordering.reverse = !$scope.ordering.reverse;
      //  } else {
        //    $scope.ordering.field = column;
          //  $scope.ordering.reverse = false;
        //}
       // $scope.ordering.field = column;
    //}


    $http.get('54.93.114.212')
        .success(function(data){
             $scope.tweets = data;

    })
        .error(function(data){

                    // Gestion d’erreur

    })

});