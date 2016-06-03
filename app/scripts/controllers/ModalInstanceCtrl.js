angular.module('blocChat').controller('ModalInstanceCtrl', function (
         $scope
        , $cookies
        , $cookieStore
        , $uibModalInstance
        , Room
        , $firebaseObject
      
            ) {

      
        $scope.base = Room.rooms
      


       // console.log($("#form1").context.form1)
       //console.log(Room)


        $scope.ok = function () {


            $cookieStore.put("username", $scope.firstname)
            var newroom = new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") // + $scope.newroom)
            var userroom = $scope.newroom ? $scope.newroom : Math.round(Math.random() * 100000000);
            var newroomchild = newroom.child(userroom)
            Room.currentUser = $scope.firstname
            newroomchild.set({
                             // key: $scope.newroom
                              key: userroom
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