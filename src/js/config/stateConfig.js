(function(){

  'use strict';

  angular.module('blogApp')
  .config(stateConfig);
  stateConfig.$inject=['$stateProvider', '$urlRouterProvider']
  function stateConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("login", {
      url: '/',
      templateUrl: './templates/login.html',
      controller: "LoginCtrl",
      controllerAs: "login"
    }) 
    .state("post", {
      url: '/post',
      templateUrl: './templates/post.html',
      controller: "PostCtrl",
      controllerAs: "post"
    })

  }


})()