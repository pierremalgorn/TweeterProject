AngJS.controller('MainCtrl', function($scope, $http, $timeout){
    $scope.tweets = [];
    $scope.currentTweet = null;
    
    $scope.getImgLink = function (hash) {
        return 'http://www.gravatar.com/avatar/'+hash;
    }
    
    $scope.sendTweet = function() {
        $http.post('http://54.93.114.212/tweets', {authorEmail: $scope.currentTweet.email, authorName: $scope.currentTweet.name, message: $scope.currentTweet.message})
            .success(function(data){
                 $scope.tweets = data;
        })
            .error(function(data){
                 $scope.tweets = data;
        })
    }
    
    var refreshMessages = function(){
        $timeout(function(){
            $http.get('http://54.93.114.212/tweets')
                .success(function(data){
                     $scope.tweets = data;
            })
                .error(function(data){
                     $scope.tweets = data;
            })
            
            refreshMessages();
        }, 3000);        
    };
    
    refreshMessages();

});