(function(){
  'use strict'

  angular.module("blogApp")
  .service('PostService', PostService)

  PostService.$inject = ["$http"];

  function PostService($http){

    this.create = (newPost) => $http.post('/posts', newPost)



  }

})()