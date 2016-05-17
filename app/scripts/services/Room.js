

(function() {

      //function SongPlayer($rootScope, Fixtures) {
       function Room($firebaseObject) {
                                
                                                rooms = {}
                                                //var firebaseRef = new Firebase("https://popping-inferno-128.firebaseio.com");
                                                //var rooms = $firebaseArray(firebaseRef.child('rooms'));
                                               // rooms.all = firebaseRef.child("room1")
                                              var arry = [] 
                                                
                                                var ref = new Firebase("https://popping-inferno-128.firebaseio.com/rooms");
                                               /* (function(){ ref.orderByChild("messages").on("child_added", function(snapshot) {
                                                arry.push( 'hello'
                                                   // {all : snapshot.key() + " was "}
                                                )
                                                });})(); 
                                                rooms.all = arry[0]  //*/
                                                rooms.all = $firebaseObject(
                                                                            ref//.child('messages')
                                                                           
                                                                           )
                                                arry.push(rooms.all)
                                                console.log(arry)
                                                return rooms
                                            
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
                                             .factory('Room', ['$firebaseArray',Room]);
    
                                                
     
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



