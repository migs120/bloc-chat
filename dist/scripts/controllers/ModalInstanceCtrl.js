angular.module('blocChat').controller('ModalInstanceCtrl', function ($scope
        , $cookies
        , $cookieStore
        , $uibModalInstance
        , Room
        , $firebaseObject
        , items) {

        $scope.items = items;
        $scope.base = Room.rooms
        $scope.selected = {
            item: $scope.items[0]
        };


        console.log($("#form1").context.form1)
        console.log(Room.base)


        $scope.ok = function () {


            $cookieStore.put("username", $scope.firstname)
            var newroom = new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") // + $scope.newroom)
            var newroomchild = newroom.child($scope.newroom)

            newroomchild.set({
                key: $scope.newroom
                , room_messages: [
                    {
                        user: $scope.firstname
                        , message: "start message"
                                             }
                                           ]
            })

            $uibModalInstance.close($scope.selected.item);

        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }



);