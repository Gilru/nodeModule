var myApp = angular.module("myApp",["ng"]);
myApp.controller("Counter",function ($scope) {
    $scope.count = 0;
})

// myApp.config(function ($routeProvider) {
//     $routeProvider.when("/",{
//         template: "<a href='#/about'>go to about</a>"
//     })
//         .when("/about",{
//             template: "<a href='#/'>go back home</a>"
//         })
// })

myApp.directive("counterClick",function () {
    return {
        template: '<div ng-controller="Counter">' +
        '<h1 ng-Click="count = count + 1">' +
        'the counter is {{count}}</h1></div>',
        controller: "Counter"
    }
})