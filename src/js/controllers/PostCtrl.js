(function(){
  'use strict'

  angular.module("blogApp")
  .controller("PostCtrl", PostCtrl)

  PostCtrl.$inject = ["PostService"];

  function PostCtrl(PostService){

    let vm = this

    vm.newPost = {
      tags: []
    };

    vm.addTag = function(tags){
      let set = new Set(vm.newPost.tags.concat(tags.split(/,\s*/g)))
      vm.newPost.tags = Array.from(set)
      vm.newTags = null;
    }

    vm.remove = function(tag){
      console.log('click')
      let index = vm.newPost.tags.indexOf(tag)
      vm.newPost.tags.splice(index, 1)
    }


    vm.addPost = function(newPost){
      console.log(newPost)
      PostService.create(newPost)
      .then(function(res){
        vm.newPost = null
        
        console.log(res)
      }, function(err){
        console.log(err)
      })



    }


  }




})()