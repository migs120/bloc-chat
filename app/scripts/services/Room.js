

(function() {

     
       function Room(
    $rootScope
        ,$firebaseObject
        ,$firebaseArray
        ,$document) {
        
       // set currentRoom according to all the data from the firebase reference to the specific room
                                
                                       var Room = { 
                                            
                                            
                                            currentRoom: 'timroom',// currentRoom.name
                                            currentUser:'',
                                            NewRoomRef: '',
                                        
                                           
                                            RoomsRef : function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") },
                            /*allRooms*/    Roomsbase: function(){ 
                                                            return $firebaseObject(this.RoomsRef()) 
                                                            },
                                           
                                           currentRoomRef: function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/" + this.currentRoom +"/"  ) },                     
                         /*currentRoom*/   currentRoombase:  function(){ 
                                                                      //  return $firebaseObject(this.currentRoomRef()) 
                                                                        this.NewRoomRef = $firebaseArray(this.currentRoomRef().child("room_messages"));
                                                                        return $firebaseArray(this.currentRoomRef().child("room_messages")) 
                                                                        },
                                          // this.messages = currentRoom.messages
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
                                          // reename roomclick to setRoom then inside function you want to update all the variables you need
                                           Roomclick: function($document){
                                                                  console.log( $document.target.firstChild.data)
                                                                  this.currentRoom = $document.target.firstChild.data;
                                                                  this.NewRoomRef = this.currentRoombase()
                                                                 // console.log(this.currentRoomRef())
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






