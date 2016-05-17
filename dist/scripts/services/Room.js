(function() {

      //function SongPlayer($rootScope, Fixtures) {
       function Room($firebaseObject, $firebaseArray) {
                                                var rooms = {}
                                               
                                                var firebaseRef = new Firebase("https://popping-inferno-128.firebaseio.com/");
                                                //var firebaseRefmessages = new Firebase("https://popping-inferno-128.firebaseio.com/room1");
                                                //var rooms = $firebaseArray(firebaseRef.child('rooms'));
                                                //var rooms = firebaseRef;
                                               // var rooms = $firebaseArray(firebaseRef.orderByChild('rooms'));
                                                rooms.all = $firebaseObject(firebaseRef)//.child('room')
                                                rooms.keys = $firebaseArray(firebaseRef)
                                                rooms.keys3 = // Object.keys(
                                                                            $firebaseObject(firebaseRef.child('room1/messages') )
                                                               //           )
                                                
                                               rooms.keys4 = $firebaseObject(firebaseRef.child('room1/messages') ) //.orderByKey().on("child_added", function(snapshot) {
                                                                                                   //       return snapshot.key();
                                                                                                     //   });
                                                
                                               // firebaseRef.child("room/data").set({dog : "ally"}) //works writes to base!!!
                                                
                                                
                                             /*
                                             firebaseRef.child("room1/").set( {
                                                                                    messages:{ 
                                                                                                user: "a",
                                                                                                message: "b",
                                                                                                timestamp: "c"
                                                                                                
                                                                                             }

                                                                                } ) // */
                                                
                                                
                                                rooms.single = rooms.all.room
                                               // console.log(rooms)
                                                
                                                return rooms// {
                                                          //all: rooms
                                                           // rooms
                                                      //  };
                                                /*
                                                \
                                                
                                                
                                            DATABASE ARCHITECTURE
                                            
                                            {
                                                room1: {
                                                    messages: [
                                                        {
                                                            user: "",
                                                            message: "",
                                                            timestamp: ""
                                                        }
                                                        
                                                    ]
                                                },
                                                room2: {}
                                              
                                            
                                            
                                            }
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                            //=========== example1 \|/============================================
                                                var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
                                               var bill =  ref.orderByChild("height").on("child_added", function(snapshot) {
                                                                                                               console.log(
                                                                                                                   snapshot.key() + " was " + snapshot.val().height + " meters tall"
                                                                                                                );
                                                                                                                });      
                                            //============  example2 \|/=============================
                                                  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
                                               var bill = ref.orderByKey().on("child_added", function(snapshot) {
                                                                                                          console.log(snapshot.key());
                                                                                                        });     
           
                                            //============= =  example3  \|/===========================
                                                var bill2 = {};
                                                var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
                                               var bill = ref.orderByChild("height").on("child_added", function(snapshot) {
                                                  console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall" ,  bill2 = snapshot   );
                                                 //  bill.push( snapshot.key() )
                                                });
           
           
                                                return bill2;
                                                */
           
                                                        /*        
                                                  var SongPlayer = {};
                                                  var currentAlbum = Fixtures.getAlbum();


                                                 SongPlayer.currentTime = null;
                                                 // @function setSong
                                                 // @desc Stops currently playing song and loads new audio file as currentBuzzObject
                                                 // @param {Object} song

                                                  SongPlayer.volume = null;

                                                  var setSong = function(song) {
                                                                                if (currentBuzzObject) {
                                                                                                        currentBuzzObject.stop();
                                                                                                        SongPlayer.currentSong.playing = null;
                                                                                                       }

                                                                                currentBuzzObject = new buzz.sound(
                                                                                                                    song.audioUrl, {
                                                                                                                                    formats: ['mp3'],
                                                                                                                                    preload: true
                                                                                                                                  }
                                                                                                                  );
                                                                                }



                                                 var stopSong = function(song){

                                                                                 currentBuzzObject.stop();
                                                                                 SongPlayer.currentSong.playing = null;
                                                                             }





                                                 SongPlayer.peakhole = function(){
                                                                                 peakhole.push(SongPlayer, currentAlbum.songs.length, getSongIndex())
                                                                                }



                                                  peakhole.push(SongPlayer, currentAlbum.songs.length)




                                                  return SongPlayer;
                                                    */
                                                    
                                             }

                                             angular
                                                 .module('blocChat')
                                                // .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
                                             //.factory('Room', ['$firebaseArray',Room]);
                                             .factory('Room', ['$firebaseObject','$firebaseArray',Room]);
    
                                                
     
 })();


/*   firebase object return structure
{
    "all":[
            {
                "$value":"{thebloc: \"thebloc\"}"
                ,"$id":"room1"
                ,"$priority":null
            }
        
            ,{
               "$value":"{tech:\"bloctech\"}"
                ,"$id":"room2"
                ,"$priority":null
            
            }
          ]
    
}


*/