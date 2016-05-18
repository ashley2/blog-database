(function() {
  'use strict';
    angular.module("blogApp")
    .controller("LoginCtrl", LoginCtrl);

    LoginCtrl.$inject = ["UserService", "$state"];

    function LoginCtrl(UserService, $state){
      let vm = this;


      vm.login = (user) => {
        UserService.login(user)
        .then(
          res=> $state.go("post"),
          err=> console.error(err)
          )
      }

    }
}());
