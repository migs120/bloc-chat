angular.module('blocChat').controller('ModalInstanceCtrl', function ($scope
        , $cookies
        , $cookieStore
        , $uibModalInstance
        , Room
        , $firebaseObject
      
            ) {

      
        $scope.base = Room.rooms
      


       // console.log($("#form1").context.form1)
       // console.log(Room.base)


        $scope.ok = function () {


            $cookieStore.put("username", $scope.firstname)
            var newroom = new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") // + $scope.newroom)
            var newroomchild = newroom.child($scope.newroom)

            newroomchild.set({
                              key: $scope.newroom
                             ,room_messages: [
                                                {
                                                user: $scope.firstname
                                                ,message: "start message2"
                                                }
                                             ]
                            })

            $uibModalInstance.close();

        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }



);