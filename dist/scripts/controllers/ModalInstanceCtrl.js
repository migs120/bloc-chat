
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

///*

//var form =  $('#form1')
angular.module('blocChat').controller('ModalInstanceCtrl', function ($scope
                                                                      , $cookies
                                                                      , $cookieStore 
                                                                      ,$uibModalInstance
                                                                      ,Room , items) {
   // console.log($scope)
    $scope.items = items;
    $scope.base = Room
    $scope.selected = {
        item: $scope.items[0]
    };
    console.log($("#form1").context.form1 )
    $scope.ok = function () {
        //console.log($cookies)
        //document.cookie = "username :" + $scope.firstname , "pass=123";
        $cookieStore.put("username", $scope.firstname )
        //document.cookie = "pass=123"
        //setCookie("username", $scope.firstname )
       // put(, value, [options])
        $uibModalInstance.close($scope.selected.item);
        //click here sould set cookie for user name
        // function setCookie(name, value)
        //  {
           
        
        //    }

        //should base.add(rooms/users/document.cookie.username)
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}
                                     
                                     
                                     
                                     );

//*/

//body > div.modal.fade.ng-isolate-scope.in > div > div > div.modal-footer.ng-scope > button.btn.btn-primary
//#form1