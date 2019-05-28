import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  // static propTypes = {
  //   getPlaylistDetailsRequest: PropTypes.func.isRequired,
  //   playlistDetails: PropTypes.shape({
  //     data: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number,
  //         title: PropTypes.string,
  //         author: PropTypes.string,
  //         album: PropTypes.string,
  //         file: PropTypes.string,
  //         thumbnail: PropTypes.string,
  //         playlistId: PropTypes.number,
  //       }),
  //     ),
  //     loading: PropTypes.bool,
  //   }).isRequired,
  // };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { getPlaylistDetailsRequest, match } = this.props;
    const { id } = match.params;

    getPlaylistDetailsRequest(id);
  };

  render() {
    const { playlistDetails } = this.props;
    return (
      <Container>
        <Header>
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
            alt="Playlist"
          />

          <div>
            <span>PLAYLIST</span>
            <h1>My Playlist</h1>
            <p>10 musics</p>

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
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="adicionar" />
              </td>
              <td>Nome da música</td>
              <td>Nome da banda</td>
              <td>Nome do album</td>
              <td>4:20</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
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
