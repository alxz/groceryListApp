/*
    My tutorial app
 */
// var app = angular.module('myApp', []);
// var app = angular.module('tutorialApp', ["tutorialCtrlModule"]);
var app = angular.module('groceryListApp', []);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
app.controller("HomeController", ["$scope", function ($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function ( $scope ) {

    $scope.groceryItems = [
        { completed: true, itemName: 'milk', date: '2014-10-01' },
        { completed: true, itemName: 'cookies', date: '2014-10-01' },
        { completed: true, itemName: 'ice cream', date: '2014-10-02' },
        { completed: true, itemName: 'potatoes', date: '2014-10-02' },
        { completed: true, itemName: 'cereal', date: '2014-10-03' },
        { completed: true, itemName: 'bread', date: '2014-10-03' },
        { completed: true, itemName: 'eggs', date: '2014-10-04' },
        { completed: true, itemName: 'tortillas', date: '2014-10-04' }
    ]
}]);



/*
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config( function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialCtrl"
        })
        .when("/tutorialSecond", {
            templateUrl: "views/tutorialSecond.html",
            controller: "TutorialCtrl2"
        })
        .otherwise({
            redirectTo: "/"
        });
})

 */