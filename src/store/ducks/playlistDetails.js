export const Types = {
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function PlaylistDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
