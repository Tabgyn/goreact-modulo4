import React from 'react';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import { Container, Header, SongList } from './styles';

const Playlist = () => (
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

export default Playlist;
