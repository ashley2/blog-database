(function() {
  'use strict';
    angular.module("blogApp")
    .controller("LoginCtrl", LoginCtrl);

    LoginCtrl.$inject = ["UserService"];

    function LoginCtrl(UserService){
      let vm = this;


      vm.login = (user) => {
        UserService.login(user)
        .then(
          res=> console.log(res),
          err=> console.error(err)
          )
      }

    }
}());
