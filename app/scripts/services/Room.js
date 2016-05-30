

(function() {

     
       function Room(
    $rootScope
        ,$firebaseObject
        ,$firebaseArray
        ,$document) {
        
       // store ALL of the data from firebase in one data on scope 
       // set current room according to data you downloaded, not all of Firebase
        //if that doesn't update messages, have part of set chat room function manually update the messages on this/scope for the new room
                                
                                       var Room = { 
                                            
                                            
                                            currentRoom: 'timroom',
                                            currentUser:'',
                                          // currentRoomMM:[],
                                           
                                            RoomsRef : function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") },
                                            Roomsbase: function(){ 
                                                            return $firebaseObject(this.RoomsRef()) 
                                                            },
                                           
                                           currentRoomRef: function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/" + this.currentRoom +"/" /*"/room_messages/"*/ ) },                     
                                           currentRoombase:  function(){ 
                                                                      //  return $firebaseObject(this.currentRoomRef()) 
                                                                        return $firebaseArray(this.currentRoomRef().child("room_messages")) 
                                                                        },
                                           currentRoomMessages: function(){
                                               
                                                                           this.currentRoomRef().orderByChild("room_messages").on("child_added", function(snapshot) {
 // console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
                                                                                //return snapshot.val().message
                                                                                console.log( snapshot.val()[0].message, snapshot.val().length)
                                                                               var arry = [];
                                                                               for(var x = 0; x < snapshot.val().length; x++){ arry.push(snapshot.val()[x].message)}
                                                                               console.log(arry)
                                                                               return snapshot.val();
                                                                                                                                                        }); 
                                               
                                                                          },
                                           
                                           Roomclick: function($document){
                                                                  console.log( $document.target.firstChild.data)
                                                                  this.currentRoom = $document.target.firstChild.data;
                                                                  return $document;
                                                                }
                                        
                                                        
                                         
                                                    
                                             };
                                           // console.log(Room)
                                            return Room;
                                                        
                                         
                                                    
                                             }

                                             angular
                                                 .module('blocChat')
                                           
                                             .factory('Room', ['$rootScope'
                                                               ,'$firebaseObject'
                                                               ,'$firebaseArray'
                                                               ,'$document'
                                                               ,Room]);
    
                                                
     
 })();






