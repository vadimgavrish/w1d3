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
             },
    printPlaylists: function () {

        for (var key in this.playlists) {

            var numOfTracks = this.playlists[key].tracks.length;
            var playlistName = this.playlists[key].name;

            var output = key + ": " + playlistName + " - " + numOfTracks + " tracks";

            console.log(output);
        }
    },
    printTracks: function () {

        for (var key in this.tracks) {

            var id = this.tracks[key].id;
            var name = this.tracks[key].name;
            var artist = this.tracks[key].artist;
            var album = this.tracks[key].album;
            
            var output = id + ": " + name + " by " + artist + " (" + album + ")";

            console.log(output);
            }
    },
    printPlaylist: function (playlistId) {

        if (library.this[playlistId]) {
            
            var numOfTracks = this.playlists[playlistId].tracks.length;
            var playlistName = this.playlists[playlistId].name;
            var playlistInfo = playlistId + ": " + playlistName + " - " + numOfTracks + " tracks";
            
            console.log(playlistInfo);

            var tracks = this.playlists[playlistId].tracks;
            
            for (i = 0; i < tracks.length; i++) {

            currentTrack = tracks[i];  

            var name = this.tracks[currentTrack].name;
            var artist = this.tracks[currentTrack].artist;
            var album = this.tracks[currentTrack].album;

            var output = currentTrack + ": " + name + " by " + artist + " (" + album + ")";

            console.log(output);
            }
        
        } else {
            console.log("ID not found!");
            }
    },
    addTrackToPlaylist: function (trackId, playlistId) {

        if (this.tracks[trackId] && this.playlists[playlistId]) {
            
            this.playlists[playlistId].tracks.push(this.tracks[trackId].id);
            var output = "New track list for " + playlistId + ": " + this.playlists[playlistId].tracks + "."; 
            return output;

        } else {
            
            var output = "Error: Song or Playlist does not exist!"; 
            return output;
        }
    },
    uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function (name, artist, album) {

        var newTrack = {};
        var id = this.uid();

        newTrack.id = id;
        newTrack.name = name;
        newTrack.artist = artist;
        newTrack.album = album;

        this.tracks[id] = newTrack;

        return this.tracks;
    },
    addPlaylist: function (name) {

        var newPlaylist = {};
        var id = this.uid();

        newPlaylist.id = id;
        newPlaylist.name = name;
        newPlaylist.tracks = [];

        this.playlists[id] = newPlaylist;

        return this.playlists;
    }
}