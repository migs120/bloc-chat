

(function() {

     
       function Room(
         $rootScope
       // ,$scope
        ,$firebaseObject
        ,$firebaseArray
        ,$document) {
        
                                
                       var Room = { 
                                            
                                            
                                            currentRoom: '',// currentRoom.name
                                            currentUser:'Anonymous',
                                            NewRoomRef: '',
                                        
                                           
                                            RoomsRef : function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/") },
                            /*allRooms*/    Roomsbase: function(){ 
                                                                  return $firebaseObject(this.RoomsRef()) 
                                                                  },
                                           
                                           currentRoomRef: function() { return new Firebase("https://popping-inferno-128.firebaseio.com/rooms/" + this.currentRoom +"/"  ) },                     
                         /*currentRoom*/   currentRoombase:  function(){ 
                                                                        this.NewRoomRef = $firebaseArray(this.currentRoomRef().child("room_messages"));
                                                                        return $firebaseArray(this.currentRoomRef().child("room_messages")) 
                                                                        },
                                  
                                       
                                           Roomclick: function($document){
                                                                          console.log( $document.target.firstChild.data)
                                                                          this.currentRoom = $document.target.firstChild.data;
                                                                          this.NewRoomRef = this.currentRoombase()
                                                                          return $document;
                                                                        },
                                           
                                           RoomSubmit: function(){
                                                           
                                                                  this.currentRoombase().$add({ user: this.currentUser 
                                                                                              ,message: $rootScope.$$childHead.text
                                                                                            
                                                                                            })
                                                                  $('#tex1').val('')

                                                                },
                                           RoomSubmitUser: function(){
                                                                        this.currentUser = $('#user1').val()
                                                                        $('#user1').val('')
                                                                    
                                                                      }
                                            
                                           
                                                    
                                             };
                                           // console.log(Room)
                             return Room;
                                                        
                                         
                                                    
                                             }

                                             angular
                                                 .module('blocChat')
                                           
                                             .factory('Room', ['$rootScope'
                                                               //,'$scope'
                                                               ,'$firebaseObject'
                                                               ,'$firebaseArray'
                                                               ,'$document'
                                                               ,Room]
                                                     );
    
                                                
     
 })();



//       $$childHead.text
//       $$childHead.cookie    for cookie username


