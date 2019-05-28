import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import Loading from '../../components/Loading';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          thumbnail: PropTypes.string,
          songs: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number,
              title: PropTypes.string,
              author: PropTypes.string,
              album: PropTypes.string,
              file: PropTypes.string,
              thumbnail: PropTypes.string,
              playlistId: PropTypes.number,
            }),
          ),
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { getPlaylistDetailsRequest, match } = this.props;
    const { id } = match.params;

    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistDetails } = this.props;
    const { playlist } = playlistDetails.data;
    console.tron.log(playlistDetails);
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            <p>{playlist.songs.length} musics</p>

            <button type="button">Play</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Titulo</th>
            <th>Artista</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="duração" />
            </th>
          </thead>

          <tbody>
            {playlist.songs.map(song => (
              <tr key={song.id}>
                <td>
                  <img src={PlusIcon} alt="adicionar" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>4:20</td>
              </tr>
            ))}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
