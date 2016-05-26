///*
(function () {
    function LandingCtrl( Room , $scope, $uibModal, $cookies, $cookieStore) {
        //console.log($uibModal)
       // debugger
        this.test = "Hello world";
        
        this.room = Room.all
        this.rooms = Room.rooms
            
        $scope.items = ['item1', 'item2', 'item3'];
        
        $scope.animationsEnabled = true;
        $scope.userName ={firstName:"John"}

        $scope.open = function (size) {

            var modalInstance = $uibModal.open(
               // "<html><p>hello</p></html>"
                {
                animation: $scope.animationsEnabled
                , templateUrl: "../templates/modal.html"
                , controller: 'ModalInstanceCtrl'
                , size: size
                , resolve: {
                            items: function () {
                                                    return $scope.items;
                                                }
                            }
                }
            
            
            );
            //console.log(modalInstance.result)
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
        $scope.cookie = $cookieStore.get('username')
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', '$scope','$uibModal','$cookies','$cookieStore', LandingCtrl]);
})();


//*/
