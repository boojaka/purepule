var app = angular.module('purepule', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    }).when("/login", {
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    }).when("/dashboard", {
        templateUrl: 'dashboard.html',
        controller: 'dashboardCtrl'
    });
});