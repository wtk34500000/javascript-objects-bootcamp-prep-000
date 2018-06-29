<<<<<<< HEAD
var playlist = new Object({artist: 'song title'})

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  return playlist
}
=======
var playlist = new Object({})
>>>>>>> 1ffd34b8ec25410993e482897aa05bcc009aa4cf
