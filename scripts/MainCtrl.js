AngJS.controller('MainCtrl', function($scope, $http){
    $scope.tweets = [];
    $scope.currentTweet = null;
    
    $scope.sendTweet = function() {
        $http.post('http://54.93.114.212/tweets', {authorEmail: $scope.currentTweet.email, authorName: currentTweet.name, message: currentTweet.message})
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