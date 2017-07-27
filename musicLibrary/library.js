var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  for (var key in library.playlists) {

    var numOfTracks = library.playlists[key].tracks.length;
    var playlistName = library.playlists[key].name;

    var output = key + ": " + playlistName + " - " + numOfTracks + " tracks";

    console.log(output);
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  for (var key in library.tracks) {

    var id = library.tracks[key].id;
    var name = library.tracks[key].name;
    var artist = library.tracks[key].artist;
    var album = library.tracks[key].album;
    
    var output = id + ": " + name + " by " + artist + " (" + album + ")";

    console.log(output);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  if (library.playlists[playlistId]) {
    
    var numOfTracks = library.playlists[playlistId].tracks.length;
    var playlistName = library.playlists[playlistId].name;
    var playlistInfo = playlistId + ": " + playlistName + " - " + numOfTracks + " tracks";
    
    console.log(playlistInfo);

    var tracks = library.playlists[playlistId].tracks;
    
    for (i = 0; i < tracks.length; i++) {

      currentTrack = tracks[i];  

      var name = library.tracks[currentTrack].name;
      var artist = library.tracks[currentTrack].artist;
      var album = library.tracks[currentTrack].album;

      var output = currentTrack + ": " + name + " by " + artist + " (" + album + ")";

      console.log(output);
    }
   
  } else {
    console.log("ID not found!");
  }
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  if (library.tracks[trackId] && library.playlists[playlistId]) {
    
    library.playlists[playlistId].tracks.push(library.tracks[trackId].id);
    var output = "New track list for " + playlistId + ": " + library.playlists[playlistId].tracks + "."; 
    return output;

  } else {
    
    var output = "Error: Song or Playlist does not exist!"; 
    return output;
  }
}



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  var newTrack = {};
  var id = uid();

  newTrack.id = id;
  newTrack.name = name;
  newTrack.artist = artist;
  newTrack.album = album;

  library.tracks[id] = newTrack;

  return library.tracks;
}



// adds a playlist to the library

var addPlaylist = function (name) {

  var newPlaylist = {};
  var id = uid();

  newPlaylist.id = id;
  newPlaylist.name = name;
  newPlaylist.tracks = [];

  library.playlists[id] = newPlaylist;

  return library.playlists;
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}