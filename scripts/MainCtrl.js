AngJS.controller('MainCtrl', function($scope, $http){
    $scope.tweets = [];
    $scope.currentTweet;
    
    $scope.selectUser = function(toto) {
        $scope.currentUser = toto;
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
    
    $scope.sendTweet = function() {
        $http.post('http://54.93.114.212/tweets', {authorEmail: currentTweet.email, authorName: currentTweet.name, message: currentTweet.message})
            .success(function(data){
                 $scope.tweets = data;
        })
            .error(function(data){
                 $scope.tweets = data;
        })
    }


    $http.get('http://54.93.114.212/tweets')
        .success(function(data){
             $scope.tweets = data;
    })
        .error(function(data){
             $scope.tweets = data;
    })

});