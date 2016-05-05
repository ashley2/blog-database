(function(){
  'use strict'

  angular.module('blogApp')
  .service("UserService", UserService);

  UserService.$inject=["$http"];

  function UserService($http){
    this.login = function(user){
      return $http.post('/users/register', user)
    }
  }





}())

