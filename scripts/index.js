var AngJS = angular.module('AngJS', []);

AngJS.filter('ago', function() {
    return function(value) {
        return moment(value).fromNow();
    };
});