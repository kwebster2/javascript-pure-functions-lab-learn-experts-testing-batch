const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };


const addToPlaylist = (playlist, episode) => {
  return playlist.concat([episode])
}

const getNextEpisodeInPlaylist = (playlist) => {
  return playlist[0]
}

const removeFromPlaylist = (playlist, episode) => {
  let newArray = [...playlist]
  newArray.splice(playlist.indexOf(episode), 1)
  return newArray
}

function bingeWatch(playlist){
  debugger;
  if(playlist.length > 0){
    let newArray = removeFromPlaylist(playlist, getNextEpisodeInPlaylist(playlist))
    return bingeWatch(newArray)
  } else {
    return "Please let there be more!"
  }
}
