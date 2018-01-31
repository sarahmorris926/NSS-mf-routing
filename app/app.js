"use strict";

angular.module("RouteApp", ["ngRoute"])
.config( ($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: "app/partials/home.html"
    })
    .when('/blueridgeparkway', {
       templateUrl: "app/partials/pacificcoasthwy.html",
       controller: "PacificCoastHwy"
    })
    .when('/route66', {
       templateUrl: "app/partials/overseashwy.html",
       controller: "OverseasHwy"
    })
    .otherwise('/');
});