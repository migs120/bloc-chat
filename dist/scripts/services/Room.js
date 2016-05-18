

(function() {

     
       function Room($rootScope,$firebaseObject) {
                                
                                                var Room = {}
                                                var dbase = new Firebase("https://popping-inferno-128.firebaseio.com");
                                                var dbase_rooms = new Firebase("https://popping-inferno-128.firebaseio.com/rooms");
                                             
                                                Room.all = $firebaseObject(dbase);
                                                Room.rooms = $firebaseObject(dbase_rooms)
                                                
                                                
                                                return  Room
                                                        
                                         
                                                    
                                             }

                                             angular
                                                 .module('blocChat')
                                           
                                             .factory('Room', ['$rootScope','$firebaseObject',Room]);
    
                                                
     
 })();






