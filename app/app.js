"use strict";

angular.module("RouteApp", ["ngRoute"])
.config( ($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: "app/partials/home.html"
    })
    .when('/pacificcoasthwy', {
       templateUrl: "app/partials/pacificcoasthwy.html",
       controller: "PacificCoastHwyCtrl"
    })
    .when('/overseashwy', {
       templateUrl: "app/partials/overseashwy.html",
       controller: "OverseasHwyCtrl"
    })
    .otherwise('/'); // goes back home to have listing
});