///*
(function() {
    function LandingCtrl(Room) {
      //  var ref = new Firebase("https://popping-inferno-128.firebaseio.com");
        this.test = "Hello world";
//        this.data = $firebaseObject(ref);  //error
        this.room = Room;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl',['Room', LandingCtrl]);
})();


//*/
