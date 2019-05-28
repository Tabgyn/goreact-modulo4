import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistDetails from './playlistDetails';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  playlists,
  playlistDetails,
});

export default reducers;
