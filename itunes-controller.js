function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {

    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      song.albumArt = song.albumArt.replace('60x60bb', '400x400bb')
      if (song.kind === 'song') {
        
        
        
        template += `
        <div class="row text-center song">
          <div class="col-md-3 col-md-offset-1 col-xs-12">
            <h4>${song.price}</h4>
            <img class="album-art" src="${song.albumArt}" alt="">
          </div>
          <div class="col-md-6 col-md-offset-2 col-xs-12text-right">
            <h2>${song.title}</h2>
            <h3>${song.artist}</h3>
            <h4>${song.collection}</h4>
            <audio controls class="audio">
              <source src="${song.preview}" type="audio/ogg">
              <source src="${song.preview}" type="audio/mpeg">
            </audio>
          </div>
        </div>`

      }
    }
    document.getElementById('songs').innerHTML = template
  }
  document.addEventListener('play', function (e) {
    var audios = document.getElementsByClassName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);




}
