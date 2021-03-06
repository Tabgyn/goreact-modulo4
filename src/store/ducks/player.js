import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  PREV: 'player/PREV',
  NEXT: 'player/NEXT',
  PLAYING: 'player/PLAYING',
  HANDLE_POSITION: 'player/HANDLE_POSITION',
  SET_POSITION: 'player/SET_POSITION',
  SET_VOLUME: 'player/SET_VOLUME',
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  position: 0,
  duration: 0,
  positionShown: 0,
  status: Sound.status.PLAYING,
  volume: 100,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        position: 0,
        duration: 0,
        positionShown: 0,
        status: Sound.status.PLAYING,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex - 1];

      if (prev) {
        return {
          ...state,
          currentSong: prev,
          position: 0,
          duration: 0,
          status: Sound.status.PLAYING,
        };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[currentIndex + 1];

      if (next) {
        return {
          ...state,
          currentSong: next,
          position: 0,
          duration: 0,
          status: Sound.status.PLAYING,
        };
      }

      return state;
    }
    case Types.PLAYING: {
      return { ...state, ...action.payload };
    }
    case Types.HANDLE_POSITION: {
      return { ...state, positionShown: state.duration * action.payload.percent };
    }
    case Types.SET_POSITION: {
      return { ...state, position: state.duration * action.payload.percent, positionShown: 0 };
    }
    case Types.SET_VOLUME: {
      return { ...state, volume: action.payload.volume };
    }
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list },
  }),
  play: () => ({
    type: Types.PLAY,
  }),
  pause: () => ({
    type: Types.PAUSE,
  }),
  prev: () => ({
    type: Types.PREV,
  }),
  next: () => ({
    type: Types.NEXT,
  }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),
  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent },
  }),
  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent },
  }),
  setVolume: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume },
  }),
};
