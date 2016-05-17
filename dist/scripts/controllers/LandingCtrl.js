///*
(function() {
    function LandingCtrl(Room) {
      //  var ref = new Firebase("https://popping-inferno-128.firebaseio.com");
        this.test = "Hello world";
//        this.data = $firebaseObject(ref);  //error
        this.room = Room.all
        this.keys = Room.keys
        this.keys2 = Room.keys
        this.keys4 = Room.keys4
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl',['Room', LandingCtrl]);
})();


//*/