var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: '/partials/dashboard.html'
  })
  .when('/user/:id', {
    templateUrl: '/partials/userpage.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
