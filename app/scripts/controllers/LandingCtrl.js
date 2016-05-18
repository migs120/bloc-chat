///*
(function() {
    function LandingCtrl(Room) {
     
        this.test = "Hello world";

        this.room = Room.all
        this.rooms = Room.rooms
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl',['Room', LandingCtrl]);
})();


//*/
